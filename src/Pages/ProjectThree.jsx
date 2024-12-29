import React from 'react'
import vedioBGG from '../assets/vedioBGG.mp4'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants/indexed'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectThree = () => {
  
  if( window.innerWidth < 768  ){
     return(
      <section className='relative w-full h-screen mx-auto'>
        
              <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' />
          
          
        
        
              <div className='absolute top-0 left-0 w-full h-full flex flex-col flex-wrap gap-4 '>
        
             
               
                <div className='w-[100%] h-[50%] flex flex-col items-center gap-[4rem] btnclass'>
                  <div className='pictur  ml-[2rem] mr-[2rem]'>
                    <div className='m-4'>
                      <img src='./src/Image/pic07.png' alt='no' className='' />
                    </div>
                    <div className='text-center '>
                      <h2 className='text-white text-[2rem] fredericka-the-great-regular  '>Password Generator</h2>
                    </div>
                    <div>
                      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-1 mb-3 m-5 text-white font-medium  text-[16px]  leading-[30px] text-center griffy-regular'>
                        Following projects showcases my skills and experience through
                        real-world examples of my work.
                      </motion.p>
                    </div>
                    <div className='flex justify-center items-center gap-[1.2rem] mb-6 btnclass'>
                      <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest btnclass'> <a href='https://github.com/KAMLESH7939/Password_Generator' className='flex justify-center items-center gap-4 text-white'><img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</a></button>
                      <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://kamlesh7939.github.io/Password_Generator/' className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8' src='./src/Image/demo.png' alt='no' />  DEMO </a> </button>
                    </div>
                  </div>
        
                  <div className='pictur  ml-[2rem] mr-[2rem]'>
                    <div className='m-4'>
                      <img src='./src/Image/pic08.png' className='' alt='no' />
                    </div>
                    <div className='text-center'>
                    <h2 className='text-white text-[2rem] fredericka-the-great-regular tracking-wide '>Razorpay Clone</h2>
                    </div>
                    <div>
                      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-1 mb-3 m-5 text-white font-medium text-[16px]   leading-[30px] text-center griffy-regular'>
                        Following projects showcases my skills and experience through
                        real-world examples of my work.
                      </motion.p>
                    </div>
                    <div className='flex justify-center items-center gap-[1.2rem] mb-6 btnclass'>
                      <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://github.com/KAMLESH7939/RAZorpay_CLone' className='flex justify-center items-center gap-4 text-white'><img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</a></button>
                      <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://kamlesh7939.github.io/RAZorpay_CLone/' className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8' src='./src/Image/demo.png' alt='no' />  DEMO </a> </button>
                    </div>
                  </div>
        
                  <div className='pictur ml-[2rem] mr-[2rem]'>
                    <div className=' m-4'>
                      <img src='./src/Image/pic09.png' className='' alt='no' />
                    </div>
      
                    <div className='text-center'>
                    <h2 className='text-white text-[2rem] fredericka-the-great-regular tracking-wide '>Plan With Kamlesh</h2>
                    </div>
                    <div>
                      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-1 mb-3 m-5 text-white font-medium text-[16px]  leading-[30px] text-center griffy-regular'>
                        Following projects showcases my skills and experience through
                        real-world examples of my work.
                      </motion.p>
                    </div>
                    <div className='flex justify-center items-center gap-[1.2rem] mb-6 btnclass'>
                      <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <div className='flex justify-center items-center gap-4 text-white'> <img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</div></button>
                      <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <div className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8 ' src='./src/Image/demo.png' alt='no' />  DEMO </div> </button>
                    </div>
                  </div>
        
                </div>
        
        
              </div>
              
            </section>
     )
  } 

  else {
  return (
    <section className='relative w-full h-screen mx-auto'>

      <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' />


      <div className='absolute top-0 left-0 w-full h-full flex flex-col flex-wrap gap-4 '>

        <div className='w-full h-full flex sm:flex-row sm:flex-wrap flex-col justify-center items-center flex-nowrap gap-[2.5rem] bf '>
          <div className='h-[80%] p-5 sm:w-[26%]  w-[80%] border-[2px] border-[#623686] cardd'>
            <div>
              <img src='./src/Image/pic07.png' alt='no' className='mb-2' />
            </div>
            <div className='text-center mt-5'>
              <h2 className='text-white text-[1.7rem] fredericka-the-great-regular  '>Password Generator</h2>
            </div>
            <div>
              <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-5 mb-5 text-white font-medium sm:text-[18px] text-[14px] max-w-3xl  leading-[30px] text-center griffy-regular'>
              One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols. • One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak.
              </motion.p>
            </div>
            <div className='flex justify-center items-center gap-[1.5rem] mt-6 btnclass'>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://github.com/KAMLESH7939/Password_Generator' className='flex justify-center items-center gap-4 text-white'><img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</a></button>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://kamlesh7939.github.io/Password_Generator/' className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8' src='./src/Image/demo.png' alt='no' />  DEMO </a> </button>
            </div>
          </div>

          <div className='h-[80%] p-5 w-[26%]  border-[#623686] cardd'>
            <div>
              <img src='./src/Image/pic08.png' className='mb-2' alt='no' />
            </div>
            <div className='text-center mt-5'>
            <h2 className='text-white text-[1.7rem] fredericka-the-great-regular tracking-wide '>Razorpay Clone</h2>
            </div>
            <div className='te'>
              <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-5 mb-5 text-white font-medium sm:text-[18px] text-[14px] max-w-3xl  leading-[30px] text-center griffy-regular'>
               Razorpay clone website created as part of the WebDev course by Love Babbar. It serves as a practical implementation of web development concepts using the Tailwind CSS framework. Razorpay is a popular payment gateway in India.
              </motion.p>
            </div>
            <div className='flex justify-center items-center gap-[1.5rem] mt-6 btnclass'>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://github.com/KAMLESH7939/RAZorpay_CLone' className='flex justify-center items-center gap-4 text-white'><img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</a></button>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://kamlesh7939.github.io/RAZorpay_CLone/' className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8' src='./src/Image/demo.png' alt='no' />  DEMO </a> </button>
            </div>
          </div>

          <div className='h-[80%] p-5 w-[26%] border-[2px] border-[#623686] cardd'>
            <div>
              <img src='./src/Image/pic09.png' className='mb-2' alt='no' />
            </div>
            <div className='text-center mt-5'>
            <h2 className='text-white text-[1.7rem] fredericka-the-great-regular tracking-wide '>Plan With Kamlesh</h2>
            </div>
            <div>
              <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-5 mb-5 text-white font-medium sm:text-[18px] text-[14px] max-w-3xl  leading-[30px] text-center griffy-regular'>
              tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services. 
              </motion.p>
            </div>
            <div className='flex justify-center items-center gap-[1.5rem] mt-6 btnclass'>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <div className='flex justify-center items-center gap-4 text-white'> <img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</div></button>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <div className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8 ' src='./src/Image/demo.png' alt='no' />  DEMO </div> </button>
            </div>
          </div>

        </div>


      </div>

    </section>
  )
}
}

export default ProjectThree
