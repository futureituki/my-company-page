import React from "react";
import { ArrowDown } from "./arrowdown";
import Image from "next/image";
export const MainVisual:React.FC = () => {
  return(
    <div className="h-screen w-full relative">
      <video autoPlay muted loop
      playsInline
      className="absolute w-full h-full object-cover">
        <source src="/assets/top-back.mp4" type="video/mp4"/>
      </video>
      <ArrowDown/>
    </div>
  )
}