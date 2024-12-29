import React from 'react'
import yoo from '../assets/yoo.mp4'
import vedioBGG from '../assets/vedioBGG.mp4'
import { BallCanvas } from "../Components/canvas/Ball.jsx"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants/indexed'
const Experience = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

      <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center  xs:mt-[20px]   mb-6'>
          <h1 className='text-white  text-[2.3em] font-medium cursor'>Professional <span className='text-[#915eff] font-bold text-[3rem] fredericka-the-great-regular'>SkillSet</span></h1>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-7 w-[90%] '>
          {technologies.map((technology) => (
            <div className='flex justify-center items-center border-[2px] border-[#C889E6] h-[135px] w-[200px] rekhaa cursor-pointer' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))

          }
        </div>

        <div className='flex justify-center items-center'>
          <h1 className='text-white text-[2.3em] font-medium mt-8 mb-5'>Tools <span className='text-[#915eff] font-bold text-[3rem] fredericka-the-great-regular'>I use</span></h1>
        </div>

        <div className='flex flex-row flex-wrap justify-center gap-7 w-[90%]'>
          <div className='rekha'>
            <img src='./src/assets/icons/free_icon_2.svg' alt='no' className='text-white w-[100px] h-[100px]' />
          </div>
          <div className='w-[196px] h-[130px] rekhaa'>
            <img src='./src/assets/icons/free_icon_3.svg
        ' alt='no' className='text-white h-28 w-28' />
          </div>
          <div className='rekha '>
            <img src='./src/assets/icons/free_icon_1.svg' alt='no' className='text-white w-[110px] h-[100px]' />
          </div>
          <div className='rekha'>
            <img src='./src/assets/icons/free_icon_4.svg' alt='no' className='text-white w-[110px] h-[100px]' />
          </div>
        </div>

      </div>

    </section>
  )
}

export default SectionWrapper(Experience, "");