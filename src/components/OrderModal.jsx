import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearCart } from "../cartSlice";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "7006828611";

const OrderModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.cart.user);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: user.name || "",
    address: user.address || "",
    pincode: user.pincode || "",
  });
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    dispatch(setUser(form));
    // Build WhatsApp message
    const itemsMsg = cartItems
      .map(
        (item) =>
          `${item.title} (${item.quantity}) price = ${item.price.replace(
            /[^\d.]/g,
            ""
          )}\n`
      )
      .join("");
    const msg = `I want to order:\n${itemsMsg}\nName: ${form.name}\nAddress: ${form.address}\nPincode: ${form.pincode}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      msg
    )}`;
    window.open(url, "_blank");
    setSubmitting(false);
    dispatch(clearCart());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-amber-600"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-amber-700">
          Order Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-pink-600 transition-colors duration-200 mt-4"
          >
            {submitting ? "Placing Order..." : "Place Order on WhatsApp"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
