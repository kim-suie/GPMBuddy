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
    NEW: "bg-rose-500/10 text-rose-500 ring-rose-500/20",
    IMP: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
    OLD: "bg-slate-500/10 text-slate-500 ring-slate-500/20",
  };
  return <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full tracking-wider ring-1 ${map[type] || map.OLD}`}>{type}</span>;
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
    <div className="bg-slate-50 text-slate-900 font-jakarta" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 gpm-kenburns" style={{ backgroundImage: `url('${collegeimage}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 gpm-grid-pattern opacity-20"></div>

        {/* Hero Text Content */}
        <div className="relative max-w-[1320px] w-full mx-auto px-4 sm:px-6 py-24 z-10">
          <div className="max-w-3xl text-white gpm-fadeup">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8 bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Admissions Open 2025-26
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] mb-6" style={{ letterSpacing: "-0.03em" }}>
              Shaping the Engineers of <span className="text-emerald-400">Tomorrow.</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed mb-10 max-w-xl">
              Government Polytechnic, Muzaffarpur — a premier technical institution since 1949. Applications invited for diploma programs across nine disciplines.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <button onClick={() => navigate("/academics")} className="group bg-emerald-500 text-white px-8 py-4 rounded-full text-[14px] font-bold hover:bg-emerald-400 transition-all hover:scale-105 shadow-xl shadow-emerald-500/20 flex items-center gap-2">
                Apply for Admission 
                <Icon.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => navigate("/placements")} className="border border-white/20 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-full text-[14px] font-semibold hover:bg-white/10 transition-all">
                View Placements 
              </button>
            </div>

            {/* Floating Glass Stats Card */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {[
                { v: "75+", l: "Years of Legacy" },
                { v: "9", l: "Disciplines" },
                { v: "85%+", l: "Placement Rate" },
                { v: "28", l: "Acres Campus" }
              ].map((s, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-2xl">
                  <div className="text-2xl font-extrabold text-white mb-1">{s.v}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ===================== MAIN CONTENT ===================== */}
      <main id="main" className="max-w-[1320px] mx-auto px-4 sm:px-6 pb-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-10">
          
          {/* Welcome / About */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-5">
              <Icon.Sparkles className="w-3.5 h-3.5" /> Welcome to GPM
            </div>
            <h2 className="text-[32px] sm:text-[44px] font-extrabold text-slate-900 mb-5" style={{ letterSpacing: "-0.02em" }}>
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
                { icon: Icon.Building, v: "28 acres", l: "Campus area", bg: "bg-sky-50", text: "text-sky-600" },
                { icon: Icon.Users, v: "120+", l: "Faculty & staff", bg: "bg-purple-50", text: "text-purple-600" },
                { icon: Icon.BookOpen, v: "35,000+", l: "Library volumes", bg: "bg-emerald-50", text: "text-emerald-600" },
                { icon: Icon.Briefcase, v: "85%+", l: "Avg placement", bg: "bg-amber-50", text: "text-amber-600" },
                { icon: Icon.Award, v: "AICTE", l: "Approved", bg: "bg-rose-50", text: "text-rose-600" },
                { icon: Icon.GradCap, v: "9", l: "Diploma branches", bg: "bg-indigo-50", text: "text-indigo-600" },
              ].map((s) => (
                <div key={s.l} className="bg-white p-5 flex items-center gap-4 rounded-2xl border border-slate-100 transition-all hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl ${s.bg} ${s.text} flex items-center justify-center`}>
                     <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[18px] font-extrabold text-slate-900 leading-tight">{s.v}</div>
                    <div className="text-[12px] text-slate-500 font-medium leading-tight uppercase tracking-wide">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Principal's Message Card */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative flex flex-col sm:flex-row items-start gap-6">
                <div className="w-24 h-28 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden flex-shrink-0 border border-white/10">
                  <img src="https://picsum.photos/seed/gpm-principal-portrait/120/160" alt="Principal" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">Principal's Message</div>
                  <p className="text-[15px] text-slate-300 leading-relaxed italic mb-4 border-l-2 border-emerald-500/50 pl-4">
                    "Technical education must serve the cause of equitable development. At GPM Muzaffarpur, we strive to produce diploma engineers who are not just employable, but who carry forward the tradition of integrity, craftsmanship and nation-building."
                  </p>
                  <div className="text-[14px] font-bold text-white">— Dr. R. K. Thakur</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Notices & Circulars */}
          <aside className="reveal">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50 overflow-hidden lg:sticky lg:top-6">
              <div className="bg-white px-5 py-4 flex items-center justify-between border-b border-slate-100">
                <h3 className="text-[18px] font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="bg-emerald-50 p-2 rounded-xl text-emerald-600"><Icon.Bell className="w-5 h-5" /></span> Notices &amp; Circulars
                </h3>
                <span className="text-[11px] bg-rose-50 text-rose-500 px-3 py-1 rounded-full font-bold">{notices.filter(n => n.tag === "NEW").length} New</span>
              </div>
              <div className="p-4 space-y-2 max-h-[500px] overflow-y-auto custom-scroll">
                {notices.map((n, i) => (
                  <a key={i} href="#" className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 cursor-pointer">
                    <StatusPill type={n.tag} />
                    <div className="flex-1">
                      <div className="text-[14px] text-slate-800 font-semibold leading-snug group-hover:text-emerald-600 transition-colors">{n.title}</div>
                      <div className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1.5 font-medium">
                        <Icon.Calendar className="w-3.5 h-3.5" /> {n.date}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="px-5 py-4 bg-slate-50 border-t border-slate-100">
                <a href="#" className="text-[14px] font-bold text-slate-900 hover:text-emerald-600 transition-colors flex items-center justify-center gap-2 bg-white rounded-full py-2.5 border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50">
                  View All Notices <Icon.ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ===================== ACADEMIC DEPARTMENTS ===================== */}
      <section className="py-20 bg-white reveal">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
              <Icon.GradCap className="w-3.5 h-3.5" /> Academic Departments
            </div>
            <h2 className="text-[32px] sm:text-[44px] font-extrabold text-slate-900 mb-3" style={{ letterSpacing: "-0.02em" }}>
              Nine disciplines. One mission.
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Explore our cutting-edge programs designed to foster innovation and technical excellence.</p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Card */}
            <article className="group relative lg:col-span-2 lg:row-span-2 min-h-[400px] rounded-3xl overflow-hidden cursor-pointer" onClick={() => navigate(`/dept/dept-cse`)}>
              <img src="https://picsum.photos/seed/gpm-dept-cse/800/600" alt="Computer Science" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <span className="bg-emerald-500 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full w-fit mb-4">Featured Department</span>
                <h3 className="text-3xl font-extrabold text-white mb-2">Computer Science & Engg</h3>
                <p className="text-slate-200 max-w-md mb-4">Programming, data structures, DBMS, computer networks, full-stack development with modern labs.</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:gap-3 transition-all">
                  Know More <Icon.ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>

            {/* Smaller Cards */}
            {deptCards.filter(d => d.path !== 'dept-cse').map((d) => (
              <article key={d.name} className="group bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer" onClick={() => navigate(`/dept/${d.path}`)}>
                <div className="relative h-40 overflow-hidden">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-[18px] font-extrabold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{d.name}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-2">{d.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold text-emerald-600 group-hover:gap-3 transition-all">
                    Know More <Icon.ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PLACEMENTS SNAPSHOT ===================== */}
      <section className="py-20 bg-slate-50 reveal">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
              <Icon.Award className="w-3.5 h-3.5" /> Placements Snapshot
            </div>
            <h2 className="text-[32px] sm:text-[44px] font-extrabold text-slate-900 mb-3" style={{ letterSpacing: "-0.02em" }}>
              Where our engineers go next.
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">We take pride in our consistent placement record and strong industry connections.</p>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-[18px] font-extrabold text-slate-900 mb-8 flex items-center gap-2">
                <span className="bg-emerald-50 p-2 rounded-xl text-emerald-600"><Icon.Award className="w-5 h-5" /></span>
                Placement Records (Last 5 Years)
              </h3>
              <div className="space-y-6">
                {placementData.map((r) => (
                  <div key={r.year} className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                    <div className="text-[14px] font-bold text-slate-500">{r.year}</div>
                    <div className="w-full">
                      <div className="flex justify-between text-[12px] mb-1.5">
                        <span className="text-slate-400 font-medium">{r.placed} / {r.eligible} placed</span>
                        <span className="font-bold text-emerald-600">{r.percent}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: r.width }}></div>
                      </div>
                    </div>
                    <div className="text-[13px] font-extrabold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg">{r.ctc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm h-full">
                <h3 className="text-[18px] font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="bg-slate-100 p-2 rounded-xl text-slate-700"><Icon.Briefcase className="w-5 h-5" /></span>
                  Top Recruiters
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {recruiters.map((r) => (
                    <div key={r} className="bg-slate-50 border border-slate-100 px-2 py-4 text-center text-[12px] font-bold text-slate-600 rounded-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors cursor-default">
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
        .gpm-marquee { animation: gpm-marquee 40s linear infinite; will-change: transform; }
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

        .gpm-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}