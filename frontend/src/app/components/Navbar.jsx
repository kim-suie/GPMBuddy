// // import image_poly from "@/imports/poly.jpg";
// // import { useState, useEffect, useRef } from "react";
// // import { Menu, X, Bot, ChevronDown } from "lucide-react";


// // const departments = [
// //   { label: "Civil Engineering", id: "dept-civil" },
// //   { label: "Computer Science & Engineering", id: "dept-cse" },
// //   { label: "Electrical Engineering", id: "dept-electrical" },
// //   { label: "Electronics Engineering", id: "dept-electronics" },
// //   { label: "Mechanical Engineering", id: "dept-mechanical" },
// //   { label: "Chemistry", id: "dept-chemistry" },
// //   { label: "Physics", id: "dept-physics" },
// //   { label: "Humanities", id: "dept-humanities" },
// //   { label: "Leather Technology", id: "dept-leather" },
// // ];


// // export function Navbar({ onNavigate, currentPage }) {

// //   const [scrolled, setScrolled] = useState(false);
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [deptOpen, setDeptOpen] = useState(false);
// //   const [mobileDeptOpen, setMobileDeptOpen] = useState(false);

// //   const dropdownRef = useRef(null);



// //   useEffect(() => {

// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 20);
// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () =>
// //       window.removeEventListener("scroll", handleScroll);

// //   }, []);



// //   useEffect(() => {

// //     const handleClickOutside = (e) => {

// //       if (
// //         dropdownRef.current &&
// //         !dropdownRef.current.contains(e.target)
// //       ) {
// //         setDeptOpen(false);
// //       }

// //     };


// //     document.addEventListener(
// //       "mousedown",
// //       handleClickOutside
// //     );


// //     return () =>
// //       document.removeEventListener(
// //         "mousedown",
// //         handleClickOutside
// //       );


// //   }, []);



// //   const isDeptPage = currentPage.startsWith("dept-");



// //   return (

// //     <nav
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// //         scrolled
// //         ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
// //         : "bg-white/80 backdrop-blur-sm"
// //       }`}
// //     >


// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// //         <div className="flex items-center justify-between h-16 lg:h-20">


// //           {/* Logo */}

// //           <button
// //             onClick={() => onNavigate("home")}
// //             className="flex items-center gap-3"
// //           >

// //             <img
// //               src={image_poly}
// //               alt="Government Polytechnic Muzaffarpur"
// //               className="
// //               w-12 h-14
// //               lg:w-14 lg:h-16
// //               rounded-md
// //               object-cover
// //               shadow-md
// //               "
// //             />


// //             <div className="hidden sm:block">

// //               <h1 className="
// //               text-[#0f2e5a]
// //               font-bold
// //               text-sm
// //               "
// //               >

// //                 Government Polytechnic

// //               </h1>


// //               <p className="
// //               text-[#38b2f0]
// //               text-xs
// //               "
// //               >

// //                 Muzaffarpur, Bihar

// //               </p>


// //             </div>


// //           </button>



// //           {/* Desktop Menu */}

// //           <div className="hidden lg:flex items-center gap-1">


// //             <button
// //               onClick={() => onNavigate("home")}
// //               className={`
// //               px-4 py-2 rounded-lg text-sm
// //               ${
// //                 currentPage==="home"
// //                 ? "bg-[#0f2e5a] text-white"
// //                 : "text-[#0a1628] hover:bg-[#e8f1fb]"
// //               }
// //               `}
// //             >

// //               Home

// //             </button>



// //             <div
// //               className="relative"
// //               ref={dropdownRef}
// //             >

// //               <button

// //                 onClick={() =>
// //                   setDeptOpen(!deptOpen)
// //                 }

// //                 className={`
// //                 flex items-center gap-1
// //                 px-4 py-2 rounded-lg text-sm

// //                 ${
// //                   isDeptPage
// //                   ? "bg-[#0f2e5a] text-white"
// //                   : "text-[#0a1628] hover:bg-[#e8f1fb]"
// //                 }
// //                 `}
// //               >

// //                 Departments

