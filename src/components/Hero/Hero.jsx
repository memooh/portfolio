import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";

import avatar from "/hero/avatar.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLookingForJob, setIsLookingForJob] = useState(true);

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
        <img
          src={avatar}
          alt="Memoji of me | From Apple Iphone"
          className="img-fluid"
        />
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
        {isLookingForJob ? (
          <h5 className="jobStatus mt-5">Currently looking for job opportunities</h5>
        ) : (
          <h5 className="jobStatus mt-5">Not currently seeking new opportunities</h5>
        )}
      </div>
    </section>
  );
};

export default Hero;
