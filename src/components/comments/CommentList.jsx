import React from "react";
import { useComments } from "../../hooks/comments";
import AddComment from "./AddComment";
import Comment from "./Comment";

const CommentList = ({ post, commentsMenu }) => {
  const { comments, isLoading } = useComments(post?.id);

  if (isLoading) return null;

  return (
    <div className="h-full flex flex-col justify-between gap-2">
      <div className="flex flex-col gap-8">
        {/* Heading */}
        <div
          className={`${
            commentsMenu ? "opacity-100" : "opacity-0"
          } text-xl text-center tracking-wider font-semibold text-orange-600 delay-[200ms] duration-300 ease-in-out`}
        >
          Comments
        </div>

        {/* Comments */}
        {comments.length === 0 ? (
          <div
            className={`${
              commentsMenu ? "opacity-100" : "opacity-0"
            } text-center text-sm font-semibold -mt-4 delay-[250ms] duration-300 ease-in-out`}
          >
            There are no comments yet!
          </div>
        ) : (
          <div
            className={`${
              commentsMenu ? "opacity-100" : "opacity-0"
            } h-80 flex flex-col justify-start items-center gap-8 overflow-x-auto delay-[250ms] duration-300 ease-in-out`}
          >
            {comments?.map((comment) => (
              <div
                className="w-full flex flex-col justify-center"
                key={comment.id}
                comment={comment}
              >
                <Comment comment={comment} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Comment */}
      <AddComment post={post} commentsMenu={commentsMenu} />
    </div>
  );
};

export default CommentList;
