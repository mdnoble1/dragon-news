import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get("password"));
    }


  return (
    <div className="bg-gray-100 max-h-fit pt-6 pb-16 lg:pt-12">
      <Navbar></Navbar>
      <div className="lg:w-1/2 mx-auto py-20 lg:py-32 bg-white rounded-md mt-12">
        <h2 className="font-semibold text-4xl text-[#403F3F] text-center mb-12">
          Register Your Account
        </h2>
        <div className="border border-gray-200 lg:w-1/2 mx-auto mb-6"></div>
        <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-[#403F3F]">
                Your Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered rounded-sm bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-[#403F3F]">
                Photo URL
              </span>
            </label>
            <input
              name="photo"
              type="url"
              placeholder="Give Your Photo URL"
              className="input input-bordered rounded-sm bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-[#403F3F]">
                Email Address
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
              className="input input-bordered rounded-sm bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-[#403F3F]">
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered rounded-sm bg-gray-100"
              required
            />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <input type="checkbox" name="terms" id="" />
            <p>Accept Term & Conditions</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-sm font-semibold text-xl normal-case text-white bg-[#403F3F] hover:opacity-60 hover:bg-slate-800">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
