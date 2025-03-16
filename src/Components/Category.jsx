import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {useCart} from "./CartContext";

function Category({ heading, items }) {
  const scrollRef = useRef(null);
  const {addToCart} = useCart();

  // Function to scroll horizontally
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll by 80% of container width
      scrollRef.current.scrollTo({
        left: direction === "next" ? scrollLeft + scrollAmount : scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col m-5 md:m-10 border rounded-lg border-gray-900 p-5 shadow-xl shadow-black">
        <h1 className="font-bold text-xl md:text-3xl mb-5 md:mb-10">{heading}</h1>

        {/* Navigation Buttons */}
        {items.length > 6 && (
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => scroll("prev")}
              className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 text-black"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("next")}
              className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 text-black"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Scrollable items container */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="border-2 rounded-lg bg-gray-200 p-2 font-semibold min-w-[150px] md:min-w-[200px] max-w-[220px] snap-start"
            >
              <div>
                <img src={item.img} alt="" className="w-full h-24 md:h-32 object-cover" />
              </div>
              <h2 className="text-center mb-2">{item.name}</h2>
              <p className="font-light mb-2">{item.quantity}</p>
              <div className="flex flex-row justify-between">
                <h3>{`₹ ${item.price}`}</h3>
                <button className="bg-green-500 p-2 border rounded-lg text-white hover:bg-blue-800"
                        onClick={() => addToCart(item)}       
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
