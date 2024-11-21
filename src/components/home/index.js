import "./index.scss";
import LogoS from "../../assets/images/IH.H.png";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Animatedletters from "../animated-letters";
import Logo from "./Logo";
import SVG from "../../assets/images/undraw_Static_website_re_x70h .png";
import Loader from "react-loaders";
import { svg } from "leaflet";

const Home = () => {
  const [className, setClassName] = useState("text-animate");
  const nameArray = [`h`, `a`, `b`, ` `, `m`, `a`, `h`, `m`, `o`, `u`, `d`];
  const jobArray = [
    `W`,
    `e`,
    `b`,

    ` `,
    `d`,
    `e`,
    `v`,
    `e`,
    `l`,
    `o`,
    `p`,
    `e`,
    `r`,
    `.`,
  ];

  useEffect(() => {
    console.log(SVG);
    const timer = setTimeout(() => {
      setClassName(`text-animate-hover`);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="home-page container">
        <div className="text-zone">
          <h1>
            <span className="text-animate _11">H</span>
            <span className="text-animate _12">i</span>
            <br />
            <span className="text-animate _13">I</span>
            <span className="text-animate _14">`m</span>
            <img src={LogoS} alt="developer" />
            <Animatedletters
              letterClass={className}
              strArray={nameArray}
              idx={15}
            />{" "}
            <br />
            <Animatedletters
              letterClass={className}
              strArray={jobArray}
              idx={27}
            />
          </h1>
          <h2>Web Developer / Computer Engineer </h2>
          <Link to="/contact" className="flat-button">
            {" "}
            CONTACT ME
          </Link>
        </div>
        <div className="svg-conteiner">
          <img src={SVG} alt="Svg" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
