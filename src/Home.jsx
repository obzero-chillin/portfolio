import React from 'react'
import './Pages.css'
import Navbar from './Navbar';
import FadeIn from './FadeIn';
import { useState } from 'react';
import './Home.css'

import { FaHtml5,FaCss3,FaAngular,FaPhp,FaLaravel,FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineJavascript } from "react-icons/md";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import prof from './assets/polish.png'


import DescrCard from './DescrCard'

const Home = () => {
  return (
    <main className=''>
        <Navbar></Navbar>
        
        <div 
  id="home" 
  className='max-w-full h-full bg-[hsl(167.69,95.12%,8.04%)] mt-7 pt-35 pb-10 rounded-3xl block text-center mx-auto'
>
             <div>
                <img 
                  id="profile-pic" 
                  src={prof} 
                  className='w-[40%] z-0 mx-auto object-cover border rounded-tl-4xl rounded-tr-2xl rounded-br-4xl rounded-bl-2xl '
                ></img>            </div>
            <div className='z-50'>
                <h1 id="heading" className='text-[34px]/[44px] pb-20 z-50 text-center'>
                <span className='font-bold'>The Best Place </span>to get an <span className='font-bold'> <br></br>Effecient, articulate and empathetic </span><br></br>fullstack developer
            </h1>
            </div>
            
           
            
        </div>

        

        <div className=' w-[90%] h-auto bg-transparent ps-14 pt-5 flex flex-wrap justify-center items-center'>
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

        <div className='w-full h-auto mt-7 flex flex-col items-center justify-center'>
            <h2 className='text-3xl font-mono mb-4'>Skills</h2>
            <div id="skills" className='carausel max-w-[500px] motion-reduce:w-[90%] motion-reduce:max-w-[1366px] flex h-auto border-amber-200 overflow-x-hidden'>                
               
                
                <div className='groupee flex items-center justify-start border-2 gap-[1.5em]'>
                    

                    
                    <FaHtml5 size={44} className="mx-1 shrink-0" />
                    <FaCss3 size={44} className="mx-1 shrink-0" />
                    <RiTailwindCssFill size={44} className="mx-1 shrink-0" />
                    <MdOutlineJavascript size={44} className="mx-1 shrink-0" />
                    <FaNode size={44} className="mx-1 shrink-0" />
                    <FaAngular size={44} className="mx-1 shrink-0" />
                    <FaPhp size={44} className="mx-1 shrink-0" />
                    <FaLaravel size={44} className="mx-1 shrink-0" />
                    <DiMysql size={44} className="mx-1 shrink-0" />
                    <SiMongodb size={44} className="mx-1 shrink-0" />

                    
                    <FaHtml5 size={44} className="motion-reduce:hidden mx-1 shrink-0 extra" />
                    <FaCss3 size={44} className="motion-reduce:hidden mx-1 shrink-0 extra" />
                    <RiTailwindCssFill size={44} className="motion-reduce:hidden mx-1 shrink-0 extra" />
                    <MdOutlineJavascript size={44} className="motion-reduce:hidden mx-1 shrink-0 extra" />
                    <FaNode size={44} className="motion-reduce:hidden mx-1 shrink-0 extra" />
                    <FaAngular size={44} className="motion-reduce:hidden mx-1 shrink-0 extra" />
                    <FaPhp size={44} className="motion-reduce:hidden mx-1 shrink-0 extra" />
                    <FaLaravel size={44} className="motion-reduce:hidden mx-1 shrink-0 extra" />
                    <DiMysql size={44} className="motion-reduce:hidden mx-1 shrink-0 extra" />
                    <SiMongodb size={44} className="motion-reduce:hidden mx-1 shrink-0 extra" />
                </div>
            </div>

            {/**ADD CARDS FOR PAYMENT INFO */}
        </div>
    
    
    </main>
  )
}

export default Home