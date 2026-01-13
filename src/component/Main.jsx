import React from "react";


import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";


import gold from "../assets/gold.png";

const topDemandedItems = [
    {
        id: 1,
        name: "Emerald earrings",
        sku: "18040",
        price: 20000,
        oldPrice: 22000,
        img: "item1.png",
    },
    {
        id: 2,
        name: "Emerald earrings",
        sku: "18040",
        price: 20000,
        oldPrice: 22000,
        img: "item2.png",
    },
    {
        id: 3,
        name: "Silver bracelet",
        sku: "18039",
        price: 8000,
        oldPrice: 9500,
        img: "item3.png",
    },
    {
        id: 4,
        name: "Emerald earrings",
        sku: "18040",
        price: 20000,
        oldPrice: 22000,
        img: "item4.png",
    },
    {
        id: 5,
        name: "Emerald earrings",
        sku: "18040",
        price: 20000,
        oldPrice: 22000,
        img: "item5.png",
    },
    {
        id: 6,
        name: "Emerald earrings",
        sku: "18040",
        price: 20000,
        oldPrice: 22000,
        img: "item6.png",
    },
    {
        id: 7,
        name: "Silver bracelet",
        sku: "18039",
        price: 8000,
        oldPrice: 9500,
        img: "item7.png",
    },
    {
        id: 8,
        name: "Emerald earrings",
        sku: "18040",
        price: 20000,
        oldPrice: 22000,
        img: "item8.png",
    },
];

const banners = [
    {
        id: 1,
        img: "/man.png", // public folder path
        alt: "Bluestone Man Banner",
    },
];


const budgetData = [
    { id: 1, img: b1 },
    { id: 2, img: b2 },
    { id: 3, img: b3 },
    { id: 4, img: b4 },
];

const products = [
    { id: 1, name: "Diamond ring", price: "27000", img: p1 },
    { id: 2, name: "Diamond ring", price: "27000", img: p2 },
    { id: 3, name: "Diamond ring", price: "27000", img: p3 },
    { id: 4, name: "Diamond ring", price: "27000", img: p4 },
];


const Main = () => {
    return (
        <div className="bg-[#1b1b1b] text-white px-4 sm:px-6 lg:px-10 py-8">


            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold font-bodoni text-[#DBF227]">
                    Shop on Budget
                </h2>
                <p className="text-gray-300 text-sm">
                    We have every style at your affordable budget
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {budgetData.map((item) => (
                    <div key={item.id} className="relative rounded-xl overflow-hidden bg-black">

                        <img
                            src={item.img}
                            alt={item.label}
                            className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                        />
                        <div className="absolute bottom-4 left-4">
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

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#0f0f0f] rounded-xl p-4"
                    >
                        <div className="flex justify-end mb-2">♡</div>

                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-40 object-contain mb-4"
                        />

                        <h4 className="text-sm">{item.name}</h4>
                        <p className="text-yellow-400">{item.price}</p>

                        <button className="mt-3 w-full border border-[#DBF227] text-[#DBF227] rounded-md py-2 text-xs hover:bg-[#DBF227] hover:text-black transition cursor-pointer">
                            ADD TO CART
                        </button>

                    </div>

                ))}

            </div>

            <div className="relative w-full min-h-[350px] mt-15 rounded-2xl overflow-hidden bg-gradient-to-r from-[#6b6f18] via-[#1a1a0a] to-black">

                <img
                    src={gold}
                    alt="Gold Jewellery"
                    className="absolute left-1/2 lg:left-8 top-6 lg:top-1/2 
-translate-x-1/2 lg:translate-x-0 
lg:-translate-y-1/2 
w-[80%] sm:w-[60%] max-w-[500px]"
                />


                <div className="relative z-10 max-w-7xl mx-auto h-full flex justify-end px-4 sm:px-8 lg:px-25 pt-32 lg:pt-25">
                    <div className="max-w-lg text-[#F0F0D6] text-center lg:text-right">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bodoni font-semibold leading-tight">
                            The Best Gold Ever
                        </h1>


                        <p className="mt-2 text-base text-left text-gray-300 max-w-md">
                            People thinking about the future why gold make high value
                            here is the answer for all about
                        </p>

                        <button className="mt-12 px-8 py-3 rounded-lg border border-[#DBF227] text-[#DBF227] hover:bg-[#DBF227] hover:text-black transition">
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topDemandedItems.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-2xl p-6 bg-gradient-to-b from-[#1b1b1b] to-black border border-[#DBF227]/40"
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
            {/* Bottom Banner */}
            <div className="w-full mt-12 sm:mt-16 lg:mt-20">
                <div className="max-w-7xl mx-auto px-4">
                    {banners.map((banner) => (
                        <div
                            key={banner.id}
                            className="w-full overflow-hidden rounded-xl sm:rounded-2xl"
                        >
                            <img
                                src={banner.img}
                                alt={banner.alt}
                                className="w-full h-[200px] sm:h-[280px] md:h-[340px] lg:h-[413px] object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>


        </div>

    );
};

export default Main;
