import { Link } from "react-router-dom"
import { Home, FileText, Users, Settings, Search, BarChart } from "lucide-react"

function Sidebar({ open }) {
  return (
    <div
      className={`${open ? "w-64" : "w-16"} bg-[#4263eb] text-white flex flex-col h-full transition-all duration-300 ease-in-out`}
    >
      <div className="p-4 flex items-center justify-center">
        {open ? <h2 className="text-xl font-bold">Articles Management System</h2> : <FileText size={24} />}
      </div>

      <nav className="flex-1 mt-6">
        <ul>
          <SidebarItem icon={<Home size={20} />} label="Home" to="/dashboard" open={open} />
          <SidebarItem icon={<FileText size={20} />} label="Articles" to="/dashboard/articles" open={open} />
          <SidebarItem icon={<Users size={20} />} label="Users" to="/dashboard/users" open={open} />
          <SidebarItem icon={<BarChart size={20} />} label="Analytics" to="/dashboard/analytics" open={open} />
          <SidebarItem icon={<Search size={20} />} label="Search" to="/dashboard/search" open={open} />
          <SidebarItem icon={<Settings size={20} />} label="Settings" to="/dashboard/settings" open={open} />
        </ul>
      </nav>
    </div>
  )
}

function SidebarItem({ icon, label, to, open }) {
  return (
    <li className="mb-2">
      <Link to={to} className="flex items-center px-4 py-3 hover:bg-blue-700 transition-colors duration-200">
        <span className="mr-3">{icon}</span>
        {open && <span>{label}</span>}
      </Link>
    </li>
  )
}

export default Sidebar
