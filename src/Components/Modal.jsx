const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // If modal is not open, return nothing
  
    return (
      <div 
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <div 
          className="bg-white p-6 rounded-lg shadow-lg w-96"
          onClick={(e) => e.stopPropagation()} 
        >
          <h2 className="text-xl font-bold">Login</h2>
          <p className="text-gray-600 mt-2">Enter your credentials to log in.</p>
  
          {/* Input fields */}
          <input 
            type="email" 
            placeholder="Enter your email"
            className="w-full p-2 border rounded mt-3"
          />
          <input 
            type="password" 
            placeholder="Enter your password"
            className="w-full p-2 border rounded mt-3"
          />
  
          {/* Close Button */}
          <button 
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
            onClick={onClose} // Close modal when clicking button
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  