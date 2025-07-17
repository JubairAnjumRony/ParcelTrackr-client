import { Link, NavLink } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import "./Navbar.css";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useDeliveryMen from "../../../hooks/useDeliveryMen";
import logo from "../../../assets/ParcelTrackr_Logo.jpg";
import { Tooltip } from "react-tooltip";
// import { Tooltip } from "react-leaflet";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isDeliveryMen] = useDeliveryMen();
  const { theme, handleToggle } = useAuth();

  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );

  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  // useEffect(() => {
  //   if (!theme) {
  //     return;
  //   }
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);

  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active " : ""
          }
        >
          Home
        </NavLink>
      </li>

      {/* {user && isAdmin && (
                	<NavLink
					to="/dashboard/statistics"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}>
					Dashboard
				</NavLink>
			)} */}

      <li>
        {/* <NavLink
					to="/dashboard"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}>

					Dashboard
				</NavLink> */}

        {user && isAdmin && (
          <li>
            <Link to="/dashboard/statistics" className="justify-between">
              Dashboard
            </Link>
          </li>
        )}
        {user && isDeliveryMen && (
          <li>
            <Link to="/dashboard/myDelivery" className="justify-between">
              Dashboard
            </Link>
          </li>
        )}
        {user && !isAdmin && !isDeliveryMen && (
          <li>
            <Link to="/dashboard/bookAParcel" className="justify-between">
              Dashboard
            </Link>
          </li>
        )}
      </li>
      <li>
        <Link to="/notification">
          <div className="flex">
            <IoNotificationsOutline className="mr-2 text-2xl"></IoNotificationsOutline>
            <div className="badge badge-secondary">+</div>
          </div>
        </Link>
      </li>

      {!user ? (
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active " : ""
            }
          >
            Login
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="w-full bg-blue-300 dark:bg-gray-800 top-0 z-50 sticky shadow-md">
      <div className="navbar md:w-3/4 mx-auto text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 font-semibold"
            >
              {navOptions}
            </ul>
          </div>
          <div className="lg:flex items-center hidden relative">
            <img className="w-12 " src={logo} alt="" width={150} />
            <Link
              to="/"
              className=" pl-2 text-xl lg:text-2xl absolute ml-12  mt-2"
            >
              ParcelTracker
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 px-1  font-mercellus text-base">
            {navOptions}
          </ul>
        </div>
        <div className="lg:hidden items-center  relative ">
          <img
            className="sm: w-10 md:w-16 "
            src={logo}
            alt=""
            // className="w-20 mr-20 h-20"
          />
          {/* <Link to="/">ParcelTrackr </Link> */}
          {/* <a className="btn btn-ghost  text-xl lg:text-3xl absolute ml-12  mt-2">
					ParcelTrackr
					</a> */}
        </div>

        <div className="navbar-end">
          {/* <input
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Click to Toggle theme!"
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark" ? true : false}
            value="synthwave"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1 mr-2 duration-300"
          />
          <Tooltip id="my-tooltip" />

          {theme === "light" ? (
            // Sun icon (Light Mode)
            <svg
              className="stroke-base-100 fill-base-100 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          ) : (
            // Moon icon (Dark Mode)
            <svg
              className="stroke-base-100 fill-base-100 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )} */}

          <div
            onClick={handleToggle}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Click to Toggle theme!"
            className="cursor-pointer transition-all duration-300 ease-in-out"
          >
            {theme === "light" ? (
              // Sun icon (Light Mode)
              <svg
                className="stroke-base-content fill-base-content"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              // Moon icon (Dark Mode)
              <svg
                className="stroke-base-content fill-base-content"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </div>
          <Tooltip id="my-tooltip" />

          {/* <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg> */}

          {user?.email ? (
            <>
              <div className="dropdown dropdown-end ml-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#002B44] rounded-box w-52 read-only"
                >
                  <li>
                    <p className="justify-between">{user.displayName}</p>
                  </li>
                  <li>
                    {" "}
                    {user && isAdmin && (
                      <li>
                        <Link
                          to="/dashboard/statistics"
                          className="justify-between"
                        >
                          Dashboard
                        </Link>
                      </li>
                    )}
                    {user && isDeliveryMen && (
                      <li>
                        <Link
                          to="/dashboard/myDelivery"
                          className="justify-between"
                        >
                          Dashboard
                        </Link>
                      </li>
                    )}
                    {user && !isAdmin && !isDeliveryMen && (
                      <li>
                        <Link
                          to="/dashboard/bookAParcel"
                          className="justify-between"
                        >
                          Dashboard
                        </Link>
                      </li>
                    )}
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-ghost justify-between"
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
