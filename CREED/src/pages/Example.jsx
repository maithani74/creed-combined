import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Example = () => {
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 300,
    });
  }, []);

  return (
    <div
      style={{
        fontSize: "13px",
        display: "flex",
        alignItems: "center",
        zIndex: "99",
      }}
      className="flex mr-20 font-medium py-0 pb-3"
    >
      <FlyoutLink FlyoutContent={PricingContent}>BOTTLES</FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a className="relative text-black">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: showFlyout ? "left" : "right",
            height: "0.05rem",
          }}
          className="absolute -bottom-0 -left-0 -right-1 origin-left scale-x-0 bg-black transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div
      style={{ zIndex: "999 !important" }}
      className="w-64 bg-white p-6 shadow-xl"
    >
      <div className="mb-3 space-y-3">
        <a
          data-aos="fade-up"
          href="/category/double-wall-bottles"
          className="block text-sm hover:underline"
        >
          Double Wall Bottles
        </a>
        <a
          style={{ marginTop: "12px" }}
          data-aos="fade-up"
          href="/category/cooper-bottles"
          className="block text-sm hover:underline"
        >
          Cooper Bottles
        </a>
      </div>
      <div data-aos="fade-up" className="mb-6 space-y-3">
        <a
          href="/category/baby-feeding-bottles"
          className="block text-sm hover:underline"
        >
          Baby Feeding Bottles
        </a>
      </div>
      <Link to={"/products"}>
        <button
          data-aos="fade-up"
          className="w-full rounded-lg border-2 border-neutral-900 px-4 py-2 font-semibold transition-colors hover:bg-DarkColor hover:text-white"
        >
          View All
        </button>
      </Link>
    </div>
  );
};

export default Example;

