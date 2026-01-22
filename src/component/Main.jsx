import React, { useContext } from "react";
import { topDemandedItems, banners, budgetData, products, } from "../constant/Index";
import gold from "../assets/gold.png";
import { ContentContext } from "../context/ContentContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Main = () => {
    const navigate = useNavigate();
    const { wishlist, addToWishlist, addToCart, } = useContext(ContentContext);
    
    return (
        <div className="bg-[#1b1b1b]  text-white px-4 sm:px-6 lg:px-10 py-8">

            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold font-bodoni text-[#DBF227]">
                    Shop on Budget
                </h2>
                <p className="text-gray-300 text-sm">
                    We have every style at your affordable budget
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {budgetData.map((item) => (
                    <div key={item.id} className="relative rounded-xl overflow-hidden bg-black 
                     hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">

                        <img
                            src={item.img}
                            alt={item.label}
                            className="w-full h-48 sm:h-56 lg:h-64 object-cover "
                        />
                        <div className="absolute bottom-4 left-4 ">
                            <p className="text-sm text-gray-300">{item.label}</p>
                            <p className="text-yellow-400 text-xs">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
                <div>
                    <h3 className="text-2xl font-semibold">New Arrivals</h3>
                    <p className="text-xs text-gray-400">234 New item added</p>
                </div>
                <span className="text-sm text-gray-400 cursor-pointer">
                    See all →
                </span>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
                {products.map((item) => {
                    const isWishlisted = wishlist.some((w) => w.id === item.id);

                    return (
                        <div
                            key={item.id}
                            className="min-w-62.5 shrink-0 bg-[#0f0f0f] rounded-xl p-4 flex flex-col "
                        >
                            {/* Product Image */}
                            <img
                                src={item.img}
                                alt={item.name}
                                onClick={() => navigate(`/product/${item.id}`)}
                                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-contain mb-4 
                                hover:scale-110 transition cursor-pointer"
                            />

                            {/* Product Info */}
                            <h4 className="text-sm sm:text-base md:text-lg text-white mb-1">
                                {item.name}
                            </h4>
                            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-1">
                                SKU: {item.sku}
                            </p>
                            <p className="text-[#DBF227] font-semibold text-sm sm:text-base md:text-lg mb-4">
                                {item.price}
                            </p>

                            {/* Buttons */}
                            <div className="mt-auto flex items-center gap-2">
                                <button
                                    onClick={() => addToCart(item)}
                                    className="flex-1 bg-[#DBF227] text-black font-semibold rounded-md py-2 sm:py-3  cursor-pointer"
                                >
                                    ADD TO CART
                                </button>

                                <button
                                    onClick={() => addToWishlist(item)}
                                    className={`w-12 h-8 sm:w-13 sm:h-12 flex items-center justify-center 
                                      border border-[#DBF227] rounded-md transition cursor-pointer
                                             ${isWishlisted
                                            ? "bg-[#DBF227] text-black"
                                            : "text-white hover:bg-[#DBF227]"
                                        }
                                             `}
                                >
                                    {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                                </button>
                            </div>
                        </div>
                    );
                })}

            </div>



            <div className="relative w-full min-h-100 mt-19 rounded-2xl overflow-hidden bg-linear-to-r from-[#6b6f18] via-[#1a1a0a] to-black">

                <img 
                    src={gold}
                    alt="Gold Jewellery"
                    className="absolute left-1/2 lg:left-0.5 top-6 lg:top-1/2 -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 
                    w-[80%] sm:w-[60%] max-w-162.5"
                  />


                 <div className="relative z-10 max-w-7xl mx-auto h-full flex justify-end px-4 sm:px-8 lg:px-25 pt-32 lg:pt-25">
                    <div className="max-w-lg text-[#F0F0D6] text-center lg:text-right">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bodoni font-semibold leading-tight">
                            The Best Gold Ever
                        </h1>


                        <p className="absolute  mt-2 text-base text-left text-gray-300 max-w-md">
                            People thinking about the future why gold make high value
                            here is the answer for all about
                        </p>

                        <button className="mt-35 px-20 py-3  rounded-lg border border-[#DBF227] text-[#DBF227] hover:bg-[#DBF227] hover:text-black transition">
                            Explore
                        </button>
                    </div>
                </div>

            </div>


            <div className="w-full mt-20">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bodoni font-semibold text-[#F0F0D6]">
                        Top Demanded Items
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">
                        234 New item added
                    </p>
                </div>

                {/* Grid wrapper */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                        {topDemandedItems.map((item) => (
                            <div
                                key={item.id}
                                className=" rounded-2xl p-6 bg-linear-to-b from-[#1b1b1b] to-black border border-[#DBF227]/40 
                                 hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                            >
                                {/* Image */}
                                <div className="h-40 flex items-center justify-center mb-6 ">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="h-full object-contain"
                                    />
                                </div>

                                {/* Text */}
                                <div className="text-center">
                                    <h3 className="text-sm text-[#F0F0D6]">{item.name}</h3>
                                    <p className="text-xs text-gray-400 mt-1">SKU: {item.sku}</p>

                                    <div className="flex justify-center items-center gap-3 mt-4">
                                        <span className="text-[#DBF227] font-semibold">
                                            {item.price}
                                        </span>
                                        <span className="text-gray-500 line-through text-sm">
                                            {item.oldPrice}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>

            </div>

            <div className="w-full mt-10 sm:mt-10 lg:mt-2">
                <div className="max-w-7xl mx-auto px-4">
                    {banners.map((banner) => (
                        <div
                            key={banner.id}
                            className="w-full rounded-xl sm:rounded-2xl"
                        >
                            <img
                                src={banner.img}
                                alt={banner.alt}
                                className="w-full aspect-16/7 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>


            <div className=" w-full h-110   ">
                <h1 className=" sm:text-3xl font-bodoni px-5 font-semibold text-[#F0F0D6]">Recent Searched</h1>
                <p className="text-sm text-gray-400 mt-2 px-5">
                    234 New item added
                </p>

                <div className="max-w-7xl pt-5 mx-auto px-4 sm:px-6 lg:px-10 mt-3">
                    <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
                        {topDemandedItems.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-62.5 shrink-0 rounded-2xl p-6 
                                           bg-linear-to-b from-[#1b1b1b] to-black 
                                           border border-[#DBF227]/40"
                            >
                                {/* Image */}
                                <div className="h-40 flex items-center justify-center mb-6">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="h-full object-contain"
                                    />
                                </div>

                                {/* Text */}
                                <div className="text-center">
                                    <h3 className="text-sm text-[#F0F0D6]">{item.name}</h3>
                                    <p className="text-xs text-gray-400 mt-1">
                                        SKU: {item.sku}
                                    </p>

                                    <div className="flex justify-center items-center gap-3 mt-4">
                                        <span className="text-[#DBF227] font-semibold">
                                            {item.price}
                                        </span>
                                        <span className="text-gray-500 line-through text-sm">
                                            {item.oldPrice}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="w-full max-w-7xl mx-auto bg-[#020b10] py-12 sm:py-16 lg:py-20 border border-[#DBF227] rounded-2xl px-4">

                <div className="max-w-2xl mx-auto text-center">


                    <h2 className="text-[#DBF227] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        Download Our Mobile App
                    </h2>


                    <p className="text-[#F0F0D6] text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
                        Get the top E-commerce app on your phone! We've got you covered with a
                        super user-friendly experience and tons of events to check out.
                        Dive in and explore!
                    </p>


                    <div className="flex flex-row justify-center items-center gap-4 sm:gap-6">
                        <img
                            src="/google.png"
                            alt="Google Play"
                            className="h-12 sm:h-14 cursor-pointer hover:scale-105 transition"
                        />

                        <img
                            src="/apple.png"
                            alt="App Store"
                            className="h-12 sm:h-14 cursor-pointer hover:scale-105 transition"
                        />
                    </div>

                </div>
            </div>


        </div>

    );
};

export default Main;
