import "./PLUnification.css";
import { Link } from "react-router-dom";

const PLUnification = () => {
  return (
    <main className="pl-main">
        {/* Page Heading */}
      <div>
        <div className="main-title">PL Unification</div>
        <div className="title-underline"></div>
      </div>

      <div className="pl-content">
        <section className="pl-section">

          <div className="pl-contact-label">Contact :</div>

          <div className="pl-contact-card">
            <div className="pl-contact-row">
              <span className="pl-contact-field">Sh. Anand Kumar</span>
            </div>
            <div className="pl-contact-row">
              <span className="pl-contact-field">Desig : CDMS</span>
            </div>
            <div className="pl-contact-row">
              <span className="pl-contact-field">Mob No. : 9875914817</span>
            </div>
            <div className="pl-contact-row">
              <span className="pl-contact-field">
                Email Id :{" "}
                <a href="mailto:anand.259580@gov.in" className="pl-email-link">
                  anand.259580@gov.in
                </a>
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PLUnification;