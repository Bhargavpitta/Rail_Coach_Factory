
// src/pages/Tenders/TendersLayout.tsx

import { NavLink, Outlet } from "react-router-dom";
import "./Tenders.css";

const TendersLayout = () => {
  return (
    <div className="tenders-page">
      <div className="tenders-container tenders-layout">

        {/* Sidebar */}
        <aside className="tenders-sidebar">
          <div className="sidebar-section">

            <h3 className="sidebar-brand">Tender Information</h3>

            <ul className="sidebar-menu">

              <li>
                <NavLink
                  to="/tenders"
                  end
                  className={({ isActive }) =>
                    isActive ? "sidebar-item active" : "sidebar-item"
                  }
                >
                  Tenders
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tenders/eoi"
                  className={({ isActive }) =>
                    isActive ? "sidebar-item active" : "sidebar-item"
                  }
                >
                  Expression of Interest
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tenders/awarded"
                  className={({ isActive }) =>
                    isActive ? "sidebar-item active" : "sidebar-item"
                  }
                >
                  View Awarded Tenders
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tenders/surplus"
                  className={({ isActive }) =>
                    isActive ? "sidebar-item active" : "sidebar-item"
                  }
                >
                  Surplus Items
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tenders/contracts"
                  className={({ isActive }) =>
                    isActive ? "sidebar-item active" : "sidebar-item"
                  }
                >
                  Store Supply Contracts
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tenders/bid-documents"
                  className={({ isActive }) =>
                    isActive ? "sidebar-item active" : "sidebar-item"
                  }
                >
                  Bid Document & IRS Conditions
                </NavLink>
              </li>

            </ul>

          </div>
        </aside>

        {/* Main content area */}
        <main className="tenders-main">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default TendersLayout;

