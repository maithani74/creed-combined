import { useState } from "react";
import OtpInput from "react-otp-input";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/common/Buttons/PrimaryButton";
import { sendOtp, signUp } from "../services/auth.service";

export default function VerifyEmail() {
  const { signupData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      ...signupData,
      otp,
    };
    dispatch(signUp(data, navigate));
    setOtp("");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg sm:flex sm:flex-col sm:pt-[30%] sm:w-[100%] sm:h-[100%] ">
        <h1 className="text-SecondaryColor font-semibold text-[1.875rem] leading-[2.375rem]">
          Verify Email
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
          A verification code has been sent to you. Enter the code below{" "}
        </p>
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => (
              <input
                {...props}
                placeholder=" "
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[48px] lg:w-[60px] border border-SecondaryColor rounded-[0.3rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
              />
            )}
            containerStyle={{
              justifyContent: "space-between",
              gap: "0 1rem",
            }}
          />
          <PrimaryButton>Proceed</PrimaryButton>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/register">
              <p className="text-LightPrimaryColor flex items-center gap-x-2">
                <BiArrowBack /> Back{" "}
              </p>
            </Link>
            <button
              className="flex items-center text-SecondaryColor gap-x-2"
              onClick={() => dispatch(sendOtp(signupData.email, navigate))}
            >
              <RxCountdownTimer /> Resend it
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
