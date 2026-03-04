import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin, Phone, Mail, Train, Car, Plane } from "lucide-react";
import "./About.css";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page mx-auto max-w-7xl px-4 md:px-6">
      <h1 className="about-page__title">{t("contact.title")}</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="mb-6 rounded-lg bg-card p-5 shadow-sm">
            <h2 className="about-page__section-title flex items-center gap-2" style={{ marginTop: 0 }}>
              <MapPin size={20} className="text-accent" />
              {t("contact.address")}
            </h2>
            <p className="about-page__text">{t("contact.addressText")}</p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                01822-230050
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                gm@rcf.railnet.gov.in
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-card p-5 shadow-sm">
            <h2 className="about-page__section-title" style={{ marginTop: 0 }}>{t("contact.seniorOfficers")}</h2>
            <div className="space-y-3 text-sm">
              {[
                { name: "General Manager", phone: "01822-230050" },
                { name: "Principal Chief Mechanical Engineer", phone: "01822-230051" },
                { name: "Chief Vigilance Officer", phone: "01822-230052" },
              ].map((officer) => (
                <div key={officer.name} className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium text-foreground">{officer.name}</span>
                  <span className="text-muted-foreground">{officer.phone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="about-page__section-title" style={{ marginTop: 0 }}>{t("contact.reachUs")}</h2>
          <div className="space-y-4">
            {[
              { icon: <Train size={20} />, title: t("contact.byRail"), text: t("contact.byRailText") },
              { icon: <Car size={20} />, title: t("contact.byRoad"), text: t("contact.byRoadText") },
              { icon: <Plane size={20} />, title: t("contact.byAir"), text: t("contact.byAirText") },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg bg-card p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
