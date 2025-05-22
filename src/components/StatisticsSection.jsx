function StatisticsSection() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="p-4">
          <div className="text-4xl font-bold text-teal-600 mb-2">10,000+</div>
          <p className="text-gray-600">Articles Available</p>
        </div>
        <div className="p-4">
          <div className="text-4xl font-bold text-blue-500 mb-2">5,000+</div>
          <p className="text-gray-600">Active Users</p>
        </div>
        <div className="p-4">
          <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
          <p className="text-gray-600">Academic Disciplines</p>
        </div>
        <div className="p-4">
          <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
          <p className="text-gray-600">Access Availability</p>
        </div>
      </div>
    </div>
  )
}

export default StatisticsSection
