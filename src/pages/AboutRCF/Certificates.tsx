import { Link } from "react-router-dom";
import "./Certificates.css";

const Certificates = () => {
  return (
    <div className="certificates-page">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> / 
        <Link to="/about"> About RCF</Link> / 
        <span> Certificates Issued to RCF</span>
      </div>

      <div className="certificates-layout">

        {/* Sidebar */}
        <aside className="about-sidebar">
          <ul>
            <li className="active">Certificates Issued to RCF</li>
            <li><Link to="/organisation-profile">Organisation Profile</Link></li>
            <li><Link to="/general-managers">General Managers</Link></li>
            <li><Link to="/about-rcf">About RCF</Link></li>
            <li><Link to="/organisation-structure">Organisation Structure</Link></li>
            <li><Link to="/environment-management">Environment Management at RCF</Link></li>
            <li><Link to="/annual-report">Annual Report</Link></li>
            <li><Link to="/photo-gallery">Photo Gallery</Link></li>
            <li><Link to="/resident-need">Resident’s Need</Link></li>
            <li><Link to="/holidays">Holidays</Link></li>
            <li><Link to="/staff-welfare">Staff Welfare Amenities</Link></li>
            <li><Link to="/rajbhasha">Rajbhasha</Link></li>
            <li><Link to="/statistics">Important Statistics & Achievements</Link></li>
            <li><Link to="/portal-policies">Portal Policies</Link></li>
            <li><Link to="/RCF Golf Course">RCF Golf Course</Link></li>

          </ul>
        </aside>

       <main className="certificates-content">

<h2 className="page-title">Certificates Issued to RCF</h2>

<h1 className="main-heading">
CERTIFICATIONS AWARDED TO RCF KAPURTHALA
</h1>

<table className="certificate-table">

<thead>
<tr>
<th>S.No.</th>
<th>Title</th>
<th>Click to View</th>
</tr>
</thead>

<tbody>

<tr>
<td>1</td>
<td>
<b>IRIS Certificate</b> – RCF has successfully obtained IRIS Certification.
</td>
<td className="cert-images">
<img src="/certificates/IRIS01.jpg" alt="IRIS Certificate"/>
<img src="/certificates/IRIS02.jpg" alt="IRIS Certificate"/>
</td>
</tr>

<tr>
<td>2</td>
<td>
Integrated Management System – RCF is the first unit in Indian Railways
to obtain certification for Integrated Management System covering
<b>ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018</b>.
</td>
<td className="cert-images">
<img src="/certificates/ISO1.jpg" alt="ISO Certificate"/>
<img src="/certificates/ISO2.jpg" alt="ISO Certificate"/>
<img src="/certificates/ISO3.jpg" alt="ISO Certificate"/>
</td>
</tr>

<tr>
<td>3</td>
<td>
<b>ISO 50001:2018</b> – RCF has successfully obtained Energy Management System certification.
</td>
<td className="cert-images">
<img src="/certificates/ISO4.jpg" alt="Energy Certificate"/>
</td>
</tr>
<tr>
<td>4</td>
<td>
‘5S’ Certification (A Japanese concept for improving Work Place Efficiency) - RCF is the first organization in Indian Railways to obtain this certification.
</td>
<td className="cert-images">
<img src="/certificates/energy.jpg" alt="Energy Certificate"/>
</td>
</tr>

</tbody>

</table>

</main>

      </div>

    </div>
  );
};

export default Certificates;