import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useInView } from "react-intersection-observer";

const SearchUser = ({ user }) => {
  // Intesection Observer
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <Link
      to={`/profile/${user.id}`}
      ref={myRef}
      className={`${
        myElementIsVisible ? "animate-animateOpacity" : null
      } w-full pb-4 flex justify-start items-center gap-4 hover:opacity-50 duration-300 ease-in-out`}
    >
      <img
        title="See Profile"
        src={user.avatar}
        alt=""
        className="w-[3.5rem] h-[3.5rem] bg-black shadow-sm shadow-gray-400 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <div className="font-semibold text-lg tracking-wider text-orange-600">
          {user.username}
        </div>
        <div className="tracking-wider text-sm">
          Joined: {format(user.date, "MMMM YYY")}
        </div>
      </div>
    </Link>
  );
};

export default SearchUser;
