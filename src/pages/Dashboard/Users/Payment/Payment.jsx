import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <Helmet>
						 <title>Dashboard || Payment</title>
					 </Helmet>
       <h2 className="text-2xl mb-4">Please Pay to Confirm</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;