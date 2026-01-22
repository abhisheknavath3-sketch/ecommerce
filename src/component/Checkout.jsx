import React, { useContext, useEffect } from "react";
import gpay from "../assets/gpay.svg";
import phonepe from "../assets/phonepe.svg";
import paytm from "../assets/paytm.svg";
import card from "../assets/card.svg";
import { useState } from "react";

import { ContentContext } from "../context/ContentContext";
import { useNavigate } from "react-router-dom";


const Checkout = () => {



    const [checkoutItem, setCheckoutItem] = useState(null);
    const [orderMessage, setOrderMessage] = useState("");


    useEffect(() => {
        const item = JSON.parse(localStorage.getItem("checkoutItem"));
        setCheckoutItem(item);
    }, []);

    const [pincode, setPincode] = useState("");
    const [pinError, setPinError] = useState("");
    const { setQuantity, quantity } = useContext(ContentContext);
    const navigate = useNavigate();

    const handlePincodeChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setPincode(value);

        if (value === "") {
            setPinError("");
        } else if (value.length !== 6) {
            setPinError("Invalid pincode");
        } else {
            setPinError("");
        }
    };



    return (
        <div className="bg-black min-h-screen  text-[#F0F0D6]">
            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-4 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* LEFT – FORM */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Heading */}
                    <div>
                        <h1 className="text-xl font-semibold font-bodoni">Checkout</h1>
                        <p className="text-xs text-gray-400">Home / Cart / Checkout</p>
                    </div>

                    {/* Delivery Details */}
                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold">Delivery details</h2>
                        <p className="text-xs text-gray-400">
                            We will deliver your order to the below address
                        </p>

                        <input className="checkout-input" placeholder="Full name*" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Phone */}
                            <input className="checkout-input" placeholder="Phone number*" />

                            {/* Pincode */}
                            <div className="flex flex-col">
                                <input
                                    className={`checkout-input ${pinError ? "border-red-500" : ""
                                        }`}
                                    placeholder="Pincode*"
                                    value={pincode}
                                    maxLength={6}
                                    onChange={handlePincodeChange}
                                />

                                {pinError && (
                                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                                        <span className="w-4 h-4 flex items-center justify-center rounded-full bg-red-500 text-white text-[10px]">
                                            i
                                        </span>
                                        {pinError}
                                    </p>
                                )}
                            </div>

                        </div>


                        <input className="checkout-input" placeholder="House number / building name*" />
                        <input className="checkout-input" placeholder="Road name, area, colony*" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                            <input className="checkout-input" placeholder="City*" />

                            <select className="checkout-input" defaultValue="">
                                <option value="" disabled>
                                    Select State
                                </option>
                                <option value="kerala">Kerala</option>
                                <option value="karnataka">Karnataka</option>
                                <option value="tamilnadu">Tamil Nadu</option>
                                <option value="delhi">Delhi</option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="punjab">Punjab</option>

                            </select>
                        </div>


                        <input className="checkout-input" placeholder="Landmark (optional)" />

                        <label className="flex items-center gap-2 text-xs text-blue-400 cursor-pointer">
                            <input
                                type="checkbox"
                                className="accent-[#DBF227] w-4 h-4"
                            />
                            Save Address
                        </label>

                    </div>

                    {/* Payment Method */}
                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold">Payment Method</h2>
                        <p className="text-xs text-gray-400">Choose your payment method</p>

                        {[
                            { name: "Google Pay", icon: gpay },
                            { name: "PhonePe", icon: phonepe },
                            { name: "Paytm", icon: paytm },
                            { name: "Debit / Credit card", icon: card },
                        ].map((method) => (
                            <label
                                key={method.name}
                                className="flex items-center justify-between border-b border-gray-700 py-3 cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="accent-[#DBF227]"
                                    />
                                    <img src={method.icon} alt={method.name} className="h-5" />
                                    <span className="text-sm">{method.name}</span>
                                </div>
                            </label>
                        ))}
                    </div>

                </div>

                {/* RIGHT – ORDER SUMMARY */}
                <div className="border border-gray-700  rounded-xl p-5 h-fit space-y-3">
                    <h2 className="text-sm font-semibold mb-5">ORDER SUMMARY</h2>

                    {checkoutItem && (
                        <div className="flex gap-3 items-center">
                            <img
                                src={checkoutItem.img}
                                alt={checkoutItem.name}
                                className="w-17 h-17 object-contain rounded-md border border-gray-500"
                            />

                            <div className="flex-1 space-y-1 ">
                                <p className="text-">{checkoutItem.name}</p>

                                <p className="text-xs text-gray-400">
                                    SKU: <span className="text-white">{checkoutItem.sku}</span>
                                </p>

                                <p className="text-xs text-gray-400">
                                    Quantity: <span className="text-white">{checkoutItem.quantity}</span>
                                </p>

                                <p className="text-sm font-semibold">
                                    ₹{checkoutItem.price}
                                </p>
                            </div>

                        </div>
                    )}


                    <div className="border border-dotted border-gray-300" />

                    <div className="flex justify-between text-sm font-semibold">
                        <span>Total payable</span>
                        <span>₹{checkoutItem?.price}</span>

                    </div>

                    <div className="border-t border-gray-500" />

                    <p className="text-xs text-green-400">
                        You saved ₹6000. Hurray!
                    </p>

                    {orderMessage && (
                        <p className="text-xs text-green-400 bg-[#1a1a1a] p-2 rounded-lg">
                            {orderMessage}
                        </p>
                    )}

                    <button
                        onClick={() => {
                            if (!checkoutItem) return;

                            const fields = [
                                { key: "fullName", selector: 'input[placeholder="Full name*"]' },
                                { key: "phone", selector: 'input[placeholder="Phone number*"]' },
                                { key: "pin", selector: 'input[placeholder="Pincode*"]' },
                            ];

                            const values = {};
                            let isValid = true;

                            fields.map((field) => {
                                const value =
                                    document.querySelector(field.selector)?.value.trim() || "";
                                values[field.key] = value;

                                if (!value) isValid = false;
                            });

                            if (!isValid || values.pin.length !== 6) {
                                alert("Please fill all required fields correctly");
                                return;
                            }
                          

                            const order = {
                                orderId: `AGD-${Date.now()}`,
                                fullName: values.fullName,
                                product: checkoutItem,
                                total: checkoutItem.price,
                                date: new Date().toLocaleDateString(),
                                status: "Delivered",
                            };

                            const existingOrders =
                                JSON.parse(localStorage.getItem("orders")) || [];

                            const updatedOrders = [order, ...existingOrders];

                            localStorage.setItem("orders", JSON.stringify(updatedOrders));
                            localStorage.removeItem("checkoutItem");

                            navigate("/order-history");
                        }}
                        className="w-full bg-[#DBF227] text-black rounded-xl py-2 cursor-pointer font-semibold"
                    >
                        Buy Now
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Checkout;
