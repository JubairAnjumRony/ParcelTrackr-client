import { useQuery } from "@tanstack/react-query";
import useMyParcels from "../../../../hooks/useMyParcels";
import useUsers from "../../../../hooks/useUsers";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllDeliveryMen = () => {
  const [allUsers] = useUsers();
  const [MyParcels] = useMyParcels();
  const axiosSecure =useAxiosSecure();

  // Filter users based on the type being "deliveryMan"
  // const deliveryMen = allUsers.filter((user) => user.role === "DeliveryMen");
  const { data: deliveryMen=[] } = useQuery({
    queryKey:['deliveryMen'],
    queryFn: async()=>{
        const res = await axiosSecure.get('/deliveryMenStat',{credentials: 'include'})
        // console.log(res.data)
        return res.data;
    }
})

  return (
    <div>
      <h2 className="text-4xl">Total Delivery Men: {deliveryMen.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Delivery Man's Name</th>
              <th>Phone Number</th>
              <th>Number of Parcel Delivered</th>
              <th>Average Review</th>
              {/* Additional headers as needed */}
            </tr>
          </thead>
          <tbody>
            {deliveryMen.map((user, index) => {
              // Find the parcels associated with the current delivery man
              const parcels = MyParcels.filter((parcel) => parcel.email === user.email);

              // const deliveredParcels = MyParcels.filter((parcel) => parcel.status === "delivered").length;

              return (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="font-bold">{user.name}</div>
                  </td>
                  <td>{parcels.length > 0 ? parcels[0].phoneNumber : 'N/A'}</td>
                  <td>{user.parcelCount}</td>
                  <td>{user.averageReview.toFixed(1)}</td>  
                  {/* Additional cells with user information */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDeliveryMen;