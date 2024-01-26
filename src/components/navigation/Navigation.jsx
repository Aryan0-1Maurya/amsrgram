import React, { lazy, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenuFill, RiArrowLeftSLine } from "react-icons/ri";
import { BsPersonGear } from "react-icons/bs";
import { useSearchContext } from "../../context/SearchContext";
const NavigationMenu = lazy(() => import("./NavigationMenu"));
const SearchBar = lazy(() => import("./SearchBar"));
const ProfileMenu = lazy(() => import("./ProfileMenu"));

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navMenu, setNavMenu] = useState(false);
  const { searchText, setSearchText } = useSearchContext();
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <>
      {location.pathname === "/signin" ||
      location.pathname === "/signup" ? null : (
        <div className="w-full max-w-[500px] m-auto p-4 bg-white flex justify-between items-center text-black animate-animateOpacity">
          {/* Arrow Back / Menu Icon */}
          {location.pathname === "/search" ||
          location.pathname === "/profile" ||
          location.pathname === "/post" ? (
            <RiArrowLeftSLine
              onClick={() => setSearchText("") & navigate("/")}
              size={26}
              title="Go to Home"
              className={`${
                location.pathname === "/profile" ||
                location.pathname === "/post"
                  ? "mt-2"
                  : null
              } cursor-pointer hover:text-orange-600 duration-300 ease-in-out`}
            />
          ) : (
            <RiMenuFill
              onClick={() => setNavMenu(true)}
              size={24}
              title="Open Menu"
              className="cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
            />
          )}

          {/* Logo */}
          <Link
            to={"/"}
            className={`${
              location.pathname === "/search" ||
              location.pathname === "/profile" ||
              location.pathname === "/post"
                ? "hidden"
                : "block"
            } group text-2xl font-semibold tracking-widest`}
          >
            <span className="group-hover:text-orange-600 duration-150 ease-in">
              A
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-100 ease-in">
              m
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-200 ease-in">
              s
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-[300ms] ease-in">
              R
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-[400ms] ease-in">
              G
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-[500ms] ease-in">
              r
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-[600ms] ease-in">
              a
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-[700ms] ease-in">
              m
            </span>
          </Link>

          {/* Search Bar / Profile Menu / Post Tab */}
          {location.pathname === "/profile" ? (
            <BsPersonGear
              size={24}
              title="Options"
              onClick={() => setProfileMenu(true)}
              className={`${
                location.pathname === "/profile" ? "opacity-100" : "opacity-0"
              } mr-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out`}
            />
          ) : (
            <>
              {location.pathname === "/post" ? null : (
                <SearchBar
                  searchText={searchText}
                  setSearchText={setSearchText}
                />
              )}
            </>
          )}

          {/* Menu */}
          <div
            className={`${
              navMenu ? "w-full p-4" : "w-0"
            } bg-white fixed top-0 h-screen max-w-[500px] flex justify-center items-end duration-1000 ease-in-out overflow-hidden z-50`}
          >
            <NavigationMenu
              navMenu={navMenu}
              setNavMenu={setNavMenu}
              location={location}
            />
          </div>

          {/* Profile Menu */}
          <ProfileMenu
            profileMenu={profileMenu}
            setProfileMenu={setProfileMenu}
          />
        </div>
      )}
    </>
  );
};

export default Navigation;
