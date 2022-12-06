import React from 'react'
import videoBarbearia from '../assets/videoBarbearia.mp4';

function Hero() {
  return (
    <div name='inicio' className="w-full">
      <video
        className="w-full -h-full object-cover"
        src={videoBarbearia}
        autoPlay
        loop
        muted
      />
      
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>

            
      </div>
    </div>
  );
}

export default Hero