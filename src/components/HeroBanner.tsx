import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import "./HeroBanner.css";

/* ✅ IMPORT ALL BANNERS */
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
import banner4 from "@/assets/banner4.jpg";
import banner5 from "@/assets/banner6.jpeg";

const banners = [banner1, banner2, banner3, banner4, banner5];

const HeroBanner = () => {
  const { t } = useLanguage();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setFade(false);

      // change image after fade-out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
        setFade(true); // fade in
      }, 800); // must be less than CSS transition (1.5s)
    }, 3000); // ✅ 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-banner">
      <img
        src={banners[currentIndex]}
        alt="Rail Coach Factory banner"
        className="hero-banner__bg"
        style={{ opacity: fade ? 1 : 0 }}
      />

      <div className="hero-banner__overlay" />

      <div className="hero-banner__content mx-auto w-full max-w-7xl px-4 md:px-6">
        {/* <h2 className="hero-banner__title">{t("home.heroTitle")}</h2> */}
        {/* <p className="hero-banner__subtitle">{t("home.heroSubtitle")}</p> */}
        {/* <Link to="/about" className="hero-banner__cta">
          {t("home.heroCta")}
        </Link> */}
      </div>
    </section>
  );
};

export default HeroBanner;