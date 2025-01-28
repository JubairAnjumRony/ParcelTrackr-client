import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useMyParcels = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { refetch , data: myParcels = []} = useQuery({
        queryKey: ["myParcels" , user?.email],
        queryFn: async ()=> {
            const res = await axiosPublic.get(
				`/myParcels?email=${user.email}`
			);
			return res.data;
        }
    })
    return [myParcels,refetch];
};
export default useMyParcels;