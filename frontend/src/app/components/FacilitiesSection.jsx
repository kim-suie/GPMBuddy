import { BookOpen, Monitor, Wrench, Home, Trophy, Mic } from "lucide-react";
import { motion } from "motion/react";

const facilities = [
  {
    icon: BookOpen,
    name: "Central Library",
    desc: "7,000+ books, journals, and digital resources across all engineering disciplines.",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=250&fit=crop&auto=format",
  },
  {
    icon: Monitor,
    name: "Computer Labs",
    desc: "High-speed internet, modern PCs, and licensed software for practical learning.",
    img: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&h=250&fit=crop&auto=format",
  },
  {
    icon: Wrench,
    name: "Workshop Labs",
    desc: "Fully equipped mechanical, electrical, and civil engineering workshops.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=250&fit=crop&auto=format",
  },
  {
    icon: Home,
    name: "Hostels",
    desc: "Separate hostels for boys and girls with mess, Wi-Fi, and 24/7 security.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=250&fit=crop&auto=format",
  },
  {
    icon: Trophy,
    name: "Sports Facilities",
    desc: "Cricket ground, basketball court, indoor games, and annual sports events.",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop&auto=format",
  },
  {
    icon: Mic,
    name: "Auditorium",
    desc: "500-seat auditorium for seminars, cultural events, and technical fests.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&auto=format",
  },
];

export function FacilitiesSection() {
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
          <span className="text-[#38b2f0] text-sm font-semibold uppercase tracking-wider">Campus Life</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2e5a] mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Campus Facilities
          </h2>
          <p className="text-[#4a6080] mt-3 max-w-xl mx-auto">
            World-class infrastructure designed to nurture learning, creativity, and student wellbeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, index) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-[#e2eaf4] hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative h-40 bg-[#e8f1fb] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon size={16} className="text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{f.name}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#4a6080] leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
