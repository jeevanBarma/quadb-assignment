import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <nav className="header-main-container">
      <div className="logo-container">
        <Link className="header-link" to="/">
          <p className="logo-name">JobSearch</p>
        </Link>
      </div>
      <ul className="header-ul">
        <Link className="header-link" to="/">
          <li className="header-li">Home</li>
        </Link>
        <li className="header-li">
          <button className="logout-button" type="button" onClick={onClickBtn}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
