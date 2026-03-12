// src/pages/VendorCorner/ProductGallery.tsx
import "./ProductGallery.css";
import { Link } from "react-router-dom";

const galleryItems = [
  { 
    title: "Product Gallery Mechanical", 
    date: "28.12.2022", 
    href: "#",
    icon: "⚙️",
    description: "Mechanical product documents, drawings, and manuals."
  },
  { 
    title: "Product Gallery Electrical", 
    date: "12.01.2023", 
    href: "#",
    icon: "💡",
    description: "Electrical products and schematics for RCF components."
  },
  { 
    title: "Product Gallery General", 
    date: "05.03.2023", 
    href: "#",
    icon: "📦",
    description: "General product documentation and specifications."
  },
];

const ProductGallery = () => {
  return (
    <main className="pg-main">
      <div className="vc-container">
        {/* Page Heading */}
        <h1 className="main-title">Product Gallery</h1>
        <div className="title-underline"></div>


        {/* Gallery Section */}
        <div className="pg-content">
          <section className="pg-section">

            <div className="pg-list">
              {galleryItems.map((item, i) => (
                <a href={item.href} className="pg-item" key={i}>
                  <span className="pg-item-icon">{item.icon}</span>
                  <div className="pg-item-info">
                    <span className="pg-item-title">{item.title}</span>
                    <span className="pg-item-desc">{item.description}</span>
                    {item.date && <span className="pg-item-date">Date: {item.date}</span>}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProductGallery;