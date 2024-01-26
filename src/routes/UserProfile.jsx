import React, { lazy, useState } from "react";
import { motion as m } from "framer-motion";
import { useParams } from "react-router-dom";
import { usePosts } from "../hooks/posts";
import { useUser } from "../hooks/users";
const ProfilePost = lazy(() => import("../components/profile/ProfilePost"));

const UserProfile = () => {
  const { id } = useParams();
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  const [viewAllButton, setViewAllButton] = useState(false);
  let sumLikes = 0;

  if (userLoading || postsLoading) return null;

  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="h-full w-full max-w-[500px] m-auto bg-white p-4 flex flex-col justify-center items-center gap-4 text-black"
      >
        {/* User */}
        <img
          src={user.avatar}
          alt=""
          className="w-40 h-40 bg-black shadow-md shadow-gray-400 rounded-full object-cover"
        />
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="text-xl font-semibold tracking-wider text-orange-600">
            {user.username}
          </div>
          <span className="opacity-50 text-sm text-center tracking-wider">
            front-end web developer
          </span>
        </div>

        {/* Posts & Likes */}
        <div className="flex justify-center items-center gap-8 my-4">
          <div className="flex flex-col justify-center items-center gap-1 font-medium tracking-wider">
            <div>{posts?.length}</div>
            <div className="opacity-50">Posts</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 font-medium tracking-wider">
            <div className="hidden">
              {posts?.map((post) => {
                return (sumLikes += post?.likes?.length);
              })}
            </div>
            <div>{sumLikes}</div>
            <div className="opacity-50">Likes</div>
          </div>
        </div>

        {/* Posts */}
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-between items-center">
            <div className="text-lg  tracking-wider font-semibold">Posts</div>
            {viewAllButton ? (
              <div
                title="Hide"
                onClick={() => setViewAllButton(false)}
                className="text-sm  tracking-wider font-semibold text-orange-600 cursor-pointer hover:opacity-50 duration-300 ease-in-out"
              >
                Hide
              </div>
            ) : (
              <div
                title="View All"
                onClick={() => setViewAllButton(true)}
                className="text-sm  tracking-wider font-semibold text-orange-600 cursor-pointer hover:opacity-50 duration-300 ease-in-out"
              >
                View All
              </div>
            )}
          </div>
          {posts.length === 0 ? (
            <div className="text-center font-medium tracking-wider">
              There are no posts yet!
            </div>
          ) : (
            <div
              className={`${
                posts.length % 3 === 0 ? "justify-between" : "justify-start"
              } w-full flex flex-wrap gap-2`}
            >
              {/* Post */}
              {viewAllButton ? (
                <>
                  {posts.map((post) => (
                    <ProfilePost key={post?.id} post={post} user={user} />
                  ))}
                </>
              ) : (
                <>
                  {posts.slice(0, 6).map((post) => (
                    <ProfilePost key={post?.id} post={post} user={user} />
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </m.div>
    </>
  );
};

export default UserProfile;
