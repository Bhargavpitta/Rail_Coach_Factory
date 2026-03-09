import React, { useState } from "react";
import AboutLayout from "./AboutLayout";
import "./StaffWelfare.css";

interface WelfareCenter {
  sno: number;
  name: string;
  location: string;
  officialHead: string;
  committeeMembers: string[];
}

const welfareCenters: WelfareCenter[] = [
  {
    sno: 1,
    name: "Homoeopathic Dispensary",
    location: "One room in Lala Lajpat Rai Hospital/RCF",
    officialHead: "PCMO/RCF",
    committeeMembers: ["Governed under SBF Committee"],
  },
  {
    sno: 2,
    name: "Scouts & Guides",
    location: "Scout Den at Waris Shah Hall/RCF",
    officialHead:
      "GM/RCF - Patron\nPCPO - Distt. Chief Commissioner\nDy. CPLE-II - Distt. Commissioner",
    committeeMembers: [
      "Distt. Secy. - Sh. Rajinder Singh",
      "Distt. Organising Comm./Guide - Smt. Anju Bala",
      "Jt. Secy. - Smt. Renu Bala",
      "Distt. Trg. Comm./Scout - Sh. Manish Kumar",
      "Distt. Trg. Comm./Guide - Smt. Manpreet Kaur",
    ],
  },
  {
    sno: 3,
    name: "Staff Canteen",
    location: "Staff Canteen at RCF Workshop & Admin Building",
    officialHead: "PCPO: Chairman\nAPO-I: Secretary",
    committeeMembers: [
      "1. Sh. Parnish Kumar, Sr. Tech./FR",
      "2. Sh. Girraj Jangid, JE",
      "3. Sh. Des Raj, Sr. Tech./Shell",
      "4. Sh. Ramesh Kumar, Tech.III",
      "5. Sh. Kashmir Singh, Tech.II/Shell",
    ],
  },
  {
    sno: 4,
    name: "Trekking Association",
    location: "One room in Waris Shah Hall/RCF",
    officialHead:
      "PCPO - Chief Patron\nPresident - Dy.CPLE-II\nEx. Officio Member - APO-I",
    committeeMembers: [
      "Secy. - Sh. Amandeep Pahwa",
      "Treasurer - Sh. Surjit Singh",
      "Jt. Secy. - Sh. Harpreet Singh",
      "Jt. Secy. - Sh. Gurjit Singh",
      "Exe. Member - Sh. Ravinder Singh, Sh. Deepak Kumar, Sh. Nirmal Singh, Sh. Sukhmander Singh",
    ],
  },
  {
    sno: 5,
    name: "Officers Club",
    location: "Type-V, Near Lake Complex/RCF",
    officialHead: "President: PCME/RCF\nSecy.: Dy.CME/Co-ord.",
    committeeMembers: [
      "Hony. Secy. - Sh. Daljit Singh Bajwa",
      "Hony. Treasurer - Vilas Markale, SSE",
      "Executive Members (as per records)",
    ],
  },
];

const amenitiesCards = [
  {
    icon: "🏥",
    title: "Hospital",
    desc: "Full-fledged 76-bed hospital with ICU and specialist wards serving 35,000+ beneficiaries",
  },
  {
    icon: "🏫",
    title: "Schools",
    desc: "5 schools operating in RCF Township including Kendriya Vidyalayas and Government schools",
  },
  {
    icon: "🛒",
    title: "Shopping Complex",
    desc: "Main shopping complex with Kendriya Bhandar and mini complexes across the township",
  },
  {
    icon: "🏦",
    title: "Banking Complex",
    desc: "Banks including SBI, Punjab & Sind Bank, HDFC and Post Office with ATMs",
  },
  {
    icon: "👶",
    title: "Crèche",
    desc: "Modern crèche facility for working couples of RCF",
  },
  {
    icon: "🧒",
    title: "Vatsalya Centre",
    desc: "Centre for specially-abled children run by RCF WWO",
  },
  {
    icon: "🎭",
    title: "Community Hall",
    desc: "Community Hall for social functions at nominal charges",
  },
  {
    icon: "⛳",
    title: "Golf Course",
    desc: "RCF Golf Course for recreational activities",
  },
];

const StaffWelfare: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <AboutLayout title="Staff Welfare Amenities">
      <main className="welfare-main">

        {/* Amenities */}
        <div className="section-heading">
          <span className="section-heading__text">
            Facilities in RCF Residential Complex
          </span>
        </div>

        <div className="welfare-amenities-grid">
          {amenitiesCards.map((item) => (
            <div key={item.title} className="welfare-amenity-card">
              <div className="welfare-amenity-card__icon">{item.icon}</div>
              <h3 className="welfare-amenity-card__title">{item.title}</h3>
              <p className="welfare-amenity-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Welfare Centres */}
        <div className="section-heading">
          <span className="section-heading__text">Staff Welfare Centres</span>
        </div>

        <div className="welfare-table-wrapper">
          <table className="welfare-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name of the Centre</th>
                <th>Address / Location</th>
                <th>Official Heads</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {welfareCenters.map((center) => (
                <React.Fragment key={center.sno}>
                  <tr className="welfare-table__row">
                    <td>{center.sno}</td>
                    <td>{center.name}</td>
                    <td>{center.location}</td>
                    <td>
                      {center.officialHead.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </td>
                    <td>
                      <button
                        className="welfare-table__expand-btn"
                        onClick={() =>
                          setExpandedRow(
                            expandedRow === center.sno ? null : center.sno
                          )
                        }
                      >
                        {expandedRow === center.sno ? "▲ Hide" : "▼ Members"}
                      </button>
                    </td>
                  </tr>

                  {expandedRow === center.sno && (
                    <tr className="welfare-table__members-row">
                      <td colSpan={5}>
                        <ul className="welfare-members-list">
                          {center.committeeMembers.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </AboutLayout>
  );
};

export default StaffWelfare;