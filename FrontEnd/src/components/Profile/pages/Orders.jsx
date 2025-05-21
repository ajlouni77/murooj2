import React, { useEffect, useState } from "react";
import { getProfile } from "../../../api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))._id;

  useEffect(() => {
    (async () => {
      const profile = await getProfile(userId);
      setOrders(profile.orders || []);
    })();
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-800">الطلبات السابقة</h3>
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="mb-3">
            #{order._id} - {order.amount} دينار - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
