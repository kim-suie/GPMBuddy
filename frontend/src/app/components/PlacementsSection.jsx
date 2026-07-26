import { Briefcase, Users, Network, Compass } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: Briefcase,
    value: "80%+",
    label: "Placement Support",
    desc: "Students receiving placement assistance from our dedicated cell",
    color: "from-[#0f2e5a] to-[#1a4a8a]",
  },
  {
    icon: Users,
    value: "200+",
    label: "Internship Opportunities",
    desc: "Industry internship placements offered every academic year",
    color: "from-[#1a6bc5] to-[#38b2f0]",
  },
  {
    icon: Network,
    value: "50+",
    label: "Industry Connections",
    desc: "Partner companies across manufacturing, IT, and infrastructure sectors",
    color: "from-[#0a9ed4] to-[#38b2f0]",
  },
  {
    icon: Compass,
    value: "Round-year",
    label: "Career Guidance",
    desc: "Workshops, resume reviews, and mock interviews throughout the year",
    color: "from-[#0f2e5a] to-[#1a6bc5]",
  },
];

const companies = ["Tata Motors", "L&T", "BHEL", "Wipro", "Infosys", "HCL", "NTPC", "PWD Bihar"];

export function PlacementsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f2e5a] to-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#38b2f0] text-sm font-semibold uppercase tracking-wider">Career Outcomes</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Placement Support
          </h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">
            Our dedicated placement cell bridges students with industry opportunities across sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => window.open('https://www.gpmuz.ac.in/training-and-placement/', '_blank')}
                className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.value}</div>
                <div className="text-[#38b2f0] font-semibold text-sm mb-2">{s.label}</div>
                <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-10"
        >
          <p className="text-center text-white/40 text-sm mb-6 uppercase tracking-wider">Recruiting Partners & Organizations</p>
          <div className="flex flex-wrap justify-center gap-3">
            {companies.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/70 text-sm font-medium hover:bg-white/20 transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
