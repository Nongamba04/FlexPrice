import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/users/login', formData); // Ensure URL is correct

      if (res.data.registered && res.data.authorized) {
        navigate("/Home"); // If registered and authorized, navigate to Home
      } else if (res.data.registered && !res.data.authorized) {
        setError("Incorrect password, please try again."); // Display error if credentials are wrong
      } else {
        setError("User not registered, please sign up."); // Display error if user is not registered
        navigate("/register"); // Redirect to register
      }
    } catch (err) {
      setError("An error occurred. Please try again later."); // Catch any network or server errors
      console.log(err);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md p-8 rounded-2xl bg-gray-800 border border-gray-700 text-white relative"
        >
          <div className="relative">
            <h2 className="text-3xl font-semibold text-cyan-400 pl-8">Login</h2>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
          </div>

          <p className="text-sm text-gray-300">Sign in</p>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Display error messages */}

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 text-white p-4 pt-6 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none peer"
            />
            <label className="absolute left-4 top-1 text-xs text-gray-400 peer-focus:text-cyan-400">Email</label>
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 text-white p-4 pt-6 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none peer"
            />
            <label className="absolute left-4 top-1 text-xs text-gray-400 peer-focus:text-cyan-400">Password</label>
          </div>

          <button
            type="submit"
            className="bg-cyan-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-cyan-500 transition-colors"
          >
            Log In
          </button>

          <p className="text-sm text-gray-300 text-center">
            Want to create an account?{" "}
            <a href="/register" className="text-cyan-400 hover:underline">Signup</a>
          </p>
        </form>
      </div>
    </>
  );
}
