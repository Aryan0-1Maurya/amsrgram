import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { captionValidate, picValidate } from "../utils/form-validate";
import { AiOutlinePicture } from "react-icons/ai";
import { useAddPost } from "../hooks/posts";
import { useAuth } from "../hooks/auth";

const Post = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    addPost,
    isLoading: addingPostLoading,
    fileURL,
    setFile,
  } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();
  const [captionLenght, setCaptionLenght] = useState(0);
  const [captionValue, setCaptionValue] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      caption: data.caption,
    });
    reset();
    navigate("/");
  }

  if (authLoading) return null;

  if (user?.id) {
    return (
      <m.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        onSubmit={handleSubmit(handleAddPost)}
        onClick={(e) => e.stopPropagation()}
        className="h-full w-full max-w-[500px] m-auto p-4 flex flex-col justify-center items-center text-center gap-8 text-black relative"
      >
        {/* Heading */}
        <div className="w-full flex justify-center items-center">
          {/* Title */}
          <div className="text-3xl text-orange-600 font-semibold tracking-wider">
            New Post
          </div>
        </div>

        {/* Post */}
        <div className="w-full flex flex-col justify-center items-center gap-4">
          {/* Caption */}
          <div className="w-full relative">
            <textarea
              {...register("caption", captionValidate)}
              onChange={(e) =>
                setCaptionLenght(e.target.value.length) &
                setCaptionValue(e.target.value)
              }
              placeholder="Caption"
              title="Caption"
              maxLength="30"
              cols="1"
              rows="1"
              className={`${
                captionLenght !== 0
                  ? "text-orange-600 placeholder:text-orange-600"
                  : null
              } ${
                errors.caption
                  ? "placeholder:text-[#BF0000] border-[#bf000096]"
                  : "border-neutral-300"
              } w-full pb-2 bg-white text-black focus:text-orange-600 font-semibold tracking-wider border-b-2 placeholder:text-neutral-400 placeholder:font-semibold hover:placeholder:text-orange-600 focus:placeholder:text-orange-600 hover:border-orange-600 focus:border-orange-600 outline-none resize-none cursor-pointer duration-300 ease-in-out placeholder:duration-300 placeholder:ease-in-out`}
            ></textarea>
            <p className="absolute top-0 right-0 text-neutral-400 font-semibold">
              {captionLenght === 0 ? (
                <span>30</span>
              ) : (
                <span>{captionValidate.maxLength.value - captionLenght}</span>
              )}
            </p>
            {errors.caption ? (
              <p className="text-[#BF0000] font-medium text-left tracking-wider">
                {captionLenght === 0 ? <>{errors.caption.message}</> : null}
              </p>
            ) : null}
          </div>

          {/* Picture */}
          <label
            htmlFor="pic"
            title="Add an image"
            className={`${
              errors.pic ? "border-[#BF0000]" : "border-neutral-300"
            } w-full h-60 flex flex-col justify-center items-center border-2 hover:border-orange-600 rounded-2xl cursor-pointer duration-300 ease-in-out group`}
          >
            <AiOutlinePicture
              className={`${
                fileURL
                  ? "h-[7.5rem] text-orange-600"
                  : "text-neutral-300 opacity-90"
              } w-full h-28 group-hover:h-[7.5rem] group-hover:text-orange-600 duration-300 ease-in-out`}
            />
            <input
              id="pic"
              type="file"
              accept="image/*"
              {...register("pic", picValidate)}
              className="hidden"
              onChange={handleChange}
            />
          </label>
          {errors.pic ? (
            <p className="w-full text-[#BF0000] -mt-2 font-medium text-center tracking-wider">
              {!fileURL ? <>{errors.pic.message}</> : null}
            </p>
          ) : null}
        </div>

        {/* Post Button */}
        <button
          type="submit"
          title="Post"
          className="absolute -top-10 right-6 text-orange-600 hover:opacity-50 text-lg font-bold tracking-wider cursor-pointer duration-300 ease-in-out"
        >
          {authLoading || addingPostLoading ? <>Loading...</> : <>Post</>}
        </button>
      </m.form>
    );
  } else {
    navigate("/signin");
  }
};

export default Post;
