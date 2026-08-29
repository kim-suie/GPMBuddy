// import { useState, useRef, useEffect } from "react";
// import {
//   Bot,
//   Send,
//   Mic,
//   Paperclip,
//   MessageCircle,
//   Building2,
//   ClipboardList,
//   Bell,
//   HelpCircle,
//   ArrowLeft,
//   User,
//   Sparkles,
//   X,
// } from "lucide-react";

// const suggestedQuestions = [
//   "How can I get admission?",
//   "What branches are available?",
//   "Tell me about placements.",
//   "Where is the library?",
//   "What hostel facilities are available?",
//   "How can I contact the college?",
// ];

// const botResponses = {
//   admission:
//     "Admissions to GPMUZ are through the DCECE (Diploma Certificate Entrance Competitive Examination) conducted by BCECEB, Bihar. You need to pass Class 10 (Matric) with at least 35% marks. After the exam, counselling is done based on merit and preference. Visit bceceboard.bihar.gov.in for details.",

//   branch:
//     "GPMUZ offers 6 branches: Computer Science Engineering (CSE), Mechanical Engineering (ME), Civil Engineering (CE), Electrical Engineering (EE), Electronics Engineering (ECE), and Leather Technology (LT). All are 3-year diploma programmes affiliated with SBTE Bihar.",

//   placement:
//     "Our Placement Cell actively connects students with industry. Over 80% of our students receive placement support. We have partnerships with companies like Tata Motors, L&T, BHEL, Wipro, NTPC, and many others.",

//   library:
//     "The Central Library is located in the main academic block. It houses 7,000+ books, technical journals, and digital resources. Library hours are 8 AM to 6 PM on working days.",

//   hostel:
//     "GPMUZ has separate hostels for boys and girls. Facilities include furnished rooms, mess, 24/7 security, Wi-Fi connectivity, and recreational areas.",

//   contact:
//     "You can reach GPMUZ at Address: Government Polytechnic, Muzaffarpur, Bihar – 842002. Phone: +91-621-2240XXX. Email: principal@gpmuz.ac.in.",
// };


// function getBotReply(input) {
//   const lower = input.toLowerCase();

//   if (
//     lower.includes("admission") ||
//     lower.includes("get in") ||
//     lower.includes("apply")
//   )
//     return botResponses.admission;

//   if (
//     lower.includes("branch") ||
//     lower.includes("department") ||
//     lower.includes("course")
//   )
//     return botResponses.branch;

//   if (
//     lower.includes("placement") ||
//     lower.includes("job") ||
//     lower.includes("career")
//   )
//     return botResponses.placement;

//   if (lower.includes("library") || lower.includes("book"))
//     return botResponses.library;

//   if (
//     lower.includes("hostel") ||
//     lower.includes("accommodation")
//   )
//     return botResponses.hostel;

//   if (
//     lower.includes("contact") ||
//     lower.includes("address") ||
//     lower.includes("phone")
//   )
//     return botResponses.contact;


//   return "I'm GP Buddy, your AI assistant for Government Polytechnic Muzaffarpur! I can help you with admissions, departments, placements, facilities, and more. What would you like to know? 😊";
// }


// const getTime = () =>
//   new Date().toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });


// export default function GPBuddyPage({ onNavigate }) {

//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       role: "bot",
//       text: "👋 Hi! I'm GP Buddy, your AI assistant for Government Polytechnic Muzaffarpur. How can I help you today?",
//       time: getTime(),
//     },
//   ]);


//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [activeSection, setActiveSection] = useState("chat");
//   const [sidebarOpen, setSidebarOpen] = useState(false);


//   const bottomRef = useRef(null);


//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, isTyping]);


//   const sendMessage = (text) => {

//     if (!text.trim()) return;


//     const userMsg = {
//       id: Date.now(),
//       role: "user",
//       text,
//       time: getTime(),
//     };


//     setMessages((prev) => [
//       ...prev,
//       userMsg,
//     ]);


//     setInput("");
//     setIsTyping(true);


//     setTimeout(() => {

//       const botMsg = {
//         id: Date.now() + 1,
//         role: "bot",
//         text: getBotReply(text),
//         time: getTime(),
//       };


//       setMessages((prev) => [
//         ...prev,
//         botMsg,
//       ]);


