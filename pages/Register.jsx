import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post(
      "http://localhost:5000/auth/register",
      formData
    )

    alert(res.data.message)

    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Strong Password"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Register
        </button>

        <p className="mt-4 text-center">
          Already have account?
          <Link to="/" className="font-bold ml-2">
            Login
          </Link>
        </p>

      </form>

    </div>
  )
}

export default Register
