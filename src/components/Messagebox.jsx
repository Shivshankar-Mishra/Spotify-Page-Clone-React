import React from 'react'
import { useState } from 'react'

const Messagebox = (props) => {
    const handleMassege = (e) => {
        e.preventDefault();
        props.setShow(false);
    };
  return (
    <>
    <div className='flex flex-row justify-between items-center bg-[#1d75de] text-white h-10 px-48 py-7'>
        <span className='text-xs underline'>भारत (हिन्दी)</span>
        <span onClick={handleMassege} className='cursor-pointer text-lg'>X</span>
    </div>
    </>
  )
}

export default Messagebox