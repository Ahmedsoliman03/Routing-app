import React from 'react'
import img from "../../assets/avataaars.svg"
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
   <section className='w-full h-[90vh] bg-[#1abc9c] flex justify-center items-center flex-col text-white'>
<div className='flex justify-center'><img src={img} alt='avatar' className='w-3/4 '/></div>
<h1 className='text-4xl text-white uppercase font-bold text-center mt-5'>Start Frameworks</h1>

<div className="relative after:content-[''] after:absolute top-3  after:left-10 after:w-[70px] after:h-1 after:bg-white
before:content-[''] before:absolute bottom-1 before:right-10 before:w-[70px] before:h-1 before:bg-white
">
<div className='flex justify-center'><i className="fa-solid fa-star fa-sm" ></i></div>
</div>

<p className='mt-5'>Graphic Artist - Web Designer - Illustrator</p>
</section>
  )
}
