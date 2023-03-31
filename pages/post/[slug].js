import ArticleMain from "@/components/ArticleMain";
import ReadersNav from "@/components/ReadersNav";
import Recomendations from "@/components/Recomendations";
import { MediumContext } from "@/context/MediumContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Post = () => {
  const { posts, users } = useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    if (posts.length == 0 || users.length == 0) {
      return;
    }

    setPost(posts.find((post) => post.id === router.query.slug));
    setAuthor(users.find((user) => user.id === post.data?.author));
  }, [posts, router.query.slug, author]);

  return (
    <div className="flex justify-between">
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recomendations author={author} />
    </div>
  );
};

export default Post;
