import { Link, useLocation } from "react-router-dom"
import { Home, FileText, Users, Settings, PlusCircle, BarChart2 } from 'lucide-react'

function Sidebar({ open, isAdmin }) {
  const location = useLocation()
  
  // Common menu items for all users
  const commonMenuItems = [
    {
      name: "Home",
      icon: <Home className="h-5 w-5" />,
      path: "/dashboard",
    },

    {
      name: "Profile Settings",
      icon: <Settings className="h-5 w-5" />,
      path: "/profile",
    },
  ]
  
  // Admin-only menu items
  const adminMenuItems = [
    {
      name: "Add Article",
      icon: <PlusCircle className="h-5 w-5" />,
      path: "/dashboard/admin/articles/new",
    },
    {
      name: "Manage Users",
      icon: <Users className="h-5 w-5" />,
      path: "/dashboard/admin/users",
    },
    {
      name: "Analytics",
      icon: <BarChart2 className="h-5 w-5" />,
      path: "/dashboard/analytics",
    },
  ]
  
  // Combine menu items based on user role
  const menuItems = isAdmin 
    ? [...commonMenuItems, ...adminMenuItems] 
    : commonMenuItems

  return (
    <div 
      className={`bg-blue-600 text-white transition-all duration-300 ${
        open ? "w-64" : "w-20"
      } flex flex-col`}
    >
      <div className="p-4 flex items-center justify-center">
        <h1 className={`font-bold ${open ? "text-xl" : "text-xs"} text-center`}>
          {open ? "Articles Management" : "AMS"}
        </h1>
      </div>
      
      <nav className="flex-1 mt-6">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 hover:bg-blue-700 ${
                  location.pathname === item.path ? "bg-blue-700" : ""
                }`}
              >
                {item.icon}
                {open && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {isAdmin && open && (
        <div className="p-4 border-t border-blue-700">
          <div className="text-sm text-blue-200">
            Admin Dashboard
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar