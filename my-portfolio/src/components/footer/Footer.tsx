import React from "react";
import { SiFrontendmentor } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <footer className="bg-greenBg p flex justify-between items-center">
      {/* socials... */}
      <section className="flex gap-x-sm border-solid border-[5px] p border-borderLight rounded">
        <div className="w-[70px] h-[70px] border-[5px] border-borderHover border-solid rounded flex items-center justify-center cursor-pointer hover:border-brightGreen">
          <MdOutlineMail className="text-[36px] fill-white" />
        </div>
        <div className="w-[70px] h-[70px] border-[5px] border-borderHover border-solid rounded flex items-center justify-center cursor-pointer hover:border-brightGreen ">
          <FaLinkedinIn className="text-[36px] fill-white" />
        </div>
        <div className="w-[70px] h-[70px] border-[5px] border-borderHover border-solid rounded flex items-center justify-center cursor-pointer hover:border-brightGreen ">
          <FiDribbble className="text-[36px] stroke-white" />
        </div>
        <div className="w-[70px] h-[70px] border-[5px] border-borderHover border-solid rounded flex items-center justify-center cursor-pointer hover:border-brightGreen ">
          <FaGithub className="text-[36px] fill-white" />
        </div>
        <div className="w-[70px] h-[70px] border-[5px] border-borderHover border-solid rounded flex items-center justify-center cursor-pointer hover:border-brightGreen ">
          <SiFrontendmentor className="text-[36px] fill-white" />
        </div>
      </section>
      <nav className="flex justify-center gap-x-[12px]">
        <button className="w h bg-[#41656A] rounded-full border-[5px] border-solid border-[#41656A] hover:bg-brightGreen"></button>
        <button className="w h bg-[#41656A] rounded-full border-[5px] border-solid border-[#41656A] hover:bg-brightGreen"></button>
        <button className="w h bg-[#41656A] rounded-full border-[5px] border-solid border-[#41656A] hover:bg-brightGreen"></button>
        <button className="w h bg-[#41656A] rounded-full border-[5px] border-solid border-[#41656A] hover:bg-brightGreen"></button>
      </nav>
      <section className="flex gap-x-sm border-solid border-[5px] p border-borderLight rounded">
        <button className="w-[70px] h-[70px] flex justify-center items-center rounded bg-brightGreen/60 hover:bg-brightGreen">
          <AiFillCaretLeft className="text-[36px] fill-white" />
        </button>
        <button className="w-[70px] h-[70px] flex justify-center items-center rounded bg-brightGreen/60 hover:bg-brightGreen">
          <AiFillCaretRight className="text-[36px] fill-white" />
        </button>
      </section>
    </footer>
  );
};

export default Footer;
