import Banner from "@/components/Banner";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";

import { MediumContext } from "../context/MediumContext";
import { useContext } from "react";

export default function Home() {
  const { posts } = useContext(MediumContext);

  return (
    <div className="wrapper mx-auto">
      <Header />
      <Banner />
      <div className="main flex justify-center ">
        <div className="container max-w-7xl">
          <div className="postList flex flex-col  gap-4 p-2 sm:grid-cols-2 md:p-6 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
