import { useCart } from "./CartContext";

function Cart({ isOpen, onClose }) {
  const { cart, removeFromCart } = useCart();

  if (!isOpen) return null; 

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
        onClick={onClose} // Close when clicking outside
      ></div>

      {/* Cart Modal */}
      <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-5">
        <button 
          className="absolute top-3 right-3 text-red-600 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-2 border-b">
              <img src={item.img} alt={item.name} className="w-16 h-16" />
              <h3>{item.name.length <= 10 ? item.name : item.name.slice(0,10) + "..."}</h3>
              <p>{`₹ ${item.price}`}</p>
              <button 
                className="bg-red-500 text-white px-1 py-0 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Cart;
