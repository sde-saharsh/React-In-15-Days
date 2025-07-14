import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    backgroundColor: "#1f1f1f",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  const handleHover = (e) => {
    e.target.style.color = "#f4c542";
  };

  const handleLeave = (e) => {
    e.target.style.color = "white";
  };

  return (
    <>
    <div style={navStyle}>
      <Link
        to="/"
        style={linkStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        Home
      </Link>

      <Link
        to="/about"
        style={linkStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        About
      </Link>

      <Link
        to="/contact"
        style={linkStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        Contact
      </Link>

      <Link
        to="/user/profile"
        style={linkStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        Profile
      </Link>
      <Link
        to="/college"
        style={linkStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        College
      </Link>
    </div>
    <Outlet/>
    </>
  );
};

export default Nav;
