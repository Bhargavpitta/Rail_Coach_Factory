import React from 'react';
import { FileText, Eye, Download, Leaf } from 'lucide-react'; 
import AboutLayout from './AboutLayout';
import "./OrganisationStructure.css"; // Reusing your beautiful government-style CSS

function Environment() {
  const documents = [
    {
      id: 1,
      title: "IMS Policy (Quality Policy)",
      description: "Integrated Management System covering ISO 9001, 14001, and 45001.",
      fileUrl: "/pdfs/IMS Poilcy_15112019.pdf", 
    },
    {
      id: 2,
      title: "Mission 41 K",
      description: "Indian Railways' energy saving and efficiency initiative.",
      fileUrl: "/pdfs/Mission-41k.pdf",
    },
    {
      id: 3,
      title: "Environment Management at RCF",
      description: "Strategies for waste management and green energy production.",
      fileUrl: "/pdfs/EMS ENGLISH.pdf",
    },
    {
      id: 4,
      title: "Work Place Management",
      description: "Guidelines for 5S implementation and shop floor efficiency.",
      fileUrl: "/pdfs/5 s English 2025.pdf",
    }
  ];

  // Logic to open the PDF in a new browser tab
  const handleView = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AboutLayout>
      <div className="structure-page">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <span className="breadcrumb-link">Home</span> / 
          <span className="breadcrumb-link"> About RCF</span> / 
          <span className="breadcrumb-current"> Environment Management</span>
        </nav>

        <header className="page-header-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <h1 className="main-title">Environment & Quality</h1>
            <Leaf className="blue-icon" size={30} style={{ color: '#1e3a8a' }} />
          </div>
          <div className="title-underline"></div>
        </header>

        <div className="document-list">
          {documents.map((doc) => (
            <div key={doc.id} className="doc-row">
              <div className="doc-info">
                <div className="doc-icon-wrapper">
                   <FileText size={20} className="blue-icon" />
                </div>
                <div className="doc-text">
                  <span className="doc-title-text" style={{ display: 'block' }}>{doc.title}</span>
                  <small style={{ color: '#64748b', fontSize: '0.85rem' }}>{doc.description}</small>
                </div>
              </div>
              
              <div className="doc-btns">
                {/* BUTTON 1: VIEW (Opens in New Tab) */}
                <button 
                  onClick={() => handleView(doc.fileUrl)} 
                  className="btn-view-modern"
                >
                  <Eye size={18} /> View
                </button>

                {/* BUTTON 2: DOWNLOAD (Saves File) */}
                <a 
                  href={doc.fileUrl} 
                  download 
                  className="btn-download-modern"
                >
                  <Download size={18} /> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AboutLayout>
  );
}

export default Environment;