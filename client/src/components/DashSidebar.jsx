import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Dashsidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

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
        <div className="p-3 rounded-lg cursor-pointer bg-white text-black hover:bg-red-500 hover:text-white">
          Sign Out
        </div>
      </div>
    </div>
  );
}