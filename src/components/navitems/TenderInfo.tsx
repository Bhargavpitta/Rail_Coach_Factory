import React from 'react'

// function TenderInfo() {
//   return (
//     <div>
//       TenderInfo
//     </div>
//   )
// }

import { Outlet } from "react-router-dom";

const TenderInfo = () => {
  return (
    <div>
      {/* Your Tender menu UI */}

      <Outlet />
    </div>
  );
};

export default TenderInfo;

