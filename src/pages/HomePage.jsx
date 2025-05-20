import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Search } from "lucide-react"
import illustrationImage from "../assets/illustrationImage.png"

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-teal-600"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="text-lg font-semibold uppercase text-teal-600">ALMS</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium border-b-2 border-teal-600">
              Home
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Support
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-sm">
                Sign in
              </Button>
            </Link>
            <Link to="/register">
              <Button className="text-sm bg-orange-400 hover:bg-orange-500 text-white">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search for your favorite article..."
                className="pl-4 pr-10 py-2 border-gray-300 rounded-md"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-full bg-blue-500 hover:bg-blue-600 rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                Article <span className="text-blue-500">Library Management</span> <br />
                System
              </h1>
              <p className="text-gray-600 max-w-md">
                The Article Library Management System is a user-friendly and interactive platform designed to help anyone—students, teachers, or any literate individual—efficiently manage, browse, and access articles or books. Originally developed for the Computer Studies Department, the system supports easy organization, retrieval, and tracking of reading materials, making knowledge readily accessible to a broad audience. Whether for academic purposes or personal learning, this system simplifies library interactions through a modern and intuitive interface.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full h-auto max-w-md md:max-w-lg">
              <img
                src={illustrationImage || "/placeholder.svg"}
                alt="Thesis System Illustration"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
