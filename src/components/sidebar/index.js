import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import React, { useState } from "react";
import LogoS from "../../assets/images/IH.png";
import LogoSubtitle from "../../assets/images/IHAB.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faLayerGroup,
  faClose,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="subtitle" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          exact="true"
          activeclassname="avtive"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className="about-link"
          activeclassname="avtive"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className="contact-link"
          activeclassname="avtive"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className="portfolio-link"
          activeclassname="avtive"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faLayerGroup} color="#4d4d4e" />
        </NavLink>

        <FontAwesomeIcon
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
          onClick={() => setShowNav(false)}
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ihab-ayman-mahmoud-7a38111aa/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/Ihab-Mahmoud"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/ihab_hakem/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ihab-ayman-mahmoud-7a38111aa/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
        onClick={() => setShowNav(!showNav)}
      />
    </div>
  );
};

export default Sidebar;
