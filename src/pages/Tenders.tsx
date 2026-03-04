import { useLanguage } from "@/i18n/LanguageContext";
import "./About.css";

const sampleTenders = [
  { no: "RCF/2026/M/001", desc: "Supply of Stainless Steel Sheets for LHB Coaches", date: "2026-03-15", status: "open" },
  { no: "RCF/2026/E/045", desc: "Annual Maintenance Contract for CNC Machines", date: "2026-03-12", status: "open" },
  { no: "RCF/2026/M/089", desc: "Procurement of Bogie Components for Vande Bharat", date: "2026-03-10", status: "open" },
  { no: "RCF/2026/S/023", desc: "Supply of Paint and Coating Materials", date: "2026-03-08", status: "open" },
  { no: "RCF/2025/M/412", desc: "Interior Furnishing Materials for AC Coaches", date: "2026-02-28", status: "closed" },
];

const Tenders = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page mx-auto max-w-7xl px-4 md:px-6">
      <h1 className="about-page__title">{t("tenders.title")}</h1>

      <div className="overflow-x-auto rounded-lg bg-card shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b bg-primary text-primary-foreground">
              <th className="p-3 font-semibold">{t("tenders.slNo")}</th>
              <th className="p-3 font-semibold">{t("tenders.tenderNo")}</th>
              <th className="p-3 font-semibold">{t("tenders.description")}</th>
              <th className="p-3 font-semibold">{t("tenders.closingDate")}</th>
              <th className="p-3 font-semibold">{t("tenders.status")}</th>
            </tr>
          </thead>
          <tbody>
            {sampleTenders.map((tender, i) => (
              <tr key={tender.no} className="border-b transition-colors hover:bg-muted/50">
                <td className="p-3">{i + 1}</td>
                <td className="p-3 font-medium text-primary">{tender.no}</td>
                <td className="p-3">{tender.desc}</td>
                <td className="p-3">{tender.date}</td>
                <td className="p-3">
                  <span
                    className={`inline-block rounded px-2 py-0.5 text-xs font-bold ${
                      tender.status === "open"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {t(`tenders.${tender.status}`)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tenders;
