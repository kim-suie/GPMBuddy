import { ShieldCheck, Award, Users, FlaskConical, Home, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: ShieldCheck,
    title: "AICTE Approved",
    desc: "All our programmes are approved by All India Council for Technical Education.",
    color: "text-[#0f2e5a]",
    bg: "bg-[#e8f1fb]",
  },
  {
    icon: Award,
    title: "SBTE Affiliated",
    desc: "Affiliated with State Board of Technical Education, Bihar for recognized diplomas.",
    color: "text-[#1a6bc5]",
    bg: "bg-[#e0f3fd]",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    desc: "Dedicated teaching staff with deep industry expertise and academic excellence.",
    color: "text-[#0a9ed4]",
    bg: "bg-[#e0f3fd]",
  },
  {
    icon: FlaskConical,
    title: "Modern Laboratories",
    desc: "Well-equipped labs with industry-standard tools and hands-on training facilities.",
    color: "text-[#1a4a8a]",
    bg: "bg-[#e8f1fb]",
  },
  {
    icon: Home,
    title: "Hostel Facilities",
    desc: "Comfortable and safe hostel accommodation for outstation students.",
    color: "text-[#0f2e5a]",
    bg: "bg-[#e8f1fb]",
  },
  {
    icon: TrendingUp,
    title: "Placement Assistance",
    desc: "Dedicated placement cell connecting students with top industry employers.",
    color: "text-[#38b2f0]",
    bg: "bg-[#e0f3fd]",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f4f8] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#38b2f0] text-sm font-semibold uppercase tracking-wider">Our Strengths</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2e5a] mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why Choose GPMUZ?
          </h2>
          <p className="text-[#4a6080] mt-3 max-w-xl mx-auto">
            Over a century of excellence in technical education, shaping engineers for the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, index) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#e2eaf4] hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className={f.color} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f2e5a] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{f.title}</h3>
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
