import React from "react";

// --- Import your images ---
import CateringImg from './assets/Service1.png';
import BirthdayImg from './assets/Service2.png';
import WeddingImg from './assets/Service3.png';
import EventImg from './assets/Service4.png';

const ServicesSection = () => {
  const services = [
    {
      title: "Caterings",
      img: CateringImg,
      description:
        "In the new era of technology we look into the future with certainty for life.",
    },
    {
      title: "Birthdays",
      img: BirthdayImg,
      description:
        "In the new era of technology we look into the future with certainty for life.",
    },
    {
      title: "Weddings",
      img: WeddingImg,
      description:
        "In the new era of technology we look into the future with certainty for life.",
    },
    {
      title: "Events",
      img: EventImg,
      description:
        "In the new era of technology we look into the future with certainty for life.",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16">
      {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-semibold text-gray-800 mb-10 leading-snug">
  We also offer unique <br /> services for your events
</h2>




      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="cursor-pointer">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-52 object-cover rounded-lg shadow-md"
            />

            <h3 className="text-lg font-semibold mt-4">{service.title}</h3>

            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
