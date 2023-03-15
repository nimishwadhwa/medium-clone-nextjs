import { MediumContext } from "@/context/MediumContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { db } from "../firebase";

const PostModal = () => {
  const { currentUser } = useContext(MediumContext);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [postLength, setPostLength] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [body, setBody] = useState("");

  const addPostToFirebase = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "articles"), {
      bannerImage: bannerImage,
      body: body,
      category: category,
      brief: brief,
      postDate: serverTimestamp(),
      postLength: Number(postLength),
      title: title,
      author: currentUser.email,
    });
    router.push("/");
  };

  return (
    <form onSubmit={addPostToFirebase}>
      <div className="wrapper w-[70rem] h-[50rem] flex flex-col items-center justify-start font-mediumSerif gap-[1rem] p-[1rem]">
        <div className="title my-[2rem] font-bold text-3xl">
          Create New Post
        </div>
        <div className="smallField w-full flex justify-between gap-[1rem]">
          <span className=" flex-1 text-end">Title</span>
          <span className="flex-[5] h-min border-2 border-[#787878]">
            <input
              type="text"
              required
              className="w-full border-0 outline-none bg-transparent"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </span>
        </div>
        <div className="smallField w-full flex justify-between gap-[1rem]">
          <span className=" flex-1 text-end">Brief</span>
          <span className="flex-[5] h-min border-2 border-[#787878]">
            <input
              type="text"
              className="w-full border-0 outline-none bg-transparent"
              value={brief}
              required
              onChange={(event) => setBrief(event.target.value)}
            />
          </span>
        </div>
        <div className="smallField w-full flex justify-between gap-[1rem]">
          <span className=" flex-1 text-end">Banner Image URL</span>
          <span className="flex-[5] h-min border-2 border-[#787878]">
            <input
              type="text"
              required
              className="w-full border-0 outline-none bg-transparent"
              value={bannerImage}
              onChange={(event) => setBannerImage(event.target.value)}
            />
          </span>
        </div>
        <div className="smallField w-full flex justify-between gap-[1rem]">
          <span className=" flex-1 text-end">Category</span>
          <span className="flex-[5] h-min border-2 border-[#787878]">
            <input
              type="text"
              required
              className="w-full border-0 outline-none bg-transparent"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </span>
        </div>
        <div className="smallField w-full flex justify-between gap-[1rem]">
          <span className=" flex-1 text-end">
            Estimated Read Length (in minutes)
          </span>
          <span className="flex-[5] h-min border-2 border-[#787878]">
            <input
              type="number"
              required
              className="w-full border-0 outline-none bg-transparent"
              value={postLength}
              onChange={(event) => setPostLength(event.target.value)}
            />
          </span>
        </div>
        <div className="smallField w-full flex justify-between gap-[1rem]">
          <span className=" flex-1 text-end">Article Text</span>
          <span className="flex-[5] h-min border-2 border-[#787878]">
            <textarea
              type="text"
              rows={12}
              required
              className="w-full border-0 outline-none bg-transparent"
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
          </span>
        </div>
        <input
          type="submit"
          className="bg-black text-white px-4 py-2 mb-2 rounded-full cursor-pointer"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default PostModal;
