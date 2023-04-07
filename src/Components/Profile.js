import React from "react";
import "./Profile.css";
import ProfilePic from "../images/profile_pic.png";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="profile">
      <div className="profile-info">
        <img src={ProfilePic} id="profile-pic" />
        <h3>Amruta Pisal- Khopde</h3>
        <h3>FrontEnd Developer</h3>
        <div>
          <p>Mobile : 8308271493</p>
          <p>Email : amrutapisal123@gmail.com</p>

          <div id="logout">
            <button id="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
