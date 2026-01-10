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
        <div className="bg-[#1b1b1b] text-white px-10 py-8">


            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold text-[#DBF227]">
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
                            className="w-full h-64 object-cover opacity-90"
                        />
                        <div className="absolute bottom-4 left-4">
                            <p className="text-sm text-gray-300">{item.label}</p>
                            <p className="text-yellow-400 text-xs">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-2xl font-semibold">New Arrivals</h3>
                    <p className="text-xs text-gray-400">234 New item added</p>
                </div>
                <span className="text-sm text-gray-400 cursor-pointer">
                    See all →
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <div className="bg-[#1b1b1b] text-white px-10 py-8">
                <img
                    src={gold}
                    alt="Gold"
                    className="w-full h-90 object-cover rounded-2xl"
                />
            </div>



        </div>
    );
};

export default Main;
