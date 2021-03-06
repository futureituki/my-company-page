import React, {ReactNode,useContext, useEffect, useRef, useState} from "react";
import { ScrollContainer } from "./lib/useScroll";
import Image from 'next/image'
import { Title } from "./title";
type Text = {
  children:ReactNode
  number:string
}

const AboutText:React.FC<Text> = ({children,number}) => {
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
    <div className={`mt-14 mb-14 w-44 text-center transition-all ease-linear text-md`} style={{transform:`translateX(${scrollY / 10}px)`}} ref={ref}>
      <p>{number}</p>
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
      width={200}
      height={150}/>
    </div>
  )
}

// type Children = {
//   children:ReactNode
// }
// const AboutTitle:React.FC<Children> = ({children}) => {
//   return (
//     <h1 className="text-center m-auto w-24 text-3xl mt-5 md-5 border-b-4 pb-3">
//       {children}
//     </h1>
//   )
// }

export const AboutWrapper:React.FC = () => {
  return (
    <div id="about" className="h-5/6 relative mt-12 m-auto w-96 ">
      <Title>About</Title>
      <AboutText number={"1"}>
      My company provides an environment where employees can work comfortably. 
      </AboutText>
      <AboutImage src="/assets/about-1.jpeg" style="center"/>
      <AboutText  number={"2"}>
      My company provides an environment where employees can work comfortably. 
      </AboutText>
      <AboutImage src="/assets/about-1.jpeg" style="center"/>
    </div>
  )
}