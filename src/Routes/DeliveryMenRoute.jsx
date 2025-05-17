import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useDeliveryMen from "../hooks/useDeliveryMen";
import LoadingSpinner from "../components/LoadingSpinner";


const DeliveryMenRoute = ( {children}) => {
    const { user, loading } = useAuth();
	const [isDeliveryMen, isDeliveryMenLoading] = useDeliveryMen();
	// console.log(isDeliveryMen);
	const location = useLocation();
	if (loading || isDeliveryMenLoading) {
		return <LoadingSpinner/>
	}
	if (user && isDeliveryMen) {
		return children;
	}

	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default DeliveryMenRoute;