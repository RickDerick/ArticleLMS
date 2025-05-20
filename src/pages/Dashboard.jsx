"use client"

import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import ArticlesList from "../components/ArticlesList"
import ContactsList from "../components/ContactsList"
import ProfileSettings from "../components/ProfileSetting"

function Dashboard({ onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} onLogout={onLogout} />

        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<ArticlesList />} />
              <Route path="/profile" element={<ProfileSettings />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>

          <ContactsList />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
