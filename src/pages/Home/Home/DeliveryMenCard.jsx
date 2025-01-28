import useAuth from "../../../hooks/useAuth";


const DeliveryMenCard = ({deliveryMen}) => {
    const { image, name, parcelCount, averageRating} = deliveryMen;
    const {user} =useAuth();
    // console.log(user);
    return (
      //   <div className="card bg-base-100 shadow-xl rounded-md overflow-hidden hover:shadow-xl ">
      //   <figure className="px-10 pt-10">
      //     <img
      //       src={image}
      //       alt="DeliverManPhoto"
      //       className="rounded-xl w-full h-48 object-cover" />
      //   </figure>
      //   <div className="card-body items-center text-center bg-blue-300">
      //     <h2 className="card-title">{name}</h2>
      //     <p>Delivered:{parcelCount}</p>
      //     <div className="card-actions">
      //       <h2>Average Rating: {averageRating.toFixed(1)}/5</h2>
      //     </div>
      //   </div>
      // </div>
        




      <div className=" card bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform duration-300 hover:shadow-2xl">
  <figure className="px-6 pt-6">
    <img
      src={image}
      alt="DeliverManPhoto"
      className="rounded-lg w-full h-[400px] object-cover shadow-md "
    />
  </figure>
  <div className="card-body bg-white text-center p-6 rounded-b-2xl">
    <h2 className="card-title text-xl font-semibold text-gray-800">
      Name: {name}
    </h2>
    <p className="text-xl text-left text-gray-600 mt-2">Delivered: {parcelCount}</p>
    <div className="card-actions mt-4">
      <h2 className="text-lg font-medium text-blue-600">
        Average Rating: {averageRating.toFixed(1)}/5
      </h2>
    </div>
  </div>
</div>

     

    );
};

export default DeliveryMenCard;