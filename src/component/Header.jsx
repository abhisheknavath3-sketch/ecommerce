import React from "react";
import { Search, Bell, User, Heart, ShoppingCart } from "lucide-react";

const Header = () => {

    const menuItems = [
        "OFFERS",
        "EARRINGS",
        "DEVOTIONAL",
        "BANGLE",
        "BRACELET",
        "PLATINUM",
        "SOLITAIRE",
        "PENDANT",
        "RINGS",
        "NECKLACE",
        "NAVARATNA",
    ];

    return (
        <div className="w-full bg-[#E7F66C]">

      
            <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-6 py-3 gap-3">

                <img src="LOGO.png" alt="logo" className="w-40 px-3" />

                
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">

                    
                    <div className="flex w-40 sm:w-52 md:w-60 border border-gray-900 bg-white rounded-md px-2 py-2">
                        <Search className="w-4 h-4 text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search Here"
                            className="w-full outline-none text-xs sm:text-sm"
                        />
                    </div>

                   
                    <div className="flex items-center gap-3 sm:gap-4">
                        <Bell className="w-5 h-5 cursor-pointer" />
                        <User className="w-5 h-5 cursor-pointer" />
                        <Heart className="w-5 h-5 cursor-pointer" />
                        <ShoppingCart className="w-5 h-5 cursor-pointer" />
                    </div>

                </div>
            </div>

     
            <div className="hidden md:flex gap-7 px-7 py-1 justify-center font-medium">
                {menuItems.map((item, index) => (
                    <p
                        key={index}
                        className="cursor-pointer hover:text-orange-500 transition"
                    >
                        {item}
                    </p>
                ))}
            </div>

        </div>
    );
};

export default Header;
