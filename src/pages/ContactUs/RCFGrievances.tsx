import "./RCFGrievances.css";

const RCFGrievances = () => {
  return (
    <div className="rcfg-page">

      {/* Page Heading */}
      <div>
        <div className="main-title">RCF Related Grievances</div>
        <div className="title-underline"></div>
      </div>

      {/* Tree Diagram */}
      <div className="rcfg-tree">

        {/* Root Node */}
        <div className="rcfg-tree-root-row">
          <div className="rcfg-node rcfg-node-root">
            RCF Related<br />Greivances
          </div>
        </div>

        {/* Connector from root to children */}
        <div className="rcfg-connector-root"></div>

        {/* Horizontal line */}
        <div className="rcfg-horizontal-line"></div>

        {/* Three branches */}
        <div className="rcfg-branch-row">
          {/* Left branch connector */}
          <div className="rcfg-branch-connector"></div>
          {/* Center branch connector */}
          <div className="rcfg-branch-connector"></div>
          {/* Right branch connector */}
          <div className="rcfg-branch-connector"></div>
        </div>

        {/* Level 2 nodes */}
        <div className="rcfg-level2-row">
          <div className="rcfg-node rcfg-node-level2">
            General Public<br />Grievances
          </div>
          <div className="rcfg-node rcfg-node-level2">
            Staff Grievances
          </div>
          <div className="rcfg-node rcfg-node-level2">
            Vigilance Contact<br />Information
          </div>
        </div>

        {/* Connectors to level 3 */}
        <div className="rcfg-level2-connectors">
          <div className="rcfg-connector-down"></div>
          <div className="rcfg-connector-down"></div>
          <div className="rcfg-connector-down"></div>
        </div>

        {/* Level 3 detail cards */}
        <div className="rcfg-level3-row">
          <div className="rcfg-node rcfg-node-level3">
            <p>Sr. Public Relations Officer</p>
            <p>Mobile No. 9779241006</p>
            <p>Fax No. 01822-228962</p>
            <a href="#" className="rcfg-link">Click Here</a>
          </div>
          <div className="rcfg-node rcfg-node-level3">
            <p>APO-III</p>
            <p>Mobile No. 9779245110</p>
            <p>Email</p>
            <p>ram.460594@gov.in</p>
            <a href="#" className="rcfg-link">Click Here</a>
          </div>
          <div className="rcfg-node rcfg-node-level3">
            <p>CVO</p>
            <p>Mobile No. 9779241008</p>
            <p>Fax No. 01822-228946</p>
            <a href="#" className="rcfg-link">Click Here</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RCFGrievances;