// //                 <ChevronDown
// //                 size={14}
// //                 className={
// //                   deptOpen
// //                   ? "rotate-180"
// //                   : ""
// //                 }
// //                 />

// //               </button>



// //               {
// //                 deptOpen &&

// //                 <div className="
// //                 absolute top-full mt-2
// //                 w-64
// //                 bg-white
// //                 rounded-xl
// //                 shadow-xl
// //                 border
// //                 py-2
// //                 "
// //                 >


// //                   {
// //                     departments.map((dept)=>(

// //                       <button

// //                       key={dept.id}

// //                       onClick={()=>{

// //                         onNavigate(dept.id);
// //                         setDeptOpen(false);

// //                       }}

// //                       className="
// //                       w-full text-left
// //                       px-4 py-2
// //                       text-sm
// //                       hover:bg-blue-50
// //                       "
// //                       >

// //                         {dept.label}

// //                       </button>

// //                     ))
// //                   }


// //                 </div>

// //               }


// //             </div>




// //             {
// //               [
// //                 {
// //                   label:"Academic",
// //                   url:"https://www.gpmuz.ac.in/academics/"
// //                 },
// //                 {
// //                   label:"Placements",
// //                   url:"https://www.gpmuz.ac.in/training-and-placement/"
// //                 },
// //                 {
// //                   label:"Notices",
// //                   url:"https://www.gpmuz.ac.in/category/notices/"
// //                 }

// //               ].map(link=>(


// //                 <button

// //                 key={link.label}

// //                 onClick={() =>
// //                   window.open(link.url,"_blank")
// //                 }

// //                 className="
// //                 px-4 py-2
// //                 rounded-lg
// //                 text-sm
// //                 hover:bg-blue-50
// //                 "
// //                 >

// //                   {link.label}

// //                 </button>


// //               ))
// //             }


// //           </div>




// //           {/* Right Side */}

// //           <div className="flex items-center gap-3">


// //             <button

// //             onClick={() =>
// //               onNavigate("gpbuddy")
// //             }

// //             className="
// //             flex items-center gap-2
// //             px-4 py-2
// //             rounded-xl
// //             bg-gradient-to-r
// //             from-[#0f2e5a]
// //             to-[#1a6bc5]
// //             text-white
// //             "
// //             >

// //               <Bot size={16}/>

// //               GPM Buddy

// //             </button>



// //             <button

// //             className="
// //             lg:hidden
// //             p-2
// //             "

// //             onClick={() =>
// //               setMobileOpen(!mobileOpen)
// //             }

// //             >

// //               {
// //                 mobileOpen
// //                 ?
// //                 <X size={20}/>
// //                 :
// //                 <Menu size={20}/>
// //               }


// //             </button>


// //           </div>


// //         </div>


// //       </div>




// //       {/* Mobile Menu */}

// //       {
// //         mobileOpen &&

// //         <div className="
// //         lg:hidden
// //         bg-white
// //         border-t
// //         p-4
// //         "
// //         >


// //           <button

// //           onClick={()=>{

// //             onNavigate("home");
// //             setMobileOpen(false);

// //           }}

// //           className="
// //           w-full
// //           text-left
// //           p-3
// //           rounded-lg
// //           hover:bg-blue-50
// //           "
// //           >

// //             Home

// //           </button>




// //           <button

// //           onClick={() =>
// //             setMobileDeptOpen(!mobileDeptOpen)
// //           }

// //           className="
// //           w-full
// //           flex justify-between
// //           p-3
// //           "
// //           >

// //             Departments

// //             <ChevronDown size={14}/>

// //           </button>



// //           {
// //             mobileDeptOpen &&

// //             <div className="ml-4">

// //               {
// //                 departments.map(dept=>(

// //                   <button

// //                   key={dept.id}

// //                   onClick={()=>{

// //                     onNavigate(dept.id);
// //                     setMobileOpen(false);

// //                   }}

// //                   className="
// //                   block
// //                   w-full
// //                   text-left
// //                   p-2
// //                   "
// //                   >

// //                     {dept.label}

// //                   </button>

// //                 ))
// //               }

// //             </div>

// //           }

