import { useLocation } from "react-router-dom";

export default function PathDisplay({ mobile = false, pc = false }) {
  const location = useLocation();
  return (
    <div
      className={`flex text-md  text-LightPrimaryColor font-bold ${!mobile && "hidden md:flex"} ${!pc && "md:hidden flex"}`}
    >
      /home
      <span className="text-SecondaryColor">{`${location.pathname == "/" ? " " : location.pathname}`}</span>
    </div>
  );
}
