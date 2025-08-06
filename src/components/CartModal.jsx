import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem, clearCart } from "../cartSlice";
import { X, Trash2, Plus, Minus } from "lucide-react";
import toast from "react-hot-toast";

const CartModal = ({ isOpen, onClose, onOrder }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleRemove = (id) => {
    dispatch(removeItem(id));
    toast("Removed from cart", { icon: "🗑️" });
  };

  const handleQuantity = (item, delta) => {
    if (item.quantity + delta <= 0) {
      dispatch(removeItem(item.id));
      toast("Removed from cart", { icon: "🗑️" });
    } else {
      dispatch(addItem({ ...item, quantity: delta }));
    }
  };

  const handleClear = () => {
    dispatch(clearCart());
    toast("Cart cleared", { icon: "🧹" });
  };

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-amber-600"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-amber-700">Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            Your cart is empty.
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-amber-50 rounded-lg p-3"
              >
                <div>
                  <div className="font-semibold text-gray-800">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-500">{item.price}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantity(item, -1)}
                    className="p-1 rounded bg-gray-200 hover:bg-amber-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="font-bold text-gray-700">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantity(item, 1)}
                    className="p-1 rounded bg-gray-200 hover:bg-amber-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4 border-t mt-4">
              <span className="font-bold text-lg text-gray-800">Total:</span>
              <span className="font-bold text-lg text-amber-700">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 font-medium"
                onClick={handleClear}
              >
                Clear Cart
              </button>
              <button
                className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-pink-600 transition-colors duration-200"
                onClick={onOrder}
              >
                Proceed to Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
