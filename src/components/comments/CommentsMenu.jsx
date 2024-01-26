import React from "react";
import CommentList from "./CommentList";

const CommentsMenu = ({ post, commentsMenu, setCommentsMenu }) => {
  return (
    <div
      onClick={() => setCommentsMenu(false)}
      className={`${
        commentsMenu ? "h-full" : "h-0 delay-[250ms]"
      } bg-modal fixed top-0 left-0 w-full flex justify-center items-end z-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          commentsMenu ? "h-2/3 opacity-100" : "h-0 opacity-0"
        } bg-black text-white w-full max-w-[500px] px-4 py-8 rounded-tl-3xl rounded-tr-3xl flex flex-col justify-start gap-8 overflow-hidden duration-300 ease-in-out z-50`}
      >
        {/* Post Menu Handle */}
        <div
          className={`${
            commentsMenu ? "opacity-100" : "opacity-0"
          } w-full flex justify-center items-center delay-150 duration-300 ease-in-out`}
        >
          <div
            title="CLose Menu"
            onTouchStart={() => setCommentsMenu(false)}
            onMouseDown={() => setCommentsMenu(false)}
            className="w-1/4 h-2 bg-white rounded-full cursor-pointer hover:opacity-50 duration-300 ease-in-out"
          ></div>
        </div>

        {/* Comments */}
        <CommentList post={post} commentsMenu={commentsMenu} />
      </div>
    </div>
  );
};

export default CommentsMenu;