//       setIsTyping(false);

//     }, 1200);
//   };


//   const sidebarItems = [
//     {
//       id: "chat",
//       icon: MessageCircle,
//       label: "Chat",
//     },
//     {
//       id: "departments",
//       icon: Building2,
//       label: "Departments",
//     },
//     {
//       id: "admissions",
//       icon: ClipboardList,
//       label: "Admissions",
//     },
//     {
//       id: "notices",
//       icon: Bell,
//       label: "Notices",
//     },
//     {
//       id: "help",
//       icon: HelpCircle,
//       label: "Help",
//     },
//   ];


//   return (
//     <div className="flex h-screen bg-[#f0f4f8] overflow-hidden">

//       {/* Sidebar */}
//       <div
//         className={`${sidebarOpen
//             ? "translate-x-0"
//             : "-translate-x-full"
//           } lg:translate-x-0 fixed lg:relative z-40 h-full w-64 lg:w-20 xl:w-56 bg-white border-r border-[#e2eaf4] flex flex-col transition-transform duration-300`}
//       >

//         <div className="p-4 border-b border-[#e2eaf4] flex items-center gap-3">

//           <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f2e5a] to-[#1a6bc5] flex items-center justify-center">
//             <Bot size={18} className="text-white" />
//           </div>


//           <span className="text-[#0f2e5a] font-bold text-sm lg:hidden xl:block">
//             GP Buddy
//           </span>


//           <button
//             className="ml-auto lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           >
//             <X size={18} />
//           </button>

//         </div>


//         <nav className="flex-1 p-3 space-y-1 overflow-y-auto">

//           {sidebarItems.map(
//             ({ id, icon: Icon, label }) => (

//               <button
//                 key={id}
//                 onClick={() => {
//                   setActiveSection(id);
//                   setSidebarOpen(false);
//                 }}

//                 className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${activeSection === id
//                     ? "bg-[#0f2e5a] text-white"
//                     : "text-[#4a6080] hover:bg-[#e8f1fb]"
//                   }`}
//               >

//                 <Icon size={17} />

//                 <span className="lg:hidden xl:block">
//                   {label}
//                 </span>

//               </button>

//             ))}

//         </nav>


//         <div className="p-3 border-t border-[#e2eaf4]">

//           <button
//             onClick={() => onNavigate("home")}
//             className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#4a6080]"
//           >

//             <ArrowLeft size={17} />

//             <span className="lg:hidden xl:block">
//               Back to Site
//             </span>

//           </button>

//         </div>


//       </div>
//       {/* Mobile Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-30 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

//         {/* Header */}
//         <div className="h-16 bg-white border-b border-[#e2eaf4] flex items-center gap-3 px-4 lg:px-6">

//           <button
//             className="lg:hidden p-2"
//             onClick={() => setSidebarOpen(true)}
//           >
//             <Bot size={18} className="text-[#0f2e5a]" />
//           </button>


//           <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f2e5a] to-[#1a6bc5] hidden lg:flex items-center justify-center">
//             <Bot size={18} className="text-white" />
//           </div>


//           <div>
//             <div className="font-semibold text-sm text-[#0f2e5a]">
//               GP Buddy
//             </div>

//             <div className="flex items-center gap-1.5">
//               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
//               <span className="text-xs text-[#4a6080]">
//                 Online · Ready to help
//               </span>
//             </div>

//           </div>


//           <div className="ml-auto">

//             <span className="hidden sm:flex items-center gap-1.5 text-xs text-[#4a6080] bg-[#e8f1fb] px-3 py-1.5 rounded-full">

//               <Sparkles size={12} className="text-[#38b2f0]" />

//               AI Powered

//             </span>

//           </div>

//         </div>



//         {/* Chat Area */}
//         <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6 space-y-4">


//           {messages.length <= 2 && (

//             <div className="max-w-2xl mx-auto mb-5">


//               <div className="bg-gradient-to-br from-[#0f2e5a] to-[#1a6bc5] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">


//                 <div className="flex-1">

//                   <h2 className="text-2xl font-bold text-white mb-2">
//                     👋 Hi! I'm GP Buddy
//                   </h2>


