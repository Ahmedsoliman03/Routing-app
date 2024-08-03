import React from 'react'

export default function Contact() {
    function handleSubmit(e){
      e.preventDefault()
    }
  return (
    <>
    
<div className='w-full md:w-1/2 mx-auto pb-10 pt-10 px-5'>
<div className='flex justify-center flex-col items-center'>
<h1 className='md:text-4xl text-3xl text-[#2c3e50] uppercase font-bold text-center mt-5'>contact section</h1>
<div className="w-1/3 flex justify-center relative after:content-[''] after:absolute top-3  after:left-10 after:w-[70px] after:h-1 after:bg-[#2c3e50]
before:content-[''] before:absolute bottom-1 before:right-10 before:w-[70px] before:h-1 before:bg-[#2c3e50]
">
<div className='flex justify-center'><i className="fa-solid fa-star fa-sm" ></i></div>
</div>
</div>

<form className='py-5' onSubmit={handleSubmit}>
 
  <div className="relative z-0 w-full mb-12 group">
      <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " />
      <label htmlFor="name" className="peer-focus:text-[#1abc9c] peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserName</label>
  </div>
 
  <div className="relative z-0 w-full mb-12 group">
      <input type="number" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " />
      <label htmlFor="name" className="peer-focus:text-[#1abc9c] peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserAge</label>
  </div>
 
  <div className="relative z-0 w-full mb-12 group ">
      <input type="email" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " />
      <label htmlFor="name" className="peer-focus:text-[#1abc9c] peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserEmail</label>
  </div>
  <div className="relative z-0 w-full mb-12 group ">
      <input type="password" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " />
      <label  htmlFor="name" className="peer-focus:text-[#1abc9c] peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserPassword</label>
  </div>


  
  <button type="submit" className="text-white bg-[#1abc9c] hover:bg-[#1abc9c] focus:ring-0  focus:bg-[#1abc9c] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send Messge</button>
</form>

</div>
    </>
  )
}
