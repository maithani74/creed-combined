import "../../src/index.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

const ParallaxText = ({ children, baseVelocity = 500 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Faster spring and reduced damping for a snappier effect
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30, // Reduced damping for faster response
    stiffness: 800, // Increased stiffness for a snappier scroll
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 300], [0, 10], {
    clamp: false,
  });

  // Increase the wrapping range to avoid frequent restarts
  const x = useTransform(baseX, (v) => `${wrap(-200, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 500);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax-section">
      <motion.div className="scroller" style={{ x }}>
        {/* Repeat the text multiple times for continuous scrolling */}
        {[...Array(20)].map((_, i) => (
          <span key={i}>{children}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxText;
