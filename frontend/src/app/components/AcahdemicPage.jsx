import {
  BookOpen,
  GraduationCap,
  Clock,
  Download,
  CalendarDays,
  ClipboardList,
  Award,
  FileText,
  PenTool,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function AcademicsPage({ onNavigate }) {
  const syllabusData = [
    {
      branch: "Computer Science & Engineering",
      sem1: "Math I, Physics I, CPP, Communication",
      sem2: "Math II, Physics II, OOP, Environment",
      sem3: "DBMS, Data Structure, Digital Electronics",
      sem4: "Computer Networks, Java, Operating Systems",
      sem5: "Web Tech, Software Engg, Microprocessor",
      sem6: "Project Work, Industrial Training, IoT",
    },
    {
      branch: "Mechanical Engineering",
      sem1: "Math I, Physics I, Workshop Practice",
      sem2: "Math II, Engg Drawing, Material Science",
      sem3: "Thermodynamics, Strength of Materials",
      sem4: "Fluid Mechanics, Theory of Machines",
      sem5: "Machine Design, Thermal Engineering",
      sem6: "CAD/CAM, Project Work, Industrial Training",
    },
    {
      branch: "Civil Engineering",
      sem1: "Math I, Physics I, Engg Drawing",
      sem2: "Math II, Physics II, Building Material",
      sem3: "Surveying I, Structural Mechanics",
      sem4: "Surveying II, Geotechnical Engg, Concrete",
      sem5: "Highway Engg, Hydraulics, Water Supply",
      sem6: "Project Work, Estimation, Industrial Training",
    },
    {
      branch: "Electrical Engineering",
      sem1: "Math I, Physics I, Electrical Basics",
      sem2: "Math II, Physics II, Network Theorems",
      sem3: "Electrical Machines I, Measurements",
      sem4: "Electrical Machines II, Power Systems",
      sem5: "Power Electronics, Control Systems",
      sem6: "Project Work, Industrial Training, Switchgears",
    },
  ];

  const calendarData = [
    { month: "July", event: "Commencement of Odd Semester (1st, 3rd, 5th)", date: "15 July 2024" },
    { month: "August", event: "Internal Assessment - I", date: "20 Aug 2024" },
    { month: "September", event: "Internal Assessment - II", date: "25 Sep 2024" },
    { month: "November", event: "SBTE Bihar Odd Semester Examinations", date: "10 Nov 2024" },
    { month: "December", event: "Winter Break & Result Declaration", date: "24 Dec 2024" },
    { month: "January", event: "Commencement of Even Semester (2nd, 4th, 6th)", date: "02 Jan 2025" },
    { month: "May", event: "SBTE Bihar Even Semester Examinations", date: "15 May 2025" },
  ];

  const gradingSystem = [
    { range: "90 - 100", grade: "O", points: "10", status: "Outstanding" },
    { range: "80 - 89", grade: "A+", points: "9", status: "Excellent" },
    { range: "70 - 79", grade: "A", points: "8", status: "Very Good" },
    { range: "60 - 69", grade: "B+", points: "7", status: "Good" },
    { range: "50 - 59", grade: "B", points: "6", status: "Above Average" },
    { range: "40 - 49", grade: "C", points: "5", status: "Pass" },
    { range: "Below 40", grade: "F", points: "0", status: "Fail" },
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
            <button onClick={() => onNavigate("home")} className="hover:text-[#FF9933] transition-colors">Home</button>
            <span>›</span>
            <span className="text-[#FF9933] font-medium">Academics</span>
          </div>
          
          <div className="flex items-center gap-5 border-l-4 border-[#FF9933] pl-5">
            <div className="w-16 h-16 flex items-center justify-center text-[#FF9933] border border-[#FF9933]/30 bg-white/5">
              <BookOpen className="w-9 h-9" />
            </div>
            <div>
              <h1 className="text-[26px] sm:text-[32px] font-bold leading-tight uppercase tracking-wide">
                Academics & Curriculum
              </h1>
              <p className="text-[16px] text-white/80 mt-1" style={{ fontFamily: "'Tiro Devanagari Hindi', sans-serif" }}>
                शैक्षणिक विभाग और पाठ्यक्रम
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUICK STATS ===================== */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4">
          {[
            { icon: Clock, label: "Program Duration", val: "3 Years" },
            { icon: GraduationCap, label: "Semester System", val: "6 Semesters" },
            { icon: Award, label: "Affiliated To", val: "SBTE Bihar" },
            { icon: CheckCircle2, label: "Approvals", val: "AICTE & Govt." },
          ].map((s, i) => (
            <div
              key={i}
              className={`p-4 flex items-center gap-3 ${i !== 3 ? "md:border-r border-gray-200" : ""} ${i % 2 === 0 ? "border-r border-gray-200" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
            >
              <s.icon className="w-6 h-6 text-[#0b1f5e] flex-shrink-0" />
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">{s.label}</div>
                <div className="text-[15px] font-bold text-[#0b1f5e] leading-none mt-1">{s.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== MAIN LAYOUT ===================== */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-8 grid lg:grid-cols-[1fr_320px] gap-8">
        
        {/* ----------- LEFT MAIN CONTENT ----------- */}
        <main className="space-y-8">
          
          {/* Admission & Eligibility */}
          <section className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <PenTool className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">Admission Process & Eligibility</h2>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[16px] font-bold text-[#0b1f5e] mb-3 border-b border-gray-200 pb-2">Eligibility Criteria</h3>
                <ul className="space-y-2 text-[14px] text-gray-700 text-justify">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#138808] flex-shrink-0 mt-1" /> Passed 10th (Matriculation) from a recognized board.</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#138808] flex-shrink-0 mt-1" /> Minimum 35% marks in 10th board examination.</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#138808] flex-shrink-0 mt-1" /> Medical fitness certificate as per norms.</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#138808] flex-shrink-0 mt-1" /> Must qualify the Diploma Certificate Entrance Competitive Examination (DCECE) conducted by BCECEB.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#0b1f5e] mb-3 border-b border-gray-200 pb-2">Reservation Policy</h3>
                <p className="text-[14px] text-gray-700 text-justify mb-4">
                  Reservations are strictly followed as per the Government of Bihar norms:
                </p>
                <div className="space-y-1.5 text-[13px] font-medium text-gray-700">
                  <div className="flex justify-between bg-[#f6f3ea] px-3 py-1.5"><span>EWS (Economically Weaker Section)</span><span className="text-[#0b1f5e]">10%</span></div>
                  <div className="flex justify-between bg-[#f6f3ea] px-3 py-1.5"><span>SC (Scheduled Castes)</span><span className="text-[#0b1f5e]">16%</span></div>
                  <div className="flex justify-between bg-[#f6f3ea] px-3 py-1.5"><span>ST (Scheduled Tribes)</span><span className="text-[#0b1f5e]">1%</span></div>
                  <div className="flex justify-between bg-[#f6f3ea] px-3 py-1.5"><span>OBC (Backward Classes)</span><span className="text-[#0b1f5e]">12%</span></div>
                  <div className="flex justify-between bg-[#f6f3ea] px-3 py-1.5"><span>BC (Extremely Backward)</span><span className="text-[#0b1f5e]">18%</span></div>
                  <div className="flex justify-between bg-[#f6f3ea] px-3 py-1.5"><span>Women (Horizontal)</span><span className="text-[#0b1f5e]">3%</span></div>
                  <div className="flex justify-between bg-[#f6f3ea] px-3 py-1.5"><span>Disabled Quota</span><span className="text-[#0b1f5e]">3%</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* Syllabus Table */}
          <section className="bg-white border border-gray-200 overflow-hidden">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">Syllabus & Curriculum Structure</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead className="bg-[#f6f3ea] text-[#0b1f5e] border-b border-gray-200">
                  <tr>
                    <th className="text-left p-3 font-semibold border-r border-gray-200 sticky left-0 bg-[#f6f3ea]">Branch</th>
                    <th className="text-left p-3 font-semibold border-r border-gray-200">Semester 1 & 2</th>
                    <th className="text-left p-3 font-semibold border-r border-gray-200">Semester 3</th>
                    <th className="text-left p-3 font-semibold border-r border-gray-200">Semester 4</th>
                    <th className="text-left p-3 font-semibold border-r border-gray-200">Semester 5</th>
                    <th className="text-left p-3 font-semibold">Semester 6</th>
                  </tr>
                </thead>
                <tbody>
                  {syllabusData.map((row, i) => (
                    <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="p-3 border-r border-gray-200 font-bold text-[#0b1f5e] bg-white sticky left-0">{row.branch}</td>
                      <td className="p-3 border-r border-gray-200 text-gray-700">{row.sem1}</td>
                      <td className="p-3 border-r border-gray-200 text-gray-700">{row.sem3}</td>
                      <td className="p-3 border-r border-gray-200 text-gray-700">{row.sem4}</td>
                      <td className="p-3 border-r border-gray-200 text-gray-700">{row.sem5}</td>
                      <td className="p-3 text-gray-700">{row.sem6}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#FFF4E5] p-4 border-t border-[#FF9933]/30 flex items-center justify-between">
              <p className="text-[13px] text-gray-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#FF9933]" />
                For detailed subject-wise syllabus, download the complete PDF.
              </p>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0b1f5e] text-white text-[12px] font-semibold hover:bg-[#0a1a4d] transition-colors">
                <Download className="w-4 h-4" /> Download Full Syllabus
              </button>
            </div>
          </section>

          {/* Grading System */}
          <section className="bg-white border border-gray-200 overflow-hidden">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">Grading System (As per SBTE Bihar)</h2>
            </div>
            <table className="w-full text-[13px] border-collapse">
              <thead className="bg-[#f6f3ea] text-[#0b1f5e] border-b border-gray-200">
                <tr>
                  <th className="text-left p-3 font-semibold border-r border-gray-200">Marks Range (%)</th>
                  <th className="text-left p-3 font-semibold border-r border-gray-200">Grade</th>
                  <th className="text-left p-3 font-semibold border-r border-gray-200">Grade Points</th>
                  <th className="text-left p-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {gradingSystem.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="p-3 border-r border-gray-200 text-gray-700 font-medium">{row.range}</td>
                    <td className="p-3 border-r border-gray-200 text-[#0b1f5e] font-bold text-[16px]">{row.grade}</td>
                    <td className="p-3 border-r border-gray-200 text-gray-700">{row.points}</td>
                    <td className="p-3 text-gray-700">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Academic Calendar */}
          <section className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">Academic Calendar 2024-25</h2>
            </div>
            <ul className="divide-y divide-gray-100">
              {calendarData.map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 flex-shrink-0 flex flex-col items-center justify-center bg-[#f6f3ea] border border-gray-200 text-[#0b1f5e]">
                    <span className="text-[11px] font-bold uppercase">{item.month}</span>
                    <span className="text-[18px] font-extrabold leading-none mt-1">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0b1f5e]">{item.event}</h4>
                    <p className="text-[12px] text-gray-500 mt-0.5">Scheduled Date: {item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

        </main>

        {/* ----------- RIGHT SIDEBAR ----------- */}
        <aside className="space-y-6">
          
          {/* Examination Rules Box */}
          <div className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-[#FF9933]" />
              <h3 className="text-[14px] font-bold uppercase tracking-wider">Examination Rules</h3>
            </div>
            <div className="p-5 text-[13px] text-gray-700 space-y-3">
              <p className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#138808] flex-shrink-0 mt-0.5" /> Minimum 75% attendance required to appear in SBTE exams.</p>
              <p className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#138808] flex-shrink-0 mt-0.5" /> Internal assessment carries 20% marks; External exam carries 80%.</p>
              <p className="flex gap-2"><AlertCircle className="w-4 h-4 text-[#FF9933] flex-shrink-0 mt-0.5" /> Use of unfair means in exams leads to disqualification as per SBTE norms.</p>
            </div>
          </div>

          {/* Academic Resources Box */}
          <div className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#FF9933]" />
              <h3 className="text-[14px] font-bold uppercase tracking-wider">Resources</h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {["SBTE Bihar Official Portal", "AICTE Approvals", "Previous Year Papers", "E-Library & Journals", "Anti-Ragging Undertaking", "Scholarship Schemes"].map((l) => (
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
              <PenTool className="w-4 h-4 text-[#FF9933]" />
              <h3 className="text-[14px] font-bold uppercase tracking-wider">Academic Cell</h3>
            </div>
            <div className="p-5 space-y-3 text-[13px] text-gray-700">
              <p className="font-bold text-[#0b1f5e]">Office of the Academic Registrar</p>
              <p>Government Polytechnic, Muzaffarpur</p>
              <p>Phone: +91 6212 280 042</p>
              <p>Email: academics@gpmuzaffarpur.ac.in</p>
            </div>
            <div className="border-t border-gray-200 p-4">
              <button onClick={() => onNavigate("home")} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0b1f5e] text-white text-[13px] font-semibold hover:bg-[#FF9933] hover:text-[#0b1f5e] transition-colors uppercase tracking-wider">
                Back to Home
              </button>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}