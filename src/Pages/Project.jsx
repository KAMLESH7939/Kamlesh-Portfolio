// import React from 'react'
// import { LiaPagerSolid } from "react-icons/lia";
// import { useState } from 'react';
// import pic01 from '../../src/Image/pic01.png';
// import pic02 from '../../src/Image/pic02.png';
// import pic03 from '../../src/Image/pic03.png';
// import pic04 from '../../src/Image/pic04.png';
// import pic05 from '../../src/Image/pic05.png';
// import pic06 from '../../src/Image/pic06.png';
// import pic07 from '../../src/Image/pic07.png';
// import pic08 from '../../src/Image/pic08.png';
// import pic09 from '../../src/Image/pic09.png';
// import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";
// import Footer from '../Components/Footer';
// import { animated } from '@react-spring/three';
// import Spiderman from '../Models/Spiderman';
// import Loader from '../Components/Loader';
// import { Environment } from '@react-three/drei';
// import { OrbitControls } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import { Suspense } from 'react';
// const Project = () => {

// let [marginTop, setMarginTop] = useState(0);
// let [top, setTop] = useState(0);
// let [left, setLeft] = useState(0);
// let [top1, setTop1] = useState(0);

// window.addEventListener('scroll', () => {

// })
//   window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     top1 = value;
//     setTop1(top1);
//     marginTop = value * 2.5;
//     setMarginTop(marginTop);
//     top = value * -1.5;
//     setTop(top);
//     left = value * 1.5;
//     setLeft(left);
//   })

//   const allItems = [
//     {
//       name: "Tic Tac Twist OX ",
//       des: "",
//       background:  pic01 
//     },
//     {
//       name: "Telford Longue",
//       des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum?",
//       background:  pic02 
//     },
//     {
//       name: "Weather App",
//       des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum?",
//       background:  pic03 
//     },
//     {
//       name: "Parallax Effect",
//       des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum?",
//       background:  pic04 
//     },
//     {
//       name: "My Gallery",
//       des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum?",
//       background:  pic05 
//     },
//     {
//       name: "Elite Courses",
//       des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum?",
//       background:  pic06 
//     },
//     {
//       name: "Password Generator",
//       des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum?",
//       background:  pic07 
//     },
//     {
//       name: "Razorpay Clone",
//       des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum?",
//       background:  pic08 
//     },
//     {
//       name: "Plan With Kamlesh",
//       des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum?",
//       background:  pic09 
//     }
//   ]
//   const [items , setItems] = useState(allItems);

//  const handlenext = () =>{
//    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]])
//  }

// //  setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
//  const handleprev = () =>{
//   setItems((prevItems) => [prevItems[prevItems.length-1], ...prevItems.slice(0, -1)]);
// }
// return (

// <div className=' bg-[#eeeeee]'>

/* <audio controls autoPlay loop >
  <source src='../../src/Image/Titanic.mp3' type='audio/mp3' />
</audio>
scroll-smooth m-0 p-0   overflow-y-hidden overflow-x-hidden
 */

/* <div className='z-index-1000 fixed w-[50vw] h-[50vh] top-0 right-[40rem] flex justify-center items-center' >
  <Canvas className=''
           camera={{ near: 0.1, far: 1000}} 
   >
   
     <Suspense fallback={<Loader/>}>

        <directionalLight position={[10,10,10] } intensity={7}/>
         <ambientLight intensity={1}/> 
       
    
         <hemisphereLight skyColor="yellow" groundColor="#efefef" intensity={1} />  
         <Environment preset='studio'/>
         <OrbitControls enableRotate={true}  autoRotate={false} autoRotateSpeed={4} rotateSpeed={2} enableZoom={false} />
         <Spiderman 
          scale={[200,200,200]}

         />



     </Suspense>
   </Canvas>
   </div> */




{/* parallex effect */ }
/* <section className=' overflow-hidden parallax  w-screen h-screen relative flex justify-center items-center text-[#3d3c3c]'>

  <img src='./src/Image/hill1.png' style={{ top: top1 + 'px' }} className='hill1' />
  <img src='./src/Image/hill2.png' className='hill2' />
  <img src='./src/Image/hill3.png' className='hill3' />
  <img src='./src/Image/hill4.png' style={{ left: top + 'px' }} className='hill4' />
  <img src='./src/Image/hill5.png' style={{ left: left + 'px' }} className='hill5' />
  <img src='./src/Image/tree.png' className='tree' />
  <h2 className='textt fredericka-the-great-regular ' style={{
    fontSize: '5em',
    position: 'relative',
    color: '#fff',
    marginTop: marginTop
  }}>PROJECTS</h2>
  <img src='./src/Image/leaf.png' style={{ top: top, left: left + 'px' }} className='leaf' />
  <img src='./src/Image/plant.png' className='plant' />
</section>



<div className='bg-[#eeeeee] h-screen relative' >
<div className='containerr'>
  <div className='slide'>
    {
      items.map((item, index) => (

        <div key={index} className='item'
        style={{backgroundImage: `url(${item.background})`}}
        >
         {/* forum regular */
