import "./VendorRegistration.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const countries = [
  "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
  "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia",
  "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
  "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
  "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic",
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland",
  "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
  "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
  "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent", "Samoa", "San Marino", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
  "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
  "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
  "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];

const termsText = `I hereby declare that the information submitted above is true and correct to the best of my knowledge. I understand that if any information provided is found to be untrue, Rail Coach Factory reserves the right to cancel any offer or contract and/or take any other appropriate action.`;

const VendorRegistration = () => {
  const [form, setForm] = useState({
    loginName: "",
    contactPerson: "",
    companyName: "",
    postalAddress: "",
    country: "",
    city: "",
    mobileNo: "",
    phoneNo: "",
    emailId: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  return (
    <main className="vr-main">
      <section className="vr-hero">
        <div className="vr-hero-inner">
          <div className="vr-hero-badge">Vendor Corner</div>
          <h1 className="vr-hero-title">Vendor Registration</h1>
          <p className="vr-hero-subtitle">
            Register as a vendor to download tender documents from Rail Coach Factory, Kapurthala.
          </p>
        </div>
      </section>

      <div className="vr-breadcrumb">
        <div className="vr-breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="vr-sep">›</span>
          <Link to="/vendor-corner">Vendor and Contractors Corner</Link>
          <span className="vr-sep">›</span>
          <span>Vendor Registration for Tender Downloading</span>
        </div>
      </div>

      <div className="vr-content">
        <div className="vr-form-card">
          <div className="vr-form-header">
            <h2>Vendor Registration</h2>
            <p className="vr-mandatory-note">* Marked Fields are Mandatory</p>
          </div>

          <div className="vr-form-body">
            {/* Login Name */}
            <div className="vr-form-row">
              <label className="vr-label" htmlFor="loginName">Login Name</label>
              <input
                id="loginName"
                name="loginName"
                type="text"
                className="vr-input"
                value={form.loginName}
                onChange={handleChange}
              />
            </div>

            {/* Contact Person */}
            <div className="vr-form-row">
              <label className="vr-label" htmlFor="contactPerson">
                Contact Person <span className="vr-required">*</span>
              </label>
              <input
                id="contactPerson"
                name="contactPerson"
                type="text"
                className="vr-input"
                value={form.contactPerson}
                onChange={handleChange}
              />
            </div>

            {/* Company Name */}
            <div className="vr-form-row">
              <label className="vr-label" htmlFor="companyName">
                Company Name <span className="vr-required">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                className="vr-input"
                value={form.companyName}
                onChange={handleChange}
              />
            </div>

            {/* Postal Address */}
            <div className="vr-form-row">
              <label className="vr-label" htmlFor="postalAddress">
                Postal Address <span className="vr-required">*</span>
              </label>
              <textarea
                id="postalAddress"
                name="postalAddress"
                className="vr-textarea"
                value={form.postalAddress}
                onChange={handleChange}
                rows={3}
              />
            </div>

            {/* Country */}
            <div className="vr-form-row">
              <label className="vr-label" htmlFor="country">
                Country <span className="vr-required">*</span>
              </label>
              <select
                id="country"
                name="country"
                className="vr-select"
                value={form.country}
                onChange={handleChange}
              >
                <option value="">----Select----</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="vr-form-row">
              <label className="vr-label" htmlFor="city">
                City <span className="vr-required">*</span>
              </label>
              <input
                id="city"
                name="city"
                type="text"
                className="vr-input"
                value={form.city}
                onChange={handleChange}
              />
            </div>

            {/* Mobile No */}
            <div className="vr-form-row">
              <label className="vr-label" htmlFor="mobileNo">
                Mobile No. <span className="vr-required">*</span>
              </label>
              <input
                id="mobileNo"
                name="mobileNo"
                type="tel"
                className="vr-input"
                value={form.mobileNo}
                onChange={handleChange}
              />
            </div>

            {/* Phone No */}
            <div className="vr-form-row">
              <label className="vr-label" htmlFor="phoneNo">Phone No.</label>
              <input
                id="phoneNo"
                name="phoneNo"
                type="tel"
                className="vr-input"
                value={form.phoneNo}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="vr-form-row">
              <label className="vr-label" htmlFor="emailId">
                Email Id <span className="vr-required">*</span>
              </label>
              <input
                id="emailId"
                name="emailId"
                type="email"
                className="vr-input"
                value={form.emailId}
                onChange={handleChange}
              />
            </div>

            {/* Terms */}
            <div className="vr-form-row vr-terms-row">
              <label className="vr-label">Term's &amp; Condition's</label>
              <div className="vr-terms-box">
                <textarea
                  className="vr-terms-text"
                  readOnly
                  rows={5}
                  value={termsText}
                />
                <label className="vr-checkbox-label">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={form.terms}
                    onChange={handleChange}
                    className="vr-checkbox"
                  />
                  I agree to the Terms &amp; Conditions
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="vr-form-actions">
              <button className="vr-btn-submit" type="button">Submit</button>
              <button
                className="vr-btn-reset"
                type="button"
                onClick={() =>
                  setForm({
                    loginName: "", contactPerson: "", companyName: "",
                    postalAddress: "", country: "", city: "",
                    mobileNo: "", phoneNo: "", emailId: "", terms: false,
                  })
                }
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VendorRegistration;