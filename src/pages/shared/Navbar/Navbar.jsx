
import { Link, NavLink } from "react-router-dom";

// import useAdmin from "../../../hooks/useAdmin";
// import useModerator from "../../../hooks/useModerator";
import { IoNotificationsOutline } from "react-icons/io5";
import "./Navbar.css";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useDeliveryMen from "../../../hooks/useDeliveryMen";
import logo from '../../../assets/ParcelTrackr_Logo.jpg'
import './Navbar.css'


const Navbar = () => {
	const { user, logOut } = useAuth();
	 const [isAdmin] = useAdmin();
	 const [isDeliveryMen] = useDeliveryMen();

	console.log(user);
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
					}>
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
												<Link
													to="/dashboard/statistics"
													className="justify-between">
													Dashboard
												</Link>
											</li>
										)}
										{user && isDeliveryMen && (
											<li>
												<Link
													to="/dashboard/myDelivery"
													className="justify-between">
													Dashboard
												</Link>
											</li>
										)}
										{user && !isAdmin && !isDeliveryMen && (
											<li>
												<Link
													to="/dashboard/bookAParcel"
													className="justify-between">
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
						}>
						Login
					</NavLink>
				</li>
			) : (
				""
			)}
         
		</>
	);
	return (
		<div className=" bg-blue-300  ">   

        {/* ToDo: make the navbar sticky  */}
			<div className="navbar md:w-3/4 mx-auto text-white ">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
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
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 font-semibold">
							{navOptions}
						</ul>
					</div>
					<div className="lg:flex items-center hidden relative">
					
						<img className="w-12 rounded-full"
							src={logo}
							alt=""
							width={150}
						/>
						<Link to="/" className=" pl-2 text-xl lg:text-2xl absolute ml-12  mt-2">
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

					<img className="sm: w-10 md:w-16 "
						src={logo}
						alt=""
						// className="w-20 mr-20 h-20"
					/>
                    <Link to ="/">ParcelTrackr </Link>
					{/* <a className="btn btn-ghost  text-xl lg:text-3xl absolute ml-12  mt-2">
					ParcelTrackr
					</a> */}
				</div>

				<div className="navbar-end">
					{user?.email ? (
						<>
							<div className="dropdown dropdown-end">
								<label
									tabIndex={0}
									className="btn btn-ghost btn-circle avatar">
									<div className="w-10 rounded-full">
										<img src={user.photoURL} />
									</div>
								</label>
								<ul
									tabIndex={0}
									className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#002B44] rounded-box w-52 read-only">
									<li>
										<p className="justify-between">
											{user.displayName}
										</p>
									</li>
									<li>
										{" "}
										{user && isAdmin && (
											<li>
												<Link
													to="/dashboard/statistics"
													className="justify-between">
													Dashboard
												</Link>
											</li>
										)}
										{user && isDeliveryMen && (
											<li>
												<Link
													to="/dashboard/myDelivery"
													className="justify-between">
													Dashboard
												</Link>
											</li>
										)}
										{user && !isAdmin && !isDeliveryMen && (
											<li>
												<Link
													to="/dashboard/bookAParcel"
													className="justify-between">
													Dashboard
												</Link>
											</li>
										)}
									</li>
									<li>
										<button
											onClick={handleLogOut}
											className="btn btn-ghost justify-between">
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
