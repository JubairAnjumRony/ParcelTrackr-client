import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";



const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            // console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                role:"User",
                image: result.user.photoURL,
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                // console.log(res.data);
                navigate('/');
             })
        })
    }

    return (
        <div className="p-8">
            <div className="divider"></div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn text-xl">
                    <FcGoogle className="mr-2"></FcGoogle>
                    Login With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;