import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"

function Vehicles() {

  const [vehicles, setVehicles] = useState([])

  const [formData, setFormData] = useState({
    vehicleName: "",
    plateNumber: "",
    model: "",
    fuelType: "",
    capacity: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const getVehicles = async () => {
    const res = await axios.get("http://localhost:5000/vehicles")
    setVehicles(res.data)
  }

  useEffect(() => {
    getVehicles()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post(
      "http://localhost:5000/vehicles/add",
      formData
    )

    getVehicles()

    alert("Vehicle Added")
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6">

        <div className="bg-white p-6 rounded-2xl shadow mb-8">

          <h1 className="text-3xl font-bold mb-6">
            Add Vehicle
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >

            <input type="text" name="vehicleName" placeholder="Vehicle Name" onChange={handleChange} className="border p-3 rounded-lg" />

            <input type="text" name="plateNumber" placeholder="Plate Number" onChange={handleChange} className="border p-3 rounded-lg" />

            <input type="text" name="model" placeholder="Model" onChange={handleChange} className="border p-3 rounded-lg" />

            <input type="text" name="fuelType" placeholder="Fuel Type" onChange={handleChange} className="border p-3 rounded-lg" />

            <input type="number" name="capacity" placeholder="Capacity" onChange={handleChange} className="border p-3 rounded-lg" />

            <button className="bg-black text-white rounded-lg p-3">
              Save Vehicle
            </button>

          </form>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow overflow-auto">

          <h1 className="text-2xl font-bold mb-4">
            Vehicle List
          </h1>

          <table className="w-full">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-3">Vehicle</th>
                <th className="p-3">Plate</th>
                <th className="p-3">Model</th>
                <th className="p-3">Fuel</th>
                <th className="p-3">Capacity</th>
              </tr>
            </thead>

            <tbody>
              {vehicles.map((v) => (
                <tr key={v._id} className="text-center border-b">
                  <td className="p-3">{v.vehicleName}</td>
                  <td className="p-3">{v.plateNumber}</td>
                  <td className="p-3">{v.model}</td>
                  <td className="p-3">{v.fuelType}</td>
                  <td className="p-3">{v.capacity}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Vehicles
