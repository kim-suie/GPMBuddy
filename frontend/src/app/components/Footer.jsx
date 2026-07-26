import image_poly from "@/imports/poly.jpg";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#0a1628] text-white pt-10 sm:pt-14 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-14 overflow-hidden rounded-md shadow-md bg-white">
                <img
                  src={image_poly}
                  alt="Government Polytechnic Muzaffarpur"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-bold text-sm">
                  Govt. Polytechnic
                </h3>
                <p className="text-sky-400 text-xs">
                  Muzaffarpur, Bihar
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm mb-5">
              Empowering Future Engineers Since 1924 through
              quality technical education and innovation.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-sky-500 transition"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2">
              {[
                { label: "Home", url: null },
                {
                  label: "Departments",
                  url: "https://www.gpmuz.ac.in/department/",
                },
                {
                  label: "Academic",
                  url: "https://www.gpmuz.ac.in/academics/",
                },
                {
                  label: "Placements",
                  url: "https://www.gpmuz.ac.in/training-and-placement/",
                },
                {
                  label: "Notices",
                  url: "https://www.gpmuz.ac.in/category/notices/",
                },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    className="text-white/60 hover:text-sky-400 transition"
                    onClick={() => {
                      if (link.url) {
                        window.open(link.url, "_blank");
                      } else {
                        onNavigate(link.label.toLowerCase());
                      }
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-semibold mb-4">Departments</h4>

            <ul className="space-y-2">
              {[
                "Computer Science",
                "Mechanical Engineering",
                "Civil Engineering",
                "Electrical Engineering",
                "Electronics Engineering",
                "Leather Technology",
              ].map((dept) => (
                <li
                  key={dept}
                  className="text-white/60 hover:text-sky-400 cursor-pointer"
                >
                  {dept}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>

            <div className="space-y-3 text-white/60 text-sm">
              <div className="flex gap-2">
                <MapPin size={16} className="text-sky-400 mt-1" />
                <span>
                  Government Polytechnic, Muzaffarpur, Bihar - 842002
                </span>
              </div>

              <div className="flex gap-2">
                <Phone size={16} className="text-sky-400" />
                <span>+91-621-2240XXX</span>
              </div>

              <div className="flex gap-2">
                <Mail size={16} className="text-sky-400" />
                <span>principal@gpmuz.ac.in</span>
              </div>

              <div className="flex gap-2">
                <Globe size={16} className="text-sky-400" />
                <span>www.gpmuz.ac.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-white/40">
            © 2025 Government Polytechnic Muzaffarpur. All rights reserved.
          </p>

          <div className="flex gap-4 mt-3 sm:mt-0 text-xs text-white/40">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Use
            </span>
            <span className="hover:text-white cursor-pointer">
              RTI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}