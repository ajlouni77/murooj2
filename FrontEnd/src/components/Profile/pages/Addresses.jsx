import React, { useEffect, useState } from "react";
import { addAddress, deleteAddress, getProfile } from "../../../api";

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))._id;

  const fetchAddresses = async () => {
    const profile = await getProfile(userId);
    setAddresses(profile.addresses || []);
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleAdd = async () => {
    await addAddress(userId, { text: "عنوان جديد", isDefault: false });
    fetchAddresses();
  };

  const handleDelete = async (id) => {
    await deleteAddress(userId, id);
    fetchAddresses();
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-800">عناوين التوصيل</h3>
      <button
        onClick={handleAdd}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        إضافة عنوان
      </button>
      <ul>
        {addresses.map((a) => (
          <li key={a._id} className="mb-3">
            {a.text}
            <button
              onClick={() => handleDelete(a._id)}
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

export default Addresses;
