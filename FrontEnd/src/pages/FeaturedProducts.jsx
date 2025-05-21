import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section id="featured-products">
      <h2>منتجاتنا المميزة</h2>
      <div className="products-grid">
        <div className="product">
          <img src="خضروات.jpeg" alt="خضروات طازجة" />
          <h3>خضروات طازجة</h3>
          <p>أفضل أنواع الخضروات الطازجة من السوق المركزي.</p>
          <Link to="/vegetables" className="view-details">
            عرض التفاصيل
          </Link>
        </div>
        <div className="product">
          <img src="فواكه.jpg" alt="فواكه طازجة" />
          <h3>فواكه طازجة</h3>
          <p>أفضل أنواع الفواكه الموسمية والمستوردة.</p>
          <a href="#" className="view-details">
            عرض التفاصيل
          </a>
        </div>
        <div className="product">
          <img src="اعشاب.jpeg" alt="أعشاب طازجة" />
          <h3>أعشاب طازجة</h3>
          <p>أعشاب وتوابل طازجة من السوق المركزي.</p>
          <a href="#" className="view-details">
            عرض التفاصيل
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
