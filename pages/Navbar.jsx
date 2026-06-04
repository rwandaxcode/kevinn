import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full bg-black text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      <h1 className="text-2xl font-bold">
        SwiftWheel FMS
      </h1>

      <div className="flex flex-wrap gap-4 text-sm md:text-base">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/vehicles">Vehicle</Link>
        <Link to="/trips">Trip</Link>
        <Link to="/maintenance">Maintenance</Link>
        <Link to="/reports">Reports</Link>
      </div>

    </div>
  )
}

export default Navbar
