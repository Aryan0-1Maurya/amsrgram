import React from "react";
import { Link } from "react-router-dom";
import {
  RiSearchLine,
  RiCloseFill,
  RiHome2Line,
  RiAddFill,
  RiUser3Line,
} from "react-icons/ri";
import { MdOutlineExitToApp, MdOutlineLogin } from "react-icons/md";
import { useAuth, useLogout } from "../../hooks/auth";

const NavigationMenu = ({ navMenu, setNavMenu, location }) => {
  const { logout } = useLogout();
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
      {/* Menu Handle */}
      <div
        onClick={() => setNavMenu(false)}
        title="Close Menu"
        className={`${
          navMenu ? "opacity-100 delay-500" : "opacity-0 delay-0"
        } absolute top-5 right-6 cursor-pointer duration-500`}
      >
        <RiCloseFill
          size={26}
          className="hover:text-orange-600 duration-300 ease-in-out"
        />
      </div>

      {/* Menu Links */}
      <div className="flex flex-col justify-center items-start gap-12 text-2xl font-semibold tracking-widest">
        {/* Home */}
        <Link
          to={"/"}
          title="Home"
          onClick={() => setNavMenu(false)}
          className={`${
            location.pathname === "/"
              ? "text-orange-600 opacity-100"
              : "text-black opacity-50"
          } flex justify-center items-center gap-4 hover:opacity-100 duration-500 ease-in-out relative`}
        >
          <div
            className={`${
              navMenu ? "-right-[300%] delay-[600ms]" : "right-0 delay-0"
            } bg-white w-full h-full absolute top-0 duration-500 z-10`}
          ></div>
          <RiHome2Line size={24} />
          <div>HOME</div>
        </Link>
        {/* Search */}
        <Link
          to={"/search"}
          title="Search"
          onClick={() => setNavMenu(false)}
          className={`${
            location.pathname === "/search"
              ? "text-orange-600 opacity-100"
              : "text-black opacity-50"
          } flex justify-center items-center gap-4 hover:opacity-100 duration-500 ease-in-out relative`}
        >
          <div
            className={`${
              navMenu ? "-right-[300%] delay-[700ms]" : "right-0 delay-0"
            }  bg-white w-full h-full absolute top-0 duration-500 z-10`}
          ></div>
          <RiSearchLine size={22} />
          <div>SEARCH</div>
        </Link>
        {/* Post */}
        <Link
          to={"/post"}
          title="Post"
          onClick={() => setNavMenu(false)}
          className={`${
            location.pathname === "/post"
              ? "text-orange-600 opacity-100"
              : "text-black opacity-50"
          } flex justify-center items-center gap-4 hover:opacity-100 duration-500 ease-in-out relative`}
        >
          <div
            className={`${
              navMenu ? "-right-[300%] delay-[800ms]" : "right-0 delay-0"
            } bg-white w-full h-full absolute top-0 duration-500 z-10`}
          ></div>
          <RiAddFill size={26} />
          <div>POST</div>
        </Link>
        {/* Profile */}
        <Link
          to={"/profile"}
          title="Profile"
          onClick={() => setNavMenu(false)}
          className={`${
            location.pathname === "/profile"
              ? "text-orange-600 opacity-100"
              : "text-black opacity-50"
          } flex justify-center items-center gap-4 hover:opacity-100 duration-500 ease-in-out relative`}
        >
          <div
            className={`${
              navMenu ? "-right-[300%] delay-[900ms]" : "right-0 delay-0"
            } bg-white w-full h-full absolute top-0 duration-500 z-10`}
          ></div>
          <RiUser3Line size={24} />
          <div>PROFILE</div>
        </Link>
        {/* Sing Out / Sign In */}
        {user?.id ? (
          <div
            title="Sign Out"
            onClick={() => setNavMenu(false) & logout()}
            className="flex justify-center items-center gap-4 text-black cursor-pointer opacity-50 hover:opacity-100 duration-500 ease-in-out relative"
          >
            <div
              className={`${
                navMenu ? "-right-[300%] delay-[1000ms]" : "right-0 delay-0"
              } bg-white w-full h-full absolute top-0 duration-500 z-10`}
            ></div>
            <MdOutlineExitToApp size={24} />
            <div>SIGN OUT</div>
          </div>
        ) : (
          <Link
            to={"/signin"}
            title="Sign In"
            onClick={() => setNavMenu(false)}
            className={`${
              location.pathname === "/signin"
                ? "text-orange-600 opacity-100"
                : "text-black opacity-50"
            } flex justify-center items-center gap-4 hover:opacity-100 duration-500 ease-in-out relative`}
          >
            <div
              className={`${
                navMenu ? "-right-[300%] delay-[1000ms]" : "right-0 delay-0"
              } bg-white w-full h-full absolute top-0 duration-500 z-10`}
            ></div>
            <MdOutlineLogin size={24} />
            <div>SIGN IN</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationMenu;
