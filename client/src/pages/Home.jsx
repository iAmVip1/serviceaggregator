import React from 'react';
import { ReactTyped } from "react-typed";
import Image3 from '../assets/background/back5.jpg'


const Home = () => {
  return (
    <div className='text-white min-h-screen'>
      <div className=' w-full h-screen mx-auto text-center flex flex-col justify-center bg-cover bg-center '
      style={{backgroundImage: `url(${Image3})`}}>
        <p className='text-[#00df9a] font-bold p-2'>
         For your home services
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          <span className='text-amber-500 px-3'>Service</span>
          <span>Aggregator</span>
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            To find
          </p>
          <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Electrician', 'Plumber', 'Carpenter', 'Maid', 'Water Supplier', 'Laundry Man']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400'>We are expert in Serivce, Repair, Maintenance.</p>
        <button className='bg-emerald-500 hover:bg-emerald-400
         w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer'>Call now</button>
      </div>
      <div className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reiciendis fugiat facere voluptatem repellendus exercitationem laudantium voluptatum corrupti, eveniet dicta corporis possimus, nisi ipsam eum modi consectetur soluta est ratione!</div>
    </div>
  );
};

export default Home;