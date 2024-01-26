import React from "react";
import { motion as m } from "framer-motion";

const SkeletonSearchUser = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="w-full pb-4 flex justify-start items-center gap-4 animate-pulse"
    >
      <div className="w-[3.5rem] h-[3.5rem] bg-gray-200 border border-gray-200 rounded-full object-cover"></div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-lg tracking-wider bg-gray-200 text-gray-200">
          username
        </div>
        <div className="tracking-wider text-sm bg-gray-200 text-gray-200">
          Joined: August 2023
        </div>
      </div>
    </m.div>
  );
};

export default SkeletonSearchUser;
