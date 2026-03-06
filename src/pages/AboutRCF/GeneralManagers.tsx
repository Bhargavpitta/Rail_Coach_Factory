import React from "react";
import { Link } from "react-router-dom";
import { gmData } from "./gmData";
import AboutLayout from "./AboutLayout"; // Import the official layout

import CurrentGMImage from "@/assets/leaders/image.png";
import GMGalleryImage from "@/assets/images/image.png";

import "./GeneralManagers.css";

const GeneralManagers = () => {
  return (
    <AboutLayout>
      <div className="gm-page-container">
        
        {/* Professional Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/about"> About RCF</Link> / 
          <span className="current"> General Managers</span>
        </nav>

        <header className="page-header">
          <h1 className="gm-main-title">General Managers</h1>
        </header>

        {/* CURRENT GM FEATURED SECTION */}
        <section className="featured-gm-section">
          <div className="featured-gm-box">
            <div className="gm-photo-wrapper">
              <img src={CurrentGMImage} alt="Sh. Ajay Nandan" />
            </div>
            <div className="gm-info">
              <div className="gm-name">Sh. Ajay Nandan</div>
              <div className="gm-designation">General Manager</div>
            </div>
          </div>
        </section>

        {/* GM HISTORY TABLE */}
        <section className="gm-table-section">
          <h3 className="section-sub-title">List of General Managers</h3>
          <div className="gm-table-container">
            <table className="rcf-styled-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>From</th>
                  <th>To</th>
                </tr>
              </thead>
              <tbody>
                {gmData.map((gm) => (
                  <tr key={gm.id} className={gm.id === 36 ? "row-highlight" : ""}>
                    <td>{gm.id}</td>
                    <td className="text-left-name">{gm.name}</td>
                    <td>{gm.from}</td>
                    <td>{gm.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="gm-gallery-section">
          <h3 className="section-sub-title">GENERAL MANAGER'S GALLERY</h3>
          <div className="gallery-wrapper">
            <img
              src={GMGalleryImage}
              alt="General Managers Gallery"
              className="full-gallery-img"
            />
          </div>
        </section>

      </div>
    </AboutLayout>
  );
};

export default GeneralManagers;