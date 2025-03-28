import React, { useEffect, useState } from 'react';
import { ReactTyped } from "react-typed";
import Image3 from '../assets/background/back5.jpg'
import { Link } from "react-router-dom";
import Maid from '../../../imagesForWeb/avatar213.png'
import Carpenter from '../../../imagesForWeb/car.png'
import Electrician from '../../../imagesForWeb/elec.png'
import Plumber from '../../../imagesForWeb/serviceman.png'
import Laundry from '../../../imagesForWeb/wash.png'
import Water from '../../../imagesForWeb/water.png'
import ApplicationItem from '../components/ApplicationItem';

export default function Home() {

  const [userApplications, setUserApplications] = useState([]);


  useEffect(() => {
    const fetchUserApplcations = async () => {
      try {
        const res = await fetch('/api/application/get?workType=all&limit=3');
        const data = await res.json();
        setUserApplications(data);
       
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchUserApplcations()
  }, [])

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
        <Link to='Search'>
        <button className='bg-emerald-500 hover:bg-emerald-400
         w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer'>Browse now</button>
        </Link>
      </div>
      <div className="text-black mt-10 mb-10">
        <div className="text-center font-semibold text-3xl mb-10">
        Our Services
          </div>

      {/* services */}

          <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'">
          <div className="flex flex-wrap gap-4 ">

    {/* electrician */}
    <Link to={'/search?workType=electrician'}>
    
        <div className="bg-white shadow-md hover:shadow-lg cursor-pointer
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
        <img src={Electrician} alt="electrician" 
        className='h-[320px] sm:h-[220px] w-full object-contain
        hover:scale-105 transition-scale duration-300' />
        <div className=" p-3 flex flex-col gap-2 w-full text-center">
          <p className='text-sm font-semibold w-full'>
            Electrician
          </p>
        </div>
        </div>
    </Link>


        {/* carpenter */}
        <Link to={'/search?workType=carpenter'}>
        
        <div className="bg-white shadow-md hover:shadow-lg cursor-pointer
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
        <img src={Carpenter} alt="Carpenter" 
        className='h-[320px] sm:h-[220px] w-full object-contain
        hover:scale-105 transition-scale duration-300' />
        <div className=" p-3 flex flex-col gap-2 w-full text-center">
          <p className='text-sm font-semibold w-full'>
            Carpenter
          </p>
        </div>
        </div>
        </Link>

        {/* plumber */}
        <Link to={'/search?workType=plumber'}>
        
        <div className="bg-white shadow-md hover:shadow-lg cursor-pointer
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
        <img src={Plumber} alt="Plumber" 
        className='h-[320px] sm:h-[220px] w-full object-contain
        hover:scale-105 transition-scale duration-300' />
        <div className=" p-3 flex flex-col gap-2 w-full text-center">
          <p className='text-sm font-semibold w-full'>
            Plumber
          </p>
        </div>
        </div>
        </Link>

        {/* Maid */}
        <Link to={'/search?workType=maid'}>
       
        <div className="bg-white shadow-md hover:shadow-lg cursor-pointer
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
        <img src={Maid} alt="Maid" 
        className='h-[320px] sm:h-[220px] w-full object-contain
        hover:scale-105 transition-scale duration-300' />
        <div className=" p-3 flex flex-col gap-2 w-full text-center">
          <p className='text-sm font-semibold w-full'>
            Maid
          </p>
        </div>
        </div>
        </Link>

        {/* waterboy */}
        <Link to={'/search?workType=waterSupply'}>
        
        <div className="bg-white shadow-md hover:shadow-lg cursor-pointer
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
        <img src={Water} alt="waterSupply" 
        className='h-[320px] sm:h-[220px] w-full object-contain
        hover:scale-105 transition-scale duration-300' />
        <div className=" p-3 flex flex-col gap-2 w-full text-center">
          <p className='text-sm font-semibold w-full'>
            Water Supply
          </p>
        </div>
        </div>
        </Link>

        {/* Laundry */}
        <Link to={'/search?workType=laundryMan'}>
        
        <div className="bg-white shadow-md hover:shadow-lg cursor-pointer
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
        <img src={Laundry} alt="laundry" 
        className='h-[320px] sm:h-[220px] w-full object-contain
        hover:scale-105 transition-scale duration-300' />
        <div className=" p-3 flex flex-col gap-2 w-full text-center">
          <p className='text-sm font-semibold w-full'>
            Laundry Man
          </p>
        </div>
        </div>
        </Link>
          </div>
          </div>

          {/* fetch all */}
          <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
          {userApplications && userApplications.length > 0 && (
            <div className=''>
              <div className="my-3">
              <h2 className='text-2xl font-semibold text-slate-600'>Recent Users </h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?workType=all'}>Show more </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
              {userApplications.map((application) => (
                <ApplicationItem application={application} key={application._id} />
              ))}
            </div>
            </div>
          )}
          </div>
      </div>
    </div>
  )
}


