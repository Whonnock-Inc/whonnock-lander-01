
import React from "react";
const Footer = () => {
  return <footer id="contact" className="w-full bg-white py-0">
      <div className="section-container">
        <div className="text-center mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-sm text-gray-600">
              E-Mail: <a href="mailto:projectwhonnock@gmail.com" className="hover:text-gray-900">projectwhonnock@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © 2024 HopSafe. All rights reserved. Making school transportation safer and more transparent.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
