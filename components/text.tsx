import React from "react";

type Text = {
  children:React.ReactNode
}

export const TextContent:React.FC<Text> = ({children}) => {
  return (
    <div className="mt-5 mb-5 w-1/2 m-auto">
      <p className="leading-5 text-md text-black text-center">{children}</p>
    </div>
  )
}