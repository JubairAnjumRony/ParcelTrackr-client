
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import loginimg from "../../assets/login2.png";

const Login = () => {

    
    //  const [disabled,setDisabled] =  useState(true);
     const { signIn } = useAuth();
     const navigate = useNavigate();
     const location = useLocation();
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState('');
     const from = location.state?.from?.pathname || "/";
     

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        // const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password,);
        signIn(email, password);
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             Swal.fire({
    //                 title: 'User Login Successful.',
    //                 showClass: {
    //                     popup: 'animate__animated animate__fadeInDown'
    //                 },
    //                 hideClass: {
    //                     popup: 'animate__animated animate__fadeOutUp'
    //                 }
    //             });
    //             navigate(from, { replace: true });
    //         })
    // }


//    const handleValidateCaptcha = e =>{
//      const user_captcha_value =  e.target.value;
//       if(validateCaptcha(user_captcha_value)){
//         setDisabled(false);
//       }
//       else{
//         setDisabled(false);
//       }
//    }

//  || !name || !photoURL
if (!email || !password) {
    setError('All fields are required.');
    Swal.fire({
        title: 'Error',
        text: 'All fields are required!',
        icon: 'error',
    });
    return;
}
     setLoading(true);      
try {
    // Perform sign-in
    const result = await signIn(email, password);
    const user = result.user;
    // console.log(user);

    // Update profile with name and photoURL
    // if (name || photoURL) {
    //     await updateUserProfile(name, photoURL);
    // }

    // Show success message
    Swal.fire({
        title: 'User Login Successful.',
        icon: 'success',
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
        },
    });

    // Navigate to intended route
    navigate(from, { replace: true });
} catch (error) {
    console.error('Error during login:', error);
    setError('Invalid email or password. Please try again.');
    Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
    });
}
finally {
    setLoading(false);
}

};
    
    return (
        <>
            <Helmet>
                <title>ParcelTrackr | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-center">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                       <img src={loginimg} alt="login img"  className='m-3'/>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
{/* 
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div> */}

                      
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  name="photoURL" placeholder="Photo URL" className="input input-bordered required" />
                         
                            </div>
                        */}
                                {/* <span className="text-red-600">Photo URL is required</span> */}
                            
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered"  required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered"  required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div> */}

                            {/*  on the input field disabled={disabled} */}
                            <div className="form-control mt-6">
                                {/* <input className="btn btn-primary" type="submit" value="Login" /> */}
                                <button
                                    type="submit"
                                    className={`btn btn-primary ${loading ? 'loading' : ''}`}
                                    disabled={loading}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <p className='pl-10 text-xl text-blue-400'><small>New Here{''}<span className='text-red-400 pl-2 pr-2'>?</span> <Link to="/signup"> Create an account</Link> </small></p>
                        <SocialLogin ></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;