// // import {
// //   ArrowLeft,
// //   Wrench,
// //   Cpu,
// //   Zap,
// //   Radio,
// //   Settings,
// //   FlaskConical,
// //   Atom,
// //   Globe,
// //   Scissors,
// // } from "lucide-react";

// // const deptData = {
// //   "dept-civil": {
// //     title: "Civil Engineering",
// //     fullTitle: "Department of Civil Engineering",
// //     icon: <Wrench size={32} />,
// //     color: "from-amber-500 to-orange-600",
// //     description:
// //       "The Civil Engineering department prepares students in the design, construction, and maintenance of infrastructure projects including roads, bridges, dams, and buildings. Our curriculum balances theoretical knowledge with practical skill development.",
// //     vision:
// //       "To develop competent civil engineers who contribute to nation-building through sustainable infrastructure development.",
// //     highlights: [
// //       "Structural Design",
// //       "Surveying & Geo-informatics",
// //       "Transportation Engineering",
// //       "Environmental Engineering",
// //     ],
// //     courses: [
// //       "Engineering Drawing",
// //       "Strength of Materials",
// //       "Fluid Mechanics",
// //       "Concrete Technology",
// //       "Highway Engineering",
// //       "Estimating & Costing",
// //     ],
// //     labs: [
// //       "Survey Lab",
// //       "Concrete & Material Testing Lab",
// //       "Soil Mechanics Lab",
// //       "Hydraulics Lab",
// //     ],
// //     hod: "Head of Department",
// //     seats: 60,
// //     duration: "3 Years (Diploma)",
// //     externalUrl: "https://www.gpmuz.ac.in/department/",
// //   },

// //   "dept-cse": {
// //     title: "Computer Science & Engineering",
// //     fullTitle: "Department of Computer Science & Engineering",
// //     icon: <Cpu size={32} />,
// //     color: "from-blue-600 to-indigo-700",
// //     description:
// //       "The CSE department is at the forefront of technology education, offering comprehensive training in programming, software development, networking, and emerging technologies like AI, web development, and cloud computing.",
// //     vision:
// //       "To produce skilled software professionals capable of innovating and solving real-world problems through technology.",
// //     highlights: [
// //       "Programming & Software Dev",
// //       "Web & Mobile Development",
// //       "Networking & Cybersecurity",
// //       "Database Management",
// //     ],
// //     courses: [
// //       "C/C++ Programming",
// //       "Data Structures",
// //       "Operating Systems",
// //       "DBMS",
// //       "Web Technology",
// //       "Computer Networks",
// //       "Python Programming",
// //     ],
// //     labs: [
// //       "Programming Lab",
// //       "Networking Lab",
// //       "Web Development Lab",
// //       "Project Lab",
// //     ],
// //     hod: "Head of Department",
// //     seats: 60,
// //     duration: "3 Years (Diploma)",
// //     externalUrl: "https://www.gpmuz.ac.in/department/",
// //   },

// //   "dept-electrical": {
// //     title: "Electrical Engineering",
// //     fullTitle: "Department of Electrical Engineering",
// //     icon: <Zap size={32} />,
// //     color: "from-yellow-500 to-amber-600",
// //     description:
// //       "The Electrical Engineering department trains students in electrical circuits, power systems, machines, and control systems. Graduates are equipped to work in power generation, distribution, and industrial automation.",
// //     vision:
// //       "To create skilled electrical engineers who drive India's energy and industrial sectors forward.",
// //     highlights: [
// //       "Power Systems",
// //       "Electrical Machines",
// //       "Control Systems",
// //       "Industrial Automation",
// //     ],
// //     courses: [
// //       "Basic Electrical Engineering",
// //       "Electrical Machines",
// //       "Power Systems",
// //       "Control Systems",
// //       "Switchgear & Protection",
// //       "Utilization of Electrical Energy",
// //     ],
// //     labs: [
// //       "Electrical Machines Lab",
// //       "Power Electronics Lab",
// //       "Control Systems Lab",
// //       "Measurement Lab",
// //     ],
// //     hod: "Head of Department",
// //     seats: 60,
// //     duration: "3 Years (Diploma)",
// //     externalUrl: "https://www.gpmuz.ac.in/department/",
// //   },

// //   "dept-electronics": {
// //     title: "Electronics Engineering",
// //     fullTitle: "Department of Electronics Engineering",
// //     icon: <Radio size={32} />,
// //     color: "from-purple-600 to-violet-700",
// //     description:
// //       "The Electronics Engineering department covers analog and digital electronics, communication systems, microprocessors, and embedded systems. Students gain hands-on experience with modern electronic components and instruments.",
// //     vision:
// //       "To nurture electronics engineers who innovate in communication, embedded systems, and consumer electronics.",
// //     highlights: [
// //       "Analog & Digital Electronics",
// //       "Communication Systems",
// //       "Embedded Systems",
// //       "Microprocessors",
// //     ],
// //     courses: [
// //       "Electronic Devices & Circuits",
// //       "Digital Electronics",
// //       "Microprocessors",
// //       "Communication Engineering",
// //       "Embedded Systems",
// //       "PCB Design",
// //     ],
// //     labs: [
// //       "Electronics Lab",
// //       "Digital Lab",
// //       "Microprocessor Lab",
// //       "Communication Lab",
// //     ],
// //     hod: "Head of Department",
// //     seats: 60,
// //     duration: "3 Years (Diploma)",
// //     externalUrl: "https://www.gpmuz.ac.in/department/",
// //   },

