import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import ContactsList from "../components/ContactsList"
import { useAuth } from "@/context/AuthContext"
import Footer from "@/components/Footer"

function Dashboard() {
  const { logout, getUser } = useAuth()
  const isAdmin = getUser()?.role === 'admin'
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const user = getUser();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} isAdmin={isAdmin} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} onLogout={logout} user={user} />
          <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto p-4">
              <Outlet />
            </main>
            <ContactsList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
