import { useLanguage } from "@/i18n/LanguageContext";
import "./About.css";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page mx-auto max-w-7xl px-4 md:px-6">
      <h1 className="about-page__title">{t("about.title")}</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="about-page__section-title">{t("about.history")}</h2>
          <p className="about-page__text">{t("about.historyText")}</p>

          <h2 className="about-page__section-title">{t("about.achievements")}</h2>
          <div>
            {["achievement1", "achievement2", "achievement3", "achievement4", "achievement5"].map((key) => (
              <div key={key} className="about-page__achievement">
                {t(`about.${key}`)}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="about-page__card">
            <div className="about-page__card-title">{t("about.mission")}</div>
            <div className="about-page__card-text">{t("about.missionText")}</div>
          </div>
          <div className="about-page__card">
            <div className="about-page__card-title">{t("about.vision")}</div>
            <div className="about-page__card-text">{t("about.visionText")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
