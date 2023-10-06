import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="bg-gray-200 py-4 px-4 flex items-center">
      <button className="bg-[#D72050] px-6 py-2 font-medium text-xl text-white mr-4">
        Latest
      </button>
      <Marquee speed={100} className="font-semibold text-xl">
        <Link className="mr-12">I can be a React component, multiple React components, or just some
        text...</Link>
        <Link className="mr-12">I can be a React component, multiple React components, or just some
        text...</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
