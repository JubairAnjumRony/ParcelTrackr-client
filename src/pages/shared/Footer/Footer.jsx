import { FaLinkedin } from "react-icons/fa";
import logo from '../../../assets/ParcelTrackr_Logo.jpg';


const Footer = () => {
    return (
        <footer className="footer footer-center bg-blue-300 dark:bg-gray-800 text-base-content rounded p-2">
          <div className='flex justify-between mt-2 text-white'>
             <div>
               <img className="w-11 h-11 rounded-full" src={logo} alt="" /> 
             </div>
             <div>
             <h1 className="font-bold text-4xl">ParcelTrackr</h1> 
             </div>
          </div>
        
          <div className="flex flex-col items-center space-y-2 text-white">
          <p>
          Email:webteam@ParcelTrackr.com</p>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com">
            
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://:www.facebook.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="https://:www.youtube.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
          </div>

      
        </nav>

        </div>
        <aside>
          <p className="text-white"> Copyright © {new Date().getFullYear()} - All right reserved by ParcelTrackr</p>
        </aside>
      </footer>
    );
};

export default Footer;