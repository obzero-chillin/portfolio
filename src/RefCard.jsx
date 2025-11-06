import React, { useState } from 'react'

const RefCard = ({ pic, referrer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- Your RefCard Component --- */}
      <div 
        className='
          min-w-[280px] w-[30%] max-w-[400px] h-[400px] 
          bg-[hsl(167.69,95.12%,8.04%)] 
          pt-10 pb-10 pl-5 pr-5 
          rounded-3xl 
          flex flex-col items-center 
          m-2
          
          
          motion-safe:transition        /* Tells it *what* to animate (transform, opacity, etc.) */
          motion-safe:duration-500      /* Sets the animation speed (300ms) */
          motion-safe:ease-in-out       /* Makes the animation ramp speed smoothly */
          motion-safe:hover:-translate-y-2  /* The new "end state" on hover */
        '
      >
        
        <div className='w-[95%] aspect-square flex justify-center items-center'>
            <img 
              src={pic} 
              alt={referrer} 
              className='w-[90%] aspect-square object-cover cursor-pointer'
              onClick={() => setIsOpen(true)}
            />
        </div>
        
        <h2 className='text-white mt-4 text-xl'>{referrer}</h2>
      </div>

      {/* --- The Fullscreen Modal --- */}
      {isOpen && (
        <div 
          className='fixed inset-0 z-50 flex justify-center items-center bg-black/80 backdrop-blur-sm'
          onClick={() => setIsOpen(false)}
        >
          <img 
            src={pic} 
            alt={referrer} 
            className='max-w-[90vw] max-h-[90vh] object-contain'
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  )
}

export default RefCard