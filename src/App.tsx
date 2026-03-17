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
import Products from "./components/navitems/Products";
import StaffCorner from "./components/navitems/StaffCorner";
import Vendor from "./components/navitems/Vendor";
import OrganisationStructure from "./pages/AboutRCF/OrganisationStructure";
import Environment from "./pages/AboutRCF/Environment";

import TendersLayout from "./pages/Tenders/TendersLayout";
import Tenders from "./pages/Tenders/Tenders";
import ExpressionOfInterest from "./pages/Tenders/ExpressionOfInterest";
import AwardedTenders from "./pages/Tenders/AwardedTenders";
import SurplusItems from "./pages/Tenders/SurplusItems";
import StoreSupplyContracts from "./pages/Tenders/StoreSupplyContracts";
import BidDocument from "./pages/Tenders/BidDocument";


import AnnualReports from "./pages/AboutRCF/AnnualReports";
import PhotoGallery from "./pages/AboutRCF/PhotoGallery";
import Holidays from "./pages/AboutRCF/Holidays";
import ResidentsNeed from "./pages/AboutRCF/ResidentsNeed";
import StaffWelfare from "./pages/AboutRCF/StaffWelfare";
import Rajbhasha from "./pages/AboutRCF/Rajbhasha";
import PortalPolicies from "./pages/AboutRCF/PortalPolicies";
import ImportantStats from "./pages/AboutRCF/ImportantStats";

import VendorCorner from "./pages/VendorCorner/VendorCorner";
import ImportantNotice from "./pages/VendorCorner/ImportantNotice";
import StoresOfficer from "./pages/VendorCorner/StoresOfficer";
import ProductGallery from "./pages/VendorCorner/ProductGallery";
import VendorRegistration from "./pages/VendorCorner/VendorRegistration";
import VendorLogin from "./pages/VendorCorner/VendorLogin";
import NewSpecifications from "./pages/VendorCorner/NewSpecifications";
import MPSpecifications from "./pages/VendorCorner/MPSpecifications";
import VendorDevelopment from "./pages/VendorCorner/VendorDevelopment";
import RegistrationProcedure from "./pages/VendorCorner/RegistrationProcedure";
import ElectricalDesign from "./pages/VendorCorner/ElectricalDesign";
import ICardPassForms from "./pages/VendorCorner/ICardPassForms";
import PLUnification from "./pages/VendorCorner/PLUnification";
import VendorApproval from "./pages/VendorCorner/VendorApproval";
import VendorDirectory from "./pages/VendorCorner/VendorDirectory";
import SuggestionsComplaints from "./pages/VendorCorner/SuggestionsComplaints";
import MSMEPosition from "./pages/VendorCorner/MSMEPosition";
import SimilarItemsTender from "./pages/VendorCorner/SimilarItemsTender";
import VendorDirMechanical from "./pages/VendorCorner/VendorDirMechanical";
import VendorDirElectrical from "./pages/VendorCorner/VendorDirElectrical";
import RegisteredVendors from "./pages/VendorCorner/RegisteredVendors";
import STRAndISP04 from "./pages/VendorCorner/STRAndISP04";
import MDTSSpecification from "./pages/VendorCorner/MDTSSpecification";

