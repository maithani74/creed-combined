import { Link, useLocation } from "react-router-dom";

export default function CommingSoon() {
  const location = useLocation();
  return (
    <>
      <div className="text-6xl font-bold text-black/[0.8]">Coming Soon...</div>
      {location.pathname != "/" && (
        <Link to="/">
          <button className="my-2 bg-SecondaryColor/[0.6] text-black hover:text-black/[0.8] px-5 py-2 rounded-md">
            Go Back
          </button>
        </Link>
      )}
    </>
  );
}
