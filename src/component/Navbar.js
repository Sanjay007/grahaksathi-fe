import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate,useLocation } from "react-router-dom";
import { HiBars4, HiXMark, HiHome } from "react-icons/hi2";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: <HiHome />,
  },
  {
    id: 2,
    title: "About",
    url: "/about",
    icon: <HiHome />,
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
    icon: <HiHome />,
  },
];

const Navbar = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";
  const { isLoggedIn, handleLogout,userData } = useAuth();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [hasBorder, setHasBorder] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setHasBorder(true);
      } else {
        setHasBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav((prev) => !prev);

    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const handleNavDiv = () => {
    setNav(false);
    document.body.style.overflow = "scroll";
  };

  const handleLinkClick = (url) => {
    navigate(url);
  };



  return (
    // fixed ${isAdmin? "hidden" : ""}
    <nav className={` bg-[#d4c1a7] dark:bg-gray-900 ${isAdminPage ? "hidden" :""}  fixed w-full z-20 top-0 left-0 h-16 dark:border-gray-600  ${hasBorder ? "border-b-2 border-[#d4c1a7]/80 shadow-sm transition-all" : ""}`}>
      <div className={`max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-3`}>
        {/* {item-1} Logo */}
        <Link onClick={() => navigate("/")} className="flex items-center mx-6 lg:mx-8">
          <img src={"/logo.png"} className="object-contain h-10 w-full" alt="logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Grahak Sathi</span> */}
        </Link>
        {/* {item-2} mobile */}
        <div className="flex flex-row-reverse md:flex-row  w-[70] order-1  md:order-last md:hidden mx-6">
          <div onClick={handleNav} className={`${nav ? "" : ""} bg-[#ee5535] p-1 rounded-md`}>
            {nav ? <HiXMark size={30} color="white" /> : <HiBars4 size={30} color="white" />}
          </div>
          {/* ${nav ? "translate-x-0 " : "-translate-x-full"}  */}
          <aside id="default-sidebar" className={` fixed top-0 left-0 z-40 w-[80%] h-full md:h-screen  transform-gpu transition-transform duration-550 ${nav ? "translate-x-0 " : "-translate-x-full"} `}>
            <div className=" py-2 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div href="/" className=" border-2 border-red-500">
                <img src={"/logo.png"} className="object-contain h-10  " alt="logo" />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Grahak Sathi</span> */}
              </div>
              <div className="space-y-2">
                {links.map((item) => (
                  <div key={item.id} onClick={() => handleLinkClick(item.url)} style={{ cursor: "pointer" }}>
                    {item.icon}
                    <span> {item.title}</span>
                  </div>
                ))}
              </div>
              <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-3">Docs</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                    </svg>
                    <span className="ml-3">Components</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-3">Help</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        {/* {item-3} desktop */}
        <div className={`hidden items-center justify-around  md:flex md:w-[50%] md:hover:bg-black-100  md:order-1  md:px-5`}>
          {links.map((item) => (
            <a
              className="block px-5 py-5  md:hover:bg-black-100 rounded md:bg-transparent md:text-black md:p-0 hover:md:text-[#ee5535] hover:md:font-bold
                 hover:scale-125 transition-all hover:ease-linear transform-gpu md:w-55"
              href={item.url}
              key={item.id}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="hidden md:order-last md:block mx-8">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              type="button"
              className="flex-1  text-white bg-[#ee5535] hover:bg-[#af3921] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              type="button"
              className="flex-1  text-white bg-[#ee5535] hover:bg-[#af3921] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Login
            </button>
          )}
        </div>
      </div>
      {/* empty space */}

      <div className={`md:hidden  fixed bottom-0 right-0   ${nav ? "backdrop-blur-sm backdrop-grayscale-[.5]" : ""} transition-all duration-550 w-[20%] h-[93%] z-20`} onClick={handleNavDiv}></div>
    </nav>
  );
};

export default Navbar;
