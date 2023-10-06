import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get("password"));
    }

  return (
    <div className="bg-gray-100 h-screen pt-6 lg:pt-12">
        <Navbar></Navbar>
      <div className="lg:w-1/2 mx-auto py-20 lg:py-32 bg-white rounded-md mt-12">
        <h2 className="font-semibold text-4xl text-[#403F3F] text-center mb-12">
          Login Your Account
        </h2>
        <div className="border border-gray-200 lg:w-1/2 mx-auto mb-6"></div>
        <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto">
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
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-sm font-semibold text-xl normal-case text-white bg-[#403F3F] hover:opacity-60 hover:bg-slate-800">
              Login
            </button>
          </div>
        </form>
        <div>
          <p className="font-semibold text-[#403F3F] text-center">
            Don’t Have An Account ?{" "}
            <Link to="/register" className="text-red-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
