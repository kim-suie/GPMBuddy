import {
  Bell,
  Calendar,
  ArrowRight,
  AlertCircle,
  Info,
  CheckCircle,
  ExternalLink,
  Loader2,
} from "lucide-react";

import { motion } from "motion/react";
import { useState } from "react";

const fallbackNotices = [
  {
    id: 1,
    type: "important",
    tag: "Admissions",
    title: "DCECE 2024–25 Admission Process Begins",
    desc: "Diploma Certificate Entrance Competitive Examination results declared. Students may now submit preferences.",
    date: "June 3, 2025",
    icon: AlertCircle,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    id: 2,
    type: "info",
    tag: "Academic",
    title: "End-Semester Examination Time Table Released",
    desc: "Theory and practical examination schedule for all semesters is now available on the notice board.",
    date: "May 28, 2025",
    icon: Info,
    color: "text-[#1a6bc5]",
    bg: "bg-[#e0f3fd]",
    border: "border-blue-100",
  },
  {
    id: 3,
    type: "success",
    tag: "Scholarship",
    title: "Bihar State Scholarship Applications Open",
    desc: "SC/ST/OBC students are invited to apply for post-matric scholarship for academic year 2024–25.",
    date: "May 22, 2025",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];


function NoticesSection() {

  const [notices, setNotices] = useState(fallbackNotices);
  const [loading, setLoading] = useState(false);


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4f8]">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="flex justify-between items-center mb-6"
        >

          <div>
            <span className="text-[#38b2f0] text-sm font-semibold">
              ANNOUNCEMENTS
            </span>

            <h2 className="text-3xl font-bold text-[#0f2e5a]">
              Latest Notices
            </h2>
          </div>


          {
            loading &&
            <Loader2 className="animate-spin text-blue-500"/>
          }


          <button
            onClick={() =>
              window.open(
                "https://www.gpmuz.ac.in/category/notices/",
                "_blank"
              )
            }
            className="
            flex items-center gap-2
            px-4 py-2 rounded-xl
            bg-gradient-to-r from-[#0f2e5a] to-[#1a6bc5]
            text-white
            "
          >

            View Live Notices
            <ExternalLink size={14}/>

          </button>


        </motion.div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">


        {
          notices.map((notice,index)=>{

            const Icon = notice.icon;


            return (

              <motion.div

              key={notice.id}

              initial={{
                opacity:0,
                x:index%2===0?-30:30
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              transition={{
                duration:0.5
              }}


              onClick={()=>
                window.open(
                  "https://www.gpmuz.ac.in/category/notices/",
                  "_blank"
                )
              }


              className={`
              p-5 rounded-2xl
              bg-white
              border
              ${notice.border}
              hover:shadow-lg
              cursor-pointer
              `}

              >


                <div className="flex gap-4">


                  <div
                  className={`
                  w-10 h-10 rounded-xl
                  ${notice.bg}
                  flex items-center justify-center
                  `}
                  >

                    <Icon
                    size={18}
                    className={notice.color}
                    />

                  </div>



                  <div className="flex-1">


                    <div className="flex gap-3 items-center">

                      <span
                      className={`
                      text-xs px-2 py-1 rounded-full
                      ${notice.bg}
                      ${notice.color}
                      `}
                      >

                        {notice.tag}

                      </span>


                      <span className="text-xs text-gray-500 flex gap-1">

                        <Calendar size={12}/>

                        {notice.date}

                      </span>


                    </div>



                    <h3 className="
                    font-semibold
                    text-[#0f2e5a]
                    mt-2
                    "
                    >

                      {notice.title}

                    </h3>



                    <p className="
                    text-xs
                    text-gray-500
                    mt-2
                    "
                    >

                      {notice.desc}

                    </p>


                  </div>



                  <ArrowRight
                  size={15}
                  className="text-blue-400"
                  />



                </div>


              </motion.div>

            )

          })
        }


        </div>



        <div
        className="
        mt-8
        p-6
        rounded-2xl
        bg-gradient-to-r
        from-[#0f2e5a]
        to-[#1a6bc5]
        text-center
        "
        >


          <div className="flex justify-center gap-2">

            <Bell className="text-blue-300"/>

            <span className="text-white font-semibold">
              Never Miss an Update
            </span>

          </div>


          <p className="text-white/80 mt-3 text-sm">
            Visit the official GPMUZ website for latest notices.
          </p>


          <button
          onClick={()=>
            window.open(
              "https://www.gpmuz.ac.in/category/notices/",
              "_blank"
            )
          }
          className="
          mt-5
          bg-white
          text-[#0f2e5a]
          px-6 py-3
          rounded-xl
          font-bold
          "
          >

            Visit Official Notices Page

            <ExternalLink
            size={16}
            className="inline ml-2"
            />

          </button>


        </div>


      </div>


    </section>
  );
}


export default NoticesSection;