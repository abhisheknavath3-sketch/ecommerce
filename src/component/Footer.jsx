import React from "react";
import logo from "../assets/logo.svg";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#4F570E]">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-[#F0F0D6] text-center lg:text-left">

          
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="AGD Logo" className="h-14" />
          </div>

          
          <div>
            <h4 className="text-base font-medium mb-6">Company</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="hover:opacity-100 cursor-pointer">Products</li>
              <li className="hover:opacity-100 cursor-pointer">About</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-base font-medium mb-6">Legal</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="hover:opacity-100 cursor-pointer">Privacy Policy</li>
              <li className="hover:opacity-100 cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium mb-6">
              Link Up with Friends!
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-center lg:justify-start items-center gap-3 hover:opacity-80 cursor-pointer">
                <Instagram size={18} /> Instagram
              </li>
              <li className="flex justify-center lg:justify-start items-center gap-3 hover:opacity-80 cursor-pointer">
                <Youtube size={18} /> YouTube
              </li>
              <li className="flex justify-center lg:justify-start items-center gap-3 hover:opacity-80 cursor-pointer">
                <Linkedin size={18} /> LinkedIn
              </li>
            </ul>
          </div>

         
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-base font-medium mb-6">
              Questions? Comments? Concerns?
            </h4>
            <div className="items-end">
            <button className="bg-[#F0F0D6] text-[#4F570E] px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 transition">
              Help
            </button>
            </div>
          </div>

        </div>
      </div>

      <div className="text-center text-sm text-[#E8E8C6] opacity-90 pb-8">
        © 2025 Gold E commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
