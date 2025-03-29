import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Dashsidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const dispatch= useDispatch()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () =>{
    try {
      const res = await fetch('/api/user/signout', 
        {
          method: 'POST'

        }  
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="w-full md:w-56 bg-gray-100 h-full p-4 shadow-lg">
      <div className="flex flex-col space-y-2">
      {currentUser.isAdmin ? (
        <span className="p-3 rounded-lg font-bold  "> 
          Admin</span>
      ):(
        <span className="p-3 rounded-lg font-bold  "> 
          User</span>
      )}
        
        <Link to="/dashboard?tab=profile">
          <div
            className={`p-3 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white ${
              tab === "profile" ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
          >
            Profile
            
          </div>
        </Link>
        <Link to="/dashboard?tab=mybooking">
          <div
            className={`p-3 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white ${
              tab === "mybooking" ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
          >
            My Booking
          </div>
        </Link>
        <Link to="/dashboard?tab=documents">
          <div
            className={`p-3 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white ${
              tab === "documents" ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
          >
            Documents
          </div>
        </Link>
        {currentUser.isAdmin && (
          <Link to='/dashboard?tab=users'>
          <div
            className={`p-3 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white ${
              tab === "users" ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
          >
            Users
          </div>
           </Link>
        )}
        <div className="p-3 rounded-lg cursor-pointer bg-white text-black hover:bg-red-500 hover:text-white"
        onClick={handleSignout}>
          Sign Out
        </div>
      </div>
    </div>
  );
}