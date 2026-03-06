import { useLanguage } from "@/i18n/LanguageContext";
import HeroBanner from "@/components/HeroBanner";
import NewsMarquee from "@/components/NewsMarquee";
import QuickLinks from "@/components/QuickLinks";
import { Users, Newspaper, Award } from "lucide-react";
import { Link } from "react-router-dom"; // Added for navigation
import "./Home.css";

/* ✅ IMPORT LEADER IMAGES */
import AshwiniVaishnaw from "@/assets/leaders/Shri Ashwini Vaishnaw.jpg";
import VSomanna from "@/assets/leaders/V._Somanna_in_2024.jpg";
import RavneetSingh from "@/assets/leaders/ravneet-singh-bittu.jpg";
import AjayNandan from "@/assets/leaders/image.png"; // Add your GM photo here

/* ✅ NEWS DATA */
const newsItems = [
  { date: "28 Feb 2026", text: "RCF Begins Production of Coaches for Export to Bangladesh Railways" },
  { date: "25 Feb 2026", text: "Employees take Pledge under Nasha Mukt Bharat Abhiyaan" },
  { date: "22 Feb 2026", text: "Rail Coach Factory observes 150 Years of 'Vande Mataram'" },
  { date: "20 Feb 2026", text: "Friendly Matches held to mark 100 Years of Indian Hockey" },
  { date: "18 Feb 2026", text: "77th Republic Day celebrated at RCF, Kapurthala" },
];

const leaders = [
  { name: "Shri Ashwini Vaishnaw", role: "Hon’ble Minister for Railways", image: AshwiniVaishnaw },
  { name: "Shri V. Somanna", role: "Hon’ble Minister of State for Railways", image: VSomanna },
  { name: "Shri Ravneet Singh Bittu", role: "Hon’ble Minister of State for Railways", image: RavneetSingh },
];

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home">
      <HeroBanner />
      {/* <NewsMarquee items={newsItems} /> */}

      <section className="quick-links-wrapper">
        <QuickLinks />
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* ✅ TWO-COLUMN LAYOUT: MAIN CONTENT (LEFT) | NEWS SIDEBAR (RIGHT) */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          
          {/* --- LEFT SIDE: LEADERSHIP --- */}
          <div className="lg:w-2/3">
            <section className="home-section">
              <h2 className="home-section__title flex items-center gap-2">
                <Users size={20} />
                {t("home.leadershipTitle")}
              </h2>

              {/* Top Ministers Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-10">
                {leaders.map((leader) => (
                  <div key={leader.name} className="home-leadership__card">
                    <div className="home-leadership__photo">
                      <img src={leader.image} alt={leader.name} className="leader-img" />
                    </div>
                    <div className="home-leadership__name">{leader.name}</div>
                    <div className="home-leadership__role">{leader.role}</div>
                  </div>
                ))}
              </div>

              {/* ✅ ADDED: GENERAL MANAGER SECTION (DOWNSIDE) */}
              <div className="gm-featured-section border-t pt-8 mt-4">
                <div className="flex flex-col md:flex-row items-center gap-6 bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
                   <img 
                    src={AjayNandan} 
                    alt="Sh. Ajay Nandan" 
                    className="w-40 h-52 object-cover border-4 border-white shadow-md rounded"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">Sh. Ajay Nandan</h3>
                    <p className="text-red-700 font-bold uppercase text-sm tracking-wide">General Manager, RCF</p>
                    <p className="text-gray-600 mt-2 text-sm">Leading Rail Coach Factory, Kapurthala towards excellence in production and technological innovation.</p>
                    {/* <Link to="/about/general-managers" className="inline-block mt-4 text-blue-700 font-semibold hover:underline text-sm">
                      View All General Managers →
                    </Link> */}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* --- RIGHT SIDE: NEWS SIDEBAR --- */}
          <aside className="lg:w-1/3">
  <div className="sidebar-news border rounded-lg overflow-hidden bg-white shadow-sm">

    <h2 className="bg-blue-900 text-white px-4 py-3 flex items-center gap-2 font-semibold text-sm">
      <Newspaper size={18} />
      Latest Announcements
    </h2>

    <div className="p-4 space-y-3">

      {newsItems.slice(0,2).map((news, index) => (
        <div
          key={index}
          className="news-card-small border rounded-md p-3 hover:shadow-sm transition"
        >
          <span className="text-xs font-semibold text-blue-700">
            {news.date}
          </span>

          <p className="text-sm text-gray-800 mt-1 leading-snug">
            {news.text}
          </p>
        </div>
      ))}

      <Link
        to="/news"
        className="block text-center text-sm font-semibold text-red-700 mt-3 hover:underline"
      >
        View All News →
      </Link>

    </div>
  </div>
</aside>

        </div>
      </div>
    </div>
  );
};

export default Home;