import React, { useState } from "react";
import AboutLayout from "./AboutLayout";
import "./PhotoGallery.css";

interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  count: number;
  tag: string;
  color: string;
  thumbnail: string;
}

const categories: GalleryCategory[] = [
  {
    id: "amrit-bharat",
    title: "Amrit Bharat Coaches",
    description: "Next generation coaches for Indian Railways under Amrit Bharat scheme",
    count: 12,
    tag: "New Product",
    color: "#1e4db7",
    thumbnail: "🚆",
  },
  {
    id: "vande-metro",
    title: "Namo Bharat Rapid Rail (Vande Metro)",
    description: "Rapid Rail coaches for urban corridors",
    count: 8,
    tag: "Featured",
    color: "#f97316",
    thumbnail: "🚄",
  },
  {
    id: "usbrl",
    title: "LHB Coaches for USBRL",
    description: "Coaches for Udhampur-Srinagar-Baramulla Rail Link",
    count: 15,
    tag: "Special Project",
    color: "#7c3aed",
    thumbnail: "🏔️",
  },
  {
    id: "narrow-gauge",
    title: "Narrow Gauge Coaches — Kalka Shimla Railway",
    description: "Heritage narrow gauge coaches",
    count: 6,
    tag: "Heritage",
    color: "#059669",
    thumbnail: "🌄",
  },
  {
    id: "tejas",
    title: "Tejas Express",
    description: "Premium coaches with modern passenger amenities",
    count: 10,
    tag: "Premium",
    color: "#dc2626",
    thumbnail: "⚡",
  },
  {
    id: "science-express",
    title: "Science Express",
    description: "India's rolling science exhibition train",
    count: 7,
    tag: "Special",
    color: "#0891b2",
    thumbnail: "🔬",
  },
  {
    id: "conventional",
    title: "Conventional & Stainless Steel Coaches",
    description: "Standard railway coaches",
    count: 20,
    tag: "Standard",
    color: "#64748b",
    thumbnail: "🚃",
  },
  {
    id: "factory",
    title: "Factory Operations",
    description: "Manufacturing operations at RCF Kapurthala",
    count: 25,
    tag: "Operations",
    color: "#1a2a4a",
    thumbnail: "🏭",
  },
];

const PhotoGallery: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<GalleryCategory | null>(null);

  return (
    <AboutLayout title="Photo Gallery">
      <main className="gallery-main">

        {/* Stats */}
        <div className="gallery-stats">
          <div className="gallery-stat">
            <span className="gallery-stat__num">{categories.length}</span>
            <span className="gallery-stat__label">Categories</span>
          </div>

          <div className="gallery-stat-divider"></div>

          <div className="gallery-stat">
            <span className="gallery-stat__num">
              {categories.reduce((a, c) => a + c.count, 0)}+
            </span>
            <span className="gallery-stat__label">Photos</span>
          </div>

          <div className="gallery-stat-divider"></div>

          <div className="gallery-stat">
            <span className="gallery-stat__num">HD</span>
            <span className="gallery-stat__label">Quality</span>
          </div>
        </div>

        <div className="section-heading">
          <span className="section-heading__text">
            Product & Operations Gallery
          </span>
        </div>

        {/* Gallery Grid */}

        <div className="gallery-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="gallery-card">

              <div
                className="gallery-card__thumb"
                style={{
                  background: `linear-gradient(135deg, ${cat.color}22, ${cat.color}44)`
                }}
              >

                <div
                  className="gallery-card__emoji"
                  style={{ color: cat.color }}
                >
                  {cat.thumbnail}
                </div>

                <div className="gallery-card__overlay">
                  <button
                    className="gallery-card__view-btn"
                    onClick={() => setLightboxItem(cat)}
                  >
                    View Slide Show
                  </button>
                </div>

                <span
                  className="gallery-card__tag"
                  style={{ background: cat.color }}
                >
                  {cat.tag}
                </span>

              </div>

              <div className="gallery-card__info">

                <h3 className="gallery-card__title">
                  {cat.title}
                </h3>

                <p className="gallery-card__desc">
                  {cat.description}
                </p>

                <div className="gallery-card__footer">

                  <span className="gallery-card__count">
                    📷 {cat.count} Photos
                  </span>

                  <button
                    className="gallery-card__link"
                    onClick={() => setLightboxItem(cat)}
                  >
                    View Slide Show →
                  </button>

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Lightbox */}

        {lightboxItem && (
          <div
            className="lightbox"
            onClick={() => setLightboxItem(null)}
          >

            <div
              className="lightbox__modal"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                className="lightbox__close"
                onClick={() => setLightboxItem(null)}
              >
                ✕
              </button>

              <div
                className="lightbox__preview"
                style={{
                  background: `linear-gradient(135deg, ${lightboxItem.color}33, ${lightboxItem.color}55)`
                }}
              >
                <div className="lightbox__emoji">
                  {lightboxItem.thumbnail}
                </div>
              </div>

              <div className="lightbox__info">

                <h3 className="lightbox__title">
                  {lightboxItem.title}
                </h3>

                <p className="lightbox__desc">
                  {lightboxItem.description}
                </p>

                <div className="lightbox__meta">
                  <span>📷 {lightboxItem.count} Photos</span>

                  <span
                    className="lightbox__tag"
                    style={{ background: lightboxItem.color }}
                  >
                    {lightboxItem.tag}
                  </span>
                </div>

                <a href="#" className="lightbox__btn">
                  Open Full Gallery →
                </a>

              </div>

            </div>

          </div>
        )}

      </main>
    </AboutLayout>
  );
};

export default PhotoGallery;