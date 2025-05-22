import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import illustrationImage from "@/assets/illustrationImage.png"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeatureSection"
import StatisticsSection from "@/components/StatisticsSection"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"

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

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <HeroSection illustrationImage={illustrationImage} />

        {/* Features Section */}
        <FeaturesSection />

        {/* Statistics Section */}
        <StatisticsSection />

        {/* Call to Action */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage
