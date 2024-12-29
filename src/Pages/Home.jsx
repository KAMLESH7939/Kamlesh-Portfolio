import {Suspense , useState} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../Components/Loader';
import Sky from '../Models/sky';
import Bird from '../Models/Bird';
import Plane from '../Models/Plane';
import Island from '../Models/Island';
import Dragon from '../Models/dragon';
import HomeInfo from '../Components/HomeInfo';

/**
 * Home component renders the main scene with 3D island model.
 * It adjusts the island's scale, position, and rotation based on screen size.
 * The scene includes various lighting effects and a loader for suspense fallback.
 */


const Home = () => {
   const [isRotating , setIsRotating] = useState(false);
   const [currentStage,setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7 , 0];
    let screenScale = null;
  
    if(window.innerWidth < 768){
      screenScale = [0.9 , 0.9, 0.9];
    }
    else{
      screenScale = [1 , 1, 1];
    }
    return [screenScale , screenPosition , rotation] ;
  }
  const adjustPlaneForScreenSize = () => {
    let screenPosition , screenScale ;
  
    if(window.innerWidth < 768){
      screenScale = [1.5 , 1.5, 1.5];
      screenPosition= [0, -1.5,0];
    }
    else{
      screenScale = [2.5 , 2.5, 2.5];
      screenPosition= [0, -4,-4];
    }
    return [screenScale , screenPosition] ;
  }


  let [islandScale , islandPosition, islandRotation]  = adjustIslandForScreenSize();
  let [planeScale , planePosition]  = adjustPlaneForScreenSize();


  return (
    <div>

   


     <section className='w-full h-screen relative'>
       
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
           {currentStage && <HomeInfo currentStage={currentStage} />}
        </div> 

       <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'} `}
               camera={{ near: 0.1, far: 1000}}
       >
       {/* Suspense is wrapper , fallback is time req to loa out */}
       
         <Suspense fallback={<Loader/>}>

             <directionalLight position={[1,10,1] } intensity={2}/>
             <ambientLight intensity={0.5}/> 
      
        
             <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} /> 
             
             <Bird />

             <Dragon 
             />

          



 
             <Sky 
              isRotating={isRotating}
             />
             
             <Island 
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              currentStage={currentStage}
             />

             <Plane 
              position={planePosition}
              scale={planeScale}
              isRotating={isRotating}
              rotation= {[0,20,0]}
             />


         </Suspense>
       </Canvas>
       <img src='../src/assets/degree.png' alt='no' className='w-16 h-16 absolute top-[40%] left-[50%] z-[10000] text-black  ' />
       
    </section>
    </div>

  )
}


export default Home
