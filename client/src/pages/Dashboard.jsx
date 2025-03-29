import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashBooking from "../components/DashBooking";
import DashDocuments from "../components/DashDocuments";
import DashUsers from "../components/DashUsers";


export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState(' ');
  useEffect ( () => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab');
      
    if (tabFromUrl) {
      setTab(tabFromUrl);
    } 
  }, [location.search]);
  return (
    <div className="min-h-screen flex">
    {/* Sidebar */}
    <div className=" bg-gray-100 shadow-md">
      <DashSidebar />
    </div>

    {/* Main Content */}
    <div className="flex-1 p-6">
      {/* profile */}
      {tab === "profile" && <DashProfile />}

      {tab === "mybooking" && <DashBooking />}

      {tab === "documents" && <DashDocuments />}
      
      {tab === "users" && <DashUsers />}
    </div>

  </div>
  )
}
