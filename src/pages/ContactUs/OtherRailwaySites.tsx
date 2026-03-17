import "./OtherRailwaySites.css";

const tableData = [
  {
    zonal: "Central Railway",
    production: "Chittaranjan Loco Works",
    others1: "Central Organisation for Railway Electrification.",
    others2: "IT Projects under CAO/FOIS",
  },
  {
    zonal: "East Central Railway",
    production: "Diesel Locomotive Works",
    others1: "Darjeeling Himalayan Railways.",
    others2: "Indian Railway Welfare Organisation",
  },
  {
    zonal: "East Coast Railway",
    production: "Diesel-Loco Modernisation Works",
    others1: "Delhi Metro Rail Corporation.",
    others2: "National Rail Museum sites",
  },
  {
    zonal: "Eastern Railway",
    production: "Integral Coach Factory",
    others1: "Dedicated Freight Corridor Corporation of India Limited (DFCC)",
    others2: "Palace on Wheels (RTDC Website)",
  },
  {
    zonal: "North Central",
    production: "Rail Coach Factory",
    others1: "Federation of Railway Officers Associations.",
    others2: "Railway Claims Tribunal",
  },
  {
    zonal: "North Eastern Railway",
    production: "Rail Wheel Factory",
    others1: "Indian Railway Accounts Service Association.",
    others2: "Rail Land Development Authority",
  },
  {
    zonal: "North Western",
    production: "CORPORATION SITES",
    others1: "Indian Railway Central Organisation for Telecom.",
    others2: "Railway Staff College, Baroda",
    isCorporation: true,
  },
  {
    zonal: "Northeast Frontier Railways",
    production: "Central Organisation for Modernisation of Workshops",
    others1: "Indian Railways Institute of Electrical Engineering",
    others2: "Rail Vikas Nigam Ltd.",
  },
  {
    zonal: "Northern Railway",
    production: "Centre for Railway Information System",
    others1: "Indian Railways Institute of Mechanical and Electrical Engineering",
    others2: "Research Design and Standards Organisation",
  },
  {
    zonal: "South Central Railway",
    production: "Container Corporation of India Ltd.",
    others1: "Indian Railways Institute of Signal Engineering and Telecommunications",
    others2: "",
  },
  {
    zonal: "South East Central Railway",
    production: "Indian Railway Catering and Tourism Corporation Ltd.",
    others1: "Indian Railways Service of Mechanical Engineers",
    others2: "",
  },
  {
    zonal: "South Eastern Railway",
    production: "Indian Railway Finance Corporation",
    others1: "Indian Railway Traffic Service Association",
    others2: "",
  },
  {
    zonal: "South Western",
    production: "IRCON International Ltd.",
    others1: "Institute of Rail transport",
    others2: "",
  },
  {
    zonal: "Southern Railway",
    production: "Pipavav Railway Corporation Limited",
    others1: "Indian Railways Institute of Transport Management",
    others2: "",
  },
  {
    zonal: "West Central",
    production: "Mumbai Railway Vikas Corporation",
    others1: "Kutch Railway Company Ltd.",
    others2: "",
  },
  {
    zonal: "Western Railway",
    production: "RAILTEL Corporation of India Ltd.",
    others1: "",
    others2: "",
  },
  {
    zonal: "Metro Railway Kolkata",
    production: "Konkan Railway Corporation's. RITES Ltd.",
    others1: "",
    others2: "",
  },
];

const OtherRailwaySites = () => {
  return (
    <div className="ors-page">

      {/* Page Heading */}
      <div>
        <div className="main-title">Other Railway Sites</div>
        <div className="title-underline"></div>
      </div>

      <div className="ors-table-wrapper">
        <table className="ors-table">
          <thead>
            <tr>
              <th className="ors-th-blue">ZONAL RAILWAYS</th>
              <th className="ors-th-blue">PRODUCTION UNITS</th>
              <th className="ors-th-blue">OTHERS</th>
              <th className="ors-th-blue">OTHERS</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i}>
                <td>
                  {row.zonal ? (
                    <a href="#" className="ors-link">{row.zonal}</a>
                  ) : ""}
                </td>
                <td className={row.isCorporation ? "ors-td-corp" : ""}>
                  {row.isCorporation ? (
                    <span className="ors-corp-label">{row.production}</span>
                  ) : row.production ? (
                    <a href="#" className="ors-link">{row.production}</a>
                  ) : ""}
                </td>
                <td>
                  {row.others1 ? (
                    <a href="#" className="ors-link">{row.others1}</a>
                  ) : ""}
                </td>
                <td>
                  {row.others2 ? (
                    <a href="#" className="ors-link">{row.others2}</a>
                  ) : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OtherRailwaySites;