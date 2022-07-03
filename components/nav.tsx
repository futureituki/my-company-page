import React, { useState } from "react";
import { Hamburger } from "./hamburger";

export const Nav:React.FC = () => {
  const lists = [
    {name:"Work",link:"./work"},
    {name:"Contact",link:"./contact"}
  ]
  const [isOpen,setIsOpen] = useState<boolean>(false)
  {console.log(isOpen)}
  return (
    <div className="relative" >
      <div onClick={() => setIsOpen(!isOpen)}>
      <Hamburger isOpen={isOpen} />
      </div>
      <div className={`transition-all ${isOpen ? "bg-opacity-50 bg-green-200" : "opacity-0"}  w-screen h-screen absolute`}>
      <nav>
        <ul>
          {lists.map((list,i)=>(
            <li key={i}>
              <a href={list.link}>{list.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </div>
  )
}