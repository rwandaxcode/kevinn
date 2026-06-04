import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"

function Trips() {

  const [vehicles, setVehicles] = useState([])

  const [formData, setFormData] = useState({
    vehicle: "",
    tripDate: "",
    destination: "",
    driverAssigned: "",
    fuelConsumed: "",
    tripCost: "",
  })

  useEffect(() => {
    getVehicles()
  }, [])

  const getVehicles = async () => {
    const res = await axios.get("http://localhost:5000/vehicles")
    setVehicles(res.data)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post(
      "http://localhost:5000/trips/add",
      formData
    )

    alert("Trip Added")
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6 bg-white rounded-2xl shadow m-6">

        <h1 className="text-3xl font-bold mb-6">
          Add Trip
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          <select
            name="vehicle"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option>Select Vehicle</option>

            {vehicles.map((v) => (
              <option key={v._id} value={v._id}>
                {v.vehicleName}
              </option>
            ))}
          </select>

          <input type="date" name="tripDate" onChange={handleChange} className="border p-3 rounded-lg" />

          <input type="text" name="destination" placeholder="Destination" onChange={handleChange} className="border p-3 rounded-lg" />

          <input type="text" name="driverAssigned" placeholder="Driver Assigned" onChange={handleChange} className="border p-3 rounded-lg" />

          <input type="number" name="fuelConsumed" placeholder="Fuel Consumed" onChange={handleChange} className="border p-3 rounded-lg" />

          <input type="number" name="tripCost" placeholder="Trip Cost" onChange={handleChange} className="border p-3 rounded-lg" />

          <button className="bg-black text-white rounded-lg p-3">
            Save Trip
          </button>

        </form>

      </div>

    </div>
  )
}

export default Trips
