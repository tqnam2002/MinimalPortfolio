import React from 'react'

function TimelineItem(year, title, duration, details) {
  return (
    <ol className='flex flex-col md-flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5-left-1.5 border border-white'>
                
            </div>
        </li>
    </ol>
  )
}

export default TimelineItem;