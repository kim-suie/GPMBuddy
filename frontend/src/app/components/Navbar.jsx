import image_poly from "@/imports/poly.jpg";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Bot, ChevronDown, LogIn, Phone, Mail } from "lucide-react";

const departments = [
  { label: "Civil Engineering", id: "dept-civil" },
  { label: "Computer Science & Engineering", id: "dept-cse" },
  { label: "Electrical Engineering", id: "dept-electrical" },
  { label: "Electronics Engineering", id: "dept-electronics" },
  { label: "Mechanical Engineering", id: "dept-mechanical" },
  { label: "Chemistry", id: "dept-chemistry" },
  { label: "Physics", id: "dept-physics" },
  { label: "Humanities", id: "dept-humanities" },
  { label: "Leather Technology", id: "dept-leather" },
];


export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDeptOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper function to handle routing logic
  const onNavigate = (path) => {
    if (path === "home") {
      navigate("/");
    } else if (path.startsWith("dept-")) {
      navigate(`/dept/${path}`);
    } else {
      navigate(`/${path}`);
    }
    setMobileOpen(false);
    setDeptOpen(false);
  };

  // Determine current page from URL for active states
  const currentPage = location.pathname;
  const isDeptPage = currentPage.startsWith("/dept/");
  const isAcademicsPage = currentPage === "/academics";
  const isPlacementsPage = currentPage === "/placements";
  const isNoticesPage = currentPage === "/notices";

  return (
    <header className="sticky top-0 z-50 font-roboto" style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}>
      {/* ===================== TOP UTILITY BAR ===================== */}
      <div className="bg-[#0b1f5e] text-white text-[13px]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <a href="mailto:principal@gpmuzaffarpur.ac.in" className="hidden sm:flex items-center gap-1.5 hover:text-[#FF9933] transition-colors">
              <Mail className="w-3.5 h-3.5" /> principal@gpmuzaffarpur.ac.in
            </a>
          </div>
          <div className="flex items-center gap-4 text-[11.5px]">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933]"></span> Screen Reader
            </span>
            <span className="hidden md:inline opacity-40">|</span>
            <a href="#main" className="hover:text-[#FF9933] transition-colors">Skip to Main Content</a>
          </div>
        </div>
      </div>

      {/* 4px tricolor strip */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-[#FF9933]"></div>
        <div className="flex-1 bg-white border-y border-gray-200"></div>
        <div className="flex-1 bg-[#138808]"></div>
      </div>

      {/* ===================== HEADER SECTION ===================== */}
      <div className="bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          
          {/* Logo + Name */}
          <button onClick={() => onNavigate("home")} className="flex items-center gap-4 group">
            <img src={image_poly} alt="GPM Logo" className="w-14 h-14 sm:w-16 sm:h-16 object-contain shadow-sm" />
            <div className="hidden sm:block text-left">
              <h1 className="text-[20px] sm:text-[24px] font-bold leading-tight text-[#0b1f5e]" style={{ letterSpacing: "-0.01em" }}>
                Government Polytechnic, Muzaffarpur
              </h1>
              <p className="text-[15px] sm:text-[17px] text-[#0b1f5e]/85 font-medium" style={{ fontFamily: "'Tiro Devanagari Hindi', sans-serif" }}>
                राजकीय पॉलिटेक्निक, मुजफ्फरपुर
              </p>
              <p className="text-[12px] text-gray-500 mt-0.5 font-medium uppercase tracking-wide">
                Department of Science &amp; Technology, Govt. of Bihar
              </p>
            </div>
          </button>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onNavigate("login")}
              className="flex items-center gap-2 bg-[#0b1f5e] text-white px-4 sm:px-5 py-2.5 rounded-sm text-[13px] font-semibold hover:bg-[#0a1a4d] transition-colors shadow-sm"
            >
              <LogIn className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">Admin Login</span>
            </button>
            <button
              onClick={() => onNavigate("gpbuddy")}
              className="flex items-center gap-2 bg-[#FF9933] text-[#0b1f5e] px-4 sm:px-5 py-2.5 rounded-sm text-[13px] font-semibold hover:bg-[#ff8a14] transition-colors shadow-sm"
            >
              <Bot className="w-4 h-4" /> 
              <span className="hidden sm:inline">GPM Buddy</span>
            </button>

            {/* Mobile Hamburger inside header */}
            <button
              className="lg:hidden p-2 text-[#0b1f5e] hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===================== NAVIGATION BAR ===================== */}
      <nav
        className={`bg-[#0b1f5e] text-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="hidden lg:flex items-center h-[52px]">
            
            <button
              onClick={() => onNavigate("home")}
              className={`px-5 py-4 text-[14px] font-medium transition-colors ${
                currentPage === "/" ? "bg-white/10 text-[#FF9933]" : "hover:bg-white/10 hover:text-[#FF9933]"
              }`}
            >
              Home
            </button>

            {/* Desktop Departments Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDeptOpen(!deptOpen)}
                className={`flex items-center gap-1.5 px-5 py-4 text-[14px] font-medium transition-colors ${
                  isDeptPage ? "bg-white/10 text-[#FF9933]" : "hover:bg-white/10 hover:text-[#FF9933]"
                }`}
              >
                Departments 
                <ChevronDown size={14} className={`transition-transform duration-200 ${deptOpen ? "rotate-180" : ""}`} />
              </button>

              {deptOpen && (
                <div className="absolute left-0 top-full bg-white text-[#0b1f5e] shadow-xl border-t-2 border-[#FF9933] min-w-[280px] animate-[fadeIn_0.15s_ease] z-50">
                  <ul className="py-1.5 max-h-[420px] overflow-y-auto">
                    {departments.map((dept) => (
                      <li key={dept.id}>
                        <button
                          onClick={() => onNavigate(dept.id)}
                          className="w-full text-left px-4 py-2.5 text-[13px] text-gray-700 hover:bg-[#0b1f5e] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                        >
                          {dept.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Desktop Academics Link */}
            <button
              onClick={() => onNavigate("academics")}
              className={`px-5 py-4 text-[14px] font-medium transition-colors ${
                isAcademicsPage ? "bg-white/10 text-[#FF9933]" : "hover:bg-white/10 hover:text-[#FF9933]"
              }`}
            >
              Academics
            </button>

            {/* Desktop Placements Link (Internal Route) */}
            <button
              onClick={() => onNavigate("placements")}
              className={`px-5 py-4 text-[14px] font-medium transition-colors ${
                isPlacementsPage ? "bg-white/10 text-[#FF9933]" : "hover:bg-white/10 hover:text-[#FF9933]"
              }`}
            >
              Placements
            </button>

            {/* Desktop Notices Link (Internal Route) */}
            <button
              onClick={() => onNavigate("notices")}
              className={`px-5 py-4 text-[14px] font-medium transition-colors ${
                isNoticesPage ? "bg-white/10 text-[#FF9933]" : "hover:bg-white/10 hover:text-[#FF9933]"
              }`}
            >
              Notices
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white text-[#0b1f5e] ${
            mobileOpen ? "max-h-[900px] shadow-lg" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            <button
              onClick={() => onNavigate("home")}
              className={`w-full text-left p-3 rounded-md text-sm font-medium transition-colors ${
                currentPage === "/" ? "bg-[#0b1f5e] text-white" : "text-[#0b1f5e] hover:bg-blue-50"
              }`}
            >
              Home
            </button>

            {/* Mobile Departments Accordion */}
            <div>
              <button
                onClick={() => setMobileDeptOpen(!mobileDeptOpen)}
                className={`w-full flex items-center justify-between p-3 rounded-md text-sm font-medium transition-colors ${
                  isDeptPage ? "bg-[#0b1f5e] text-white" : "text-[#0b1f5e] hover:bg-blue-50"
                }`}
              >
                Departments
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDeptOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileDeptOpen && (
                <div className="pl-4 pb-1 space-y-0.5 mt-1">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => onNavigate(dept.id)}
                      className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-[#0b1f5e] hover:bg-blue-50 rounded-md transition-colors"
                    >
                      {dept.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Academics Link */}
            <button
              onClick={() => onNavigate("academics")}
              className={`w-full text-left p-3 rounded-md text-sm font-medium transition-colors ${
                isAcademicsPage ? "bg-[#0b1f5e] text-white" : "text-[#0b1f5e] hover:bg-blue-50"
              }`}
            >
              Academics
            </button>

            {/* Mobile Placements Link */}
            <button
              onClick={() => onNavigate("placements")}
              className={`w-full text-left p-3 rounded-md text-sm font-medium transition-colors ${
                isPlacementsPage ? "bg-[#0b1f5e] text-white" : "text-[#0b1f5e] hover:bg-blue-50"
              }`}
            >
              Placements
            </button>

            {/* Mobile Notices Link */}
            <button
              onClick={() => onNavigate("notices")}
              className={`w-full text-left p-3 rounded-md text-sm font-medium transition-colors ${
                isNoticesPage ? "bg-[#0b1f5e] text-white" : "text-[#0b1f5e] hover:bg-blue-50"
              }`}
            >
              Notices
            </button>

            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-gray-100 mt-2 flex gap-3">
              <button 
                onClick={() => onNavigate("login")} 
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0b1f5e] rounded-md"
              >
                <LogIn size={16} strokeWidth={2.5} /> Admin Login
              </button>
              <button 
                onClick={() => onNavigate("gpbuddy")} 
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0b1f5e] bg-[#FF9933] rounded-md"
              >
                <Bot size={16} /> GPM Buddy
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Tiro+Devanagari+Hindi&display=swap');
        @keyframes gpm-spin { to { transform: rotate(360deg); } }
        .gpm-chakra { animation: gpm-spin 22s linear infinite; transform-origin: center; }
      `}</style>
    </header>
  );
}

export default Navbar;