import Navbar from "./Navbar"

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6">

        <h1 className="text-4xl font-bold mb-6">
          Fleet Management Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold">
              Vehicles
            </h2>

            <p className="text-gray-500 mt-2">
              Manage company vehicles
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold">
              Trips
            </h2>

            <p className="text-gray-500 mt-2">
              Track transportation trips
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold">
              Maintenance
            </h2>

            <p className="text-gray-500 mt-2">
              Vehicle service management
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard
