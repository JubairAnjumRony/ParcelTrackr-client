import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useParcels = () => {
    const axiosSecure = useAxiosSecure();
	const { data: parcels = [], refetch } = useQuery({
		queryKey: ["parcels"],
		queryFn: async () => {
			const res = await axiosSecure.get("/parcels");
			return res.data;
		},
	});

	return [parcels, refetch];
};

export default useParcels;