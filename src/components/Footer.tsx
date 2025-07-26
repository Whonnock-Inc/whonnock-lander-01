
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#features" className="hover:text-pulse-500">Features</a></li>
              <li><a href="#" className="hover:text-pulse-500">Pricing</a></li>
              <li><a href="#" className="hover:text-pulse-500">API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pulse-500">About</a></li>
              <li><a href="#" className="hover:text-pulse-500">Careers</a></li>
              <li><a href="#" className="hover:text-pulse-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pulse-500">Help Center</a></li>
              <li><a href="#" className="hover:text-pulse-500">Documentation</a></li>
              <li><a href="#" className="hover:text-pulse-500">Training</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pulse-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pulse-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-pulse-500">Security</a></li>
            </ul>
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
