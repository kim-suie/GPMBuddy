import { useParams, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Users,
  FlaskConical,
  BookOpen,
  Target,
  Eye,
  Phone,
  Mail,
  ArrowRight,
  Cpu,
  Building2,
  Wrench,
  CircuitBoard,
  FlaskRound,
  Atom,
  BookMarked,
  Hand,
  FileText,
  Link2,
} from "lucide-react";

const departmentsData = {
  "dept-civil": {
    name: "Civil Engineering",
    hindiName: "सिविल अभियांत्रिकी विभाग",
    icon: Building2,
    established: "1958",
    intake: "60",
    desc: "The Civil Engineering department is the cornerstone of infrastructure development. It deals with the design, construction, and maintenance of physical and naturally built environments including roads, bridges, canals, dams, and buildings.",
    vision: "To produce highly competent civil diploma engineers equipped with sustainable construction practices and modern surveying techniques.",
    mission: "To impart strong foundations in structural engineering, surveying, and construction management through extensive fieldwork and laboratory testing.",
    hod: {
      name: "Er. R. K. Mishra",
      msg: "Civil engineering is about shaping the world around us. We emphasize practical surveying, material testing, and modern construction management to make our students industry-ready.",
      img: "https://picsum.photos/seed/gpm-hod-civil/300/400",
    },
    labs: [
      { name: "Surveying Lab", desc: "Theodolites, total stations, auto levels, and GPS surveying equipment." },
      { name: "Material Testing Lab", desc: "Universal testing machine, concrete compressive strength, and aggregate testing." },
      { name: "Hydraulics & Fluid Mechanics Lab", desc: "Flow measurement, open channel flume, and centrifugal pump test rigs." },
      { name: "Highway Material Lab", desc: "Bitumen testing, Marshall stability, and pavement design tools." },
      { name: "Geotechnical Engineering Lab", desc: "Soil classification, compaction, and shear strength testing." },
      { name: "CAD Lab", desc: "AutoCAD, STAAD Pro, and BIM software for structural drafting." },
    ],
    faculty: [
      { name: "Er. A. K. Singh", role: "Lecturer (Selection Grade)", exp: "14 Years" },
      { name: "Mr. B. K. Pandey", role: "Lecturer", exp: "9 Years" },
      { name: "Mrs. S. Kumari", role: "Lecturer", exp: "7 Years" },
    ],
  },
  "dept-cse": {
    name: "Computer Science & Engineering",
    hindiName: "कंप्यूटर विज्ञान एवं अभियांत्रिकी विभाग",
    icon: Cpu,
    established: "1999",
    intake: "60",
    desc: "The Department of Computer Science & Engineering at GPM is dedicated to producing diploma engineers equipped with foundational and advanced knowledge in computing, software development, and systems architecture.",
    vision: "To be a center of excellence in computer science education, producing innovative and ethical technocrats who can meet the global challenges of the IT industry.",
    mission: "To impart quality technical education through state-of-the-art laboratories, industry-aligned curriculum, and project-based learning to foster problem-solving skills.",
    hod: {
      name: "Dr. A. K. Sharma",
      msg: "Our focus is on bridging the gap between theoretical concepts and practical applications. We emphasize coding skills, software engineering principles, and emerging technologies like AI and IoT.",
      img: "https://picsum.photos/seed/gpm-hod-cse/300/400",
    },
    labs: [
      { name: "Programming Lab (C/C++)", desc: "Fundamentals of structured and object-oriented programming." },
      { name: "DBMS & Oracle Lab", desc: "Database design, SQL queries, and backend management." },
      { name: "Computer Network Lab", desc: "Routing, switching, and network topology simulation." },
      { name: "Web Development Lab", desc: "HTML, CSS, JavaScript, and modern full-stack frameworks." },
      { name: "Hardware & Microprocessor Lab", desc: "Assembly language and microcontroller architecture." },
      { name: "Project & IoT Lab", desc: "Hands-on projects integrating sensors, cloud, and automation." },
    ],
    faculty: [
      { name: "Mr. R. K. Verma", role: "Lecturer (Selection Grade)", exp: "12 Years" },
      { name: "Mrs. S. Singh", role: "Lecturer", exp: "8 Years" },
      { name: "Mr. A. Kumar", role: "Lecturer", exp: "6 Years" },
    ],
  },
  "dept-electrical": {
    name: "Electrical Engineering",
    hindiName: "विद्युत अभियांत्रिकी विभाग",
    icon: CircuitBoard,
    established: "1962",
    intake: "60",
    desc: "The Electrical Engineering department focuses on the study and application of electricity, electronics, and electromagnetism. It covers power generation, transmission, distribution, and utilization of electrical energy.",
    vision: "To produce skilled diploma electrical engineers capable of meeting the growing demands of the power sector and renewable energy industries.",
    mission: "To provide a strong foundation in electrical machines, power systems, and control systems through rigorous practical training and industrial exposure.",
    hod: {
      name: "Er. S. N. Verma",
      msg: "Electricity is the lifeblood of modern civilization. We train our students to handle power systems safely, efficiently, and with a deep understanding of modern smart grid technologies.",
      img: "https://picsum.photos/seed/gpm-hod-elec/300/400",
    },
    labs: [
      { name: "Electrical Machine Lab", desc: "Transformers, DC motors, induction motors, and alternators testing." },
      { name: "Power System Lab", desc: "Relays, circuit breakers, and transmission line simulation." },
      { name: "Electrical Measurement Lab", desc: "Bridges, CRO, digital multimeters, and transducers." },
      { name: "Control System Lab", desc: "DC position control, AC servo motor, and PID controllers." },
      { name: "Power Electronics Lab", desc: "Rectifiers, inverters, choppers, and SCR control circuits." },
      { name: "Wiring & Winding Lab", desc: "Domestic wiring, panel design, and machine winding practices." },
    ],
    faculty: [
      { name: "Er. D. K. Singh", role: "Lecturer (Selection Grade)", exp: "16 Years" },
      { name: "Mr. P. R. Gupta", role: "Lecturer", exp: "11 Years" },
      { name: "Mrs. R. Kumari", role: "Lecturer", exp: "5 Years" },
    ],
  },
  "dept-electronics": {
    name: "Electronics Engineering",
    hindiName: "इलेक्ट्रॉनिक्स अभियांत्रिकी विभाग",
    icon: CircuitBoard,
    established: "1985",
    intake: "60",
    desc: "The Electronics Engineering department deals with the design and application of electronic circuits, microcontrollers, and communication systems. It is at the heart of modern automation and connectivity.",
    vision: "To produce highly skilled diploma engineers in electronics and communication who can contribute to the rapidly evolving electronics industry.",
    mission: "To provide a strong foundation in analog and digital electronics, embedded systems, and communication engineering through modern laboratories and projects.",
    hod: {
      name: "Er. A. K. Jha",
      msg: "Electronics is shaping the future. From embedded systems to IoT, we ensure our students are proficient in both hardware design and software programming.",
      img: "https://picsum.photos/seed/gpm-hod-ece/300/400",
    },
    labs: [
      { name: "Analog Electronics Lab", desc: "Op-amps, oscillators, and amplifier circuit design." },
      { name: "Digital Electronics Lab", desc: "Logic gates, flip-flops, counters, and shift registers." },
      { name: "Microprocessor & Microcontroller Lab", desc: "8085, 8051, and Arduino programming and interfacing." },
      { name: "Communication Lab", desc: "AM/FM modulation, PCM, TDM, and fiber optic communication." },
      { name: "Consumer Electronics Lab", desc: "Television, radio, and home appliance circuit analysis." },
      { name: "PCB Design Lab", desc: "Circuit layout, etching, and soldering practices." },
    ],
    faculty: [
      { name: "Mr. M. K. Prasad", role: "Lecturer (Selection Grade)", exp: "13 Years" },
      { name: "Mrs. N. Sharma", role: "Lecturer", exp: "9 Years" },
      { name: "Er. V. Kumar", role: "Lecturer", exp: "4 Years" },
    ],
  },
  "dept-mechanical": {
    name: "Mechanical Engineering",
    hindiName: "यांत्रिक अभियांत्रिकी विभाग",
    icon: Wrench,
    established: "1955",
    intake: "60",
    desc: "One of the oldest departments at GPM, Mechanical Engineering deals with the design, manufacturing, and maintenance of mechanical systems, blending traditional workshop practices with modern CAD/CAM technologies.",
    vision: "To produce skilled mechanical diploma engineers capable of contributing to industrial growth and sustainable manufacturing practices.",
    mission: "To provide a strong foundation in mechanical principles through rigorous workshop training, industrial visits, and exposure to modern manufacturing technology.",
    hod: {
      name: "Er. S. N. Pandey",
      msg: "Mechanical engineering is the backbone of any industrial infrastructure. We ensure our students are shop-floor ready with extensive hands-on training in our workshops and CAD labs.",
      img: "https://picsum.photos/seed/gpm-hod-mech/300/400",
    },
    labs: [
      { name: "Thermal Engineering Lab", desc: "Boilers, IC engines, and refrigeration cycles testing." },
      { name: "Machine Shop", desc: "Lathes, milling machines, and CNC operations." },
      { name: "CAD/CAM Lab", desc: "AutoCAD, SolidWorks, and CNC programming simulation." },
      { name: "Hydraulics & Pneumatics Lab", desc: "Fluid mechanics and control systems." },
      { name: "Material Testing Lab", desc: "Universal testing machine and metallography." },
      { name: "Foundry & Welding Shop", desc: "Casting processes and arc/gas welding." },
    ],
    faculty: [
      { name: "Er. D. K. Mishra", role: "Lecturer (Selection Grade)", exp: "15 Years" },
      { name: "Mr. P. Thakur", role: "Lecturer", exp: "10 Years" },
      { name: "Er. N. Gupta", role: "Lecturer", exp: "5 Years" },
    ],
  },
  "dept-chemistry": {
    name: "Chemistry (Applied Sciences)",
    hindiName: "रसायन विज्ञान विभाग",
    icon: FlaskRound,
    established: "1949",
    intake: "N/A",
    desc: "The Department of Chemistry provides fundamental science education to engineering students. It focuses on the chemical properties of materials used in construction, manufacturing, and electronics, along with environmental chemistry.",
    vision: "To build a strong scientific foundation for engineering students, enabling them to apply chemical principles in their respective technical domains.",
    mission: "To impart knowledge of material chemistry, water treatment, and polymer science through modern laboratory practices and research-oriented teaching.",
    hod: {
      name: "Dr. R. P. Singh",
      msg: "Chemistry is the foundation of all material sciences. We ensure our engineering students understand the properties and reactions of the materials they will use in the field.",
      img: "https://picsum.photos/seed/gpm-hod-chem/300/400",
    },
    labs: [
      { name: "Analytical Chemistry Lab", desc: "Titration, pH measurement, and gravimetric analysis." },
      { name: "Material Testing Lab", desc: "Water quality, solid fuel, and lubricant testing." },
      { name: "Polymer Chemistry Lab", desc: "Synthesis and property analysis of polymers and plastics." },
      { name: "Electrochemistry Lab", desc: "Conductivity, potentiometry, and corrosion testing." },
    ],
    faculty: [
      { name: "Dr. A. Pandey", role: "Assistant Professor", exp: "10 Years" },
      { name: "Mrs. K. Kumari", role: "Lecturer", exp: "7 Years" },
      { name: "Mr. R. Sharma", role: "Lecturer", exp: "5 Years" },
    ],
  },
  "dept-physics": {
    name: "Physics (Applied Sciences)",
    hindiName: "भौतिकी विभाग",
    icon: Atom,
    established: "1949",
    intake: "N/A",
    desc: "The Department of Physics imparts fundamental knowledge of matter, energy, and their interactions. It lays the groundwork for understanding electronics, optics, thermodynamics, and material science.",
    vision: "To cultivate a scientific temperament and strong analytical thinking among engineering students through the study of applied physics.",
    mission: "To provide conceptual understanding of physical principles and their practical applications in engineering and technology.",
    hod: {
      name: "Dr. S. K. Jha",
      msg: "Physics explains the 'why' and 'how' of engineering. We ensure our students develop a rigorous scientific approach to problem-solving.",
      img: "https://picsum.photos/seed/gpm-hod-phy/300/400",
    },
    labs: [
      { name: "Optics Lab", desc: "Lasers, interferometry, and diffraction experiments." },
      { name: "Electronics Lab", desc: "Diodes, transistors, and basic circuit analysis." },
      { name: "Thermal Physics Lab", desc: "Thermal conductivity, Stefan's law, and heat measurement." },
      { name: "Mechanics & Acoustics Lab", desc: "Vibration analysis, sound velocity, and Young's modulus." },
    ],
    faculty: [
      { name: "Dr. V. K. Singh", role: "Assistant Professor", exp: "12 Years" },
      { name: "Mr. A. K. Verma", role: "Lecturer", exp: "8 Years" },
      { name: "Mrs. S. Pandey", role: "Lecturer", exp: "6 Years" },
    ],
  },
  "dept-humanities": {
    name: "Humanities & Management",
    hindiName: "मानविकी एवं प्रबंधन विभाग",
    icon: BookMarked,
    established: "1949",
    intake: "N/A",
    desc: "The Department of Humanities focuses on communication skills, ethics, and management principles. It plays a vital role in the holistic development of students, preparing them for industry interactions and leadership roles.",
    vision: "To nurture well-rounded professionals equipped with excellent communication, interpersonal, and managerial skills.",
    mission: "To enhance English communication, soft skills, and management aptitude to complement technical education.",
    hod: {
      name: "Dr. Mrs. A. Singh",
      msg: "Technical skills are essential, but communication and management skills are what make a technologist a leader. We focus on the holistic development of our students.",
      img: "https://picsum.photos/seed/gpm-hod-hum/300/400",
    },
    labs: [
      { name: "Language Lab", desc: "Audio-visual aids for pronunciation, group discussion, and interview skills." },
      { name: "Soft Skills Lab", desc: "Personality development, teamwork, and leadership activities." },
      { name: "Management Lab", desc: "Case studies on industrial management and entrepreneurship." },
    ],
    faculty: [
      { name: "Mrs. R. Kumari", role: "Lecturer", exp: "15 Years" },
      { name: "Mr. P. Sharma", role: "Lecturer", exp: "9 Years" },
      { name: "Miss N. Verma", role: "Lecturer", exp: "4 Years" },
    ],
  },
  "dept-leather": {
    name: "Leather Technology",
    hindiName: "चर्म प्रौद्योगिकी विभाग",
    icon: Hand,
    established: "1992",
    intake: "40",
    desc: "Muzaffarpur is a historic hub for the leather industry. The Department of Leather Technology provides specialized education in leather processing, footwear design, and quality control, serving a vital sector of the local economy.",
    vision: "To produce highly skilled leather technologists who can innovate in leather processing, footwear design, and sustainable waste management.",
    mission: "To impart comprehensive knowledge of raw hide processing, tanning, leather chemicals, and footwear manufacturing through industry-aligned practicals.",
    hod: {
      name: "Er. D. N. Mahto",
      msg: "Leather technology is a highly specialized and lucrative field. We provide hands-on training in tanning and footwear manufacturing to meet the demands of the global leather industry.",
      img: "https://picsum.photos/seed/gpm-hod-leather/300/400",
    },
    labs: [
      { name: "Tannery Lab", desc: "Pre-tanning, tanning, and post-tanning processes of hides and skins." },
      { name: "Leather Chemicals Lab", desc: "Analysis of chromium, vegetable tannins, and syntans." },
      { name: "Footwear Design Lab", desc: "Pattern making, clicking, and shoe manufacturing machines." },
      { name: "Leather Testing Lab", desc: "Tensile strength, flex endurance, and color fastness testing." },
      { name: "Waste Management Lab", desc: "Effluent treatment and eco-friendly leather processing." },
    ],
    faculty: [
      { name: "Mr. S. K. Paswan", role: "Lecturer (Selection Grade)", exp: "18 Years" },
      { name: "Mrs. K. Singh", role: "Lecturer", exp: "10 Years" },
      { name: "Er. R. Kumar", role: "Lecturer", exp: "6 Years" },
    ],
  },
};

