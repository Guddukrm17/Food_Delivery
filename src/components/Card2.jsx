import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";

const Card2 = ({name,id,price,image,qty}) => {
    const dispatch =useDispatch()
  return (
    <div className="w-full h-30 p-2 shadow-lg flex justify-between ">
      <div className="w-[60%] h-full gap-5 flex">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-2">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          <div className="w-25 h-12 bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl ">
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200" onClick={()=>{dispatch(DecrementQty(id))}}>-</button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">{qty}</span>
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200" onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-6">
        <span className="text-xl text-green-400 font-semibold">Rs {price}/-</span>
        <RiDeleteBinFill  className="w-8 h-8 text-red-400 cursor-pointer " onClick={()=>dispatch(RemoveItem(id))} />
      </div>
    </div>
  );
};

export default Card2;
