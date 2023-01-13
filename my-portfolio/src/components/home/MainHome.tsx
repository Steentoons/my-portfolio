import React from "react";
import { FaReact } from "react-icons/fa";
import portrait from "../../assets/images/portrait.png";
import Skill from "../skill/Skill";

const MainHome = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="w-0 relative">
        <div className="h-full w-[526px] absolute">
          <img src={portrait} className="h-full" alt="portrait" />
        </div>
      </div>
      <div className="w-0 relative flex items-center">
        <Skill skill={<FaReact className="w-[80px] h-[80px] fill-white" />} />
        <div className="ml-[-80px] mb-[-430px] absolute pb-[56px] z-20 w-full flex items-end flex-col bg-black">
          <h1 className="font-tropikal text-white text-title w-[640px] leading-[150px] text-right">
            Augustine Kirumba
          </h1>
          <h3 className="text-brightGreen text-xmd min-w-[260px]">
            FRONTEND DEVELOPER
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
