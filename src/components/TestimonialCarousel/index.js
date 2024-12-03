"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "I have used their service multiple times and they are always prompt and polite.",
      name: "Geethu Sudhakaran",
      source: "Google",
      image:
        "https://staging12.autobusparis.com/images/reviews/geethu-review-for-bcabs.png",
    },
    {
      quote:
        "Good n prompt service. We can always trust them. Even their Drivers are cooperative and we'll behaviours. All the best for their business.",
      name: "Sasikumar Ramanathan",
      source: "Facebook",
      image:
        "https://staging12.autobusparis.com/images/reviews/sasikumar-review-for-bcabs.png",
    },
    {
      quote:
        "Nice experience with booking, prompt responses, friendly and very professional approach. Altogether excellent choice.",
      name: "Dinesh D",
      source: "Yelp",
      image:
        "https://staging12.autobusparis.com/images/reviews/dinesh-review-for-bcabs.png",
    },
  ];

  return (
    <div className="testimonial-carousel text-center">
      <h2 className="text-2xl font-semibold mb-6">
        WHAT <span className="text-secondary">CLIENTS</span> SAY?
      </h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop
        autoplay
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center px-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <p className="text-lg italic mb-4 w-full md:w-1/2">
                {testimonial.quote}
              </p>
              <h3 className="font-bold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.source}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
