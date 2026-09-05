import { useState } from "react"; 
import { Navbar } from "./components/Navbar"; 
import HeroSection  from "./components/HeroSection"; 
import  Footer  from "./components/Footer"; 
import  GPBuddyPage  from "./components/GPBuddyPage"; 
import DepartmentPage from "./components/DepartmentPage"; 
import Login from "./components/Login";

export default function App() { 
  const [currentPage, setCurrentPage] = useState("home"); 

  // CHANGED HERE: Removed ": string" type definition
  const handleNavigate = (page) => { 
    setCurrentPage(page); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }; 

  if (currentPage === "gpbuddy") { 
    return <GPBuddyPage onNavigate={handleNavigate} />; 
  } 

  if (currentPage === "login") { 
    return <Login onNavigate={handleNavigate} />; 
  } 

  if (currentPage.startsWith("dept-")) { 
    return ( 
      <> 
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} /> 
        <DepartmentPage deptId={currentPage} onNavigate={handleNavigate} /> 
        <Footer onNavigate={handleNavigate} /> 
      </> 
    ); 
  } 

  return ( 
    <div className="min-h-screen bg-[#f0f4f8]"> 
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} /> 
      <main> 
        <HeroSection onNavigate={handleNavigate} /> 
      </main> 
      <Footer onNavigate={handleNavigate} /> 
    </div> 
  ); 
}
