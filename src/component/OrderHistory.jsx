import React, { useState } from "react";


const OrderHistory = () => {

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const [search, setSearch] = useState("");

  const handleClearOrders = () => {
    localStorage.removeItem("orders");
    window.location.reload();
  };



  const filteredOrders = orders.filter((order) => {
    const searchValue = search.toLowerCase();


    return (
      (order.orderId || "").toLowerCase().includes(searchValue) ||
      (order.product?.name || "").toLowerCase().includes(searchValue) ||
      (order.product?.sku || "").toLowerCase().includes(searchValue)
    );
  });


  return (
    <div className="bg-black min-h-screen text-[#F0F0D6] px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-6">

        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Order History</h1>
          <button
            onClick={handleClearOrders}
            className="bg-red-600 text-black text-sm px-4 py-2 rounded-lg"
          >
            Clear History
          </button>
        </div>

        {search && filteredOrders.length === 0 && (
          <p className="text-sm text-gray-400">No orders found</p>
        )}


        <div className="flex gap-3 items-center mt-4">
          <div className="flex items-center bg-[#1a1a1a] border border-[#E8E9EA] rounded-lg px-3 w-full ">
            <svg
              className="w-4 h-4 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.6-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search Your order"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm text-[#F0F0D6] placeholder-gray-400 w-full py-2"
            />

          </div>

          <button className="bg-[#D6D58E] text-black text-sm px-6 py-2 rounded-lg font-medium">
            Search
          </button>
        </div>


        {filteredOrders.map((order) => (

          <div
            key={order.orderId}
            className="bg-[#1a1a1a]  border border-gray-700 rounded-xl p-5 flex justify-between items-center"
           >
            <div className="space-y-3">
              <p className="text-xs text-blue-400">
                Name: {order.fullName}  
              </p>
              <p className="text-xs text-blue-400">
                Order ID: {order.orderId}
              </p>
              <p className="text-xs text-blue-400">
                Delivered on {order.date}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <img
                  src={order.product?.img}
                  alt={order.product?.name}
                  className="w-12 h-12 object-contain border border-gray-600 rounded"
                />
                <div>
                  <p className="text-sm">{order.product.name}</p>
                  <p className="text-xs text-gray-400">
                    SKU: {order.product?.sku}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-right space-y-2">
              <p className="text-sm font-semibold">
                TOTAL ₹{order.total}
              </p>

              <button className="bg-[#DBF227] text-black px-4 py-1 rounded-lg text-sm">
                View Order
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default OrderHistory;
