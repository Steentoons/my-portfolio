import React from "react";

const PortfolioCard = () => {
  return (
    <div className="w-[313px] bg-greenBg rounded cursor-pointer">
      <div className="p bg-white rounded h-[240px]">
        <div className="w-full h-full bg-[url('/src/assets/images/portfolio/portfolio1.png')] rounded "></div>
      </div>
      <div className="p w-full">
        <p className="text-brightGreen text-md mb-sm font-bold">
          COUNTRIES REST
        </p>
        <button className="text text-white">GITHUB REPO</button>
      </div>
    </div>
  );
};

export default PortfolioCard;
