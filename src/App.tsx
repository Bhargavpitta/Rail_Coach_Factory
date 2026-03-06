import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Departments from "@/pages/Departments";
import News from "@/pages/News";
import NotFound from "@/pages/NotFound";
import Certificates from "./pages/AboutRCF/Certificates";
import OrganisationProfile from "./pages/AboutRCF/OrganisationProfile";
import GeneralManagers from "./pages/AboutRCF/GeneralManagers";
import AboutRCF from "./components/navitems/AboutRCF";
import TenderInfo from "./components/navitems/TenderInfo";
import ContactUs from "./components/navitems/ContactUs";
import Products from "./components/navitems/Products";
import StaffCorner from "./components/navitems/StaffCorner";
import Vendor from "./components/navitems/Vendor";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Header />
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutRCF />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/tenders" element={<TenderInfo />} />
                <Route path="/products" element={<Products />} />
                <Route path="/Staffcorner" element={<StaffCorner />} />
                <Route path="/vendors" element={<Vendor />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/news" element={<News />} />
                
                <Route path="*" element={<NotFound />} />
                <Route path="/about/certificates" element={<Certificates />} />
                <Route path="/organisation-profile" element={<OrganisationProfile />} />
                <Route path="/about/general-managers" element={<GeneralManagers />} />

                
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
