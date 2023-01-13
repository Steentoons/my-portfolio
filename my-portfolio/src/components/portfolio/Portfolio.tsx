import React from 'react'
import PortfolioCard from '../portfolio-card/PortfolioCard'

const Portfolio = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center'>
        <h2 className='text-white font-tropikal text-lg mb-md'>PORTFOLIO</h2>
        <section className='w-full gap-x flex justify-start'>
            <PortfolioCard />
        </section>
        <div className='relative mt-[65px]'>
            <button className='bg-greenBg w-[200px] h-[51px] rounded text-brightGreen absolute hover:ml-[-20px] hover:mt-[-20px] z-10'>DOWNLOAD CV</button>
            <div className='bg-white rounded absolute text-white w-[200px] h-[51px]'></div>
        </div>
    </div>
  )
}

export default Portfolio