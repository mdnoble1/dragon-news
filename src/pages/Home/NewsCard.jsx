import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import Rating from "react-rating";

/* eslint-disable react/prop-types */
const NewsCard = ({ news }) => {
  const { title, image_url, details, _id, author, total_view , rating} = news;

  const date = JSON.stringify(author.published_date);

  const dateStr = date.slice(1, 11);

  return (
    <div className="border border-gray-200 rounded-md mb-5">
      <div className="flex justify-between items-center bg-gray-200 p-6 rounded-t-md">
        <div className="flex items-center gap-4">
          <img className="w-12 rounded-full" src={author.img} alt="" />
          <div>
            <h4 className="font-semibold text-[#403F3F] mb-1">{author.name}</h4>
            <p className="text-sm text-[#706F6F]">{dateStr}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-2xl hover:cursor-pointer">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </div>
      <div className="px-6">
        <h2 className="font-bold text-xl text-[#403F3F] my-5">{title}</h2>
        <img className="w-full mb-8" src={image_url} alt="" />
        {details.length > 200 && (
          <p className="font-semibold  text-[#706F6F]">
            {details.slice(0, 200)} ...
          </p>
        )}
        <Link to={`/news/${_id}`} className="font-semibold text-[#FF8C47]">
          Read More
        </Link>
        <div className="my-6">
          <hr />
        </div>
      </div>
      <div className="flex justify-between items-center px-6 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Rating
              emptySymbol={<FaRegStar className="text-[#FF8C47] text-2xl"></FaRegStar>}
              fullSymbol={<FaStar className="text-[#FF8C47] text-2xl"></FaStar>}
              initialRating={rating.number}
              readonly
            />
            <p className="font-medium text-[#706F6F]">{rating.number}</p>
          </div>
        </div>
        <div className="font-semibold text-[#706F6F] text-xl flex items-center gap-2">
          <FaEye></FaEye>
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
