import React, {useRef, useContext} from "react";
import { ArrowDown } from "./arrowdown";
import Image from "next/image";
import { ScrollContainer } from "./lib/useScroll";
export const MainVisual:React.FC = () => {
  let progress = 0;
  const refContainer = useRef<HTMLDivElement>(null)
  const {scrollY} = useContext(ScrollContainer);
  // const {current:elContainer} = refContainer;
  if(refContainer.current){
    progress = Math.min(1,scrollY / refContainer.current.clientHeight);
  }
  return(
    <div ref={refContainer}  className="h-screen w-full sticky top-0 -z-10" style={{transform:`translateY(${progress * 100}vh)`}}>
      <video autoPlay muted loop
      playsInline
      className="absolute w-full h-full object-cover">
        <source src="/assets/top-back.mp4" type="video/mp4"/>
      </video>
      <div className="absolute left-1/2 top-2/4 transform -translate-y-2/4 -translate-x-2/4">
      <h1 className="text-center text-lg font-bold text-white">Future Next the </h1>
      <h1 className="text-center text-lg text-white">top ford</h1>
      </div>
      <ArrowDown/>
    </div>
  )
}