// import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUsers from "../../../../hooks/useUsers";
import { useState } from "react";



const AllUsers = () => {
	const axiosSecure = useAxiosSecure();
//   pagination state
	const [users, refetch] = useUsers();
	const[currentPage,setCurrentPage] = useState(1);
	const usersPerPage = 5;
  

	// Handle changing page
	const handlePageChange = (pagenumber)=>{
		setCurrentPage(pagenumber);
	}

	const handleMakeDeliveryman = (user) => {
		axiosSecure.patch(`/users/deliveryMen/${user._id}`).then((res) => {
			console.log(res.data);
			if (res.data.modifiedCount > 0) {
				refetch();
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `${user.name} is Deliveryman Now!.`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};
	const handleMakeAdmin = (user) => {
		axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
			console.log(res.data);
			if (res.data.modifiedCount > 0) {
				refetch();
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `${user.name} is Admin Now!.`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};
  


	// calculate the users to show for current Page
	const indexofLastUser = currentPage*usersPerPage;
	const indexofFirstUser = indexofLastUser-usersPerPage;
	const currentUsers = users.slice(indexofFirstUser,indexofLastUser);


	// pagination buttons
	const pageNumbers = [];
	for(let i=1;i<=Math.ceil(users.length/usersPerPage);i++){
		pageNumbers.push(i);
	}	
	
	
	return (
		<div>
			<div className="flex justify-evenly my-4">
				<h2 className="text-3xl">All Users</h2>
				<h2 className="text-3xl">Total Users: {users.length} </h2>
			</div>
			<div className="overflow-x-auto">

				<table className="table table-zebra w-full">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Make Deliveryman</th>
							<th>Make Admin</th>
						</tr>
					</thead>
					<tbody>
						{currentUsers.map((user, index) => (
							<tr key={user._id}>
								<th>{index + 1}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td className="text-blue-500 font-bold">
									{user.role === "DeliveryMen" ? (
										"DeliveryMen"
									) : user.role === "Admin" ? (
										" "
									) : (
										<button
											onClick={() =>
												handleMakeDeliveryman(user)
											}
											className="btn btn-lg bg-blue-500 text-white"
											disabled={user.role === "Admin"}>
											<FaUsers className="text-white text-2xl"></FaUsers>
											Make Deliveryman
										</button>
									)}
								</td>
								<td className="text-red-500 font-bold">
									{user.role === "Admin" ? (
										"Admin"
									) : (
										<button
											onClick={() =>
												handleMakeAdmin(user)
											}
											className="btn btn-lg bg-red-200 text-red-600">
											<FaUsers
												className="text-white 
                                        text-2xl"></FaUsers>
											Make Admin
										</button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

				{/* pagination controls */}
				<div className="flex justify-center my-4">
				{pageNumbers.map((number) => (
					<button
						key={number}
						onClick={() => handlePageChange(number)}
						className={`btn btn-sm mx-1 ${
							currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
						}`}
					>
						{number}
					</button>
				))}
			</div>
             

		</div>
	);
};

export default AllUsers;
