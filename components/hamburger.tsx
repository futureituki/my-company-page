import React from "react";

type Open = {
  isOpen:boolean
}

export const Hamburger:React.FC<Open> = ({isOpen}) => {
  return(
    <div className="absolute top-6 right-0 w-10 h-10 z-10">
        <div style={{height:1}} className={`mb-1 w-5 ${isOpen ? "bg-white" : "bg-black" }`}></div>
        <div style={{height:1}} className={`mb-1 w-5 ${isOpen ? "bg-white" : "bg-black" }`}></div>
        <div style={{height:1}} className={`mb-1 w-5 ${isOpen ? "bg-white" : "bg-black" }`}></div>
    </div>
  )
}