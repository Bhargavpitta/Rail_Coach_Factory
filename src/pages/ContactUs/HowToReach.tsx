import "./HowToReach.css";
import mapImage from "../../assets/images/rr.jpg";

const HowToReach = () => {
  return (
    <div className="htr-page">

      {/* Page Heading */}
      <div>
        <div className="main-title">How to Reach RCF</div>
        <div className="title-underline"></div>
      </div>

      {/* Map Section */}
      <div className="htr-map-wrapper">
        <a href="#" className="htr-district-btn">
          PUNJAB<br />DISTRICT MAP
        </a>
        <img
          src={mapImage}
          alt="Punjab District Map showing RCF Kapurthala location"
          className="htr-map-img"
        />
      </div>

      {/* Legend */}
      <div className="htr-legend">
        <div className="htr-legend-item">
          <span className="htr-legend-line htr-legend-blue"></span>
          <span>Amritsar - New Delhi Rail Line</span>
        </div>
        <div className="htr-legend-item">
          <span className="htr-legend-line htr-legend-green"></span>
          <span>Jalandhar - Ahmedabad Rail Line</span>
        </div>
        <div className="htr-legend-item">
          <span className="htr-legend-line htr-legend-red"></span>
          <span>Jalandhar - Firozpur Road</span>
        </div>
      </div>

      {/* Map Credit */}
      <p className="htr-map-credit">
        Copyright © 2016 www.mapsofindia.com
      </p>

      {/* Sub Heading */}
      <h3 className="htr-sub-heading">How to reach RCF</h3>

      {/* By Road */}
      <p className="htr-para">
        <strong>By Road</strong> Jalandhar is situated on NH1 at about 375 Kms. from Delhi.
        Kapurthala is around 19 Kms. from Jalandhar on the Jalandhar-Ferozpur road. RCF is another
        9 Kms. from Kapurthala City towards Firozpur/Sultanpur Lodhi on the Firozpur/Sultanpur Lodhi
        Road. It is situated along the Jalandhar-Firozpur railway line in a place known as Hussainpur
        in the Kapurthala District. Buses/taxis/Autos are quite frequently/easily available between
        Jalandhar and Kapurthala. If one opts for a bus, upon reaching Kapurthala, one can take
        private/public transport to reach RCF. Also, auto rickshaws offers frequent service between
        Kapurthala and RCF on solo and shared basis.
      </p>

      {/* By Train */}
      <p className="htr-para">
        <strong>By Train</strong> Jalandhar falls on the{" "}
        <a href="#" className="htr-link">Delhi-Amritsar</a> as well as Delhi-Jammu Tawi main line
        of Northern Railways. Almost all trains running on these routes have a stoppage either at
        Jalandhar City or Jalandhar Cantt Railway Station (if not both). Kapurthala lies on the
        Jalandhar-Firozpur section. All trains ? passenger or mail - running on the
        Jalandhar-Firozpur section have a stoppage at the RCF Halt. Detraining here, one would find
        oneself opposite to the RCF's Main Gate/Entrance.
      </p>

      {/* By Air */}
      <p className="htr-para">
        <strong>By Air</strong> The nearest Civilian Airport is{" "}
        <a href="#" className="htr-link">Sri Guru Ram Das Ji International Airport</a> at Amritsar
        which is located 11 kms northwest from Amritsar City at Rajasansi and about 85 Kms. from
        Kapurthala. After reaching Amritsar, one can easily reach Kapurthala by Bus or taxis, and
        thereafter to RCF.
      </p>

    </div>
  );
};

export default HowToReach;