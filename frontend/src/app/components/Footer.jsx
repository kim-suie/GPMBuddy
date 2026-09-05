// import image_poly from "@/imports/poly.jpg";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Globe,
//   Facebook,
//   Twitter,
//   Youtube,
//   Linkedin,
// } from "lucide-react";

// export default function Footer({ onNavigate }) {
//   return (
//     <footer className="bg-[#0a1628] text-white pt-10 sm:pt-14 pb-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8 sm:mb-12">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-5">
//               <div className="w-12 h-14 overflow-hidden rounded-md shadow-md bg-white">
//                 <img
//                   src={image_poly}
//                   alt="Government Polytechnic Muzaffarpur"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div>
//                 <h3 className="font-bold text-sm">
//                   Govt. Polytechnic
//                 </h3>
//                 <p className="text-sky-400 text-xs">
//                   Muzaffarpur, Bihar
//                 </p>
//               </div>
//             </div>

//             <p className="text-white/60 text-sm mb-5">
//               Empowering Future Engineers Since 1924 through
//               quality technical education and innovation.
//             </p>

//             <div className="flex gap-3">
//               {[Facebook, Twitter, Youtube, Linkedin].map((Icon, index) => (
//                 <button
//                   key={index}
//                   className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-sky-500 transition"
//                 >
//                   <Icon size={16} />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>

//             <ul className="space-y-2">
//               {[
//                 { label: "Home", url: null },
//                 {
//                   label: "Departments",
//                   url: "https://www.gpmuz.ac.in/department/",
//                 },
//                 {
//                   label: "Academic",
//                   url: "https://www.gpmuz.ac.in/academics/",
//                 },
//                 {
//                   label: "Placements",
//                   url: "https://www.gpmuz.ac.in/training-and-placement/",
//                 },
//                 {
//                   label: "Notices",
//                   url: "https://www.gpmuz.ac.in/category/notices/",
//                 },
//               ].map((link) => (
//                 <li key={link.label}>
//                   <button
//                     className="text-white/60 hover:text-sky-400 transition"
//                     onClick={() => {
//                       if (link.url) {
//                         window.open(link.url, "_blank");
//                       } else {
//                         onNavigate(link.label.toLowerCase());
//                       }
//                     }}
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Departments */}
//           <div>
//             <h4 className="font-semibold mb-4">Departments</h4>

//             <ul className="space-y-2">
//               {[
//                 "Computer Science",
//                 "Mechanical Engineering",
//                 "Civil Engineering",
//                 "Electrical Engineering",
//                 "Electronics Engineering",
//                 "Leather Technology",
//               ].map((dept) => (
//                 <li
//                   key={dept}
//                   className="text-white/60 hover:text-sky-400 cursor-pointer"
//                 >
//                   {dept}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-semibold mb-4">Contact Us</h4>

//             <div className="space-y-3 text-white/60 text-sm">
//               <div className="flex gap-2">
//                 <MapPin size={16} className="text-sky-400 mt-1" />
//                 <span>
//                   Government Polytechnic, Muzaffarpur, Bihar - 842002
//                 </span>
//               </div>

//               <div className="flex gap-2">
//                 <Phone size={16} className="text-sky-400" />
//                 <span>+91-621-2240XXX</span>
//               </div>

//               <div className="flex gap-2">
//                 <Mail size={16} className="text-sky-400" />
//                 <span>principal@gpmuz.ac.in</span>
//               </div>

//               <div className="flex gap-2">
//                 <Globe size={16} className="text-sky-400" />
//                 <span>www.gpmuz.ac.in</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center">
//           <p className="text-xs text-white/40">
//             © 2025 Government Polytechnic Muzaffarpur. All rights reserved.
//           </p>

//           <div className="flex gap-4 mt-3 sm:mt-0 text-xs text-white/40">
//             <span className="hover:text-white cursor-pointer">
//               Privacy Policy
//             </span>
//             <span className="hover:text-white cursor-pointer">
//               Terms of Use
//             </span>
//             <span className="hover:text-white cursor-pointer">
//               RTI
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Users, Calendar, MapPin, Phone, Mail, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

/* ---------- Spinning Ashoka Chakra SVG ---------- */
function AshokaChakra({ size = 64 }) {
  const cx = 60, cy = 60, r = 50;
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const a = (i * 15 * Math.PI) / 180;
    return { x1: cx + 8 * Math.cos(a), y1: cy + 8 * Math.sin(a), x2: cx + r * Math.cos(a), y2: cy + r * Math.sin(a) };
  });
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="gpm-chakra">
      <circle cx="60" cy="60" r="50" fill="none" stroke="#0b1f5e" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="#0b1f5e" strokeWidth="1.2" opacity="0.4" />
      <circle cx="60" cy="60" r="6" fill="#0b1f5e" />
      {spokes.map((s, i) => (
        <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke="#0b1f5e" strokeWidth="1.2" />
      ))}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        return <circle key={`d-${i}`} cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r="1.3" fill="#0b1f5e" />;
      })}
    </svg>
  );
}

