import { Monitor, Cog, HardHat, Zap, Cpu, Scissors, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const departments = [
  {
    icon: Monitor,
    name: "Computer Science Engineering",
    code: "CSE",
    students: "120 seats",
    desc: "Modern computing, software development, networking, and cybersecurity fundamentals.",
    color: "bg-blue-500",
  },
  {
    icon: Cog,
    name: "Mechanical Engineering",
    code: "ME",
    students: "120 seats",
    desc: "Machine design, thermodynamics, manufacturing, and industrial automation.",
    color: "bg-[#0f2e5a]",
  },
  {
    icon: HardHat,
    name: "Civil Engineering",
    code: "CE",
    students: "120 seats",
    desc: "Structural design, construction technology, surveying, and project management.",
    color: "bg-[#1a4a8a]",
  },
  {
    icon: Zap,
    name: "Electrical Engineering",
    code: "EE",
    students: "60 seats",
    desc: "Power systems, electrical machines, control systems, and renewable energy.",
    color: "bg-[#0a9ed4]",
  },
  {
    icon: Cpu,
    name: "Electronics Engineering",
    code: "ECE",
    students: "60 seats",
    desc: "Electronic circuits, communication systems, embedded systems, and IoT.",
    color: "bg-[#38b2f0]",
  },
  {
    icon: Scissors,
    name: "Leather Technology",
    code: "LT",
    students: "60 seats",
    desc: "Leather processing, product design, quality control, and industry practices.",
    color: "bg-[#1a6bc5]",
  },
];

export function DepartmentsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#38b2f0] text-sm font-semibold uppercase tracking-wider">Academic Programmes</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2e5a] mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Departments
          </h2>
          <p className="text-[#4a6080] mt-3 max-w-xl mx-auto">
            AICTE-approved 3-year diploma programmes in engineering and technology, affiliated with SBTE Bihar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => window.open('https://www.gpmuz.ac.in/department/', '_blank')}
                className="group p-6 rounded-2xl border border-[#e2eaf4] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${dept.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#38b2f0] uppercase tracking-wider">{dept.code}</span>
                    <h3 className="font-semibold text-[#0f2e5a] text-sm leading-tight mt-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {dept.name}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[#4a6080] leading-relaxed mb-4">{dept.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#4a6080] bg-[#e8f1fb] px-3 py-1 rounded-full">{dept.students}</span>
                  <ArrowRight size={14} className="text-[#38b2f0] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
