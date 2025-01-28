import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import moment from "moment";

const UpdateParcel = () => {
	const {
		_id,

		phoneNumber,
		parcelType,
		parcelWeight,
		receiverName,
		receiverPhoneNumber,
		deliveryAddress,
		requestedDeliveryDate,

		deliveryAddressLatitude,
		deliveryAddressLongitude,
		price,
	} = useLoaderData();
	const axiosPublic = useAxiosPublic();
	const { user } = useAuth();
	const [loading, setLoading] = useState(false);
	const [parcelPrice, setParcelPrice] = useState(0);

	const {
		register,
		handleSubmit,
reset,
		formState: { errors },
	} = useForm();
	// const now = new Date();
	const now = moment().format("YYYY-MM-DD");

	const calculatePrice = (weight) => {
		if (weight === 0 || weight < 0) return 0;
		else if (weight === 1) return 50;
		else if (weight === 2) return 100;
		else return 150;
	};

	const handleWeightChange = (event) => {
		const weight = parseInt(event.target.value);
		const price = calculatePrice(weight);
		setParcelPrice(price);
	};

	const onSubmit = (data) => {
		setLoading(true);
		// console.log(typeof data.parcelWeight);
		// console.log(typeof data.receiverPhoneNumber);
		// console.log(typeof data.deliveryAddressLatitude);
		// console.log(typeof data.deliveryAddressLongitude);

		const parcelData = {
			...data,
			name: user.displayName,
			email: user.email,
			phoneNumber: parseInt(data.phoneNumber),
			parcelWeight: parseInt(data.parcelWeight),
			receiverPhoneNumber: parseInt(data.receiverPhoneNumber),
			deliveryAddressLatitude: parseFloat(data.deliveryAddressLatitude),
			deliveryAddressLongitude: parseFloat(data.deliveryAddressLongitude),
			bookingDate: now,
			price: parcelPrice,
			status: "pending",
		};
		// console.log(parcelData);

		axiosPublic
			.patch(`/parcels/${_id}`, parcelData)
			.then((res) => {
				if (res.data.modifiedCount > 0) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Parcel updated successfully.",
						showConfirmButton: false,
						timer: 1500,
					});
					reset();
				}
			})
			.catch((error) => {
				console.error("Error booking parcel: ", error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong! Please try again later.",
				});
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="lg:w-3/4 mx-auto mt-5 mb-10">
			<h2 className="font-mercellus text-4xl mb-4">Update Parcel</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3 className="font-mercellus text-2xl">Sender Details</h3>
				<div className="form-control w-full my-3 space-y-2">
					<p>User Name : {user.displayName}</p>
					<p>User Email : {user.email}</p>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Phone Number</span>
						</label>
						<input
							type="text"
							defaultValue={phoneNumber}
							{...register("phoneNumber", { required: true })}
							name="phoneNumber"
							placeholder="Phone Number"
							className="input input-bordered rounded"
						/>
						{errors.phoneNumber && (
							<span className="text-red-500">
								Phone Number is required
							</span>
						)}
					</div>
				</div>

				<h3 className="font-mercellus text-2xl mt-5">Parcel Details</h3>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Parcel Type</span>
					</label>
					<input
						type="text"
						defaultValue={parcelType}
						{...register("parcelType", { required: true })}
						name="parcelType"
						placeholder="Parcel Type"
						className="input input-bordered rounded"
					/>
					{errors.parcelType && (
						<span className="text-red-500">
							Parcel Type is required
						</span>
					)}
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Parcel Weight</span>
					</label>
					<input
						type="number"
						defaultValue={parcelWeight}
						{...register("parcelWeight", { required: true })}
						name="parcelWeight"
						placeholder="Parcel Weight"
						className="input input-bordered rounded"
						onChange={handleWeightChange}
					/>
					{errors.parcelWeight && (
						<span className="text-red-500">
							Parcel Weight is required
						</span>
					)}
				</div>

				<h3 className="font-mercellus text-2xl mt-5">
					Receiver&aposs Details
				</h3>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Receiver&aposs Name</span>
					</label>
					<input
						type="text"
						defaultValue={receiverName}
						{...register("receiverName", { required: true })}
						name="receiverName"
						placeholder="Receiver's Name"
						className="input input-bordered rounded"
					/>
					{errors.receiverName && (
						<span className="text-red-500">
							Receiver&aposs Name is required
						</span>
					)}
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">
							Receiver&aposs Phone Number
						</span>
					</label>
					<input
						type="number"
						defaultValue={receiverPhoneNumber}
						{...register("receiverPhoneNumber", { required: true })}
						name="receiverPhoneNumber"
						placeholder="Receiver's Phone Number"
						className="input input-bordered rounded"
					/>
					{errors.receiverPhoneNumber && (
						<span className="text-red-500">
							Receiver&aposs Phone Number is required
						</span>
					)}
				</div>

				<h3 className="font-mercellus text-2xl mt-5">
					Delivery Details
				</h3>
				<div className="form-control">
					<label className="label">
						<span className="label-text">
							Parcel Delivery Address
						</span>
					</label>
					<input
						type="text"
						defaultValue={deliveryAddress}
						{...register("deliveryAddress", { required: true })}
						name="deliveryAddress"
						placeholder="Parcel Delivery Address"
						className="input input-bordered rounded"
					/>
					{errors.deliveryAddress && (
						<span className="text-red-500">
							Parcel Delivery Address is required
						</span>
					)}
				</div>
				<div className="form-control w-full my-6">
					<label className="label">
						<span className="label-text">
							Requested Delivery Date
						</span>
					</label>
					<input
						type="date"
						min={now}
						defaultValue={requestedDeliveryDate}
						placeholder="Requested Delivery Date"
						{...register("requestedDeliveryDate", {
							required: true,
						})}
						className="input input-bordered w-full"
					/>
					{errors.requestedDeliveryDate && (
						<span className="text-red-500">
							Requested Delivery Date is required
						</span>
					)}
				</div>
				<div className="form-control w-full my-6">
					<label className="label">
						<span className="label-text">
							Delivery Address Latitude
						</span>
					</label>
					<input
						type="number"
						step={0.000000001}
						defaultValue={deliveryAddressLatitude}
						placeholder="Delivery Address Latitude"
						{...register("deliveryAddressLatitude", {
							required: true,
						})}
						className="input input-bordered w-full"
					/>
					{errors.deliveryAddressLatitude && (
						<span className="text-red-500">
							Delivery Address Latitude is required
						</span>
					)}
				</div>
				<div className="form-control w-full my-6">
					<label className="label">
						<span className="label-text">
							Delivery Address Longitude
						</span>
					</label>
					<input
						type="number"
						step={0.000000001}
						defaultValue={deliveryAddressLongitude}
						placeholder="Delivery Address Longitude"
						{...register("deliveryAddressLongitude", {
							required: true,
						})}
						className="input input-bordered w-full"
					/>
					{errors.deliveryAddressLongitude && (
						<span className="text-red-500">
							Delivery Address Longitude is required
						</span>
					)}
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Price</span>
					</label>
					<input
						type="text"
						defaultValue={price}
						{...register("price")}
						name="price"
						placeholder="Price"
						className="input input-bordered rounded"
						readOnly
						value={parcelPrice}
					/>
				</div>
				<div className="mt-5 px-5 lg:w-3/12 bg-primary text-white hover:bg-[#AB916C] font-mercellus text-center py-3 text-base">
					<input
						type="submit"
						value={loading ? "Updating..." : "Update Parcel"}
						disabled={loading}
					/>
				</div>
			</form>
		</div>
	);
};

export default UpdateParcel;
