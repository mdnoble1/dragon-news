import { FaGithub, FaGoogle } from 'react-icons/fa';

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
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default RightSideNav;
