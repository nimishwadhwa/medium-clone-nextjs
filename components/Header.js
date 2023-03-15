import React, { useContext } from "react";
import Image from "next/image";
import Logo from "../static/logo.png";
import { MediumContext } from "@/context/MediumContext";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Link from "next/link";
import PostModal from "./PostModal";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

const styles = {};
const Header = () => {
  const { currentUser, handleUserAuth } = useContext(MediumContext);
  const router = useRouter();

  return (
    <div className="flex justify-center gap-10 p-5 bg-[#fcc017]">
      <div className="max-w-7xl flex-1 flex justify-between gap-10 px-2">
        <div className="flex items-center flex-start">
          <Image
            className="cursor-pointer object-contain"
            src={Logo}
            height={40}
            width={200}
            alt="logo"
          />
        </div>
        <div className="flex cursor-pointer items-center space-x-5">
          <div>Our Story</div>
          <div>Membership</div>
          {currentUser ? (
            <Link href={`/?addNew=1`}>
              <div className="bg-black text-white px-4 py-2 rounded-full">
                Write
              </div>
            </Link>
          ) : (
            <div onClick={handleUserAuth}>Sign In</div>
          )}

          <div className="bg-black text-white px-4 py-2 rounded-full">
            {currentUser ? "Get unlimited access" : "Get Started"}
          </div>
        </div>
      </div>

      <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <PostModal />
      </Modal>
    </div>
  );
};

export default Header;
