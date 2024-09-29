import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import google from "../../assets/google.webp";
import Logo from "../../assets/CREED.svg";
import PrimaryButton from "../../components/common/Buttons/PrimaryButton";
import { useDispatch } from "react-redux";
import { login } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { setToken, setLoading } from "../../slices/authSlice";
import axios from "axios";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;
  function handleOnChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }
  function handleLogin(e) {
    e.preventDefault();
    const { email, password } = { ...formData };
    //api call to backend for creating user sessison
    dispatch(login(email, password, navigate));
    setFormData({
      email: "",
      password: "",
    });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full sm:h-[100%] max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-center">
          {/* Logo */}
          <img
            src={Logo} // Replace this with the actual logo path
            alt="CREED"
            className="h-24"
          />
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Welcome to CREED
        </h2>
        <p className="text-center text-gray-600">Sign in to continue</p>

        <form method="POST" onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg">
              <span className="px-3 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 7.5l-9 6-9-6m18 0v9a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 16.5v-9m20.25 0L12 13.5l-9-6"
                  />
                </svg>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 outline-none"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative flex items-center border-2 border-gray-300 rounded-lg">
              <span className="px-3 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V7.875a4.875 4.875 0 10-9.75 0V10.5m-2.25 0H18.75M5.25 10.5h13.5a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-6a2.25 2.25 0 012.25-2.25z"
                  />
                </svg>
              </span>
              <input
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                type={showPassword ? "text" : "password"}
                onChange={handleOnChange}
                required
                className="w-full px-4 py-2 outline-none"
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
          </div>

          {/* Sign In Button */}
          <PrimaryButton type="submit">Sign In</PrimaryButton>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-4">
          <div className="w-full border-t border-gray-300"></div>
          <span className="px-4 text-gray-600">OR</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* Login with Google and Facebook
        <div className="space-y-3">
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <img src={google} alt="Google logo" className="w-5 h-5 mr-3" />
            Login with Google
          </button>

          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook logo"
              className="w-5 h-5 mr-3"
            />
            Login with Facebook
          </button>
        </div>
        */}

        {/* Forgot Password and Register */}
        <div className="text-center text-sm text-gray-600">
          <a
            href="/forgot-password"
            className="text-SecondaryColor hover:underline"
          >
            Forgot Password?
          </a>
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-SecondaryColor hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
