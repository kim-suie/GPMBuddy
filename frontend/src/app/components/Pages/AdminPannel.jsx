import { useEffect, useState } from "react";
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  LayoutDashboard,
  Lock,
  LogOut,
  Menu,
  Plus,
  RefreshCw,
  Save,
  Shield,
  Trash2,
  User,
  X
} from "lucide-react";

import {
  getCurrentAdmin,
  changeAdminPassword,
  logoutAdmin
} from "../../../services/authService";

import api from "../../../services/api";

const AdminPanel = ({ onNavigate }) => {
  const [activeView, setActiveView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [adminProfile, setAdminProfile] = useState({
    username: "",
    role: ""
  });

  const [securityForm, setSecurityForm] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const [securityMsg, setSecurityMsg] = useState({
    type: "",
    text: ""
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // MANAGE ADMINS STATE
  // =========================

  const [admins, setAdmins] = useState([]);
  const [adminsLoading, setAdminsLoading] = useState(false);

  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);

  const [adminForm, setAdminForm] = useState({
    username: "",
    password: "",
    role: "admin"
  });

  const [adminMsg, setAdminMsg] = useState({
    type: "",
    text: ""
  });

  const [savingAdmin, setSavingAdmin] = useState(false);

  // =========================
  // CHANGE PASSWORD
  // =========================

  const handleChangePassword = async (e) => {
    e.preventDefault();

    setSecurityMsg({
      type: "",
      text: ""
    });

    if (securityForm.new !== securityForm.confirm) {
      setSecurityMsg({
        type: "error",
        text: "New passwords do not match."
      });
      return;
    }

    if (securityForm.new.length < 6) {
      setSecurityMsg({
        type: "error",
        text: "Password must be at least 6 characters."
      });
      return;
    }

    try {
      await changeAdminPassword(
        securityForm.current,
        securityForm.new
      );

      setSecurityMsg({
        type: "success",
        text: "Password updated successfully!"
      });

      setSecurityForm({
        current: "",
        new: "",
        confirm: ""
      });

    } catch (error) {
      console.error("Failed to change password:", error);

      setSecurityMsg({
        type: "error",
        text:
          error.response?.data?.message ||
          "Failed to update password."
      });
    }
  };

  // =========================
  // LOAD CURRENT ADMIN
  // =========================

  useEffect(() => {
    const loadAdmin = async () => {
      try {
        const response = await getCurrentAdmin();

        const admin =
          response.data?.admin ||
          response.admin ||
          response.data ||
          response;

        setAdminProfile({
          username: admin.username || "",
          role: admin.role || ""
        });

      } catch (error) {
        console.error("Failed to load admin:", error);

        setError(
          error.response?.data?.message ||
          "Failed to load admin profile."
        );
      } finally {
        setLoading(false);
      }
    };

    loadAdmin();
  }, []);

  // =========================
  // LOAD ALL ADMINS
  // =========================

  const loadAdmins = async () => {
    setAdminsLoading(true);
    setAdminMsg({
      type: "",
      text: ""
    });

    try {
      const response = await api.get("/admin/admins");

      const data =
        response.data?.data ||
        response.data ||
        [];

      setAdmins(Array.isArray(data) ? data : []);

    } catch (error) {
      console.error("Failed to load admins:", error);

      setAdminMsg({
        type: "error",
        text:
          error.response?.data?.message ||
          "Failed to load admin accounts."
      });

    } finally {
      setAdminsLoading(false);
    }
  };

  // Load admins whenever Manage Admins is opened
  useEffect(() => {
    if (activeView === "admins") {
      loadAdmins();
    }
  }, [activeView]);

  // =========================
  // OPEN ADD ADMIN MODAL
  // =========================

  const openAddAdmin = () => {
    setEditingAdmin(null);

    setAdminForm({
      username: "",
      password: "",
      role: "admin"
    });

    setAdminMsg({
      type: "",
      text: ""
    });

    setAdminModalOpen(true);
  };

  // =========================
  // OPEN EDIT ADMIN MODAL
  // =========================

  const openEditAdmin = (admin) => {
    setEditingAdmin(admin);

    setAdminForm({
      username: admin.username || "",
      password: "",
      role: admin.role || "admin"
    });

    setAdminMsg({
      type: "",
      text: ""
    });

    setAdminModalOpen(true);
  };

  // =========================
  // CLOSE ADMIN MODAL
  // =========================

  const closeAdminModal = () => {
    if (savingAdmin) return;

    setAdminModalOpen(false);
    setEditingAdmin(null);

    setAdminForm({
      username: "",
      password: "",
      role: "admin"
    });
  };

  // =========================
  // SAVE ADMIN
  // =========================

  const handleSaveAdmin = async (e) => {
    e.preventDefault();

    setSavingAdmin(true);
    setAdminMsg({
      type: "",
      text: ""
    });

    try {
      if (!adminForm.username.trim()) {
        setAdminMsg({
          type: "error",
          text: "Username is required."
        });
        return;
      }

      if (!editingAdmin && !adminForm.password) {
        setAdminMsg({
          type: "error",
          text: "Password is required."
        });
        return;
      }

      if (adminForm.password && adminForm.password.length < 6) {
        setAdminMsg({
          type: "error",
          text: "Password must be at least 6 characters."
        });
        return;
      }

      const payload = {
        username: adminForm.username.trim(),
        role: adminForm.role
      };

      if (adminForm.password) {
        payload.password = adminForm.password;
      }

      if (editingAdmin) {
        await api.patch(
          `/admin/admins/${editingAdmin._id || editingAdmin.id}`,
          payload
        );

        setAdminMsg({
          type: "success",
          text: "Admin account updated successfully."
        });

      } else {
        await api.post("/admin/admins", {
          ...payload,
          password: adminForm.password
        });

        setAdminMsg({
          type: "success",
          text: "Admin account created successfully."
        });
      }

      await loadAdmins();

      setTimeout(() => {
        closeAdminModal();
      }, 700);

    } catch (error) {
      console.error("Failed to save admin:", error);

      setAdminMsg({
        type: "error",
        text:
          error.response?.data?.message ||
          "Failed to save admin account."
      });

    } finally {
      setSavingAdmin(false);
    }
  };

  // =========================
  // DELETE ADMIN
  // =========================

  const handleDeleteAdmin = async (admin) => {
    const adminId = admin._id || admin.id;

    if (!adminId) {
      setAdminMsg({
        type: "error",
        text: "Invalid admin ID."
      });
      return;
    }

    if (
      String(adminId) ===
      String(
        localStorage.getItem("adminData")
          ? JSON.parse(localStorage.getItem("adminData")).id
          : ""
      )
    ) {
      setAdminMsg({
        type: "error",
        text: "You cannot delete your own account."
      });
      return;
    }

    const confirmed = window.confirm(
      `Delete admin "${admin.username}"? This action cannot be undone.`
    );

    if (!confirmed) return;

    try {
      await api.delete(`/admin/admins/${adminId}`);

      setAdminMsg({
        type: "success",
        text: "Admin account deleted successfully."
      });

      await loadAdmins();

    } catch (error) {
      console.error("Failed to delete admin:", error);

      setAdminMsg({
        type: "error",
        text:
          error.response?.data?.message ||
          "Failed to delete admin account."
      });
    }
  };

  // =========================
  // LOADING SCREEN
  // =========================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-[#0b1f5e] font-semibold">
          Loading admin panel...
        </p>
      </div>
    );
  }

  // =========================
  // MAIN UI
  // =========================

  return (
    <div
      className="min-h-screen bg-slate-100 font-sans flex"
      style={{
        fontFamily:
          "'Plus Jakarta Sans', system-ui, sans-serif"
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        html {
          scroll-behavior: smooth;
        }

        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>

      {/* ===================== SIDEBAR ===================== */}

      <aside
        className={`fixed lg:relative z-50 w-64 h-screen bg-[#0b1f5e] text-white flex-col transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } flex`}
      >
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF9933] flex items-center justify-center text-[#0b1f5e] font-extrabold text-sm">
              G
            </div>

            <div>
              <h1 className="text-[14px] font-extrabold leading-tight">
                GPM Admin
              </h1>

              <p className="text-[10px] text-[#FF9933] font-semibold">
                Control Center
              </p>
            </div>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto custom-scroll">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-4 mt-2 mb-1">
            Main
          </p>

          <SidebarLink
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeView === "dashboard"}
            onClick={() => setActiveView("dashboard")}
          />

          <SidebarLink
            icon={User}
            label="My Profile"
            active={activeView === "profile"}
            onClick={() => setActiveView("profile")}
          />

          <SidebarLink
            icon={Lock}
            label="Security"
            active={activeView === "security"}
            onClick={() => setActiveView("security")}
          />

          <SidebarLink
            icon={Shield}
            label="Manage Admins"
            active={activeView === "admins"}
            onClick={() => setActiveView("admins")}
          />
        </nav>

        <div className="p-3 border-t border-white/10">
          <button
            onClick={() => {
              logoutAdmin();
              onNavigate("Login");
            }}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-slate-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      {/* ===================== MAIN ===================== */}

      <div className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* TOP NAVBAR */}

        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 h-16">

            <div className="flex items-center gap-3">

              <button
                className="lg:hidden p-2 text-[#0b1f5e] hover:bg-slate-100 rounded-md"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={22} />
              </button>

              <h2 className="text-[18px] font-extrabold text-[#0b1f5e] capitalize">
                {activeView === "profile"
                  ? "My Profile"
                  : activeView === "security"
                    ? "Security Center"
                    : activeView === "admins"
                      ? "Manage Admins"
                      : "Dashboard Overview"}
              </h2>
            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={() => window.location.reload()}
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[#0b1f5e] hover:bg-slate-200 transition-colors"
              >
                <RefreshCw size={16} />
              </button>

              <div
                className="w-9 h-9 rounded-full bg-[#FF9933] flex items-center justify-center text-white font-bold text-sm shadow-sm cursor-pointer"
                onClick={() => setActiveView("profile")}
              >
                {adminProfile.username?.charAt(0)?.toUpperCase() || "A"}
              </div>

            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scroll">

          {/* ================= DASHBOARD ================= */}

          {activeView === "dashboard" && (
            <div className="space-y-6">

              {error && (
                <MessageBox
                  type="error"
                  text={error}
                />
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <StatCard
                  icon={Shield}
                  label="Admin Role"
                  value={adminProfile.role || "Admin"}
                  color="bg-blue-50 text-[#0b1f5e]"
                />

                <StatCard
                  icon={Activity}
                  label="System Status"
                  value="Online"
                  color="bg-emerald-50 text-emerald-600"
                />

              </div>

              <div className="bg-[#0b1f5e] text-white rounded-2xl shadow-lg p-6 max-w-xl">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-[#FF9933] flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {adminProfile.username?.charAt(0)?.toUpperCase() || "A"}
                  </div>

                  <div>

                    <h4 className="text-[16px] font-bold">
                      {adminProfile.username || "Admin"}
                    </h4>

                    <p className="text-[12px] text-slate-300">
                      {adminProfile.role || "Administrator"}
                    </p>

                  </div>
                </div>

                <button
                  onClick={() => setActiveView("profile")}
                  className="mt-6 w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-[13px] font-semibold transition-colors"
                >
                  View Profile
                </button>

              </div>

            </div>
          )}

          {/* ================= PROFILE ================= */}

          {activeView === "profile" && (
            <div className="max-w-3xl mx-auto">

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-20 h-20 rounded-full bg-[#FF9933] flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
                    {adminProfile.username?.charAt(0)?.toUpperCase() || "A"}
                  </div>

                  <div>
                    <h3 className="text-[20px] font-extrabold text-[#0b1f5e]">
                      {adminProfile.username || "Admin"}
                    </h3>

                    <p className="text-[13px] text-slate-500">
                      {adminProfile.role || "Administrator"}
                    </p>
                  </div>

                </div>

                <h3 className="text-[16px] font-bold text-[#0b1f5e] mb-5 flex items-center gap-2">
                  <User className="text-[#FF9933]" />
                  Account Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <ProfileField
                    label="Username"
                    value={adminProfile.username}
                    disabled
                  />

                  <ProfileField
                    label="Role"
                    value={adminProfile.role}
                    disabled
                  />

                </div>

              </div>

            </div>
          )}

          {/* ================= SECURITY ================= */}

          {activeView === "security" && (
            <div className="max-w-2xl mx-auto">

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

                <h3 className="text-[16px] font-bold text-[#0b1f5e] mb-1 flex items-center gap-2">
                  <Lock className="text-[#FF9933]" />
                  Change Password
                </h3>

                <p className="text-[13px] text-slate-500 mb-6">
                  Ensure your account is using a long, random password to stay secure.
                </p>

                <form
                  onSubmit={handleChangePassword}
                  className="space-y-4 max-w-md"
                >

                  <PasswordInput
                    label="Current Password"
                    value={securityForm.current}
                    onChange={(value) =>
                      setSecurityForm({
                        ...securityForm,
                        current: value
                      })
                    }
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />

                  <PasswordInput
                    label="New Password"
                    value={securityForm.new}
                    onChange={(value) =>
                      setSecurityForm({
                        ...securityForm,
                        new: value
                      })
                    }
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />

                  <PasswordInput
                    label="Confirm New Password"
                    value={securityForm.confirm}
                    onChange={(value) =>
                      setSecurityForm({
                        ...securityForm,
                        confirm: value
                      })
                    }
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />

                  {securityMsg.text && (
                    <MessageBox
                      type={securityMsg.type}
                      text={securityMsg.text}
                    />
                  )}

                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-[#0b1f5e] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#0a1a4d] transition-colors"
                  >
                    <Save size={16} />
                    Update Password
                  </button>

                </form>

              </div>
            </div>
          )}

          {/* ================= MANAGE ADMINS ================= */}

          {activeView === "admins" && (
            <div className="space-y-6">

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                <div>
                  <h3 className="text-[20px] font-extrabold text-[#0b1f5e]">
                    Admin Accounts
                  </h3>

                  <p className="text-[13px] text-slate-500 mt-1">
                    Create and manage administrator accounts.
                  </p>
                </div>

                <div className="flex items-center gap-2">

                  <button
                    onClick={loadAdmins}
                    disabled={adminsLoading}
                    className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0b1f5e] hover:bg-slate-50 disabled:opacity-50"
                  >
                    <RefreshCw
                      size={16}
                      className={adminsLoading ? "animate-spin" : ""}
                    />
                  </button>

                  <button
                    onClick={openAddAdmin}
                    className="flex items-center gap-2 bg-[#0b1f5e] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#0a1a4d] transition-colors"
                  >
                    <Plus size={16} />
                    Add Admin
                  </button>

                </div>

              </div>

              {adminMsg.text && !adminModalOpen && (
                <MessageBox
                  type={adminMsg.type}
                  text={adminMsg.text}
                />
              )}

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                {adminsLoading ? (
                  <div className="p-10 text-center text-slate-500 text-sm">
                    Loading admin accounts...
                  </div>
                ) : admins.length === 0 ? (
                  <div className="p-10 text-center">

                    <Shield
                      size={32}
                      className="mx-auto text-slate-300 mb-3"
                    />

                    <p className="text-slate-500 text-sm">
                      No admin accounts found.
                    </p>

                  </div>
                ) : (
                  <div className="overflow-x-auto">

                    <table className="w-full text-[13px]">

                      <thead className="bg-slate-50 border-b border-slate-200">

                        <tr>
                          <th className="text-left p-4 font-semibold text-slate-600">
                            Username
                          </th>

                          <th className="text-left p-4 font-semibold text-slate-600">
                            Role
                          </th>

                          <th className="text-left p-4 font-semibold text-slate-600">
                            Created
                          </th>

                          <th className="text-right p-4 font-semibold text-slate-600">
                            Actions
                          </th>
                        </tr>

                      </thead>

                      <tbody className="divide-y divide-slate-100">

                        {admins.map((admin) => {

                          const adminId =
                            admin._id || admin.id;

                          const isCurrentAdmin =
                            String(adminId) ===
                            String(
                              JSON.parse(
                                localStorage.getItem("adminData") || "{}"
                              ).id || ""
                            );

                          return (
                            <tr
                              key={adminId}
                              className="hover:bg-slate-50 transition-colors"
                            >

                              <td className="p-4">

                                <div className="flex items-center gap-3">

                                  <div className="w-9 h-9 rounded-full bg-[#FF9933] text-white flex items-center justify-center font-bold">
                                    {admin.username
                                      ?.charAt(0)
                                      ?.toUpperCase() || "A"}
                                  </div>

                                  <div>
                                    <p className="font-semibold text-slate-800">
                                      {admin.username}
                                    </p>

                                    {isCurrentAdmin && (
                                      <span className="text-[10px] text-emerald-600 font-semibold">
                                        Current account
                                      </span>
                                    )}
                                  </div>

                                </div>

                              </td>

                              <td className="p-4">

                                <span
                                  className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
                                    admin.role === "superadmin"
                                      ? "bg-purple-50 text-purple-700"
                                      : "bg-blue-50 text-[#0b1f5e]"
                                  }`}
                                >
                                  {admin.role}
                                </span>

                              </td>

                              <td className="p-4 text-slate-500">

                                {admin.createdAt
                                  ? new Date(
                                      admin.createdAt
                                    ).toLocaleDateString()
                                  : "—"}

                              </td>

                              <td className="p-4">

                                <div className="flex justify-end gap-2">

                                  <button
                                    onClick={() =>
                                      openEditAdmin(admin)
                                    }
                                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-[12px] font-semibold hover:bg-slate-200"
                                  >
                                    Edit
                                  </button>

                                  <button
                                    onClick={() =>
                                      handleDeleteAdmin(admin)
                                    }
                                    disabled={isCurrentAdmin}
                                    className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-[12px] font-semibold hover:bg-red-100 disabled:opacity-40 disabled:cursor-not-allowed"
                                  >
                                    <Trash2
                                      size={13}
                                      className="inline mr-1"
                                    />
                                    Delete
                                  </button>

                                </div>

                              </td>

                            </tr>
                          );
                        })}

                      </tbody>

                    </table>

                  </div>
                )}

              </div>

            </div>
          )}

        </div>
      </div>

      {/* ================= ADMIN MODAL ================= */}

      {adminModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl">

            <div className="flex items-center justify-between p-6 border-b border-slate-200">

              <div>
                <h3 className="text-[18px] font-extrabold text-[#0b1f5e]">
                  {editingAdmin
                    ? "Edit Admin Account"
                    : "Create Admin Account"}
                </h3>

                <p className="text-[12px] text-slate-500 mt-1">
                  {editingAdmin
                    ? "Update account details."
                    : "Create a new administrator account."}
                </p>
              </div>

              <button
                onClick={closeAdminModal}
                disabled={savingAdmin}
                className="text-slate-400 hover:text-slate-700 disabled:opacity-50"
              >
                <X size={20} />
              </button>

            </div>

            <form
              onSubmit={handleSaveAdmin}
              className="p-6 space-y-4"
            >

              <div>
                <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Username
                </label>

                <input
                  type="text"
                  value={adminForm.username}
                  onChange={(e) =>
                    setAdminForm({
                      ...adminForm,
                      username: e.target.value
                    })
                  }
                  className="w-full mt-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 focus:border-[#FF9933]"
                  placeholder="Enter username"
                  required
                />
              </div>

              <div>
                <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Role
                </label>

                <select
                  value={adminForm.role}
                  onChange={(e) =>
                    setAdminForm({
                      ...adminForm,
                      role: e.target.value
                    })
                  }
                  className="w-full mt-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 focus:border-[#FF9933]"
                >
                  <option value="admin">
                    Admin
                  </option>

                  <option value="superadmin">
                    Superadmin
                  </option>
                </select>
              </div>

              <div>
                <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  {editingAdmin
                    ? "New Password (optional)"
                    : "Password"}
                </label>

                <input
                  type="password"
                  value={adminForm.password}
                  onChange={(e) =>
                    setAdminForm({
                      ...adminForm,
                      password: e.target.value
                    })
                  }
                  className="w-full mt-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 focus:border-[#FF9933]"
                  placeholder={
                    editingAdmin
                      ? "Leave blank to keep current password"
                      : "Enter password"
                  }
                  required={!editingAdmin}
                />
              </div>

              {adminMsg.text && (
                <MessageBox
                  type={adminMsg.type}
                  text={adminMsg.text}
                />
              )}

              <div className="flex justify-end gap-2 pt-2">

                <button
                  type="button"
                  onClick={closeAdminModal}
                  disabled={savingAdmin}
                  className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 text-[13px] font-semibold hover:bg-slate-200 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={savingAdmin}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b1f5e] text-white text-[13px] font-semibold hover:bg-[#0a1a4d] disabled:opacity-50"
                >
                  {savingAdmin ? (
                    "Saving..."
                  ) : (
                    <>
                      <Save size={15} />
                      {editingAdmin
                        ? "Save Changes"
                        : "Create Admin"}
                    </>
                  )}
                </button>

              </div>

            </form>

          </div>
        </div>
      )}
    </div>
  );
};

// =========================
// REUSABLE COMPONENTS
// =========================

const SidebarLink = ({
  icon: Icon,
  label,
  active,
  onClick
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-colors ${
      active
        ? "bg-white/10 text-[#FF9933]"
        : "text-slate-400 hover:bg-white/5 hover:text-white"
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

const StatCard = ({
  icon: Icon,
  label,
  value,
  color
}) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center justify-between">

    <div>
      <h4 className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
        {label}
      </h4>

      <p className="text-[24px] font-extrabold text-[#0b1f5e] mt-1">
        {value}
      </p>
    </div>

    <div
      className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}
    >
      <Icon size={20} />
    </div>

  </div>
);

const ProfileField = ({
  label,
  value,
  disabled
}) => (
  <div>

    <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
      {label}
    </label>

    <input
      type="text"
      value={value || ""}
      disabled={disabled}
      className="w-full mt-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-800 focus:outline-none disabled:bg-slate-100 disabled:text-slate-400"
    />

  </div>
);

const PasswordInput = ({
  label,
  value,
  onChange,
  showPassword,
  setShowPassword
}) => (
  <div>

    <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
      {label}
    </label>

    <div className="relative mt-1">

      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full px-4 py-2.5 pr-11 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 focus:border-[#FF9933]"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
      >
        {showPassword ? (
          <EyeOff size={16} />
        ) : (
          <Eye size={16} />
        )}
      </button>

    </div>

  </div>
);

const MessageBox = ({ type, text }) => (
  <div
    className={`flex items-center gap-2 text-[13px] font-semibold p-3 rounded-lg ${
      type === "error"
        ? "bg-red-50 text-red-600"
        : "bg-emerald-50 text-emerald-600"
    }`}
  >
    {type === "error" ? (
      <AlertCircle size={14} />
    ) : (
      <CheckCircle2 size={14} />
    )}

    {text}
  </div>
);

export default AdminPanel;