//                   <p className="text-white/80 text-sm">
//                     Your AI Assistant for Government Polytechnic Muzaffarpur.
//                     Ask me anything about admissions, departments, facilities,
//                     and more!
//                   </p>

//                 </div>


//                 <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center">

//                   <Bot size={40} className="text-white" />

//                 </div>


//               </div>



//               <div className="mt-5">

//                 <p className="text-xs text-[#4a6080] mb-3">
//                   Suggested Questions
//                 </p>


//                 <div className="grid sm:grid-cols-2 gap-3">

//                   {suggestedQuestions.map((q) => (

//                     <button
//                       key={q}
//                       onClick={() => sendMessage(q)}
//                       className="text-left px-4 py-3 bg-white rounded-xl border border-[#e2eaf4] text-sm text-[#0f2e5a] hover:border-[#38b2f0]"
//                     >

//                       <span className="text-[#38b2f0] mr-2">
//                         →
//                       </span>

//                       {q}

//                     </button>

//                   ))}

//                 </div>

//               </div>


//             </div>

//           )}



//           {/* Messages */}

//           {messages.map((msg) => (

//             <div
//               key={msg.id}
//               className={`flex items-end gap-2 ${msg.role === "user"
//                   ? "justify-end"
//                   : "justify-start"
//                 }`}
//             >


//               {msg.role === "bot" && (

//                 <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0f2e5a] to-[#1a6bc5] flex items-center justify-center">

//                   <Bot size={14} className="text-white" />

//                 </div>

//               )}



//               <div className="max-w-md">


//                 <div
//                   className={`px-4 py-3 rounded-2xl text-sm ${msg.role === "user"
//                       ? "bg-[#0f2e5a] text-white"
//                       : "bg-white border text-[#0a1628]"
//                     }`}
//                 >

//                   {msg.text}

//                 </div>


//                 <div className="text-xs text-[#4a6080] mt-1">

//                   {msg.time}

//                 </div>


//               </div>



//               {msg.role === "user" && (

//                 <div className="w-8 h-8 rounded-xl bg-[#e8f1fb] flex items-center justify-center">

//                   <User size={14} className="text-[#0f2e5a]" />

//                 </div>

//               )}


//             </div>

//           ))}




//           {isTyping && (

//             <div className="flex items-center gap-3">

//               <div className="w-8 h-8 rounded-xl bg-[#0f2e5a] flex items-center justify-center">

//                 <Bot size={14} className="text-white" />

//               </div>


//               <div className="bg-white px-4 py-3 rounded-xl border">

//                 <span className="animate-bounce">
//                   ● ● ●
//                 </span>

//               </div>

//             </div>

//           )}



//           <div ref={bottomRef} />


//         </div>




//         {/* Input */}

//         <div className="bg-white border-t border-[#e2eaf4] p-4">

//           <div className="flex gap-3 max-w-4xl mx-auto">


//             <button className="p-3 text-[#4a6080]">
//               <Paperclip size={18} />
//             </button>



//             <input

//               type="text"

//               value={input}

//               onChange={(e) => setInput(e.target.value)}

//               onKeyDown={(e) => {
//                 if (e.key === "Enter")
//                   sendMessage(input)
//               }}

//               placeholder="Ask me anything about GPMUZ..."

//               className="flex-1 px-4 py-3 rounded-xl bg-[#f0f4f8] border outline-none"

//             />



//             <button className="p-3 text-[#4a6080]">
//               <Mic size={18} />
//             </button>



//             <button

//               onClick={() => sendMessage(input)}

//               disabled={!input.trim()}

//               className="p-3 rounded-xl bg-[#0f2e5a] text-white disabled:opacity-40"

//             >

//               <Send size={18} />

//             </button>


//           </div>



//           <p className="text-center text-xs text-[#4a6080] mt-2">

//             GP Buddy provides general information. For official queries,
//             contact the college directly.

//           </p>


//         </div>


//       </div>

//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import {
  Bot,
  Send,
  Mic,
  Paperclip,
  MessageCircle,
  Building2,
  ClipboardList,
  Bell,
  HelpCircle,
  ArrowLeft,
  User,
  Sparkles,
  X,
} from "lucide-react";

import { askQuestion } from "../../../services/chatbotsevice";

