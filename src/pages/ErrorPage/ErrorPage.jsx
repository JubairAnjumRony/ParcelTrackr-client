import { Link, useRouteError } from "react-router-dom";
import notfound from '../../assets/notfound.jpg'


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
        <div className="flex justify-center items-center container mx-auto h-screen flex-col md:flex-row gap-8 text-center md:text-left px-4">
            <div className="space-y-4">
                <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
                <p className="text-xl text-gray-700">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="text-lg text-gray-600 italic pb-4">
                    {error?.status && <span>Error Code: {error.status} - </span>}
                    {error?.statusText || error?.message || "Unknown Error"}
                </p>
                <Link
                    to="/"
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
            <div className="w-full md:w-1/2 ">
                <img
                    src={notfound}
                    alt="Not Found"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/500")}
                />
            </div>
        </div>
    );
  }