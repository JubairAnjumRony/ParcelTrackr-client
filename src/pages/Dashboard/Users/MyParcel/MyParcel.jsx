import { FaAmazonPay, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useMyParcels from "../../../../hooks/useMyParcels";
import moment from "moment";
import { useForm } from "react-hook-form";
import { MdOutlineRateReview } from "react-icons/md";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";


const MyPercel = () => {
    const [myParcels, refetch] = useMyParcels();
    const axiosPublic = useAxiosPublic();
    const { register,handleSubmit } = useForm();
	const [selectedDeliveryMenId, setSelectedDeliveryMenId]=useState('');
	const {user} = useAuth()
      const [filterStatus, setFilterStatus] = useState("All");


    const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosPublic.delete(`/parcels/${id}`).then((res) => {
					if (res.data.deletedCount > 0) {
						refetch();
						Swal.fire({
							title: "Deleted!",
							text: "Your parcel has been deleted.",
							icon: "success",
						});
					}
				});
			}
		});
	};


	const onSubmit = async(data) =>{
		// const date = new Date();
		// const feedbackDate = format(date, 'yyyy-MM-dd');
		const feedbackDate =moment().format("YYYY-MM-DD");
		const feedbackInfo={user_name:data.user_name, user_image:data.user_image,
		rating:parseInt(data.rating),feedback:data.feedback,deliveryMenId:data.deliveryMenId, feedbackDate}
		const result = await axiosPublic.post('/feedback',feedbackInfo);
		// console.log(result)
		if(result.data.insertedId){
			Swal.fire({
				position: "top-right",
				icon: "success",
				title: "Feedback submitted successfully",
				showConfirmButton: false,
				timer: 1500
			  });
			  refetch();
		}
	}
	
	//    Filter parcels based on selected status

       const filteredParcels =
       filterStatus === "All"
           ? myParcels
           : myParcels.filter((parcel) => parcel.status === filterStatus);

    return (
        
        <>
          <Helmet>
						 <title>Dashboard || MyParcels</title>
					 </Helmet>
        <div className="p-4  min-h-screen">
        {/* Filter Dropdown */}
        <div className="mb-4">
            <label htmlFor="filter" className="text-sm font-medium text-gray-600 mr-2">
                Filter by Status:
            </label>
            <select
                id="filter"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
            >
                <option value="All">All</option>
                <option value="pending">Pending</option>
                <option value="On The Way">On The Way</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
            </select>
        </div>


		<div className="p-4  min-h-screen">
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="table-auto w-full text-left bg-whit">
             {/* Table Header */}
            <thead className="">
                <tr className="text-sm uppercase">
                    <th className="px-4 py-2">Index</th>
                    <th className="px-4 py-2">Parcel Type</th>
                    <th className="px-4 py-2">Requested Delivery Date</th>
                    <th className="px-4 py-2">Approx. Delivery Date</th>
                    <th className="px-4 py-2">Booking Date</th>
                    <th className="px-4 py-2">Delivery Man ID</th>
                    <th className="px-4 py-2">Booking Status</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-sm  divide-y divide-gray-200">
                {filteredParcels.map((item, index) => (
                    <tr key={item._id} className="hover:bg-gray-50">
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{item.parcelType}</td>
                        <td className="px-4 py-2">{item.requestedDeliveryDate}</td>
                        <td className="px-4 py-2">{item.assignedDate}</td>
                        <td className="px-4 py-2">{item.bookingDate}</td>
                        <td className="px-4 py-2">{item.deliveryManId}</td>
                        <td
                            className={`px-4 py-2 font-semibold ${
                                item.status === "Delivered" || item.status === "On The Way"
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {item.status}
                        </td>

                        <td className="px-4 py-2 flex items-center space-x-2">
                            <Link to={`/dashboard/updateParcels/${item._id}`}>
                                <button
								    disabled={item.status !== "pending"}
                                    className="btn btn-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                                    title="Update"
                                >
                                    <FaEdit />
                                </button>
                            </Link>
                            <button
							   disabled={item.status !== "pending"}
                                onClick={() => handleDelete(item._id)}
                                className="btn btn-sm bg-red-500 text-white rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400"
                                title="Delete"
                            >
                                <FaTrashAlt />
                            </button>
                            <button
                                disabled={item.status !== "Delivered"}
                                onClick={() => {
                                    setSelectedDeliveryMenId(item.deliveryManId);
                                    document.getElementById("my_modal_5").showModal();
                                }}
                                className={`btn btn-sm ${
                                    item.status === "Delivered"
                                        ? "bg-green-500 hover:bg-green-600 text-white"
                                        : "bg-gray-300 text-gray-500"
                                } rounded-md`}
                                title="Review"
                            >
                                <MdOutlineRateReview />
                            </button>
                            <Link to={`/dashboard/payments/${item._id}`}>
                                <button
                                    className="btn btn-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                                    title="Pay"
                                >
                                    <FaAmazonPay />
                                </button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div> 

            {/* Open the modal using document.getElementById('ID').showModal() method */} 
			 <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                 <div className="modal-box">
                     <form onSubmit={handleSubmit(onSubmit)}
                        className="bg-white p-3 rounded-lg shadow-lg max-w-md mx-auto overflow-y-hidden"
                     >
                         <h2 className="text-2xl font-bold text-gray-800 mb-2 text-left">User Name</h2>
                         <input {...register('user_name',{required:true})} type="text" defaultValue={user.displayName} readOnly
                         
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-gray-100 text-gray-800"
                         /><br />

                       {/* user image */}
                         <h2 className="block text-lg font-medium text-gray-700 mb-2">User Image</h2>
                         <input {...register('user_image',{required:true})} type="text" readOnly defaultValue={user.photoURL}
                         
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-gray-100 text-gray-800"
                         /><br />

                         {/* ratings */}
                         <h2 className="font-bold text-lg py-4">Ratings</h2>
                         <select name="" id="" {...register('rating',{required:true})}
                         
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-white text-gray-800"
                         >
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="5">5</option>          
                         </select>

                         {/* Feedback */}
                         <h2 className="block text-lg font-medium text-gray-700 mb-2">Feedback</h2>
                         <input {...register('feedback',{required:true})} type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-gray-100 text-gray-800"
                         /><br 

                         /> 

                      {/* deliveryman Id */}
                         <h2 className="block text-lg font-medium text-gray-700 mb-2">Delivery Men ID</h2>
                         <input {...register('deliveryMenId',{required:true})} type="text" defaultValue={selectedDeliveryMenId} readOnly
                         
                         className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 bg-gray-100 text-gray-800"
                         /><br /> 
                         <input type="submit" value="Submit"   className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                         
                         
                         />                       
                     </form> 
                     <div className="modal-action">
                     <form method="dialog">
                         {/* if there is a button in form, it will close the modal */}
                         <button className="btn">Close</button>
                     </form> 
                     </div>
                 </div>
                 </dialog>

      </div>

      </div>

      </>
    )
            
       
};

export default MyPercel;







