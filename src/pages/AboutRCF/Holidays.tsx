import React, { useState } from "react";
import AboutLayout from "./AboutLayout";
import "./Holidays.css";

interface Holiday {
  date: string;
  day: string;
  name: string;
  type: "national" | "restricted" | "optional";
}

const holidays2026: Holiday[] = [
  { date: "01 Jan", day: "Thursday", name: "New Year's Day", type: "national" },
  { date: "26 Jan", day: "Monday", name: "Republic Day", type: "national" },
  { date: "14 Feb", day: "Saturday", name: "Guru Ravidas Jayanti", type: "restricted" },
  { date: "20 Feb", day: "Friday", name: "Guru Ravidas Jayanti (Restricted)", type: "restricted" },
  { date: "8 Mar", day: "Sunday", name: "Holi", type: "national" },
  { date: "30 Mar", day: "Monday", name: "Ram Navami", type: "national" },
  { date: "2 Apr", day: "Thursday", name: "Mahavir Jayanti", type: "national" },
  { date: "3 Apr", day: "Friday", name: "Good Friday", type: "national" },
  { date: "14 Apr", day: "Tuesday", name: "Dr. B.R. Ambedkar Jayanti", type: "national" },
  { date: "14 Apr", day: "Tuesday", name: "Baisakhi", type: "restricted" },
  { date: "1 May", day: "Friday", name: "Maharashtra Day / Labour Day", type: "restricted" },
  { date: "7 May", day: "Thursday", name: "Buddha Purnima", type: "national" },
  { date: "15 Aug", day: "Saturday", name: "Independence Day", type: "national" },
  { date: "17 Sep", day: "Thursday", name: "Milad-un-Nabi", type: "national" },
  { date: "2 Oct", day: "Friday", name: "Gandhi Jayanti", type: "national" },
  { date: "20 Oct", day: "Tuesday", name: "Dussehra", type: "national" },
  { date: "31 Oct", day: "Saturday", name: "Maharishi Valmiki Jayanti", type: "restricted" },
  { date: "2 Nov", day: "Monday", name: "Diwali (Deepawali)", type: "national" },
  { date: "19 Nov", day: "Thursday", name: "Guru Nanak Jayanti", type: "national" },
  { date: "25 Dec", day: "Friday", name: "Christmas Day", type: "national" },
];

const typeLabels: Record<string, string> = {
  national: "Gazetted Holiday",
  restricted: "Restricted Holiday",
  optional: "Optional Holiday",
};

const typeColors: Record<string, string> = {
  national: "#1e4db7",
  restricted: "#059669",
  optional: "#d97706",
};

const Holidays: React.FC = () => {
  const [activeYear, setActiveYear] = useState<"2026" | "2025">("2026");

  const nationalCount = holidays2026.filter((h) => h.type === "national").length;
  const restrictedCount = holidays2026.filter((h) => h.type === "restricted").length;

  return (
    <AboutLayout title="Holidays">

      <main className="holidays-main">

        {/* Year Tabs */}
        <div className="holidays-year-bar">
          <div className="holidays-year-bar__title">Holiday Calendar</div>

          <div className="holidays-year-tabs">

            <button
              className={`holidays-year-tab ${activeYear === "2026" ? "holidays-year-tab--active" : ""}`}
              onClick={() => setActiveYear("2026")}
            >
              📅 RCF Calendar 2026
            </button>

            <button
              className={`holidays-year-tab ${activeYear === "2025" ? "holidays-year-tab--active" : ""}`}
              onClick={() => setActiveYear("2025")}
            >
              📅 RCF Calendar 2025
            </button>

          </div>
        </div>

        {/* Summary */}
        <div className="holidays-summary">

          <div className="holidays-summary-card holidays-summary-card--blue">
            <div className="holidays-summary-card__icon">🏛️</div>
            <div className="holidays-summary-card__value">{nationalCount}</div>
            <div className="holidays-summary-card__label">Gazetted Holidays</div>
          </div>

          <div className="holidays-summary-card holidays-summary-card--green">
            <div className="holidays-summary-card__icon">📌</div>
            <div className="holidays-summary-card__value">{restrictedCount}</div>
            <div className="holidays-summary-card__label">Restricted Holidays</div>
          </div>

          <div className="holidays-summary-card holidays-summary-card--amber">
            <div className="holidays-summary-card__icon">📆</div>
            <div className="holidays-summary-card__value">{activeYear}</div>
            <div className="holidays-summary-card__label">Calendar Year</div>
          </div>

        </div>

        {/* Legend */}
        <div className="holidays-legend">

          {Object.entries(typeLabels).map(([type, label]) => (

            <div key={type} className="holidays-legend__item">

              <span
                className="holidays-legend__dot"
                style={{ background: typeColors[type] }}
              ></span>

              <span className="holidays-legend__label">
                {label}
              </span>

            </div>

          ))}

        </div>

        {/* Table */}

        <div className="holidays-table-wrapper">

          <table className="holidays-table">

            <thead>
              <tr>
                <th>S.No.</th>
                <th>Date</th>
                <th>Day</th>
                <th>Holiday</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>

              {holidays2026.map((holiday, i) => (

                <tr key={i} className={`holidays-table__row holidays-table__row--${holiday.type}`}>

                  <td>{i + 1}</td>

                  <td>{holiday.date}</td>

                  <td>{holiday.day}</td>

                  <td>{holiday.name}</td>

                  <td>

                    <span
                      className="holidays-table__badge"
                      style={{
                        background: typeColors[holiday.type] + "18",
                        color: typeColors[holiday.type],
                        border: `1px solid ${typeColors[holiday.type]}40`,
                      }}
                    >
                      {typeLabels[holiday.type]}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

    </AboutLayout>
  );
};

export default Holidays;