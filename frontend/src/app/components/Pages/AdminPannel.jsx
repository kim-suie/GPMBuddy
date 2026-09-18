import { useState } from "react";
import {
  LayoutDashboard, Database, User, Search, Plus, Edit3, Trash2,
  LogOut, Menu, X, ChevronDown, GitCommit, RefreshCw, Save,
  CheckCircle2, AlertCircle, Folder, FileText, Mail, Shield,
  Lock, BarChart3, TrendingUp, Activity, UploadCloud, Eye, EyeOff
} from "lucide-react";

// --- Initial Mock Database State ---
const initialDbState = {
  students: {
    name: "students",
    lastCommit: "2024-05-21 14:32:15",
    data: [
      { id: "STU101", name: "Aman Kumar", branch: "CSE", year: "2nd", email: "aman@gpm.ac.in" },
      { id: "STU102", name: "Ravi Patel", branch: "ME", year: "1st", email: "ravi@gpm.ac.in" },
      { id: "STU103", name: "Sneha Sharma", branch: "CSE", year: "3rd", email: "sneha@gpm.ac.in" },
    ]
  },
  faculty: {
    name: "faculty",
    lastCommit: "2024-05-20 09:15:02",
    data: [
      { id: "FAC01", name: "Dr. Rajesh Singh", dept: "Physics", email: "rsingh@gpm.ac.in" },
      { id: "FAC02", name: "Prof. Anjali Rao", dept: "Mathematics", email: "anjali@gpm.ac.in" },
    ]
  },
  notices: {
    name: "notices",
    lastCommit: "2024-05-22 11:05:45",
    data: [
      { id: "NOT01", title: "Mid-Term Exam Schedule", date: "2024-05-22" },
    ]
  }
};

