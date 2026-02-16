import React, { useContext, useEffect } from "react";
import { IoFastFood, IoSearchSharp, IoCart } from "react-icons/io5";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Nav = () => {
    const {input,setInput,category,setCategory,showCart,setShowCard}=useContext(dataContext)

    useEffect(() =>{
        const newlist=food_items.filter((item)=>item.food_name.toLowerCase().includes(input))
        setCategory(newlist)
    },[input]);

    const items=useSelector((state)=>state.cart)

  return (
    <div className="w-full h-24 flex justify-between items-center px-5 md:px-8 ">
      {/* Home button */}
      <div className="w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-xl ">
        <IoFastFood className="w-8 h-8 text-green-500" />
      </div>
      {/* Search Bar */}
      <form className="w-[45%] md:w-[70%] h-15 bg-white flex items-center px-5 gap-5 rounded-3xl shadow-md " onSubmit={(e)=>e.preventDefault()}>
        <IoSearchSharp className="text-green-500 w-6 h-6 rounded-md " />
        <input type="text" placeholder="Search Item..." className="w-full outline-none text-base md:text-xl " onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
      {/* Cart */}
      <div className="w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer" onClick={()=>{
        setShowCard(true)
      }}>
        <span className="absolute top-0 right-2 text-green-500 font-bold text-lg ">{items.length}</span>
        <IoCart className="w-8 h-8 text-green-500" />
      </div>
    </div>
  );
};

export default Nav;
