import { useNavigate } from "react-router-dom";
import { Users, Calendar, MapPin, Phone, Mail, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

/* ---------- Spinning Ashoka Chakra SVG ---------- */
function AshokaChakra({ size = 64 }) {
  const cx = 60, cy = 60, r = 50;
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const a = (i * 15 * Math.PI) / 180;
    return { x1: cx + 8 * Math.cos(a), y1: cy + 8 * Math.sin(a), x2: cx + r * Math.cos(a), y2: cy + r * Math.sin(a) };
  });
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="gpm-chakra">
      <circle cx="60" cy="60" r="50" fill="none" stroke="#0b1f5e" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="#0b1f5e" strokeWidth="1.2" opacity="0.4" />
      <circle cx="60" cy="60" r="6" fill="#0b1f5e" />
      {spokes.map((s, i) => (
        <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke="#0b1f5e" strokeWidth="1.2" />
      ))}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        return <circle key={`d-${i}`} cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r="1.3" fill="#0b1f5e" />;
      })}
    </svg>
  );
}

/* ---------- Tricolor-rimmed circular emblem (logo) ---------- */
function Logo({ size = 64 }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 120 120" className="absolute inset-0">
        <circle cx="60" cy="60" r="58" fill="#ffffff" />
        <circle cx="60" cy="60" r="58" fill="none" stroke="#FF9933" strokeWidth="6" strokeDasharray="121.5 243" strokeDashoffset="0" transform="rotate(-90 60 60)" />
        <circle cx="60" cy="60" r="58" fill="none" stroke="#ffffff" strokeWidth="6" strokeDasharray="121.5 243" strokeDashoffset="-121.5" transform="rotate(-90 60 60)" />
        <circle cx="60" cy="60" r="58" fill="none" stroke="#138808" strokeWidth="6" strokeDasharray="121.5 243" strokeDashoffset="-243" transform="rotate(-90 60 60)" />
        <circle cx="60" cy="60" r="52" fill="#ffffff" stroke="#0b1f5e" strokeWidth="1" opacity="0.2" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <AshokaChakra size={size * 0.66} />
      </div>
    </div>
  );
}

/* ---------- Main Footer Component ---------- */
export function Footer() {
  const navigate = useNavigate();

  // Helper function to handle routing
  const handleNavigate = (path) => {
    if (path === "home") {
      navigate("/");
    } else if (path.startsWith("dept-")) {
      navigate(`/dept/${path}`);
    } else {
      navigate(`/${path}`);
    }
  };

  // External links helper
  const openExternal = (url) => {
    window.open(url, "_blank");
  };

  const departmentLinks = [
    { label: "Computer Science", id: "dept-cse" },
    { label: "Mechanical Engineering", id: "dept-mechanical" },
    { label: "Civil Engineering", id: "dept-civil" },
    { label: "Electrical Engineering", id: "dept-electrical" },
    { label: "Electronics Engineering", id: "dept-electronics" },
    { label: "Leather Technology", id: "dept-leather" },
  ];

  const quickLinks = [
    { label: "AICTE", url: "https://www.aicte-india.org/" },
    { label: "SBTE Bihar", url: "http://sbte.bihar.gov.in/" },
    { label: "Department of Science & Tech", url: "https://state.bihar.gov.in/dst/CitizenHome.html" },
    { label: "Bihar Govt Portal", url: "https://state.bihar.gov.in/main/CitizenHome.html" },
    { label: "Anti-Ragging Helpline", url: "https://antiragging.in/" },
  ];

  const importantPages = [
    { label: "Academics", path: "academics" },
    { label: "Admissions 2025-26", path: "academics" },
    { label: "Examination & Results", path: "academics" },
    { label: "Grievance Redressal", path: "login" },
    { label: "GPM Buddy", path: "gpbuddy" },
  ];

  return (
    <>
      <style>{`
        @keyframes gpm-spin { to { transform: rotate(360deg); } }
        .gpm-chakra { animation: gpm-spin 22s linear infinite; transform-origin: center; }
      `}</style>
      
      <footer className="bg-[#0b1f5e] text-white border-t-4 border-[#FF9933]">
        {/* Visitor / Last updated strip */}
        <div className="bg-white/5 border-b border-white/10">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-[12px]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#FF9933]" /> Visitor Counter: <strong className="text-[#FF9933]">14,82,947</strong></span>
              <span className="hidden sm:inline opacity-40">|</span>
              <span className="hidden sm:flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#FF9933]" /> Last Updated: 12 June 2025</span>
            </div>
            <div className="text-white/60 text-[11px]">Best viewed in Chrome, Firefox, Edge at 1280×800</div>
          </div>
        </div>

        {/* 4-column grid */}
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <button onClick={() => handleNavigate("home")}>
                <Logo size={64} />
              </button>
              <div>
                <div className="text-[15px] font-bold leading-tight">Government Polytechnic</div>
                <div className="text-[13px] text-white/70">Muzaffarpur, Bihar</div>
              </div>
            </div>
            <p className="text-[13px] text-white/70 leading-relaxed mb-4">
              A premier technical institution established in 1949, under the Department of Science &amp; Technology, Government of Bihar. Approved by AICTE and affiliated to SBTE Bihar.
            </p>
            <div className="text-[12px] text-white/70 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#FF9933] flex-shrink-0 mt-0.5" />
              <span>East Ramna Road, Muzaffarpur, Bihar 842002, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-bold mb-4 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#FF9933]"></span>
            </h4>
            <ul className="space-y-2 text-[13px] text-white/75">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => openExternal(link.url)} 
                    className="hover:text-[#FF9933] transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="text-[#FF9933]">›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Pages */}
          <div>
            <h4 className="text-[14px] font-bold mb-4 relative pb-2">
              Important Pages
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#FF9933]"></span>
            </h4>
            <ul className="space-y-2 text-[13px] text-white/75">
              {importantPages.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => handleNavigate(link.path)} 
                    className="hover:text-[#FF9933] transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="text-[#FF9933]">›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with us */}
          <div>
            <h4 className="text-[14px] font-bold mb-4 relative pb-2">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#FF9933]"></span>
            </h4>
            <div className="text-[13px] text-white/75 space-y-3 mb-5">
              <div className="flex items-start gap-2"><Phone className="w-4 h-4 text-[#FF9933] mt-0.5" /> +91 6212 280 000</div>
              <div className="flex items-start gap-2"><Mail className="w-4 h-4 text-[#FF9933] mt-0.5" /> principal@gpmuzaffarpur.ac.in</div>
            </div>
            <div className="flex gap-2">
              {[Facebook, Twitter, Youtube, Instagram].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF9933] hover:text-[#0b1f5e] flex items-center justify-center transition-colors"
                  aria-label="social"
                >
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-white/70">
            <div>© {new Date().getFullYear()} Government Polytechnic, Muzaffarpur. All Rights Reserved.</div>
            <div className="flex items-center gap-1.5">
              Made with <span className="text-[#FF9933]">❤</span> for the students of Bihar
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;