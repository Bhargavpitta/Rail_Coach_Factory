import "./CustomerFeedback.css";

const CustomerFeedback = () => {
  return (
    <>
      {/* Page Heading */}
      <h1 className="main-title">Customer Feedback</h1>
      <div className="title-underline"></div>

      {/* Page Content Wrapper */}
      <div className="cf-content">

        <div className="cf-link-box">
          <a href="#" className="cf-doc-link">
            📋 Customer Satisfaction Form
          </a>
        </div>

        <div className="cf-note-box">
          <p>
            Note: Please fill the above form and send the scan copy at email-id{" "}
            <a href="mailto:dycqm1rcf@gmail.com" className="cf-email">
              dycqm1rcf@gmail.com
            </a>
          </p>
        </div>

      </div>
    </>
  );
};

export default CustomerFeedback;