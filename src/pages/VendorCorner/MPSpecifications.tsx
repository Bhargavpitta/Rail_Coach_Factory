import "./MPSpecifications.css";
import { Link } from "react-router-dom";

const specifications = [
  { sno: 1, subject: "BULK STORAGE SYSTEM FOR LIQUID CO2", uploadedOn: "04/11/2014" },
  { sno: 2, subject: "BATTERY OPERATED HIGH RISE STACKER CUM ORDER PICKER", uploadedOn: "22/04/2015" },
  { sno: 3, subject: "BACK PACK BLOWER", uploadedOn: "29/07/2015" },
  { sno: 4, subject: "DUST EXTRACTION SYSTEM FOR FRP", uploadedOn: "29/07/2015" },
  { sno: 5, subject: "PORTABLE AIR PLASMA MACHINE", uploadedOn: "29/07/2015" },
  { sno: 6, subject: "SINGLE WAGON TEST RIG", uploadedOn: "29/07/2015" },
  { sno: 7, subject: "DUAL BRAKE SYSTEM", uploadedOn: "29/07/2015" },
  { sno: 8, subject: "TRACTOR SHUNTER", uploadedOn: "29/07/2015" },
  { sno: 9, subject: "TESTING TROLLEY FOR LHB COACHES", uploadedOn: "10/09/2015" },
  { sno: 10, subject: "TESTING TROLLEY FOR MEMU DMC COACHES", uploadedOn: "10/09/2015" },
  { sno: 11, subject: "DIESEL OPERATED PLATFORM TRUCK", uploadedOn: "18/11/2015" },
  { sno: 12, subject: "FORK LIFT TRUCK-10 TON", uploadedOn: "18/11/2015" },
  { sno: 13, subject: "FORK LIFT TRUCK - 5 TON", uploadedOn: "23/06/2017" },
  { sno: 14, subject: "AIRLESS SPRAY PAINTING MACHINE", uploadedOn: "11/01/2016" },
  { sno: 15, subject: "TRUCK GARBAGE COMPACTOR", uploadedOn: "15/01/2016" },
  { sno: 16, subject: "DIESEL ROAD MOBILE CRANE", uploadedOn: "15/01/2016" },
  { sno: 17, subject: "RECONDITIONING OF BOGIE FRAME MACHINING CENTER (JOBS)", uploadedOn: "20/01/2016" },
  { sno: 18, subject: "PRE-ASSEMBLY MACHINE FOR FERRULE CRIMPING", uploadedOn: "03/02/2016" },
  { sno: 19, subject: "HYDRAULIC LIFTING/TILTING TROLLEY", uploadedOn: "03/02/2016" },
  { sno: 20, subject: "AIR COMPRESSOR 21 CFM", uploadedOn: "28/03/2016" },
  { sno: 21, subject: "THREE WHEELER LOAD CARRIER", uploadedOn: "05/08/2016" },
  { sno: 22, subject: "WINCH ASSEMBLY", uploadedOn: "05/08/2016" },
  { sno: 23, subject: "HEAVY DUTY PNEUMATIC SANDERS", uploadedOn: "05/08/2016" },
  { sno: 24, subject: "GENERATION DRIVE", uploadedOn: "05/08/2016" },
  { sno: 25, subject: "WALK BEHIND ROTARY LAWN MOWER", uploadedOn: "09/06/2017" },
  { sno: 26, subject: "GANG MOWER", uploadedOn: "09/06/2017" },
  { sno: 27, subject: "TRACTOR TROLLEY", uploadedOn: "09/06/2017" },
  { sno: 28, subject: "BRUSH CUTTER", uploadedOn: "09/06/2017" },
  { sno: 29, subject: "GREEN MOWER", uploadedOn: "09/06/2017" },
  { sno: 30, subject: "ROTARY SCREW TYPE ELECTRICAL DRIVEN AIR COMPRESSOR", uploadedOn: "09/06/2017" },
  { sno: 31, subject: "BACKPACK BLOWER", uploadedOn: "09/06/2017" },
  { sno: 32, subject: "TRACTOR", uploadedOn: "09/06/2017" },
  { sno: 33, subject: "DIGITAL MELTING POINT APPARATUS", uploadedOn: "09/06/2017" },
  { sno: 34, subject: "MICRO HARDNESS TESTER", uploadedOn: "09/06/2017" },
  { sno: 35, subject: "XRF ANALYZER", uploadedOn: "09/06/2017" },
  { sno: 36, subject: "ONE TON DIGITAL TENSILE TESTING MACHINE", uploadedOn: "09/06/2017" },
  { sno: 37, subject: "AIR COOLED AIR COMPRESSOR", uploadedOn: "09/06/2017" },
  { sno: 38, subject: "CHILLER UNIT 4 TON", uploadedOn: "09/06/2017" },
  { sno: 39, subject: "WATER COOLER OF STORAGE CAPACITY 40 LITRES", uploadedOn: "23/06/2017" },
  { sno: 40, subject: "HYDRAULIC PRESS 200 TON", uploadedOn: "23/06/2017" },
  { sno: 41, subject: "WATER COOLER OF STORAGE CAPACITY 150 LITRES", uploadedOn: "23/06/2017" },
  { sno: 42, subject: "FORK LIFT TRUCK-3 TON", uploadedOn: "23/06/2017" },
  { sno: 43, subject: "WINDOW AIR CONDITIONER- 2 TON", uploadedOn: "23/06/2017" },
  { sno: 44, subject: "UNDERGROUND CABLE FAULT LOCATOR", uploadedOn: "14/07/2017" },
  { sno: 45, subject: "DRILLING MACHINE 6MM", uploadedOn: "14/07/2017" },
  { sno: 46, subject: "DRILLING MACHINE 10MM", uploadedOn: "14/07/2017" },
  { sno: 47, subject: "BOGIE ROLLERS PRESSING FIXTURE", uploadedOn: "10/04/2018" },
  { sno: 48, subject: "GROOVE SAW", uploadedOn: "10/04/2018" },
  { sno: 49, subject: "PORTABLE 40 KVA & 15 KVA WELDING ENTRANCE & AC DISTRIBUTION BOARD (PANEL)", uploadedOn: "10/04/2018" },
  { sno: 50, subject: "ELECTRONIC WEIGHBRIDGE CAP-150 TON", uploadedOn: "10/04/2018" },
  { sno: 51, subject: "CROSS TYPE EXHAUST BLOWER WITH CHIMNEY", uploadedOn: "10/04/2018" },
  { sno: 52, subject: "HYDRAULIC HAND OPERATED CRIMPING TOOLS", uploadedOn: "10/04/2018" },
  { sno: 53, subject: "ARC WELDING MACHINE", uploadedOn: "10/04/2018" },
  { sno: 54, subject: "PORTABLE AIR PLASMA CUTTING MACHINE", uploadedOn: "10/04/2018" },
  { sno: 55, subject: "TESTING JIG FOR CENTRAL CONTROL SYSTEM", uploadedOn: "10/04/2018" },
  { sno: 56, subject: "SWAN-4", uploadedOn: "17/06/2021" },
];

const MPSpecifications = () => {
  return (
    <main className="mp-main">
        {/* Page Heading */}
      <div>
        <div className="main-title">M &amp; P Specifications</div>
        <div className="title-underline"></div>
      </div>



      <div className="mp-content">
        <section className="mp-section">
          <div className="mp-section-top">
          </div>

          <div className="mp-table-wrapper">
            <table className="mp-table">
              <thead>
                <tr>
                  <th className="mp-th-sno">SNO.</th>
                  <th>Subject</th>
                  <th className="mp-th-date">Uploaded On</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((row) => (
                  <tr key={row.sno} className="mp-row">
                    <td className="mp-td-sno">{row.sno}</td>
                    <td>
                      <a href="#" className="mp-subject-link">{row.subject}</a>
                    </td>
                    <td className="mp-td-date">{row.uploadedOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MPSpecifications;