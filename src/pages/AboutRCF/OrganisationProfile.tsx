import { Link } from "react-router-dom";
import "./OrganisationProfile.css";

const OrganisationProfile = () => {
  return (
    <div className="org-page">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> /
        <Link to="/about"> About RCF</Link> /
        <span> Organisation Profile</span>
      </div>

      <div className="org-layout">

        {/* Sidebar */}
        <aside className="about-sidebar">
          <ul>
            <li><Link to="/about/certificates">Certificates Issued to RCF</Link></li>
            <li className="active">Organisation Profile</li>
            <li><Link to="/about/general-managers">General Managers</Link></li>
            <li><Link to="/about/about-rcf">About RCF</Link></li>
            <li><Link to="/about/structure">Organisation Structure</Link></li>
            <li><Link to="/about/environment">Environment Management</Link></li>
            <li><Link to="/about/annual-report">Annual Report</Link></li>
            <li><Link to="/about/gallery">Photo Gallery</Link></li>
            <li><Link to="/about/residents-need">Resident's Need</Link></li>
            <li><Link to="/about/holidays">Holidays</Link></li>
            <li><Link to="/about/staff-welfare">Staff Welfare</Link></li>
            <li><Link to="/about/rajbhasha">Rajbhasha</Link></li>
            <li><Link to="/about/statistics">Statistics & Achievements</Link></li>
            <li><Link to="/about/policies">Portal Policies</Link></li>
          </ul>
        </aside>

        {/* Content */}
        <main className="org-content">

          <h1>Organisation Profile</h1>

          {/* Address */}
          <section>
            <h2>Address</h2>
            <p>
              Administrative Building <br />
              Rail Coach Factory <br />
              Kapurthala - 144602 (Punjab)
            </p>

            <p>
              <strong>Website:</strong> www.rcf.indianrailways.gov.in <br />
              <strong>Twitter:</strong> @kapurthalarcf <br />
              <strong>Facebook:</strong> @KapurthalaRcf <br />
              <strong>Contact:</strong> 01822-227734-35
            </p>
          </section>

          {/* History */}
          <section>
            <h2>History of RCF</h2>
            <p>
              The foundation stone of Rail Coach Factory Kapurthala was laid by
              former Prime Minister Shri Rajiv Gandhi on 17 August 1985. The
              objective was to increase passenger coach production for Indian
              Railways and create employment opportunities in Punjab.
            </p>

            <p>
              Production started in 1987 and the first coach was rolled out in
              March 1988.
            </p>
          </section>

          {/* Technology */}
          <section>
            <h2>Technological Development</h2>
            <ul>
              <li>1998 – Transfer of technology from Germany for LHB coaches</li>
              <li>2017 – First Tejas Train manufactured</li>
              <li>2018 – Buddhist Circuit rake production</li>
              <li>2019 – First UDAY rake</li>
              <li>2020 – High Capacity Parcel Van</li>
              <li>2021 – First AC Economy Class coach</li>
              <li>2024 – First Vande Metro rake</li>
              <li>2025 – First Amrit Bharat rake production</li>
            </ul>
          </section>

          {/* Production */}
          <section>
            <h2>Production Achievement</h2>
            <p>
              In FY 2024-25, RCF produced a record 2102 coaches which is an
              11% increase compared to the previous year. LHB coach production
              also increased by 22%.
            </p>
          </section>

          {/* Certifications */}
          <section>
            <h2>Certifications</h2>
            <ul>
              <li>ISO 9001 – Quality Management System</li>
              <li>ISO 14001 – Environmental Management</li>
              <li>ISO 50001 – Energy Management</li>
              <li>OHSAS 18001 – Occupational Health & Safety</li>
              <li>IRIS Silver Certification</li>
            </ul>
          </section>

          {/* Awards */}
          <section>
            <h2>Awards & Recognition</h2>
            <ul>
              <li>Golden Peacock Award 2024 – Energy Efficiency</li>
              <li>Best Production Unit Award – 2023-24</li>
            </ul>
          </section>

          {/* Township */}
          <section>
            <h2>RCF Township & Facilities</h2>
            <p>
              RCF has a fully developed township with shopping centres,
              banks, post office, sports facilities, schools and welfare
              organisations.
            </p>
          </section>

        </main>

      </div>
    </div>
  );
};

export default OrganisationProfile;