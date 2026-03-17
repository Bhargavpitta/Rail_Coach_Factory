import "./Feedback.css";
import { useState } from "react";

const commentTypes = ["Passenger Queries", "Supplier Queries"];

const Feedback = () => {
  const [form, setForm] = useState({
    name: "", email: "", contact: "", commentType: "", comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fb-page">

      {/* Page Heading */}
      <div>
        <div className="main-title">Feedback</div>
        <div className="title-underline"></div>
      </div>

      {/* Form Table */}
      <div className="fb-table-wrapper">
        <table className="fb-table">
          <thead>
            <tr>
              <th colSpan={2}>
                Please fill out the following information /कृपया निम्न जानकारी भरें
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Name */}
            <tr>
              <td className="fb-td-label">Your Name/ आपका नाम</td>
              <td>
                <input
                  type="text"
                  name="name"
                  className="fb-input"
                  value={form.name}
                  onChange={handleChange}
                />
              </td>
            </tr>

            {/* Email */}
            <tr>
              <td className="fb-td-label">Your E-mail / आपका ईमेल</td>
              <td>
                <input
                  type="email"
                  name="email"
                  className="fb-input"
                  value={form.email}
                  onChange={handleChange}
                />
              </td>
            </tr>

            {/* Contact */}
            <tr>
              <td className="fb-td-label">Contact No. / संपर्क नंबर</td>
              <td>
                <input
                  type="tel"
                  name="contact"
                  className="fb-input"
                  value={form.contact}
                  onChange={handleChange}
                />
              </td>
            </tr>

            {/* Comment Type */}
            <tr>
              <td className="fb-td-label">
                Select type of comment / टिप्पणी प्रकार का चयन करें
              </td>
              <td>
                <select
                  name="commentType"
                  className="fb-select"
                  value={form.commentType}
                  onChange={handleChange}
                >
                  <option value="">Please select/ कृपया चयन कीजिए</option>
                  {commentTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </td>
            </tr>

            {/* Comments */}
            <tr>
              <td className="fb-td-label">Comments / टिप्पणी</td>
              <td>
                <textarea
                  name="comments"
                  className="fb-textarea"
                  rows={5}
                  value={form.comments}
                  onChange={handleChange}
                />
              </td>
            </tr>

            {/* Buttons */}
            <tr>
              <td></td>
              <td className="fb-td-actions">
                <button
                  className="fb-btn-submit"
                  type="button"
                >
                  Submit
                </button>
                <button
                  className="fb-btn-reset"
                  type="button"
                  onClick={() =>
                    setForm({ name: "", email: "", contact: "", commentType: "", comments: "" })
                  }
                >
                  Reset
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Feedback;