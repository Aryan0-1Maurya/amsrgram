import React, { lazy, useEffect, useState } from "react";
import { motion as m } from "framer-motion";
const IndividualPost = lazy(() => import("./IndividualPost"));
const SkeletonPost = lazy(() => import("./SkeletonPost"));

const Posts = ({ posts, isLoading }) => {
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    const skeletonLoadingTimeout = setInterval(() => {
      setSkeletonLoading(false);
    }, 1500);

    return () => {
      clearInterval(skeletonLoadingTimeout);
      setSkeletonLoading(true);
    };
  }, []);

  if (isLoading) return null;

  return (
    <>
      {skeletonLoading ? (
        <div className="h-full w-full max-w-[500px] m-auto bg-white p-4 grid grid-cols-2 gap-8 text-black">
          {posts.slice(0, 4).map((post) => (
            <SkeletonPost key={post?.id} post={post} />
          ))}
        </div>
      ) : (
        <m.div className="animate-animateOpacity h-full w-full max-w-[500px] m-auto bg-white p-4 mb-8 grid grid-cols-2 gap-8 text-black">
          {posts.map((post) => (
            <IndividualPost key={post?.id} post={post} />
          ))}
        </m.div>
      )}
    </>
  );
};

export default Posts;
