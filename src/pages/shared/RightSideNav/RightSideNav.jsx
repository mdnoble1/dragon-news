import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* login section  */}
      <div className="px-4 py-2">
        <h2 className="font-bold text-2xl mb-8">Login With</h2>
        <button className="btn btn-outline w-full hover:text-blue-500 mb-2">
            <FaGoogle></FaGoogle>Login With Google</button>
        <button className="btn btn-outline w-full hover:text-red-500">
            <FaGithub></FaGithub>Login With Github</button>
      </div>
      {/* find us section  */}
      <div className="px-4 py-2 mt-12">
        <h2 className="font-bold text-2xl mb-8">Find Us On</h2>
        <a href="" className='font-medium text-lg flex items-center gap-2 border border-gray-600 rounded-t-lg px-6 py-4'><FaFacebook></FaFacebook>Facebook</a>
        <a href="" className='font-medium text-lg flex items-center gap-2  border-gray-600 border-x px-6 py-4'><FaTwitter></FaTwitter>Twitter</a>
        <a href="" className='font-medium text-lg flex items-center gap-2 border border-gray-600 rounded-b-lg px-6 py-4'><FaInstagram></FaInstagram>Instagram</a>
      </div>
      {/* Q zone section  */}
      <div className="px-6 py-10 mt-4 bg-gray-300 rounded-lg">
        <h2 className="font-bold text-3xl mb-8">Q Zone</h2>
        <img className='w-full mb-8' src={qzone1} alt="" />
        <img className='w-full mb-8' src={qzone2} alt="" />
        <img className='w-full' src={qzone3} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default RightSideNav;
