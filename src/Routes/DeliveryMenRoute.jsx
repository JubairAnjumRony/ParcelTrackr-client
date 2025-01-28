import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useDeliveryMen from "../hooks/useDeliveryMen";


const DeliveryMenRoute = ( {children}) => {
    const { user, loading } = useAuth();
	const [isDeliveryMen, isDeliveryMenLoading] = useDeliveryMen();
	console.log(isDeliveryMen);
	const location = useLocation();
	if (loading || isDeliveryMenLoading) {
		return <progress className="progress w-56"></progress>;
	}
	if (user && isDeliveryMen) {
		return children;
	}

	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default DeliveryMenRoute;