// //   "dept-mechanical": {
// //     title: "Mechanical Engineering",
// //     fullTitle: "Department of Mechanical Engineering",
// //     icon: <Settings size={32} />,
// //     color: "from-slate-600 to-gray-700",
// //     description:
// //       "The Mechanical Engineering department provides training in machine design, manufacturing processes, thermodynamics, and fluid mechanics. Students are prepared for roles in manufacturing, automotive, and energy industries.",
// //     vision:
// //       "To produce skilled mechanical engineers who excel in design, manufacturing, and maintenance of mechanical systems.",
// //     highlights: [
// //       "Machine Design",
// //       "Manufacturing Technology",
// //       "Thermodynamics",
// //       "CAD/CAM",
// //     ],
// //     courses: [
// //       "Engineering Mechanics",
// //       "Thermodynamics",
// //       "Machine Design",
// //       "Manufacturing Processes",
// //       "CAD/CAM",
// //       "Industrial Management",
// //     ],
// //     labs: [
// //       "Machine Shop",
// //       "Fitting Shop",
// //       "Welding Shop",
// //       "CAD Lab",
// //       "Thermodynamics Lab",
// //     ],
// //     hod: "Head of Department",
// //     seats: 60,
// //     duration: "3 Years (Diploma)",
// //     externalUrl: "https://www.gpmuz.ac.in/department/",
// //   },

// //   "dept-chemistry": {
// //     title: "Chemistry",
// //     fullTitle: "Department of Applied Chemistry",
// //     icon: <FlaskConical size={32} />,
// //     color: "from-green-600 to-teal-700",
// //     description:
// //       "The Chemistry department provides foundational and applied chemistry education supporting all engineering disciplines. It covers organic, inorganic, and physical chemistry with emphasis on industrial applications and environmental chemistry.",
// //     vision:
// //       "To build strong chemical fundamentals that empower engineering students to solve industrial and environmental challenges.",
// //     highlights: [
// //       "Organic Chemistry",
// //       "Industrial Chemistry",
// //       "Environmental Chemistry",
// //       "Analytical Techniques",
// //     ],
// //     courses: [
// //       "Engineering Chemistry",
// //       "Industrial Chemistry",
// //       "Polymer Chemistry",
// //       "Environmental Science",
// //       "Analytical Chemistry",
// //     ],
// //     labs: ["Chemistry Lab", "Analytical Lab"],
// //     hod: "Head of Department",
// //     seats: 0,
// //     duration: "Support Department",
// //     externalUrl: "https://www.gpmuz.ac.in/department/",
// //   },

// //   "dept-physics": {
// //     title: "Physics",
// //     fullTitle: "Department of Applied Physics",
// //     icon: <Atom size={32} />,
// //     color: "from-cyan-600 to-blue-700",
// //     description:
// //       "The Physics department delivers essential physics education to all engineering students, covering mechanics, optics, electromagnetism, and modern physics. The department strengthens the scientific foundation necessary for engineering excellence.",
// //     vision:
// //       "To provide strong physics fundamentals that enable engineering students to understand and innovate in their respective fields.",
// //     highlights: [
// //       "Classical Mechanics",
// //       "Optics & Lasers",
// //       "Electromagnetism",
// //       "Modern Physics",
// //     ],
// //     courses: [
// //       "Engineering Physics",
// //       "Optics",
// //       "Mechanics",
// //       "Quantum Physics",
// //       "Electronics Fundamentals",
// //     ],
// //     labs: ["Physics Lab"],
// //     hod: "Head of Department",
// //     seats: 0,
// //     duration: "Support Department",
// //     externalUrl: "https://www.gpmuz.ac.in/department/",
// //   },

// //   "dept-humanities": {
// //     title: "Humanities",
// //     fullTitle: "Department of Humanities & Social Sciences",
// //     icon: <Globe size={32} />,
// //     color: "from-rose-500 to-pink-600",
// //     description:
// //       "The Humanities department enriches the overall education of engineering students by covering communication skills, economics, management principles, and social sciences. It fosters professional and interpersonal competencies.",
// //     vision:
// //       "To develop well-rounded engineers with strong communication, ethical values, and managerial skills for the modern workplace.",
// //     highlights: [
// //       "Communication Skills",
// //       "Technical Writing",
// //       "Engineering Economics",
// //       "Management Principles",
// //     ],
// //     courses: [
// //       "English Communication",
// //       "Technical Report Writing",
// //       "Engineering Economics",
// //       "Entrepreneurship",
// //       "Industrial Management",
// //     ],
// //     labs: ["Language Lab"],
// //     hod: "Head of Department",
// //     seats: 0,
// //     duration: "Support Department",
// //     externalUrl: "https://www.gpmuz.ac.in/department/",
// //   },

// //   "dept-leather": {
// //     title: "Leather Technology",
// //     fullTitle: "Department of Leather Technology",
// //     icon: <Scissors size={32} />,
// //     color: "from-orange-700 to-red-800",
// //     description:
// //       "The Leather Technology department is a unique and specialized program training students in leather processing, product design, and quality control. Bihar's rich leather industry makes this a highly relevant and career-oriented discipline.",
// //     vision:
// //       "To produce skilled leather technologists who drive innovation and quality in India's growing leather and footwear industry.",
// //     highlights: [
// //       "Leather Processing",
// //       "Footwear Design",
// //       "Quality Control",
// //       "Industrial Tanning",
// //     ],
// //     courses: [
// //       "Leather Science",
// //       "Tanning Technology",
// //       "Footwear Design & Manufacturing",
// //       "Quality Assurance",
// //       "Environmental Management in Tanneries",
// //     ],
// //     labs: [
// //       "Tanning Lab",
// //       "Footwear Manufacturing Lab",
// //       "Testing & Quality Lab",
// //     ],
// //     hod: "Head of Department",
// //     seats: 30,
// //     duration: "3 Years (Diploma)",
// //     externalUrl: "https://www.gpmuz.ac.in/department/",
// //   },
// // };



// // const DepartmentPage = ({ deptId, onNavigate }) => {
// //   const dept = deptData[deptId];

// //   if (!dept) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <h2 className="text-xl text-gray-500">Department not found</h2>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-slate-100">
// //       {/* Hero Section */}
// //       <div
// //         className={`bg-gradient-to-r ${dept.color} text-white pt-28 pb-16 px-6 relative`}
// //       >
// //         <div className="max-w-6xl mx-auto">
// //           <button
// //             onClick={() => onNavigate("home")}
// //             className="flex items-center gap-2 mb-6 hover:text-gray-200"
// //           >
// //             <ArrowLeft size={18} />
// //             Back to Home
// //           </button>

