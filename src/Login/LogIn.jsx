import { parseActionCodeURL } from "firebase/auth";
import React from "react";
import { Link } from "react-router";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <Link to={"/register"}>
          <p className="text-center text-sm mb-4">
            Don’t have an account?{" "}
            <span
              href="#"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register Now
            </span>
          </p>
        </Link>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email Field */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a>
            </label>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="btn w-full mt-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none"
          >
            Sign In
          </button>
        </form>

        <div className="divider my-4">OR</div>

        {/* Google Sign-In */}
        <button className="btn btn-outline w-full flex items-center justify-center gap-2">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
