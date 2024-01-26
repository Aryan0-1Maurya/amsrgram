import React from "react";
import { PiEngineFill } from "react-icons/pi";

const AnimationOnLoad = ({ touched, setTouched }) => {
  return (
    <div
      onTouchStart={() => setTouched(true)}
      onTouchEnd={() => setTouched(false)}
      onMouseDown={() => setTouched(true)}
      onMouseUp={() => setTouched(false)}
      className="h-[100svh] w-full cursor-pointer select-none"
    >
      <div className="h-[100svh] w-full max-w-[390px] m-auto flex flex-col justify-between items-center font-semibold overflow-hidden">
        <div
          className={`${
            touched ? "opacity-100 delay-[1700ms]" : "opacity-0 delay-0"
          } fixed w-full max-w-[390px] m-auto flex justify-end text-[#BF0000] p-8 duration-500 ease-in-out`}
        >
          <PiEngineFill size={24} />
        </div>
        <div
          className={`${
            touched ? "pt-0" : "pt-80"
          } h-1/2 w-full flex flex-col justify-center items-center text-center uppercase duration-1000 ease-in-out`}
        >
          <div
            className={`${
              touched ? "text-[#BF0000] delay-[1500ms]" : "text-white delay-0"
            } animate-pulse text-lg duration-500 ease-in-out`}
          >
            hold to
          </div>
          <div
            className={`${
              touched ? "text-[#BF0000] delay-[1400ms]" : "text-white delay-0"
            } text-8xl duration-500 ease-in-out`}
          >
            rev
          </div>
        </div>
        <div className="fixed bottom-12 w-full max-w-[390px] flex flex-col text-xl gap-20 h-1/2 overflow-hidden">
          <div className="flex justify-end">
            <div
              className={`${
                touched
                  ? "text-[#BF0000] border-b-[#BF0000] delay-[1100ms] translate-x-0"
                  : "text-white border-b-[#f2f2f2] delay-0 translate-x-48"
              } border-b-2 px-10 duration-1000 ease-in-out`}
            >
              9000rpm
            </div>
          </div>
          <div className="flex justify-start">
            <div
              className={`${
                touched
                  ? "text-[#BF0000] border-b-[#BF0000] delay-[800ms] -translate-x-0"
                  : "text-white border-b-[#f2f2f2] delay-0 -translate-x-48"
              } border-b-2 px-10 duration-1000 ease-in-out`}
            >
              7000rpm
            </div>
          </div>
          <div className="flex justify-end">
            <div
              className={`${
                touched
                  ? "text-[#BF0000] border-b-[#BF0000] delay-500 translate-x-0"
                  : "text-white border-b-[#f2f2f2] delay-0 translate-x-48"
              } border-b-2 px-10 duration-1000 ease-in-out`}
            >
              5000rpm
            </div>
          </div>
          <div className="flex justify-start">
            <div
              className={`${
                touched
                  ? "text-[#BF0000] border-b-[#BF0000] delay-200 -translate-x-0"
                  : "text-white border-b-[#f2f2f2] delay-0 -translate-x-48"
              } border-b-2 px-10 duration-1000 ease-in-out`}
            >
              3000rpm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationOnLoad;
