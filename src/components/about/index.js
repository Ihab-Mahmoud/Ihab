import React, { useEffect, useState } from 'react'
import "./index.scss"
import Animatedletters from '../animated-letters'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJsSquare, faGitAlt, faReact,faNode } from "@fortawesome/free-brands-svg-icons";
import Loader from 'react-loaders';

const About = () =>
{
    const [className, setClassName] = useState("text-animate")



    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            setClassName("text-animate-hover")
        }, 4000);
        return () => clearTimeout(timer);
    }, [])
    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <Animatedletters
                strArray={[`A`, `b`, `o`, `u`, `t`, ``, `M`, `e`]}
                letterClass={className}
                idx={15}
              />
            </h1>
            <p>
              I'm a very ambitious Web Developer looking for a role in an
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>
            <p align="LEFT">
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a
              passionate about work and know how to get the job done, a sports
              fanatic, and tech-obsessed!!!
            </p>
          </div>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faNode} color="#88c249" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    );
}

export default About