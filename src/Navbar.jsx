// Navbar.jsx
import React from 'react'
import Logo from './assets/Logo.svg' 

const Navbar = () => {
  return (
    <header className=' fixed top-7 w-full flex justify-center z-100'>
      
      
      <div id="navigator" className='hidden w-[60%] backdrop-blur-2xl  pt-4 pb-4 justify-between items-center px-5 rounded-3xl overflow-hidden'> 
        
      
        <img src={Logo} alt="Company Logo" className='w-12' /> 
        
       
        <div className=''>          
          <ul className='flex flex-row gap-10'> 
          <li><a method="post" href='#home' >Home</a></li>
          <li><a method="get" href='' >References</a></li>
          <li><a method="post" href='#skills' >SKills</a></li>
          </ul>
        </div>
              

      </div>
    </header>
  )
}

export default Navbar