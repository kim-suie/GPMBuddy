import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import collegeimage from "../../imports/clg.jpg";

/* ---------- Tiny inline SVG icons ---------- */
const Icon = {
  Phone: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>),
  Mail: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>),
  Login: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>),
  ArrowRight: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>),
  Calendar: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /></svg>),
  BookOpen: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>),
  Award: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>),
  Users: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
  Briefcase: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>),
  Building: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M19 21V9a2 2 0 0 0-2-2M9 7h2M9 11h2M9 15h2" /></svg>),
  GradCap: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" /></svg>),
  Bell: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>),
  Sparkles: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/></svg>),
};

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
    { tag: "NEW", title: "Admission notification for Diploma 1st Year 2025-26", date: "12 Jun 2025" },
    { tag: "NEW", title: "Internal assessment exam schedule for even semester", date: "10 Jun 2025" },
    { tag: "IMP", title: "SBTE Bihar revised academic calendar published", date: "08 Jun 2025" },
    { tag: "IMP", title: "Industrial visit to BHEL Patna for Mech students", date: "05 Jun 2025" },
    { tag: "OLD", title: "World Environment Day pledge — plantation drive", date: "03 Jun 2025" },
    { tag: "OLD", title: "Sports meet winners list — annual athletics", date: "28 May 2025" },
  ];

  const deptCards = [
    { name: "Civil Engineering", path: "dept-civil", img: "https://picsum.photos/seed/gpm-dept-civil/600/400" },
    { name: "Computer Science", path: "dept-cse", img: "https://picsum.photos/seed/gpm-dept-cse/600/400" },
    { name: "Electrical Engg", path: "dept-electrical", img: "https://picsum.photos/seed/gpm-dept-elec/600/400" },
    { name: "Electronics Engg", path: "dept-electronics", img: "https://picsum.photos/seed/gpm-dept-ece/600/400" },
    { name: "Mechanical Engg", path: "dept-mechanical", img: "https://picsum.photos/seed/gpm-dept-mech/600/400" },
    { name: "Leather Technology", path: "dept-leather", img: "https://picsum.photos/seed/gpm-dept-leather/600/400" },
  ];

  const placementData = [
    { year: "2024-25", percent: 91, ctc: "₹8.4 LPA" },
    { year: "2023-24", percent: 88, ctc: "₹7.8 LPA" },
    { year: "2022-23", percent: 85, ctc: "₹7.2 LPA" },
    { year: "2021-22", percent: 82, ctc: "₹6.5 LPA" },
  ];

  const recruiters = ["TCS", "Infosys", "L&T", "Bajaj", "Mahindra", "ITC", "Tata Motors", "Sail", "BSNL", "BEL", "Wipro", "Capgemini"];

  return (
    <div className="bg-[#F4F4F0] text-[#0F2A29] font-display" style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
      
      {/* ===================== IMMERSIVE EDITORIAL HERO ===================== */}
      <section className="relative min-h-[90vh] overflow-hidden border-b-4 border-[#0F2A29]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src={collegeimage} alt="Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A29] via-[#0F2A29]/80 to-[#0F2A29]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A29] via-transparent to-transparent"></div>
        </div>

        {/* Floating Marquee Top Right */}
        <div className="absolute top-8 right-0 bg-[#FF6B35] text-white py-2 pl-8 pr-16 flex items-center gap-4 rounded-l-full shadow-lg border-l-2 border-y-2 border-[#0F2A29]">
          <Icon.Sparkles className="w-5 h-5 flex-shrink-0" />
          <span className="text-[13px] font-bold uppercase tracking-widest whitespace-nowrap">Admissions Open 2025-26</span>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-[1320px] mx-auto px-6 sm:px-10 h-[90vh] flex flex-col justify-end pb-20">
          
          {/* Large Typography */}
          <div className="max-w-4xl mb-10 gpm-fadeup">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#2EC4B6] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] gpm-pulse"></span>
              Government Polytechnic Muzaffarpur
            </div>
            <h1 className="text-[44px] sm:text-[80px] lg:text-[100px] font-bold text-white leading-[0.9] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Shaping <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FFB627]">Engineers</span> of <br />
              Bihar Since 1949
            </h1>
          </div>

          {/* Bottom Bar: CTAs & Stats */}
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate("/academics")} className="group bg-[#FF6B35] text-white px-7 py-3.5 rounded-full text-[14px] font-bold hover:bg-[#0F2A29] border-2 border-[#0F2A29] transition-all hover:scale-105 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(15,42,41,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                Apply for Admission <Icon.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => navigate("/placements")} className="bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full text-[14px] font-bold hover:bg-white hover:text-[#0F2A29] border-2 border-white/20 transition-all">
                View Placements 
              </button>
            </div>
            <div className="hidden lg:flex justify-end gap-8 text-white">
              <div className="border-l-2 border-[#FF6B35] pl-4">
                <div className="text-[32px] font-bold leading-none">9</div>
                <div className="text-[11px] uppercase tracking-wider text-white/60 mt-1">Diploma Branches</div>
              </div>
              <div className="border-l-2 border-[#FF6B35] pl-4">
                <div className="text-[32px] font-bold leading-none">28 acres</div>
                <div className="text-[11px] uppercase tracking-wider text-white/60 mt-1">Green Campus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BENTO GRID ABOUT & NOTICES ===================== */}
      <main id="main" className="max-w-[1320px] mx-auto px-6 sm:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 reveal">
          
          {/* Card 1: Principal's Message (Wide) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border-2 border-[#0F2A29] shadow-[8px_8px_0px_0px_rgba(15,42,41,1)] hover:shadow-[12px_12px_0px_0px_rgba(15,42,41,1)] transition-all duration-300 flex flex-col">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B35] mb-4 flex items-center gap-2">
              <Icon.Sparkles className="w-4 h-4" /> Principal's Message
            </div>
            <p className="text-[18px] text-[#0F2A29] leading-relaxed flex-grow italic mb-6">
              "Technical education must serve the cause of equitable development. At GPM Muzaffarpur, we strive to produce diploma engineers who are not just employable, but who carry forward the tradition of integrity, craftsmanship and nation-building."
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
              <img src="https://picsum.photos/seed/gpm-principal-portrait/120/120" alt="Principal" className="w-14 h-14 object-cover rounded-full border-2 border-[#0F2A29]" />
              <div>
                <div className="text-[16px] font-bold text-[#0F2A29]">Dr. R. K. Thakur</div>
                <div className="text-[12px] text-slate-500 font-medium">Principal, GPM</div>
              </div>
            </div>
          </div>

          {/* Card 2: Notices (Tall) */}
          <div className="lg:col-span-1 lg:row-span-2 bg-[#0F2A29] rounded-3xl p-6 border-2 border-[#0F2A29] shadow-[8px_8px_0px_0px_rgba(255,107,53,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,107,53,1)] transition-all flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[18px] font-bold text-white">Notices</h3>
              <span className="text-[10px] bg-[#FF6B35] text-white px-2 py-1 rounded-full font-bold">{notices.length} New</span>
            </div>
            <div className="space-y-4 flex-grow overflow-y-auto custom-scroll pr-2 max-h-[400px] lg:max-h-none">
              {notices.map((n, i) => (
                <a key={i} href="#" className="block group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`px-2 py-0.5 text-[9px] font-bold rounded-md ${n.tag === 'NEW' ? 'bg-[#FF6B35] text-white' : 'bg-white/10 text-[#2EC4B6]'}`}>{n.tag}</span>
                    <span className="text-[10px] text-white/40 flex items-center gap-1"><Icon.Calendar className="w-3 h-3" /> {n.date}</span>
                  </div>
                  <div className="text-[13px] text-white/80 font-medium leading-snug group-hover:text-[#FF6B35] transition-colors">{n.title}</div>
                </a>
              ))}
            </div>
            <a href="#" className="mt-6 text-[12px] font-bold text-[#2EC4B6] hover:text-[#FF6B35] flex items-center gap-1 transition-colors">
              View All Notices <Icon.ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Admissions CTA */}
          <div className="lg:col-span-1 bg-[#FF6B35] rounded-3xl p-6 border-2 border-[#0F2A29] shadow-[8px_8px_0px_0px_rgba(15,42,41,1)] hover:shadow-[12px_12px_0px_0px_rgba(15,42,41,1)] transition-all flex flex-col justify-between min-h-[180px]">
            <Icon.GradCap className="w-8 h-8 text-[#0F2A29] mb-4" />
            <div>
              <div className="text-[20px] font-bold text-[#0F2A29] leading-tight mb-2">Explore Academic Departments</div>
              <button onClick={() => navigate("/academics")} className="text-[12px] font-bold text-[#0F2A29] flex items-center gap-1 hover:gap-2 transition-all">
                Get Started <Icon.ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 4: Stats */}
          <div className="lg:col-span-1 bg-[#2EC4B6] rounded-3xl p-6 border-2 border-[#0F2A29] shadow-[8px_8px_0px_0px_rgba(15,42,41,1)] hover:shadow-[12px_12px_0px_0px_rgba(15,42,41,1)] transition-all flex items-center justify-between">
            <div>
              <div className="text-[36px] font-bold text-[#0F2A29] leading-none">85%+</div>
              <div className="text-[12px] text-[#0F2A29]/70 font-bold uppercase mt-1">Placement Rate</div>
            </div>
            <Icon.Briefcase className="w-10 h-10 text-[#0F2A29]" />
          </div>
        </div>
      </main>

      {/* ===================== DEPARTMENTS (HOVER GRID) ===================== */}
      <section className="py-20 bg-[#0F2A29] reveal border-y-2 border-[#0F2A29]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#2EC4B6] mb-3">Academic Departments</div>
              <h2 className="text-[32px] sm:text-[48px] font-bold text-white leading-none" style={{ letterSpacing: "-0.02em" }}>
                Nine disciplines.<br />One mission.
              </h2>
            </div>
            <p className="max-w-sm text-[14px] text-white/60 leading-relaxed">
              Discover cutting-edge labs, experienced faculty, and industry-aligned curriculum across our diverse engineering departments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {deptCards.map((d, i) => (
              <article 
                key={d.name} 
                className="group relative h-[260px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                onClick={() => navigate(`/dept/${d.path}`)}
              >
                <img src={d.img} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A29] via-[#0F2A29]/40 to-transparent transition-opacity group-hover:opacity-80"></div>
                
                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-[14px] font-bold text-white">
                  0{i + 1}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-[20px] font-bold text-white mb-1">{d.name}</h3>
                  <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                    <span className="inline-flex items-center gap-2 text-[12px] font-bold text-[#FF6B35] mt-2">
                      Know More <Icon.ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PLACEMENTS DASHBOARD ===================== */}
      <section className="py-20 bg-[#F4F4F0] reveal">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0F2A29] text-[#2EC4B6] px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
              <Icon.Award className="w-3.5 h-3.5" /> Placements Snapshot
            </div>
            <h2 className="text-[32px] sm:text-[48px] font-bold text-[#0F2A29] leading-none" style={{ letterSpacing: "-0.02em" }}>
              Where our engineers go next.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Placement Donut Chart Visualization */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#0F2A29] shadow-[8px_8px_0px_0px_rgba(15,42,41,1)]">
              <h3 className="text-[18px] font-bold text-[#0F2A29] mb-8">Placement Records (Last 4 Years)</h3>
              <div className="space-y-6">
                {placementData.map((r) => (
                  <div key={r.year} className="flex items-center gap-4 group cursor-default">
                    <div className="w-12 text-[14px] font-bold text-slate-600">{r.year}</div>
                    {/* Progress Ring */}
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E5E7EB" strokeWidth="3"></circle>
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#FF6B35" strokeWidth="3" strokeDasharray={`${r.percent}, 100`} strokeLinecap="round" className="transition-all duration-1000 group-hover:stroke-[#0F2A29]"></circle>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#0F2A29]">{r.percent}%</div>
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#2EC4B6] to-[#FF6B35] rounded-full transition-all duration-1000" style={{ width: `${r.percent}%` }}></div>
                      </div>
                    </div>
                    <div className="w-16 text-right text-[14px] font-bold text-[#0F2A29]">{r.ctc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recruiters Grid */}
            <div className="bg-[#FF6B35] rounded-3xl p-8 border-2 border-[#0F2A29] shadow-[8px_8px_0px_0px_rgba(15,42,41,1)] flex flex-col">
              <h3 className="text-[18px] font-bold text-[#0F2A29] mb-8 flex items-center gap-2">
                <Icon.Briefcase className="w-5 h-5" /> Top Recruiters
              </h3>
              <div className="grid grid-cols-3 gap-3 flex-grow">
                {recruiters.map((r, i) => (
                  <div 
                    key={r} 
                    className={`flex items-center justify-center text-center p-4 rounded-xl border-2 border-[#0F2A29] transition-all cursor-default
                    ${i % 2 === 0 ? 'bg-[#F4F4F0] hover:bg-[#2EC4B6] hover:text-white' : 'bg-white hover:bg-[#0F2A29] hover:text-white'}`}
                  >
                    <span className="text-[14px] font-bold text-[#0F2A29] group-hover:text-white">{r}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full bg-[#0F2A29] text-white py-3 rounded-full text-[13px] font-bold hover:bg-white hover:text-[#0F2A29] border-2 border-[#0F2A29] transition-colors">
                View Detailed Placement Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STYLES (keyframes + reveal) ============ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        @keyframes gpm-fadeup {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .gpm-fadeup { animation: gpm-fadeup 1s cubic-bezier(.2,.7,.2,1) both; }

        @keyframes gpm-pulse {
          0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7); }
          50% { transform: scale(1.2); opacity: 0.8; box-shadow: 0 0 0 8px rgba(255, 107, 53, 0); }
        }
        .gpm-pulse { animation: gpm-pulse 1.5s ease-in-out infinite; }

        html { scroll-behavior: smooth; }
        
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #FF6B35; border-radius: 10px; }
      `}</style>
    </div>
  );
}