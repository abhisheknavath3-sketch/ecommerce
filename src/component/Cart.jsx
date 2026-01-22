import React, { useContext } from "react";
import { ContentContext } from "../context/ContentContext";
import { MdOutlineDelete } from "react-icons/md";

const Cart = () => {
  const { cart, removeFromCart } = useContext(ContentContext);

  return (
    <div className="min-h-screen bg-[#1b1b1b] text-white px-6 py-10">
      <h2 className="text-3xl font-semibold mb-8 text-[#DBF227]">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-center mt-20">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-black rounded-xl  p-4 border border-[#DBF227]/40 relative"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-40 mx-auto object-contain mb-2"
              />

              <h4 className="text-sm">{item.name}</h4>
              <p className="text-[#DBF227] font-semibold">{item.price}</p>
               <button 
                onClick={() => removeFromCart(item.id)}
                className="absolute right-8 bottom-7 p-2  border border-[#E7F66C] text-[#E7F66C] rounded-md "
              >
               <MdOutlineDelete size={20}/>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
