import Image from "next/image";
import React from "react";
import BannerImage from "../static/banner.png";

const Banner = () => {
  return (
    <div className="flex h-max-[10rem] items-center justify-center bg-[#fcc017] border-y border-black">
      <div className="flex flex-1 max-w-7xl items-center justify-between py-2">
        <div className="space-y-5 px-6 flex-[3]">
          <h1 className="max-w-xl text-[6rem] font-mediumSerif">
            Stay curios.
          </h1>
          <h3 className="text-2xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>

          <button className="bg-black text-white px-4 py-2 rounded-full">
            Start reading
          </button>
        </div>
        <Image
          src={BannerImage}
          width={500}
          height={400}
          alt="bannerImage"
          className="hidden h-32px object-contain md:inline-flex flex-1 "
        />
      </div>
    </div>
  );
};

export default Banner;
