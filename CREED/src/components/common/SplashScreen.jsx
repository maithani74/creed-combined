import React, { useEffect } from 'react';
import './SplashScreen.css';  // Link to the CSS file
import C from "../../assets/C.svg"
import R from "../../assets/R.svg"
import EED from "../../assets/EED.svg"
const SplashScreen = () => {
  useEffect(() => {
    let intro = document.querySelector('.intro');
    let logoSpan = document.querySelectorAll('.logo');

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 50);
        });
      }, 2000);

      setTimeout(() => {
        intro.style.top = '-100vh'; // Animate the screen out after 2.3s
      }, 2300);
    }, 0);
  }, []);

  return (
    <div className="intro">
        <img className="logo" src={C} alt="C" />
        <img className="logo" src={R} alt="R" />
        <img className="logo" src={EED} alt="EED" />
    </div>
  );
};

export default SplashScreen;
