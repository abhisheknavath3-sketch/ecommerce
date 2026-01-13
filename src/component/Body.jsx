import React from "react";
import bg2 from "../assets/image.png";
import { Plane, RefreshCcw, Headphones, ShieldCheck } from "lucide-react";

const Body = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug max-w-xl solway-light">
          The World First Jewellery <br />
          E-Commerce Platform <br />
          The Future Talent
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-200 max-w-md">
          Discover the future of jewelry shopping with our innovative
          e-commerce platform, showcasing exceptional talent and unique
          designs.
        </p>
      </div>

      <div className="hidden md:block absolute bottom-0 w-full bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          <Feature
            icon={<Plane size={20} />}
            title="Free shipping"
            desc="On order over ₹2000"
          />
          <Feature
            icon={<RefreshCcw size={20} />}
            title="Moneyback"
            desc="Guarantee"
          />
          <Feature
            icon={<Headphones size={20} />}
            title="24/7 Support"
            desc="Online help"
          />
          <Feature
            icon={<ShieldCheck size={20} />}
            title="Secure payment"
            desc="Safe checkout"
          />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center gap-1 sm:gap-2">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center text-yellow-400">
      {icon}
    </div>
    <p className="text-sm sm:text-base font-medium">{title}</p>
    <p className="text-xs sm:text-sm text-gray-300">{desc}</p>
  </div>
);

export default Body;
