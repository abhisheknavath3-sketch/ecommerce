import React, { useState, useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { products } from "../constant/Index";
import { ContentContext } from "../context/ContentContext";
import { FaHeart, FaStar } from "react-icons/fa";
import certi1 from "../assets/m2.svg";
import certi2 from "../assets/m3.svg";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, setQuantity, quantity } = useContext(ContentContext);

  const product = products.find((p) => p.id === Number(id));


  const [purity, setPurity] = useState("18KT");

  const navigate = useNavigate();

  if (!product) return null;

  const unitPrice = Number(product.price);
  const totalPrice = unitPrice * quantity;


  const location = useLocation();

  useEffect(() => {
    setQuantity(1);
  }, [location.pathname]);

  return (
    <div
      className="
        flex flex-col lg:flex-row
        gap-6 lg:gap-12
        bg-black text-[#F0F0D6]
        min-h-screen
        px-4 sm:px-6 lg:px-10
        max-w-7xl mx-auto
        py-6 sm:py-8
      "
    >
      {/* LEFT IMAGE */}
      <div className="relative bg-[#0f0f0f] rounded-xl p-4 sm:p-6 w-full lg:w-1/2">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-3">
            <div className="rounded-md border border-gray-300 cursor-pointer">
              <img
                src={product.img}
                alt="thumb"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>
            <div className="bg-white/90 rounded-md cursor-pointer">
              <img
                src={product.img}
                alt="thumb"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>
          </div>

          {/* Main Image */}
          <img
            src={product.img}
            alt={product.name}
            className="
              w-full
              max-w-xs sm:max-w-sm md:max-w-md
              h-56 sm:h-72 lg:h-96
              object-contain
              transition-transform duration-300
              hover:scale-105 rounded-xl
              border border-gray-200
            "
          />
        </div>
      </div>

      {/* RIGHT DETAILS */}
      <div className="space-y-4 w-full lg:w-1/2">
        {/* Trending */}
        <span className="block text-[#F0F0D6] font-bodoni text-3xl font-semibold">
          Trending
        </span>

        {/* Title */}
        <h1 className="text-xs leading-relaxed">
          {product.name}
        </h1>

        <p className="text-xs text-gray-400">
          SKU: {product.sku}
        </p>


        {/* Price */}
        <div>
          <p className="text-lg font-semibold">
            ₹{totalPrice}
          </p>

          <p className="text-xs text-green-400">You save AED 2500</p>

          <p className="text-sm text-gray-400">
            Quantity: <span className="text-white font-semibold">{quantity}</span>
          </p>

        </div>

        {/* Available Colours */}
        <div className="mt-4">
          <p className="text-sm text-white mb-2">Available Colours</p>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Rose Gold", color: "#FADADD" },
              { name: "Gold", color: "#FFD166" },
              { name: "Off White", color: "#F5F5F5" },
              { name: "Platinum", color: "#2F2F2F" },
            ].map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-1">
                <button
                  className="w-12 h-12 rounded-md border border-white/20"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-gray-400">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-2">

          <button
            onClick={() => {
              const checkoutData = {
                id: product.id,
                name: product.name,
                sku: product.sku,
                price: totalPrice,
                quantity,
                img: product.img,
              };

              console.log("Checkout item:", checkoutData);

              localStorage.setItem(
                "checkoutItem",
                JSON.stringify(checkoutData)
              );

              navigate("/checkout");
            }}
            className="flex-1 border border-[#DBF227]  hover:bg-[#DBF227] rounded-xl 
            cursor-pointer hover:text-black py-2 font-semibold"
          >
            Buy Now
          </button>


          <button
            onClick={() =>
              addToCart({
                ...product,
                quantity,
                price: totalPrice,
              })
            }
            className="flex-1 border border-[#DBF227] 
              
             hover:bg-[#DBF227] hover:text-black 
             rounded-xl py-2 transition-all cursor-pointer"
          >
            Add to Cart
          </button>

        </div>

        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="bg-black border border-gray-100 p-2 w-15 text-xl cursor-pointer"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>


        <div className="w-full border border-gray-600" />
        {/* Gold Purity */}
        <div>
          <p className="text-sm mb-2">Choose Gold Purity</p>

          <div className="flex gap-6 flex-wrap">
            {[
              { purity: "14KT", weight: "3.280 GM" },
              { purity: "18KT", weight: "2.480 GM" },
            ].map((item) => (
              <div key={item.purity} className="flex flex-col items-center">

                {/* Circle Button */}
                <div
                  onClick={() => setPurity(item.purity)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all
            ${purity === item.purity
                      ? "bg-[#DBF227] text-black"
                      : "bg-white text-black border border-gray-400"
                    }`}
                >
                  {item.purity}
                </div>

                {/* Bottom weight only */}
                <p className="text-xs text-gray-400 mt-1">
                  {item.weight}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Delivery */}
        <div>
          <p className="text-sm mb-1">Delivery availability</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <div>
              <input
                placeholder="Enter Pincode"
                className="
                bg-[#F1F1F1] p-2 flex-1 text-black
                placeholder:text-gray-500
                focus:outline-none rounded-lg
              "
              />
            </div>
            <button className="text-black border bg-[#D6D58E] rounded-xl px-4 py-2 cursor-pointer">
              Check Now
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-3 text-sm">
            <div className="flex items-center gap-2">
              <IoCheckmarkDoneSharp className="text-green-600" />
              <p>Standard delivery between 24 Oct & 28 Oct 2022</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkDoneSharp className="text-green-600" />
              <p>Cash / card delivery option available</p>
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className="border-t border-gray-700 pt-3">
          <p className="text-sm font-semibold mb-2">Certification</p>
          <div className="flex gap-6 text-xs">
            <img src={certi1} alt="certification" />
            <img src={certi2} alt="certification" />
          </div>
        </div>

        {/* Product Details */}
        <div className="border-t border-gray-700 pt-4 mt-4">
          <h2 className="text-lg font-semibold mb-3">Product details</h2>

          <div className="space-y-2 text-sm">
            {[
              ["Product ID", "SKU 1245"],
              ["Dimension", "9 – 15.6 mm"],
              ["Gold & KT", "18 KT Yellow Gold"],
              ["Gold Weight", "12.460 GM"],
              ["Diamond Weight", "0.180 CT"],
              ["Diamond", "SII J"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between text-gray-300">
                <span>{label}</span>
                <span className="text-[#F0F0D6]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="border-t border-gray-700 pt-3 px-0 sm:px-7">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">4.4</span>
            <FaStar className="text-yellow-400" />
            <span className="text-xs text-gray-400">(154 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
