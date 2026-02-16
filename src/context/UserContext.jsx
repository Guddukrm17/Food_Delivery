import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [category, setCategory] = useState(food_items);
  const [input, setInput] = useState("");
    const[showCard,setShowCard]=useState(false)

  const data = {
    category,
    setCategory,
    input,
    setInput,
    food_items, 
    showCard,
    setShowCard
  };

  return (
    <div>
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
    </div>
  );
};

export default UserContext;