/*<div className='content'> 
  <h2 className='name font-bold text-2xl griffy-regular '>{item.name} </h2>
  <p className='description italianno-regular'>{item.des}</p>

  <div className='flex  gap-[1.5rem] pl-1'>
  <button className='bg-red-200 rounded-md p-2 anton-sc-regular'> <div className='flex justify-center items-center gap-3'><img src='./src/Image/Github.svg' alt='no'/> GIT HUB</div></button>
  <button className='bg-red-200 rounded-md p-2 anton-sc-regular'> <div className='flex justify-center items-center gap-3'> <img className='w-10 h-10' src='./src/Image/demo.png' alt='no'/>  DEMO </div> </button>
  </div>

</div>
</div>
))
}
</div>
<div className='button flex flex-row  justify-center items-center gap-3 ' >
<button onClick={handleprev} className='prev flex justify-center items-center'>
<FaArrowLeftLong />
</button>
<button onClick={handlenext} className='next flex justify-center items-center'>
<FaArrowRightLong />
</button>
</div>

</div>

</div>

<Footer/>



</div> 
)
}

export default Project */



import React from 'react'
import vedioBGG from '../assets/vedioBGG.mp4'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants/indexed'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = () => {

}

const Project = () => {
   if(window.innerWidth < 768){
    return (
      <section className='relative w-full h-screen mx-auto'>
  
        <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' />
    
    
  
  
        <div className='absolute top-0 left-0 w-full h-full flex flex-col flex-wrap gap-4 '>
  
          <div className='flex justify-center items-center flex-col'>
            <h1 className='text-white font-poppins text-[2.3em] font-medium  mt-7'>My Recent <span className='text-[#915eff] text-[3rem] fredericka-the-great-regular'>Works</span></h1>
            <p className='text-white font-poppins'>Here are a few projects I've worked on recently.</p>
          </div>
  
          <div className='w-full flex justify-center items-center'>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary font-medium sm:text-[15px] text-[14px] max-w-3xl  leading-[30px] text-center '>
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described with
              links to code repositories and live demos in it. It reflects my
              ability to solve complex problems, work with different technologies,
              and manage projects effectively.
            </motion.p>
          </div>
         
          <div className='w-[100%] h-[50%] flex flex-col items-center gap-[4rem] btnclass'>
            <div className='pictur  ml-[2rem] mr-[2rem]'>
              <div className='m-4'>
                <img src='./src/Image/pic01.png' alt='no' className='' />
              </div>
              <div className='text-center '>
                <h2 className='text-white text-[2rem] fredericka-the-great-regular  '>Tic Tac Twist OX </h2>
              </div>
              <div>
                <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-1 mb-3 m-5 text-white font-medium  text-[16px]  leading-[30px] text-center griffy-regular'>
                TicTacTwist is a modern take on the classic Tic Tac Toe game, crafted with JavaScript and styled with Tailwind CSS for a sleek and responsive design.
                </motion.p>
              </div>
              <div className='flex justify-center items-center gap-[1.2rem] mb-6 z-1000 btnclass'>
                <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest '> <a href='https://github.com/KAMLESH7939/Tic_Tac_Toe_App.github.io' className='flex justify-center items-center gap-4 text-white'><img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</a></button>
                <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest '> <a href='https://kamlesh7939.github.io/Tic_Tac_Toe_App.github.io/' className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8' src='./src/Image/demo.png' alt='no' />  DEMO </a> </button>
              </div>
            </div>
  
            <div className='pictur  ml-[2rem] mr-[2rem]'>
              <div className='m-4'>
                <img src='./src/Image/pic02.png' className='' alt='no' />
              </div>
              <div className='text-center'>
              <h2 className='text-white text-[2rem] fredericka-the-great-regular tracking-wide '>Telford Longue</h2>
              </div>
              <div>
                <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-1 mb-3 m-5 text-white font-medium text-[16px]   leading-[30px] text-center griffy-regular'>
                  Following projects showcases my skills and experience through
                  real-world examples of my work.
                </motion.p>
              </div>
              <div className='flex justify-center items-center gap-[1.2rem] mb-6 btnclass'>
                <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://github.com/KAMLESH7939/Mordern_chair_project' className='flex justify-center items-center gap-4 text-white'><img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</a></button>
                <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest '> <a href='https://modern-chair-app.netlify.app' className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8' src='./src/Image/demo.png' alt='no' />  DEMO </a> </button>
              </div>
            </div>
  
            <div className='pictur ml-[2rem] mr-[2rem]'>
              <div className=' m-4'>
                <img src='./src/Image/pic03.png' className='' alt='no' />
              </div>

              <div className='text-center'>
              <h2 className='text-white text-[2rem] fredericka-the-great-regular tracking-wide '>Weather App</h2>
              </div>
              <div>
                <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-1 mb-3 m-5 text-white font-medium text-[16px]  leading-[30px] text-center griffy-regular'>
                  weather application allows you to view the current temperature, wind speed, humidity, and cloud cover.
                </motion.p>
              </div>
              <div className='flex justify-center items-center gap-[1.2rem] mb-6 btnclass'>
                <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest '> <a href='https://github.com/KAMLESH7939/Weather-Application-Kamlesh' className='flex justify-center items-center gap-4 text-white'> <img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</a></button>
                <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://kamlesh7939.github.io/Weather-Application-Kamlesh' className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8 ' src='./src/Image/demo.png' alt='no' />  DEMO </a> </button>
              </div>
            </div>
  
          </div>
  
  
        </div>
        
      </section>
    )
   }

   else{





  return (
    <section className='relative w-full h-screen mx-auto'>

      <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' />


      <div className='absolute top-0 left-0 w-full h-full flex flex-col flex-wrap gap-4 '>

        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-white font-poppins text-[2.3em] font-medium  mt-7'>My Recent <span className='text-[#915eff] text-[3rem] fredericka-the-great-regular'>Works</span></h1>
          <p className='text-white font-poppins'>Here are a few projects I've worked on recently.</p>
        </div>

        <div className='w-full flex justify-center items-center'>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary font-medium sm:text-[15px] text-[14px] max-w-3xl  leading-[30px] text-center '>
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='w-full h-[50%] flex sm:flex-row sm:flex-wrap flex-col justify-center items-center flex-nowrap gap-10 bf '>
          <div className='h-[450px] p-5 sm:w-[26%]  w-[80%] border-[2px] border-[#623686] cardd'>
            <div>
              <img src='./src/Image/pic01.png' alt='no' className='mb-2' />
            </div>
            <div className='text-center '>
              <h2 className='text-white text-[1.7rem] fredericka-the-great-regular  '>Tic Tac Twist OX </h2>
            </div>
            <div>
              <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-1 text-white font-medium sm:text-[18px] text-[14px] max-w-3xl  leading-[30px] text-center griffy-regular'>
              TicTacTwist is a modern take on the classic Tic Tac Toe game, crafted with JavaScript and styled with Tailwind CSS.
              </motion.p>
            </div>
            <div className='flex justify-center items-center gap-[1.5rem] mt-3 btnclass'>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest '> <a href='https://github.com/KAMLESH7939/Tic_Tac_Toe_App.github.io' className='flex justify-center items-center gap-4 text-white'><img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</a></button>
              <button className=' bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest '> <a href='https://kamlesh7939.github.io/Tic_Tac_Toe_App.github.io/' className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8' src='./src/Image/demo.png' alt='no' />  DEMO </a> </button>
            </div>
          </div>

          <div className='h-[450px] p-5 w-[26%]  border-[#623686] cardd'>
            <div>
              <img src='./src/Image/pic02.png' className='mb-2' alt='no' />
            </div>
            <div className='text-center'>
            <h2 className='text-white text-[1.7rem] fredericka-the-great-regular tracking-wide '>Telford Longue</h2>
            </div>
            <div className='te'>
              <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-1 text-white font-medium sm:text-[18px] text-[14px] max-w-3xl  leading-[30px] text-center griffy-regular'>
                Following projects showcases my skills and experience through
                real-world examples of my work.
              </motion.p>
            </div>
            <div className='flex justify-center items-center gap-[1.5rem] mt-3 btnclass'>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://github.com/KAMLESH7939/Mordern_chair_project' className='flex justify-center items-center gap-4 text-white'><img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</a></button>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://modern-chair-app.netlify.app/' className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8' src='./src/Image/demo.png' alt='no' />  DEMO </a> </button>
            </div>
          </div>

          <div className='h-[450px] p-5 w-[26%] border-[2px] border-[#623686] cardd'>
            <div>
              <img src='./src/Image/pic03.png' className='mb-2' alt='no' />
            </div>
            <div className='text-center'>
            <h2 className='text-white text-[1.7rem] fredericka-the-great-regular tracking-wide '>Weather App</h2>
            </div>
            <div>
              <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-1 text-white font-medium sm:text-[18px] text-[14px] max-w-3xl  leading-[30px] text-center griffy-regular'>
              weather application allows you to view the current temperature, wind speed, humidity, and cloud cover.
              </motion.p>
            </div>
            <div className='flex justify-center items-center gap-[1.5rem] mt-3 btnclass'>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://github.com/KAMLESH7939/Weather-Application-Kamlesh' className='flex justify-center items-center gap-4 text-white'> <img src='./src/assets/github.png' className='w-10 h-9' alt='no' /> GIT HUB</a></button>
              <button className='bg-[#623686] rounded-md p-2 fredericka-the-great-regular tracking-widest'> <a href='https://kamlesh7939.github.io/Weather-Application-Kamlesh' className='flex justify-center items-center gap-4 text-white'> <img className='w-10 h-8 ' src='./src/Image/demo.png' alt='no' />  DEMO </a> </button>
            </div>
          </div>

        </div>


      </div>

    </section>
  )
 }  
}

export default Project
