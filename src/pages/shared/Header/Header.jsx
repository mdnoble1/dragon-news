import moment from "moment/moment";
import logo from "../../../assets/logo.png"

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto mt-12 mb-5 w-11/12 md:w-fit" src={logo} alt="" />
            <p className="text-lg text-gray-400">Journalism Without Fear or Favour</p>
            <p className="text-xl mt-2 mb-7">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;