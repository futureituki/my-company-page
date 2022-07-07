import React, { ReactNode } from "react";

type title = {
  children:ReactNode
}

export const Title:React.FC<title> = ({children}) => {
  return (
    <div className="mt-10 mb-10">
      <h2 className="text-center font-bold text-4xl border-b-2 w-24 m-auto pb-2">{children}</h2>
    </div>
  )
}