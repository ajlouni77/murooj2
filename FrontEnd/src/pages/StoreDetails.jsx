// StoreDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoreDetails = () => {
  const { storeId } = useParams();
  const [products, setProducts] = useState([]);
  const [storeInfo, setStoreInfo] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchStoreInfo();
  }, [storeId]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products/store/${storeId}`
      );
      setProducts(res.data);
    } catch (err) {
      console.error("فشل في جلب المنتجات", err);
    }
  };

  const fetchStoreInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/joinasstore`);
      const store = res.data.find((s) => s._id === storeId);
      setStoreInfo(store);
    } catch (err) {
      console.error("فشل في جلب بيانات المتجر", err);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {storeInfo ? (
        <div className="mb-6 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-2">{storeInfo.storeName}</h2>
          <p className="text-gray-600">المالك: {storeInfo.ownerName}</p>
          <p className="text-gray-600">العنوان: {storeInfo.address}</p>
        </div>
      ) : (
        <p className="text-gray-500 mb-4">جاري تحميل معلومات المتجر...</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-sm bg-white p-4 text-center"
          >
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">{product.price} فلس / غرام</p>
          </div>
        ))}
        {products.length === 0 && (
          <p className="col-span-3 text-center text-gray-500">
            لا توجد منتجات حالياً
          </p>
        )}
      </div>
    </div>
  );
};

export default StoreDetails;
