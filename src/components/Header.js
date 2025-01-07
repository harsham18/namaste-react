import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="heading">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
