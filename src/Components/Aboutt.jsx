import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import  {services}  from '../constants/indexed'
import { fadeIn, textVariant } from '../utils/motion'
import vedioBGG from '../assets/vedioBGG.mp4'
import yoo from '../assets/yoo.mp4'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index , title, icon}) =>(
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[290px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)
const Aboutt = () => {
  return (
    
    <section className='relative w-full h-screen mx-auto'>
      
      <video src={yoo} loop autoPlay muted className='w-full h-full object-cover' />
      <motion.div className='absolute top-[5%]  md:left-[7%] lg:left-[13%] left-[10%]'  variants={textVariant()}>
      
        <p className={`${styles.sectionSubText} font-bold font-poppins`} >Introduction </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
         <motion.p variants={fadeIn("", "", 0.1, 1)} className= 'mt-4 text-secondary font-medium sm:text-[17px] text-[14px] max-w-3xl  leading-[30px]'>
         I'm a skilled software developer with experience in Javascript and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
         </motion.p>

 
         <div className='mt-20 flex flex-wrap gap-[4rem] max-w-7xl'>
           {
            services.map((service, index) => {
              return(
                <ServiceCard key={service.title} index={index} {...service} />
              );
           } )
           }
                      
         </div>



      </motion.div>
    </section>
  )
}

export default SectionWrapper(Aboutt, "about")
