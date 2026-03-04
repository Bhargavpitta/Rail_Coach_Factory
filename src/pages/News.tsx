import { useLanguage } from "@/i18n/LanguageContext";
import { Calendar } from "lucide-react";
import "./About.css";

const newsItems = [
  { date: "2026-02-28", title: "RCF Begins Production of Coaches for Export to Bangladesh Railways", excerpt: "Rail Coach Factory, Kapurthala has started the production of 200 meter-gauge coaches for Bangladesh Railways, marking a significant milestone in India's railway export capabilities." },
  { date: "2026-02-25", title: "Employees take Pledge under Nasha Mukt Bharat Abhiyaan", excerpt: "Over 5,000 employees and staff members of RCF took a pledge under the Nasha Mukt Bharat Abhiyaan campaign at the factory premises." },
  { date: "2026-02-22", title: "Rail Coach Factory observes 150 Years of 'Vande Mataram'", excerpt: "A grand cultural event was organized at RCF to commemorate 150 years of the iconic national song 'Vande Mataram'." },
  { date: "2026-02-20", title: "Friendly Matches held to mark 100 Years of Indian Hockey", excerpt: "In celebration of 100 years of Indian Hockey, friendly hockey matches were organized at the RCF Sports Complex." },
  { date: "2026-02-18", title: "77th Republic Day celebrated at Rail Coach Factory", excerpt: "The 77th Republic Day was celebrated with patriotic fervor at Rail Coach Factory, Kapurthala with flag hoisting ceremony." },
  { date: "2026-02-15", title: "Awareness Seminar on EPF & ESI organized at RCF", excerpt: "A comprehensive awareness seminar on Employees' Provident Fund and Employees' State Insurance was conducted for all employees." },
];

const News = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page mx-auto max-w-7xl px-4 md:px-6">
      <h1 className="about-page__title">{t("news.title")}</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {newsItems.map((item) => (
          <article key={item.title} className="rounded-lg bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar size={14} />
              {item.date}
            </div>
            <h3 className="mb-2 text-base font-bold text-primary">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
            <a href="#" className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">
              {t("news.readMore")} →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
