import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    console.log(user.email);
    const { data: myReviews=[], refetch } = useQuery({
      queryKey:['reviews'],
      queryFn: async()=>{
          const res = await axiosSecure.get(`/feedback?email=${user?.email}`)
          console.log(res.data)
          return res.data;
      }
  })
      return (
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {
            myReviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
          }
         </div>
      );
  };
  
  export default MyReviews;