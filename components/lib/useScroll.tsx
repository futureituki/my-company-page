import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { createContext } from "react";

type Scroll = {
  children:ReactNode
}
type ScrollY = {
  scrollY:number
}
export const ScrollContainer = createContext<ScrollY>({
  scrollY:0
});

export const ScrollWrapper:React.FC<Scroll> = ({children}) => {
  const progress = useRef();
  const [scrollY,setScrollY] = useState(0);
  const {current:elContainer} = progress;
  const HandleScrollY = useCallback(() => {
      setScrollY(window.scrollY)
  },[])
  useEffect(() => {
    document.addEventListener('scroll',HandleScrollY,{passive:true})
    return () => document.removeEventListener('scroll',HandleScrollY)
  },[HandleScrollY])
  if(elContainer){

  }
  return (
    <ScrollContainer.Provider value={{scrollY}}>
      {children}
    </ScrollContainer.Provider>
  )
}