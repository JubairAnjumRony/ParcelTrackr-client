import { useQuery } from "@tanstack/react-query";


import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DeliveryMenCard from "./DeliveryMenCard";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const TopDeliveryMen = () => {
    const axiosSecure = useAxiosPublic();

    const { data: topMen=[], refetch } = useQuery({
        queryKey:['top'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/topDeliveryMen')
            console.log(res.data)
            return res.data;
        }
    })
   
    return (
        <div className="mb-8">
            <h2 className="text-3xl text-center my-10">Top Delivery Men</h2>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-8 lg:mx-0 md:mx-0">
                {
                    topMen?.map(top => <DeliveryMenCard key={top._id} deliveryMen={top}></DeliveryMenCard> )
                }
            </div>
        </div>
    );
};

export default TopDeliveryMen;  



// import { useQuery } from "react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";

// const TopDeliveryMan = () => {
//   const axiosPublic = useAxiosPublic();

//   // Fetch top delivery men using react-query
//   const { data: topDeliveries = [] } = useQuery({
//     queryKey: ["topDeliveries"],
//     queryFn: async () => {
//       const res = await axiosPublic.get("/top-delivery-men");
//       console.log(res.data);
//       return res.data;
//     },
//   });

//   return (
//     <div className="mt-8 mb-16">
//       <div className="text-center">
//         <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
//           Top Delivery Man
//         </h2>
//         <p className="text-gray-600 mb-12">Meet Our Top Delivery Men</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-10/12 md:w-10/12 lg:w-8/12 xl:w-6/12">
//         {topDeliveries?.slice(0, 3).map((delivery) => (
//           <div key={delivery.id} className="card w-full bg-base-100 shadow-xl">
//             <figure className="h-64 md:h-56">
//               <img
//                 src={delivery.photo}
//                 alt="Delivery Person"
//                 className="object-cover object-top w-full h-full rounded-t-lg"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{delivery.name}</h2>
//               <p>{delivery.role}</p>
//               <div className="mt-3">
//                 <p className="text-sm font-semibold">
//                   Parcels Delivered:{" "}
//                   <span className="font-medium">{delivery.totalDelivered}</span>
//                 </p>
//                 <p className="text-sm font-semibold">
//                   Average Rating:{" "}
//                   <span className="font-medium">
//                     {(delivery.totalRating / delivery.reviewCount).toFixed(2)}/5
//                   </span>
//                 </p>
//               </div>
//               <div className="card-actions justify-start mt-3">
//                 <button
//                   onClick={() =>
//                     alert(
//                       `Contact Info:\n\nName: ${delivery.name}\nEmail: ${delivery.email}\nPhone: ${delivery.phone}\nAddress: ${delivery.address}`
//                     )
//                   }
//                   className="btn btn-primary"
//                 >
//                   Contact
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopDeliveryMan;