export default function DepartmentPage() {
  // FIXED: Get deptId directly from the URL parameter using React Router
  const { deptId } = useParams();
  const navigate = useNavigate();

  // Fallback to CSE if the parameter is somehow missing, otherwise use the correct data
  const data = departmentsData[deptId] || departmentsData["dept-cse"];
  const DeptIcon = data.icon || Building2;

  // Helper for routing
  const onNavigate = (path) => {
    if (path === "home") {
      navigate("/");
    } else if (path.startsWith("dept-")) {
      navigate(`/dept/${path}`);
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <div className="bg-[#f6f3ea] text-[#0b1f5e] font-roboto min-h-screen" style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Tiro+Devanagari+Hindi&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ===================== HEADER ===================== */}
      <section className="bg-[#0b1f5e] text-white border-b-4 border-[#FF9933]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center gap-2 text-[12px] text-white/60 mb-6">
            <button onClick={() => onNavigate("home")} className="hover:text-[#FF9933] transition-colors">Home</button>
            <span>›</span>
            <button onClick={() => onNavigate("academics")} className="hover:text-[#FF9933] transition-colors">Academics</button>
            <span>›</span>
            <span className="text-[#FF9933] font-medium">{data.name}</span>
          </div>
          
          <div className="flex items-center gap-5 border-l-4 border-[#FF9933] pl-5">
            <div className="w-16 h-16 flex items-center justify-center text-[#FF9933] border border-[#FF9933]/30 bg-white/5">
              <DeptIcon className="w-9 h-9" />
            </div>
            <div>
              <h1 className="text-[26px] sm:text-[32px] font-bold leading-tight uppercase tracking-wide">
                {data.name}
              </h1>
              <p className="text-[16px] text-white/80 mt-1" style={{ fontFamily: "'Tiro Devanagari Hindi', sans-serif" }}>
                {data.hindiName}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS STRIP ===================== */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4">
          {[
            { icon: GraduationCap, label: "Established", val: data.established },
            { icon: Users, label: "Intake Capacity", val: data.intake.includes("N/A") ? "Core Branch" : data.intake + " Seats" },
            { icon: FlaskConical, label: "Laboratories", val: data.labs.length + " Labs" },
            { icon: BookOpen, label: "Program", val: "Diploma" },
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
          
          {/* About Section */}
          <section className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">About the Department</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-[14px] leading-relaxed text-justify">{data.desc}</p>
            </div>
            
            {/* Vision & Mission inside About Box */}
            <div className="grid md:grid-cols-2 border-t border-gray-200 divide-x divide-gray-200">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  <Eye className="w-5 h-5 text-[#138808]" />
                  <h3 className="text-[14px] font-bold text-[#0b1f5e] uppercase">Vision</h3>
                </div>
                <p className="text-[13px] text-gray-600 leading-relaxed text-justify">{data.vision}</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  <Target className="w-5 h-5 text-[#FF9933]" />
                  <h3 className="text-[14px] font-bold text-[#0b1f5e] uppercase">Mission</h3>
                </div>
                <p className="text-[13px] text-gray-600 leading-relaxed text-justify">{data.mission}</p>
              </div>
            </div>
          </section>

          {/* Labs Section */}
          <section className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">Laboratories & Facilities</h2>
            </div>
            <div className="grid md:grid-cols-2 divide-x divide-gray-200">
              {data.labs.map((lab, i) => (
                <div key={i} className={`p-5 border-b border-gray-200 ${i % 2 !== 0 ? "" : "md:border-r"}`}>
                  <h3 className="text-[14px] font-bold text-[#0b1f5e] mb-1.5">{lab.name}</h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{lab.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Faculty Section (Table) */}
          <section className="bg-white border border-gray-200 overflow-hidden">
            <div className="bg-[#0b1f5e] text-white px-5 py-3 border-b border-gray-200 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#FF9933]" />
              <h2 className="text-[15px] font-bold uppercase tracking-wider">Faculty Members</h2>
            </div>
            <table className="w-full text-sm border-collapse">
              <thead className="bg-[#f6f3ea] text-[#0b1f5e] border-b border-gray-200">
                <tr>
                  <th className="text-left p-3 font-semibold border-r border-gray-200 w-12">S.No.</th>
                  <th className="text-left p-3 font-semibold border-r border-gray-200">Name</th>
                  <th className="text-left p-3 font-semibold border-r border-gray-200">Designation</th>
                  <th className="text-left p-3 font-semibold">Experience</th>
                </tr>
              </thead>
              <tbody>
                {data.faculty.map((f, i) => (
                  <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="p-3 border-r border-gray-200 text-gray-500 font-medium">{i + 1}.</td>
                    <td className="p-3 border-r border-gray-200 font-medium text-[#0b1f5e]">{f.name}</td>
                    <td className="p-3 border-r border-gray-200 text-gray-700">{f.role}</td>
                    <td className="p-3 text-gray-700">{f.exp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>

        {/* ----------- RIGHT SIDEBAR ----------- */}
        <aside className="space-y-6">
          
          {/* HOD Profile Box */}
          <div className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#FF9933]" />
              <h3 className="text-[14px] font-bold uppercase tracking-wider">Head of Department</h3>
            </div>
            <div className="p-5">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-32 h-40 border-2 border-gray-200 p-1 mb-3">
                  <img src={data.hod.img} alt={data.hod.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[16px] font-bold text-[#0b1f5e]">{data.hod.name}</h4>
                <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider mt-1">Professor & HOD</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-[13px] text-gray-700 leading-relaxed text-justify italic">
                  "{data.hod.msg}"
                </p>
              </div>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF9933]" />
              <h3 className="text-[14px] font-bold uppercase tracking-wider">Contact Info</h3>
            </div>
            <div className="p-5 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-gray-700">
                <Building2 className="w-4 h-4 text-[#FF9933] flex-shrink-0 mt-0.5" />
                <span>Government Polytechnic, Muzaffarpur, Bihar 842002</span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <Mail className="w-4 h-4 text-[#FF9933] flex-shrink-0 mt-0.5" />
                <span>dept@gpmuzaffarpur.ac.in</span>
              </div>
            </div>
            <div className="border-t border-gray-200 p-4">
              <button onClick={() => onNavigate("home")} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0b1f5e] text-white text-[13px] font-semibold hover:bg-[#FF9933] hover:text-[#0b1f5e] transition-colors uppercase tracking-wider">
                Back to Home <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Important Links Box */}
          <div className="bg-white border border-gray-200">
            <div className="bg-[#0b1f5e] text-white px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <Link2 className="w-4 h-4 text-[#FF9933]" />
              <h3 className="text-[14px] font-bold uppercase tracking-wider">Quick Links</h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {["Syllabus", "Time Table", "Previous Papers", "Faculty List", "Notice Board"].map((l) => (
                <li key={l}>
                  <a href="#" className="flex items-center gap-2 p-3 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-[#0b1f5e] transition-colors">
                    <span className="text-[#FF9933]">›</span> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>
    </div>
  );
}