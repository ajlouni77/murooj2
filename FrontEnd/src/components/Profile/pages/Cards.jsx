import React, { useEffect, useState } from "react";
import { addCard, deleteCard, getProfile } from "../../../api";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))._id;

  const fetchCards = async () => {
    const profile = await getProfile(userId);
    setCards(profile.cards || []);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleAdd = async () => {
    await addCard(userId, { type: "Visa", last4: "1234", expiry: "01/2027" });
    fetchCards();
  };

  const handleDelete = async (id) => {
    await deleteCard(userId, id);
    fetchCards();
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-800">
        البطاقات المحفوظة
      </h3>
      <button
        onClick={handleAdd}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        إضافة بطاقة
      </button>
      <ul>
        {cards.map((c) => (
          <li key={c._id} className="mb-3">
            {c.type} - **** {c.last4} - {c.expiry}
            <button
              onClick={() => handleDelete(c._id)}
              className="ml-4 text-red-600"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
