import "./ICardPassForms.css";
import { Link } from "react-router-dom";

const forms = [
  {
    sno: 1,
    title: "Vendor Identity Card Form",
    href: "#",
    icon: "🪪",
  },
  {
    sno: 2,
    title: "Contractor / Contractor's Labour Gate Pass Form",
    href: "#",
    icon: "📋",
  },
  {
    sno: 3,
    title: "Contractor / Contractor's Labour Gate Pass Form for Educational Institutes",
    href: "#",
    icon: "🏫",
  },
  {
    sno: 4,
    title: "Procedure to set-up Sale canopies etc. in RCF, Kapurthala",
    href: "#",
    icon: "🏪",
  },
  {
    sno: 5,
    title: "Vehicle Pass Form for Shopkeeper",
    href: "#",
    icon: "🚗",
  },
];

const ICardPassForms = () => {
  return (
    <main className="ic-main">
            {/* Page Heading */}
      <div>
        <div className="main-title">I Card and Pass Forms</div>
        <div className="title-underline"></div>
      </div>

      <div className="ic-content">
        <section className="ic-section">

          <div className="ic-table-wrapper">
            <table className="ic-table">
              <thead>
                <tr>
                  <th className="ic-th-sno">SNo.</th>
                  <th>Form Title</th>
                  <th className="ic-th-action">Download</th>
                </tr>
              </thead>
              <tbody>
                {forms.map((form) => (
                  <tr key={form.sno} className="ic-row">
                    <td className="ic-td-sno">{form.sno}</td>
                    <td>
                      <div className="ic-form-cell">
                        <span className="ic-form-icon">{form.icon}</span>
                        <a href={form.href} className="ic-form-link">{form.title}</a>
                      </div>
                    </td>
                    <td className="ic-td-action">
                      <a href={form.href} className="ic-download-btn">
                        ⬇ Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ICardPassForms;