// //           <div className="flex items-center gap-4">
// //             <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
// //               {dept.icon}
// //             </div>

// //             <div>
// //               <p className="uppercase text-sm tracking-wider text-white/80">
// //                 Government Polytechnic Muzaffarpur
// //               </p>

// //               <h1 className="text-4xl font-bold">{dept.title}</h1>
// //             </div>
// //           </div>

// //           <div className="flex flex-wrap gap-3 mt-6">
// //             <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
// //               {dept.seats} Seats
// //             </span>

// //             <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
// //               {dept.duration}
// //             </span>

// //             <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
// //               BTEUP Affiliated
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Content */}
// //       <div className="max-w-6xl mx-auto py-12 px-6 grid lg:grid-cols-3 gap-8">
// //         {/* Left */}
// //         <div className="lg:col-span-2 space-y-6">
// //           {/* About */}
// //           <div className="bg-white rounded-xl shadow p-6">
// //             <h2 className="text-2xl font-semibold mb-3">
// //               About the Department
// //             </h2>
// //             <p className="text-gray-700">{dept.description}</p>
// //           </div>

// //           {/* Vision */}
// //           <div className="bg-white rounded-xl shadow p-6">
// //             <h2 className="text-2xl font-semibold mb-3">Vision</h2>
// //             <p className="text-gray-700">{dept.vision}</p>
// //           </div>

// //           {/* Highlights */}
// //           <div className="bg-white rounded-xl shadow p-6">
// //             <h2 className="text-2xl font-semibold mb-3">
// //               Department Highlights
// //             </h2>

// //             <ul className="list-disc ml-5 space-y-2">
// //               {dept.highlights.map((item, index) => (
// //                 <li key={index}>{item}</li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Courses */}
// //           <div className="bg-white rounded-xl shadow p-6">
// //             <h2 className="text-2xl font-semibold mb-3">Courses</h2>

// //             <ul className="list-disc ml-5 space-y-2">
// //               {dept.courses.map((course, index) => (
// //                 <li key={index}>{course}</li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Labs */}
// //           <div className="bg-white rounded-xl shadow p-6">
// //             <h2 className="text-2xl font-semibold mb-3">Laboratories</h2>

// //             <ul className="list-disc ml-5 space-y-2">
// //               {dept.labs.map((lab, index) => (
// //                 <li key={index}>{lab}</li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Right Sidebar */}
// //         <div className="space-y-6">
// //           <div className="bg-white rounded-xl shadow p-6">
// //             <h3 className="text-xl font-semibold mb-4">
// //               Department Information
// //             </h3>

// //             <p>
// //               <strong>HOD:</strong> {dept.hod}
// //             </p>

// //             <p className="mt-2">
// //               <strong>Seats:</strong> {dept.seats}
// //             </p>

// //             <p className="mt-2">
// //               <strong>Duration:</strong> {dept.duration}
// //             </p>

// //             <a
// //               href={dept.externalUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
// //             >
// //               Visit Department
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


import React from "react";

import {
  ArrowLeft,
  ChevronRight,
  Cpu,
  Users,
  Clock3,
  GraduationCap,
  Landmark,
  UserRound,
  CalendarDays,
  Database,
  Eye,
  Target,
  MonitorCog,
  FlaskConical,
  Network,
  Globe,
  FolderOpen,
  BookOpen,
  MapPin,
  Mail,
  Phone,
  Wrench,
  Zap,
  Radio,
  Settings,
  Atom,
  Scissors,
} from "lucide-react";

/* =========================================================
   DEPARTMENT DATA
========================================================= */

