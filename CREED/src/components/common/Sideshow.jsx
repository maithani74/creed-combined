import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "../../styles/Carousel.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/Slider1.png"
import img2 from "../../assets/Slider2.png"
import img3 from "../../assets/Slider3.png"
import img4 from "../../assets/Slider4.png"
import img5 from "../../assets/Slider5.png"


const viewPortWidth = window.innerWidth;
const imgs =
      [
        img1,
        img2,
        img3,
        img4,
        img5
      ]
    ;

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 4;
const DRAG_BUFFER = 10;

// const SPRING_OPTIONS = {
//   type: "spring",
//   mass: 3,
//   stiffness: 400,
//   damping: 50,
// };

const TWEEN_OPTIONS = {
  type: "tween",
  duration: 0.4,
  ease: "easeInOut",
};

const Sideshow = () => {
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  }, []);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative  overflow-hidden pt-[20px] sm:pt-[50px] py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={TWEEN_OPTIONS}
        onDragEnd={onDragEnd}
        className=" flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            data-aos="zoom-out"
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={TWEEN_OPTIONS}
            className="Slider-width md:h-[800px] aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="-mt-12 absolute flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-[100%] w-[100%] rounded-full transition-colors ${
              idx === imgIndex ? "bg-white" : "bg-white-custom"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[100%] max-w-[100%] " />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[100%] max-w-[100%] " />
    </>
  );
};

export default Sideshow;
