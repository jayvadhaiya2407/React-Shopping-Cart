import React from "react";
import { ProductItem } from "./ProductItem";
import { Prods } from "../Data/Products";

export const Products = ({ addCart }) => {
  return (
    <div>
      <h1 className="text-center text-gray-700 text-4xl font-bold my-3">
        Available Products
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              {Prods.map((item) => {
                return (
                  <ProductItem prod={item} key={item.id} addCart={addCart} />
                );
              })}
            </div>
          </div>
        </section>
      </h1>
    </div>
  );
};
