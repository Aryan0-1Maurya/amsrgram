import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { emailValidate, passwordValidate } from "../utils/form-validate";
import { useLogin } from "../hooks/auth";

const Signin = () => {
  const { login, isLoading, error } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    const succeeded = await login({
      email: data.email,
      password: data.password,
      redirectTo: "/",
    });

    if (succeeded) reset();
  }

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="w-full max-w-[350px] h-screen m-auto p-4 flex flex-col justify-center bg-white text-black"
    >
      {/* Logo */}
      <Link
        to={"/"}
        title="Home"
        className="group text-5xl font-bold mb-12 text-center tracking-widest"
      >
        <span className="group-hover:text-orange-600 duration-150 ease-in">
          W
        </span>
        <span className="group-hover:text-orange-600 duration-150 delay-100 ease-in">
          O
        </span>
        <span className="group-hover:text-orange-600 duration-150 delay-200 ease-in">
          N
        </span>
        <span className="group-hover:text-orange-600 duration-150 delay-[300ms] ease-in">
          D
        </span>
        <span className="group-hover:text-orange-600 duration-150 delay-[400ms] ease-in">
          E
        </span>
        <span className="group-hover:text-orange-600 duration-150 delay-[500ms] ease-in">
          R
        </span>
        <span className="text-lg text-orange-600 font-bold">
          <span className="group-hover:text-black duration-150 delay-[600ms] ease-in">
            f
          </span>
          <span className="group-hover:text-black duration-150 delay-[700ms] ease-in">
            u
          </span>
          <span className="group-hover:text-black duration-150 delay-[800ms] ease-in">
            l
          </span>
          <span className="group-hover:text-black duration-150 delay-[900ms] ease-in">
            l
          </span>
        </span>
      </Link>

      {/* Title */}
      <h1
        className={`${
          error ? "text-[#BF0000]" : "text-black"
        } text-2xl font-bold text-left tracking-wider pt-8 pb-2`}
      >
        Sign In
      </h1>

      {/* Error Message */}
      {error ? <p className="text-[#BF0000] mt-2">{error}</p> : null}

      {/* Form */}
      <form onSubmit={handleSubmit((data) => handleLogin(data))}>
        {/* Email */}
        <div className="my-4">
          <label
            htmlFor="email"
            className={`${
              errors.email ? "text-[#BF0000]" : "text-orange-600"
            } cursor-pointer font-semibold tracking-wider`}
          >
            Email
          </label>
          <div className="my-2 w-full relative rounded-2xl">
            <input
              className={`${
                errors.email ? "border-[#BF0000]" : "border-black"
              } w-full p-2 border-2 rounded-2xl placeholder:text-neutral-600 placeholder:tracking-wider bg-white outline-orange-600`}
              id="email"
              type="email"
              placeholder="demo@demo.com"
              {...register("email", emailValidate)}
            />
            <AiOutlineMail className="absolute right-3 top-3 text-grey-400" />
          </div>
          {errors.email ? (
            <p className="text-[#BF0000] mt-2">{errors.email.message}</p>
          ) : null}
        </div>

        {/* Password */}
        <div className="my-4">
          <label
            htmlFor="password"
            className={`${
              errors.password ? "text-[#BF0000]" : "text-orange-600"
            } cursor-pointer font-semibold tracking-wider`}
          >
            Password
          </label>
          <div className="my-2 w-full relative rounded-2xl">
            <input
              className={`${
                errors.password ? "border-[#BF0000]" : "border-black"
              } w-full p-2 border-2 rounded-2xl placeholder:text-neutral-600 placeholder:tracking-wider bg-white outline-orange-600`}
              id="password"
              type="password"
              placeholder="password"
              {...register("password", passwordValidate)}
            />
            <AiFillLock className="absolute right-3 top-3 text-grey-400" />
          </div>
          {errors.password ? (
            <p className="text-[#BF0000] mt-2">{errors.password.message}</p>
          ) : null}
        </div>

        {/* Submit Button */}
        <button className="w-full my-2 p-3 bg-white hover:bg-orange-600 border-2 border-black hover:border-orange-600 text-black hover:text-white tracking-wider rounded-2xl shadow-none hover:shadow-md shadow-orange-600 font-bold duration-300 ease-in-out">
          {isLoading ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            <span>Sign In</span>
          )}
        </button>
      </form>

      {/* Sign Up */}
      <div className="my-4 text-center tracking-wider">
        <span className="text-neutral-600 pr-2">Don't have an account?</span>
        <Link
          to="/signup"
          className="hover:opacity-50 font-bold duration-300 ease-in-out"
        >
          Sign Up
        </Link>
      </div>
    </m.div>
  );
};

export default Signin;
