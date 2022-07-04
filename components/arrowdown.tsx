import Image from "next/image";
import React from "react";

export const ArrowDown = () => {
  return (
      <div className="absolute z-50 left-2/4 top-2/3 animate-ping">
      <Image
      src="/assets/arrow.png"
      width={20}
      height={20}
      />
      </div>
  )
}