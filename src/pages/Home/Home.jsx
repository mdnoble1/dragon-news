import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border border-red-600"><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2 border border-red-600"><h2 className="text-4xl">Ekhane News Dekhabo</h2></div>
                <div className="border border-red-600"><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;