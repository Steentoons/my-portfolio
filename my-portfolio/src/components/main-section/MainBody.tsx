import MainHome from "../home/MainHome.jsx"
import Portfolio from "../portfolio/Portfolio.js";

const MainBody = () => {
  return (
    <div className="w-full relative flex">
      <div className="w-full h-[825px] bg-greenBg mt">
        <div className="max-w-[1217px] rounded-lg bg-[url('/src/assets/images/city-bg.png')] h-full">
          <main className="w-full h-full bg-gradient-to-r from-[#34E89E]/80 to-[#0F3443]/80 rounded-lg">
            <MainHome />
            {/* <Portfolio /> */}
          </main>
        </div>
      </div>
      <div className='h-full flex items-center'>
        <div className="h-[548px] w-[42px] bg-[#264B51] rounded-l-[30px]"></div>
      </div>
    </div>
  );
};

export default MainBody;
