import "./CitizenCharter.css";

const charterLinks = ["Sitemap","Online RTI Portal","RTI Cell RCF, Kapurthala","How to Reach RCF","Grievance & Complaint Mechanism","Important Links of Railways","Contact Details RCF Officials","Technical Information","Annual Reports"];

const CitizenCharter = () => (
  <div className="cc-page">
    <div>
        <div className="main-title">Citizen Charter</div>
        <div className="title-underline"></div>
      </div>

    <ol className="cc-list">
      {charterLinks.map((item, i) => (
        <li key={i}><a href="#" className="cc-link">{item}</a></li>
      ))}
    </ol>
  </div>
);

export default CitizenCharter;