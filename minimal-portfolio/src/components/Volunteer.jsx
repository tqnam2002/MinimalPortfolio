import React from 'react';
import volunteer from '../data/volunteer';
import VolunteerItem from './VolunteerItem';
import Title from './Title';

function Volunteer() {
  return (
    <div>
      <div className='w-screen px-10 pt-10'>
        <Title>Volunteering</Title>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center mt-10 mx-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {volunteer.map(project => (
              <VolunteerItem 
                imgUrl={project.imgUrl}
                title={project.title}
                time={project.time}
                position={project.position}
                link={project.link}
              />
            ))}
          </div>
      </div>
    </div>
  )
}

export default Volunteer