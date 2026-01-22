import React from "react";
import { Search, Bell, User, Heart, ShoppingCart } from "lucide-react";
import { menuItems } from "../constant/Index";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContentContext } from "../context/ContentContext"; // correct path

const Header = () => {
  const navigate = useNavigate();
const { cart } = useContext(ContentContext);

  return (
    <div className="w-full bg-[#E7F66C]">

      <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-6 py-3 gap-3">

        <img src="LOGO.png" alt="logo" className="w-40 px-3" onClick={() => navigate('/')} />

        <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">

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

            {/* ❤️ Wishlist navigation */}
            <Heart
              className="w-5 h-5 cursor-pointer"
              onClick={() => navigate("/wishlist")}
            />

            <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
              <ShoppingCart className="w-5 h-5" />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5
                 rounded-full flex items-center justify-center font-bold">
                  {cart.length > 99 ? "99+" : cart.length}
                </span>
              )}
            </div>

          </div>

        </div>
      </div>

      <div className="flex overflow-x-auto gap-7 px-7 py-1 font-medium">
        {menuItems.map((item, index) => (
          <p key={index} className="cursor-pointer hover:text-orange-500">
            {item}
          </p>
        ))}
      </div>

    </div>
  );
};

export default Header;
