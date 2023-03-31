import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { MediumContext } from "@/context/MediumContext";

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);
  const { users } = useContext(MediumContext);

  /* Method 1 -> same as in [slug].js
  Fetching users data from Context 
  and matching each user.id on the basis of post.data.author i.e email
  and setting it in state
  */

  // useEffect(() => {
  //   setAuthorData(users.find((user) => user.id === post.data.author));;
  // }, []);

  /* Method 2 -> 
  Fetching author data from firestore 
  on the basis of post.data.author i.e email and setting it in state
  */

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData((await getDoc(doc(db, "users", post.data.author))).data());
    };
    getAuthorData();
  }, [authorData]);

  return (
    <Link href={`/post/${post.id}`}>
      <div className="wrapper px-3 flex max-w-[48rem] items-center h-[12rem] md:h-[10rem] sm:h-[10rem] gap-[1rem] cursor-pointer">
        <div className="posdetails flex flex-col flex-[2.5]">
          <div className="authorContainer flex items-center space-x-2">
            <div className="imageContainer grid place-items-center h-[1.4rem] w-[1.4rem]">
              {authorData?.imageURL && (
                <Image
                  src={`https://res.cloudinary.com/demo/image/fetch/${authorData.imageURL}`}
                  className="object-cover rounded-full "
                  width={40}
                  height={40}
                  alt="authorImage"
                />
              )}
            </div>
            <div className="font-semibold">{authorData?.name}</div>
          </div>
          <div className="detailsContainer">
            <h2 className="font-bold text-2xl">{post.data.title}</h2>
            <div className="text-[#757575">{post.data.brief}</div>
            <div className="detailsContainer text-[#757575] text-[.8rem] flex py-2 items-center justify-between">
              <span className="my-2 ">
                {new Date(post?.data?.postDate.toDate()).toLocaleString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                  }
                )}{" "}
                · {post.data.postLength} min read ·{" "}
                <span className="p-1 rounded-full bg-[#f2f2f2]">
                  {post.data.category}
                </span>
              </span>
              <span className="cursor-pointer">
                <FiBookmark className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
        <div className="thumbContainer flex-1">
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            width={70}
            height={70}
            alt="thumbimage"
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
