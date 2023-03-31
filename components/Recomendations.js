import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import authorImage1 from "../static/authorImage1.png";
import authorImage2 from "../static/authorImage2.png";
import authorImage3 from "../static/authorImage3.png";
import recoImage1 from "../static/recoImage1.png";
import recoImage2 from "../static/recoImage2.png";
import recoImage3 from "../static/recoImage3.png";
import Image from "next/image";

const Recomendations = ({ author }) => {
  const followerCount =
    author?.length != 0
      ? Intl.NumberFormat("en-US", {
          notation: "compact",
          maximumFractionDigits: 1,
        }).format(author?.data?.followerCount)
      : 0;
  return (
    <div className="wrapper h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]">
      <div className="bg-black text-white px-4 py-[.6rem] rounded-full flex items-center justify-center my-[2rem] cursor-pointer">
        Get unlimited access
      </div>
      <div className="searchBar flex items-center gap-[.6rem] border rounded-full h-[2.6rem] p-[1rem]">
        <AiOutlineSearch />
        <input
          type="text"
          className="border-none outline-none bg-none w-full"
          placeholder="Search"
        />
      </div>
      <div className="authorContainer my-[2rem]">
        <div className="imageContainer h-[5rem] w-[5rem]">
          {author?.data?.imageURL && (
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${author.data.imageURL}`}
              width={100}
              height={100}
              className="rounded-full"
              alt="authotImage"
            />
          )}
        </div>
        <div className="nameContainer font-semibold mb-[.2rem] mt-[1rem]">
          {author?.data?.name}
        </div>
        <div className="following text-[#787878]">
          {followerCount} followers
        </div>
        <div className="buttonContainer flex gap-[.6rem] my-[1rem]">
          <button className="bg-green-600 text-white px-[.6rem] py-[.4rem] rounded-full text-sm">
            Follow
          </button>
          <button className="bg-green-600 text-white px-[.6rem] py-[.4rem] rounded-full text-sm">
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>

      <div className="recomendationContainer">
        <div className="title">More from Medium</div>
        <div className="artclesContainer flex flex-col pt-4 gap-[1rem] flex-1">
          {recomendedPosts.map((post) => (
            <div
              key={post.id}
              className="articleContentWrapper pb-4 flex flex-1"
            >
              <div className="articleContent flex flex-col flex-1">
                <div className="authorContainer flex items-center gap-[.6rem]">
                  <div className="imageContainer w-[1.4rem] h-[1.4rem]">
                    <Image
                      src={post.author.image}
                      height={100}
                      width={100}
                      className="rounded-full"
                      alt="authorImage"
                    />
                  </div>
                  <div className="titleAuthor text-sm">{post.author.name}</div>
                </div>
                <div className="recoTitle font-bold">{post.title}</div>
              </div>
              <div className="recoThumb flex items-center justify-center w-[4rem]">
                <Image
                  src={post.image}
                  height={50}
                  width={50}
                  className="object-cover"
                  alt="postImage"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const recomendedPosts = [
  {
    id: 1,
    title: "Forget ChatGPT; You will not regret using these AI tools in 2023.",
    image: recoImage1,
    author: {
      name: "Akifquddus",
      image: authorImage1,
    },
  },
  {
    id: 2,
    title:
      "Save 20 Hours a Week By Removing These 4 Useless Things In Your Life",
    image: recoImage2,
    author: {
      name: "Darius Foroux",
      image: authorImage2,
    },
  },
  {
    id: 3,
    title: "6 ChatGPT mind-blowing extensions to use it anywhere",
    image: recoImage3,
    author: {
      name: "Josep Ferrer",
      image: authorImage3,
    },
  },
];

export default Recomendations;
