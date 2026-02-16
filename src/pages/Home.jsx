import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Categories from "../Category";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { GiCrossMark } from "react-icons/gi";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const { category, setCategory, input, showCard, setShowCard } =
    useContext(dataContext);

  // filter
  const filter = (cate) => {
    if (cate === "All") {
      setCategory(food_items);
      console.log(food_items);
    } else {
      const newList = food_items.filter(
        (item) =>
          item.food_category.trim().toLowerCase() === cate.trim().toLowerCase(),
      );
      setCategory(newList);
    }
  };

  const items = useSelector((state) => state.cart);
  // Calculation
  const subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );
  const deliveryfee = 30;
  const taxes = (subtotal * 0.5) / 100;
  const total = Math.floor(subtotal + deliveryfee + taxes);

  return (
    <div className="w-full min-h-screen bg-slate-200 ">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full mt-7">
          {Categories.map((item) => (
            <div
              key={item.id}
              className="w-38 h-38 bg-white rounded-2xl flex flex-col items-start gap-5 p-4 text-xl font-bold text-gray-600 shadow-xl  hover:bg-green-200 cursor-pointer transition-all duration-200"
              onClick={() => filter(item.name)}
            >
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      ) : null}

      {/* Card */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {category.length>1?category.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )):<div className="text-center text-4xl text-green-500 font-semibold m-10">No Item are Available</div>}
     
      </div>
      {/* Cart Card */}
      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCard ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="w-full flex justify-between items-center ">
          <span className="text-green-400 text-lg font-bold">Order items</span>
          <GiCrossMark
            className="w-8 h-8 text-green-400 text-lg font-semibold hover:bg-green-600"
            onClick={() => {
              setShowCard(false);
            }}
          />
        </header>
        {items.length > 0 ? (
          <>
            <div className="w-full mt-9 flex flex-col gap-8 ">
              {items.map((item) => (
                <Card2
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>
            {/* Price calculation */}
            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8 ">
              <div className="w-full flex justify-between item-center ">
                <span className="text-lg text-gray-600 font-semibold">
                  Subtotal:
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs {subtotal}/-
                </span>
              </div>
              <div className="w-full flex justify-between item-center ">
                <span className="text-lg text-gray-600 font-semibold">
                  Delivery Fee:
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs {deliveryfee}/-
                </span>
              </div>
              <div className="w-full flex justify-between item-center ">
                <span className="text-lg text-gray-600 font-semibold">
                  Taxes:
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs {taxes}/-
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between item-center p-5  ">
              <span className="text-xl text-gray-600 font-semibold">
                Total:
              </span>
              <span className="text-green-400 font-semibold text-xl">
                Rs {total}/-
              </span>
            </div>
            <button className="w-[80%] p-2 bg-green-500 rounded-lg text-white hover:bg-green-400 cursor-pointer transition-all font-semibold text-lg" onClick={()=>{
                toast.success("Order Placed")
            }}>
              Place Order
            </button>
          </>
        ) : (
          <div className="text-center text-2xl text-green-500 font-semibold m-10">
            Empty Cart
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
