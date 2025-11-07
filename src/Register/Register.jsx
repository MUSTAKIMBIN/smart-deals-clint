import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contex/AuthContext";

const Register = () => {
  const { signInWithGoogle } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageUrl = form.imageUrl.value;
    console.log(name, email, password, imageUrl);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center   bg-base-200">
      <div className="card  bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-2">Register Now!</h2>
        <Link to={"/login"}>
          <p className="text-center text-sm mb-4">
            Already have an account?{" "}
            <span
              href="#"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login Now
            </span>
          </p>
        </Link>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

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

          <div>
            <label className="label">
              <span className="label-text font-medium">Image URL</span>
            </label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
            />
          </div>

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
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Register
          </button>
        </form>

        <div className="divider my-4">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign Up With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