// //           <button

// //           className="
// //           w-full
// //           flex justify-between
// //           p-3
// //           "
// //           >

// //             Login

// //           </button>



// //         </div>


// //       }



// //     </nav>

// //   );

// // }


// // export default Navbar;

// import image_poly from "@/imports/poly.jpg";
// import { useState, useEffect, useRef } from "react";
// import { Menu, X, Bot, ChevronDown, LogIn, Phone, Mail } from "lucide-react";


// const departments = [
//   { label: "Civil Engineering", id: "dept-civil" },
//   { label: "Computer Science & Engineering", id: "dept-cse" },
//   { label: "Electrical Engineering", id: "dept-electrical" },
//   { label: "Electronics Engineering", id: "dept-electronics" },
//   { label: "Mechanical Engineering", id: "dept-mechanical" },
//   { label: "Chemistry", id: "dept-chemistry" },
//   { label: "Physics", id: "dept-physics" },
//   { label: "Humanities", id: "dept-humanities" },
//   { label: "Leather Technology", id: "dept-leather" },
// ];

// const topLinks = ["Anti-Ragging", "RTI", "Grievance"];

// export function Navbar({ onNavigate, currentPage }) {

//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [deptOpen, setDeptOpen] = useState(false);
//   const [mobileDeptOpen, setMobileDeptOpen] = useState(false);

//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDeptOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const isDeptPage = currentPage.startsWith("dept-");

//   return (
//     <nav
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
//           : "bg-white/80 backdrop-blur-sm"
//       }`}
//     >

//       {/* ── Main Navbar ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           {/* Logo */}
//           <button
//             onClick={() => onNavigate("home")}
//             className="flex items-center gap-3 group"
//           >
//             <img
//               src={image_poly}
//               alt="Government Polytechnic Muzaffarpur"
//               className="w-12 h-14 lg:w-14 lg:h-16 rounded-md object-cover shadow-md ring-1 ring-blue-100 group-hover:ring-blue-200 transition-all"
//             />
//             <div className="hidden sm:block">
//               <h1 className="text-[#0f2e5a] font-bold text-sm leading-tight">
//                 Government Polytechnic
//               </h1>
//               <p className="text-[#38b2f0] text-xs font-medium">
//                 Muzaffarpur, Bihar · Est. 1924
//               </p>
//             </div>
//           </button>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-1">
//             <button
//               onClick={() => onNavigate("home")}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                 currentPage === "home"
//                   ? "bg-[#0f2e5a] text-white shadow-sm shadow-[#0f2e5a]/25"
//                   : "text-[#0a1628] hover:bg-[#e8f1fb]"
//               }`}
//             >
//               Home
//             </button>

//             {/* Departments Dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setDeptOpen(!deptOpen)}
//                 className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   isDeptPage
//                     ? "bg-[#0f2e5a] text-white shadow-sm shadow-[#0f2e5a]/25"
//                     : "text-[#0a1628] hover:bg-[#e8f1fb]"
//                 }`}
//               >
//                 Departments
//                 <ChevronDown
//                   size={14}
//                   className={`transition-transform duration-200 ${deptOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               {deptOpen && (
//                 <div className="absolute top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-blue-50 py-2 animate-[fadeIn_0.15s_ease]">
//                   {departments.map((dept) => (
//                     <button
//                       key={dept.id}
//                       onClick={() => {
//                         onNavigate(dept.id);
//                         setDeptOpen(false);
//                       }}
//                       className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-[#0f2e5a] hover:bg-blue-50 hover:pl-5 transition-all"
//                     >
//                       {dept.label}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* External Links */}
//             {[
//               { label: "Academic", url: "https://www.gpmuz.ac.in/academics/" },
//               { label: "Placements", url: "https://www.gpmuz.ac.in/training-and-placement/" },
//               { label: "Notices", url: "https://www.gpmuz.ac.in/category/notices/" },
//             ].map((link) => (
//               <button
//                 key={link.label}
//                 onClick={() => window.open(link.url, "_blank")}
//                 className="px-4 py-2 rounded-lg text-sm font-medium text-[#0a1628] hover:bg-[#e8f1fb] transition-colors"
//               >
//                 {link.label}
//               </button>
//             ))}
//           </div>

