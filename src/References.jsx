// In References.jsx
import React from 'react'
import RefCard from './RefCard'

// FIX: Use a default import for assets
import img1 from './assets/references/img1.jpg' // Assuming this path is correct

const References = () => {
  return (
    <>
        <h1 className='text-3xl mt-7 mb-7'>References</h1>
        <div className='w-[90%] flex flex-wrap justify-center gap-5'>

            {/* You'll also need to pass the props to your RefCard.
              I've added an example below.
            */}
            <RefCard 
              pic={img1} 
              referrer="Miss Person" 
            />

        </div>
    </>
  )
}

export default References