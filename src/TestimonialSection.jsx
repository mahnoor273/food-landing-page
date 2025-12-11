import React from 'react';

import Review1 from './assets/Review1.png'; 
import Review2 from './assets/Review2.png';
import Review3 from './assets/Review3.png';

const testimonialsData = [
  {
    id: 1,
    quote: "The best restaurant",
    text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    authorName: "Sophie Robson",
    authorTitle: "Los Angeles, CA",
   
    avatar: Review1, 
  },
  {
    id: 2,
    quote: "Simply delicious",
    text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    authorName: "Matt Cannon",
    authorTitle: "San Diego, CA",
    avatar: Review2,
  },
  {
    id: 3,
    quote: "One of a kind restaurant",
    text: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    authorName: "Andy Smith",
    authorTitle: "San Francisco, CA",
    avatar: Review3,
  },
];

// --- 3. TestimonialCard Component (कोई बदलाव नहीं) ---
const TestimonialCard = ({ quote, text, authorName, authorTitle, avatar }) => {
  return (
    <div className="flex-1 p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 h-full flex flex-col">
      {/* Quote */}
      <h3 className="text-xl font-serif text-red-600 mb-4 tracking-wider">
        “{quote}”
      </h3>
      
      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed mb-6 h-32 overflow-hidden">
        {text}
      </p>

      {/* Author Info */}
      <div className="flex items-center pt-4 border-t border-gray-100 mt-auto">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
          
            src={avatar} 
            alt={authorName} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Name and Title */}
        <div>
          <p className="font-semibold text-gray-800">{authorName}</p>
          <p className="text-sm text-gray-500">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

// --- 4. TestimonialSection 
const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-gray-900 text-center mb-12 sm:mb-16">
          What Our Customers Say
        </h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;