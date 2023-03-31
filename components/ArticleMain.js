import Image from "next/image";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const ArticleMain = ({ post, author }) => {
  return (
    <>
      {post.length != 0 && author != undefined && (
        <div className="wrapper flex items-center justify-center flex-[3] border-l border-r">
          <div className="content flex-1 w-full  h-screen p-[2rem]">
            <div className="postHeaderContainer flex justify-between items-center mt-[2.2rem] mb-[1.2rem]">
              <div className="authorContainer flex gap-[1rem]">
                <div className="profileImage h-[3rem] w-[3rem] grid center">
                  {author?.data?.imageURL && (
                    <Image
                      src={`https://res.cloudinary.com/demo/image/fetch/${author.data.imageURL}`}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                      alt="author"
                    />
                  )}
                </div>
                <div className="column flex flex-col justify-center">
                  <div className="title">{author?.data?.name}</div>
                  <div className="posDetails flex gap-[.2rem] text-[#787878]">
                    <span className="">
                      {new Date(post?.data?.postDate.toDate()).toLocaleString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                        }
                      )}{" "}
                      · {post?.data?.postLength} min read ·
                    </span>

                    <span className="flex items-center gap-[.2rem] text-[#1A8917]">
                      <AiFillPlayCircle /> Listen
                    </span>
                  </div>
                </div>
              </div>
              <div className="socials flex gap-[1rem] cursor-pointer text-[#787878]">
                <IoLogoTwitter />
                <FaFacebook />
                <GrLinkedin />
                <HiOutlineLink />
                <div className="space w-[.5rem]"></div>
                <BiBookmarks />
                <FiMoreHorizontal />
              </div>
            </div>
            <div className="articleMainContainer flex flex-col gap-[1rem]">
              <div className="bannerContainer flex items-center justify-center h-[18rem] w-full mb-[2rem] overflow-hidden">
                {post?.data?.bannerImage && (
                  <Image
                    src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
                    className="object-cover"
                    width={500}
                    height={500}
                    alt="banner"
                  />
                )}
              </div>
              <h1 className="title font-bold text-3xl">{post?.data?.title}</h1>
              <h4 className="subtitle font-mediumSerifItalic text-[1.rem] text-[#292929]">
                <div className="name">
                  {author?.data?.name},{" "}
                  {new Date(post?.data?.postDate.toDate()).toLocaleString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </div>
                <div className="brief">{post?.data?.brief}</div>
                <div className="articleText font-mediumSerif text-[1.rem] text-[#292929]">
                  {post?.data?.body}
                </div>
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleMain;
