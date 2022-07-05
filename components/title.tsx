import React, { ReactNode } from "react";

type title = {
  children:ReactNode
}

export const Title:React.FC<title> = ({children}) => {
  return (
    <div className="mt-10 mb-10">
      <h2 className="text-center font-bold text-4xl">{children}</h2>
    </div>
  )
}