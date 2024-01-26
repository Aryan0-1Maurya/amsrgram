import React from "react";
import { motion as m } from "framer-motion";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";
import { MdModeComment } from "react-icons/md";

const SkeletonPost = ({ post }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="post w-full h-[17rem] flex flex-col gap-2 animate-pulse"
    >
      {/* User */}
      <div className="w-full flex justify-between items-center gap-2">
        <div className="flex justify-left gap-2">
          <div className="w-11 h-11 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col gap-1">
            <div className="w-auto tracking-wider font-semibold capitalize text-gray-200 bg-gray-200">
              username
            </div>
            <div className="opacity-50 text-xs text-gray-200 bg-gray-200">
              24 days ago
            </div>
          </div>
        </div>
        <HiOutlineDotsVertical
          size={22}
          className="text-gray-200 bg-gray-200 h-full"
        />
      </div>

      {/* Picture */}
      {post.picture === "" ? null : (
        <div className="post-picture w-full h-1/2 rounded-xl bg-gray-200"></div>
      )}

      {/* Caption */}
      <div className="text-sm font-medium h-auto text-gray-200 bg-gray-200">
        {post.caption}
      </div>

      {/* Likes & Comments */}
      <div className="flex justify-start items-center gap-4">
        {/* Likes */}
        <div className="flex justify-center items-center gap-2 group">
          <IoMdHeart
            size={22}
            className="text-gray-200 bg-gray-200 rounded-full"
          />
        </div>
        {/* Comments */}
        <div className="flex justify-center items-center gap-2 group">
          <MdModeComment
            size={22}
            className="text-gray-200 bg-gray-200 rounded-full"
          />
        </div>
      </div>
    </m.div>
  );
};

export default SkeletonPost;
