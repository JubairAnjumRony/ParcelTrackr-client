import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import LoadingSpinner from "../components/LoadingSpinner";




const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    // console.log(user);
    const[isAdmin, isAdminLoading] = useAdmin();
    // const isAdmin = true;
    console.log(isAdmin);
    const location = useLocation();
if( loading || isAdminLoading ) {
        return <LoadingSpinner/>
    }
    if( user && isAdmin) {
        return children
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;