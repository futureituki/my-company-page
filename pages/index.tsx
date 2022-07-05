import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { AboutWrapper } from '../components/about'
import { CarouselContent, CarouselWrapper } from '../components/carousel'
import { ScrollContainer } from '../components/lib/useScroll'
import { MainVisual } from '../components/mainvisual'
import { Nav } from '../components/nav'
import { Title } from '../components/title'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <MainVisual/>
      <AboutWrapper/>
      <Title>Work</Title>
      <div className='w-screen h-screen'>
      <CarouselWrapper>
        <CarouselContent description='test' src="/assets/disp.jpg"/>
        <CarouselContent description='test' src="/assets/img4.jpeg"/>
        <CarouselContent description='test' src="/assets/work-1.jpeg"/>
        <CarouselContent description='test' src="/assets/work-1.jpeg"/>
      </CarouselWrapper>
      </div>
    </div>
  )
}

export default Home
