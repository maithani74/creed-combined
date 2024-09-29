import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Logo from "../../public/Logo-SVG.png";
import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import { WhatsApp } from "@mui/icons-material";
const Footer = () => {
  const FlyoutLink = ({ children, href }) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit"
      >
        <Link to={href} className="relative text-white">
          {children}
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: open ? "left" : "right",
              height: "0.05rem",
            }}
            className="absolute -bottom-0.5 -left-0 -right-1 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out"
          />
        </Link>
      </div>
    );
  };
  return (
    <div>
      <footer className="footer footer--border-top ">
        <div className="footer__content-top page-width">
          <div className="grid">
            <div className="grid__item footer__content-left footer__content-left--alt">
              <div
                style={{ display: "flex" }}
                className="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet"
              >
                <div className="grid__item accordion footer-block ">
                  <p className="h4 accordion__title"></p>

                  <div className="footer-block__details-content footer-block-image left">
                    <Link to={"/"} aria-label="Home">
                      <h1
                        style={{
                          fontSize: "23px",
                          color: "#40BFFF",
                          marginTop: "19px",
                          fontWeight: "bold",
                        }}
                      >
                        CREED
                      </h1>
                    </Link>
                    <p
                      className="caption-large "
                      style={{ color: "white !important", fontWeight: "300" }}
                    >
                      Since our inception in 2022, CREED has adhered to a
                      singular principle: create exceptional experiences
                      centered around you. We specialize in providing a diverse
                      range of bottles, including baby feeding bottles,
                      single-wall bottles, and double-wall bottles. Our
                      commitment is to fuse innovation, quality, and thoughtful
                      design into every product we offer.
                    </p>
                  </div>
                </div>

                <div className="accordion footer-block grid__item footer-block--menu">
                  <div className="center-content">
                    <p
                      className="h4 accordion__title"
                      style={{ fontSize: "23px", color: "#40BFFF" }}
                    >
                      Products
                    </p>
                    <ul
                      className="footer-block__details-content list-unstyled"
                      style={{ color: "white !important", fontWeight: "300" }}
                    >
                      <li>
                        <a
                          href="/smartwatch"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Single Wall Bottles</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/earphones"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Double Wall Bottles</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/speakers"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Baby Feeding Bottles</FlyoutLink>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion footer-block grid__item footer-block--menu">
                  <div className="center-content">
                    <p
                      className="accordion__title h4"
                      style={{ fontSize: "23px", color: "#40BFFF" }}
                    >
                      Company
                    </p>

                    <ul
                      className="footer-block__details-content list-unstyled"
                      style={{ color: "white !important", fontWeight: "300" }}
                    >
                      <li>
                        <span className="link list-menu__item list-menu__item--link">
                          <FlyoutLink href="/aboutus">Our Story</FlyoutLink>
                        </span>
                      </li>
                      <li>
                        <span className="link list-menu__item list-menu__item--link">
                          <FlyoutLink href="/">Corporate Orders</FlyoutLink>
                        </span>
                      </li>
                      <li>
                        <span className="link list-menu__item list-menu__item--link">
                          <FlyoutLink href="/career">Careers</FlyoutLink>
                        </span>
                      </li>
                      <li>
                        <span className="link list-menu__item list-menu__item--link">
                          <FlyoutLink href="https://wa.me/+917017106645?text=https://www.pebblecart.com/%0a%0aHi! I need some help.">
                            Contact Us
                          </FlyoutLink>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion footer-block grid__item footer-block--menu">
                  <div className="center-content">
                    <p
                      className="accordion__title h4"
                      style={{ fontSize: "23px", color: "#40BFFF" }}
                    >
                      SUPPORT
                    </p>
                    <ul
                      className="footer-block__details-content list-unstyled"
                      style={{ color: "white !important", fontWeight: "300" }}
                    >
                      <li>
                        <button
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Register Product Warranty</FlyoutLink>
                        </button>
                      </li>
                      <li>
                        <button
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Raise Warranty Complaint</FlyoutLink>
                        </button>
                      </li>
                      <li>
                        <button
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>FAQs</FlyoutLink>
                        </button>
                      </li>
                      <li>
                        <button
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Warranty Policy</FlyoutLink>
                        </button>
                      </li>
                      <li>
                        <button
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>
                            Replacement &amp; Refund Policy
                          </FlyoutLink>
                        </button>
                      </li>
                      <li>
                        <button
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Shipping Policy</FlyoutLink>
                        </button>
                      </li>
                      <li>
                        <button
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Privacy Policy</FlyoutLink>
                        </button>
                      </li>
                      <li>
                        <button
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>E-waste Policy</FlyoutLink>
                        </button>
                      </li>
                      <li>
                        <button
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Terms of Service</FlyoutLink>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid__item footer__content-right">
              <div className="grid__item footer__content-right">
                <div className="grid">
                  <div className="grid_item">
                    <p
                      className="h4 accordion__title"
                      style={{ fontSize: "23px", color: "#40BFFF" }}
                    >
                      GET IN TOUCH
                    </p>
                    <div
                      className="footer-block__details-content"
                      style={{ color: "white !important", fontWeight: "300" }}
                    >
                      <div className="footer-block__newsletter">
                        <div className="footer__newsletter_content typeset rte">
                          <p>
                            1/139, Shivalik Ganga Vihar, Roshnabad Haridwar, Uttrakhand, India
                            – 249430
                          </p>
                          <p>
                            Email:{" "}
                            <a
                              href="mailto:info.c@thpl.co.in"
                              title="mailto:info.c@thpl.co.in"
                            >
                              info.c@thpl.co.in
                            </a>
                            <br />
                            Phone:{" "}
                            <a
                              href="tel:+91-9258299161 "
                              title="tel:+91-9258299161 "
                            >
                              +91-9258299161{" "}
                            </a>{" "}
                            <br />
                            Mon-Sun: 10:00AM - 7:00PM
                          </p>
                        </div>
                        <form
                          method="post"
                          id="ContactFooter"
                          acceptCharset="UTF-8"
                          className="footer__newsletter newsletter-form"
                        >
                          <input
                            type="hidden"
                            name="form_type"
                            value="customer"
                          ></input>
                          <input type="hidden" name="utf8" value="✓"></input>
                          <p
                            style={{ fontSize: "15px", fontWeight: "bolder" }}
                            className="newsletter-form-heading"
                          >
                            Subscribe to Our Newsletter{" "}
                          </p>
                          {/* <input
                            type="hidden"
                            name="contact[tags]"
                            value="newsletter"
                          /> */}

                          <div className="field">
                            <input
                              id="ContactFooter-email"
                              type="email"
                              name="contact[email]"
                              className="field__input required"
                              aria-required="true"
                              autoCorrect="off"
                              autoCapitalize="none"
                              autoComplete="email"
                              placeholder="Your Email Address"
                              required=""
                              style={{ color: "white" }}
                            ></input>
                            <button
                              type="submit"
                              className="button "
                              name="commit"
                              aria-label="Subscribe"
                            >
                              Subscribe
                            </button>
                          </div>
                          <div className="typeset rte"></div>
                          <div className="bottom-cta-wrapper">
                            <a className="button2" href="">
                              Register Your Product
                            </a>
                          </div>
                        </form>
                      </div>
                      <p className="h4 accordion__title"></p>
                      <ul
                        className="footer__list-social list-unstyled list-social"
                        role="list"
                      >
                        <li className="list-social__item">
                          <a
                            target="_blank"
                            rel="noopener"
                            href=""
                            className="list-social__link link link--text link-with-icon"
                            aria-describedby="a11y-external-message"
                          >
                            <div className="icon">
                              <FacebookIcon className="icon" />
                            </div>
                            {/* <span className="visually-hidden">Facebook</span> */}
                          </a>
                        </li>
                        <li className="list-social__item">
                          <a
                            target="_blank"
                            rel="noopener"
                            href="https://www.instagram.com/creed_bottles?igsh=MWpjb3Zramtkcm0wNg%3D%3D&utm_source=qr"
                            className="list-social__link link link--text link-with-icon"
                            aria-describedby="a11y-external-message"
                          >
                            <div className="icon">
                              <InstagramIcon className="icon" />
                            </div>
                            {/* <span className="visually-hidden">Instagram</span> */}
                          </a>
                        </li>
                        <li className="list-social__item">
                          <a
                            target="_blank"
                            rel="noopener"
                            href=""
                            className="list-social__link link link--text link-with-icon"
                            aria-describedby="a11y-external-message"
                          >
                            <div className="icon">
                              <LinkedInIcon className="icon" />
                            </div>
                            {/* <span className="visually-hidden">LinkedIn</span> */}
                          </a>
                        </li>
                        <li className="list-social__item">
                          <a
                            target="_blank"
                            rel="noopener"
                            href="https://wa.me/message/6TNXLS2AH6SHO1"
                            className="list-social__link link link--text link-with-icon"
                            aria-describedby="a11y-external-message"
                          >
                            <div className="icon">
                              <WhatsApp className="icon" />
                            </div>
                            {/* <span className="visually-hidden">YouTube</span> */}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__content-bottom">
          <div className="footer__content-bottom-wrapper page-width">
            <div className="footer__column footer__column--info">
              <div
                style={{ display: "flex", gap: "10px" }}
                className="footer__copyright"
              >
                <div
                  style={{ display: "flex", gap: "10px" }}
                  className="copyright__content"
                >
                  &copy; 2024,{" "}
                  <a href="https://www.linkedin.com/in/robin-rathore-833863238">
                    Creed
                  </a>
                  . All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
