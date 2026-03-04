import "./NewsMarquee.css";

const NewsMarquee = () => {
  return (
    <div className="news-marquee">
      <span className="news-marquee__label">What's New</span>
      <span className="news-marquee__text">
        <a href="#">RCF Begins Production of Coaches for Export to Bangladesh Railways</a>
        <a href="#">Provisional Merit List for Document Verification of Act Apprentice</a>
        <a href="#">RailOne - Official Indian Railways Super App (Android / iOS)</a>
        <a href="#">Empanelment of Advertising Agencies</a>
      </span>
    </div>
  );
};

export default NewsMarquee;
