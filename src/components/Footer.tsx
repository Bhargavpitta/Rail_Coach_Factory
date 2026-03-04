import { useLanguage } from "@/i18n/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-footer__tricolor" />
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="site-footer__heading">{t("site.title")}</h3>
            <p className="text-sm opacity-70">{t("site.subtitle")}</p>
            <p className="mt-2 text-sm opacity-70">{t("contact.addressText")}</p>
          </div>
          <div>
            <h3 className="site-footer__heading">{t("footer.importantLinks")}</h3>
            <a href="https://indianrailways.gov.in" className="site-footer__link" target="_blank" rel="noreferrer">{t("footer.indianRailways")}</a>
            <a href="https://rb.indianrailways.gov.in" className="site-footer__link" target="_blank" rel="noreferrer">{t("footer.railwayBoard")}</a>
            <a href="https://www.irctc.co.in" className="site-footer__link" target="_blank" rel="noreferrer">{t("footer.irctc")}</a>
            <a href="https://www.india.gov.in" className="site-footer__link" target="_blank" rel="noreferrer">{t("footer.indiaGov")}</a>
          </div>
          <div>
            <h3 className="site-footer__heading">{t("nav.contact")}</h3>
            <p className="site-footer__link">{t("contact.phone")}: 01822-230050</p>
            <p className="site-footer__link">{t("contact.fax")}: 01822-231626</p>
            <p className="site-footer__link">{t("contact.email")}: gm@rcf.railnet.gov.in</p>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>{t("footer.copyright")}</p>
          <p className="mt-1">{t("footer.ministry")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
