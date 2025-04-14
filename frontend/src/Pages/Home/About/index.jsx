import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Navbar/Footer";

function About() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to Rasoi! We are passionate about delivering the best
            culinary experiences to our customers. Our mission is to provide
            high-quality food with exceptional service.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9425/9425742.png"
            alt="About Us Icon"
            className="mx-auto h-32 w-32 mb-6"
          />
          <p className="text-gray-600 leading-relaxed">
            Whether you're looking for a quick meal or a gourmet experience,
            Rasoi has something for everyone. Join us on this journey of flavors
            and enjoy the best dishes crafted with love.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
