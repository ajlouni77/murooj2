import React, { useEffect, useState } from "react";
import { getAccounts, approveAccount, rejectAccount } from "../../api";


const ManageAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const data = await getAccounts();
      setAccounts(data);
    };

    fetchAccounts();
  }, []);

  const handleApprove = async (accountId) => {
    await approveAccount(accountId);
    setAccounts((prevAccounts) =>
      prevAccounts.filter((account) => account.id !== accountId)
    );
  };

  const handleReject = async (accountId) => {
    await rejectAccount(accountId);
    setAccounts((prevAccounts) =>
      prevAccounts.filter((account) => account.id !== accountId)
    );
  };

  return (
    <div>
      <h3 className="text-xl font-semibold">إدارة الحسابات</h3>
      <div>
        {accounts.map((account) => (
          <div key={account.id} className="border p-4 my-2">
            <p>الحساب رقم: {account.id}</p>
            <p>الاسم: {account.name}</p>
            <p>البريد الإلكتروني: {account.email}</p>
            <p>الحالة: {account.status}</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleApprove(account.id)}
                className="bg-green-500 text-white p-2 rounded"
              >
                الموافقة
              </button>
              <button
                onClick={() => handleReject(account.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                الرفض
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAccounts;
