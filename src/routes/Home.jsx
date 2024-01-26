import React from "react";
import { usePosts } from "../hooks/posts";
import Posts from "../components/posts/Posts";

const Home = () => {
  const { posts, isLoading } = usePosts();

  return <Posts posts={posts} isLoading={isLoading} />;
};

export default Home;
