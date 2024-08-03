import React from 'react'

export default function Footer() {
  return (
<footer className="relative w-full">
    
          <div className="flex flex-wrap justify-center items-center text-left lg:text-left bg-[#2c3e50] h-[500px] md:h-[300px] text-white px-5 ">
            <div className="md:w-4/12  px-4 text-center">
              <h4 className="text-3xl font-semibold text-blueGray-700">LOCATION</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              2215 John Daniel Drive
              </h5>
              <p className='mt-5'>Clark, MO 65243</p>
    
            </div>
            <div className="md:w-4/12  px-4 text-center ">
              <h4 className="text-3xl font-semibold text-blueGray-700">AROUND THE WEB </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              <div className="mt-6 lg:mb-0 mb-6 flex justify-center">
                <button className="bg-transparent  border-white  border  border-1 text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="bg-transparent  border-white  border  border-1 text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button className="bg-transparent border-white  border  border-1 text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fa-brands fa-linkedin-in"></i>                </button>
                <button className="bg-transparent  border-white  border  border-1 text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fa-solid fa-globe mx-1 icon"></i>
                </button>
              </div>
              </h5>
             
            </div>
            <div className="md:w-4/12  px-4 text-center">
              <h4 className="text-3xl font-semibold text-blueGray-700">ABOUT FREELANCER</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Freelance is a free to use, licensed Bootstrap theme created by Route
              </h5>
              
            </div>
           
          </div>
          <div className="flex flex-wrap items-center md:justify-between justify-center bg-[#1a252f] p-10">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-white">
              Copyright © Your Website 2021
              </div>
            </div>
          </div>
        
      </footer>
  )
}
