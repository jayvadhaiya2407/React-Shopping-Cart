import React from "react";
import { CartItem } from "./CartItem";

export const Cart = ({ allCartItem, evalPrice, onChange, removeItem }) => {
  return (
    <div>
      <h1 className="text-center text-gray-700 text-4xl my-4 font-bold">
        Cart Items
      </h1>
      <div className="flex flex-col w-full py-8 px-12 text-gray-800 bg-white shadow-lg pin-r pin-y">
        <div className="flex-1">
          <table className="w-full text-sm lg:text-base" cellSpacing="0">
            <thead>
              <tr className="h-12 uppercase">
                <th className="hidden md:table-cell"></th>
                <th className="text-left">Product</th>
                <th className="lg:text-right text-left pl-5 lg:pl-0">
                  <span className="lg:hidden" title="Quantity">
                    Qtd
                  </span>
                  <span className="hidden lg:inline">Quantity</span>
                </th>
                <th className="hidden text-right md:table-cell">Unit price</th>
                <th className="text-right">Total price</th>
              </tr>
            </thead>
            <tbody>
              {allCartItem.length === 0 ? (
                <tr className="h-12">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left"></th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">
                      Cart Is Empty
                    </span>
                    <span className="hidden lg:inline text-2xl">
                      Cart Is Empty
                    </span>
                  </th>
                  <th className="hidden text-right md:table-cell"></th>
                  <th className="text-right"></th>
                </tr>
              ) : (
                allCartItem.map((item) => {
                  return (
                    <CartItem
                      item={item}
                      key={item.id}
                      evalPrice={evalPrice}
                      onChange={onChange}
                      removeItem={removeItem}
                    />
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
