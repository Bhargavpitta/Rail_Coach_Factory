import "./Sitemap.css";

const sitemapData = [
  { section: "About RCF", links: ["Certificates Issued to RCF","Organisation Profile","General Managers","About RCF","Organisation Structure","Annual Reports","Photo Gallery","Holidays"] },
  { section: "Departments & Information", links: ["News & Announcements","All Departments","Quality","Annual Immovable Property Returns","Official Tours of Officers","Technical Information"] },
  { section: "Products", links: ["Materials Purchase","Production","Product Catalogue","Export Enquiries","Production Programme"] },
  { section: "Tender Information", links: ["Tenders","Expression of Interest","View Awarded Tenders","Surplus Items","Store Supply Contracts","Bid Document & IRS Conditions"] },
  { section: "Vendor and Contractors Corner", links: ["Important Notice for Vendors","List of Stores Officer","Product Gallery","Vendor Registration","New Specifications For Comment","M and P Specifications","Vendor Development","Procedure for New / Renewal of Registration","Vendor Directory","Electrical Design Specifications","Vendor Suggestions and Complaints","MSME Position","I Card and Pass Forms"] },
  { section: "Staff Corner", links: ["Act Apprentice","CBT for NG Staff","Recruitments","Employee Seniority List","Pensioners","Railnet Mail Login","Staff Benefit Fund","Quarters Allotment","Holiday Home Booking"] },
  { section: "Contact Us", links: ["Contact Details of Senior Management","Other Officers Contact Numbers","Nodal Officer for e-Gazette","Staff Grievances","Customer Feedback","Vigilance","How to Reach RCF","Right To Information","Citizen Charter","Important Links","Sitemap","Other Railway Sites","Privacy Policy","Terms and Conditions","Help","Disclaimer","Feedback"] },
];

const Sitemap = () => (
  <div className="smap-page">
    <div>
        <div className="main-title">Sitemap</div>
        <div className="title-underline"></div>
      </div>

    <p className="smap-desc">Often the best way to find the information you are looking for is to search for it, or browse through the list of main titles given below on this page.</p>
    <div className="smap-grid">
      {sitemapData.map((group, i) => (
        <div key={i} className="smap-group">
          <h3 className="smap-group-title">{group.section}</h3>
          <ul className="smap-group-list">
            {group.links.map((link, j) => (
              <li key={j}><a href="#" className="smap-link">{link}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Sitemap;