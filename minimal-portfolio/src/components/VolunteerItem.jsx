import React from 'react';


function VolunteerItem({ time, title, position, imgUrl, link}) {
  return (
      <a href={link} className='border-2 rounded-lg border-stone-800 overflow-hidden hover:bg-gray-200'>
        <img 
            src={imgUrl} 
            alt='volunteerImg'
            className='w-full h-36 md:h-48 object-cover'
        />
        <div className='w-full p-4'>
            <h3 className='text-lg md:text-2xl font-semibold mt-2'>{title}</h3>
            <h4 className='text-md md: text-lg font-inter my-1 text-gray-700 '>{time}</h4>
            <p className='text-md text-black'>{position}</p>
        </div>
      </a>
  )
}

export default VolunteerItem