const deptData = {
  "dept-civil": {
    title: "Civil Engineering",
    fullTitle: "Department of Civil Engineering",
    icon: Wrench,

    description:
      "The Civil Engineering department prepares students in the design, construction, and maintenance of infrastructure projects including roads, bridges, dams, and buildings. Our curriculum balances theoretical knowledge with practical skill development.",

    vision:
      "To develop competent civil engineers who contribute to nation-building through sustainable infrastructure development.",

    mission: [
      "Provide strong fundamentals in civil engineering.",
      "Develop practical engineering and problem-solving skills.",
      "Encourage project-based and laboratory-based learning.",
      "Promote professional ethics, teamwork and lifelong learning.",
    ],

    highlights: [
      {
        icon: Wrench,
        title: "Structural Design",
        description: "Training in modern structural design techniques.",
        box: "bg-blue-50 text-blue-600",
      },
      {
        icon: MapPin,
        title: "Surveying",
        description: "Practical surveying and geo-informatics skills.",
        box: "bg-violet-50 text-violet-600",
      },
      {
        icon: Globe,
        title: "Transportation",
        description: "Study of transportation and highway engineering.",
        box: "bg-orange-50 text-orange-500",
      },
      {
        icon: FlaskConical,
        title: "Environmental",
        description: "Sustainable and environmentally responsible engineering.",
        box: "bg-emerald-50 text-emerald-600",
      },
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
      {
        icon: Wrench,
        title: "Survey",
        subtitle: "Lab",
      },
      {
        icon: FlaskConical,
        title: "Concrete",
        subtitle: "Lab",
      },
      {
        icon: MonitorCog,
        title: "Soil Mechanics",
        subtitle: "Lab",
      },
      {
        icon: Network,
        title: "Hydraulics",
        subtitle: "Lab",
      },
    ],

    seats: 60,
    duration: "3 Years",
    program: "Diploma",
    affiliation: "BTEUP",

    hod: "Head of Department",
    established: "2010",

    email: "civil@gpm.ac.in",
    phone: "+91 98765 43210",

    location: "Academic Block - I",
    room: "Room No. 205",
  },

  "dept-cse": {
    title: "Computer Science & Engineering",
    fullTitle: "Department of Computer Science & Engineering",
    icon: Cpu,

    description:
      "The Department of Computer Science & Engineering provides students with strong foundations in computing, programming, data structures, databases, operating systems, networking, web technologies and emerging areas of computer science. The department emphasizes hands-on learning through modern laboratories, industry-oriented projects and technical activities.",

    vision:
      "To develop technically skilled and responsible professionals with the knowledge and practical abilities required to contribute effectively to the field of computing and technology.",

    mission: [
      "Provide strong fundamentals in computer science and engineering.",
      "Develop practical programming and problem-solving skills.",
      "Encourage project-based and laboratory-based learning.",
      "Promote professional ethics, teamwork and lifelong learning.",
    ],

    highlights: [
      {
        icon: MonitorCog,
        title: "Industry Oriented Curriculum",
        description:
          "Updated curriculum aligned with industry requirements.",
        box: "bg-blue-50 text-blue-600",
      },
      {
        icon: FlaskConical,
        title: "Modern Laboratories",
        description:
          "Well-equipped labs for practical and hands-on learning.",
        box: "bg-violet-50 text-violet-600",
      },
      {
        icon: Users,
        title: "Project Based Learning",
        description:
          "Encouraging innovation through mini and major projects.",
        box: "bg-orange-50 text-orange-500",
      },
      {
        icon: Target,
        title: "Skill Development",
        description:
          "Workshops, seminars and training for overall skill enhancement.",
        box: "bg-emerald-50 text-emerald-600",
      },
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
      {
        icon: MonitorCog,
        title: "Programming",
        subtitle: "Lab",
      },
      {
        icon: Network,
        title: "Networking",
        subtitle: "Lab",
      },
      {
        icon: Globe,
        title: "Web Development",
        subtitle: "Lab",
      },
      {
        icon: FolderOpen,
        title: "Project",
        subtitle: "Lab",
      },
    ],

    seats: 60,
    duration: "3 Years",
    program: "Diploma",
    affiliation: "BTEUP",

    hod: "Mr. Amit Kumar, Lecturer (CSE)",
    established: "2010",

    email: "cse@gpm.ac.in",
    phone: "+91 98765 43210",

    location: "Academic Block - I",
    room: "Room No. 205",
  },

  "dept-electrical": {
    title: "Electrical Engineering",
    fullTitle: "Department of Electrical Engineering",
    icon: Zap,

    description:
      "The Electrical Engineering department trains students in electrical circuits, power systems, machines, and control systems. Graduates are equipped to work in power generation, distribution, and industrial automation.",

    vision:
      "To create skilled electrical engineers who drive India's energy and industrial sectors forward.",

    mission: [
      "Build strong fundamentals in electrical engineering.",
      "Develop practical electrical and problem-solving skills.",
      "Encourage laboratory and project-based learning.",
      "Prepare students for modern electrical industries.",
    ],

    highlights: [
      {
        icon: Zap,
        title: "Power Systems",
        description: "Power generation, transmission and distribution.",
        box: "bg-yellow-50 text-yellow-600",
      },
      {
        icon: Settings,
        title: "Electrical Machines",
        description: "Practical knowledge of electrical machines.",
        box: "bg-blue-50 text-blue-600",
      },
      {
        icon: Target,
        title: "Control Systems",
        description: "Fundamentals of modern control systems.",
        box: "bg-violet-50 text-violet-600",
      },
      {
        icon: MonitorCog,
        title: "Automation",
        description: "Industrial automation and control technologies.",
        box: "bg-emerald-50 text-emerald-600",
      },
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
      {
        icon: Zap,
        title: "Electrical",
        subtitle: "Machines Lab",
      },
      {
        icon: MonitorCog,
        title: "Power",
        subtitle: "Electronics Lab",
      },
      {
        icon: Target,
        title: "Control",
        subtitle: "Systems Lab",
      },
      {
        icon: FlaskConical,
        title: "Measurement",
        subtitle: "Lab",
      },
    ],

    seats: 60,
    duration: "3 Years",
    program: "Diploma",
    affiliation: "BTEUP",

    hod: "Head of Department",
    established: "2010",

    email: "electrical@gpm.ac.in",
    phone: "+91 98765 43210",

    location: "Academic Block - I",
    room: "Room No. 205",
  },

  "dept-electronics": {
    title: "Electronics Engineering",
    fullTitle: "Department of Electronics Engineering",
    icon: Radio,

    description:
      "The Electronics Engineering department covers analog and digital electronics, communication systems, microprocessors, and embedded systems. Students gain hands-on experience with modern electronic components and instruments.",

    vision:
      "To nurture electronics engineers who innovate in communication, embedded systems, and consumer electronics.",

    mission: [
      "Build strong foundations in electronics engineering.",
      "Develop practical electronics and communication skills.",
      "Encourage embedded and project-based learning.",
      "Prepare students for modern electronics industries.",
    ],

    highlights: [
      {
        icon: Radio,
        title: "Communication",
        description: "Modern communication system fundamentals.",
        box: "bg-blue-50 text-blue-600",
      },
      {
        icon: Cpu,
        title: "Embedded Systems",
        description: "Hands-on embedded system development.",
        box: "bg-violet-50 text-violet-600",
      },
      {
        icon: MonitorCog,
        title: "Digital Electronics",
        description: "Digital circuits and modern electronics.",
        box: "bg-orange-50 text-orange-500",
      },
      {
        icon: Settings,
        title: "Microprocessors",
        description: "Microprocessors and microcontrollers.",
        box: "bg-emerald-50 text-emerald-600",
      },
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
      {
        icon: Radio,
        title: "Electronics",
        subtitle: "Lab",
      },
      {
        icon: Cpu,
        title: "Digital",
        subtitle: "Lab",
      },
      {
        icon: MonitorCog,
        title: "Microprocessor",
        subtitle: "Lab",
      },
      {
        icon: Network,
        title: "Communication",
        subtitle: "Lab",
      },
    ],

    seats: 60,
    duration: "3 Years",
    program: "Diploma",
    affiliation: "BTEUP",

    hod: "Head of Department",
    established: "2010",

    email: "electronics@gpm.ac.in",
    phone: "+91 98765 43210",

    location: "Academic Block - I",
    room: "Room No. 205",
  },

  "dept-mechanical": {
    title: "Mechanical Engineering",
    fullTitle: "Department of Mechanical Engineering",
    icon: Settings,

    description:
      "The Mechanical Engineering department provides training in machine design, manufacturing processes, thermodynamics, and fluid mechanics. Students are prepared for roles in manufacturing, automotive, and energy industries.",

    vision:
      "To produce skilled mechanical engineers who excel in design, manufacturing, and maintenance of mechanical systems.",

    mission: [
      "Develop strong mechanical engineering fundamentals.",
      "Build practical design and manufacturing skills.",
      "Promote project-based learning.",
      "Prepare students for modern manufacturing industries.",
    ],

    highlights: [
      {
        icon: Settings,
        title: "Machine Design",
        description: "Modern machine design and engineering principles.",
        box: "bg-blue-50 text-blue-600",
      },
      {
        icon: Wrench,
        title: "Manufacturing",
        description: "Modern manufacturing processes and techniques.",
        box: "bg-violet-50 text-violet-600",
      },
      {
        icon: FlaskConical,
        title: "Thermodynamics",
        description: "Thermal engineering and energy systems.",
        box: "bg-orange-50 text-orange-500",
      },
      {
        icon: MonitorCog,
        title: "CAD/CAM",
        description: "Computer aided design and manufacturing.",
        box: "bg-emerald-50 text-emerald-600",
      },
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
      {
        icon: Wrench,
        title: "Machine",
        subtitle: "Shop",
      },
      {
        icon: Settings,
        title: "Fitting",
        subtitle: "Shop",
      },
      {
        icon: Wrench,
        title: "Welding",
        subtitle: "Shop",
      },
      {
        icon: MonitorCog,
        title: "CAD",
        subtitle: "Lab",
      },
    ],

    seats: 60,
    duration: "3 Years",
    program: "Diploma",
    affiliation: "BTEUP",

    hod: "Head of Department",
    established: "2010",

    email: "mechanical@gpm.ac.in",
    phone: "+91 98765 43210",

    location: "Academic Block - I",
    room: "Room No. 205",
  },

  "dept-chemistry": {
    title: "Chemistry",
    fullTitle: "Department of Applied Chemistry",
    icon: FlaskConical,

    description:
      "The Chemistry department provides foundational and applied chemistry education supporting all engineering disciplines. It covers organic, inorganic, and physical chemistry with emphasis on industrial applications and environmental chemistry.",

    vision:
      "To build strong chemical fundamentals that empower engineering students to solve industrial and environmental challenges.",

    mission: [
      "Provide strong chemistry fundamentals.",
      "Connect chemistry with engineering applications.",
      "Develop practical laboratory skills.",
      "Promote environmental awareness.",
    ],

    highlights: [
      {
        icon: FlaskConical,
        title: "Organic Chemistry",
        description: "Fundamentals of organic chemistry.",
        box: "bg-green-50 text-green-600",
      },
      {
        icon: FlaskConical,
        title: "Industrial Chemistry",
        description: "Chemistry applications in industry.",
        box: "bg-teal-50 text-teal-600",
      },
      {
        icon: Globe,
        title: "Environmental Chemistry",
        description: "Environmental chemistry and sustainability.",
        box: "bg-blue-50 text-blue-600",
      },
      {
        icon: Target,
        title: "Analytical Techniques",
        description: "Chemical analysis and laboratory techniques.",
        box: "bg-violet-50 text-violet-600",
      },
    ],

    courses: [
      "Engineering Chemistry",
      "Industrial Chemistry",
      "Polymer Chemistry",
      "Environmental Science",
      "Analytical Chemistry",
    ],

    labs: [
      {
        icon: FlaskConical,
        title: "Chemistry",
        subtitle: "Lab",
      },
      {
        icon: FlaskConical,
        title: "Analytical",
        subtitle: "Lab",
      },
    ],

    seats: 0,
    duration: "Support",
    program: "Support Department",
    affiliation: "BTEUP",

    hod: "Head of Department",
    established: "2010",

    email: "chemistry@gpm.ac.in",
    phone: "+91 98765 43210",

    location: "Academic Block - I",
    room: "Room No. 205",
  },

  "dept-physics": {
    title: "Physics",
    fullTitle: "Department of Applied Physics",
    icon: Atom,

    description:
      "The Physics department delivers essential physics education to all engineering students, covering mechanics, optics, electromagnetism, and modern physics. The department strengthens the scientific foundation necessary for engineering excellence.",

    vision:
      "To provide strong physics fundamentals that enable engineering students to understand and innovate in their respective fields.",

    mission: [
      "Provide strong physics fundamentals.",
      "Connect scientific concepts with engineering.",
      "Develop practical laboratory skills.",
      "Encourage scientific thinking and innovation.",
    ],

    highlights: [
      {
        icon: Atom,
        title: "Classical Mechanics",
        description: "Fundamental mechanics for engineering.",
        box: "bg-blue-50 text-blue-600",
      },
      {
        icon: Eye,
        title: "Optics & Lasers",
        description: "Optics and modern laser applications.",
        box: "bg-violet-50 text-violet-600",
      },
      {
        icon: Zap,
        title: "Electromagnetism",
        description: "Electromagnetic principles and applications.",
        box: "bg-orange-50 text-orange-500",
      },
      {
        icon: Cpu,
        title: "Modern Physics",
        description: "Modern physics concepts for engineers.",
        box: "bg-emerald-50 text-emerald-600",
      },
    ],

    courses: [
      "Engineering Physics",
      "Optics",
      "Mechanics",
      "Quantum Physics",
      "Electronics Fundamentals",
    ],

    labs: [
      {
        icon: Atom,
        title: "Physics",
        subtitle: "Lab",
      },
    ],

    seats: 0,
    duration: "Support",
    program: "Support Department",
    affiliation: "BTEUP",

    hod: "Head of Department",
    established: "2010",

    email: "physics@gpm.ac.in",
    phone: "+91 98765 43210",

    location: "Academic Block - I",
    room: "Room No. 205",
  },

  "dept-humanities": {
    title: "Humanities",
    fullTitle: "Department of Humanities & Social Sciences",
    icon: Globe,

    description:
      "The Humanities department enriches the overall education of engineering students by covering communication skills, economics, management principles, and social sciences. It fosters professional and interpersonal competencies.",

    vision:
      "To develop well-rounded engineers with strong communication, ethical values, and managerial skills for the modern workplace.",

    mission: [
      "Develop strong communication skills.",
      "Improve professional and interpersonal abilities.",
      "Introduce engineering economics and management.",
      "Build ethical and responsible professionals.",
    ],

    highlights: [
      {
        icon: Globe,
        title: "Communication Skills",
        description: "Professional and technical communication.",
        box: "bg-blue-50 text-blue-600",
      },
      {
        icon: BookOpen,
        title: "Technical Writing",
        description: "Technical report writing skills.",
        box: "bg-violet-50 text-violet-600",
      },
      {
        icon: Target,
        title: "Engineering Economics",
        description: "Economic principles for engineers.",
        box: "bg-orange-50 text-orange-500",
      },
      {
        icon: Users,
        title: "Management",
        description: "Management and professional development.",
        box: "bg-emerald-50 text-emerald-600",
      },
    ],

    courses: [
      "English Communication",
      "Technical Report Writing",
      "Engineering Economics",
      "Entrepreneurship",
      "Industrial Management",
    ],

    labs: [
      {
        icon: Globe,
        title: "Language",
        subtitle: "Lab",
      },
    ],

    seats: 0,
    duration: "Support",
    program: "Support Department",
    affiliation: "BTEUP",

    hod: "Head of Department",
    established: "2010",

    email: "humanities@gpm.ac.in",
    phone: "+91 98765 43210",

    location: "Academic Block - I",
    room: "Room No. 205",
  },

  "dept-leather": {
    title: "Leather Technology",
    fullTitle: "Department of Leather Technology",
    icon: Scissors,

    description:
      "The Leather Technology department is a unique and specialized program training students in leather processing, product design, and quality control. Bihar's rich leather industry makes this a highly relevant and career-oriented discipline.",

    vision:
      "To produce skilled leather technologists who drive innovation and quality in India's growing leather and footwear industry.",

    mission: [
      "Develop strong fundamentals in leather technology.",
      "Provide practical tanning and processing skills.",
      "Develop footwear design and manufacturing skills.",
      "Promote quality and environmental responsibility.",
    ],

    highlights: [
      {
        icon: FlaskConical,
        title: "Leather Processing",
        description: "Modern leather processing techniques.",
        box: "bg-blue-50 text-blue-600",
      },
      {
        icon: Scissors,
        title: "Footwear Design",
        description: "Footwear design and manufacturing.",
        box: "bg-violet-50 text-violet-600",
      },
      {
        icon: Target,
        title: "Quality Control",
        description: "Testing and quality assurance.",
        box: "bg-orange-50 text-orange-500",
      },
      {
        icon: Settings,
        title: "Industrial Tanning",
        description: "Industrial tanning processes.",
        box: "bg-emerald-50 text-emerald-600",
      },
    ],

    courses: [
      "Leather Science",
      "Tanning Technology",
      "Footwear Design & Manufacturing",
      "Quality Assurance",
      "Environmental Management in Tanneries",
    ],

    labs: [
      {
        icon: FlaskConical,
        title: "Tanning",
        subtitle: "Lab",
      },
      {
        icon: Scissors,
        title: "Footwear",
        subtitle: "Lab",
      },
      {
        icon: Target,
        title: "Testing & Quality",
        subtitle: "Lab",
      },
    ],

    seats: 30,
    duration: "3 Years",
    program: "Diploma",
    affiliation: "BTEUP",

    hod: "Head of Department",
    established: "2010",

    email: "leather@gpm.ac.in",
    phone: "+91 98765 43210",

    location: "Academic Block - I",
    room: "Room No. 205",
  },
};