export function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");
  
  // Database State
  const [dbState, setDbState] = useState(initialDbState);
  const [activeCategory, setActiveCategory] = useState("students");
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");

  // Profile & Security State
  const [adminProfile, setAdminProfile] = useState({
    name: "Arjun Sharma",
    role: "Super Administrator",
    email: "admin@gpmuzaffarpur.ac.in",
    phone: "+91 98765 43210",
    avatarText: "A",
    avatarColor: "from-[#FF9933] to-[#ff7a00]",
    lastLogin: "Today, 09:42 AM",
    loginIP: "192.168.1.45"
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [securityForm, setSecurityForm] = useState({ current: "", new: "", confirm: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [securityMsg, setSecurityMsg] = useState({ type: "", text: "" });

  // Derived Data
  const activeCollection = dbState[activeCategory];
  const totalRecords = Object.values(dbState).reduce((acc, cat) => acc + cat.data.length, 0);
  const filteredData = activeCollection?.data.filter(item => 
    JSON.stringify(item).toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // --- Handlers ---
  const handleSaveData = () => {
    const updatedDb = { ...dbState };
    const catIndex = updatedDb[activeCategory].data.findIndex(d => d.id === editData.id);
    
    if (catIndex >= 0) {
      updatedDb[activeCategory].data[catIndex] = editData;
    } else {
      updatedDb[activeCategory].data.unshift(editData);
    }
    
    updatedDb[activeCategory].lastCommit = new Date().toLocaleString();
    setDbState(updatedDb);
    setIsEditing(false);
    setEditData(null);
  };

  const handleDeleteData = (id) => {
    const updatedDb = { ...dbState };
    updatedDb[activeCategory].data = updatedDb[activeCategory].data.filter(d => d.id !== id);
    updatedDb[activeCategory].lastCommit = new Date().toLocaleString();
    setDbState(updatedDb);
  };

  const handleCreateCategory = () => {
    if (!newCategoryName) return;
    const key = newCategoryName.toLowerCase().replace(/\s+/g, "_");
    if (dbState[key]) return alert("Category already exists!");
    
    setDbState({
      ...dbState,
      [key]: { name: key, lastCommit: new Date().toLocaleString(), data: [] }
    });
    setNewCategoryName("");
    setActiveCategory(key);
    setActiveView("data");
  };

  const handleSaveProfile = () => {
    setIsEditingProfile(false);
    // In a real app, you'd send this to an API here.
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (securityForm.new !== securityForm.confirm) {
      setSecurityMsg({ type: "error", text: "New passwords do not match." });
      return;
    }
    if (securityForm.new.length < 6) {
      setSecurityMsg({ type: "error", text: "Password must be at least 6 characters." });
      return;
    }
    // Mock success
    setSecurityMsg({ type: "success", text: "Password updated successfully!" });
    setSecurityForm({ current: "", new: "", confirm: "" });
    setTimeout(() => setSecurityMsg({ type: "", text: "" }), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans flex" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>

      {/* ===================== SIDEBAR (Glassmorphism) ===================== */}
      <aside className={`fixed lg:relative z-50 w-64 h-screen bg-[#0b1f5e] text-white flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} flex`}>
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Placeholder Logo Div */}
            <div className="w-8 h-8 rounded-lg bg-[#FF9933] flex items-center justify-center text-[#0b1f5e] font-extrabold text-sm">G</div>
            <div>
              <h1 className="text-[14px] font-extrabold leading-tight">GPM Admin</h1>
              <p className="text-[10px] text-[#FF9933] font-semibold">Control Center</p>
            </div>
          </div>
          <button className="lg:hidden text-white" onClick={() => setSidebarOpen(false)}><X size={18} /></button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto custom-scroll">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-4 mt-2 mb-1">Main</p>
          <SidebarLink icon={LayoutDashboard} label="Dashboard" active={activeView === "dashboard"} onClick={() => setActiveView("dashboard")} />
          <SidebarLink icon={Database} label="Categories" active={activeView === "categories"} onClick={() => setActiveView("categories")} />
          <SidebarLink icon={Folder} label="Browse Data" active={activeView === "data"} onClick={() => setActiveView("data")} />
          
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-4 mt-4 mb-1">Account</p>
          <SidebarLink icon={User} label="My Profile" active={activeView === "profile"} onClick={() => setActiveView("profile")} />
          <SidebarLink icon={Lock} label="Security" active={activeView === "security"} onClick={() => setActiveView("security")} />
        </nav>

        <div className="p-3 border-t border-white/10">
          <button className="w-full flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-slate-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* ===================== MAIN CONTENT ===================== */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 h-16">
            <div className="flex items-center gap-3">
              <button className="lg:hidden p-2 text-[#0b1f5e] hover:bg-slate-100 rounded-md" onClick={() => setSidebarOpen(true)}>
                <Menu size={22} />
              </button>
              <h2 className="text-[18px] font-extrabold text-[#0b1f5e] capitalize">
                {activeView === "profile" ? "My Profile" : activeView === "security" ? "Security Center" : activeView === "categories" ? "Database Categories" : activeView === "data" ? `Collection: ${activeCategory}` : "Dashboard Overview"}
              </h2>
            </div>
            
            <div className="flex items-center gap-3">
              {activeView === "data" && (
                <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-full text-[12px] font-semibold text-slate-600">
                  <GitCommit size={14} className="text-[#FF9933]" />
                  Last Commit: <span className="text-[#0b1f5e]">{activeCollection?.lastCommit}</span>
                </div>
              )}
              <button onClick={() => { 
                if (activeView === "profile") setIsEditingProfile(false); 
                if (activeView === "data") setIsEditing(false); 
                setActiveView("dashboard"); 
              }} className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[#0b1f5e] hover:bg-slate-200 transition-colors">
                <RefreshCw size={16} />
              </button>
              <div className={`w-9 h-9 rounded-full bg-gradient-to-r ${adminProfile.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-sm cursor-pointer`} onClick={() => setActiveView("profile")}>
                {adminProfile.avatarText}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scroll">
          
          {/* ----------- DASHBOARD VIEW ----------- */}
          {activeView === "dashboard" && (
            <div className="space-y-6">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard icon={Database} label="Active Categories" value={Object.keys(dbState).length} color="bg-blue-50 text-[#0b1f5e]" />
                <StatCard icon={FileText} label="Total Records" value={totalRecords} color="bg-orange-50 text-[#FF9933]" />
                <StatCard icon={Activity} label="System Status" value="Online" color="bg-emerald-50 text-emerald-600" />
                <StatCard icon={TrendingUp} label="Data Changes" value={Object.values(dbState).filter(c => c.lastCommit).length} color="bg-purple-50 text-purple-600" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Commits */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <h3 className="text-[16px] font-bold text-[#0b1f5e] mb-4">Recent Database Activity</h3>
                  <div className="space-y-3">
                    {Object.values(dbState).map((cat, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#FF9933]/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#0b1f5e]/10 flex items-center justify-center text-[#0b1f5e]">
                            <Database size={18} />
                          </div>
                          <div>
                            <h4 className="text-[14px] font-semibold text-slate-800">{cat.name}</h4>
                            <p className="text-[12px] text-slate-500">{cat.data.length} records</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[12px] text-slate-500 font-medium">
                          <GitCommit size={14} className="text-[#FF9933]" />
                          {cat.lastCommit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Admin Quick Info */}
                <div className="bg-[#0b1f5e] text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${adminProfile.avatarColor} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                        {adminProfile.avatarText}
                      </div>
                      <div>
                        <h4 className="text-[16px] font-bold">{adminProfile.name}</h4>
                        <p className="text-[12px] text-slate-300">{adminProfile.role}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-[13px] text-slate-300">
                      <p className="flex items-center gap-2"><Mail size={14} className="text-[#FF9933]" /> {adminProfile.email}</p>
                      <p className="flex items-center gap-2"><Shield size={14} className="text-[#FF9933]" /> Last Login: {adminProfile.lastLogin}</p>
                    </div>
                  </div>
                  <button onClick={() => setActiveView("profile")} className="mt-6 w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-[13px] font-semibold transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ----------- CATEGORIES VIEW ----------- */}
          {activeView === "categories" && (
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {/* (Same Categories UI as before) */}
               <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <h3 className="text-[16px] font-bold text-[#0b1f5e] mb-4 flex items-center gap-2">
                    <Plus className="text-[#FF9933]" /> Create New Category
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">Collection Name</label>
                      <input 
                        type="text" 
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="e.g. Library Books"
                        className="w-full mt-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 focus:border-[#FF9933]"
                      />
                    </div>
                    <button 
                      onClick={handleCreateCategory}
                      className="w-full px-4 py-2.5 bg-[#0b1f5e] text-white rounded-xl text-[13px] font-semibold hover:bg-[#0a1a4d] transition-colors flex items-center justify-center gap-2"
                    >
                      <Database size={16} /> Initialize Collection
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <h3 className="text-[16px] font-bold text-[#0b1f5e] mb-4 flex items-center gap-2">
                    <Folder className="text-[#FF9933]" /> Active Categories
                  </h3>
                  <div className="space-y-2 max-h-[400px] overflow-y-auto custom-scroll pr-2">
                    {Object.values(dbState).map((cat, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#FF9933] transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#0b1f5e] text-white flex items-center justify-center text-[10px] font-bold">
                            {cat.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <h4 className="text-[14px] font-semibold text-slate-800">{cat.name}</h4>
                            <p className="text-[11px] text-slate-500">{cat.data.length} documents</p>
                          </div>
                        </div>
                        <button onClick={() => { setActiveCategory(cat.name); setActiveView("data"); }} className="p-2 text-slate-500 hover:text-[#0b1f5e] hover:bg-white rounded-lg transition-colors">
                          <Edit3 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          )}

          {/* ----------- DATA MANAGER VIEW ----------- */}
          {activeView === "data" && (
             <div className="space-y-6">
               {/* Controls Bar */}
               <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                 <div className="relative w-full md:max-w-sm">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                   <input
                     type="text"
                     placeholder={`Search in ${activeCategory}...`}
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-full text-[13px] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50"
                   />
                 </div>
                 <div className="flex items-center gap-2 w-full md:w-auto">
                   <select 
                     value={activeCategory}
                     onChange={(e) => { setActiveCategory(e.target.value); setSearchQuery(""); setIsEditing(false); }}
                     className="px-4 py-2 bg-slate-100 rounded-xl text-[13px] font-semibold text-[#0b1f5e] focus:outline-none"
                   >
                     {Object.values(dbState).map(cat => (
                       <option key={cat.name} value={cat.name}>{cat.name}</option>
                     ))}
                   </select>
                   <button 
                     onClick={() => { 
                       const keys = activeCollection.data.length > 0 ? Object.keys(activeCollection.data[0]) : ["id", "name"];
                       const newObj = { id: `NEW_${Date.now()}` };
                       keys.forEach(k => { if(k !== "id") newObj[k] = ""; });
                       setEditData(newObj); 
                       setIsEditing(true); 
                     }}
                     className="flex items-center gap-1.5 bg-gradient-to-r from-[#FF9933] to-[#ff7a00] text-white px-4 py-2 rounded-full text-[13px] font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all whitespace-nowrap"
                   >
                     <Plus size={14} /> Add Data
                   </button>
                 </div>
               </div>

               {/* Editor or Table */}
               {isEditing && editData ? (
                 <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                   <div className="flex items-center justify-between mb-4">
                     <h3 className="text-[16px] font-bold text-[#0b1f5e]">{editData.id.startsWith("NEW_") ? "Insert Document" : "Edit Document"}</h3>
                     <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-slate-700"><X size={18} /></button>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {Object.keys(editData).map((key) => (
                       <div key={key}>
                         <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">{key}</label>
                         <input
                           type="text"
                           value={editData[key]}
                           onChange={(e) => setEditData({ ...editData, [key]: e.target.value })}
                           disabled={key === "id"}
                           className="w-full mt-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 focus:border-[#FF9933] disabled:bg-slate-100 disabled:text-slate-400"
                         />
                       </div>
                     ))}
                   </div>
                   <button 
                     onClick={handleSaveData}
                     className="mt-6 flex items-center gap-2 bg-[#0b1f5e] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#0a1a4d] transition-colors"
                   >
                     <Save size={16} /> Save & Commit Data
                   </button>
                 </div>
               ) : (
                 <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                   <div className="overflow-x-auto">
                     <table className="w-full text-[13px] border-collapse">
                       <thead className="bg-slate-50 border-b border-slate-200">
                         <tr>
                           {activeCollection.data.length > 0 ? (
                             Object.keys(activeCollection.data[0]).map((key) => (
                               <th key={key} className="text-left p-4 font-semibold text-slate-600 uppercase text-[11px] tracking-wider">{key}</th>
                             ))
                           ) : (
                             <th className="text-left p-4 font-semibold text-slate-600">No data</th>
                           )}
                           <th className="text-right p-4 font-semibold text-slate-600 uppercase text-[11px] tracking-wider">Actions</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100">
                         {filteredData.map((row, i) => (
                           <tr key={i} className="hover:bg-slate-50 transition-colors">
                             {Object.values(row).map((val, j) => (
                               <td key={j} className="p-4 text-slate-700">{val}</td>
                             ))}
                             <td className="p-4 text-right">
                               <div className="flex items-center justify-end gap-1">
                                 <button onClick={() => { setEditData(row); setIsEditing(true); }} className="p-2 text-slate-500 hover:text-[#0b1f5e] hover:bg-slate-100 rounded-lg transition-colors">
                                   <Edit3 size={14} />
                                 </button>
                                 <button onClick={() => handleDeleteData(row.id)} className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                   <Trash2 size={14} />
                                 </button>
                               </div>
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </div>
               )}
             </div>
          )}

          {/* ----------- PROFILE VIEW ----------- */}
          {activeView === "profile" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Side - Avatar & Status */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center flex flex-col items-center justify-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${adminProfile.avatarColor} flex items-center justify-center text-white text-4xl font-extrabold shadow-lg shadow-orange-500/20 mb-4`}>
                    {adminProfile.avatarText}
                  </div>
                  <h3 className="text-[18px] font-extrabold text-[#0b1f5e]">{adminProfile.name}</h3>
                  <p className="text-[13px] text-slate-500 font-medium">{adminProfile.role}</p>
                  
                  {/* Functional Avatar Changer */}
                  {!isEditingProfile ? (
                    <button onClick={() => setIsEditingProfile(true)} className="mt-4 text-[12px] font-semibold text-[#FF9933] flex items-center gap-1 hover:underline">
                      <UploadCloud size={14} /> Change Avatar
                    </button>
                  ) : (
                    <div className="mt-4 w-full flex flex-col items-center gap-2">
                      <div className="flex gap-2 justify-center">
                        {['from-[#FF9933] to-[#ff7a00]', 'from-[#0b1f5e] to-[#3b82f6]', 'from-emerald-500 to-teal-500', 'from-rose-500 to-pink-500'].map(c => (
                          <button key={c} onClick={() => setAdminProfile({...adminProfile, avatarColor: c})} className={`w-8 h-8 rounded-full bg-gradient-to-r ${c} ${adminProfile.avatarColor === c ? 'ring-2 ring-offset-2 ring-[#0b1f5e]' : ''}`}></button>
                        ))}
                      </div>
                      <input 
                        type="text" 
                        maxLength="2" 
                        value={adminProfile.avatarText} 
                        onChange={(e) => setAdminProfile({...adminProfile, avatarText: e.target.value.toUpperCase()})}
                        className="w-16 text-center mt-2 px-2 py-1 border border-slate-200 rounded-lg text-[14px] font-bold focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50"
                      />
                      <button onClick={handleSaveProfile} className="text-[12px] bg-[#0b1f5e] text-white px-4 py-1.5 rounded-full mt-1">Save Avatar</button>
                    </div>
                  )}
                </div>
                
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <h4 className="text-[14px] font-bold text-[#0b1f5e] mb-3 flex items-center gap-2">
                    <Activity className="text-[#FF9933] size-4" /> Login Activity
                  </h4>
                  <div className="space-y-3 text-[13px] text-slate-600">
                    <p className="flex justify-between"><span>Last Login:</span> <span className="font-semibold text-slate-800">{adminProfile.lastLogin}</span></p>
                    <p className="flex justify-between"><span>IP Address:</span> <span className="font-semibold text-slate-800">{adminProfile.loginIP}</span></p>
                    <p className="flex justify-between"><span>Status:</span> <span className="flex items-center gap-1 font-semibold text-emerald-600"><CheckCircle2 size={12}/> Active</span></p>
                  </div>
                </div>
              </div>

              {/* Right Side - Profile Details Form */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[16px] font-bold text-[#0b1f5e] flex items-center gap-2">
                    <User className="text-[#FF9933]" /> Account Details
                  </h3>
                  {!isEditingProfile && (
                    <button onClick={() => setIsEditingProfile(true)} className="flex items-center gap-1 text-[12px] font-semibold text-[#0b1f5e] bg-slate-100 px-3 py-1.5 rounded-full hover:bg-slate-200 transition-colors">
                      <Edit3 size={12} /> Edit
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ProfileField label="Admin ID" value="GPM-ADMIN-001" disabled />
                  <ProfileField label="Full Name" value={adminProfile.name} onChange={(v) => setAdminProfile({...adminProfile, name: v})} editable={isEditingProfile} />
                  <ProfileField label="Email Address" value={adminProfile.email} onChange={(v) => setAdminProfile({...adminProfile, email: v})} editable={isEditingProfile} />
                  <ProfileField label="Phone Number" value={adminProfile.phone} onChange={(v) => setAdminProfile({...adminProfile, phone: v})} editable={isEditingProfile} />
                  <ProfileField label="Role" value={adminProfile.role} disabled />
                  <ProfileField label="Department" value="Science & Technology" disabled />
                </div>

                {isEditingProfile && (
                  <div className="mt-6 flex gap-2">
                    <button onClick={handleSaveProfile} className="flex items-center gap-2 bg-[#0b1f5e] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#0a1a4d] transition-colors">
                      <Save size={16} /> Save Changes
                    </button>
                    <button onClick={() => setIsEditingProfile(false)} className="px-5 py-2.5 rounded-full text-[13px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors">
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ----------- SECURITY VIEW ----------- */}
          {activeView === "security" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0b1f5e] mb-3">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0b1f5e]">Two-Factor Auth</h3>
                <p className="text-[12px] text-slate-500 mt-1 mb-4">Add an extra layer of security.</p>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF9933]"></div>
                </label>
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="text-[16px] font-bold text-[#0b1f5e] mb-1 flex items-center gap-2">
                  <Lock className="text-[#FF9933]" /> Change Password
                </h3>
                <p className="text-[13px] text-slate-500 mb-6">Ensure your account is using a long, random password to stay secure.</p>
                
                <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
                  <div>
                    <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">Current Password</label>
                    <div className="relative mt-1">
                      <input 
                        type={showPassword ? "text" : "password"}
                        value={securityForm.current}
                        onChange={(e) => setSecurityForm({...securityForm, current: e.target.value})}
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 focus:border-[#FF9933]"
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">New Password</label>
                    <input 
                      type={showPassword ? "text" : "password"}
                      value={securityForm.new}
                      onChange={(e) => setSecurityForm({...securityForm, new: e.target.value})}
                      required
                      className="w-full mt-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 focus:border-[#FF9933]"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">Confirm New Password</label>
                    <input 
                      type={showPassword ? "text" : "password"}
                      value={securityForm.confirm}
                      onChange={(e) => setSecurityForm({...securityForm, confirm: e.target.value})}
                      required
                      className="w-full mt-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 focus:border-[#FF9933]"
                    />
                  </div>

                  {securityMsg.text && (
                    <div className={`flex items-center gap-2 text-[13px] font-semibold p-3 rounded-lg ${securityMsg.type === "error" ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"}`}>
                      {securityMsg.type === "error" ? <AlertCircle size={14} /> : <CheckCircle2 size={14} />}
                      {securityMsg.text}
                    </div>
                  )}

                  <button type="submit" className="flex items-center gap-2 bg-[#0b1f5e] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#0a1a4d] transition-colors">
                    <Save size={16} /> Update Password
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// --- Reusable Micro-Components ---
const SidebarLink = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-colors ${
      active ? "bg-white/10 text-[#FF9933]" : "text-slate-400 hover:bg-white/5 hover:text-white"
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center justify-between">
    <div>
      <h4 className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">{label}</h4>
      <p className="text-[24px] font-extrabold text-[#0b1f5e] mt-1">{value}</p>
    </div>
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
      <Icon size={20} />
    </div>
  </div>
);

const ProfileField = ({ label, value, disabled, editable, onChange }) => (
  <div>
    <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">{label}</label>
    <input
      type="text"
      value={value}
      disabled={disabled || !editable}
      onChange={(e) => onChange(e.target.value)}
      className="w-full mt-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 focus:border-[#FF9933] disabled:bg-slate-100 disabled:text-slate-400"
    />
  </div>
);

export default AdminPanel;