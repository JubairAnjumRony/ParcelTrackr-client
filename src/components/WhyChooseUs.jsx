import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-stock text-white py-16 px-6">
      <div
        className="w-3/4 mx-auto flex flex-col md:flex-row items-center gap-10"
        data-aos="fade-up"
      >
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-500 ">
            Why Choose Us?
          </h2>
          <p className="mb-6 text-lg text-gray-500">
            We provide the fastest and most secure parcel management solutions.
            Join us and enjoy seamless shipping experiences.
          </p>
          <ul className="mb-6 text-lg space-y-2 text-gray-400">
            <li>🚀 Fast and Reliable Delivery</li>
            <li>🔒 100% Secure Parcel Handling</li>
            <li>📦 Real-time Tracking System</li>
            <li>💰 Affordable and Transparent Pricing</li>
          </ul>
          {/* <button className="btn bg-blue hover:bg-blue-700 text-white px-6">
            Learn More
          </button> */}
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co.com/9HgjQ5n7/Blue-and-Pink-Corporate-Bold-Why-Choose-Us-Instagram-Post.png"
            className="w-[500px] mx-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
