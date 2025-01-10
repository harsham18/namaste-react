import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="heading">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
