import React from 'react'
import { Link } from 'react-router-dom';

export default function DashDocuments() {
  return (
    <div>
      <div className="flex items-center justify-center">
    <Link to='/upload-documents'>

      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
+ Upload Documents
</span>
</button>
    </Link>
      </div>
    </div>
  )
}
