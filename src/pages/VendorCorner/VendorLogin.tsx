import "./VendorLogin.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const VendorLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="vl-main">
      <section className="vl-hero">
        <div className="vl-hero-inner">
          <div className="vl-hero-badge">Vendor Corner</div>
          <h1 className="vl-hero-title">Vendor Login</h1>
          <p className="vl-hero-subtitle">
            Login to access vendor-specific tender information and documents.
          </p>
        </div>
      </section>

      <div className="vl-breadcrumb">
        <div className="vl-breadcrumb-inner">
          <Link to="/">Home</Link><span className="vl-sep">›</span>
          <Link to="/vendor-corner">Vendor Corner</Link><span className="vl-sep">›</span>
          <span>Vendor Login</span>
        </div>
      </div>

      <div className="vl-content">
        <div className="vl-notice">
          <span className="vl-notice-icon">ℹ️</span>
          <span>
            <strong>Note:</strong> Please delete the browser history in case of getting error while doing registration or login
            through Google Chrome, otherwise you can use Internet/Mozilla Firefox browser.
          </span>
        </div>

        <div className="vl-card-wrapper">
          <div className="vl-login-card">
            <div className="vl-login-header">
              <div className="vl-login-icon">🔐</div>
              <h2>Vendor Login</h2>
              <p>Enter your credentials to access the portal</p>
            </div>

            <div className="vl-form">
              <div className="vl-form-group">
                <label className="vl-label" htmlFor="username">User Name</label>
                <input
                  id="username"
                  type="text"
                  className="vl-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </div>
              <div className="vl-form-group">
                <label className="vl-label" htmlFor="password">User Password</label>
                <input
                  id="password"
                  type="password"
                  className="vl-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="vl-form-actions">
                <button className="vl-btn-primary" type="button">Login</button>
                <button className="vl-btn-secondary" type="button" onClick={() => { setUsername(""); setPassword(""); }}>Reset</button>
              </div>
              <div className="vl-register-link">
                <Link to="/vendor-corner/vendor-registration">New User Registration →</Link>
              </div>
            </div>
          </div>

          {/* Info sidebar */}
          <div className="vl-info-panel">
            <h3>Quick Links</h3>
            <ul className="vl-info-list">
              <li><Link to="/vendor-corner/vendor-development">🚀 New Vendor? Start Here</Link></li>
              <li><Link to="/vendor-corner/registration-procedure">📋 Registration Procedure</Link></li>
              <li><Link to="/vendor-corner/important-notice">📢 Important Notices</Link></li>
              <li><Link to="/vendor-corner/suggestions-complaints">📬 Suggestions & Complaints</Link></li>
            </ul>
            <div className="vl-helpdesk">
              <h4>Need Help?</h4>
              <p>📞 Vendor Call (RCF): <strong>01822-222724</strong></p>
              <p>📞 CDMS / Vendor Registration: <strong>9875914817</strong></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VendorLogin;