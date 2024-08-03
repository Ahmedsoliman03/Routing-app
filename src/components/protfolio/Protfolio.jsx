import React, { useState } from 'react';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div className="h-[screen] mx-auto">
        <div className="container pt-5 mx-auto justify-center items-center">
          <div className='flex flex-col justify-center items-center m-6'>
            <h2 className='text-5xl mt-2 font-bold text-[#2c3e50] uppercase text-center'>portfolio component</h2>
            <div className="relative after:content-[''] after:absolute top-3 after:left-10 after:w-[70px] after:h-1 after:bg-[#2c3e50] before:content-[''] before:absolute bottom-1 before:right-10 before:w-[70px] before:h-1 before:bg-[#2c3e50]">
              <div className='flex justify-center'><i className="fa-solid fa-star fa-sm text-[#2c3e50]"></i></div>
            </div>
          </div>
       <div className='p-5 md:px-20'>
       <div className="flex md:flex-row flex-col gap-7 mt-10 w-full">
            <div className="relative w-full md:w-1/3 flex justify-center items-center overflow-hidden">
              <img src={img1} alt="image1" className='w-full cursor-pointer rounded-2xl '  />
              <div className='opacity-0 hover:opacity-100 translate-all duration-500 absolute w-full inset-0 h-full bg-[#1abc9ce6] cursor-pointer rounded-2xl overflow-hidden text-white text-4xl flex items-center justify-center' onClick={() => openModal(img1)}>
              <i className="fa-solid fa-plus fa-2xl"></i>              </div>
             
            </div>
            <div className="relative w-full md:w-1/3 flex justify-center items-center">
              <img src={img2} alt="image2" className='w-full cursor-pointer rounded-2xl' />
              <div className='opacity-0 hover:opacity-100 translate-all duration-500 absolute w-full inset-0 h-full bg-[#1abc9ce6] cursor-pointer rounded-2xl overflow-hidden text-white text-4xl flex items-center justify-center ' onClick={() => openModal(img2)} >
              <i className="fa-solid fa-plus fa-2xl"></i>              </div>
            </div>
            <div className="relative w-full md:w-1/3 flex justify-center items-center">
              <img src={img3} alt="image3" className='w-full cursor-pointer rounded-2xl'  />
              <div className='opacity-0 hover:opacity-100 translate-all duration-500 absolute w-full inset-0 h-full bg-[#1abc9ce6] cursor-pointer rounded-2xl overflow-hidden text-white text-4xl flex items-center justify-center' onClick={() => openModal(img3)}>
              <i className="fa-solid fa-plus fa-2xl"></i>              </div>
            </div>
          </div>
          <div className=" flex md:flex-row flex-col gap-7 mt-5">
            <div className="relative w-full md:w-1/3 flex justify-center items-center">
              <img src={img1} alt="image1" className='w-full cursor-pointer rounded-2xl'  />
              <div className='opacity-0 hover:opacity-100 translate-all duration-500 absolute w-full inset-0 h-full bg-[#1abc9ce6] cursor-pointer rounded-2xl overflow-hidden text-white text-4xl flex items-center justify-center' onClick={() => openModal(img1)}>
              <i className="fa-solid fa-plus fa-2xl"></i>              </div>
            </div>
            <div className="relative w-full md:w-1/3 flex justify-center items-center">
              <img src={img2} alt="image2" className='w-full cursor-pointer rounded-2xl'/>
              <div className='opacity-0 hover:opacity-100 translate-all duration-500 absolute w-full inset-0 h-full bg-[#1abc9ce6] cursor-pointer rounded-2xl overflow-hidden text-white text-4xl flex items-center justify-center'  onClick={() => openModal(img2)} >
              <i className="fa-solid fa-plus fa-2xl"></i>              </div>
            </div>
            <div className="relative w-full md:w-1/3 flex justify-center items-center">
              <img src={img3} alt="image3" className='w-full cursor-pointer rounded-2xl'  />
              <div className='opacity-0 hover:opacity-100 translate-all duration-500 absolute w-full inset-0 h-full bg-[#1abc9ce6] cursor-pointer rounded-2xl overflow-hidden text-white text-4xl flex items-center justify-center'onClick={() => openModal(img3)}>
              <i className="fa-solid fa-plus fa-2xl"></i>              </div>
            </div>
          </div>
       </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleModalClick}
        >
          <div className="bg-transparent">
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: '650px', height: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
    </>
  );
}