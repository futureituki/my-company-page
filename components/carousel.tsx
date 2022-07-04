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
    <Image
    alt={description}
    src={src}
    height={400}
    width={500}
    />
    </>
  )
}

type Wrapper = {
  children:ReactNode
}

export const CarouselWrapper:React.FC<Wrapper> = ({children}) => {
  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}
  return (
    <>
    <Carousel
  additionalTransfrom={0}
  autoPlaySpeed={3000}
  autoPlay={true}
  className="transition-all opacity-1"
  centerMode={false}
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