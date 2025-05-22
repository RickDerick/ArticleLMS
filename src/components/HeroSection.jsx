"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Search, ArrowRight, BookOpen, Star } from "lucide-react"

function HeroSection({ illustrationImage }) {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <div className="relative py-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10"></div>

      {/* Featured badge */}
      <div className="absolute top-0 right-0 md:right-10 z-10">
        <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-b-lg shadow-sm flex items-center gap-1 text-sm font-medium">
          <Star className="h-4 w-4" />
          <span>Featured Collection</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-6">
          {/* Improved search bar */}
          <div className={`relative w-full max-w-md transition-all duration-300 ${searchFocused ? "scale-105" : ""}`}>
            <div className="absolute -top-3 left-4 bg-white px-2 text-xs font-medium text-blue-500">Quick Search</div>
            <Input
              type="text"
              placeholder="Search for your favorite article..."
              className="pl-4 pr-10 py-6 border-2 border-gray-200 rounded-md shadow-sm focus:border-blue-500 transition-all"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <Button
              size="icon"
              className="absolute right-0 top-0 h-full bg-blue-500 hover:bg-blue-600 rounded-l-none transition-all"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {/* Enhanced heading with animated gradient */}
            <div className="relative">
              <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 h-12 w-1.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full"></span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Article{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                  Library Management
                </span>{" "}
                <br />
                System
              </h1>
            </div>

            <p className="text-gray-600 max-w-md text-lg">
              The Article Library Management System is a user-friendly and interactive platform designed to help
              anyone—students, teachers, or any literate individual—efficiently manage, browse, and access articles or
              books.
            </p>

            {/* Added feature highlights */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-full text-sm text-gray-700">
                <BookOpen className="h-4 w-4 text-teal-600" />
                <span>10,000+ Articles</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-full text-sm text-gray-700">
                <Star className="h-4 w-4 text-orange-400" />
                <span>Top-rated Resources</span>
              </div>
            </div>

            {/* Added CTA button */}
            <div className="pt-2">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white mt-2">
                Explore Library
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          {/* Decorative element behind image */}
          <div className="absolute -z-10 w-4/5 h-4/5 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-md"></div>

          {/* Image with frame effect */}
          <div className="relative w-full h-auto max-w-md md:max-w-lg transform hover:scale-102 transition-transform duration-300">
            <div className="absolute inset-0 border-2 border-dashed border-teal-200 rounded-lg transform rotate-2"></div>
            <img
              src={illustrationImage || "/placeholder.svg"}
              alt="Thesis System Illustration"
              className="object-contain w-full h-full rounded-lg shadow-md z-10"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md px-3 py-2 flex items-center gap-2 border border-gray-100">
              <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-orange-500" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Academic Resources</div>
                <div className="text-sm font-medium">50+ Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