//           {/* Right Side */}
//           <div className="flex items-center gap-2 sm:gap-3">
//             {/* Login Button */}

//             <button
//               onClick={() => onNavigate("login")}
//               className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0f2e5a] to-[#1a6bc5] text-white text-sm font-medium shadow-md shadow-[#1a6bc5]/20 hover:shadow-lg hover:shadow-[#1a6bc5]/30 active:scale-[0.97] transition-all"
//             >
//               <LogIn size={18} strokeWidth={2.5} />
//               <span className="hidden lg:inline">Login</span>
//             </button>

//             {/* Mobile Login Icon */}
            

//             {/* GP Buddy */}
//             <button
//               onClick={() => onNavigate("gpbuddy")}
//               className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0f2e5a] to-[#1a6bc5] text-white text-sm font-medium shadow-md shadow-[#1a6bc5]/20 hover:shadow-lg hover:shadow-[#1a6bc5]/30 active:scale-[0.97] transition-all"
//             >
//               <Bot size={16} />
//               <span className="hidden sm:inline">GPM Buddy</span>
//             </button>

//             {/* Hamburger */}
//             <button
//               className="lg:hidden p-2 text-[#0a1628] hover:bg-blue-50 rounded-lg transition-colors"
//               onClick={() => setMobileOpen(!mobileOpen)}
//               aria-label="Toggle menu"
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ── Mobile Menu ── */}
//       <div
//         className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           mobileOpen ? "max-h-[700px] border-t border-blue-50" : "max-h-0"
//         }`}
//       >
//         <div className="bg-white px-4 py-3 space-y-0.5">
//           <button
//             onClick={() => {
//               onNavigate("home");
//               setMobileOpen(false);
//             }}
//             className={`w-full text-left p-3 rounded-lg text-sm font-medium transition-colors ${
//               currentPage === "home"
//                 ? "bg-[#0f2e5a] text-white"
//                 : "text-[#0a1628] hover:bg-blue-50"
//             }`}
//           >
//             Home
//           </button>

//           {/* Mobile Departments Accordion */}
//           <div>
//             <button
//               onClick={() => setMobileDeptOpen(!mobileDeptOpen)}
//               className={`w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors ${
//                 isDeptPage
//                   ? "bg-[#0f2e5a] text-white"
//                   : "text-[#0a1628] hover:bg-blue-50"
//               }`}
//             >
//               Departments
//               <ChevronDown
//                 size={14}
//                 className={`transition-transform duration-200 ${mobileDeptOpen ? "rotate-180" : ""}`}
//               />
//             </button>

//             {mobileDeptOpen && (
//               <div className="pl-4 pb-1 space-y-0.5">
//                 {departments.map((dept) => (
//                   <button
//                     key={dept.id}
//                     onClick={() => {
//                       onNavigate(dept.id);
//                       setMobileOpen(false);
//                     }}
//                     className="block w-full text-left px-4 py-2.5 text-sm text-gray-500 hover:text-[#0f2e5a] hover:bg-blue-50 rounded-lg transition-colors"
//                   >
//                     {dept.label}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Mobile External Links */}
//           {[
//             { label: "Academic", url: "https://www.gpmuz.ac.in/academics/" },
//             { label: "Placements", url: "https://www.gpmuz.ac.in/training-and-placement/" },
//             { label: "Notices", url: "https://www.gpmuz.ac.in/category/notices/" },
//           ].map((link) => (
//             <a
//               key={link.label}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setMobileOpen(false)}
//               className="block w-full text-left p-3 rounded-lg text-sm font-medium text-[#0a1628] hover:bg-blue-50 transition-colors"
//             >
//               {link.label}
//             </a>
//           ))}

//           {/* Mobile Login */}
//           <div className="pt-3 border-t border-blue-50 mt-2">
//             <a
//               href="#"
//               className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-[#0f2e5a] rounded-lg hover:bg-[#163d6e] transition-colors"
//             >
//               <LogIn size={15} strokeWidth={2.5} />
//               Student / Staff Login
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import image_poly from "@/imports/poly.jpg";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Bot, ChevronDown, LogIn, Phone, Mail } from "lucide-react";

