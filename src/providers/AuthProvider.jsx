import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null);

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword( auth , email , password);
    }


    const signInUser = ( email , password) => {
        return signInWithEmailAndPassword(auth , email , password);
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            console.log("inside Auth Changed ", currentUser);
            setUser(currentUser);
        });

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}