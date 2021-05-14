import React from "react";

export const CartItem = ({ item, evalPrice, onChange, removeItem }) => {
  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <a href="#">
          <img src={item.imageURL} className="w-20 rounded" alt="Thumbnail" />
        </a>
      </td>
      <td>
        <h1>
          <p className="mb-2 md:ml-4">{item.name}</p>
          <p
            onClick={() => {
              removeItem(item);
            }}
            className="text-gray-700 md:ml-4 cursor-pointer"
          >
            <small>(Remove item)</small>
          </p>
        </h1>
      </td>
      <td className="justify-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <input
              type="number"
              defaultValue={item.qty}
              min="1"
              max="3"
              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
              onChange={(e) => {
                onChange(item, e);
              }}
            />
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">
          &#8377;{item.price}
        </span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">
          &#8377;{evalPrice(item)}
        </span>
      </td>
    </tr>
  );
};
