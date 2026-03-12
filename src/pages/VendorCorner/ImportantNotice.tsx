import "./ImportantNotice.css";

const ImportantNotice = () => {
  return (
    <main className="in-main">

      {/* Page Heading */}
      <div>
        <div className="main-title">Important Notice for Vendors</div>
        <div className="title-underline"></div>
      </div>

      <div className="in-content">

        {/* Tax Numbers */}
        <section className="in-section in-tax-section">
          <div className="in-tax-cards">
            <div className="in-tax-card">
              <span className="in-tax-label">RCF TDS No.</span>
              <span className="in-tax-number">03AAAGM0289C1D2</span>
            </div>

            <div className="in-tax-card">
              <span className="in-tax-label">RCF GST No.</span>
              <span className="in-tax-number">03AAAGM0289C1ZT</span>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="in-section">
          <h2 className="in-section-title">Official Documents & Notices</h2>

          <div className="in-doc-list">
            {[
              { title: "Passing of Suppliers Bill against POs having PVC Clause", date: "19.07.2025" },
              { title: "Solid Models & Drawing of Vande Metro", date: "" },
              { title: "Work Test Certificate format QM F1001 Ver 1.0", date: "" },
              { title: "Vivad Se Vishwas – Relief for MSMEs", date: "" },
              { title: "Items having limited sources", date: "" },
            ].map((doc, i) => (
              <div className="in-doc-item" key={i}>
                <span className="in-doc-icon">📄</span>

                <div className="in-doc-info">
                  <span className="in-doc-title">{doc.title}</span>

                  {doc.date && (
                    <span className="in-doc-date">dt. {doc.date}</span>
                  )}
                </div>

                <a href="#" className="in-doc-link">
                  View →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Grievance Cell */}
        <section className="in-section">
          <h2 className="in-section-title">Grievance Cell – Payment Contact</h2>

          <div className="in-grievance-grid">
            {[
              { name: "Sh. Dilbagh Singh", role: "Sr. Section Officer", contact: "9877064342" },
              { name: "Sh. Amandeep Singh", role: "Sr. Section Officer", contact: "8847342092" },
              { name: "Sh. Rajesh Kak AFA", role: "Section Officer", contact: "9779241108", note: "15:00 to 17:00 hrs" },
            ].map((person, i) => (
              <div className="in-grievance-card" key={i}>

                <div className="in-grievance-avatar">
                  {person.name.charAt(0)}
                </div>

                <div className="in-grievance-info">
                  <h3>{person.name}</h3>

                  <p className="in-grievance-role">
                    {person.role}
                  </p>

                  <p className="in-grievance-contact">
                    📞 {person.contact}
                  </p>

                  {person.note && (
                    <p className="in-grievance-note">
                      ⏰ {person.note}
                    </p>
                  )}
                </div>

              </div>
            ))}
          </div>

          <div className="in-email-notice">
            <span>📧</span>
            <span>
              Vendors can also email at: <strong>afastorebill@gmail.com</strong>
            </span>
          </div>
        </section>

        {/* Registration Helpdesk */}
        <section className="in-section">
          <h2 className="in-section-title">Vendor Registration Helpdesk</h2>

          <p className="in-helpdesk-intro">
            For any queries regarding vendor registration procedure and status of vendor registration application,
            vendors may contact the following officials:
          </p>

          <div className="in-helpdesk-grid">

            <div className="in-helpdesk-card">
              <div className="in-helpdesk-label">
                CDMS / Vendor Registration
              </div>

              <div className="in-helpdesk-number">
                📞 9875914817
              </div>
            </div>

            <div className="in-helpdesk-card in-helpdesk-card--highlight">
              <div className="in-helpdesk-label">
                Dy. Chief Materials Manager
              </div>

              <div className="in-helpdesk-number">
                📞 6283289780
              </div>
            </div>

          </div>
        </section>

        {/* Warning Banner */}
        <section className="in-warning-banner">

          <div className="in-warning-icon">⚠️</div>

          <div className="in-warning-text">
            <strong>
              Beware of Agents / Laisionners / Touts / Middle-men
            </strong>

            <p>
              Approach directly to RCF for Vendor Registration following the simple
              & user-friendly procedure mentioned on RCF Website.
              External provider registration is not mandatory for quoting
              in RCF tenders.
            </p>
          </div>

        </section>

      </div>
    </main>
  );
};

export default ImportantNotice;