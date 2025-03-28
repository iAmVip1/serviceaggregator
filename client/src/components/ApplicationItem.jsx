import { Link } from "react-router-dom";
import { MapPin } from 'lucide-react';
import Maid from '../../../imagesForWeb/avatar213.png'
import Carpenter from '../../../imagesForWeb/car.png'
import Electrician from '../../../imagesForWeb/elec.png'
import Plumber from '../../../imagesForWeb/serviceman.png'
import Laundry from '../../../imagesForWeb/wash.png'
import Water from '../../../imagesForWeb/water.png'

export default function ApplicationItem( {application} ) {
  return (
    <div>
       <div className="bg-white shadow-md hover:shadow-lg
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]
    ">
      <Link to={`/application/${application._id}`}>
      <img src={application.userImage} alt="User image"
        className="h-[320px] sm:h-[220px] w-full object-cover
        hover:scale-105 transition-scale duration-300 dark:text-black"
        />
        <div className=" p-3 flex flex-col gap-2 w-full dark:text-black">
        <p className="text-lg font-semibold truncate"
            >{application.username}</p>
            <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-green-700" />
            <p className="text-sm font-semibold truncate w-full"
            >{application.address}</p>
             
            </div>
            <div className="flex items-center gap-1">
            {application.workType === 'carpenter' && (
              <>
              
              <img src={Carpenter} className="h-4 w-4 text-green-700" />
              <p className='flex items-center gap-2 whitespace-nowrap font-semibold' >
               Carpenter
              </p>
              </>
            )}
             
            {application.workType === 'plumber' && (
              <>
              
              <img src={Plumber} className="h-4 w-4 text-green-700" />
              <p className='flex items-center gap-2 whitespace-nowrap font-semibold' >
               Plumber
              </p>
              </>
            )}
             
            {application.workType === 'maid' && (
              <>
              
              <img src={Maid} className="h-4 w-4 text-green-700" />
              <p className='flex items-center gap-2 whitespace-nowrap font-semibold' >
               Maid
              </p>
              </>
            )}
             
            {application.workType === 'electrician' && (
              <>
              
              <img src={Electrician} className="h-4 w-4 text-green-700" />
              <p className='flex items-center gap-2 whitespace-nowrap font-semibold' >
               Electrician
              </p>
              </>
            )}
             
            {application.workType === 'waterSupply' && (
              <>
              
              <img src={Water} className="h-4 w-4 text-green-700" />
              <p className='flex items-center gap-2 whitespace-nowrap font-semibold' >
               Water Supply
              </p>
              </>
            )}
             
            {application.workType === 'laundryMan' && (
              <>
              
              <img src={Laundry} className="h-4 w-4 text-green-700" />
              <p className='flex items-center gap-2 whitespace-nowrap font-semibold' >
               Laundry Man
              </p>
              </>
            )}
             
            </div>
        </div>
      </Link>
    </div>
    </div>
  )
}
