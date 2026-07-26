import {
  Building2,
  ClipboardList,
  Briefcase,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import { motion } from "motion/react";


const cards = [
  {
    id: "departments",
    icon: Building2,
    title: "Departments",
    description:
      "Explore our 6 technical departments offering diploma programs in engineering.",
    color: "from-[#0f2e5a] to-[#1a4a8a]",
    bg: "bg-[#e8f1fb]",
    iconBg: "bg-[#0f2e5a]",
    url: "https://www.gpmuz.ac.in/department/",
  },
  {
    id: "admissions",
    icon: ClipboardList,
    title: "Admissions",
    description:
      "Learn about admission criteria, eligibility, and important dates for 2024–25.",
    color: "from-[#1a6bc5] to-[#38b2f0]",
    bg: "bg-[#e0f3fd]",
    iconBg: "bg-[#1a6bc5]",
    url: "https://www.gpmuz.ac.in/academics/",
  },
  {
    id: "placements",
    icon: Briefcase,
    title: "Placements",
    description:
      "Discover our strong industry connections and placement assistance program.",
    color: "from-[#0a9ed4] to-[#38b2f0]",
    bg: "bg-[#e0f3fd]",
    iconBg: "bg-[#0a9ed4]",
    url: "https://www.gpmuz.ac.in/training-and-placement/",
  },
  {
    id: "library",
    icon: BookOpen,
    title: "Library",
    description:
      "Access thousands of technical books, journals, and digital resources.",
    color: "from-[#0f2e5a] to-[#1a6bc5]",
    bg: "bg-[#e8f1fb]",
    iconBg: "bg-[#1a4a8a]",
    url: null,
  },
];


export function QuickAccess({ onNavigate }) {

  return (

    <section className="py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">


        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.6
          }}

          className="text-center mb-10"

        >

          <span className="
          text-[#38b2f0]
          text-sm
          font-semibold
          uppercase
          tracking-wider
          ">

            Quick Access

          </span>


          <h2
          className="
          text-3xl
          font-bold
          text-[#0f2e5a]
          mt-2
          "
          style={{
            fontFamily:"Poppins, sans-serif"
          }}
          >

            Everything You Need

          </h2>


        </motion.div>




        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        ">


          {
            cards.map((card,index)=>{

              const Icon = card.icon;


              return (

                <motion.button

                  key={card.id}

                  initial={{
                    opacity:0,
                    y:30
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  viewport={{
                    once:true
                  }}

                  transition={{
                    duration:0.5,
                    delay:index*0.1
                  }}


                  onClick={()=>{

                    if(card.url){

                      window.open(
                        card.url,
                        "_blank"
                      );

                    }
                    else{

                      onNavigate(card.id);

                    }

                  }}


                  className="
                  group
                  text-left
                  p-6
                  rounded-2xl
                  bg-white
                  border
                  border-[#e2eaf4]
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  cursor-pointer
                  "

                >


                  <div
                  className={`
                  w-12
                  h-12
                  rounded-xl
                  ${card.iconBg}
                  flex
                  items-center
                  justify-center
                  mb-4
                  group-hover:scale-110
                  transition-transform
                  `}
                  >

                    <Icon
                    size={22}
                    className="text-white"
                    />

                  </div>




                  <h3
                  className="
                  font-semibold
                  text-[#0f2e5a]
                  mb-2
                  "
                  style={{
                    fontFamily:"Poppins, sans-serif"
                  }}
                  >

                    {card.title}

                  </h3>




                  <p className="
                  text-sm
                  text-[#4a6080]
                  leading-relaxed
                  mb-4
                  ">

                    {card.description}

                  </p>




                  <div
                  className="
                  flex
                  items-center
                  gap-1
                  text-[#38b2f0]
                  text-sm
                  font-medium
                  group-hover:gap-2
                  transition-all
                  "
                  >

                    Learn more

                    <ArrowRight size={14}/>

                  </div>



                </motion.button>

              );

            })
          }



        </div>


      </div>


    </section>

  );

}


export default QuickAccess;