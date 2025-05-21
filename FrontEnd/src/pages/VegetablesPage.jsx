import React from "react";

const VegetablesPage = () => {
  return (
    <section id="vegetables-page">
      <h2>تفاصيل الخضروات الطازجة</h2>
      <div className="vegetables-list">
        <div className="vegetable-item">
          <img src="خضروات.jpeg" alt="خضروات" />
          <h3>خضروات طازجة</h3>
          <p>أفضل أنواع الخضروات الطازجة من السوق المركزي.</p>
        </div>
        {/* يمكنك إضافة المزيد من الخضروات هنا */}
      </div>
    </section>
  );
};

export default VegetablesPage;
