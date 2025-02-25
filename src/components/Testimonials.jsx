import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      image: "https://i.ibb.co/BBTSqZr/face-1869641-640.jpg",
      rating: 5,
      comment: "BetterPick helped me find the perfect laptop within minutes!",
    },
    {
      id: 2,
      name: "Michael Smith",
      image:
        "https://i.ibb.co/LzNpNY8/pexels-justin-shaifer-501272-1222271.jpg",
      rating: 4,
      comment: "Amazing service! I love the recommendations.",
    },
    {
      id: 3,
      name: "Sophia Williams",
      image: "https://i.ibb.co/CBxVkMW/pexels-olly-774909.jpg",
      rating: 5,
      comment: "Very accurate suggestions, saved me a lot of time.",
    },
    {
      id: 4,
      name: "Daniel Garcia",
      image: "https://i.ibb.co.com/wsgvFZk/pexels-olly-774095.jpg",
      rating: 5,
      comment:
        "The recommendations are spot on. I found what I needed quickly.",
    },
    {
      id: 5,
      name: "Emma Brown",
      image: "https://i.ibb.co.com/ZxpgqGj/pexels-olly-712513.jpg",
      rating: 4,
      comment:
        "Highly satisfied with the service. The interface is user-friendly.",
    },
  ];

  return (
    <section className="testimonials py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-[#578FCA] font-bold mb-6">
          What Our Users Say
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card bg-white rounded-lg shadow-md p-6 h-56">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-yellow-500 mt-2">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </p>
                <p className="text-gray-600 mt-4">{testimonial.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
