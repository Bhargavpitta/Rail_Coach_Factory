import { useLanguage } from "@/i18n/LanguageContext";
import HeroBanner from "@/components/HeroBanner";
import NewsMarquee from "@/components/NewsMarquee";
import QuickLinks from "@/components/QuickLinks";
import { Users } from "lucide-react";
import "./Home.css";

/* ✅ IMPORT LEADER IMAGES */
import AshwiniVaishnaw from "@/assets/leaders/Shri Ashwini Vaishnaw.jpg";
import VSomanna from "@/assets/leaders/V._Somanna_in_2024.jpg";
import RavneetSingh from "@/assets/leaders/ravneet-singh-bittu.jpg";

/* ✅ NEWS DATA */
const newsItems = [
  { date: "2026-02-28", text: "RCF Begins Production of Coaches for Export to Bangladesh Railways" },
  { date: "2026-02-25", text: "Employees take Pledge under Nasha Mukt Bharat Abhiyaan at Rail Coach Factory, Kapurthala" },
  { date: "2026-02-22", text: "Rail Coach Factory observes 150 Years of 'Vande Mataram'" },
  { date: "2026-02-20", text: "Friendly Matches held at Rail Coach Factory to mark 100 Years of Indian Hockey" },
  { date: "2026-02-18", text: "77th Republic Day celebrated at Rail Coach Factory, Kapurthala" },
];

/* ✅ LEADERS DATA */
const leaders = [
  {
    name: "Shri Ashwini Vaishnaw",
    role: "Hon’ble Minister for Railways",
    image: AshwiniVaishnaw,
  },
  {
    name: "Shri V. Somanna",
    role: "Hon’ble Minister of State for Railways",
    image: VSomanna,
  },
  {
    name: "Shri Ravneet Singh Bittu",
    role: "Hon’ble Minister of State for Railways",
    image: RavneetSingh,
  },
];

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home">

      {/* ✅ HERO BANNER */}
      <HeroBanner />

      {/* ✅ NEWS MARQUEE */}
      <NewsMarquee items={newsItems} />

      {/* ✅ QUICK LINKS (BETWEEN BANNER & LEADERSHIP) */}
      <section className="quick-links-wrapper">
        <QuickLinks />
      </section>

      {/* ✅ MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* ✅ LEADERSHIP SECTION */}
        <section className="home-section">
          <h2 className="home-section__title flex items-center gap-2">
            <Users size={20} />
            {t("home.leadershipTitle")}
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {leaders.map((leader) => (
              <div key={leader.name} className="home-leadership__card">

                {/* PHOTO */}
                <div className="home-leadership__photo">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-40 w-40 mx-auto rounded-full object-cover border-4 border-gray-200"
                  />
                </div>

                {/* NAME & ROLE */}
                <div className="home-leadership__name">{leader.name}</div>
                <div className="home-leadership__role">{leader.role}</div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;