const suggestedQuestions = [
  "How can I get admission?",
  "What branches are available?",
  "Tell me about placements.",
  "Where is the library?",
  "What hostel facilities are available?",
  "How can I contact the college?",
];

const getTime = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

export default function GPBuddyPage({ onNavigate }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      text: "👋 Hi! I'm GP Buddy, your AI assistant for Government Polytechnic Muzaffarpur. How can I help you today?",
      time: getTime(),
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeSection, setActiveSection] = useState("chat");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = async (text) => {
    if (!text.trim() || isTyping) return;

    const question = text.trim();

    const userMsg = {
      id: Date.now(),
      role: "user",
      text: question,
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setIsTyping(true);

    try {
      // Send question to backend
      const data = await askQuestion(question);

      console.log("Backend response:", data);

      // IMPORTANT:
      // Backend response is:
      //
      // {
      //   success: true,
      //   message: "Answer generated",
      //   data: {
      //      answer: "Actual answer here"
      //   }
      // }
      //
      // So we need data.data.answer

      const botText = data?.data?.answer;

      const botMsg = {
        id: Date.now() + 1,
        role: "bot",
        text:
          botText ||
          "Sorry, I couldn't find an answer.",
        time: getTime(),
      };

      setMessages((prev) => [...prev, botMsg]);

    } catch (error) {
      console.error("Chatbot error:", error);

      const errorMsg = {
        id: Date.now() + 1,
        role: "bot",
        text:
          "Sorry, I couldn't connect to GP Buddy right now. Please try again.",
        time: getTime(),
      };

      setMessages((prev) => [...prev, errorMsg]);

    } finally {
      setIsTyping(false);
    }
  };

  const sidebarItems = [
    {
      id: "chat",
      icon: MessageCircle,
      label: "Chat",
    },
    {
      id: "departments",
      icon: Building2,
      label: "Departments",
    },
    {
      id: "admissions",
      icon: ClipboardList,
      label: "Admissions",
    },
    {
      id: "notices",
      icon: Bell,
      label: "Notices",
    },
    {
      id: "help",
      icon: HelpCircle,
      label: "Help",
    },
  ];

  return (<div className="flex h-screen bg-[#f0f4f8] overflow-hidden">

    ```
    {/* Sidebar */}
    <div
      className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative z-40 h-full w-64 lg:w-20 xl:w-56 bg-white border-r border-[#e2eaf4] flex flex-col transition-transform duration-300`}
    >

      <div className="p-4 border-b border-[#e2eaf4] flex items-center gap-3">

        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f2e5a] to-[#1a6bc5] flex items-center justify-center">
          <Bot size={18} className="text-white" />
        </div>

        <span className="text-[#0f2e5a] font-bold text-sm lg:hidden xl:block">
          GP Buddy
        </span>

        <button
          className="ml-auto lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={18} />
        </button>

      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">

        {sidebarItems.map(({ id, icon: Icon, label }) => (

          <button
            key={id}
            onClick={() => {
              setActiveSection(id);
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${activeSection === id
              ? "bg-[#0f2e5a] text-white"
              : "text-[#4a6080] hover:bg-[#e8f1fb]"
              }`}
          >

            <Icon size={17} />

            <span className="lg:hidden xl:block">
              {label}
            </span>

          </button>

        ))}

      </nav>

      <div className="p-3 border-t border-[#e2eaf4]">

        <button
          onClick={() => onNavigate("home")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#4a6080]"
        >

          <ArrowLeft size={17} />

          <span className="lg:hidden xl:block">
            Back to Site
          </span>

        </button>

      </div>

    </div>

    {/* Mobile Overlay */}
    {sidebarOpen && (
      <div
        className="fixed inset-0 bg-black/30 z-30 lg:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}

    {/* Main Content */}
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

      {/* Header */}
      <div className="h-16 bg-white border-b border-[#e2eaf4] flex items-center gap-3 px-4 lg:px-6">

        <button
          className="lg:hidden p-2"
          onClick={() => setSidebarOpen(true)}
        >
          <Bot size={18} className="text-[#0f2e5a]" />
        </button>

        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f2e5a] to-[#1a6bc5] hidden lg:flex items-center justify-center">
          <Bot size={18} className="text-white" />
        </div>

        <div>

          <div className="font-semibold text-sm text-[#0f2e5a]">
            GP Buddy
          </div>

          <div className="flex items-center gap-1.5">

            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-xs text-[#4a6080]">
              Online · Ready to help
            </span>

          </div>

        </div>

        <div className="ml-auto">

          <span className="hidden sm:flex items-center gap-1.5 text-xs text-[#4a6080] bg-[#e8f1fb] px-3 py-1.5 rounded-full">

            <Sparkles size={12} className="text-[#38b2f0]" />

            AI Powered

          </span>

        </div>

      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6 space-y-4">

        {messages.length <= 2 && (

          <div className="max-w-2xl mx-auto mb-5">

            <div className="bg-gradient-to-br from-[#0f2e5a] to-[#1a6bc5] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">

              <div className="flex-1">

                <h2 className="text-2xl font-bold text-white mb-2">
                  👋 Hi! I'm GP Buddy
                </h2>

                <p className="text-white/80 text-sm">
                  Your AI Assistant for Government Polytechnic Muzaffarpur.
                  Ask me anything about admissions, departments, facilities,
                  and more!
                </p>

              </div>

              <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center">

                <Bot size={40} className="text-white" />

              </div>

            </div>

            <div className="mt-5">

              <p className="text-xs text-[#4a6080] mb-3">
                Suggested Questions
              </p>

              <div className="grid sm:grid-cols-2 gap-3">

                {suggestedQuestions.map((q) => (

                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    disabled={isTyping}
                    className="text-left px-4 py-3 bg-white rounded-xl border border-[#e2eaf4] text-sm text-[#0f2e5a] hover:border-[#38b2f0] disabled:opacity-50"
                  >

                    <span className="text-[#38b2f0] mr-2">
                      →
                    </span>

                    {q}

                  </button>

                ))}

              </div>

            </div>

          </div>

        )}

        {/* Messages */}
        {messages.map((msg) => (

          <div
            key={msg.id}
            className={`flex items-end gap-2 ${msg.role === "user"
              ? "justify-end"
              : "justify-start"
              }`}
          >

            {msg.role === "bot" && (

              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0f2e5a] to-[#1a6bc5] flex items-center justify-center">

                <Bot size={14} className="text-white" />

              </div>

            )}

            <div className="max-w-md">

              <div
                className={`px-4 py-3 rounded-2xl text-sm ${msg.role === "user"
                  ? "bg-[#0f2e5a] text-white"
                  : "bg-white border text-[#0a1628]"
                  }`}
              >

                {msg.text}

              </div>

              <div className="text-xs text-[#4a6080] mt-1">

                {msg.time}

              </div>

            </div>

            {msg.role === "user" && (

              <div className="w-8 h-8 rounded-xl bg-[#e8f1fb] flex items-center justify-center">

                <User size={14} className="text-[#0f2e5a]" />

              </div>

            )}

          </div>

        ))}

        {/* Typing Indicator */}
        {isTyping && (

          <div className="flex items-center gap-3">

            <div className="w-8 h-8 rounded-xl bg-[#0f2e5a] flex items-center justify-center">

              <Bot size={14} className="text-white" />

            </div>

            <div className="bg-white px-4 py-3 rounded-xl border">

              <span className="animate-bounce">
                ● ● ●
              </span>

            </div>

          </div>

        )}

        <div ref={bottomRef} />

      </div>

      {/* Input */}
      <div className="bg-white border-t border-[#e2eaf4] p-4">

        <div className="flex gap-3 max-w-4xl mx-auto">

          <button
            className="p-3 text-[#4a6080]"
            type="button"
          >
            <Paperclip size={18} />
          </button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            placeholder="Ask me anything about GPMUZ..."
            className="flex-1 px-4 py-3 rounded-xl bg-[#f0f4f8] border outline-none"
            disabled={isTyping}
          />

          <button
            className="p-3 text-[#4a6080]"
            type="button"
          >
            <Mic size={18} />
          </button>

          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isTyping}
            className="p-3 rounded-xl bg-[#0f2e5a] text-white disabled:opacity-40"
            type="button"
          >

            <Send size={18} />

          </button>

        </div>

        <p className="text-center text-xs text-[#4a6080] mt-2">
          GP Buddy provides general information. For official queries,
          contact the college directly.
        </p>

      </div>

    </div>

  </div>

  );
}
