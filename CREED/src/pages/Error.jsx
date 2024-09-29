import { Link } from "react-router-dom";
import PrimaryButton from "../components/common/Buttons/PrimaryButton";

export default function Error() {
  return (
    <div className="flex bg-white justify-center min-h-screen items-center">
      <div className="gap-2 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-ExtraDarkColor">404 Error</p>
          <p className="text-sm text-LightPrimaryColor">Page not found</p>
        </div>
        <Link to="/">
          <PrimaryButton styles="text-xl w-[300px]">Back To Home</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
