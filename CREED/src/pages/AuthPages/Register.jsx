import { useState } from "react";
import Logo from "../../assets/CREED.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import PrimaryButton from "../../components/common/Buttons/PrimaryButton";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignupData } from "../../slices/authSlice.js";
import { sendOtp } from "../../services/auth.service.js";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = formData;
  function handleOnChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }
  function handleRegister(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const signupData = { ...formData };
    // services
    dispatch(setSignupData(signupData));
    dispatch(sendOtp(formData.email, navigate));
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full sm:h-[100%] max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-center">
          {/* Logo */}
          <img src={Logo} alt="CREED" className="h-24" />
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Let’s Get Started
        </h2>
        <p className="text-center text-gray-600">Create a new account</p>

        <form method="POST" className="space-y-4" onSubmit={handleRegister}>
          {/* Full Name Input */}
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Full Name
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
                    d="M15.75 9A6.75 6.75 0 1112 2.25 6.75 6.75 0 0115.75 9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 21.75a5.25 5.25 0 00-10.5 0"
                  />
                </svg>
              </span>
              <input
                id="fullName"
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 outline-none"
                value={name}
                onChange={handleOnChange}
              />
            </div>
          </div>

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
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 outline-none"
                onChange={handleOnChange}
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
            <div className="flex relative items-center border-2 border-gray-300 rounded-lg">
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
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                required
                className="w-full px-4 py-2 outline-none"
                onChange={handleOnChange}
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

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Confirm Password
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
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Password Again"
                required
                value={confirmPassword}
                className="w-full px-4 py-2 outline-none"
                type={showConfirmPassword ? "text" : "password"}
                onChange={handleOnChange}
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
          </div>

          {/* Sign Up Button */}
          <PrimaryButton type="submit">Sign Up</PrimaryButton>
        </form>

        {/* Already have an account */}
        <div className="text-center text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-SecondaryColor hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
