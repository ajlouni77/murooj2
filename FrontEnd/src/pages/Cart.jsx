import React, { useEffect, useState } from "react";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const increaseQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const limeGreen = "rgb(129, 196, 8)";

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <div
        className="flex items-center justify-between mb-8 border-b pb-4"
        style={{ borderColor: limeGreen }}
      >
        <h2
          className="text-3xl font-bold text-right flex items-center gap-2"
          style={{ color: limeGreen }}
        >
          <ShoppingCart className="h-8 w-8" /> سلة المشتريات
        </h2>
        <div className="text-gray-500 text-lg">{totalItems} منتج في السلة</div>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <ShoppingCart className="h-20 w-20 text-gray-300 mx-auto" />
          <p className="text-xl text-gray-600">السلة فارغة</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 py-2 px-6 rounded-lg text-white flex items-center gap-2 mx-auto"
            style={{ backgroundColor: limeGreen }}
          >
            <ArrowRight className="h-5 w-5" /> العودة للتسوق
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border p-4 rounded-lg shadow-sm md:grid md:grid-cols-12 items-center gap-4"
                style={{ borderColor: `${limeGreen}40` }}
              >
                <div className="flex items-center gap-4 col-span-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span className="text-lg font-medium text-gray-800">
                    {item.name}
                  </span>
                </div>
                <div className="text-gray-700 col-span-2 text-right md:text-center">
                  {item.price.toFixed(2)} د.أ
                </div>
                <div className="flex items-center justify-between md:justify-center col-span-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-1"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="text-lg mx-4 w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded-full p-1"
                    style={{
                      backgroundColor: `${limeGreen}20`,
                      color: limeGreen,
                    }}
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between col-span-2">
                  <span className="font-bold" style={{ color: limeGreen }}>
                    {(item.price * item.quantity).toFixed(2)} د.أ
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className="p-6 rounded-lg mt-8 flex flex-col md:flex-row justify-between items-center"
            style={{ backgroundColor: `${limeGreen}10` }}
          >
            <div className="w-full md:w-1/2 space-y-2">
              <div className="flex justify-between text-lg text-gray-600">
                <span>الإجمالي الفرعي:</span>
                <span>{totalAmount.toFixed(2)} د.أ</span>
              </div>
              <div className="flex justify-between text-lg text-gray-600">
                <span>رسوم التوصيل:</span>
                <span>0.00 د.أ</span>
              </div>
              <div
                className="flex justify-between text-xl font-bold pt-2 border-t"
                style={{ borderColor: `${limeGreen}40`, color: limeGreen }}
              >
                <span>الإجمالي النهائي:</span>
                <span>{totalAmount.toFixed(2)} د.أ</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <button
                onClick={() => navigate("/payment")}
                className="w-full md:w-auto text-white py-3 px-8 rounded-lg font-medium text-lg"
                style={{ backgroundColor: limeGreen }}
              >
                إتمام الشراء
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
