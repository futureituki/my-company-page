import React from "react"
import { Title } from "./title"
import { CarouselContent, CarouselWrapper } from "./carousel"
import {TextContent} from './text';
export const Work:React.FC = () => {
  return (
    <>
    <Title>Work</Title>
      <div id='work' className='w-screen h-full'>
      <CarouselWrapper>
        <CarouselContent description='test' src="/assets/disp.jpg"/>
        <CarouselContent description='test' src="/assets/img4.jpeg"/>
        <CarouselContent description='test' src="/assets/work-1.jpeg"/>
        <CarouselContent description='test' src="/assets/work-1.jpeg"/>
      </CarouselWrapper>
      <TextContent>
      I work as a front-end engineer. We mainly create LPs, etc.
      </TextContent>
      <TextContent>
      mainly for website production. In the future, I would like to create a service that will be available to the world.
      </TextContent>
      <TextContent>
      If you are interested, please contact us.
      </TextContent>
      </div>
    </>
  )
}