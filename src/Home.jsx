import React from 'react'
import './Pages.css'

import DescrCard from './DescrCard'

const Home = () => {
  return (
    <>
        <div className='w-[99%] h-full bg-[hsl(167.69,95.12%,8.04%)] mt-7 ps-10 pt-35 pb-10 rounded-3xl flex items-center'>
            
            <h1 className='text-5xl pb-20'>
                <span className='font-bold'>The Best Place </span>to get an <span className='font-bold'> <br></br>Effecient, articulate and empathetic </span><br></br>fullstack developer
            </h1>
            <div className=' w-[30%] aspect-square bg-transparent -ml-7 rounded-tr-md rounded-tl-4xl rounded-bl-md rounded-br-4xl border-2'></div>
        </div>

        <div className='w-[90%] h-auto bg-transparent ps-14 pt-5 flex flex-wrap justify-center items-center'>
            <DescrCard></DescrCard>


        </div>
    
    
    </>
  )
}

export default Home