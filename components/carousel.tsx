import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'

type CarouselContent = {
  src:string,
  description:string,
}

export const CarouselContent:React.FC<CarouselContent> = ({src, description}) => {
  return (
    <>
    <div className="m-5">
    <Image
    alt={description}
    src={src}
    height={400}
    width={300}
    />
    </div>
    </>
  )
}

type Wrapper = {
  children:ReactNode
}

export const CarouselWrapper:React.FC<Wrapper> = ({children}) => {
  const responsive ={
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }
  return (
    <>
    <Carousel
 additionalTransfrom={0}
 arrows
 autoPlaySpeed={3000}
 centerMode={false}
 className=""
 containerClass="container"
 dotListClass=""
 draggable
 focusOnSelect={false}
 infinite
 itemClass=""
 keyBoardControl
 minimumTouchDrag={80}
 partialVisible
 pauseOnHover
 autoPlay
 renderArrowsWhenDisabled={false}
 renderButtonGroupOutside={false}
 renderDotsOutside={false}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
  responsive={responsive}
>
    {children}
</Carousel>
    </>
  )
}