import React, { useContext } from "react";
import { ContentContext } from "../context/ContentContext";

const Wishlist = () => {
  const { wishlist } = useContext(ContentContext);

  return (
    <div className="min-h-screen bg-[#1b1b1b] text-white px-6 py-10">
      <h2 className="text-3xl font-semibold mb-8 text-[#DBF227]">
        My Favourite
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-400 text-center mt-20">No Favourite yet</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item, index) => (
            <div
              key={index}
              className="bg-black rounded-xl p-4 border border-[#DBF227]/40"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-40 mx-auto object-contain mb-4"
              />

              <h4 className="text-sm">{item.name}</h4>
              <p className="text-[#DBF227] font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
