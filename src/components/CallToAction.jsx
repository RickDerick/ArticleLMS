import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"

function CallToAction() {
  return (
    <div className="py-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-white my-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Research Experience?</h2>
        <p className="mb-8 text-teal-50">
          Join thousands of students and educators who have transformed their academic journey with our library
          management system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register">
            <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-2">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-teal-600 px-8 py-2"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
