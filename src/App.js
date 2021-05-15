import { Header } from "./Components/Header";
import { Products } from "./Components/Products";
import { Cart } from "./Components/Cart";
import { Footer } from "./Components/Footer";
import React, { useState, useEffect } from 'react';

function App() {

  const existOrNot = (cI)=>{
    for (const item of cartItem) {
      if(JSON.stringify(item.name) === JSON.stringify(cI.name)){
        return true;
      }
    };
  }

  const evalPrice = (cI)=>{
    return (cI.qty * cI.price);
  }

  const addCart = (prod)=>{
    const cI = {
      id:prod.id,
      name:prod.name,
      imageURL:prod.imageURL,
      qty:1,
      price:prod.price
    }
    if(existOrNot(cI)){
      alert("Already Added To Cart");
    }else{
      setcartItem([...cartItem, cI]);
    }
  }

  const getCartItem = ()=>{
    let cartItem;
    if(localStorage.getItem("cartItem") !== null)
    {
      return cartItem = JSON.parse(localStorage.getItem("cartItem"));
    }else{
      return cartItem = [];
    }
  }

  const removeItem = (item)=>{
    setcartItem(cartItem.filter((e) => {
      return e !== item;
    }));
  }

  const onChange = (item, e)=>{
    let allCartItems = JSON.parse(localStorage.getItem("cartItem"));
    for (let ci of allCartItems) {
      if(JSON.stringify(ci) === JSON.stringify(item)){
        ci.qty = parseInt(e.target.value);
        setcartItem(allCartItems);
      }
    }
  }

  const [cartItem, setcartItem] = useState(getCartItem());
  const [bill, setBill] = useState(0);
  useEffect(() => {
    let total = 0;
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    for (const item of cartItem) {
      total += evalPrice(item);
    }
    setBill(total);
  }, [cartItem])

  return (
    <>
    <Header/>
    <Products addCart={addCart}/>
    <Cart allCartItem={cartItem} evalPrice={evalPrice} onChange={onChange} removeItem={removeItem} bill={bill}/>
    <Footer/>
    </>
  );
}

export default App;
