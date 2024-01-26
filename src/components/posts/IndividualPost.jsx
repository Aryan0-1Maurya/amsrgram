import React, { lazy, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { formatDistanceToNow } from "date-fns";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineModeComment } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useAuth } from "../../hooks/auth";
import { useComments } from "../../hooks/comments";
import { useToggleLike, useDeletePost } from "../../hooks/posts";
import { useUser } from "../../hooks/users";
const PictureModal = lazy(() => import("./PictureModal"));
const PostMenu = lazy(() => import("./PostMenu"));
const CommentsMenu = lazy(() => import("../comments/CommentsMenu"));

const IndividualPost = React.forwardRef(({ post }, ref) => {
  // Users
  const { user, isLoading: userLoading } = useUser(post?.uid);
  const { user: authUser, isLoading: authLoading } = useAuth();

  // Like Functionallity
  const isLiked = post.likes.includes(authUser?.id);
  const { toggleLike } = useToggleLike({
    id: post.id,
    isLiked,
    uid: authUser?.id,
  });

  // Delete Functionallity
  const { deletePost } = useDeletePost(post.id);

  // Picture Modal
  const [pictureModal, setPictureModal] = useState(false);

  // Caption
  const [captionOpen, setCaptionOpen] = useState(false);

  // Post Menu
  const [postMenu, setPostMenu] = useState(false);

  // Comments Menu & Functionallity
  const { comments } = useComments(post.id);
  const [commentsMenu, setCommentsMenu] = useState(false);

  // Intesection Observer
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  // Checks if the user is loading
  if (userLoading || authLoading) return null;

  return (
    <div
      ref={myRef}
      className={`${
        myElementIsVisible ? "animate-animateOpacity" : null
      } post w-full h-[17rem] flex flex-col justify-between gap-2`}
    >
      {/* User */}
      <div className="w-full flex justify-between items-center gap-2">
        {authUser?.id === post?.uid ? (
          <Link
            to={`/profile`}
            title="Your Profile"
            className="flex justify-left gap-2 cursor-pointer hover:opacity-50 duration-300 ease-in-out"
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt=""
                className="w-10 h-10 shadow-sm shadow-gray-400 rounded-full object-cover"
              />
            ) : (
              <img
                src={user.avatar}
                alt=""
                className="w-10 h-10 bg-black shadow-sm shadow-gray-400 rounded-full object-cover"
              />
            )}
            <div className="flex flex-col">
              <div className="tracking-wider font-semibold capitalize text-orange-600">
                {user.username}
              </div>
              <div className="opacity-50 text-xs">
                {formatDistanceToNow(post.date)} ago
              </div>
            </div>
          </Link>
        ) : (
          <Link
            to={`/profile/${user.id}`}
            title="See Profile"
            className="flex justify-left gap-2 cursor-pointer hover:opacity-50 duration-300 ease-in-out"
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt=""
                className="w-10 h-10 shadow-sm shadow-gray-400 rounded-full object-cover"
              />
            ) : (
              <img
                src={user.avatar}
                alt=""
                className="w-10 h-10 bg-black shadow-sm shadow-gray-400 rounded-full object-cover"
              />
            )}
            <div className="flex flex-col">
              <div className="tracking-wider font-semibold capitalize text-orange-600">
                {user.username}
              </div>
              <div className="opacity-50 text-xs">
                {formatDistanceToNow(post.date)} ago
              </div>
            </div>
          </Link>
        )}
        <HiOutlineDotsVertical
          size={22}
          onClick={() => setPostMenu(true)}
          className="cursor-pointer hover:opacity-50 duration-300 ease-in-out"
        />
      </div>

      {/* Picture */}
      {post.picture === "" ? null : (
        <img
          src={post.picture}
          title="View Image"
          onClick={() => setPictureModal(true)}
          alt=""
          className="post-picture w-full h-[60%] object-cover cursor-pointer rounded-xl hover:opacity-80 duration-300 ease-in-out"
        />
      )}

      {/* Caption */}
      {captionOpen ? (
        <div
          title="Hide"
          onClick={() => setCaptionOpen(!captionOpen)}
          className="text-sm font-medium h-auto hover:opacity-50 cursor-pointer duration-300 ease-in-out"
        >
          {post.caption}
        </div>
      ) : (
        <>
          {post?.caption.length <= 20 ? (
            <div className="text-sm font-medium h-auto">{post.caption}</div>
          ) : (
            <div
              title="View"
              onClick={() => setCaptionOpen(!captionOpen)}
              className="text-sm font-medium h-auto hover:opacity-50 cursor-pointer duration-300 ease-in-out"
            >
              {post?.caption.slice(0, 20)}
              {post?.caption.length > 20 ? " ..." : null}
            </div>
          )}
        </>
      )}

      {/* Like & Comments */}
      <div className="flex justify-start items-center gap-4">
        {/* Like */}
        {authUser ? (
          <>
            {isLiked ? (
              <div
                title="Unlike"
                onClick={toggleLike}
                className="flex justify-center items-center gap-2 cursor-pointer text-orange-600 hover:opacity-50 duration-300 ease-in-out"
              >
                <IoMdHeart size={22} />
                <div className="text-sm font-medium">{post.likes.length}</div>
              </div>
            ) : (
              <div
                title="Like"
                onClick={toggleLike}
                className="flex justify-center items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
              >
                <IoMdHeartEmpty size={22} />
                <div className="text-sm font-medium">{post.likes.length}</div>
              </div>
            )}
          </>
        ) : (
          <div
            title="Like"
            onClick={() => alert("Please sign in to be able to like")}
            className="flex justify-center items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            <IoMdHeartEmpty size={22} />
            <div className="text-sm font-medium">{post.likes.length}</div>
          </div>
        )}

        {/* Comments */}
        {authUser ? (
          <div
            title="Comments"
            onClick={() => setCommentsMenu(true)}
            className="flex justify-center items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            <MdOutlineModeComment size={20} />
            <div className="text-sm font-medium">{comments?.length}</div>
          </div>
        ) : (
          <div
            title="Comments"
            onClick={() => alert("Please sign in to be able to comment")}
            className="flex justify-center items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            <MdOutlineModeComment size={20} />
            <div className="text-sm font-medium">{comments?.length}</div>
          </div>
        )}
      </div>

      {/* Picture Modal */}
      <PictureModal
        post={post}
        pictureModal={pictureModal}
        setPictureModal={setPictureModal}
      />

      {/* Post Menu */}
      <PostMenu
        post={post}
        postMenu={postMenu}
        setPostMenu={setPostMenu}
        isLiked={isLiked}
        toggleLike={toggleLike}
        setCommentsMenu={setCommentsMenu}
        user={user}
        authUser={authUser}
        authLoading={authLoading}
        deletePost={deletePost}
      />

      {/* Comments Menu */}
      <CommentsMenu
        post={post}
        commentsMenu={commentsMenu}
        setCommentsMenu={setCommentsMenu}
      />
    </div>
  );
});

export default IndividualPost;
