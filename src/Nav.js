import React, { useState, useEffect } from "react";

import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        }
        alt="Netflix logo"
      />

      <img
        className="nav__avatar"
        src={
          "https://occ-0-4369-185.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABZJtoW2jwHhSylfOIPMWwUzrMpNpcIiTCqiwmMftwmFi4LoYfbj6OVSakd5zEjbcYRaM1VyrO_QiKqoS1CM-omHOpeF6.png?r=cea"
        }
        alt="netflix logo"
      />
    </div>
  );
}

export default Nav;
