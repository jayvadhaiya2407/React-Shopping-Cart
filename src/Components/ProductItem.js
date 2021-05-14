import React from "react";

export const ProductItem = ({ prod, addCart }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={prod.imageURL}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {prod.name}
        </h2>
        <p className="mt-1">&#8377;{prod.price}</p>
        <button
          className="my-2 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          onClick={() => {
            addCart(prod);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
