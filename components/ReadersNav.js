import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import SmallLogo from "../static/smallLogo.png";
import Image from "next/image";
import Link from "next/link";

const ReadersNav = () => {
  return (
    <div className="wrapper  w-[5rem] h-screen flex flex-col p-[1rem] items-center justify-between">
      <Link href={"/"}>
        <div className="cursor-pointer">
          <Image src={SmallLogo} alt="logo" />
        </div>
      </Link>
      <div className="icons flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]">
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className="border-b"></div>
        <BsPencilSquare />
      </div>
    </div>
  );
};

export default ReadersNav;
