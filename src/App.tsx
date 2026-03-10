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
import Aboutrcf from "./pages/AboutRCF/AboutRCFPage";
import TenderInfo from "./components/navitems/TenderInfo";
import ContactUs from "./components/navitems/ContactUs";
import Products from "./components/navitems/Products";
import StaffCorner from "./components/navitems/StaffCorner";
import Vendor from "./components/navitems/Vendor";
import OrganisationStructure from "./pages/AboutRCF/OrganisationStructure";
import Environment from "./pages/AboutRCF/Environment";

import Tenders from "./pages/Tenders/Tenders";
import ExpressionOfInterest from "./pages/Tenders/ExpressionOfInterest";
import AwardedTenders from "./pages/Tenders/AwardedTenders";
import SurplusItems from "./pages/Tenders/SurplusItems";
import StoreSupplyContracts from "./pages/Tenders/StoreSupplyContracts";
import BidDocument from "./pages/Tenders/BidDocument";
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
                <Route path="/about/about-rcf" element={<Aboutrcf />} />
                <Route path="/about/certificates" element={<Certificates />} />
                <Route path="/about/organisation-profile" element={<OrganisationProfile />} />
                <Route path="/about/general-managers" element={<GeneralManagers />} />
                <Route path="/about/organisationstructure" element={<OrganisationStructure />} />
                 <Route path="/about/environment" element={<Environment />} />
                

                <Route path="/departments" element={<Departments />} />

                <Route path="/products" element={<Products />} />
                <Route path="/Staffcorner" element={<StaffCorner />} />
                <Route path="/vendors" element={<Vendor />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/news" element={<News />} />

                <Route path="*" element={<NotFound />} />

               {/* <Route path="/tenders" element={<TenderInfo />}>
              <Route path="cpp-tenders" element={<Tenders />} />
              <Route path="expression-of-interest" element={<ExpressionOfInterest />} />
              <Route path="awarded-tenders" element={<AwardedTenders />} />
              <Route path="surplus-items" element={<SurplusItems />} />
              <Route path="store-supply-contracts" element={<StoreSupplyContracts />} />
              <Route path="bid-document" element={<BidDocument />} />
              </Route> */}

              <Route path="/tenders" element={<Tenders />} />
                <Route path="/tenders/eoi" element={<ExpressionOfInterest />} />
                <Route path="/tenders/awarded" element={<AwardedTenders />} />
                <Route path="/tenders/surplus" element={<SurplusItems />} />
                <Route path="/tenders/contracts" element={<StoreSupplyContracts />} />
                <Route path="/tenders/bid-documents" element={<BidDocument />} />
                            
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
