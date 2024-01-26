import React from "react";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineModeComment } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { GoTrash } from "react-icons/go";

const PostMenu = ({
  post,
  postMenu,
  setPostMenu,
  isLiked,
  toggleLike,
  setCommentsMenu,
  user,
  authUser,
  authLoading,
  deletePost,
}) => {
  if (authLoading) return null;

  return (
    <div
      onClick={() => setPostMenu(false)}
      className={`${
        postMenu ? "h-full" : "h-0 delay-[250ms]"
      } bg-modal fixed top-0 left-0 w-full flex justify-center items-end z-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          postMenu ? "h-1/3 opacity-100" : "h-0 opacity-0"
        } bg-black w-full max-w-[500px] text-white px-4 py-8 rounded-tl-3xl rounded-tr-3xl flex flex-col justify-between overflow-hidden duration-300 ease-in-out z-50`}
      >
        {/* Post Menu Handle */}
        <div
          className={`${
            postMenu ? "opacity-100" : "opacity-0"
          } w-full flex justify-center items-center delay-150 duration-300 ease-in-out`}
        >
          <div
            title="CLose Menu"
            onTouchStart={() => setPostMenu(false)}
            onMouseDown={() => setPostMenu(false)}
            className="w-1/4 h-2 bg-white rounded-full cursor-pointer hover:opacity-50 duration-300 ease-in-out"
          ></div>
        </div>

        {/* Post Menu Functionalities */}
        <div className="w-full flex flex-col justify-center gap-8 text-lg font-semibold">
          {/* Like */}
          {authUser ? (
            <>
              {isLiked ? (
                <div
                  className={`${
                    postMenu ? "opacity-100" : "opacity-0"
                  } flex items-center gap-2 delay-200 duration-300 ease-in-out`}
                >
                  <div
                    title="Unlike"
                    onClick={toggleLike}
                    className="flex items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
                  >
                    <IoMdHeart size={22} />
                    <span>Unlike</span>
                  </div>
                </div>
              ) : (
                <div
                  className={`${
                    postMenu ? "opacity-100" : "opacity-0"
                  } flex items-center gap-2 delay-200 duration-300 ease-in-out`}
                >
                  <div
                    title="Like"
                    onClick={toggleLike}
                    className="flex items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
                  >
                    <IoMdHeartEmpty size={22} />
                    <span>Like</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div
              className={`${
                postMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-200 duration-300 ease-in-out`}
            >
              <div
                title="Like"
                onClick={() => alert("Please sign in to be able to like")}
                className="flex items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
              >
                <IoMdHeartEmpty size={22} />
                <span>Like</span>
              </div>
            </div>
          )}

          {/* Comments */}
          {authUser ? (
            <div
              className={`${
                postMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-[250ms] duration-300 ease-in-out`}
            >
              <div
                title="Comments"
                onClick={() => setCommentsMenu(true) & setPostMenu(false)}
                className="flex items-center gap-2 hover:text-orange-600 cursor-pointer duration-300 ease-in-out"
              >
                <MdOutlineModeComment title="Comments" size={20} />
                <span>Comment</span>
              </div>
            </div>
          ) : (
            <div
              className={`${
                postMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-[250ms] duration-300 ease-in-out`}
            >
              <div
                title="Comments"
                onClick={() => alert("Please sign in to be able to comment")}
                className="flex items-center gap-2 hover:text-orange-600 cursor-pointer duration-300 ease-in-out"
              >
                <MdOutlineModeComment title="Comments" size={20} />
                <span>Comment</span>
              </div>
            </div>
          )}

          {/* Delete / See Profile */}
          {!authLoading && authUser?.id === post?.uid ? (
            <div
              className={`${
                postMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-300 duration-300 ease-in-out`}
            >
              <div
                onClick={deletePost}
                title="Delete Post"
                className="flex items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
              >
                <GoTrash size={20} />
                <span>Delete Post</span>
              </div>
            </div>
          ) : (
            <div
              className={`${
                postMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-300 duration-300 ease-in-out`}
            >
              <Link
                to={`/profile/${user.id}`}
                title="See Profile"
                onClick={toggleLike}
                className="flex items-center gap-2 hover:text-orange-600 duration-300 ease-in-out"
              >
                <RiUser3Line size={22} />
                <span>See Profile</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostMenu;
