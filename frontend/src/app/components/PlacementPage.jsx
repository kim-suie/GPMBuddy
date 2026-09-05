import { Briefcase, TrendingUp, Award, Users, CheckCircle2, FileText, Download, ArrowRight, Phone, Mail, Globe } from "lucide-react";

export default function PlacementPage() {
  const placementData = [
    { year: "2023-24", eligible: 280, placed: 245, percent: "87.5%", highest: "₹6.5 LPA" },
    { year: "2022-23", eligible: 265, placed: 230, percent: "86.8%", highest: "₹6.0 LPA" },
    { year: "2021-22", eligible: 250, placed: 210, percent: "84.0%", highest: "₹5.5 LPA" },
    { year: "2020-21", eligible: 240, placed: 195, percent: "81.2%", highest: "₹5.0 LPA" },
    { year: "2019-20", eligible: 230, placed: 180, percent: "78.2%", highest: "₹4.5 LPA" },
  ];

  const topRecruiters = [
    "TCS", "Infosys", "L&T", "Bajaj Electricals", "Midha Steel", "SKF India",
    "Crompton Greaves", "Tata Motors", "Jamna Auto", "Indo Asian Fusegear", "Havells", "Schneider Electric"
  ];

  const trainingPrograms = [
    { title: "Aptitude & Logical Reasoning", desc: "Intensive modules covering quantitative aptitude, logical reasoning, and data interpretation to prepare students for standardized placement tests." },
    { title: "Technical Skill Development", desc: "Branch-specific technical training focusing on core engineering concepts, coding practices, and latest industry tools required by recruiters." },
    { title: "Soft Skills & Communication", desc: "Workshops on verbal communication, group discussions, presentation skills, and professional email etiquette to ensure corporate readiness." },
    { title: "Mock Interviews & GD Sessions", desc: "Simulated interview environments and group discussion rounds conducted by industry experts and alumni to build confidence." },
  ];

  const tnpCellFeatures = [
    "Dedicated Training & Placement (T&P) Cell working round the year.",
    "Industry-Institute Interaction cell to bridge the gap between curriculum and industry needs.",
    "Pre-placement talks (PPTs) by leading companies on campus.",
    "Summer internships and industrial visits organized every semester.",
    "Career counseling and guidance for higher studies and entrepreneurship.",
    "100% assistance in resume building and portfolio creation.",
  ];

  return (
    <div className="bg-[#f6f3ea] text-[#0b1f5e] font-roboto min-h-screen" style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Tiro+Devanagari+Hindi&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ===================== HERO HEADER ===================== */}
      <section className="bg-[#0b1f5e] text-white border-b-4 border-[#FF9933]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-2 text-[12px] text-white/60 mb-6">
            <span>Home</span>
            <span>›</span>
            <span className="text-[#FF9933] font-medium">Training & Placement</span>
          </div>
          
          <div className="flex items-center gap-5 border-l-4 border-[#FF9933] pl-5">
            <div className="w-16 h-16 flex items-center justify-center text-[#FF9933] border border-[#FF9933]/30 bg-white/5">
              <Briefcase className="w-9 h-9" />
            </div>
            <div>
              <h1 className="text-[26px] sm:text-[32px] font-bold leading-tight uppercase tracking-wide">
                Training & Placement Cell
              </h1>
              <p className="text-[16px] text-white/80 mt-1" style={{ fontFamily: "'Tiro Devanagari Hindi', sans-serif" }}>
                प्रशिक्षण एवं नियोजन प्रकोष्ठ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUICK STATS ===================== */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4">
          {[
            { icon: Users, label: "Students Trained", val: "1200+" },
            { icon: Award, label: "Highest Package", val: "₹6.5 LPA" },
            { icon: TrendingUp, label: "Avg. Placement Rate", val: "85%+" },
            { icon: Briefcase, label: "Top Recruiters Visited", val: "50+" },
          ].map((s, i) => (
            <div
              key={i}
              className={`p-4 flex items-center gap-3 ${i !== 3 ? "md:border-r border-gray-200" : ""} ${i % 2 === 0 ? "border-r border-gray-200" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
            >
              <s.icon className="w-6 h-6 text-[#0b1f5e] flex-shrink-0" />
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">{s.label}</div>
                <div className="text-[16px] font-bold text-[#0b1f5e] leading-none mt-1">{s.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== MAIN LAYOUT ===================== */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-8 grid lg:grid-cols-[1fr_320px] gap-8">
        
        {/* ----------- LEFT MAIN CONTENT ----------- */}
        <main className="space-y-8">
          
          {/* About T&P Cell */}
          <section className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">About the Cell</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-[14px] leading-relaxed text-justify mb-4">
                The Training and Placement Cell at Government Polytechnic, Muzaffarpur is a dedicated body that acts as a bridge between the diploma engineering students and the corporate/industrial world. The cell is committed to providing the best possible placement opportunities to students across all 9 engineering branches.
              </p>
              <p className="text-gray-700 text-[14px] leading-relaxed text-justify mb-4">
                The primary objective of the T&P Cell is to make the students "Industry-Ready" by conducting rigorous training programs focused on aptitude, technical skills, and soft skills. The cell actively collaborates with corporate houses, PSUs, and leading manufacturing & IT firms to organize campus recruitment drives, industrial visits, and pre-placement talks.
              </p>
              
              <div className="mt-6 grid md:grid-cols-2 gap-x-6 gap-y-2">
                {tnpCellFeatures.map((f, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#138808] flex-shrink-0 mt-1" />
                    <p className="text-[13px] text-gray-700 leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Placement Records Table */}
          <section className="bg-white border border-gray-200 overflow-hidden">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">Placement Records (Last 5 Years)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead className="bg-[#f6f3ea] text-[#0b1f5e] border-b border-gray-200">
                  <tr>
                    <th className="text-left p-3 font-semibold border-r border-gray-200">Academic Year</th>
                    <th className="text-left p-3 font-semibold border-r border-gray-200">Eligible Students</th>
                    <th className="text-left p-3 font-semibold border-r border-gray-200">Students Placed</th>
                    <th className="text-left p-3 font-semibold border-r border-gray-200">Placement %</th>
                    <th className="text-left p-3 font-semibold">Highest Package</th>
                  </tr>
                </thead>
                <tbody>
                  {placementData.map((r, i) => (
                    <tr key={r.year} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="p-3 border-r border-gray-200 font-bold text-[#0b1f5e]">{r.year}</td>
                      <td className="p-3 border-r border-gray-200 text-gray-700">{r.eligible}</td>
                      <td className="p-3 border-r border-gray-200 text-gray-700">{r.placed}</td>
                      <td className="p-3 border-r border-gray-200 font-semibold text-[#138808]">{r.percent}</td>
                      <td className="p-3 font-bold text-[#FF9933]">{r.highest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#FFF4E5] p-4 border-t border-[#FF9933]/30 flex items-center justify-between">
              <p className="text-[13px] text-gray-700 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#FF9933]" />
                For detailed branch-wise placement statistics, download the full report.
              </p>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0b1f5e] text-white text-[12px] font-semibold hover:bg-[#0a1a4d] transition-colors">
                <Download className="w-4 h-4" /> Download Report
              </button>
            </div>
          </section>

          {/* Training & Development */}
          <section className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">Training & Development Programs</h2>
            </div>
            <div className="grid md:grid-cols-2 divide-x divide-gray-200">
              {trainingPrograms.map((t, i) => (
                <div key={i} className={`p-5 border-b border-gray-200 ${i % 2 !== 0 ? "" : "md:border-r"}`}>
                  <h3 className="text-[15px] font-bold text-[#0b1f5e] mb-2">{t.title}</h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed text-justify">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Top Recruiters */}
          <section className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">Our Top Recruiters</h2>
            </div>
            <div className="p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {topRecruiters.map((r) => (
                <div key={r} className="border border-gray-200 px-2 py-4 text-center text-[13px] font-bold text-[#0b1f5e] bg-gray-50 hover:bg-[#0b1f5e] hover:text-white transition-colors cursor-default">
                  {r}
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* ----------- RIGHT SIDEBAR ----------- */}
        <aside className="space-y-6">
          
          {/* Highest Package Highlight */}
          <div className="bg-gradient-to-br from-[#FF9933] to-[#ff7a00] text-[#0b1f5e] p-6 rounded-sm shadow-md relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-white/20"></div>
            <div className="relative">
              <div className="text-[11px] font-bold uppercase tracking-wider mb-1">Highest Package 2023-24</div>
              <div className="text-[44px] font-bold leading-none mb-2">₹6.5 <span className="text-[20px]">LPA</span></div>
              <div className="text-[13px] font-medium">Offered by a leading IT/Manufacturing major to a final-year diploma student.</div>
            </div>
          </div>

          {/* Placement Brochure Box */}
          <div className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <Download className="w-4 h-4 text-[#FF9933]" />
              <h3 className="text-[14px] font-bold uppercase tracking-wider">Resources</h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {["Placement Brochure 2024", "Industry Interaction Report", "T&P Cell Newsletter", "Internship Guidelines", "Recruiter Registration Form"].map((l) => (
                <li key={l}>
                  <a href="#" className="flex items-center gap-2 p-3 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-[#0b1f5e] transition-colors">
                    <span className="text-[#FF9933]">›</span> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Box */}
          <div className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF9933]" />
              <h3 className="text-[14px] font-bold uppercase tracking-wider">Placement Cell Contact</h3>
            </div>
            <div className="p-5 space-y-3 text-[13px] text-gray-700">
              <p className="font-bold text-[#0b1f5e]">Training & Placement Officer</p>
              <p>Govt. Polytechnic, Muzaffarpur</p>
              <p className="flex items-start gap-2"><Phone className="w-4 h-4 text-[#FF9933] flex-shrink-0 mt-0.5" /> +91 6212 280 100</p>
              <p className="flex items-start gap-2"><Mail className="w-4 h-4 text-[#FF9933] flex-shrink-0 mt-0.5" /> tnp@gpmuzaffarpur.ac.in</p>
              <p className="flex items-start gap-2"><Globe className="w-4 h-4 text-[#FF9933] flex-shrink-0 mt-0.5" /> training-placement-gpmuz.vercel.app</p>
            </div>
            <div className="border-t border-gray-200 p-4">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0b1f5e] text-white text-[13px] font-semibold hover:bg-[#FF9933] hover:text-[#0b1f5e] transition-colors uppercase tracking-wider">
                Recruiter Login <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}