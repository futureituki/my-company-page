import React, { useState } from "react";
import { Hamburger } from "./hamburger";

export const Nav:React.FC = () => {
  const lists = [
    {name:"Work",link:"./work"},
    {name:"About",link:"./about"},
    {name:"Contact",link:"./contact"}
  ]
  const [isOpen,setIsOpen] = useState<boolean>(false)
  {console.log(isOpen)}
  return (
    <div className="relative z-10" >
      <div onClick={() => setIsOpen(!isOpen)}>
      <Hamburger isOpen={isOpen} />
      </div>
      <div className={`transition-all ${isOpen ? "bg-opacity-50 bg-black" : "opacity-0"}  w-screen h-screen absolute`}>
        <nav>
        <ul className="h-screen pt-5">
          {lists.map((list,i)=>(
            <li className="text-center pb-4 text-stone-100" key={i}>
              <a href={list.link}>{list.name}</a>
            </li>
          ))}
        </ul>
        </nav>
      </div>
    </div>
  )
}