import ContactUs from "./pages/ContactUs/ContactUs";
import mapImage from "../../assets/images/rr.jpg";
import crisbanner from "../../assets/images/crisbanner.gif";
import SeniorManagement from "./pages/ContactUs/SeniorManagement";
import OtherOfficers from "./pages/ContactUs/OtherOfficers";
import StaffGrievances from "./pages/ContactUs/StaffGrievances";
import NodalOfficer from "./pages/ContactUs/NodalOfficer";
import CustomerFeedback from "./pages/ContactUs/CustomerFeedback";
import Vigilance from "./pages/ContactUs/Vigilance";
import HowToReach from "./pages/ContactUs/HowToReach";
import RTI from "./pages/ContactUs/RTI";
import RTIAct from "./pages/ContactUs/RTIAct";
import RCFGrievances from "./pages/ContactUs/RCFGrievances";
import CitizenCharter from "./pages/ContactUs/CitizenCharter";
import ImportantLinks from "./pages/ContactUs/ImportantLinks";
import Sitemap from "./pages/ContactUs/Sitemap";
import OtherRailwaySites from "./pages/ContactUs/OtherRailwaySites";
import PrivacyPolicy from "./pages/ContactUs/PrivacyPolicy";
import TermsConditions from "./pages/ContactUs/TermsConditions";
import Help from "./pages/ContactUs/Help";
import Disclaimer from "./pages/ContactUs/Disclaimer";
import Feedback from "./pages/ContactUs/Feedback";

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
                {/* Top-level routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutRCF />} />
                <Route path="/about/about-rcf" element={<Aboutrcf />} />
                <Route path="/about/certificates" element={<Certificates />} />
                <Route path="/about/organisation-profile" element={<OrganisationProfile />} />
                <Route path="/about/general-managers" element={<GeneralManagers />} />
                <Route path="/about/organisationstructure" element={<OrganisationStructure />} />
                <Route path="/about/environment" element={<Environment />} />
                <Route path="/about/annualreports" element={<AnnualReports />} />
                <Route path="/about/gallery" element={<PhotoGallery />} />
                <Route path="/about/holidays" element={<Holidays />} />
                <Route path="/about/residentsneed" element={<ResidentsNeed />} />
                <Route path="/about/staff-welfare" element={<StaffWelfare />} />
                <Route path="/about/rajbhasha" element={<Rajbhasha />} />
                <Route path="/about/policies" element={<PortalPolicies />} />
                <Route path="/about/statistics" element={<ImportantStats />} />

                <Route path="/departments" element={<Departments />} />
                <Route path="/products" element={<Products />} />
                <Route path="/Staffcorner" element={<StaffCorner />} />
                <Route path="/vendors" element={<Vendor />} />
                <Route path="/news" element={<News />} />

              {/* Tenders */}
                <Route path="/tenders" element={<TendersLayout />}>

                  <Route index element={<Tenders />} />
                  <Route path="eoi" element={<ExpressionOfInterest />} />
                  <Route path="awarded" element={<AwardedTenders />} />
                  <Route path="surplus" element={<SurplusItems />} />
                  <Route path="contracts" element={<StoreSupplyContracts />} />
                  <Route path="bid-documents" element={<BidDocument />} />

                </Route>
                {/* Vendor Corner Nested Routes */}
                <Route path="/vendor-corner" element={<VendorCorner />}>
                  {/* Default Vendor Corner page */}
                  <Route
                    index
                    element={
                      <div>
                        <h2>Welcome to Vendor Corner</h2>
                        <p>
                          This section provides information related to vendor registration, specifications and vendor services.
                        </p>
                      </div>
                    }
                  />
                  <Route path="important-notice" element={<ImportantNotice />} />
                  <Route path="stores-officer" element={<StoresOfficer />} />
                  <Route path="product-gallery" element={<ProductGallery />} />
                  <Route path="vendor-registration" element={<VendorRegistration />} />
                  <Route path="vendor-login" element={<VendorLogin />} />
                  <Route path="new-specifications" element={<NewSpecifications />} />
                  <Route path="mp-specifications" element={<MPSpecifications />} />
                  <Route path="vendor-development" element={<VendorDevelopment />} />
                  <Route path="registration-procedure" element={<RegistrationProcedure />} />
                  <Route path="pl-unification" element={<PLUnification />} />
                  <Route path="vendor-directory" element={<VendorDirectory />} />
                  <Route path="vendor-directory/mechanical" element={<VendorDirMechanical />} />
                  <Route path="vendor-directory/electrical" element={<VendorDirElectrical />} />
                  <Route path="vendor-directory/registered-vendors" element={<RegisteredVendors />} />
                  <Route path="vendor-directory/str-isp04" element={<STRAndISP04 />} />
                  <Route path="vendor-directory/mdts" element={<MDTSSpecification />} />
                  <Route path="electrical-design" element={<ElectricalDesign />} />
                  <Route path="suggestions-complaints" element={<SuggestionsComplaints />} />
                  <Route path="msme-position" element={<MSMEPosition />} />
                  <Route path="icard-pass-forms" element={<ICardPassForms />} />
                  <Route path="similar-items-tender" element={<SimilarItemsTender />} />
                </Route>

              <Route path="/contact" element={<ContactUs />}>
                <Route path="senior-management" element={<SeniorManagement />} />
                <Route path="other-officers" element={<OtherOfficers />} />
                <Route path="staff-grievances" element={<StaffGrievances />} />
                <Route path="nodal-officer" element={<NodalOfficer />} />
                <Route path="customer-feedback" element={<CustomerFeedback />} />
                <Route path="vigilance" element={<Vigilance />} />
                <Route path="how-to-reach" element={<HowToReach />} />
                <Route path="rti" element={<RTI />} />
                <Route path="rti/rti-act" element={<RTIAct />} />
                <Route path="rti/rcf-grievances" element={<RCFGrievances />} />

                <Route path="citizen-charter" element={<CitizenCharter />} />
                <Route path="important-links" element={<ImportantLinks />} />
                <Route path="sitemap" element={<Sitemap />} />
                <Route path="other-railway-sites" element={<OtherRailwaySites />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="terms-conditions" element={<TermsConditions />} />
                <Route path="help" element={<Help />} />
                <Route path="disclaimer" element={<Disclaimer />} />
                <Route path="feedback" element={<Feedback />} />
              </Route>

                {/* Fallback for unknown routes */}
                <Route path="*" element={<NotFound />} />
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