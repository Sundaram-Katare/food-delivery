import { useState } from "react";

function Tutorial(){
 return(
    <>
     <div className="flex flex-col m-20 text-center justify-center">
        <h1 className="font-bold align-center text-center text-3xl">How it works?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-35">
            <div className="flex flex-col justify-center">
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.55.2/images/pdp/place-order.svg" alt="" className="h-[90px] md:h-[120px] lg:h-[200px]" />
                <h2>Open The App</h2>
                <p className="sm:text-xs md:text-sm lg:text-xl">Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more</p>
            </div>
            <div  className="flex flex-col justify-center">
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.55.2/images/pdp/do-not-blink.svg" alt="" className="h-[90px] md:h-[120px] lg:h-[200px]"/>
                <h2>Place an order</h2>
                <p className="sm:text-xs md:text-sm lg:text-xl">Add your favourite items to the cart & avail the best offers</p>
            </div>
            <div  className="flex flex-col justify-center">
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.55.2/images/pdp/enjoy.svg" alt="" className="h-[90px] md:h-[120px] lg:h-[200px]" />
                <h2>Get free delivery</h2>
                <p className="sm:text-xs md:text-sm lg:text-xl">Experience lighting-fast speed & get all your items delivered in 10 minutes</p>
            </div>
        </div>
     </div>
    </>
 )
}

export default Tutorial;