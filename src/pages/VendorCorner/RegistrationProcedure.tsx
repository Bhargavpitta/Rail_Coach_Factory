import "./RegistrationProcedure.css";
import { Link } from "react-router-dom";

const newRegDocs = [
  "Vendor registration is NOT mandatory for quoting in RCF tenders. Firms may participate in the tender by logging in to the IREPS portal.",
  "You can download the registration form from Website of RCF and submit with online payment of Rs. 84/-.",
  "Account details for Online Payment: Name – FA and CAO, ACCOUNT No. – 65035290377, IFSC CODE – SBIN0050540, MICR CODE – 144002259, BRANCH CODE – 50540, E-MAIL: SBI.50540@sbi.co.in",
  "Fill-in the Registration form and submit along with all necessary document and affidavits as per check-list.",
  "Your application will be scrutinized and if there are any short-fall documents, the same shall be asked.",
  "After receipt of complete information, assessment of your firm will be done by RITES officials for technical capability and financial capacity.",
  "For assessment of technical capability and financial capacity, you need to make payment of Rs. 17700/- (+ GST@18%) to RITES.",
  "Based on assessment report, the decision will be taken by RCF Administration for granting you registration.",
  "Registered External provider is different from an 'Approved External provider'. Registration is done for trade groups of items whereas Approval is done only for Critical Items.",
];

const renewalDocs = [
  "Affidavits on non-judicial stamp paper duly attested by Notary Public (No change in firm's constitution, no banning by Govt., no recoveries due and no pending Arbitration).",
  "Copy of last registration/renewal registration / NSIC certificate.",
  "Attested copy of current and valid ISO-9001 certificate.",
  "Performance report for supplies made to our organization after date of registration for items pertaining to relevant trade groups.",
  "Balance sheet and Turnover certificate of last ended financial year verified/certified by chartered accountant.",
  "Digital Signature Certificate from any Licensed Certifying Authority.",
  "If you did not get any Purchase Order from RCF, copies of offers of tenders in which you have participated should be submitted.",
  "Please note that this Reg./Extn. is subject to condition that your CCA is valid. Validity of your CCA is 4 years. You are advised to timely get your CCA re-validated before submitting request for renewal.",
];

const RegistrationProcedure = () => {
  return (
    <main className="rp-main">
      {/* Page Heading */}
      <div>
        <div className="main-title">Procedure for New / Renewal of Registration</div>
        <div className="title-underline"></div>
      </div>

      {/* Alert Banner */}
      <div className="rp-alert-wrapper">
        <div className="rp-alert-inner">
          <div className="rp-alert">
            <span className="rp-alert-icon">⚠️</span>
            <span>
              RCF में वेंडर रजिस्ट्रेशन के लिए एजेंट/लायजनर/ दलाल/ बिचौलियों आदि से सावधान रहें।
              RCF वेबसाइट पर बताए गए आसान और यूज़र-फ्रेंडली तरीके से वेंडर रजिस्ट्रेशन के लिए सीधे RCF से संपर्क करें।
            </span>
          </div>
        </div>
      </div>

      <div className="rp-content">
        {/* New Registration */}
        <section className="rp-section">
          <div className="rp-section-header rp-header-new">
            <div className="rp-section-icon">🆕</div>
            <div>
              <h2>Procedure for New Registration</h2>
              <p>Follow these steps to complete your new vendor registration</p>
            </div>
          </div>

          <div className="rp-quick-links">
            <a href="#" className="rp-quick-link">📋 Vendor Registration Form</a>
            <a href="#" className="rp-quick-link">❓ FAQs related to Vendor Registration</a>
          </div>

          <ol className="rp-steps-list">
            {newRegDocs.map((doc, i) => (
              <li key={i} className="rp-step-item">
                <span className="rp-step-dot">{i + 1}</span>
                <span>{doc}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Renewal */}
        <section className="rp-section">
          <div className="rp-section-header rp-header-renewal">
            <div className="rp-section-icon">🔄</div>
            <div>
              <h2>Procedure for Renewal of Registration</h2>
              <p>Submit the following documents well in advance (at least 3 months before expiry)</p>
            </div>
          </div>
          <ol className="rp-steps-list">
            {renewalDocs.map((doc, i) => (
              <li key={i} className="rp-step-item rp-step-item--renewal">
                <span className="rp-step-dot rp-step-dot--renewal">{i + 1}</span>
                <span>{doc}</span>
              </li>
            ))}
          </ol>
          <div className="rp-affidavit-link">
            <a href="#">📄 Click here to download specimen copy of the affidavit</a>
          </div>
        </section>

        {/* Note card */}
        <div className="rp-note-card">
          <div className="rp-note-icon">ℹ️</div>
          <div>
            <strong>For tender related information please visit:</strong>
            <a href="https://www.ireps.gov.in" target="_blank" rel="noreferrer"> www.ireps.gov.in</a>
            <p>The renewal of registration will be granted on the basis of your past performance, vendor rating, supply history, etc.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationProcedure;