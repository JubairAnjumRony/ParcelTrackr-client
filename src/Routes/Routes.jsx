import {
  createBrowserRouter,
  
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivatRoute";
import BookParcel from "../pages/Dashboard/Users/BookParcel/BookParcel";
import MyPercel from "../pages/Dashboard/Users/MyParcel/MyParcel";
import MyProfile from "../pages/Dashboard/Users/MyProfile/MyProfile";
import UpdateParcel from "../pages/Dashboard/Users/UpdateParcel/UpdateParcel";
import Statistics from "../pages/Dashboard/Admin/Statistics/Statistics";
import AllParcel from "../pages/Dashboard/Admin/AllParcel/AllParcel";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AllDeliveryMen from "../pages/Dashboard/Admin/AllDeliveryMen/AllDeliveryMen";
import MyDelivery from "../pages/Dashboard/DeliveryMen/MyDelviery/MyDelivery";
import MyReviews from "../pages/Dashboard/DeliveryMen/MyReviews/MyReviews";
import AdminRoute from "./AdminRoute";
import DeliveryMenRoute from "./DeliveryMenRoute";
import Payment from "../pages/Dashboard/Users/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Users/Payment/PaymentHistory";
import QuesAns from "../pages/Notification/QuesAns";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'notification',
            element:<QuesAns></QuesAns>
        },
       
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
    
      ]
    },

    {
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			// user routes
    {
        path: "bookAParcel",
        element: <BookParcel></BookParcel>,
    },
    {
        path: "myParcel",
        element: <MyPercel></MyPercel>,
    },
    {
        path: "updateParcels/:id",
        element: <UpdateParcel></UpdateParcel>,
        loader: ({ params }) =>
            fetch(
                `https://percel-trackr-server.vercel.app/parcels/${params.id}`
            ),
    },
    {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      
      },
    {
      path:"payments/:id",
      element:<Payment></Payment>,
      loader: ({ params }) =>
        fetch(
            `https://percel-trackr-server.vercel.app/parcels/${params.id}`
        ),

    },
    {path:"paymenthistory",
      element:<PaymentHistory/>
    },

    // admin routes
    {
        path: "statistics",
        element: (
         
          <AdminRoute>
            <Statistics></Statistics>
            </AdminRoute>
        )
           
    },
    {
        path: "allParcel",
        element: (
        
          <AdminRoute>
               <AllParcel></AllParcel>
          </AdminRoute>
         
        ),
    },
    {
        path: "allUser",
        element: (
        
           <AdminRoute><AllUsers></AllUsers></AdminRoute>
           
        ),
    },
    {
        path: "allDeliveryMen",
        element: (
                 
                <AllDeliveryMen> </AllDeliveryMen>
           
        ),
    },

    // deliverymen routes
    {
        path: "myDelivery",
        element: (
     
            <DeliveryMenRoute><MyDelivery></MyDelivery></DeliveryMenRoute>
         
        ),
    },
    {
        path: "myReviews",
        element: (
         
          <DeliveryMenRoute> <MyReviews></MyReviews></DeliveryMenRoute>
           
        ),
    },

      ]
    }
  ]);