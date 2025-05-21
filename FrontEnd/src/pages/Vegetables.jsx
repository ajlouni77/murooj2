import React from "react";

const Vegetables = () => {
  // بيانات الخضروات
  const vegetables = [
    { id: 1, name: "طماطم", price: 0.5 },
    { id: 2, name: "خيار", price: 0.3 },
    { id: 3, name: "بطاطا", price: 0.7 },
    { id: 4, name: "سبانخ", price: 1.0 },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🥕 الخضروات المتاحة
      </h2>
      <ul className="space-y-4">
        {vegetables.map((vegetable) => (
          <li
            key={vegetable.id}
            className="flex justify-between bg-gray-100 p-4 rounded-lg"
          >
            <span className="text-lg font-medium">{vegetable.name}</span>
            <span className="font-semibold">
              {vegetable.price.toFixed(2)} د.أ
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vegetables;