/* =========================================================
   FACULTY
   =========================================================
   Keep this separate because faculty can later come from
   MongoDB / API.
========================================================= */

const faculty = [
  {
    name: "Mr. Amit Kumar",
    role: "Head of Department",
    qualification: "M.Tech (CSE)",
    email: "amit.kumar@gpm.ac.in",
    image: "/faculty/amit-kumar.jpg",
  },
  {
    name: "Mr. Rajesh Ranjan",
    role: "Lecturer (CSE)",
    qualification: "M.Tech (CSE)",
    email: "rajesh.ranjan@gpm.ac.in",
    image: "/faculty/rajesh-ranjan.jpg",
  },
  {
    name: "Ms. Pooja Kumari",
    role: "Lecturer (CSE)",
    qualification: "M.Tech (CSE)",
    email: "pooja.kumari@gpm.ac.in",
    image: "/faculty/pooja-kumari.jpg",
  },
  {
    name: "Mr. Vivek Kumar",
    role: "Lecturer (CSE)",
    qualification: "M.Tech (CSE)",
    email: "vivek.kumar@gpm.ac.in",
    image: "/faculty/vivek-kumar.jpg",
  },
];


/* =========================================================
   SECTION TITLE
========================================================= */

const SectionTitle = ({ icon: Icon, children }) => {
  return (
    <div className="mb-4 flex items-center gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Icon size={21} strokeWidth={2.2} />
      </div>

      <h2 className="text-[18px] font-extrabold text-[#09286b]">
        {children}
      </h2>

    </div>
  );
};


