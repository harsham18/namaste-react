import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInfo } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-md">
      <div className="logo-container">
        <img className="pl-2 w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-3">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li className="px-3">
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-3">{loggedInfo}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
