
// src/pages/Tenders/StoreSupplyContracts.tsx

import { Link } from "react-router-dom";
import "./Tenders.css";
import "./StoreSupplyContracts.css";

interface PurchaseOrder {
  label: string;
  year: string;
  href: string;
}

const purchaseOrders: PurchaseOrder[] = [
  { label: "Purchase Order Placed during 2018-19", year: "2018-19", href: "#" },
  { label: "Purchase Order Placed during 2017-18", year: "2017-18", href: "#" },
  { label: "Purchase Order Placed during 2016-17", year: "2016-17", href: "#" },
  { label: "Purchase Order Placed during 2015-16", year: "2015-16", href: "#" },
  { label: "Purchase Order Placed during 2014-15", year: "2014-15", href: "#" },
];

const StoreSupplyContracts = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="tenders-breadcrumb">
        <div className="tenders-container">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span>Tender Information</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-active">Store Supply Contracts</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="tenders-header-bar">
        <h1 className="tenders-page-title">Store Supply Contracts</h1>
      </div>

      {/* Purchase Orders Card */}
      <div className="ssc-card">
        <div className="ssc-card-header">
          <h2 className="ssc-card-title">Purchase Orders</h2>
        </div>

        <div className="ssc-card-body">
          <div className="ireps-info-box">
            <p className="ireps-info-text">
              For Purchase Orders related information please follow this link:
            </p>

            <div className="ireps-path">
              <span className="ireps-path-text">
                IREPS &gt;&gt; home &gt;&gt; contracts &gt;&gt; supply contracts
              </span>

              <a
                href="https://www.ireps.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="ireps-visit-btn"
              >
                Visit IREPS ↗
              </a>
            </div>
          </div>

          {/* Purchase Orders List */}
          <div className="po-list">
            {purchaseOrders.map((po, idx) => (
              <a
                key={idx}
                href={po.href}
                className="po-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="po-icon">📋</span>
                <span className="po-label">{po.label}</span>
                <span className="po-year-badge">{po.year}</span>
                <span className="po-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreSupplyContracts;
