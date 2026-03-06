import React from 'react';
import { Link } from "react-router-dom";
import AboutLayout from "./AboutLayout"; // Import the Layout
import "./Certificates.css";

const Certificates = () => {
  return (
    <AboutLayout>
      <div className="certificates-page-container">
        
        {/* Breadcrumb - Clean and professional */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/about"> About RCF</Link> / 
          <span className="current"> Certificates Issued to RCF</span>
        </nav>

        <header className="page-header">
          <h2 className="page-title">Certificates Issued to RCF</h2>
          <h1 className="main-heading">CERTIFICATIONS AWARDED TO RCF KAPURTHALA</h1>
        </header>

        <div className="table-responsive">
          <table className="certificate-table">
            <thead>
              <tr>
                <th style={{ width: "8%" }}>S.No.</th>
                <th style={{ width: "60%" }}>Title</th>
                <th style={{ width: "32%" }}>Click to View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <strong>IRIS Certificate</strong> – RCF has successfully obtained IRIS Certification.
                </td>
                <td className="cert-images">
                  <img src="/certificates/IRIS01.jpg" alt="IRIS Certificate"/>
                  <img src="/certificates/IRIS02.jpg" alt="IRIS Certificate"/>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  Integrated Management System – RCF is the first unit in Indian Railways 
                  to obtain certification for Integrated Management System covering 
                  <strong> ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018</strong>.
                </td>
                <td className="cert-images">
                  <img src="/certificates/ISO1.jpg" alt="ISO Certificate"/>
                  <img src="/certificates/ISO2.jpg" alt="ISO Certificate"/>
                  <img src="/certificates/ISO3.jpg" alt="ISO Certificate"/>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>
                  <strong>ISO 50001:2018</strong> – RCF has successfully obtained Energy Management System certification.
                </td>
                <td className="cert-images">
                  <img src="/certificates/ISO4.jpg" alt="Energy Certificate"/>
                </td>
              </tr>
              
              <tr>
                <td>4</td>
                <td>
                  <strong>‘5S’ Certification</strong> (A Japanese concept for improving Work Place Efficiency) - 
                  RCF is the first organization in Indian Railways to obtain this certification.
                </td>
                <td className="cert-images">
                  <img src="/certificates/energy.jpg" alt="Energy Certificate"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AboutLayout>
  );
};

export default Certificates;