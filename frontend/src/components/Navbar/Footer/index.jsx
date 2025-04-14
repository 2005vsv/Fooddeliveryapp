import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Rasoi</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Rasoi is your go-to destination for delicious food delivered to your doorstep. We are committed to providing high-quality meals and exceptional service to satisfy your cravings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-indigo-400 cursor-pointer">Home</li>
              <li className="hover:text-indigo-400 cursor-pointer">About</li>
              <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
              <li className="hover:text-indigo-400 cursor-pointer">Menu</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              <i className="fa fa-phone mr-2"></i> +123 456 7890
            </p>
            <p className="text-gray-400 text-sm">
              <i className="fa fa-envelope mr-2"></i> support@rasoi.com
            </p>
            <p className="text-gray-400 text-sm">
              <i className="fa fa-map-marker mr-2"></i> 123 Culinary Street, Food City
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Rasoi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
