import React, { useEffect, useState } from "react";
import { getDashboardStats } from "../../api.js";


const Statistics = () => {
  const [stats, setStats] = useState({
    visitors: 0,
    messages: 0,
    orders: 0,
    payments: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        console.log(data);
        setStats(data);
      } catch (error) {
        console.error("خطأ في جلب الإحصائيات:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold">إحصائيات الموقع</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg">عدد الزوار</h4>
          <p className="text-3xl">{stats.visitors}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg">عدد الرسائل</h4>
          <p className="text-3xl">{stats.messages}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg">عدد الطلبات</h4>
          <p className="text-3xl">{stats.orders}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg">عدد المدفوعات</h4>
          <p className="text-3xl">{stats.payments}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
