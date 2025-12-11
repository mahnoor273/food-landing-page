import React from 'react'
import './index.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import MenuSection from './MenuSection'
import About from './About'
import ServicesSection from './ServicesSection'
import FoodDelivery from './FoodDelivery'
import TestimonialSection from './TestimonialSection'
import BlogSection from './BlogSection'
import Footer from './Footer'


const App = () => {
  return (
    <div>
      <section id='hero'>
      <Navbar />
       <HeroSection />
      </section>
      <section id='menusection'>
      <MenuSection />
</section>
      <section id="about">
        <About />
      </section>
<section id='servicessection'>
      <ServicesSection />
       <FoodDelivery />
      </section>
     <section id='reviews'>
      <TestimonialSection />
      </section>
      <section id='blog'>
      <BlogSection />
      </section>
      <Footer />
    </div>
  );
};


export default App

