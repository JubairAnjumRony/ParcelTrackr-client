import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default duration
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields!");
      return;
    }

    toast.success("Message sent successfully! We will contact you shortly.");
    e.target.reset();
  };

  return (
    <div className=" text-white min-h-screen flex items-center justify-center px-4 py-10">
      <div
        className="container mx-auto w-full grid md:grid-cols-2 gap-10 items-center"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div data-aos="fade-right">
          <h3 className="text-gray-500 dark:text-white uppercase tracking-wide text-sm mb-5">
            Get in touch
          </h3>
          <h1 className="text-4xl font-bold leading-tight my-4 text-gray-500">
            Connect with <span className="">ParcelTrackr</span>,
            <br />
            Elevate Your Moving Experience.
          </h1>
          <p className="text-gray-400 my-4">
            Have questions, feedback, or partnership ideas for ParcelManagement
            System? We&apos;re here to listen. Drop us a message and be part of
            the ultimate gaming review community.
          </p>

          <div className="mt-6 border-t border-gray-500 py-4">
            <p className="uppercase text-gray-500">Follow our social media</p>
            <div className="flex space-x-4 mt-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="bg-gray-800 p-8 rounded-lg shadow-lg dark:bg-gray-900"
          data-aos="fade-bottom"
        >
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <p className="text-gray-400 mb-6">
            Share your thoughts about the latest games, suggest improvements, or
            collaborate with ChilGam to revolutionize the gaming industry!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="input input-bordered bg-gray-700 text-white w-full"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="input input-bordered bg-gray-700 text-white w-full"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="input input-bordered bg-gray-700 text-white w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="input input-bordered bg-gray-700 text-white w-full"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered bg-gray-700 text-white w-full mt-4"
            />
            <textarea
              name="message"
              placeholder="Message*"
              required
              className="textarea textarea-bordered bg-gray-700 text-white w-full mt-4"
            ></textarea>
            {/*  from-indigo-500 via-purple-500 to-pink-500 */}
            <button
              type="submit"
              className="btn bg-gradient-to-r bg-blue-700 border-none text-white w-full mt-6"
              data-aos="flip-up"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
