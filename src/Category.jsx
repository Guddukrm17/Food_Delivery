import { TiThSmallOutline } from "react-icons/ti"
import { MdOutlineFreeBreakfast,MdSoupKitchen,MdRestaurant   } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza,GiHamburger  } from "react-icons/gi";
 const Categories=[
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className="w-15 h-15 text-green-500"/>
    },
    {
        id:2,
        name:"Breakfast",
        icon:<MdOutlineFreeBreakfast className="w-15 h-15 text-green-500"/>
    },
    {
        id:3,
        name:"Soups",
        icon:<MdSoupKitchen className="w-15 h-15 text-green-500"/>
    },
    {
        id:4,
        name:"Pasta",
        icon:<CiBowlNoodles className="w-15 h-15 text-green-500"/>
    },
    {
        id:5,
        name:"Main_Course",
        icon:<MdRestaurant className="w-15 h-15 text-green-500"/>
    },
    {
        id:6,
        name:"Pizza",
        icon:<GiFullPizza className="w-15 h-15 text-green-500"/>
    },
    {
        id:7,
        name:"Burger",
        icon:<GiHamburger className="w-15 h-15 text-green-500"/>
    }
]

export default Categories;