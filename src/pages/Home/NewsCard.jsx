import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCard = ( {news} ) => {

    const { title, image_url , details , _id} = news;

    return (
        <div>
            <div></div>
            <div>
                <h2 className="font-bold text-xl text-[#403F3F] mb-5">{title}</h2>
                <img className="w-full mb-8" src={image_url} alt="" />
                {
                    details.length > 200 && <p className="font-semibold  text-[#706F6F]">{details.slice(0 , 200)} ...</p>
                }
                <Link to={`/news/${_id}`} className="font-semibold text-[#FF8C47]">Read More</Link>
                <div className="my-6">
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default NewsCard;