import React, { useEffect, useRef, useState } from "react";
import pdf from "../pdf/Resume_Ori.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typeRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        "Greetings! This is my space.",
        "Hello! I'm Alis Patel.",
        "MERN stack is my expertise.",
        "I'm excited to share my journey.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typeRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typeRef}></h1>
        <a href={pdf} download="Resume download" className="custom-button my-3">
          <span className="button-text">Download Resume</span>
        </a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          {!imageLoaded && <div className="loading-spinner"></div>}
          <img
            src={`/assets/${hero.imgSrc}`}
            alt="alis"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
