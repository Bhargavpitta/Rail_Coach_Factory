import React from 'react';
import { Link } from "react-router-dom";
import AboutLayout from "./AboutLayout"; // Using the official sidebar layout
import "./AboutRCF.css";

function AboutRCF() {
  return (
    <AboutLayout>
      <div className="about-rcf-container">
        
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/about"> About RCF</Link> / 
          <span className="current"> About RCF</span>
        </nav>

        <header className="about-header">
          <h1 className="main-title">About Rail Coach Factory</h1>
          <div className="title-underline"></div>
        </header>

        <div className="about-grid">
          
          {/* Main Introduction Card */}
          <section className="intro-card">
            <div className="card-badge">ESTD 1985</div>
            <h2 className="section-title">A Brief Introduction</h2>
            <p>
              Rail Coach Factory (RCF) is a premier coach manufacturing unit of Indian Railways. 
              Located just 7 kms from the historical city of <strong>Kapurthala</strong>, the factory 
              stands as a symbol of industrial excellence. The integrated township is meticulously 
              planned, boasting lush green surroundings and is widely considered one of the 
              finest residential complexes in India.
            </p>
          </section>

          {/* Legacy Highlight Section */}
          <section className="legacy-section">
            <div className="legacy-content">
              <h3>Industrial Legacy</h3>
              <p>
                After turning out its first coach in <strong>March 1988</strong>, RCF has grown to become the 
                largest and most modern coach manufacturing unit of Indian Railways.
              </p>
              <div className="stat-highlight">
                <span className="stat-number">46,000+</span>
                <span className="stat-text">Coaches built and currently traversing the nation.</span>
              </div>
            </div>
          </section>

          {/* Technical Excellence Card */}
          <section className="tech-card">
            <h2 className="section-title">Technical Excellence</h2>
            <p>
              Equipped with a state-of-the-art <strong>CAD centre</strong> and advanced <strong>CNC machines</strong>, 
              RCF undertakes the complex design and manufacture of bogies, shells, and FRP interiors, 
              ensuring world-class quality and passenger safety.
            </p>
          </section>

          {/* Facilities Section */}
          <section className="facilities-section">
            <h2 className="section-title">Township & World-Class Facilities</h2>
            <div className="facilities-grid">
              
              <div className="facility-item">
                <div className="facility-icon">🏢</div>
                <h4>General Infrastructure</h4>
                <ul>
                  <li>Shopping Complex & Banks with ATM</li>
                  <li>Six Dedicated Educational Schools</li>
                  <li>76-bedded Modern Hospital</li>
                  <li>Picturesque Lake Complex</li>
                </ul>
              </div>

              <div className="facility-item">
                <div className="facility-icon">⛳</div>
                <h4>Sports & Recreation</h4>
                <ul>
                  <li>18-hole International Golf Course</li>
                  <li>Astroturf Hockey Stadium</li>
                  <li>International Size Swimming Pool</li>
                  <li>Cricket Stadium & Skating Rink</li>
                </ul>
              </div>

            </div>
          </section>

        </div>
      </div>
    </AboutLayout>
  );
}

export default AboutRCF;