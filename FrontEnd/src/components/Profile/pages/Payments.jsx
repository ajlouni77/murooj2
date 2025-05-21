import React, { useEffect, useState } from "react";
import { getProfile } from "../../../api";

const Payments = () => {
  const [orders, setOrders] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))._id;

  useEffect(() => {
    (async () => {
      const profile = await getProfile(userId);
      setOrders(profile.orders || []);
    })();
  }, []);

  const total = orders.reduce((acc, o) => acc + o.amount, 0);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-800">
        العمليات المالية
      </h3>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order.date} - {order.amount} دينار - {order.status}
          </li>
        ))}
      </ul>
      <div className="mt-4 font-semibold">
        الإجمالي: {total} دينار - عدد الطلبات: {orders.length}
      </div>
    </div>
  );
};

export default Payments;
