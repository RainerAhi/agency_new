import { Suspense, useEffect, useState } from 'react'
import { OrbitControls, Environment, Float, SoftShadows } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Model from './Model'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMobile)
  

  return (
    <>
      <Suspense fallback >
        <Float rotationIntensity={ 0.5 } floatIntensity={ 2 } speed={ 2 } >
          <Model rotation-x={ Math.PI * 0.03 } position={ [ 0, isMobile ? -0.5 : -1.25, 0 ] } scale={ 0.5 } />
        </Float>
      </Suspense>  
      <OrbitControls maxPolarAngle={ Math.PI / 2 } enableZoom={ false } enableRotate={ true } enablePan={ false } />
      </>
  )
}