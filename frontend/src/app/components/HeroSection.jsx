import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

/* ---------- Tiny inline SVG icons ---------- */
const Icon = {
  Phone: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>),
  Mail: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>),
  Login: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>),
  Bot: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="8" width="18" height="12" rx="2" /><circle cx="8" cy="14" r="1.5" fill="currentColor" stroke="none" /><circle cx="16" cy="14" r="1.5" fill="currentColor" stroke="none" /><path d="M12 8V4M12 4h-1M12 4h1" /></svg>),
  ArrowRight: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>),
  ArrowLeft: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>),
  Calendar: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /></svg>),
  BookOpen: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>),
  Award: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>),
  Users: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
  Briefcase: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>),
  Building: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M19 21V9a2 2 0 0 0-2-2M9 7h2M9 11h2M9 15h2" /></svg>),
  GradCap: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" /></svg>),
  Megaphone: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>),
  Bell: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>),
  MapPin: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>),
};

/* ---------- Reusable: notice status pill ---------- */
function StatusPill({ type }) {
  const map = {
    NEW: "bg-red-600 text-white",
    IMP: "bg-[#FF9933] text-[#0b1f5e]",
    OLD: "bg-gray-200 text-gray-700",
  };
  return <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded-sm tracking-wider ${map[type] || map.OLD}`}>{type}</span>;
}

/* ---------- Main Component ---------- */
export default function HeroSection() {
  const navigate = useNavigate();
  
  const [slide, setSlide] = useState(0);
  const slideTimer = useRef(null);

  const slides = [
    {
      img: "https://picsum.photos/seed/gpm-campus-muzaffarpur/1600/900",
      tag: "Admissions Open 2025-26",
      tagColor: "#FF9933",
      title: "Shaping Engineers of Bihar Since 1949",
      subtitle: "Government Polytechnic, Muzaffarpur — a premier technical institution under the Department of Science & Technology, Govt. of Bihar. Applications invited for diploma programs across nine disciplines.",
      cta: "Apply for Admission",
      cta2: "Download Prospectus",
    },
    {
      img: "https://picsum.photos/seed/gpm-lab-workshop-engineering/1600/900",
      tag: "Industry-Aligned Curriculum",
      tagColor: "#138808",
      title: "Workshops, Labs & Live Projects",
      subtitle: "Hands-on training in Civil, Mechanical, Electrical, Electronics, Computer Science, Leather Technology and more — mentored by faculty with decades of shop-floor and academic experience.",
      cta: "Explore Campus",
      cta2: "Virtual Tour",
    },
    {
      img: "https://picsum.photos/seed/gpm-graduation-placement/1600/900",
      tag: "100% Placement Support",
      tagColor: "#FF9933",
      title: "From Classrooms to Careers",
      subtitle: "A dedicated Training & Placement Cell. Consistent recruiters include TCS, Infosys, L&T, Bajaj, Mahindra, and Bihar's leading infra firms. Highest package in 2024 stood at ₹8.4 LPA.",
      cta: "Placement Records",
      cta2: "Top Recruiters",
    },
  ];

  useEffect(() => {
    slideTimer.current = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6500);
    return () => clearInterval(slideTimer.current);
  }, [slides.length]);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const quickLinks = [
    { icon: Icon.Login, label: "Student Login", path: "login" },
    { icon: Icon.BookOpen, label: "E-Resources", path: "academics" },
    { icon: Icon.Award, label: "Exam Results", path: "academics" },
    { icon: Icon.GradCap, label: "Admissions", path: "academics" },
    { icon: Icon.Megaphone, label: "Grievance Redressal", path: "login" },
    { icon: Icon.Bot, label: "GPM Buddy", path: "gpbuddy" },
  ];

  const notices = [
    { tag: "NEW", title: "Admission notification for Diploma 1st Year 2025-26 — apply before 30th June", date: "12 Jun 2025" },
    { tag: "NEW", title: "Internal assessment exam schedule for even semester released", date: "10 Jun 2025" },
    { tag: "IMP", title: "SBTE Bihar revised academic calendar for AY 2025-26 published", date: "08 Jun 2025" },
    { tag: "IMP", title: "Industrial visit to BHEL Patna for Mechanical 4th semester students", date: "05 Jun 2025" },
    { tag: "OLD", title: "World Environment Day pledge — plantation drive on 5th June at campus", date: "03 Jun 2025" },
    { tag: "OLD", title: "Sports meet winners list — annual athletics 2024-25 declared", date: "28 May 2025" },
    { tag: "OLD", title: "Scholarship disbursement under Mukhyamantri Balika Protsahan Yojana", date: "22 May 2025" },
    { tag: "OLD", title: "Vacancy for guest faculty in Leather Technology department", date: "18 May 2025" },
  ];

  const deptCards = [
    { name: "Civil Engineering", path: "dept-civil", img: "https://picsum.photos/seed/gpm-dept-civil/600/400", desc: "Surveying, structural engineering, construction technology, water resources and transportation engineering labs." },
    { name: "Computer Science & Engineering", path: "dept-cse", img: "https://picsum.photos/seed/gpm-dept-cse/600/400", desc: "Programming, data structures, DBMS, computer networks, full-stack development with modern labs." },
    { name: "Electrical Engineering", path: "dept-electrical", img: "https://picsum.photos/seed/gpm-dept-elec/600/400", desc: "Power systems, electrical machines, control systems, switchgear & protection, embedded systems." },
    { name: "Electronics Engineering", path: "dept-electronics", img: "https://picsum.photos/seed/gpm-dept-ece/600/400", desc: "Analog & digital circuits, microcontrollers, VLSI, communication systems and IoT specialisation." },
    { name: "Mechanical Engineering", path: "dept-mechanical", img: "https://picsum.photos/seed/gpm-dept-mech/600/400", desc: "Thermal engineering, machine design, manufacturing, CAD/CAM, hydraulics and robotics workshops." },
    { name: "Leather Technology", path: "dept-leather", img: "https://picsum.photos/seed/gpm-dept-leather/600/400", desc: "A flagship department — leather processing, footwear design, quality control and tannery management." },
  ];

  const placementData = [
    { year: "2024-25", eligible: 312, placed: 286, percent: "91.7%", ctc: "₹8.4 LPA" },
    { year: "2023-24", eligible: 298, placed: 263, percent: "88.3%", ctc: "₹7.8 LPA" },
    { year: "2022-23", eligible: 281, placed: 241, percent: "85.8%", ctc: "₹7.2 LPA" },
    { year: "2021-22", eligible: 264, placed: 218, percent: "82.6%", ctc: "₹6.5 LPA" },
    { year: "2020-21", eligible: 248, placed: 196, percent: "79.0%", ctc: "₹5.8 LPA" },
  ];

  const recruiters = ["TCS", "Infosys", "L&T", "Bajaj", "Mahindra", "ITC", "Tata Motors", "Sail", "BSNL", "BEL", "Wipro", "Capgemini"];

  return (
    <div className="bg-white text-[#0b1f5e] font-roboto" style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}>
      
      {/* ===================== HERO CAROUSEL ===================== */}
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div key={`${i}-${slide}`} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }}>
              <div className={`absolute inset-0 ${i === slide ? "gpm-kenburns" : ""}`} style={{ backgroundImage: `url(${s.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f5e]/95 via-[#0b1f5e]/75 to-[#0b1f5e]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f5e]/80 via-transparent to-transparent" />

            <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 h-full flex items-center">
              <div className={`max-w-2xl text-white ${i === slide ? "gpm-fadeup" : ""}`}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[12px] font-bold uppercase tracking-wider mb-5" style={{ backgroundColor: s.tagColor, color: s.tagColor === "#138808" ? "white" : "#0b1f5e" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  {s.tag}
                </span>
                <h2 className="text-[34px] sm:text-[48px] font-bold leading-[1.08] mb-4" style={{ letterSpacing: "-0.015em" }}>{s.title}</h2>
                <p className="text-[15px] sm:text-[16px] text-white/85 leading-relaxed mb-7 max-w-xl">{s.subtitle}</p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => navigate("/academics")} className="bg-[#FF9933] text-[#0b1f5e] px-6 py-3 rounded-sm text-[14px] font-semibold hover:bg-[#ff8a14] transition-colors flex items-center gap-2">
                    {s.cta} <Icon.ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="border border-white/70 text-white px-6 py-3 rounded-sm text-[14px] font-semibold hover:bg-white hover:text-[#0b1f5e] transition-colors">
                    {s.cta2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)} className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur items-center justify-center text-white transition-colors" aria-label="Previous slide">
          <Icon.ArrowLeft className="w-5 h-5" />
        </button>
        <button onClick={() => setSlide((s) => (s + 1) % slides.length)} className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur items-center justify-center text-white transition-colors" aria-label="Next slide">
          <Icon.ArrowRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-[110px] left-1/2 -translate-x-1/2 flex gap-2.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`h-2 rounded-full transition-all ${i === slide ? "w-8 bg-[#FF9933]" : "w-2 bg-white/50 hover:bg-white/80"}`} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[#0b1f5e] border-t border-white/10 ">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4">
            {[
              { v: "1949", l: "Established" },
              { v: "9", l: "Branches" },
              { v: "100%", l: "Placement Support" },
              { v: "5000+", l: "Alumni Network" },
            ].map((s, i) => (
              <div key={s.l} className={`py-5 text-center text-white ${i !== 0 ? "md:border-l border-white/10" : ""} ${i % 2 !== 0 ? "border-l border-white/10 md:border-l" : ""} ${i === 1 ? "border-l border-white/10" : ""} ${i === 3 ? "border-l border-white/10" : ""}`}>
                <div className="text-[28px] sm:text-[32px] font-bold text-[#FF9933] leading-none">{s.v}</div>
                <div className="text-[12px] sm:text-[13px] text-white/75 mt-1.5 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== QUICK LINKS GRID ===================== */}
      <section className="relative z-10 -mt-5 mb-2 reveal">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 bg-white">
            {quickLinks.map((q) => (
              <button 
                key={q.label} 
                onClick={() => navigate(q.path === "home" ? "/" : `/${q.path}`)}
                className="group relative bg-white border border-gray-200 px-4 py-5 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#FF9933] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <div className="w-12 h-12 rounded-full bg-[#0b1f5e]/5 text-[#0b1f5e] flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <q.icon className="w-6 h-6" />
                </div>
                <div className="text-[13px] font-bold text-[#0b1f5e] leading-tight">{q.label}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NOTICE MARQUEE ===================== */}
      <section className="reveal">
        <div className="bg-[#FFF4E5] border-y border-[#FF9933]/30 overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 flex items-center">
            <div className="flex-shrink-0 bg-[#FF9933] text-[#0b1f5e] px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider flex items-center gap-2 -mr-3 z-10 relative shadow-md">
              <span className="w-2 h-2 rounded-full bg-red-600 gpm-pulse"></span>
              Latest
            </div>
            <div className="flex-1 overflow-hidden py-2.5 pl-6">
              <div className="gpm-marquee whitespace-nowrap flex gap-12 text-[13px] text-[#0b1f5e] hover:[animation-play-state:paused]">
                {[...notices, ...notices].map((n, i) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    <span className="text-[#FF9933]">●</span>
                    <span className="font-medium">{n.title}</span>
                    <span className="text-gray-400">|</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MAIN CONTENT ===================== */}
      <main id="main" className="max-w-[1320px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          
          {/* Welcome / About */}
          <div className="reveal">
            <div className="mb-2 text-[12px] font-bold uppercase tracking-wider text-[#FF9933]">Welcome to GPM</div>
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0b1f5e] mb-4" style={{ letterSpacing: "-0.01em" }}>
              Building Bihar's technical backbone since 1949
            </h2>
            <div className="w-16 h-1 bg-[#FF9933] mb-5"></div>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
              Government Polytechnic, Muzaffarpur is one of the oldest polytechnics in the eastern region, established in 1949. Affiliated to the State Board of Technical Education, Bihar and approved by AICTE, the institute runs diploma programs across nine disciplines with a strong focus on practical training, industry readiness and rural-urban skill integration.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
              The 28-acre campus houses workshops, modern laboratories, hostels for boys and girls, a central library with over 35,000 volumes, sports facilities and a T&P cell that consistently places over 85% of eligible students. The institution also runs community development schemes under the Community Polytechnic scheme of MHRD.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { icon: Icon.Building, v: "28 acres", l: "Campus area" },
                { icon: Icon.Users, v: "120+", l: "Faculty & staff" },
                { icon: Icon.BookOpen, v: "35,000+", l: "Library volumes" },
                { icon: Icon.Briefcase, v: "85%+", l: "Avg placement" },
                { icon: Icon.Award, v: "AICTE", l: "Approved" },
                { icon: Icon.GradCap, v: "9", l: "Diploma branches" },
              ].map((s) => (
                <div key={s.l} className="bg-[#f6f3ea] px-4 py-3 flex items-center gap-3 border-l-[3px] border-[#0b1f5e]">
                  <s.icon className="w-5 h-5 text-[#0b1f5e]" />
                  <div>
                    <div className="text-[15px] font-bold text-[#0b1f5e] leading-tight">{s.v}</div>
                    <div className="text-[11px] text-gray-600 leading-tight">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-16 h-20 bg-[#0b1f5e] flex-shrink-0 rounded-sm overflow-hidden">
                  <img src="https://picsum.photos/seed/gpm-principal-portrait/120/160" alt="Principal" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[12px] font-bold uppercase tracking-wider text-[#FF9933]">Principal's Message</div>
                  <p className="text-[14px] text-gray-700 leading-relaxed mt-2 italic">
                    "Technical education must serve the cause of equitable development. At GPM Muzaffarpur, we strive to produce diploma engineers who are not just employable, but who carry forward the tradition of integrity, craftsmanship and nation-building that this institute has stood for since 1949."
                  </p>
                  <div className="text-[13px] font-semibold text-[#0b1f5e] mt-2">— Dr. R. K. Thakur</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Notices & Circulars */}
          <aside className="reveal">
            <div className="bg-white border border-gray-200 shadow-sm">
              <div className="bg-[#0b1f5e] text-white px-4 py-3 flex items-center justify-between">
                <h3 className="text-[15px] font-bold flex items-center gap-2">
                  <Icon.Bell className="w-4 h-4 text-[#FF9933]" /> Notices &amp; Circulars
                </h3>
                <span className="text-[11px] bg-[#FF9933] text-[#0b1f5e] px-2 py-0.5 rounded-sm font-bold">{notices.filter(n => n.tag === "NEW").length} New</span>
              </div>
              <ul>
                {notices.map((n, i) => (
                  <li key={i}>
                    <a href="#" className="group flex items-start gap-3 px-3 py-3 border-b border-gray-100 last:border-0 hover:bg-[#FFF4E5] hover:pl-4 transition-all duration-200">
                      <StatusPill type={n.tag} />
                      <div className="flex-1">
                        <div className="text-[13px] text-[#0b1f5e] font-medium leading-snug group-hover:text-[#0a1a4d]">{n.title}</div>
                        <div className="text-[11px] text-gray-500 mt-1 flex items-center gap-1.5">
                          <Icon.Calendar className="w-3 h-3" /> {n.date}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                <a href="#" className="text-[13px] font-semibold text-[#0b1f5e] hover:text-[#FF9933] transition-colors flex items-center justify-between">
                  View All Notices <Icon.ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-4 bg-[#138808]/10 border-l-4 border-[#138808] p-4 rounded-sm">
              <div className="text-[12px] font-bold uppercase tracking-wider text-[#138808] mb-1">Mandatory Disclosure</div>
              <p className="text-[12px] text-gray-700 leading-relaxed">AICTE &amp; SBTE Bihar mandatory disclosures, anti-ragging affidavit and grievance redressal contacts are available on the dedicated compliance page.</p>
              <a href="#" className="text-[12px] font-semibold text-[#0b1f5e] mt-2 inline-flex items-center gap-1.5 hover:text-[#FF9933]">
                View disclosures <Icon.ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* ===================== ACADEMIC DEPARTMENTS ===================== */}
      <section className="py-14 bg-white reveal">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="text-[12px] font-bold uppercase tracking-wider text-[#FF9933] mb-2">Academic Departments</div>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0b1f5e]" style={{ letterSpacing: "-0.01em" }}>
              Nine disciplines. One mission.
            </h2>
            <div className="w-16 h-1 bg-[#FF9933] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deptCards.map((d) => (
              <article key={d.name} className="group bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden cursor-pointer" onClick={() => navigate(`/dept/${d.path}`)}>
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 left-3 bg-[#0b1f5e] text-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider">Department</div>
                </div>
                <div className="p-5">
                  <h3 className="text-[17px] font-bold text-[#0b1f5e] mb-2 group-hover:text-[#FF9933] transition-colors">{d.name}</h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed mb-3">{d.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0b1f5e] group-hover:text-[#FF9933] transition-colors">
                    Know More <Icon.ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PLACEMENTS SNAPSHOT ===================== */}
      <section className="py-14 bg-[#f6f3ea] reveal">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="text-[12px] font-bold uppercase tracking-wider text-[#FF9933] mb-2">Placements &amp; Academics Snapshot</div>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0b1f5e]" style={{ letterSpacing: "-0.01em" }}>
              Where our diploma engineers go next.
            </h2>
            <div className="w-16 h-1 bg-[#FF9933] mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
            <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-[#0b1f5e] text-white px-5 py-3 flex items-center gap-2">
                <Icon.Award className="w-4 h-4 text-[#FF9933]" />
                <h3 className="text-[15px] font-bold">Placement Records (Last 5 Years)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-[#0b1f5e]/5 text-[#0b1f5e] text-left">
                      <th className="px-4 py-3 font-semibold uppercase text-[11px] tracking-wider">Academic Year</th>
                      <th className="px-4 py-3 font-semibold uppercase text-[11px] tracking-wider">Eligible</th>
                      <th className="px-4 py-3 font-semibold uppercase text-[11px] tracking-wider">Placed</th>
                      <th className="px-4 py-3 font-semibold uppercase text-[11px] tracking-wider">%</th>
                      <th className="px-4 py-3 font-semibold uppercase text-[11px] tracking-wider">Highest CTC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placementData.map((r, i) => (
                      <tr key={r.year} className={`border-b border-gray-100 hover:bg-[#FFF4E5] transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                        <td className="px-4 py-3 font-semibold text-[#0b1f5e]">{r.year}</td>
                        <td className="px-4 py-3 text-gray-700">{r.eligible}</td>
                        <td className="px-4 py-3 text-gray-700">{r.placed}</td>
                        <td className="px-4 py-3 font-semibold text-[#138808]">{r.percent}</td>
                        <td className="px-4 py-3 font-bold text-[#FF9933]">{r.ctc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-[11px] text-gray-500">
                Data compiled by Training &amp; Placement Cell, GPM. CTC figures verified against offer letters.
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white border border-gray-200 shadow-sm">
                <div className="bg-[#0b1f5e] text-white px-5 py-3 flex items-center gap-2">
                  <Icon.Briefcase className="w-4 h-4 text-[#FF9933]" />
                  <h3 className="text-[15px] font-bold">Top Recruiters</h3>
                </div>
                <div className="p-5 grid grid-cols-3 gap-2">
                  {recruiters.map((r) => (
                    <div key={r} className="border border-gray-200 px-2 py-3 text-center text-[12px] font-semibold text-[#0b1f5e] hover:bg-[#0b1f5e] hover:text-white transition-colors cursor-default">
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STYLES (keyframes + reveal) ============ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Tiro+Devanagari+Hindi&display=swap');

        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        @keyframes gpm-spin { to { transform: rotate(360deg); } }
        .gpm-chakra { animation: gpm-spin 22s linear infinite; transform-origin: center; }

        @keyframes gpm-kenburns {
          0% { transform: scale(1.0) translate(0, 0); }
          100% { transform: scale(1.15) translate(-1.5%, -1%); }
        }
        .gpm-kenburns { animation: gpm-kenburns 7s ease-out forwards; }

        @keyframes gpm-fadeup {
          0% { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .gpm-fadeup { animation: gpm-fadeup 0.9s cubic-bezier(.2,.7,.2,1) both; }

        @keyframes gpm-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gpm-marquee { animation: gpm-marquee 50s linear infinite; will-change: transform; }
        .gpm-marquee:hover { animation-play-state: paused; }

        @keyframes gpm-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        .gpm-pulse { animation: gpm-pulse 1.2s ease-in-out infinite; }

        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}