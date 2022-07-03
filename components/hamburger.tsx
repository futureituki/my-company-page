import React from "react";

type Open = {
  isOpen:boolean
}

export const Hamburger:React.FC<Open> = ({isOpen}) => {
  return(
    <div className="absolute top-2 right-0 w-10 h-10 z-10">
        <div className="border-b-2 pb-1 w-5"></div>
        <div className="border-b-2 pb-1 w-5"></div>
        <div className="border-b-2 pb-1 w-5"></div>
    </div>
  )
}