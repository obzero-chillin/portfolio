import React from 'react'
import './Pages.css'
import Navbar from './Navbar';

import { FaHtml5,FaCss3,FaAngular,FaPhp,FaLaravel,FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineJavascript } from "react-icons/md";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";


import DescrCard from './DescrCard'

const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <div id="home" className='w-[99%] h-full bg-[hsl(167.69,95.12%,8.04%)] mt-7 ps-10 pt-35 pb-10 rounded-3xl flex items-center'>
            
            <h1 className='text-5xl pb-20'>
                <span className='font-bold'>The Best Place </span>to get an <span className='font-bold'> <br></br>Effecient, articulate and empathetic </span><br></br>fullstack developer
            </h1>
            <div className=' w-[30%] aspect-square bg-transparent -ml-7 rounded-tr-md rounded-tl-4xl rounded-bl-md rounded-br-4xl border-2'></div>
        </div>

        <div className='w-[90%] h-auto bg-transparent ps-14 pt-5 flex flex-wrap justify-center items-center'>
            <DescrCard 
                topic="Maximum LCP"
                description="Largest Contentful Paint (LCP) is a key performance metric that measures how long it takes for the largest image or text block on a web page to become visible in the user's viewport. I'm there to make sure your page gets maximum LCP."                    
            ></DescrCard>
            <DescrCard
                topic="Accessibility"
                description="Designing and developing websites that people with a wide range of disabilities can use to perceive, understand, navigate, and interact with the web."
            
            ></DescrCard>
            <DescrCard
                topic="Responsiveness"
                description="Creating websites that automatically adjusts its layout, content, and functionality to look good and work well on any device, from desktops to phones."
            
            ></DescrCard>         
        </div>

        <div className='w-[99%] h-auto mt-7 flex flex-col items-center justify-center'>
            <fieldset>
                <legend id="skills" className='text-center' >Skills</legend>
                <div className='min-w-[280px] max-w-[400px] flex border-2 pt-3 pl-1 pr-1 justify-start gap-4 flex-nowrap overflow-x-auto'>
                    <FaHtml5 size={24} className="mx-1" />
                    <FaCss3 size={24} className="mx-1" />
                    <RiTailwindCssFill size={24} className="mx-1" />
                    <MdOutlineJavascript size={24} className="mx-1" />
                    <FaNode size={24} className="mx-1" />
                    <FaAngular size={24} className="mx-1" />
                    <FaPhp size={24} className="mx-1" />
                    <FaLaravel size={24} className="mx-1" />
                    <DiMysql size={24} className="mx-1" />
                    <SiMongodb size={24} className="mx-1" />
                </div>
            </fieldset>

            {/**ADD CARDS FOR PAYMENT INFO */}


        </div>
    
    
    </>
  )
}

export default Home