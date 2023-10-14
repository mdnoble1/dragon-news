import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsDetailCard = ( { data } ) => {

    const { image_url , title , details } = data || {};

    

    return (
        <div className="border border-gray-200 rounded-md p-6">
            <img className="w-full" src={image_url} alt="" />
            <h2 className="font-bold text-2xl text-[#403F3F] my-5">{title}</h2>
            <p className="text-[#706F6F] mb-10">{details}</p>
            <Link to="/"><button className="bg-[#D72050] px-4 py-2 font-medium text-xl text-white flex items-center gap-2"><FaArrowLeft></FaArrowLeft><span>All News in This Category</span></button></Link>
        </div>
    );
};

export default NewsDetailCard;