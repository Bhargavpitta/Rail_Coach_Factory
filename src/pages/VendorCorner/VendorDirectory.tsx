import "./VendorDirectory.css";
import { Link } from "react-router-dom";

const subPages = [
  {
    title: "Vendor Directory Mechanical",
    description: "Access the mechanical vendor directory on U-VAM Portal. Includes first article inspection policies.",
    icon: "⚙️",
    path: "/vendor-corner/vendor-directory/mechanical",
  },
  {
    title: "Vendor Directory Electrical",
    description: "Access the electrical vendor directory available on UVAM Portal under the IREPS website.",
    icon: "⚡",
    path: "/vendor-corner/vendor-directory/electrical",
  },
  {
    title: "List of Registered Vendors",
    description: "View the list of registered vendors for trade groups with validity as on latest date.",
    icon: "📋",
    path: "/vendor-corner/vendor-directory/registered-vendors",
  },
  {
    title: "STR and ISP-04 for Mech. Item",
    description: "Schedule of Technical Requirements and infrastructure specification documents for mechanical items.",
    icon: "📑",
    path: "/vendor-corner/vendor-directory/str-isp04",
  },
  {
    title: "MDTS Specification",
    description: "Master Drawing and Technical Specification documents for coach manufacturing.",
    icon: "📐",
    path: "/vendor-corner/vendor-directory/mdts",
  },
];

const VendorDirectory = () => {
  return (
    <main className="vd2-main">
      <section className="vd2-hero">
        <div className="vd2-hero-inner">
          <div className="vd2-hero-badge">Vendor Corner</div>
          <h1 className="vd2-hero-title">Vendor Directory</h1>
          <p className="vd2-hero-subtitle">
            Access mechanical and electrical vendor directories, registered vendor lists, and technical specifications.
          </p>
        </div>
      </section>

      <div className="vd2-breadcrumb">
        <div className="vd2-breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="vd2-sep">›</span>
          <Link to="/vendor-corner">Vendor and Contractors Corner</Link>
          <span className="vd2-sep">›</span>
          <span>Vendor Directory</span>
        </div>
      </div>

      <div className="vd2-content">
        <section className="vd2-section">
          <h2 className="vd2-section-title">Vendor Directory</h2>
          <div className="vd2-cards-grid">
            {subPages.map((item, i) => (
              <Link to={item.path} className="vd2-card" key={i}>
                <div className="vd2-card-icon">{item.icon}</div>
                <div className="vd2-card-body">
                  <h3 className="vd2-card-title">{item.title}</h3>
                  <p className="vd2-card-desc">{item.description}</p>
                </div>
                <span className="vd2-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default VendorDirectory;