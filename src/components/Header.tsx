import { useLanguage } from "@/i18n/LanguageContext";
import "./Header.css";

// Import your images here. Adjust the file path depending on where 
// you save 'main_logo.jpg' and 'emblem.jpg' in your project folder.
import mainLogo from "@/assets/logos/main_logo.jpg"; 
import emblem from "@/assets/logos/emblem.jpg"; 

const Header = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-4">
          
          {/* --- Updated Indian Railways Logo --- */}
          <img 
            src={mainLogo} 
            alt="Indian Railways Logo" 
            className="site-header__logo-img h-16 w-16 object-contain" 
          />
          
          <div>
            <h1 className="site-header__title">{t("site.title")}</h1>
            <p className="site-header__subtitle">{t("site.subtitle")}</p>
            <p className="site-header__tagline">{t("site.tagline")}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <button
              className={`site-header__lang-btn ${lang === "en" ? "site-header__lang-btn--active" : ""}`}
              onClick={() => setLang("en")}
            >
              {t("lang.en")}
            </button>
            <button
              className={`site-header__lang-btn ${lang === "hi" ? "site-header__lang-btn--active" : ""}`}
              onClick={() => setLang("hi")}
            >
              {t("lang.hi")}
            </button>
          </div>
          
          {/* --- Updated State Emblem (3 Lions) --- */}
          <img 
            src={emblem} 
            alt="State Emblem of India - Satyameva Jayate" 
            className="site-header__emblem-img h-16 w-auto object-contain" 
          />

        </div>
      </div>
    </header>
  );
};

export default Header;