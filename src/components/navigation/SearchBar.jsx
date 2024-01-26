import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <form
      className={`${
        location.pathname === "/search"
          ? "w-[85%] delay-300 duration-1000"
          : "w-10 delay-0 duration-500"
      } relative group ease-in-out overflow-hidden`}
    >
      {/* Search Input */}
      <input
        type="text"
        id="search"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Wonder around..."
        value={searchText}
        className={`${
          location.pathname === "/search"
            ? "py-2 opacity-100 cursor-auto delay-300"
            : "py-0 opacity-0 cursor-default delay-0"
        } ${
          searchText.length ? "text-orange-600" : ""
        } w-full bg-white text-black font-semibold border-2 border-black pl-12 placeholder:text-neutral-600 placeholder:tracking-wider rounded-2xl`}
      />

      {/* Search Icon */}
      <label
        htmlFor="search"
        title="Search"
        onClick={() => navigate("/search")}
        className="cursor-pointer"
      >
        <div
          className={`${
            location.pathname === "/search"
              ? "p-2 left-2 delay-300"
              : "p-0 left-4 delay-0"
          } flex justify-center items-center absolute top-[3px] hover:text-orange-600 duration-500 ease-in-out`}
        >
          <RiSearchLine size={22} />
        </div>
      </label>
    </form>
  );
};

export default SearchBar;