/* =========================================================
   INFO ROW
========================================================= */

const InfoRow = ({ icon: Icon, title, value }) => {
  return (
    <div className="flex items-center gap-3 border-b border-gray-200 py-2.5 last:border-0">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <Icon size={18} />
      </div>

      <div className="flex min-w-0 flex-col">

        <strong className="text-[12px] font-extrabold text-[#071c50]">
          {title}
        </strong>

        <span className="text-[12px] leading-5 text-[#1c315c]">
          {value}
        </span>

      </div>

    </div>
  );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DepartmentPage({
  deptId,
  onNavigate,
}) {

  const dept = deptData[deptId];

  /* -------------------------------------------------------
     INVALID DEPARTMENT
  ------------------------------------------------------- */

  if (!dept) {
    return (
      <div className="flex min-h-[500px] items-center justify-center bg-[#f6f8fc]">

        <div className="text-center">

          <h2 className="text-xl font-bold text-gray-500">
            Department not found
          </h2>

          <button
            onClick={() => onNavigate?.("home")}
            className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white"
          >
            Go Home
          </button>

        </div>

      </div>
    );
  }


  const DepartmentIcon = dept.icon;


  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <div className="min-h-screen bg-[#f6f8fc] text-[#10245b]">

      <main className="mx-auto w-[calc(100%-18px)] max-w-[1480px] pb-7">


        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative min-h-[350px] overflow-hidden rounded-b-xl">

          {/* Campus image */}

          {/* <img
            src="/department-building.jpg"
            alt="Government Polytechnic campus"
            className="absolute inset-0 h-full w-full object-cover object-right"
          /> */}


          {/* Blue overlay */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#061e72] via-[#0c3299]/95 via-[52%] to-transparent" />


          {/* Hero content */}

          <div className="relative z-10 flex min-h-[350px] flex-col px-6 py-7 md:px-9">


            {/* Back */}

            <button
              type="button"
              onClick={() => onNavigate?.("home")}
              className="mb-7 flex w-fit items-center gap-2 text-sm font-medium text-white transition hover:opacity-80"
            >
              <ArrowLeft size={17} />

              Back to Home
            </button>


            {/* Title */}

            <div className="flex items-start gap-4">

              <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">

                <DepartmentIcon
                  size={45}
                  strokeWidth={1.5}
                />

              </div>


              <div>

                <p className="mb-1 text-sm font-medium tracking-wide text-white">
                  DEPARTMENT OF
                </p>

                <h1 className="max-w-[800px] text-[30px] font-extrabold leading-tight tracking-tight text-white sm:text-[38px] lg:text-[48px]">
                  {dept.title}
                </h1>

                <div className="mt-3 h-1 w-12 rounded-full bg-yellow-400" />

              </div>

            </div>


            {/* Hero statistics */}

            <div className="mt-6 grid max-w-[570px] grid-cols-2 gap-3 sm:flex sm:flex-wrap">


              {/* Seats */}

              <div className="flex h-[58px] items-center gap-3 rounded-lg border border-white/10 bg-blue-500/55 px-4 text-white backdrop-blur-sm">

                <Users
                  size={31}
                  strokeWidth={1.5}
                />

                <div className="flex flex-col">

                  <strong className="text-sm">
                    {dept.seats}
                  </strong>

                  <span className="text-xs opacity-90">
                    Seats
                  </span>

                </div>

              </div>


              {/* Duration */}

              <div className="flex h-[58px] items-center gap-3 rounded-lg border border-white/10 bg-blue-500/55 px-4 text-white backdrop-blur-sm">

                <Clock3
                  size={31}
                  strokeWidth={1.5}
                />

                <div className="flex flex-col">

                  <strong className="text-sm">
                    {dept.duration}
                  </strong>

                  <span className="text-xs opacity-90">
                    Duration
                  </span>

                </div>

              </div>


              {/* Program */}

              <div className="flex h-[58px] items-center gap-3 rounded-lg border border-white/10 bg-blue-500/55 px-4 text-white backdrop-blur-sm">

                <GraduationCap
                  size={32}
                  strokeWidth={1.5}
                />

                <div className="flex flex-col">

                  <strong className="text-sm">
                    {dept.program}
                  </strong>

                  <span className="text-xs opacity-90">
                    Program
                  </span>

                </div>

              </div>


              {/* Affiliation */}

              <div className="flex h-[58px] items-center gap-3 rounded-lg border border-white/10 bg-blue-500/55 px-4 text-white backdrop-blur-sm">

                <Landmark
                  size={32}
                  strokeWidth={1.5}
                />

                <div className="flex flex-col">

                  <strong className="text-sm">
                    {dept.affiliation}
                  </strong>

                  <span className="text-xs opacity-90">
                    Affiliated
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            ABOUT + INFORMATION + VISION + MISSION
        ================================================= */}

        <section className="mt-4 grid gap-4 lg:grid-cols-[1.22fr_1fr]">


          {/* ABOUT */}

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <SectionTitle icon={Users}>
              About the Department
            </SectionTitle>

            <p className="text-[13px] leading-[1.8] text-[#172b59]">
              {dept.description}
            </p>

          </div>


          {/* INFORMATION */}

          <div className="row-span-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <h2 className="mb-3 text-[18px] font-extrabold text-[#09286b]">
              Department Information
            </h2>

            <InfoRow
              icon={UserRound}
              title="Head of Department"
              value={dept.hod}
            />

            <InfoRow
              icon={CalendarDays}
              title="Established"
              value={dept.established}
            />

            <InfoRow
              icon={Database}
              title="Program Offered"
              value={`${dept.program} in ${dept.title}`}
            />

            <InfoRow
              icon={Users}
              title="Intake"
              value={`${dept.seats} Students`}
            />

            <InfoRow
              icon={Clock3}
              title="Duration"
              value={dept.duration}
            />

            <InfoRow
              icon={Landmark}
              title="Affiliation"
              value={dept.affiliation}
            />

          </div>


          {/* VISION */}

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <SectionTitle icon={Eye}>
              Vision
            </SectionTitle>

            <p className="text-[13px] leading-[1.8] text-[#172b59]">
              {dept.vision}
            </p>

          </div>


          {/* MISSION */}

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <SectionTitle icon={Target}>
              Mission
            </SectionTitle>

            <ul className="list-disc space-y-1 pl-5 text-[13px] leading-[1.65] text-[#172b59]">

              {dept.mission.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </section>


        {/* =================================================
            HIGHLIGHTS
        ================================================= */}

        <section className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

          <SectionTitle icon={BookOpen}>
            Department Highlights
          </SectionTitle>


          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">

            {dept.highlights.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex min-h-[100px] items-center gap-3 rounded-lg border border-gray-200 p-3 transition hover:-translate-y-0.5 hover:shadow-sm"
                >

                  <div
                    className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-lg ${item.box}`}
                  >
                    <Icon size={27} />
                  </div>


                  <div>

                    <h3 className="mb-1 text-[12px] font-extrabold leading-5 text-[#0a286c]">
                      {item.title}
                    </h3>

                    <p className="text-[11px] leading-[1.55] text-[#425477]">
                      {item.description}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </section>


        {/* =================================================
            PROGRAM + LABS
        ================================================= */}

        <section className="mt-4 grid gap-4 lg:grid-cols-2">


          {/* PROGRAM */}

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <SectionTitle icon={BookOpen}>
              Programs Offered
            </SectionTitle>


            <div className="overflow-hidden rounded-lg border border-gray-200">

              <table className="w-full border-collapse">

                <thead className="bg-gradient-to-r from-[#123dba] to-[#174fd2] text-white">

                  <tr>

                    <th className="px-4 py-3 text-left text-[11px] font-extrabold">
                      Program
                    </th>

                    <th className="px-3 py-3 text-left text-[11px] font-extrabold">
                      Duration
                    </th>

                    <th className="px-3 py-3 text-left text-[11px] font-extrabold">
                      Intake
                    </th>

                    <th className="px-3 py-3 text-left text-[11px] font-extrabold">
                      Affiliation
                    </th>

                  </tr>

                </thead>


                <tbody>

                  <tr>

                    <td className="px-4 py-4 text-xs leading-5 text-[#172c5d]">
                      {dept.program}
                      <br />
                      {dept.title}
                    </td>

                    <td className="px-3 py-4 text-xs text-[#172c5d]">
                      {dept.duration}
                    </td>

                    <td className="px-3 py-4 text-xs text-[#172c5d]">
                      {dept.seats}
                    </td>

                    <td className="px-3 py-4 text-xs text-[#172c5d]">
                      {dept.affiliation}
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>


          {/* LABS */}

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <SectionTitle icon={FlaskConical}>
              Laboratories &amp; Facilities
            </SectionTitle>


            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

              {dept.labs.map((lab, index) => {

                const Icon = lab.icon;

                return (
                  <div
                    key={index}
                    className="flex min-h-[95px] flex-col items-center justify-center gap-1 rounded-lg border border-gray-200 text-center text-blue-600 transition hover:bg-blue-50/40"
                  >

                    <Icon
                      size={31}
                      strokeWidth={1.8}
                    />

                    <strong className="text-[11px] leading-4 text-[#0a286b]">
                      {lab.title}
                    </strong>

                    <span className="text-[11px] font-bold text-[#0a286b]">
                      {lab.subtitle}
                    </span>

                  </div>
                );

              })}

            </div>

          </div>

        </section>


        {/* =================================================
            FACULTY
        ================================================= */}

        <section className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

          <SectionTitle icon={Users}>
            Faculty Members
          </SectionTitle>


          <div className="relative">

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">

              {faculty.map((member, index) => (

                <article
                  key={index}
                  className="flex min-h-[120px] items-center gap-3 rounded-lg border border-gray-200 p-3"
                >

                  <div className="h-[78px] w-[78px] shrink-0 overflow-hidden rounded-full bg-gray-100">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://placehold.co/120x120/eef2f7/123b91?text=Faculty";
                      }}
                    />

                  </div>


                  <div className="min-w-0">

                    <h3 className="truncate text-[12px] font-extrabold text-blue-700">
                      {member.name}
                    </h3>

                    <p className="text-[10px] leading-4 text-[#26395e]">
                      {member.role}
                    </p>

                    <p className="text-[10px] leading-4 text-[#26395e]">
                      {member.qualification}
                    </p>

                    <p className="truncate text-[8px] text-[#26395e]">
                      {member.email}
                    </p>

                  </div>

                </article>

              ))}

            </div>


            {/* Right arrow */}

            <button
              type="button"
              className="absolute -right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-600 shadow-md"
              aria-label="Next faculty"
            >
              <ChevronRight size={19} />
            </button>

          </div>

        </section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <section className="mt-4 grid overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:grid-cols-2 xl:grid-cols-[1.35fr_.9fr_.8fr_.85fr]">


          {/* Department */}

          <div className="flex items-center gap-3 border-b border-gray-200 p-5 xl:border-b-0 xl:border-r">

            <Phone
              size={27}
              className="shrink-0 text-blue-600"
            />

            <div>

              <h3 className="mb-1 text-sm font-extrabold text-[#09286b]">
                Contact Department
              </h3>

              <p className="text-[10px] leading-[1.55] text-[#24375e]">
                {dept.fullTitle}
                <br />
                Government Polytechnic Muzaffarpur, Bihar
              </p>

            </div>

          </div>


          {/* Location */}

          <div className="flex items-center gap-3 border-b border-gray-200 p-5 md:border-r xl:border-b-0">

            <MapPin
              size={27}
              className="shrink-0 text-blue-600"
            />

            <div>

              <h3 className="mb-1 text-sm font-extrabold text-[#09286b]">
                Location
              </h3>

              <p className="text-[10px] leading-[1.55] text-[#24375e]">
                {dept.location}
                <br />
                {dept.room}
              </p>

            </div>

          </div>


          {/* Email */}

          <div className="flex items-center gap-3 border-b border-gray-200 p-5 xl:border-b-0 xl:border-r">

            <Mail
              size={27}
              className="shrink-0 text-blue-600"
            />

            <div>

              <h3 className="mb-1 text-sm font-extrabold text-[#09286b]">
                Email
              </h3>

              <p className="text-[10px] text-[#24375e]">
                {dept.email}
              </p>

            </div>

          </div>


          {/* Phone */}

          <div className="flex items-center gap-3 p-5">

            <Phone
              size={27}
              className="shrink-0 text-blue-600"
            />

            <div>

              <h3 className="mb-1 text-sm font-extrabold text-[#09286b]">
                Phone
              </h3>

              <p className="text-[10px] text-[#24375e]">
                {dept.phone}
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}