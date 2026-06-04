import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"

function Reports() {

  const [trips, setTrips] = useState([])
  const [fleet, setFleet] = useState([])

  useEffect(() => {
    getReports()
  }, [])

  const getReports = async () => {

    const tripRes = await axios.get(
      "http://localhost:5000/trips/daily-report"
    )

    const fleetRes = await axios.get(
      "http://localhost:5000/maintenance/fleet-report"
    )

    setTrips(tripRes.data)
    setFleet(fleetRes.data)
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6">

        <div className="bg-white rounded-2xl shadow p-6 mb-8 overflow-auto">

          <h1 className="text-3xl font-bold mb-6">
            Daily Trip Report
          </h1>

          <table className="w-full">

            <thead>
              <tr className="bg-black text-white">
                <th className="p-3">Vehicle</th>
                <th className="p-3">Destination</th>
                <th className="p-3">Fuel</th>
                <th className="p-3">Cost</th>
              </tr>
            </thead>

            <tbody>

              {trips.map((trip) => (
                <tr key={trip._id} className="text-center border-b">

                  <td className="p-3">
                    {trip.vehicle?.vehicleName}
                  </td>

                  <td className="p-3">
                    {trip.destination}
                  </td>

                  <td className="p-3">
                    {trip.fuelConsumed}
                  </td>

                  <td className="p-3">
                    {trip.tripCost}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <div className="bg-white rounded-2xl shadow p-6 overflow-auto">

          <h1 className="text-3xl font-bold mb-6">
            Fleet Status Report
          </h1>

          <table className="w-full">

            <thead>
              <tr className="bg-black text-white">
                <th className="p-3">Vehicle</th>
                <th className="p-3">Status</th>
                <th className="p-3">Maintenance Cost</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody>

              {fleet.map((item) => (
                <tr key={item._id} className="text-center border-b">

                  <td className="p-3">
                    {item.vehicle?.vehicleName}
                  </td>

                  <td className="p-3">
                    {item.vehicleStatus}
                  </td>

                  <td className="p-3">
                    {item.maintenanceCost}
                  </td>

                  <td className="p-3">
                    {item.maintenanceDate}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Reports