const departments = [
  { label: "Civil Engineering", id: "dept-civil" },
  { label: "Computer Science & Engineering", id: "dept-cse" },
  { label: "Electrical Engineering", id: "dept-electrical" },
  { label: "Electronics Engineering", id: "dept-electronics" },
  { label: "Mechanical Engineering", id: "dept-mechanical" },
  { label: "Chemistry", id: "dept-chemistry" },
  { label: "Physics", id: "dept-physics" },
  { label: "Humanities", id: "dept-humanities" },
  { label: "Leather Technology", id: "dept-leather" },
];

const externalLinks = [
  { label: "Academic", url: "https://www.gpmuz.ac.in/academics/" },
  { label: "Placements", url: "https://www.gpmuz.ac.in/training-and-placement/" },
  { label: "Notices", url: "https://www.gpmuz.ac.in/category/notices/" },
];

/* ---------- Spinning Ashoka Chakra SVG ---------- */
function AshokaChakra({ size = 76 }) {
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
function Logo({ size = 90 }) {
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

export function Navbar({ onNavigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDeptOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDeptPage = currentPage.startsWith("dept-");

  return (
    <header className="sticky top-0 z-50 font-roboto" style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}>
      {/* ===================== TOP UTILITY BAR ===================== */}
      <div className="bg-[#0b1f5e] text-white text-[13px]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <a href="tel:+916212280000" className="flex items-center gap-1.5 hover:text-[#FF9933] transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 6212 280 000
            </a>
            <a href="mailto:principal@gpmuzaffarpur.ac.in" className="hidden sm:flex items-center gap-1.5 hover:text-[#FF9933] transition-colors">
              <Mail className="w-3.5 h-3.5" /> principal@gpmuzaffarpur.ac.in
            </a>
          </div>
          <div className="flex items-center gap-4 text-[11.5px]">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933]"></span> Screen Reader
            </span>
            <span className="hidden md:inline opacity-40">|</span>
            <a href="#main" className="hover:text-[#FF9933] transition-colors">Skip to Main Content</a>
          </div>
        </div>
      </div>

      {/* 4px tricolor strip */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-[#FF9933]"></div>
        <div className="flex-1 bg-white border-y border-gray-200"></div>
        <div className="flex-1 bg-[#138808]"></div>
      </div>

      {/* ===================== HEADER SECTION ===================== */}
      <div className="bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          
          {/* Logo + Name */}
          <button onClick={() => onNavigate("home")} className="flex items-center gap-4 group">
            <Logo size={80} />
            <div className="hidden sm:block text-left">
              <h1 className="text-[20px] sm:text-[24px] font-bold leading-tight text-[#0b1f5e]" style={{ letterSpacing: "-0.01em" }}>
                Government Polytechnic, Muzaffarpur
              </h1>
              <p className="text-[15px] sm:text-[17px] text-[#0b1f5e]/85 font-medium" style={{ fontFamily: "'Tiro Devanagari Hindi', sans-serif" }}>
                राजकीय पॉलिटेक्निक, मुजफ्फरपुर
              </p>
              <p className="text-[12px] text-gray-500 mt-0.5 font-medium uppercase tracking-wide">
                Department of Science &amp; Technology, Govt. of Bihar
              </p>
            </div>
          </button>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onNavigate("login")}
              className="flex items-center gap-2 bg-[#0b1f5e] text-white px-4 sm:px-5 py-2.5 rounded-sm text-[13px] font-semibold hover:bg-[#0a1a4d] transition-colors shadow-sm"
            >
              <LogIn className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">Student Login</span>
            </button>
            <button
              onClick={() => onNavigate("gpbuddy")}
              className="flex items-center gap-2 bg-[#FF9933] text-[#0b1f5e] px-4 sm:px-5 py-2.5 rounded-sm text-[13px] font-semibold hover:bg-[#ff8a14] transition-colors shadow-sm"
            >
              <Bot className="w-4 h-4" /> 
              <span className="hidden sm:inline">GPM Buddy</span>
            </button>

            {/* Mobile Hamburger inside header */}
            <button
              className="lg:hidden p-2 text-[#0b1f5e] hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===================== NAVIGATION BAR ===================== */}
      <nav
        className={`bg-[#0b1f5e] text-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="hidden lg:flex items-center h-[52px]">
            
            <button
              onClick={() => onNavigate("home")}
              className={`px-5 py-4 text-[14px] font-medium transition-colors ${
                currentPage === "home" ? "bg-white/10 text-[#FF9933]" : "hover:bg-white/10 hover:text-[#FF9933]"
              }`}
            >
              Home
            </button>

            {/* Desktop Departments Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDeptOpen(!deptOpen)}
                className={`flex items-center gap-1.5 px-5 py-4 text-[14px] font-medium transition-colors ${
                  isDeptPage ? "bg-white/10 text-[#FF9933]" : "hover:bg-white/10 hover:text-[#FF9933]"
                }`}
              >
                Departments 
                <ChevronDown size={14} className={`transition-transform duration-200 ${deptOpen ? "rotate-180" : ""}`} />
              </button>

              {deptOpen && (
                <div className="absolute left-0 top-full bg-white text-[#0b1f5e] shadow-xl border-t-2 border-[#FF9933] min-w-[280px] animate-[fadeIn_0.15s_ease] z-50">
                  <ul className="py-1.5 max-h-[420px] overflow-y-auto">
                    {departments.map((dept) => (
                      <li key={dept.id}>
                        <button
                          onClick={() => {
                            onNavigate(dept.id);
                            setDeptOpen(false);
                          }}
                          className="w-full text-left px-4 py-2.5 text-[13px] text-gray-700 hover:bg-[#0b1f5e] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                        >
                          {dept.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Desktop External Links */}
            {externalLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => window.open(link.url, "_blank")}
                className="px-5 py-4 text-[14px] font-medium hover:bg-white/10 hover:text-[#FF9933] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white text-[#0b1f5e] ${
            mobileOpen ? "max-h-[800px] shadow-lg" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            <button
              onClick={() => {
                onNavigate("home");
                setMobileOpen(false);
              }}
              className={`w-full text-left p-3 rounded-md text-sm font-medium transition-colors ${
                currentPage === "home" ? "bg-[#0b1f5e] text-white" : "text-[#0b1f5e] hover:bg-blue-50"
              }`}
            >
              Home
            </button>

            {/* Mobile Departments Accordion */}
            <div>
              <button
                onClick={() => setMobileDeptOpen(!mobileDeptOpen)}
                className={`w-full flex items-center justify-between p-3 rounded-md text-sm font-medium transition-colors ${
                  isDeptPage ? "bg-[#0b1f5e] text-white" : "text-[#0b1f5e] hover:bg-blue-50"
                }`}
              >
                Departments
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDeptOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileDeptOpen && (
                <div className="pl-4 pb-1 space-y-0.5 mt-1">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => {
                        onNavigate(dept.id);
                        setMobileOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-[#0b1f5e] hover:bg-blue-50 rounded-md transition-colors"
                    >
                      {dept.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile External Links */}
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left p-3 rounded-md text-sm font-medium text-[#0b1f5e] hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-gray-100 mt-2 flex gap-3">
              <button 
                onClick={() => { onNavigate("login"); setMobileOpen(false); }} 
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0b1f5e] rounded-md"
              >
                <LogIn size={16} strokeWidth={2.5} /> Student Login
              </button>
              <button 
                onClick={() => { onNavigate("gpbuddy"); setMobileOpen(false); }} 
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0b1f5e] bg-[#FF9933] rounded-md"
              >
                <Bot size={16} /> GPM Buddy
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Tiro+Devanagari+Hindi&display=swap');
        @keyframes gpm-spin { to { transform: rotate(360deg); } }
        .gpm-chakra { animation: gpm-spin 22s linear infinite; transform-origin: center; }
      `}</style>
    </header>
  );
}

export default Navbar;