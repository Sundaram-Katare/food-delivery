import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import HoardingImage from "../../public/Groceries.png"


function Hoarding(){
  return(
    <>
     <div className="flex justify-center border rounded-lg ml-7 mr-7 mt-5 sm:mr-20 ml-20 mt-10">
       <img src={HoardingImage} alt="" className="rounded-lg h-[100px] w-[500px] lg:h-[256px] w-full"/>
     </div>
    </>
  )
}

export default Hoarding;