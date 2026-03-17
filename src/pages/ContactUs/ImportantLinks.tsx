import "./ImportantLinks.css";

const links = [
  { label: "Indian Railways", url: "https://www.indianrail.gov.in" },
  { label: "Indian Railway Catering and Tourism Corporation Limited", url: "https://www.irctc.co.in" },
  { label: "Train Enquiry", url: "https://www.trainenquiry.com" },
];

const ImportantLinks = () => (
  <div className="il-page">
    <div>
        <div className="main-title">Important Links</div>
        <div className="title-underline"></div>
      </div>

    <div className="il-table-wrapper">
      <table className="il-table">
        <tbody>
          {links.map((item, i) => (
            <tr key={i}>
              <td className="il-td-label">{item.label}</td>
              <td><a href={item.url} className="il-link" target="_blank" rel="noreferrer">{item.url.replace("https://","")}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ImportantLinks;