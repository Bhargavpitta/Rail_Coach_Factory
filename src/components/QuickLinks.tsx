import { 
  Monitor, 
  CreditCard, 
  FileCheck, 
  AlertCircle, 
  Receipt, 
  MessageSquare, 
  Globe 
} from "lucide-react";
import "./QuickLinks.css";

const links = [
  { title: "e-office", icon: <Monitor size={20} />, href: "/e-office" },
  { title: "Online Payment", icon: <CreditCard size={20} />, href: "/payment" },
  { title: "JPO of CMP", icon: <FileCheck size={20} />, href: "/jpo-cmp" },
  { title: "Rail Madad", icon: <AlertCircle size={20} />, href: "/complaints" },
  { title: "GST - Railways", icon: <Receipt size={20} />, href: "/gst" },
  { title: "Public Grievances", icon: <MessageSquare size={20} />, href: "/grievances" },
  { title: "india.gov.in", icon: <Globe size={20} />, href: "https://india.gov.in" },
];

const QuickLinks = () => {
  return (
    <div className="quick-links-container">
      <h2 className="quick-links-heading">Quick Links</h2>
      <div className="quick-links-row">
        {links.map((link) => (
          <a key={link.title} href={link.href} className="quick-link-item">
            <span className="quick-link-icon">{link.icon}</span>
            <span className="quick-link-text">{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;