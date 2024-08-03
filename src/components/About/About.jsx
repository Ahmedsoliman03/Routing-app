import React from 'react'
import img from "../../assets/avataaars.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
  return (
   <section className='w-full h-[90vh] bg-[#1abc9c] flex justify-center items-center flex-col text-white'>
<h1 className='md:text-5xl text-3xl text-white uppercase font-bold text-center mt-5'>about component</h1>
<div className="relative after:content-[''] after:absolute top-3  after:left-10 after:w-[70px] after:h-1 after:bg-white
before:content-[''] before:absolute bottom-1 before:right-10 before:w-[70px] before:h-1 before:bg-white
">
<div className='flex justify-center'><i className="fa-solid fa-star fa-sm" ></i></div>
</div>
<div className='flex md:flex-row w-[75%] flex-col text-white justify-start md:justify-between items-center ml-10 overflow-x-hidden mt-5'>
<p className=' p-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
<p className=' p-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>
</section>
  )
}
