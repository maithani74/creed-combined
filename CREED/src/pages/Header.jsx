import React, { useState } from "react";
import "../styles/Header.scss";
import Example from "./Example";
import RightHeader from "../components/main/Header/RightHeader";
import { BarChart, BarChart3 } from "lucide-react";
import Sidebar from "../components/common/Sidebar";
import TocIcon from "@mui/icons-material/Toc";
import { Link } from "react-router-dom";
import Logo from "../assets/CREED.svg";

const FlyoutLink = ({ children, href }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to={href} className="relative text-black">
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: open ? "left" : "right",
            height: "0.05rem",
          }}
          className="absolute -bottom-0 -left-0 -right-1 origin-left scale-x-0 bg-black transition-transform duration-300 ease-out"
        />
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <header className="flex items-center">
          <div className="header-left">
            <Link to="/">
              <img className="w-[100px]" draggable={false} src={Logo} alt="" />
            </Link>
          </div>
          <div className="header-center">
            <nav className="flex items-center header__inline-menu">
              <ul
                className="flex items-center list-menu list-menu--inline"
                role="list"
              >
                <div style={{ zIndex: "99" }}>
                  <Example />
                </div>
                <li>
                  <dropdown-menu className="">
                    <span className="header__menu-item header__menu-item--top list-menu__item focus-inset">
                      <FlyoutLink href="/allProducts">
                        <span className="label">PRODUCTS</span>
                      </FlyoutLink>
                    </span>
                  </dropdown-menu>
                </li>
                <li>
                  <dropdown-menu className="">
                    <span className="header__menu-item header__menu-item--top list-menu__item focus-inset">
                      <FlyoutLink href="/aboutus">
                        <span className="label">ABOUT US</span>
                      </FlyoutLink>
                    </span>
                  </dropdown-menu>
                </li>
                <li>
                  <dropdown-menu className="">
                    <span className="header__menu-item header__menu-item--top list-menu__item focus-inset">
                      <FlyoutLink href="/career">
                        <span className="label">CAREERS</span>
                      </FlyoutLink>
                    </span>
                  </dropdown-menu>
                </li>
                <li>
                  <dropdown-menu className="">
                    <span className="header__menu-item header__menu-item--top list-menu__item focus-inset">
                      <FlyoutLink href="/bulk-orders">
                        <span className="label">BULK ORDERS</span>
                      </FlyoutLink>
                    </span>
                  </dropdown-menu>
                </li>
              </ul>
            </nav>
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>

          <div className="header-right">
            <RightHeader />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
