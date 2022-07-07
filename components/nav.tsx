import React, { useState } from "react";
import { Hamburger } from "./hamburger";
import { Link as Scroll } from 'react-scroll';
export const Nav:React.FC = () => {
  const lists = [
    {name:"About",id:"about"},
    {name:"Work",id:"work"},
    {name:"Contact",id:"contact"}
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
        <ul className="h-screen pt-5 flex flex-col justify-center align-center">
          {lists.map((list,i)=>(
            <li className="text-center pb-4 text-stone-100 text-2xl" key={i}>
              <Scroll to={list.id} smooth={true}>{list.name}</Scroll>
            </li>
          ))}
        </ul>
        </nav>
      </div>
    </div>
  )
}