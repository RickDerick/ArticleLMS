import { BookOpen, Users, Clock } from "lucide-react"

function FeaturesSection() {
  return (
    <div className="py-16 bg-white rounded-lg shadow-sm">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Library System?</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Discover how our platform makes managing and accessing articles easier than ever before.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Extensive Collection</h3>
          <p className="text-gray-600">
            Access thousands of articles, journals, and books from various academic disciplines all in one place.
          </p>
        </div>

        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-teal-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
          <p className="text-gray-600">
            Intuitive design makes it easy for students, teachers, and researchers to find exactly what they need.
          </p>
        </div>

        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Efficient Management</h3>
          <p className="text-gray-600">
            Save time with our streamlined processes for organizing, tracking, and retrieving academic resources.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
