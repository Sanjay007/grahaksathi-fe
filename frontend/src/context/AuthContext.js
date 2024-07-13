import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("session") && !!JSON.parse(localStorage.getItem("session")).token;
  });

  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem("session");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  console.log("Auth State Login is ", isLoggedIn);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("session");
    setUserData(null);
  };

  const handleLogin = (data) => {
    console.log("Setting user data:", data);
    setUserData(data);
    setIsLoggedIn(true);
    localStorage.setItem("session", JSON.stringify(data));
  };

  // useEffect(() => {
  //     const data = localStorage.getItem("session");
  //     if (data) {
  //       const parsedData = JSON.parse(data);
  //       // Check if the token exists in the data object
  //       if (parsedData.token) {
  //         console.log(parsedData.token)
  //         setUserData(parsedData);
  //         setIsLoggedIn(true);
  //       }
  //     }
  //   }, [isLoggedIn]);

  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData, handleLogout, handleLogin }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
