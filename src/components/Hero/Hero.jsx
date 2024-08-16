import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";

import avatar from '/hero/avatar.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`hero vh-100 d-flex align-items-center justify-content-center ${
        isVisible ? "fade-in" : ""
      }`}
    >
      <div className="container text-center">
        <img src={avatar} alt="Memoji of me | From Apple Iphone" className="img-fluid" />
        <h1 className="mt-5">Hi! I'm Mehmet.</h1>
        <h4 className="mt-5">
          <ReactTyped
            strings={[
              "Junior web developer focused on creating custom websites for businesses and individuals.",
            ]}
            typeSpeed={30}
            startDelay={500}
            cursorChar="|"
          />
        </h4>
      </div>
    </section>
  );
};

export default Hero;
