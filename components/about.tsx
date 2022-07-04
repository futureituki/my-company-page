import React, {ReactNode,useContext, useEffect, useRef, useState} from "react";
import { ScrollContainer } from "./lib/useScroll";

type Text = {
  children:ReactNode
  position:string
}

const AboutText:React.FC<Text> = ({children,position}) => {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollY} = useContext(ScrollContainer)
  const {current:refContainer} = ref;
  // useEffect(() => {
  //   if(refContainer){
  //     refC = scrollY
  //      setMovie()   
  //   }
  // })
  return (
    <div className={`mt-14 mb-14 w-44 absolute transition ease-in text-md ${position}-5`} style={{transform:`translateX(${scrollY / 50}px)`}} ref={ref}>
      <p>{children}</p>
    </div>
  )
}

const AboutTitle:React.FC = () => {
  return (
    <h1 className="text-center m-auto w-24 text-3xl mt-5 md-5 border-b-4 pb-3">About</h1>
  )
}

export const AboutWrapper:React.FC = () => {
  return (
    <div className="h-screen overflow-hidden relative mt-12">
      <AboutTitle/>
      <AboutText position="left">
      My company provides an environment where employees can work comfortably. 
      </AboutText>
    </div>
  )
}