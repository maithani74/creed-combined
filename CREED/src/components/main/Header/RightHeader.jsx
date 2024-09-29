import { Link } from "react-router-dom";
import whatsapp from "../../../assets/whatsapp.png";
import { MdDashboardCustomize } from "react-icons/md";
import ProfileDropdown from "../../common/ProfileDropdown";
import { useSelector } from "react-redux";
// import Userx from "../../src/assets/user.png";
import Userx from "../../../assets/user.png"
const RightHeader = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const userImage =
    user && `https://api.dicebear.com/5.x/initials/svg?seed=${user.name}`;

  return (
    <div className="header-right items-center flex space-x-10">
      <Link
        href="https://wa.me/message/6TNXLS2AH6SHO1"
        className="w-8 h-8 search-icon hover:w-6.5 h-6.5 hover:transform hover:scale-110 transition-transform duration-200 ease-in"
      >
        <img src={whatsapp} alt="whatsapp" />
      </Link>
      {user != null && token != null ? (
        <ProfileDropdown user={{ ...user, image: userImage }} token={token} />
      ) : (
        <>
          <Link
            to={"/login"}
            className="w-6 h-6 search-icon hover:w-6.5 h-6.5 hover:transform hover:scale-110 transition-transform duration-200 ease-in"
          >
            {/* Login image */}
            <img src={Userx} alt="" />
          </Link>

         
        </>
      )}
      {/* <Cart/> */}
      {/* <a href="#" className="w-6 h-6 search-icon hover:w-6.5 h-6.5 hover:transform hover:scale-110 transition-transform duration-200 ease-in"><img src={cart} alt="whatsapp" /><Cart/></a> */}
    </div>
  );
};

export default RightHeader;
