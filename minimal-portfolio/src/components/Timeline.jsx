import React from 'react';
import TimelineItem from './TimelineItem';
import timeline from '../data/timeline';

function Timeline() {
  return (
    <div className='flex flex-wrap md:flex-row justify-center my-20'>
      <div className='w-full md:w-7/12'>
        {timeline.map(item => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline