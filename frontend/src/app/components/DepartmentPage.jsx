import {
  ArrowLeft,
  Wrench,
  Cpu,
  Zap,
  Radio,
  Settings,
  FlaskConical,
  Atom,
  Globe,
  Scissors,
} from "lucide-react";

const deptData = {
  "dept-civil": {
    title: "Civil Engineering",
    fullTitle: "Department of Civil Engineering",
    icon: <Wrench size={32} />,
    color: "from-amber-500 to-orange-600",
    description:
      "The Civil Engineering department prepares students in the design, construction, and maintenance of infrastructure projects including roads, bridges, dams, and buildings. Our curriculum balances theoretical knowledge with practical skill development.",
    vision:
      "To develop competent civil engineers who contribute to nation-building through sustainable infrastructure development.",
    highlights: [
      "Structural Design",
      "Surveying & Geo-informatics",
      "Transportation Engineering",
      "Environmental Engineering",
    ],
    courses: [
      "Engineering Drawing",
      "Strength of Materials",
      "Fluid Mechanics",
      "Concrete Technology",
      "Highway Engineering",
      "Estimating & Costing",
    ],
    labs: [
      "Survey Lab",
      "Concrete & Material Testing Lab",
      "Soil Mechanics Lab",
      "Hydraulics Lab",
    ],
    hod: "Head of Department",
    seats: 60,
    duration: "3 Years (Diploma)",
    externalUrl: "https://www.gpmuz.ac.in/department/",
  },

  "dept-cse": {
    title: "Computer Science & Engineering",
    fullTitle: "Department of Computer Science & Engineering",
    icon: <Cpu size={32} />,
    color: "from-blue-600 to-indigo-700",
    description:
      "The CSE department is at the forefront of technology education, offering comprehensive training in programming, software development, networking, and emerging technologies like AI, web development, and cloud computing.",
    vision:
      "To produce skilled software professionals capable of innovating and solving real-world problems through technology.",
    highlights: [
      "Programming & Software Dev",
      "Web & Mobile Development",
      "Networking & Cybersecurity",
      "Database Management",
    ],
    courses: [
      "C/C++ Programming",
      "Data Structures",
      "Operating Systems",
      "DBMS",
      "Web Technology",
      "Computer Networks",
      "Python Programming",
    ],
    labs: [
      "Programming Lab",
      "Networking Lab",
      "Web Development Lab",
      "Project Lab",
    ],
    hod: "Head of Department",
    seats: 60,
    duration: "3 Years (Diploma)",
    externalUrl: "https://www.gpmuz.ac.in/department/",
  },

  "dept-electrical": {
    title: "Electrical Engineering",
    fullTitle: "Department of Electrical Engineering",
    icon: <Zap size={32} />,
    color: "from-yellow-500 to-amber-600",
    description:
      "The Electrical Engineering department trains students in electrical circuits, power systems, machines, and control systems. Graduates are equipped to work in power generation, distribution, and industrial automation.",
    vision:
      "To create skilled electrical engineers who drive India's energy and industrial sectors forward.",
    highlights: [
      "Power Systems",
      "Electrical Machines",
      "Control Systems",
      "Industrial Automation",
    ],
    courses: [
      "Basic Electrical Engineering",
      "Electrical Machines",
      "Power Systems",
      "Control Systems",
      "Switchgear & Protection",
      "Utilization of Electrical Energy",
    ],
    labs: [
      "Electrical Machines Lab",
      "Power Electronics Lab",
      "Control Systems Lab",
      "Measurement Lab",
    ],
    hod: "Head of Department",
    seats: 60,
    duration: "3 Years (Diploma)",
    externalUrl: "https://www.gpmuz.ac.in/department/",
  },

  "dept-electronics": {
    title: "Electronics Engineering",
    fullTitle: "Department of Electronics Engineering",
    icon: <Radio size={32} />,
    color: "from-purple-600 to-violet-700",
    description:
      "The Electronics Engineering department covers analog and digital electronics, communication systems, microprocessors, and embedded systems. Students gain hands-on experience with modern electronic components and instruments.",
    vision:
      "To nurture electronics engineers who innovate in communication, embedded systems, and consumer electronics.",
    highlights: [
      "Analog & Digital Electronics",
      "Communication Systems",
      "Embedded Systems",
      "Microprocessors",
    ],
    courses: [
      "Electronic Devices & Circuits",
      "Digital Electronics",
      "Microprocessors",
      "Communication Engineering",
      "Embedded Systems",
      "PCB Design",
    ],
    labs: [
      "Electronics Lab",
      "Digital Lab",
      "Microprocessor Lab",
      "Communication Lab",
    ],
    hod: "Head of Department",
    seats: 60,
    duration: "3 Years (Diploma)",
    externalUrl: "https://www.gpmuz.ac.in/department/",
  },

  "dept-mechanical": {
    title: "Mechanical Engineering",
    fullTitle: "Department of Mechanical Engineering",
    icon: <Settings size={32} />,
    color: "from-slate-600 to-gray-700",
    description:
      "The Mechanical Engineering department provides training in machine design, manufacturing processes, thermodynamics, and fluid mechanics. Students are prepared for roles in manufacturing, automotive, and energy industries.",
    vision:
      "To produce skilled mechanical engineers who excel in design, manufacturing, and maintenance of mechanical systems.",
    highlights: [
      "Machine Design",
      "Manufacturing Technology",
      "Thermodynamics",
      "CAD/CAM",
    ],
    courses: [
      "Engineering Mechanics",
      "Thermodynamics",
      "Machine Design",
      "Manufacturing Processes",
      "CAD/CAM",
      "Industrial Management",
    ],
    labs: [
      "Machine Shop",
      "Fitting Shop",
      "Welding Shop",
      "CAD Lab",
      "Thermodynamics Lab",
    ],
    hod: "Head of Department",
    seats: 60,
    duration: "3 Years (Diploma)",
    externalUrl: "https://www.gpmuz.ac.in/department/",
  },

  "dept-chemistry": {
    title: "Chemistry",
    fullTitle: "Department of Applied Chemistry",
    icon: <FlaskConical size={32} />,
    color: "from-green-600 to-teal-700",
    description:
      "The Chemistry department provides foundational and applied chemistry education supporting all engineering disciplines. It covers organic, inorganic, and physical chemistry with emphasis on industrial applications and environmental chemistry.",
    vision:
      "To build strong chemical fundamentals that empower engineering students to solve industrial and environmental challenges.",
    highlights: [
      "Organic Chemistry",
      "Industrial Chemistry",
      "Environmental Chemistry",
      "Analytical Techniques",
    ],
    courses: [
      "Engineering Chemistry",
      "Industrial Chemistry",
      "Polymer Chemistry",
      "Environmental Science",
      "Analytical Chemistry",
    ],
    labs: ["Chemistry Lab", "Analytical Lab"],
    hod: "Head of Department",
    seats: 0,
    duration: "Support Department",
    externalUrl: "https://www.gpmuz.ac.in/department/",
  },

  "dept-physics": {
    title: "Physics",
    fullTitle: "Department of Applied Physics",
    icon: <Atom size={32} />,
    color: "from-cyan-600 to-blue-700",
    description:
      "The Physics department delivers essential physics education to all engineering students, covering mechanics, optics, electromagnetism, and modern physics. The department strengthens the scientific foundation necessary for engineering excellence.",
    vision:
      "To provide strong physics fundamentals that enable engineering students to understand and innovate in their respective fields.",
    highlights: [
      "Classical Mechanics",
      "Optics & Lasers",
      "Electromagnetism",
      "Modern Physics",
    ],
    courses: [
      "Engineering Physics",
      "Optics",
      "Mechanics",
      "Quantum Physics",
      "Electronics Fundamentals",
    ],
    labs: ["Physics Lab"],
    hod: "Head of Department",
    seats: 0,
    duration: "Support Department",
    externalUrl: "https://www.gpmuz.ac.in/department/",
  },

  "dept-humanities": {
    title: "Humanities",
    fullTitle: "Department of Humanities & Social Sciences",
    icon: <Globe size={32} />,
    color: "from-rose-500 to-pink-600",
    description:
      "The Humanities department enriches the overall education of engineering students by covering communication skills, economics, management principles, and social sciences. It fosters professional and interpersonal competencies.",
    vision:
      "To develop well-rounded engineers with strong communication, ethical values, and managerial skills for the modern workplace.",
    highlights: [
      "Communication Skills",
      "Technical Writing",
      "Engineering Economics",
      "Management Principles",
    ],
    courses: [
      "English Communication",
      "Technical Report Writing",
      "Engineering Economics",
      "Entrepreneurship",
      "Industrial Management",
    ],
    labs: ["Language Lab"],
    hod: "Head of Department",
    seats: 0,
    duration: "Support Department",
    externalUrl: "https://www.gpmuz.ac.in/department/",
  },

  "dept-leather": {
    title: "Leather Technology",
    fullTitle: "Department of Leather Technology",
    icon: <Scissors size={32} />,
    color: "from-orange-700 to-red-800",
    description:
      "The Leather Technology department is a unique and specialized program training students in leather processing, product design, and quality control. Bihar's rich leather industry makes this a highly relevant and career-oriented discipline.",
    vision:
      "To produce skilled leather technologists who drive innovation and quality in India's growing leather and footwear industry.",
    highlights: [
      "Leather Processing",
      "Footwear Design",
      "Quality Control",
      "Industrial Tanning",
    ],
    courses: [
      "Leather Science",
      "Tanning Technology",
      "Footwear Design & Manufacturing",
      "Quality Assurance",
      "Environmental Management in Tanneries",
    ],
    labs: [
      "Tanning Lab",
      "Footwear Manufacturing Lab",
      "Testing & Quality Lab",
    ],
    hod: "Head of Department",
    seats: 30,
    duration: "3 Years (Diploma)",
    externalUrl: "https://www.gpmuz.ac.in/department/",
  },
};



const DepartmentPage = ({ deptId, onNavigate }) => {
  const dept = deptData[deptId];

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl text-gray-500">Department not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <div
        className={`bg-gradient-to-r ${dept.color} text-white pt-28 pb-16 px-6 relative`}
      >
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 mb-6 hover:text-gray-200"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              {dept.icon}
            </div>

            <div>
              <p className="uppercase text-sm tracking-wider text-white/80">
                Government Polytechnic Muzaffarpur
              </p>

              <h1 className="text-4xl font-bold">{dept.title}</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
              {dept.seats} Seats
            </span>

            <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
              {dept.duration}
            </span>

            <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
              BTEUP Affiliated
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid lg:grid-cols-3 gap-8">
        {/* Left */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-3">
              About the Department
            </h2>
            <p className="text-gray-700">{dept.description}</p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-3">Vision</h2>
            <p className="text-gray-700">{dept.vision}</p>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-3">
              Department Highlights
            </h2>

            <ul className="list-disc ml-5 space-y-2">
              {dept.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-3">Courses</h2>

            <ul className="list-disc ml-5 space-y-2">
              {dept.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>

          {/* Labs */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-3">Laboratories</h2>

            <ul className="list-disc ml-5 space-y-2">
              {dept.labs.map((lab, index) => (
                <li key={index}>{lab}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">
              Department Information
            </h3>

            <p>
              <strong>HOD:</strong> {dept.hod}
            </p>

            <p className="mt-2">
              <strong>Seats:</strong> {dept.seats}
            </p>

            <p className="mt-2">
              <strong>Duration:</strong> {dept.duration}
            </p>

            <a
              href={dept.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Visit Department
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentPage;