import React from 'react'

interface SkillType {
    skill: any
}

const Skill = ({skill}:SkillType) => {
  return (
    <div className="mt-[-150px]">
          <div className="w-[150px] h-[150px] ml-[-75px] bg-white absolute z-10 rounded"></div>
          <button className="w-[150px] h-[150px] ml-[-75px] hover:ml-[-95px] hover:mt-[-20px] ease-in-out duration-150 bg-brightGreen absolute z-10 rounded p">
            <div className="bg-greenBg w-full h-full rounded flex justify-center items-center">
              {skill}
            </div>
          </button>
        </div>
  )
}

export default Skill