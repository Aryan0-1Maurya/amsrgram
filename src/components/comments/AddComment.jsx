import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";
import { useAddComment } from "../../hooks/comments";

const AddComment = ({ post, commentsMenu }) => {
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { addComment } = useAddComment({ postID: post?.id, uid: authUser?.id });
  const { register, handleSubmit, reset } = useForm();

  function handleAddComment(data) {
    addComment(data.text);
    reset();
  }

  if (authLoading) return null;

  return (
    <form onSubmit={handleSubmit((data) => handleAddComment(data))}>
      <div
        className={`${
          commentsMenu ? "opacity-100" : "opacity-0"
        } w-full flex justify-between items-center delay-300 duration-300 ease-in-out`}
      >
        {/* Add Comment User & Input */}
        <div className="w-3/4 flex justify-start items-center gap-4">
          <img
            src={authUser?.avatar}
            alt=""
            className="bg-black w-10 h-10 rounded-full object-cover"
          />
          <input
            type="text"
            {...register("text", { required: true })}
            autoComplete="off"
            placeholder="Write a comment"
            className="w-3/4 bg-black border-b border-neutral-700 outline-none py-1"
          />
        </div>

        {/* Add Comment Button */}
        <button
          type="submit"
          title="Post"
          className="bg-black w-1/4 p-2 text-sm text-center font-semibold rounded-xl border-2 border-orange-600 text-orange-600 hover:opacity-50 duration-300 ease-in-out"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddComment;
