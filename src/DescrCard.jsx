import React from 'react'
import './Pages.css'

const DescrCard = ({topic, description}) => {
  return (
    <div className='min-w-[280px] w-[30%] min-h-[400px] bg-[hsl(167.69,95.12%,8.04%)] pt-10 pb-10 pl-5 pr-5 rounded-3xl flex flex-col items-center m-2'>
        <h2 className='text-2xl font-bold mb-5'>
          {topic}
        </h2>
        <p>{description}</p>
    </div>
  )
}

export default DescrCard