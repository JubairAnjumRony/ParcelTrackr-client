import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const JoinUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-stock text-white py-16 px-6  ">
      <div
        className="w-3/4 mx-auto text-center  md:flex justify-around items-center"
        data-aos="fade-up "
      >
        <div>
          <img
            src="https://i.ibb.co.com/pvCbRH9Y/White-Modern-Join-Us-Today-Recruitment-Instagram-Post.png"
            alt="Join Us"
            className="w-[600px] mx-auto mb-6 rounded-xl"
          />
        </div>

        <div className="ml-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Join Our Community
          </h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-white">
            Be a part of our growing network 
            <br></br>and experience seamless parcel
            management.
          </p>
          <ul className="mb-6 text-lg space-y-2  text-gray-700 dark:text-white">
            <li className="">✔️ Track your shipments in real-time</li>
            <li>✔️ Get exclusive offers and updates</li>
            <li>✔️ Hassle-free parcel management</li>
            <li>✔️ Get Recent Updates in Real Time</li>
          </ul>
          {/* <button className="btn bg-blue hover:bg-blue-700 text-white px-6">
            Get Started
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
