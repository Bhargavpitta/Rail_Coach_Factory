import "./RTI.css";

const rtiLinks = [
  { label: "RTI ACT, 2005", color: "#003580" },
  { label: "RTI GUIDE - 2013", color: "#003580" },
  { label: "LIST OF PUBLIC AUTHORITIES IN RCF", color: "#003580" },
  { label: "INFORMATION UNDER SUO-MOTU DISCLOSURE (AS PER PARA 4(1)(b) OF RTI ACT)", color: "#c0392b" },
  { label: "FAQ ABOUT RTI", color: "#003580" },
];

const RTI = () => (
  <div className="rti-page">
    <div>
        <div className="main-title">Right To Information</div>
        <div className="title-underline"></div>
      </div>

    <h3 className="rti-center-title">RIGHT TO INFORMATION</h3>
    <div className="rti-links">
      {rtiLinks.map((item, i) => (
        <a key={i} href="#" className="rti-link" style={{ borderColor: item.color, color: item.color }}>{item.label}</a>
      ))}
    </div>
  </div>
);

export default RTI;