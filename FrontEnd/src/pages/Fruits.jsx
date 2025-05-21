import React from "react";

const Fruits = () => {
  // بيانات الفواكه
  const fruits = [
    { id: 1, name: "تفاح", price: 1.2 },
    { id: 2, name: "موز", price: 0.8 },
    { id: 3, name: "عنب", price: 2.5 },
    { id: 4, name: "رمان", price: 1.8 },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🍎 الفواكه المتاحة
      </h2>
      <ul className="space-y-4">
        {fruits.map((fruit) => (
          <li
            key={fruit.id}
            className="flex justify-between bg-gray-100 p-4 rounded-lg"
          >
            <span className="text-lg font-medium">{fruit.name}</span>
            <span className="font-semibold">{fruit.price.toFixed(2)} د.أ</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
