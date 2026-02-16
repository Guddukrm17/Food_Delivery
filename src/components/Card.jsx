import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";

const Card = ({ name, image, id, price, type }) => {
    const dispatch=useDispatch()
  return (
    <div className="w-75 h-100 bg-white p-3 rounded-xl flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 ">
      <div className="w-full h-[60%] overflow-hidden rounded-xl">
        <img src={image} className="object-cover" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg text-green-500 font-bold">Rs {price}/-</div>
        <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button className="w-full p-3 bg-green-500 rounded-lg text-white hover:bg-green-400 cursor-pointer transition-all font-semibold text-base" onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}));
        toast.success("Add in your Cart")}}>
        Add Dish
      </button>
    </div>
  );
};

export default Card;
