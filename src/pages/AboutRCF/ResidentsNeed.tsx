import React from "react";
import AboutLayout from "./AboutLayout";
import "./ResidentsNeed.css";

const schoolingFacilities = [
  {
    sno: 1,
    name: "Kendriya Vidyalaya – KV I & KV II",
    type: "Central School",
    board: "CBSE (1st–12th)",
    runBy: "Kendriya Vidyalaya Sangathan",
    location: "Near Type IV/D Quarters and near Gate No. 3",
    icon: "🏫",
  },
  {
    sno: 2,
    name: "Govt. Sr. Sec. School",
    type: "Government School",
    board: "Punjabi Medium (6th–10+2)",
    runBy: "Punjab School Education Board",
    location: "Near Hockey ground",
    icon: "🏫",
  },
  {
    sno: 3,
    name: "Govt. Elementary School",
    type: "Government School",
    board: "Punjabi Medium (1st–8th)",
    runBy: "Punjab School Education Board",
    location: "Near Type I Quarters",
    icon: "🏫",
  },
  {
    sno: 4,
    name: "Jack N Jill Jr. School (Balwati School)",
    type: "Private School",
    board: "Pre-Nursery to UKG classes",
    runBy: "Under the aegis of RCF/WWO",
    location: "Near Officers Club / Main area",
    icon: "👶",
  },
];

const facilities = [
  {
    category: "A. Schooling Facilities",
    icon: "🎓",
    color: "#1e4db7",
    description:
      "Five schools functioning in RCF Township providing quality education from pre-nursery to 12th standard.",
  },
  {
    category: "B. Shopping Complex",
    icon: "🛒",
    color: "#059669",
    description:
      "Main Shopping Complex with Kendriya Bhandar and multiple mini shopping complexes throughout the township.",
  },
  {
    category: "C. Banking Complex",
    icon: "🏦",
    color: "#f97316",
    description:
      "All banks clustered near the main shopping complex including SBI, Punjab & Sind Bank, HDFC, Post Office with ATMs.",
  },
  {
    category: "D. Crèche",
    icon: "👶",
    color: "#7c3aed",
    description:
      "Modern crèche for working couples of RCF with modern childcare facilities.",
  },
  {
    category: "E. Vatsalya",
    icon: "🧒",
    color: "#0891b2",
    description:
      "Centre providing inclusive environment for specially-abled children.",
  },
  {
    category: "F. Community Hall",
    icon: "🎭",
    color: "#dc2626",
    description:
      "Community Hall for marriage, retirement and social functions.",
  },
];

const bankCards = [
  { name: "SBI with ATM", icon: "🏦" },
  { name: "Punjab & Sind Bank with ATM", icon: "🏦" },
  { name: "HDFC Bank ATM", icon: "💳" },
  { name: "RCF Co-operative Thrift & Credit Society", icon: "🏛️" },
  { name: "Post Office", icon: "📮" },
];

const ResidentsNeed: React.FC = () => {
  return (
    <AboutLayout title="Resident's Need">

      <main className="residents-main">

        {/* Summary Banner */}
        <div className="residents-summary-banner">
          <div className="residents-summary-banner__icon">🏘️</div>
          <div>
            <h2 className="residents-summary-banner__title">
              Facilities in our Residential Complex
            </h2>
            <p className="residents-summary-banner__text">
              RCF Township is a self-contained residential complex with schools,
              hospitals, shopping, banking and sports facilities.
            </p>
          </div>
        </div>

        {/* Facility Cards */}
        <div className="residents-facility-grid">
          {facilities.map((f) => (
            <div
              key={f.category}
              id={f.category.split(".")[0].toLowerCase()}
              className="residents-facility-card"
              style={{ borderTopColor: f.color }}
            >
              <div
                className="residents-facility-card__icon"
                style={{ background: f.color + "15", color: f.color }}
              >
                {f.icon}
              </div>

              <div className="residents-facility-card__title">
                {f.category}
              </div>

              <p className="residents-facility-card__desc">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Schooling Section */}
        <div id="a">
          <div className="section-heading">
            <span className="section-heading__text">
              A. Schooling Facilities
            </span>
          </div>

          <div className="residents-schools-grid">
            {schoolingFacilities.map((school) => (
              <div key={school.sno} className="residents-school-card">

                <div className="residents-school-card__header">
                  <span className="residents-school-card__num">
                    {school.sno}
                  </span>
                  <span className="residents-school-card__icon">
                    {school.icon}
                  </span>
                </div>

                <h3 className="residents-school-card__name">
                  {school.name}
                </h3>

                <div className="residents-school-card__details">

                  <div className="residents-school-card__detail">
                    <span className="residents-school-card__detail-label">
                      Type:
                    </span>
                    <span>{school.type}</span>
                  </div>

                  <div className="residents-school-card__detail">
                    <span className="residents-school-card__detail-label">
                      Board:
                    </span>
                    <span>{school.board}</span>
                  </div>

                  <div className="residents-school-card__detail">
                    <span className="residents-school-card__detail-label">
                      Managed by:
                    </span>
                    <span>{school.runBy}</span>
                  </div>

                  <div className="residents-school-card__detail">
                    <span className="residents-school-card__detail-label">
                      Location:
                    </span>
                    <span>{school.location}</span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banking Section */}
        <div id="c">

          <div className="section-heading">
            <span className="section-heading__text">
              C. Banking Complex
            </span>
          </div>

          <div className="residents-banks-grid">
            {bankCards.map((bank) => (
              <div key={bank.name} className="residents-bank-card">
                <span className="residents-bank-card__icon">
                  {bank.icon}
                </span>
                <span className="residents-bank-card__name">
                  {bank.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </main>

    </AboutLayout>
  );
};

export default ResidentsNeed;