import React from 'react'

const RefCard = ({pic, referrer}) => {
  return (
    <div className='min-w-[280px] w-[30%] max-w-[400px] h-[400px] bg-[hsl(167.69,95.12%,8.04%)] pt-10 pb-10 pl-5 pr-5 rounded-3xl flex flex-col items-center m-2'>
        <div className='w-[95%] h-[90%]'>
            <img src='' className='w-[90%] aspect-auto'></img>
            
        </div>
        <h2>Miss Person</h2>
    </div>
  )
}

export default RefCard