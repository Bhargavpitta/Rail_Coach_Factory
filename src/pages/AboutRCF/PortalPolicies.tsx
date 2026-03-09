import React, { useState } from "react";
import AboutLayout from "../AboutRCF/AboutLayout";
import "./PortalPolicies.css";

interface PolicySection {
  id: string;
  icon: string;
  title: string;
  content: string[];
  subSections?: { title: string; items: string[] }[];
}

const policySections: PolicySection[] = [
  {
    id: "contact",
    icon: "📞",
    title: "Contact Us Policy",
    content: [
      "The users of the portal would like to contact Indian Railway organisations to ask questions, get information, seek clarifications or sort out problems. Therefore it is essential that websites provide them with the means to do that.",
    ],
    subSections: [
      {
        title: "Requirements:",
        items: [
          "All Indian Railways websites must have a 'Contact Us' page linked from the homepage.",
          "The page should be categorised according to divisions handling different queries.",
          "Contact details of important functionaries should include phone, fax, address and email.",
          "Provide details of the Web Information Manager responsible for website content.",
        ],
      },
    ],
  },
  {
    id: "national-portal",
    icon: "🌐",
    title: "Presence on the National Portal",
    content: [
      "Mechanism must be in place to ensure that all Citizen Services, Forms, Documents, Schemes are registered with the respective repositories of the National Portal.",
    ],
  },
  {
    id: "secondary-content",
    icon: "📄",
    title: "Secondary Content",
    content: [
      "Secondary content is generated from the assortment and packaging of primary content to suit the requirement of different audiences and occasions.",
    ],
  },
  {
    id: "events",
    icon: "📢",
    title: "Events and Announcements",
    content: [
      "Indian Railways websites should have a section to cover various Events & Announcements.",
    ],
    subSections: [
      {
        title: "Types of Announcements:",
        items: [
          "Announcements having National/State level importance.",
          "Upcoming Government or Railway events.",
          "Schemes, grants, scholarships and fellowships.",
          "Tenders and procurements.",
          "Important infrastructure or policy changes.",
        ],
      },
    ],
  },
  {
    id: "accessibility",
    icon: "♿",
    title: "Accessibility Standards",
    content: [
      "Indian Railways websites should adhere to WCAG 2.0 Level AA accessibility guidelines.",
    ],
    subSections: [
      {
        title: "Key Requirements:",
        items: [
          "Text alternatives for non-text content",
          "Captions for multimedia",
          "Content adaptable without losing information",
          "Content easier to see and hear",
          "Keyboard accessible functionality",
        ],
      },
    ],
  },
  {
    id: "security",
    icon: "🔒",
    title: "Security Policy",
    content: [
      "The website must comply with security guidelines issued by the Government of India.",
    ],
    subSections: [
      {
        title: "Security Requirements:",
        items: [
          "Use HTTPS for all pages",
          "Conduct regular security audits",
          "Avoid publishing sensitive personal data",
          "Implement strong authentication",
          "Maintain regular backups",
        ],
      },
    ],
  },
  {
    id: "privacy",
    icon: "🛡️",
    title: "Privacy Policy",
    content: [
      "This policy describes the information practices of the Rail Coach Factory website.",
    ],
    subSections: [
      {
        title: "Data Collection:",
        items: [
          "Only necessary information is collected",
          "Personal data is not sold or shared",
          "Cookies used for session management",
          "Logs maintained for monitoring and security",
        ],
      },
    ],
  },
];

const PortalPolicies: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <AboutLayout title="Portal Policies">

      <main className="policies-main">

        {/* Intro */}
        <div className="policies-intro">
          <span className="policies-intro__icon">ℹ️</span>
          <p className="policies-intro__text">
            <strong>Portal Policies</strong> describe the guidelines,
            standards and rules governing the official website of
            Rail Coach Factory, Kapurthala. These policies ensure
            transparency, accessibility and security for all users.
          </p>
        </div>

        {/* Quick Links */}
        <div className="quick-links-bar">
          <span className="quick-links-bar__label">Policies:</span>
          <div className="quick-links-bar__links">
            {policySections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="quick-links-bar__link">
                {s.icon} {s.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="policies-sections">
          {policySections.map((section) => (
            <div key={section.id} id={section.id} className="policy-section">

              <button
                className={`policy-section__header ${
                  activeSection === section.id
                    ? "policy-section__header--open"
                    : ""
                }`}
                onClick={() =>
                  setActiveSection(
                    activeSection === section.id ? null : section.id
                  )
                }
              >
                <div className="policy-section__header-left">
                  <span className="policy-section__icon">{section.icon}</span>
                  <h3 className="policy-section__title">{section.title}</h3>
                </div>

                <span
                  className={`policy-section__chevron ${
                    activeSection === section.id
                      ? "policy-section__chevron--open"
                      : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {activeSection === section.id && (
                <div className="policy-section__body">

                  {section.content.map((para, i) => (
                    <p key={i} className="policy-section__para">
                      {para}
                    </p>
                  ))}

                  {section.subSections?.map((sub) => (
                    <div key={sub.title} className="policy-subsection">

                      <h4 className="policy-subsection__title">
                        {sub.title}
                      </h4>

                      <ul className="policy-subsection__list">
                        {sub.items.map((item, i) => (
                          <li key={i} className="policy-subsection__item">
                            {item}
                          </li>
                        ))}
                      </ul>

                    </div>
                  ))}

                </div>
              )}

            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="policies-disclaimer">

          <div className="policies-disclaimer__title">
            ⚠️ Disclaimer
          </div>

          <p className="policies-disclaimer__text">
            Rail Coach Factory, Kapurthala has made every effort to ensure
            accuracy of information on this website. However, information
            is provided "as is" without warranty. External links are provided
            for convenience and do not imply endorsement.
          </p>

        </div>

        {/* Footer Source */}
        <div className="source-bar">
          <span>
            Source: RCF Kapurthala Official Website CMS | Last Reviewed on:
            01-01-2025
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

export default PortalPolicies;