import image_campus from "@/imports/file_6853c12e5735f-scaled.jpg";
import { Bot, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {

  const handleNavigate = () => {
    alert("Opening GP Buddy...");
    // Add your router navigation here
    // Example: navigate("/gpbuddy")
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image_campus}
          alt="Government Polytechnic Muzaffarpur campus"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0f2e5a]/75 to-[#0f2e5a]/40" />
      </div>


      {/* Floating Shapes */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 right-20 w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 rotate-12 hidden lg:block"
      />


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-40 right-40 w-20 h-20 rounded-2xl bg-[#38b2f0]/20 backdrop-blur-sm border border-[#38b2f0]/30 -rotate-6 hidden lg:block"
      />


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute top-1/2 right-16 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hidden lg:block"
      />



      {/* Content */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

        <div className="max-w-5xl">


          {/* Badge */}

          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white mb-6"
          >
            <MapPin size={14} className="text-[#38b2f0]" />

            Muzaffarpur, Bihar · Est. 1924

          </motion.div>



          {/* Title */}

          <motion.h1
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{
              fontFamily:"Poppins, sans-serif"
            }}
          >

            Government
            <br />

            <span className="text-[#38b2f0]">
              Polytechnic
            </span>

            <br />

            Muzaffarpur

          </motion.h1>



          {/* Description */}

          <motion.p
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8,delay:0.2}}
            className="text-lg lg:text-2xl text-white/80 max-w-2xl mb-8"
          >

            Empowering Future Engineers Since 1924 through quality technical
            education, innovation, and industry-ready skills.

          </motion.p>



          {/* Buttons */}

          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8,delay:0.4}}
            className="flex flex-wrap gap-4"
          >


            <button
              onClick={() =>
                window.open(
                  "https://www.gpmuz.ac.in/department/",
                  "_blank"
                )
              }
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0f2e5a] font-semibold shadow-lg hover:bg-blue-50"
            >

              Explore Campus

              <ArrowRight size={16}/>

            </button>



            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#38b2f0] to-[#1a6bc5] text-white font-semibold shadow-lg hover:scale-105 transition"
            >

              <Bot size={16}/>

              Talk to GP Buddy

            </button>


          </motion.div>




          {/* Stats */}

          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8,delay:0.7}}
            className="mt-12 flex flex-wrap gap-8"
          >

            {
              [
                {
                  value:"100+",
                  label:"Years of Excellence"
                },
                {
                  value:"6",
                  label:"Departments"
                },
                {
                  value:"5000+",
                  label:"Alumni Network"
                },
                {
                  value:"AICTE",
                  label:"Approved"
                }

              ].map((item)=>(
                <div key={item.label}>

                  <div
                    className="text-2xl font-bold text-white"
                  >
                    {item.value}
                  </div>

                  <div className="text-white/60 text-xs">
                    {item.label}
                  </div>

                </div>
              ))

            }

          </motion.div>


        </div>

      </div>


    </section>
  );
}