import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userData } = useAuth();
  

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (userData?.role !== "user") {
      navigate("/admin");
    }
  }, []);

  return (
    <div style={{ marginTop: "4rem", minHeight: "100vh", backgroundColor: "greenyellow" }}>
      <h1>Welcome to the User Dashboard!</h1>
      <h3>Username : {userData?.name}</h3>
      <h3>Role : {userData?.name}</h3>
      <h2>Login Status : {isLoggedIn ? "true" : "false"}</h2>
    </div>
  );
};

export default UserDashboard;
