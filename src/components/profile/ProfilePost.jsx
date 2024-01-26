import React, { lazy, useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineModeComment } from "react-icons/md";
import { useToggleLike } from "../../hooks/posts";
import { useComments } from "../../hooks/comments";
const CommentsMenu = lazy(() => import("../comments/CommentsMenu"));

const ProfilePost = ({ post, user }) => {
  // Post's State
  const [clickedPost, setClickedPost] = useState(false);

  // Like Functionallity
  const isLiked = post.likes.includes(user?.id);
  const { toggleLike } = useToggleLike({
    id: post.id,
    isLiked,
    uid: user?.id,
  });

  // Comments Menu & Functionallity
  const { comments } = useComments(post.id);
  const [commentsMenu, setCommentsMenu] = useState(false);

  return (
    <>
      <div
        className={`${
          clickedPost
            ? "w-full h-full"
            : "w-full xxxs:w-[48%] xxs:w-[30%] h-48 xxxs:h-40 xxs:h-44"
        } rounded-xl flex flex-col gap-2 duration-300 ease-in-out`}
      >
        {/* Picture */}
        {clickedPost ? (
          <img
            src={post.picture}
            title="Close Post"
            onClick={() => setClickedPost(!clickedPost)}
            alt=""
            className="w-full h-full object-cover cursor-pointer rounded-xl hover:opacity-80 duration-300 ease-in-out"
          />
        ) : (
          <img
            src={post.picture}
            title="Open Post"
            onClick={() => setClickedPost(!clickedPost)}
            alt=""
            className="w-full h-full object-cover cursor-pointer rounded-xl hover:opacity-80 duration-300 ease-in-out"
          />
        )}

        {clickedPost ? (
          <div className="flex flex-col gap-2">
            {/* Caption */}
            <div className="font-medium h-auto">{post.text}</div>

            {/* Like & Comments */}
            <div className="flex justify-start items-center gap-4">
              {/* Lke */}
              {user ? (
                <>
                  {isLiked ? (
                    <div
                      title="Unlike"
                      onClick={toggleLike}
                      className="flex justify-center items-center gap-2 cursor-pointer text-orange-600 hover:opacity-50 duration-300 ease-in-out"
                    >
                      <IoMdHeart size={26} />
                      <div className="font-medium">{post.likes.length}</div>
                    </div>
                  ) : (
                    <div
                      title="Like"
                      onClick={toggleLike}
                      className="flex justify-center items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
                    >
                      <IoMdHeartEmpty size={26} />
                      <div className="font-medium">{post.likes.length}</div>
                    </div>
                  )}
                </>
              ) : (
                <div
                  title="Like"
                  onClick={() => alert("Please sign in to be able to like")}
                  className="flex justify-center items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
                >
                  <IoMdHeartEmpty size={26} />
                  <div className="font-medium">{post.likes.length}</div>
                </div>
              )}

              {/* Comments */}
              {user ? (
                <div
                  title="Comments"
                  onClick={() => setCommentsMenu(true)}
                  className="flex justify-center items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
                >
                  <MdOutlineModeComment size={22} />
                  <div className="font-medium">{comments?.length}</div>
                </div>
              ) : (
                <div
                  title="Comments"
                  onClick={() => alert("Please sign in to be able to comment")}
                  className="flex justify-center items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
                >
                  <MdOutlineModeComment size={22} />
                  <div className="font-medium">{comments?.length}</div>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>

      {/* Comments Menu */}
      <CommentsMenu
        post={post}
        commentsMenu={commentsMenu}
        setCommentsMenu={setCommentsMenu}
      />
    </>
  );
};

export default ProfilePost;
