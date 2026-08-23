import image_poly from "@/imports/poly.jpg";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Bot, ChevronDown } from "lucide-react";


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


export function Navbar({ onNavigate, currentPage }) {

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false);

  const dropdownRef = useRef(null);



  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);



  useEffect(() => {

    const handleClickOutside = (e) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDeptOpen(false);
      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );


  }, []);



  const isDeptPage = currentPage.startsWith("dept-");



  return (

    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
        : "bg-white/80 backdrop-blur-sm"
      }`}
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 lg:h-20">


          {/* Logo */}

          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3"
          >

            <img
              src={image_poly}
              alt="Government Polytechnic Muzaffarpur"
              className="
              w-12 h-14
              lg:w-14 lg:h-16
              rounded-md
              object-cover
              shadow-md
              "
            />


            <div className="hidden sm:block">

              <h1 className="
              text-[#0f2e5a]
              font-bold
              text-sm
              "
              >

                Government Polytechnic

              </h1>


              <p className="
              text-[#38b2f0]
              text-xs
              "
              >

                Muzaffarpur, Bihar

              </p>


            </div>


          </button>



          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-1">


            <button
              onClick={() => onNavigate("home")}
              className={`
              px-4 py-2 rounded-lg text-sm
              ${
                currentPage==="home"
                ? "bg-[#0f2e5a] text-white"
                : "text-[#0a1628] hover:bg-[#e8f1fb]"
              }
              `}
            >

              Home

            </button>



            <div
              className="relative"
              ref={dropdownRef}
            >

              <button

                onClick={() =>
                  setDeptOpen(!deptOpen)
                }

                className={`
                flex items-center gap-1
                px-4 py-2 rounded-lg text-sm

                ${
                  isDeptPage
                  ? "bg-[#0f2e5a] text-white"
                  : "text-[#0a1628] hover:bg-[#e8f1fb]"
                }
                `}
              >

                Departments

                <ChevronDown
                size={14}
                className={
                  deptOpen
                  ? "rotate-180"
                  : ""
                }
                />

              </button>



              {
                deptOpen &&

                <div className="
                absolute top-full mt-2
                w-64
                bg-white
                rounded-xl
                shadow-xl
                border
                py-2
                "
                >


                  {
                    departments.map((dept)=>(

                      <button

                      key={dept.id}

                      onClick={()=>{

                        onNavigate(dept.id);
                        setDeptOpen(false);

                      }}

                      className="
                      w-full text-left
                      px-4 py-2
                      text-sm
                      hover:bg-blue-50
                      "
                      >

                        {dept.label}

                      </button>

                    ))
                  }


                </div>

              }


            </div>




            {
              [
                {
                  label:"Academic",
                  url:"https://www.gpmuz.ac.in/academics/"
                },
                {
                  label:"Placements",
                  url:"https://www.gpmuz.ac.in/training-and-placement/"
                },
                {
                  label:"Notices",
                  url:"https://www.gpmuz.ac.in/category/notices/"
                }

              ].map(link=>(


                <button

                key={link.label}

                onClick={() =>
                  window.open(link.url,"_blank")
                }

                className="
                px-4 py-2
                rounded-lg
                text-sm
                hover:bg-blue-50
                "
                >

                  {link.label}

                </button>


              ))
            }


          </div>




          {/* Right Side */}

          <div className="flex items-center gap-3">


            <button

            onClick={() =>
              onNavigate("gpbuddy")
            }

            className="
            flex items-center gap-2
            px-4 py-2
            rounded-xl
            bg-gradient-to-r
            from-[#0f2e5a]
            to-[#1a6bc5]
            text-white
            "
            >

              <Bot size={16}/>

              GPM Buddy

            </button>



            <button

            className="
            lg:hidden
            p-2
            "

            onClick={() =>
              setMobileOpen(!mobileOpen)
            }

            >

              {
                mobileOpen
                ?
                <X size={20}/>
                :
                <Menu size={20}/>
              }


            </button>


          </div>


        </div>


      </div>




      {/* Mobile Menu */}

      {
        mobileOpen &&

        <div className="
        lg:hidden
        bg-white
        border-t
        p-4
        "
        >


          <button

          onClick={()=>{

            onNavigate("home");
            setMobileOpen(false);

          }}

          className="
          w-full
          text-left
          p-3
          rounded-lg
          hover:bg-blue-50
          "
          >

            Home

          </button>




          <button

          onClick={() =>
            setMobileDeptOpen(!mobileDeptOpen)
          }

          className="
          w-full
          flex justify-between
          p-3
          "
          >

            Departments

            <ChevronDown size={14}/>

          </button>



          {
            mobileDeptOpen &&

            <div className="ml-4">

              {
                departments.map(dept=>(

                  <button

                  key={dept.id}

                  onClick={()=>{

                    onNavigate(dept.id);
                    setMobileOpen(false);

                  }}

                  className="
                  block
                  w-full
                  text-left
                  p-2
                  "
                  >

                    {dept.label}

                  </button>

                ))
              }

            </div>

          }

          <button

          className="
          w-full
          flex justify-between
          p-3
          "
          >

            Login

          </button>



        </div>


      }



    </nav>

  );

}


export default Navbar;