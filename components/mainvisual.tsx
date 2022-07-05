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
      <div className="absolute left-1/2 top-2/4 transform -translate-y-2/4 -translate-x-2/4">
      <h1 className="text-center text-white">Future Next the <br/>top ford</h1>
      </div>
      <ArrowDown/>
    </div>
  )
}