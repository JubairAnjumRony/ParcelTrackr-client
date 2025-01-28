import axios from "axios";



 const AxiosPublic = axios.create({
    baseURL: 'https://percel-trackr-server.vercel.app'
})

const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;