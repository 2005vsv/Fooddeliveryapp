import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Navbar/Footer";

function Contact() {
  return (
    <>
    <Navbar/>
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Got questions? We'd love to hear from you! Reach out to us via the form below or through our email and phone number.
        </p>
        {/* Contact Form */}
        <form action="#" method="POST" className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-8 space-y-3">
          <p><i className="fa fa-phone mr-2"></i> +123 456 7890</p>
          <p><i className="fa fa-envelope mr-2"></i> support@rasoi.com</p>
          <p><i className="fa fa-map-marker mr-2"></i> 123 Culinary Street, Food City</p>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Contact;
