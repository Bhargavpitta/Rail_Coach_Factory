import { useLanguage } from "@/i18n/LanguageContext";
import { Wrench, Zap, Package, Calculator, Users, Shield, ClipboardList, HardHat } from "lucide-react";
import "./About.css";

const deptIcons: Record<string, JSX.Element> = {
  mechanical: <Wrench size={28} />,
  electrical: <Zap size={28} />,
  stores: <Package size={28} />,
  accounts: <Calculator size={28} />,
  personnel: <Users size={28} />,
  quality: <Shield size={28} />,
  planning: <ClipboardList size={28} />,
  safety: <HardHat size={28} />,
};

const Departments = () => {
  const { t } = useLanguage();
  const depts = ["mechanical", "electrical", "stores", "accounts", "personnel", "quality", "planning", "safety"];

  return (
    <div className="about-page mx-auto max-w-7xl px-4 md:px-6">
      <h1 className="about-page__title">{t("departments.title")}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {depts.map((dept) => (
          <div
            key={dept}
            className="flex flex-col items-center gap-3 rounded-lg bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              {deptIcons[dept]}
            </div>
            <h3 className="text-sm font-bold text-foreground">{t(`departments.${dept}`)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
