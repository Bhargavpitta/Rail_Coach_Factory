import "./NodalOfficer.css";

const NodalOfficer = () => {
  return (
    <div className="no-page">
        <div>
        <div className="main-title">Nodal Officer for e-Gazette</div>
        <div className="title-underline"></div>
      </div>

      <h3 className="no-sub-title">Nodal Officer for e-Gazette Publications</h3>
      <div className="no-table-wrapper">
        <table className="no-table">
          <tbody>
            <tr><td className="no-td-label">Name</td><td>Sh. Sukhraj Singh</td></tr>
            <tr><td className="no-td-label">Designation</td><td>Dy. CE/SPL</td></tr>
            <tr>
              <td className="no-td-label">Email</td>
              <td><a href="mailto:dyce.spl@rcf.railnet.gov.in" className="no-email">dyce.spl@rcf.railnet.gov.in</a></td>
            </tr>
            <tr><td className="no-td-label">Phone/Mobile</td><td>+91-9779241204</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NodalOfficer;