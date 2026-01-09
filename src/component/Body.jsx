import React from 'react'
import bg2 from '../assets/image.png'
const Body = () => {
  return (
    <div className='w-full h-full'>
     <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg2})` }}>

      <div className='text-white text-5xl  py-15 px-1 gap-9 solway-light  max-w-5x2 max-w-xs mx-auto w-full'>
        <p>The World First Jewellery 
        E Commerce Platform Explore 
        The Future Talent </p>
      </div>
      <div className='text-white px-7   max-w-5x2 max-w-xs mx-auto'>
        <p>Discover the future of jewelry shopping with our 
        innovative e-commerce platform, showcasing
         exceptional talent and unique designs.</p>
      </div>
    </div>
    </div>
    
  )
}

export default Body;
