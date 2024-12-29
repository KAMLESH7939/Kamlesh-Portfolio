import React from 'react'
import vedioBGG from '../assets/vedioBGG.mp4';
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from './MagicButton';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const LetsContact = () => {


  function instaHandler(){

  }
  function linkHandler(){
       
  }
  return (
    <section className='w-full h-screen relative ' >
      <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' />
      <section className='absolute top-0 left-0 w-full h-[70%] flex justify-center items-center flex-col'>
        <div className='w-full h-screen'>
          <img src='../src/assets/footer-grid.svg' alt='no' className='w-full h-[70%] opacity-100' />
        </div>


        <div className="absolute flex justify-center items-center flex-col  ">
          <h1 className=" text-white font-poppins text-[2.3em] font-medium  mt-7 xs:p-6">
            Ready to take <span className="text-[#915eff]">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white md:mt-10 my-5 text-center xs:p-5">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:kamleshguru2611@gmail.com" className="cursor-pointer">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>





      </section>
      <section className='absolute top-[70%] w-full h-[30%]'>

        <div className='big'>
          FIND ME ON
        </div>
        <p className='text-white text-center mt-2 mb-5'>© 2024 Kamlesh-All Rights Reserved.</p>
        <div className='flex flex-row justify-center items-center gap-[4rem] mt-2'>
        <a href='https://github.com/KAMLESH7939'><FaGithub className='h-10 w-10 text-white abc' /></a>
        <a href='https://www.linkedin.com/in/kamlesh-b08306259/'><FaLinkedin className='h-10 w-10 text-white abc' onClick={linkHandler} /></a>
        <FaInstagram className='h-10 w-10 text-white abc  ' onClick={instaHandler} />
        </div>

      </section>
    </section>
  )
}

export default LetsContact
