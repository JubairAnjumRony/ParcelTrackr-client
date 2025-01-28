import useAuth from "../../../hooks/useAuth";


const DeliveryMenCard = ({deliveryMen}) => {
    const { image, name, parcelCount, averageRating} = deliveryMen;
    const {user} =useAuth();
    console.log(user);
    return (
        <div className="card bg-base-100 shadow-xl rounded-md">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="DeliverManPhoto"
            className="rounded-xl w-48 h-48" />
        </figure>
        <div className="card-body items-center text-center bg-blue-300">
          <h2 className="card-title">{name}</h2>
          <p>Delivered:{parcelCount}</p>
          <div className="card-actions">
            <h2>Average Rating: {averageRating.toFixed(1)}/5</h2>
          </div>
        </div>
      </div>
    );
};

export default DeliveryMenCard;