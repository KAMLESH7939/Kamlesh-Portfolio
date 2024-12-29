import React from 'react'
import { motion, px } from 'framer-motion';
import { styles } from '../styles'
import ComputersCanvas from "../Components/canvas/Computers"
import vedioBGG from '../assets/vedioBGG.mp4'
import infinit from '../assets/infinit.mp4'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Aboutt from '../Components/Aboutt'
import Experience from '../Components/Experience';
import Project from '../Pages/Project';
import ProjectTwo from '../Pages/ProjectTwo'
import ProjectThree from '../Pages/ProjectThree'
import Foot from '../Components/Foot'
import Myapproach from './Myapproach';
import LetsContact from '../Components/LetsContact';

const About = () => {

    const [typeEffect] = useTypewriter({
        words: [' React Developer ', ' Frontend Developer', '  Software Developer', ' Web Developer', ' Coder '],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })


    if (window.innerWidth < 764) {
        return (
            <section className='bg-primary'>
                <section className='relative w-full h-screen bg-primary'>

                    <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
                    <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen mx-auto '>
                        <div className={`${styles.paddingX} absolute inset-0 top-[100px] left-[2px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                            <div className='flex flex-col justify-center items-center mt-5'>
                                <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                                <div className='w-1 sm:h-80 h-40 violet-gradient' />
                            </div>
                            <div className=''>
                                <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#915eff]'>Kamlesh</span> </h1>
                                <p className={`${styles.heroSubText} mt-2`}>
                                    <span className='hand text-[1.5em]'>👀</span>I am a
                                    <span className='text-[#915eff] font-[700]'>
                                        {typeEffect}
                                    </span>
                                </p>

                                <p className='text-[1em] mt-2 text-white w-[80%]' >
                                    I’m a software developer <br />  and here is my portfolio website .
                                </p>

                                <img src='../src/assets/degree.png' alt='no' className='w-16 h-16 absolute  left-[40%] top-[30%] ' />

                            </div>
                        </div>
                        <ComputersCanvas />

                        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                            <a href='#about'>
                                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                                    <motion.div
                                        animate={{
                                            y: [0, 24, 0],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "loop",
                                        }}
                                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                                    />
                                </div></a>
                        </div>

                    </div>
                </section>
                <Aboutt />

                <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-full  object-cover' />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-full  object-cover' />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-[7rem]  object-cover' />
                
                
               
                <Experience />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-[27rem] object-cover' />

                <Project/>
                <video src={vedioBGG} loop autoPlay muted className='w-full h-[27rem] object-cover' /><video src={vedioBGG} loop autoPlay muted className='w-full h-[40rem] object-cover' />
                

                <ProjectTwo/>
                <video src={vedioBGG} loop autoPlay muted className='w-full h-[14rem] object-cover' /><video src={vedioBGG} loop autoPlay muted className='w-full h-[40rem] object-cover' />
              
                <ProjectThree />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-[10rem] object-cover' /><video src={vedioBGG} loop autoPlay muted className='w-full h-[40rem] object-cover' />

                <Myapproach />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-[10rem] object-cover' /> 
                
                <LetsContact/>
                
            </section>

        )
    }
    else {
        //   return (
        //     <div className='h-[100vh] w-[100vw] bg-black flex justify-center items-center'>

        //        <Canvas className='h-[50%] w-[50%]'
        //                camera={{ near: 0.1, far: 1000}}
        //        >
        //        {/* Suspense is wrapper , fallback is time req to loa out */}

        //          <Suspense fallback={<Loader/>}>

        //               <directionalLight position={[10,10,10] } intensity={7}/>
        //              <ambientLight intensity={1}/> 


        //              <hemisphereLight skyColor="yellow" groundColor="#efefef" intensity={1} />  
        //              <Environment preset='studio'/>
        //              <OrbitControls enableRotate={true}  autoRotate={false} autoRotateSpeed={4} rotateSpeed={2} enableZoom={false} />
        //              <Spiderman 
        //               scale={[200,200,200]}

        //              />
        //              {/* <Desk
        //              rotation={[1,-2,1]}

        //               scale={[2,2,2]}
        //              /> */}


        //          </Suspense>
        //        </Canvas>


        //        <div className='h-[50%] w-[50%]'>
        //          <h1 className='text-center text-4xl font-bold text-white'>About</h1>
        //          <p className='text-center text-xl text-white'>This is a 3D model of Spiderman.</p>
        //          <p className='text-center text-xl text-white'>Click on the model to rotate it.</p>
        //        </div>

        //     </div>
        //   )
        // }

        // export default About


        return (
            <section className='bg-primary'>
                <section className='relative w-full h-screen bg-primary'>

                    <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
                    <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen mx-auto '>
                        <div className={`${styles.paddingX} absolute inset-0 top-[100px] left-[2px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                            <div className='flex flex-col justify-center items-center mt-5'>
                                <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                                <div className='w-1 sm:h-80 h-40 violet-gradient' />
                            </div>
                            <div className='relative'>
                                <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#915eff] font-poppins'>Kamlesh</span> </h1>
                                <p className={`${styles.heroSubText} mt-2`}>
                                    <span className='hand text-[1.5em]'>👀</span>I am a
                                    <span className='text-[#915eff] font-[700]'>
                                        {typeEffect}
                                    </span>
                                </p>

                                <p className='text-[1em] mt-2 text-white w-[80%]' >
                                    I’m a software developer <br />  and here is my portfolio website .
                                </p>

                                <img src='../src/assets/degree.png' alt='no' className='w-16 h-16 absolute  xs:left-[100%] xs:top-[60%] ' />

                            </div>
                        </div>
                        
                        <ComputersCanvas />

                        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                            <a href='#about'>
                                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                                    <motion.div
                                        animate={{
                                            y: [0, 24, 0],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "loop",
                                        }}
                                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                                    />
                                </div></a>
                        </div>

                    </div>
                </section>
                <Aboutt />
                
                <Experience />

                <Project /> 

                <ProjectTwo />

                <ProjectThree />

                <Myapproach />  

                <LetsContact/>





            </section>

        )
    }
}

export default About