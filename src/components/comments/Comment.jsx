import React from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { GoTrash } from "react-icons/go";
import { useAuth } from "../../hooks/auth";
import { useDeleteComment } from "../../hooks/comments";
import { useUser } from "../../hooks/users";

const Comment = ({ comment }) => {
  const { user, isLoading: userLoading } = useUser(comment?.uid);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { deleteComment } = useDeleteComment(comment?.id);

  if (userLoading) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Comment User */}
      <div className="flex">
        <Link
          to={`/profile/${user.id}`}
          title="See Profile"
          className="flex gap-2 cursor-pointer hover:opacity-50 duration-300 ease-in-out"
        >
          <img
            src={user.avatar}
            alt=""
            className="w-10 h-10 bg-black rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="tracking-wider font-semibold capitalize text-orange-600">
              {user.username}
            </div>
            <div className="opacity-50 text-xs">
              {formatDistanceToNow(comment.date)} ago
            </div>
          </div>
        </Link>
      </div>

      {/* Comment Text */}
      <div className="flex justify-between items-center">
        <div className="text-base font-medium h-auto">{comment.text}</div>
        {!authLoading && authUser?.id === comment.uid && (
          <GoTrash
            size={18}
            onClick={deleteComment}
            title="Delete Comment"
            className="cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
