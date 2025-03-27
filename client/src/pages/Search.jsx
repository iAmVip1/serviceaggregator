import React from 'react'


export default function Search() {
 
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
        <div className="p-7 border-b-1 md:border-r-1 md:min-h-screen
         ">
            <form className='flex flex-col gap-8'>
                <div className="flex items-center gap-2">
                    <label className='whitespace-nowrap font-semibold' >
                        Searched For:
                    </label>

                    <input type="text" id='searchTerm' placeholder='Search...' className='border rounded-lg p-3 w-full text-black' />
                </div>


 

                {/* Work Type     */}
 

                <div className="flex gap-2 flex-wrap">
 

                    <label className='font-semibold'>
                        Services: 
                    </label>
 
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id='plumber' 
                        className='w-5' />
                        <span >Plumber</span>
                    </div>
 
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id='medical' 
                        className='w-5' />
                        <span >Carpenter </span>
                    </div>
 

                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id='mechanics' 
                        className='w-5' />
                        <span >Electrician</span>
                    </div>
                   </div>

                    <div className="flex gap-2 flex-wrap ml-2">

                    <div className="flex gap-2 items-center">
 

                        <input type="checkbox" id='electrician' 
 

                        className='w-5' />
 

                        <span >Maid</span>
 

                    </div>
 


 

                    <div className="flex gap-2 items-center">
 

                        <input type="checkbox" id='driver' 
 

                        className='w-5' />
 

                        <span >Laundry Man</span>
 

                    </div>
 


 

                    <div className="flex gap-2 items-center">
 

                        <input type="checkbox" id='civilEngineer' 
 

                        className='w-5' />
 

                        <span >Water Supply</span>
 

                    </div>
 


 

                    </div>
 
 


 

                <div className="flex items-center gap-2">
 

                    <label className='font-semibold'>Sorted By:</label>
 

                    <select id="sort_order" 
 

                    className='text-black border rounded-lg p-3 pr-8 '>
 

                        <option value="">Latest</option>
 

                        <option value="">Oldest</option>
 

                    </select>
 

                </div>
 

                <button className='bg-slate-500 text-white p-3 rounded-lg uppercase hover:opacity-95'>
 

            Search
 

          </button>
 


 

            </form>
 

        </div>
 

        <div className="flex-1">
 

            <h1 className='text-3xl font-semibold border-b border-gray-700 p-3 mt-5'>
 

                Available Users:
 

            </h1>
 

        </div>
 

    </div>
 

  )
 

}