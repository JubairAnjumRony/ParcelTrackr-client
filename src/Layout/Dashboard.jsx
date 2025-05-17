import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaShoppingCart,
  FaSignOutAlt,
  FaTimes,
  FaUserCog,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

import useAuth from "../hooks/useAuth";
import useDeliveryMen from "../hooks/useDeliveryMen";
import { RxAvatar } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { GoCodeReview } from "react-icons/go";
import { useState } from "react";

const Dashboard = () => {
  const { user,logOut,theme,handleToggle } = useAuth();
  //get isAdmin from the database
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);
  // const isAdmin = true;
  const [isDeliveryMen] = useDeliveryMen();
  // console.log(isDeliveryMen);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

    const handleLogout = async () => {
    try {
      await logOut();
      // Optional: redirect to login page or handle post-logout logic
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Determine user role for badge
  const getUserRole = () => {
    if (isAdmin) return "Admin";
    if (isDeliveryMen) return "Delivery";
    return "User";
  };

  // Get badge color based on role
  const getBadgeColor = () => {
    switch(getUserRole()) {
      case "Admin": return "bg-red-100 text-red-800";
      case "Delivery": return "bg-blue-100 text-blue-800";
      default: return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="flex flex-col md:flex-row px-1 py-2  justify-between mt-0 min-h-screen">
      {/* Mobile Menu Button */}
      <div className="md:hidden bg-blue-500 p-4 flex justify-between items-center">
        <button onClick={toggleSidebar} className="text-white">
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <h1 className="text-white text-xl font-bold">Dashboard</h1>
      </div>

      {/* dashboard side bar */}
      {/* <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64  bg-blue-200 text-blue-900 md: min-h-screen fixed md:static z-10 transition-all duration-300`}
      > */}
	     <div
        className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 w-2/3 md:w-64 fixed md:static inset-y-0 left-0 z-20
      bg-blue-100 md:bg-white dark:bg-gray-500  shadow-lg md:shadow-none
        transition-transform duration-300 ease-in-out flex flex-col min-h-screen overflow-y-auto`}
      >
        {/* text-blue-900   bg-blue-100*/}
       
          {/* User Profile Section */}
          <div className="flex flex-col items-center p-4 border-b border-blue-300 mb-4 mt-4">
            <div className="mb-3 relative">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile-Photo"
                  className="w-[140px] h-[140px] rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                  {user?.displayName?.charAt(0) || "U"}
                </div>
              )}
			     <span className={`absolute -bottom-2 -right-2 text-xs px-2 py-1 rounded-full ${getBadgeColor()}`}>
              {getUserRole()}
            </span>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg md:text-lg">
                {user?.displayName || "User Name"}
              </h3>
              <p className="text-sm md:text-lg text-blue-700 truncate w-full">
                {user?.email || "user@example.com"}
              </p>
			   <div className="text-xs mt-1 text-gray-500">
              Account: <span className="font-medium">Active</span>
            </div>
            </div>
          </div>
		   <ul className="menu p-4 md:px-8 flex-grow">
          {isAdmin ? (
            <>
              <li>
                <NavLink className="md:text-xl"
                  to="/dashboard/statistics"
                  onClick={() => setSidebarOpen(false)}
                >
                  <FaHome className="text-xl"></FaHome>
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink className="md:text-xl"
                  to="/dashboard/allParcel"
                  onClick={() => setSidebarOpen(false)}
                >
                  <FaUsers className="text-xl"></FaUsers>
                  All Parcel
                </NavLink>
              </li>
              <li>
                <NavLink className="md:text-xl"
                  to="/dashboard/allUser"
                  onClick={() => setSidebarOpen(false)}
                >
                  <FaUsers className="text-xl"></FaUsers>
                  All Users
                </NavLink>
              </li>

              <li>
                <NavLink className="md:text-xl"
                  to="/dashboard/allDeliveryMen"
                  onClick={() => setSidebarOpen(false)}
                >
                  <FaUsers className="text-xl"></FaUsers>
                  All DeliveryMen
                </NavLink>
              </li>
            </>
          ) : isDeliveryMen ? (
            <>
              <li>
                <NavLink className='md:text-xl'
                  to="/dashboard/myDelivery"
                  onClick={() => setSidebarOpen(false)}
                >
                  <TbTruckDelivery className="text-2xl mr-2" />
                  My Delivery
                </NavLink>
              </li>
              <li>
                <NavLink className='md:text-xl'
                  to="/dashboard/myReviews"
                  onClick={() => setSidebarOpen(false)}
                >
                  <GoCodeReview className="text-2xl mr-2" />
                  My Reviews
                </NavLink>
              </li>
            </>
          ) : user ? (
            <>
              <li>
                <NavLink
                  className="md:text-xl"
                  to="/dashboard/bookAParcel"
                  onClick={() => setSidebarOpen(false)}
                >
                  <FaUtensils></FaUtensils>
                  BookAParcel
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="md:text-xl"
                  to="/dashboard/myParcel"
                  onClick={() => setSidebarOpen(false)}
                >
                  <FaShoppingCart></FaShoppingCart>
                  My Parcel
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="md:text-xl"
                  to="/dashboard/myProfile"
                  onClick={() => setSidebarOpen(false)}
                >
                  <RxAvatar className="text-2xl" />
                  My Profile
                </NavLink>
              </li>
            </>
          ) : null}
          <div className="divider"></div>
          <li>
            <NavLink
              className="md:text-xl"
              to="/"
              onClick={() => setSidebarOpen(false)}
            >
              <FaHome className=""></FaHome>
              Home
            </NavLink>
          </li>
     
      {/* </div> */}


        {/* Bottom Action Buttons */}
    
       <li>
		   <NavLink to="/dashboard/myProfile"
            onClick={() => {
              setSidebarOpen(false);
              // Navigate to profile or handle click
            }}
            className="md:text-xl"
          >
            <FaUserCog className="" />
            <span>My Profile</span>
          </NavLink >
	   </li>
        <li>
			  <button
            onClick={handleLogout}
             className="md:text-xl"
          >
            <FaSignOutAlt className="mr-2"/>
            <span className="text-red-500">Logout</span>
          </button>
		</li>

          <div className="divider"></div>
         <li className=" ">
          {/* px-1 py-2 flex  justify-between mt-4 */}
    <span className="flex items-center gap-2 text-lg">
      {theme === 'dark'
        ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-xl" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
      }
      <span><input
      type="checkbox"
      className="toggle"
      checked={theme === "dark"}
      onChange={handleToggle}
    /></span>
    </span>
    
  </li>



             </ul>

      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}

       
	  
      {/* dashboard content */}
      <div
        className={`flex-1 p-4 md:p-8 bg-base-200 ${
          sidebarOpen ? "md:ml-64" : ""
        } transition-all duration-300`}
        onClick={() => setSidebarOpen(false)}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

