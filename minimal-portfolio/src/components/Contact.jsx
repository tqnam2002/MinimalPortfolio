import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form 
          action="https://getform.io/f/761759c6-3747-49d0-b764-f1721d5372ab"
          className='flex flex-col w-full md:w-7/12'
          method='POST'
        >  
          <input type="text" name='name' placeholder='Name' className='p-2 border-2 roudned-md bg-transparent focus: outline-none'/>
          <input type="text" name='email' placeholder='Email' className='p-2 my-2 border-2 roudned-md bg-transparent focus: outline-none'/>
          <textarea name="message" placeholder="Message" rows="10" className='p-2 my-2 border-2 roudned-md bg-transparent focus: outline-none'/>
          <button className='p-2 bg-gray-800 text-white cursor-pointer font-semibold border-2 rounded-md hover:bg-black'>Message Me</button>
        </form>
      </div>
    </div>
  )
}

export default Contact