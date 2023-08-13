import React from 'react'

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className='border-2 rounded-lg border-stone-800 overflow-hidden'>
        <img 
            src={imgUrl} 
            alt='portfolioImg'
            className='w-full h-36 md:h-48 object-cover cursor-pointer'
        />
        <div className='w-full p-4'>
            <h3 className='text-lg md:text-2xl font-semibold mt-2'>{title}</h3>
            <p className='flex flex-wrap gap-2 my-2 flex-row items-center justify-start text-xs md:text-sm'>{stack.map(item => (
                <span className='inline-block px-2 py-1 font-semibold border-2 rounded-md border-stone-700 '>
                    {item}
                </span>
            ))}</p>
        </div>
    </div>
  )
}

export default PortfolioItem;