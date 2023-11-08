import React, { useEffect, useState } from "react";
import "./index.scss";
import Animatedletter from "../animated-letters/index";

import portfolioData from "../../data/portfolio.json";
import Loader from "react-loaders";

const Portfolio = () => {
  const [className, setClassName] = useState("text-animate");
  console.log(portfolioData.Portfolio);
  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName("text-animate-hover");
    }, 3000);

    return () => timer;
  }, []);
  const RenderPortfolio = (data) => {
    return (
      <div className="images-container">
        {data.map((image, idx) => {
          return (
            <div key={image.title} className="image-box">
              <img
                src={image.cover}
                alt={image.title}
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{image.title} </p>
                <h4 className="description">{image.description}</h4>
                {image.url !== "" && (
                  <button
                    style={{
                      marginRight: "10px",
                    }}
                    className="btn"
                    onClick={() => window.open(image.url)}
                  >
                    Live Site
                  </button>
                )}
                {image.source !== "" && (
                  <button
                    style={{
                      marginRight: "10px",
                    }}
                    className="btn"
                    onClick={() => window.open(image.source)}
                  >
                    Source Code
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="portfolio-page container">
        <h1 className="page-title">
          <Animatedletter
            strArray={[`P`, `o`, `r`, `t`, `f`, `o`, `l`, `i`, `o`]}
            idx={15}
            letterClass={className}
          />
        </h1>
        <div>{RenderPortfolio(portfolioData.Portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
