import React, {ReactNode,useContext, useEffect, useRef, useState} from "react";
import { ScrollContainer } from "./lib/useScroll";
import Image from 'next/image'
type Text = {
  children:ReactNode
  position:string
  or:string
  style:string
}

const AboutText:React.FC<Text> = ({children,position,style,or}) => {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollY} = useContext(ScrollContainer)
  console.log(scrollY /10)
  const {current:refContainer} = ref;
  // useEffect(() => {
  //   if(refContainer){
  //     refC = scrollY
  //      setMovie()   
  //   }
  // })
  return (
    <div className={`mt-14 mb-14 w-44 absolute transition-all ease-linear text-md ${position}-0`} style={{transform:`translateX(${or}${scrollY / 10}px)`,top:`${style}%`}} ref={ref}>
      <p>{children}</p>
    </div>
  )
}

type AboutImageWrapper = {
  src:string
  style:string
}
const AboutImage:React.FC<AboutImageWrapper> = ({src,style}) => {
  return (
    <div className={`text-${style} mt-12`}>
      <Image
      src={src}
      width={150}
      height={150}/>
    </div>
  )
}
type Children = {
  children:ReactNode
}
const AboutTitle:React.FC<Children> = ({children}) => {
  return (
    <h1 className="text-center m-auto w-24 text-3xl mt-5 md-5 border-b-4 pb-3">
      {children}
    </h1>
  )
}

export const AboutWrapper:React.FC = () => {
  return (
    <div className="h-screen overflow-hidden relative mt-12 m-auto w-96">
      <AboutTitle>About</AboutTitle>
      <AboutText position="left" style="10" or={""}>
      My company provides an environment where employees can work comfortably. 
      </AboutText>
      <AboutImage src="/assets/about-1.jpeg" style="right"/>
      <AboutText position="right" style="50"  or={"-"}>
      My company provides an environment where employees can work comfortably. 
      </AboutText>
      <AboutImage src="/assets/about-1.jpeg" style="left"/>
    </div>
  )
}