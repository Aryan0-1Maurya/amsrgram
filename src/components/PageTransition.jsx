import React from "react";
import { motion as m } from "framer-motion";

const PageTransition = () => {
  return (
    <m.div
      initial={{ zIndex: "50", opacity: "100%" }}
      animate={{ zIndex: "-10", opacity: "0%" }}
      transition={{ duration: 1, delay: 1.5 }}
      className="z-50 opacity-100 absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-between overflow-hidden"
    >
      <m.div
        initial={{ translateX: "50rem" }}
        animate={{ translateX: "0" }}
        transition={{ duration: 1 }}
        className="border-b-2 border-[#BF0000] h-20 w-full"
      ></m.div>
      <m.div
        initial={{ translateX: "-50rem" }}
        animate={{ translateX: "0" }}
        transition={{ duration: 1 }}
        className="border-t-2 border-[#BF0000] h-20 w-full"
      ></m.div>
    </m.div>
  );
};

export default PageTransition;
