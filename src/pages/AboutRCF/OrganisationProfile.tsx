import React from 'react';
import { Link } from "react-router-dom";
import AboutLayout from "./AboutLayout"; // Import your official layout
import "./OrganisationProfile.css";

const OrganisationProfile = () => {
  return (
    <AboutLayout>
      <div className="org-page-container">
        
        {/* Professional Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/about"> About RCF</Link> / 
          <span className="current"> Organisation Profile</span>
        </nav>

        <header className="page-header">
          <h1 className="main-page-title">Organisation Profile</h1>
        </header>

        <main className="org-content-body">
          
          {/* Address Section */}
          <section className="info-section">
            <h2 className="section-heading">Address & Contact</h2>
            <div className="address-box">
              <p>
                <strong>Administrative Building</strong> <br />
                Rail Coach Factory <br />
                Kapurthala - 144602 (Punjab)
              </p>
              <div className="contact-grid">
                <p><strong>Website:</strong> www.rcf.indianrailways.gov.in</p>
                <p><strong>Twitter:</strong> @kapurthalarcf</p>
                <p><strong>Facebook:</strong> @KapurthalaRcf</p>
                <p><strong>Contact:</strong> 01822-227734-35</p>
              </div>
            </div>
          </section>

          {/* History Section */}
          <section className="info-section">
            <h2 className="section-heading">History of RCF</h2>
            <p>
              The foundation stone of Rail Coach Factory Kapurthala was laid by
              former Prime Minister <strong>Shri Rajiv Gandhi</strong> on 17 August 1985. The
              objective was to increase passenger coach production for Indian
              Railways and create employment opportunities in Punjab.
            </p>
            <p>
              Production started in 1987 and the first coach was rolled out in
              March 1988.
            </p>
          </section>

          {/* Technological Development */}
          <section className="info-section">
            <h2 className="section-heading">Technological Development</h2>
            <div className="timeline-list">
              <ul>
                <li><strong>1998</strong> – Transfer of technology from Germany for LHB coaches</li>
                <li><strong>2017</strong> – First Tejas Train manufactured</li>
                <li><strong>2021</strong> – First AC Economy Class coach</li>
                <li><strong>2024</strong> – First Vande Metro rake</li>
                <li><strong>2025</strong> – First Amrit Bharat rake production</li>
              </ul>
            </div>
          </section>

          {/* Production Achievement */}
          <section className="info-section">
            <h2 className="section-heading">Production Achievement</h2>
            <div className="highlight-box">
              <p>
                In FY 2024-25, RCF produced a record <strong>2102 coaches</strong> which is an
                11% increase compared to the previous year. LHB coach production
                also increased by 22%.
              </p>
            </div>
          </section>

          {/* Township Section */}
          <section className="info-section">
            <h2 className="section-heading">RCF Township & Facilities</h2>
            <p>
              RCF has a fully developed township with shopping centres,
              banks, post office, sports facilities, schools and welfare
              organisations.
            </p>
          </section>

        </main>
      </div>
    </AboutLayout>
  );
};

export default OrganisationProfile;