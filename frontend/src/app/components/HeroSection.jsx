import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import collegeimage from "../../imports/clg.jpg";

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
  Sparkles: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/></svg>),
};

/* ---------- Reusable: notice status pill ---------- */
function StatusPill({ type }) {
  const map = {
    NEW: "bg-red-100 text-red-600",
    IMP: "bg-amber-100 text-amber-700",
    OLD: "bg-slate-100 text-slate-500",
  };
  return <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full tracking-wider ${map[type] || map.OLD}`}>{type}</span>;
}

/* ---------- Main Component ---------- */
export default function HeroSection() {
  const navigate = useNavigate();

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
    { name: "Civil Engineering", path: "dept-civil", img: "https://picsum.photos/seed/gpm-dept-civil/600/400", desc: "Surveying, structural engineering, construction technology, water resources and transportation labs." },
    { name: "Computer Science & Engg", path: "dept-cse", img: "https://picsum.photos/seed/gpm-dept-cse/600/400", desc: "Programming, data structures, DBMS, computer networks, full-stack development with modern labs." },
    { name: "Electrical Engineering", path: "dept-electrical", img: "https://picsum.photos/seed/gpm-dept-elec/600/400", desc: "Power systems, electrical machines, control systems, switchgear & protection, embedded systems." },
    { name: "Electronics Engineering", path: "dept-electronics", img: "https://picsum.photos/seed/gpm-dept-ece/600/400", desc: "Analog & digital circuits, microcontrollers, VLSI, communication systems and IoT specialisation." },
    { name: "Mechanical Engineering", path: "dept-mechanical", img: "https://picsum.photos/seed/gpm-dept-mech/600/400", desc: "Thermal engineering, machine design, manufacturing, CAD/CAM, hydraulics and robotics workshops." },
    { name: "Leather Technology", path: "dept-leather", img: "https://picsum.photos/seed/gpm-dept-leather/600/400", desc: "A flagship department — leather processing, footwear design, quality control and tannery management." },
  ];

  const placementData = [
    { year: "2024-25", eligible: 312, placed: 286, percent: "91.7%", ctc: "₹8.4 LPA", width: "91%" },
    { year: "2023-24", eligible: 298, placed: 263, percent: "88.3%", ctc: "₹7.8 LPA", width: "88%" },
    { year: "2022-23", eligible: 281, placed: 241, percent: "85.8%", ctc: "₹7.2 LPA", width: "85%" },
    { year: "2021-22", eligible: 264, placed: 218, percent: "82.6%", ctc: "₹6.5 LPA", width: "82%" },
    { year: "2020-21", eligible: 248, placed: 196, percent: "79.0%", ctc: "₹5.8 LPA", width: "79%" },
  ];

  const recruiters = ["TCS", "Infosys", "L&T", "Bajaj", "Mahindra", "ITC", "Tata Motors", "Sail", "BSNL", "BEL", "Wipro", "Capgemini"];

  return (
    <div className="bg-slate-50 text-[#0b1f5e] font-jakarta" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      
      {/* ===================== STATIC HERO SECTION ===================== */}
      <section className="relative h-[600px] overflow-hidden rounded-b-[40px]">
        {/* Static Background Image with subtle slow zoom */}
        <div className="absolute inset-0 gpm-kenburns" style={{ backgroundImage: `url('${collegeimage}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        
        {/* Modern Vibrant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1f5e] via-[#0b1f5e]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f5e]/90 via-transparent to-transparent" />

        {/* Hero Text Content */}
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-2xl text-white gpm-fadeup">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-5 shadow-lg bg-[#FF9933] text-[#0b1f5e]">
              <Icon.Sparkles className="w-3.5 h-3.5" />
              Admissions Open 2025-26
            </span>
            <h2 className="text-[34px] sm:text-[52px] font-extrabold leading-[1.05] mb-5" style={{ letterSpacing: "-0.02em" }}>Shaping Engineers of Bihar Since 1949</h2>
            <p className="text-[16px] sm:text-[18px] text-white/80 leading-relaxed mb-8 max-w-xl">Government Polytechnic, Muzaffarpur — a premier technical institution. Applications invited for diploma programs across nine disciplines.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate("/academics")} className="bg-[#FF9933] text-[#0b1f5e] px-7 py-3.5 rounded-full text-[14px] font-bold hover:bg-[#ffb84d] transition-all hover:scale-105 shadow-lg shadow-[#FF9933]/30 flex items-center gap-2">
                Apply for Admission <Icon.ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate("/placements")} className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full text-[14px] font-semibold hover:bg-white/20 transition-all">
                View Placements 
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== NOTICE MARQUEE ===================== */}
      <section className="reveal mb-12 mt-5">
        <div className="bg-white border-y border-slate-100 overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 flex items-center">
            <div className="flex-shrink-0 bg-[#0b1f5e] text-white px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider flex items-center gap-2 -mr-4 z-10 relative shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-500 gpm-pulse"></span>
              Latest
            </div>
            <div className="flex-1 overflow-hidden py-3 pl-8">
              <div className="gpm-marquee whitespace-nowrap flex gap-12 text-[14px] text-slate-600 hover:[animation-play-state:paused]">
                {[...notices, ...notices].map((n, i) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    <span className="text-[#FF9933]">●</span>
                    <span className="font-medium">{n.title}</span>
                    <span className="text-slate-300">|</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MAIN CONTENT ===================== */}
      <main id="main" className="max-w-[1320px] mx-auto px-4 sm:px-6 pb-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-10">
          
          {/* Welcome / About */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-4">
              <Icon.Sparkles className="w-3.5 h-3.5" /> Welcome to GPM
            </div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0b1f5e] mb-4" style={{ letterSpacing: "-0.02em" }}>
              Building Bihar's technical backbone since 1949.
            </h2>
            <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
              Government Polytechnic, Muzaffarpur is one of the oldest polytechnics in the eastern region. Affiliated to the State Board of Technical Education, Bihar and approved by AICTE, the institute runs diploma programs across nine disciplines with a strong focus on practical training and industry readiness.
            </p>
            <p className="text-slate-600 text-[16px] leading-relaxed mb-8">
              The 28-acre campus houses workshops, modern laboratories, hostels, a central library with over 35,000 volumes, sports facilities and a T&P cell that consistently places over 85% of eligible students.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Icon.Building, v: "28 acres", l: "Campus area", bg: "bg-blue-50", text: "text-blue-600" },
                { icon: Icon.Users, v: "120+", l: "Faculty & staff", bg: "bg-purple-50", text: "text-purple-600" },
                { icon: Icon.BookOpen, v: "35,000+", l: "Library volumes", bg: "bg-emerald-50", text: "text-emerald-600" },
                { icon: Icon.Briefcase, v: "85%+", l: "Avg placement", bg: "bg-amber-50", text: "text-amber-600" },
                { icon: Icon.Award, v: "AICTE", l: "Approved", bg: "bg-rose-50", text: "text-rose-600" },
                { icon: Icon.GradCap, v: "9", l: "Diploma branches", bg: "bg-indigo-50", text: "text-indigo-600" },
              ].map((s) => (
                <div key={s.l} className="bg-white p-5 flex items-center gap-4 rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-100">
                  <div className={`w-12 h-12 rounded-xl ${s.bg} ${s.text} flex items-center justify-center`}>
                     <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[18px] font-extrabold text-[#0b1f5e] leading-tight">{s.v}</div>
                    <div className="text-[12px] text-slate-500 font-medium leading-tight">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Principal's Message Card */}
            <div className="bg-gradient-to-br from-[#0b1f5e] to-[#1e3a8a] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9933]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative flex items-start gap-6">
                <div className="w-20 h-24 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden flex-shrink-0 border border-white/20">
                  <img src="https://picsum.photos/seed/gpm-principal-portrait/120/160" alt="Principal" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[12px] font-bold uppercase tracking-wider text-[#FF9933] mb-3">Principal's Message</div>
                  <p className="text-[15px] text-white/90 leading-relaxed italic mb-4">
                    "Technical education must serve the cause of equitable development. At GPM Muzaffarpur, we strive to produce diploma engineers who are not just employable, but who carry forward the tradition of integrity, craftsmanship and nation-building."
                  </p>
                  <div className="text-[14px] font-bold text-white">— Dr. R. K. Thakur</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Notices & Circulars */}
          <aside className="reveal">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden sticky top-4">
              <div className="bg-white px-5 py-4 flex items-center justify-between border-b border-slate-100">
                <h3 className="text-[18px] font-extrabold text-[#0b1f5e] flex items-center gap-2">
                  <span className="bg-amber-50 p-2 rounded-xl text-amber-500"><Icon.Bell className="w-5 h-5" /></span> Notices &amp; Circulars
                </h3>
                <span className="text-[11px] bg-red-50 text-red-500 px-3 py-1 rounded-full font-bold">{notices.filter(n => n.tag === "NEW").length} New</span>
              </div>
              <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto custom-scroll">
                {notices.map((n, i) => (
                  <a key={i} href="#" className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 cursor-pointer">
                    <StatusPill type={n.tag} />
                    <div className="flex-1">
                      <div className="text-[14px] text-[#0b1f5e] font-semibold leading-snug group-hover:text-indigo-600 transition-colors">{n.title}</div>
                      <div className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1.5 font-medium">
                        <Icon.Calendar className="w-3.5 h-3.5" /> {n.date}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="px-5 py-4 bg-slate-50 border-t border-slate-100">
                <a href="#" className="text-[14px] font-bold text-[#0b1f5e] hover:text-indigo-600 transition-colors flex items-center justify-center gap-2 bg-white rounded-full py-2 border border-slate-200 hover:border-indigo-200">
                  View All Notices <Icon.ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ===================== ACADEMIC DEPARTMENTS ===================== */}
      <section className="py-16 bg-white reveal">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-4">
              <Icon.GradCap className="w-3.5 h-3.5" /> Academic Departments
            </div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0b1f5e]" style={{ letterSpacing: "-0.02em" }}>
              Nine disciplines. One mission.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deptCards.map((d) => (
              <article key={d.name} className="group bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer" onClick={() => navigate(`/dept/${d.path}`)}>
                <div className="relative h-52 overflow-hidden rounded-t-3xl">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border border-white/30">Department</div>
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-extrabold text-[#0b1f5e] mb-2 group-hover:text-indigo-600 transition-colors">{d.name}</h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed mb-4">{d.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[14px] font-bold text-indigo-600 group-hover:gap-3 transition-all">
                    Know More <Icon.ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PLACEMENTS SNAPSHOT ===================== */}
      <section className="py-16 bg-slate-50 reveal">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-4">
              <Icon.Award className="w-3.5 h-3.5" /> Placements Snapshot
            </div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0b1f5e]" style={{ letterSpacing: "-0.02em" }}>
              Where our engineers go next.
            </h2>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
            {/* Modern Placement Cards instead of Table */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-[18px] font-extrabold text-[#0b1f5e] mb-6 flex items-center gap-2">
                <span className="bg-indigo-50 p-2 rounded-xl text-indigo-600"><Icon.Award className="w-5 h-5" /></span>
                Placement Records (Last 5 Years)
              </h3>
              <div className="space-y-6">
                {placementData.map((r) => (
                  <div key={r.year} className="grid grid-cols-[100px_1fr_auto] items-center gap-4">
                    <div className="text-[16px] font-bold text-slate-700">{r.year}</div>
                    <div className="w-full">
                      <div className="flex justify-between text-[13px] mb-1.5">
                        <span className="text-slate-500 font-medium">{r.placed} / {r.eligible} placed</span>
                        <span className="font-bold text-emerald-500">{r.percent}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: r.width }}></div>
                      </div>
                    </div>
                    <div className="text-[14px] font-extrabold text-[#FF9933] bg-amber-50 px-3 py-1.5 rounded-lg">{r.ctc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm h-full">
                <h3 className="text-[18px] font-extrabold text-[#0b1f5e] mb-6 flex items-center gap-2">
                  <span className="bg-purple-50 p-2 rounded-xl text-purple-600"><Icon.Briefcase className="w-5 h-5" /></span>
                  Top Recruiters
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {recruiters.map((r) => (
                    <div key={r} className="bg-slate-50 border border-slate-100 px-2 py-4 text-center text-[13px] font-bold text-slate-600 rounded-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors cursor-default">
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        @keyframes gpm-kenburns {
          0% { transform: scale(1.0) translate(0, 0); }
          100% { transform: scale(1.1) translate(-1%, -1%); }
        }
        .gpm-kenburns { animation: gpm-kenburns 15s ease-out forwards; }

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
        
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
  );
}
