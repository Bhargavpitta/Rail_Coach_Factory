import React from "react";
import AboutLayout from "../AboutRCF/AboutLayout";
import "./Rajbhasha.css";

const rajbhashaLinks = [
  {
    title: "Arunodya 2023",
    description: "Annual Hindi magazine published by the Rajbhasha Department of RCF Kapurthala",
    icon: "📰",
    tag: "Magazine",
    color: "#1e4db7",
  },
  {
    title: "Rajbhasha",
    description: "Official language (Hindi) implementation details, circulars, and policies at RCF",
    icon: "🇮🇳",
    tag: "Policy",
    color: "#059669",
  },
  {
    title: "Constitutional Provisions regarding Official Language",
    description: "Constitutional articles and provisions related to the official language of India",
    icon: "⚖️",
    tag: "Legal",
    color: "#7c3aed",
  },
  {
    title: "Rajbhasha Magazine",
    description: "Periodic magazine published in Hindi covering RCF activities and achievements",
    icon: "📖",
    tag: "Publication",
    color: "#f97316",
  },
  {
    title: "Hindi Pakhwada 2024",
    description: "Documents and reports related to Hindi Fortnight celebrations at RCF Kapurthala",
    icon: "🎉",
    tag: "Event",
    color: "#dc2626",
  },
];

const highlights = [
  {
    icon: "🏆",
    title: "Rajbhasha Puraskar",
    desc: "RCF regularly wins awards for exemplary implementation of Official Language Policy",
  },
  {
    icon: "📚",
    title: "Hindi Training",
    desc: "Regular training programmes for employees to enhance their Hindi proficiency",
  },
  {
    icon: "💻",
    title: "e-Office in Hindi",
    desc: "Promotion of Hindi usage in e-Office and digital correspondence",
  },
  {
    icon: "🎭",
    title: "Cultural Events",
    desc: "Hindi Diwas and Hindi Pakhwada celebrated with competitions and cultural events",
  },
];

const Rajbhasha: React.FC = () => {
  return (
    <AboutLayout title="Rajbhasha">

      <main className="rajbhasha-main">

        {/* Intro Banner */}
        <div className="rajbhasha-intro">
          <div className="rajbhasha-intro__hindi">राजभाषा</div>

          <div className="rajbhasha-intro__content">
            <h2 className="rajbhasha-intro__title">
              Official Language Implementation at RCF
            </h2>

            <p className="rajbhasha-intro__text">
              Rail Coach Factory, Kapurthala actively promotes the use of Hindi
              as the Official Language as per the Official Languages Act, 1963
              and the Official Language Policy of the Government of India. The
              Rajbhasha Department ensures compliance with guidelines issued
              by the Department of Official Language, Ministry of Home Affairs.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="rajbhasha-highlights">
          {highlights.map((h) => (
            <div key={h.title} className="rajbhasha-highlight-card">
              <div className="rajbhasha-highlight-card__icon">{h.icon}</div>

              <h3 className="rajbhasha-highlight-card__title">
                {h.title}
              </h3>

              <p className="rajbhasha-highlight-card__desc">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Documents */}
        <div className="section-heading">
          <span className="section-heading__text">
            Rajbhasha Documents & Publications
          </span>
        </div>

        <div className="rajbhasha-links">
          {rajbhashaLinks.map((item) => (
            <a key={item.title} href="#" className="rajbhasha-link-card">

              <div
                className="rajbhasha-link-card__icon-wrap"
                style={{ background: item.color + "15" }}
              >
                <span
                  className="rajbhasha-link-card__icon"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>
              </div>

              <div className="rajbhasha-link-card__body">

                <div className="rajbhasha-link-card__header">

                  <h3 className="rajbhasha-link-card__title">
                    {item.title}
                  </h3>

                  <span
                    className="rajbhasha-link-card__tag"
                    style={{
                      background: item.color + "18",
                      color: item.color,
                    }}
                  >
                    {item.tag}
                  </span>

                </div>

                <p className="rajbhasha-link-card__desc">
                  {item.description}
                </p>

              </div>

              <div className="rajbhasha-link-card__arrow">→</div>

            </a>
          ))}
        </div>

        {/* Constitutional Info */}
        <div className="rajbhasha-info-box">

          <div className="rajbhasha-info-box__title">
            ⚖️ Constitutional Provisions
          </div>

          <p className="rajbhasha-info-box__text">
            Article 343 of the Constitution of India provides that Hindi
            in the Devanagari script shall be the Official Language of the
            Union. Article 344 provides for constitution of a Commission
            to recommend progressive use of Hindi for official purposes.
            Articles 350A and 350B relate to instruction in mother tongue
            and protection of linguistic minorities.
          </p>

          <a href="#" className="rajbhasha-info-box__link">
            Read Full Constitutional Provisions →
          </a>

        </div>

        {/* Source */}
        <div className="source-bar">
          <span>
            Source: RCF Kapurthala Official Website CMS | Last Reviewed on: 22-04-2025
          </span>

          <div className="source-bar__actions">
            <a href="#" className="source-bar__action">
              🔝 Back to Top
            </a>
          </div>
        </div>

      </main>

    </AboutLayout>
  );
};

export default Rajbhasha;