/* ---------- Tricolor-rimmed circular emblem (logo) ---------- */
function Logo({ size = 64 }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 120 120" className="absolute inset-0">
        <circle cx="60" cy="60" r="58" fill="#ffffff" />
        <circle cx="60" cy="60" r="58" fill="none" stroke="#FF9933" strokeWidth="6" strokeDasharray="121.5 243" strokeDashoffset="0" transform="rotate(-90 60 60)" />
        <circle cx="60" cy="60" r="58" fill="none" stroke="#ffffff" strokeWidth="6" strokeDasharray="121.5 243" strokeDashoffset="-121.5" transform="rotate(-90 60 60)" />
        <circle cx="60" cy="60" r="58" fill="none" stroke="#138808" strokeWidth="6" strokeDasharray="121.5 243" strokeDashoffset="-243" transform="rotate(-90 60 60)" />
        <circle cx="60" cy="60" r="52" fill="#ffffff" stroke="#0b1f5e" strokeWidth="1" opacity="0.2" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <AshokaChakra size={size * 0.66} />
      </div>
    </div>
  );
}

/* ---------- Main Footer Component ---------- */
export function Footer() {
  return (
    <>
      <style>{`
        @keyframes gpm-spin { to { transform: rotate(360deg); } }
        .gpm-chakra { animation: gpm-spin 22s linear infinite; transform-origin: center; }
      `}</style>
      
      <footer className="bg-[#0b1f5e] text-white border-t-4 border-[#FF9933]">
        {/* Visitor / Last updated strip */}
        <div className="bg-white/5 border-b border-white/10">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-[12px]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#FF9933]" /> Visitor Counter: <strong className="text-[#FF9933]">14,82,947</strong></span>
              <span className="hidden sm:inline opacity-40">|</span>
              <span className="hidden sm:flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#FF9933]" /> Last Updated: 12 June 2025</span>
            </div>
            <div className="text-white/60 text-[11px]">Best viewed in Chrome, Firefox, Edge at 1280×800</div>
          </div>
        </div>

        {/* 4-column grid */}
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={64} />
              <div>
                <div className="text-[15px] font-bold leading-tight">Government Polytechnic</div>
                <div className="text-[13px] text-white/70">Muzaffarpur, Bihar</div>
              </div>
            </div>
            <p className="text-[13px] text-white/70 leading-relaxed mb-4">
              A premier technical institution established in 1949, under the Department of Science &amp; Technology, Government of Bihar. Approved by AICTE and affiliated to SBTE Bihar.
            </p>
            <div className="text-[12px] text-white/70 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#FF9933] flex-shrink-0 mt-0.5" />
              <span>East Ramna Road, Muzaffarpur, Bihar 842002, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-bold mb-4 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#FF9933]"></span>
            </h4>
            <ul className="space-y-2 text-[13px] text-white/75">
              {["AICTE", "SBTE Bihar", "Department of Science & Tech", "Bihar Govt Portal", "Anti-Ragging Helpline", "Nepali/क्षेत्रीय Office"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[#FF9933] transition-colors flex items-center gap-1.5">
                    <span className="text-[#FF9933]">›</span> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Pages */}
          <div>
            <h4 className="text-[14px] font-bold mb-4 relative pb-2">
              Important Pages
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#FF9933]"></span>
            </h4>
            <ul className="space-y-2 text-[13px] text-white/75">
              {["Admissions 2025-26", "Academic Calendar", "Examination & Results", "Training & Placement", "Mandatory Disclosures", "Grievance Redressal", "RTI"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[#FF9933] transition-colors flex items-center gap-1.5">
                    <span className="text-[#FF9933]">›</span> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with us */}
          <div>
            <h4 className="text-[14px] font-bold mb-4 relative pb-2">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#FF9933]"></span>
            </h4>
            <div className="text-[13px] text-white/75 space-y-3 mb-5">
              <div className="flex items-start gap-2"><Phone className="w-4 h-4 text-[#FF9933] mt-0.5" /> +91 6212 280 000</div>
              <div className="flex items-start gap-2"><Mail className="w-4 h-4 text-[#FF9933] mt-0.5" /> principal@gpmuzaffarpur.ac.in</div>
            </div>
            <div className="flex gap-2">
              {[Facebook, Twitter, Youtube, Instagram].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF9933] hover:text-[#0b1f5e] flex items-center justify-center transition-colors"
                  aria-label="social"
                >
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-white/70">
            <div>© {new Date().getFullYear()} Government Polytechnic, Muzaffarpur. All Rights Reserved.</div>
            <div className="flex items-center gap-1.5">
              Made with <span className="text-[#FF9933]">❤</span> for the students of Bihar
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;