import React from 'react';
import { FileText, Eye, Download } from 'lucide-react'; 
import AboutLayout from './AboutLayout';
import "./OrganisationStructure.css";

function OrganisationStructure() {
  const documents = [
    {
      id: 1,
      title: "Organisation Chart",
      fileUrl: "/Organisation Chart 18 Feb 2026.pdf", 
    },
    {
      id: 2,
      title: "Work Distribution",
      fileUrl: "/Structure030925.pdf",
    }
  ];

  // Logic to open the PDF in a new browser tab
  const handleView = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AboutLayout>
      <div className="structure-page">
        <h1 className="main-title">Organisation Structure</h1>
        <div className="title-underline"></div>

        <div className="document-list">
          {documents.map((doc) => (
            <div key={doc.id} className="doc-row">
              <div className="doc-info">
                <div className="doc-icon-wrapper">
                   <FileText size={20} className="blue-icon" />
                </div>
                <span className="doc-title-text">{doc.title}</span>
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

export default OrganisationStructure;