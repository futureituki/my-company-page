import React from "react";
import { ArrowDown } from "./arrowdown";
import Image from "next/image";
export const MainVisual:React.FC = () => {
  return(
    <div className="h-screen w-full relative">
      <video autoPlay muted loop
      playsInline
      className="absolute w-full h-full object-cover"
      src="/assets/top-back.mp4"/>
      <ArrowDown/>
    </div>
  )
}