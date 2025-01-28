import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";
import { MdCancel, MdOutlineEdit } from "react-icons/md";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


import { Marker, Popup, TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});



const DeliveryList = () => {

  const { user } = useAuth();
const axiosSecure = useAxiosSecure();
     const [showModal, setShowModal] = useState(false);
 const [selectedLocation, setSelectedLocation] = useState(null);
 
 const handleSeeLocation = (latitude, longitude) => {
   setSelectedLocation( {latitude, longitude} );
   console.log("Latitude:", latitude, "Longitude:", longitude); // Debug
     setShowModal(true);
 };
  
 console.log("Selected Location:", selectedLocation); // Debug
  console.log("Show Modal:", showModal); // Debug


  // Fetch assigned parcels for the logged-in deliveryman
  const { data: deliveryListsParcels=[], isLoading, refetch }= useQuery({
    queryKey:['deliveryListsParcel'],
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/myDeliveryList?email=${user.email}`);
        console.log(res.data)
        return res.data;
    }
})

   // const result = await Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, cancel it!",
    // });

    // if (result.isConfirmed) {
    //   try {
    //     const response = await axiosSecure.patch(`//${id}`, {
    //       status: "cancelled",
    //     });

    //     if (response.data.modifiedCount > 0) {
    //       Swal.fire({
    //         icon: "success",
    //         title: "Parcel Cancelled!",
    //         text: "The parcel has been cancelled.",
    //       });

    //       // Refetch the parcels after cancellation
    //       setParcels((prev) => prev.filter((parcel) => parcel._id !== id));
    //     }
    //   } catch (error) {
    //     console.error("Error cancelling parcel:", error);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Something went wrong!",
    //     });
    //   }
    // }

  
  
  
  const handleCancel = async (id) => {
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!"
    }).then(async(result) =>{
      if(result.isConfirmed){
      const cancelInfo = {
        parcelId:id,
        status:'Cancelled'
      }

      const res = await axiosSecure.patch('/parcelStatus',cancelInfo)



      if(res.data.modifiedCount){
        refetch()
        Swal.fire({
          title: "Cancelled!",
          text: "Your file has been canceled.",
          icon: "success"
        });
       }
      }
    });
  }

  const handleDelivered = async(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deliver it!"
    }).then(async(result)=>{
      if(result.isConfirmed){
        const deliveredInfo = {
          parcelId:id,
          status:"Delivered"
        }
        const res = await axiosSecure.patch('/parcelStatus',deliveredInfo)
        if(res.data.modifiedCount){
          refetch()
          Swal.fire({
            title: "Delivered!",
            text: "Parcel has been delivered.",
            icon: "success" 
          })
        }
      }
    })
  }
  

  return (
    <div>

       {/* {showModal && (
            <LocationModal

                latitude={selectedLocation.latitude}
                longitude={selectedLocation.longitude}
                onClose={() => setShowModal(false)}
            />
            
        )}  */}

        {/* {
          showModal && document.getElementById('my_modal_5')
        } */}



{showModal && selectedLocation && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Location</h3>
            {/* <div className="h-64 w-full">
              <iframe
                src={`https://www.google.com/maps?q=${selectedLocation.latitude},${selectedLocation.longitude}&hl=es;z=14&output=embed`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div> */}

                <div style={{ height: "400px", width: "100%" }}>
                    <MapContainer
                        center={[selectedLocation.latitude, selectedLocation.longitude]}
                        zoom={13}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[selectedLocation.latitude, selectedLocation.longitude]}>
                            <Popup>Delivery Location</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            
            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
        
   
      <h1 className="text-4xl mb-8">My Delivery List</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Booked User's Name</th>
              <th>Receiver's Name</th>
              <th>Booked User's Phone</th>
              <th>Requested Delivery Date</th>
              <th>Assigned Delivery Date</th>
              <th>Receiver's Phone</th>
              <th>Receiver's Address</th>
              <th>View Location</th>
              <th>Cancel</th>
              <th>Delivered</th>
            </tr>
          </thead>
          <tbody>
            {deliveryListsParcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="font-bold">{parcel.name}</div>
                </td>
                <td>{parcel.receiverName}</td>
                <td>{parcel.phoneNumber}</td>
                <td>{parcel.requestedDeliveryDate}</td>
                <td>{parcel.assignedDate || "Not Assigned"}</td>
                <td>{parcel.receiverPhoneNumber}</td>
                <td>{parcel.deliveryAddress}</td>
                <td>

              
                  <button className="btn"
                       onClick={() => handleSeeLocation(parcel.deliveryAddressLatitude, parcel.
                        deliveryAddressLongitude)
                        
                      }
                  >
                    <FaLocationDot />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleCancel(parcel._id)}
                    className="btn bg-red-500 text-white"
                    disabled={parcel.status === "Delivered" ||parcel.status === "Cancelled"}
                  >
                    <MdCancel />
                  </button>
                </td>
                <td>
               
                    <button
                    onClick= {()=>{handleDelivered(parcel._id)}}
                      className="btn bg-yellow-500"
                      disabled={parcel.status === "Delivered" ||  parcel.status === "Cancelled"}
                    >
                      <MdOutlineEdit />
                    </button>
               
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default DeliveryList;
