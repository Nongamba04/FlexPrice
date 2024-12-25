import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios"; // Import axios

export default function Login() {
  const navigate = useNavigate();

  const cookies = new Cookies();
  //Cookies hook
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3000/users/login",
        formData
      ); // Ensure URL is correct

      if (res.data.registered && res.data.authorized) {
        setCookie(
          "user",
          {
            email: formData.email,
            isSubscribe: formData.isSubscribe
          },
          {
            path: "/", // Cookie available across all paths
            maxAge: 86400, // 24 hours
            sameSite: "strict", // Protect against CSRF
            secure: process.env.NODE_ENV === "production", // Use secure in production
            httpOnly: true, // Better security - cookie not accessible via JavaScript
          }
        );
        navigate("/Home"); // If registered and authorized, navigate to Home

      } else if (res.data.registered && !res.data.authorized) {
        setError("Incorrect password, please try again."); // Display error if credentials are wrong

      } else {
        setError("User not registered, please sign up."); // Display error if user is not registered
        setTimeout(() => navigate("/register"), 2000); // Redirect to register
      }
    } catch (err) {
      setError("An error occurred. Please try again later."); // Catch any network or server errors
      console.log(err);
    }
    finally{
      setIsLoading(false);
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

        <p className="text-sm text-gray-300">Sign in to your account</p>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="w-full bg-gray-700 text-white p-4 pt-6 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none peer disabled:opacity-70"
          />
          <label className="absolute left-4 top-1 text-xs text-gray-400 peer-focus:text-cyan-400">
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="w-full bg-gray-700 text-white p-4 pt-6 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none peer disabled:opacity-70"
          />
          <label className="absolute left-4 top-1 text-xs text-gray-400 peer-focus:text-cyan-400">
            Password
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-cyan-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-cyan-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Logging in..." : "Log In"}
        </button>

        <p className="text-sm text-gray-300 text-center">
          Want to create an account?{" "}
          <Link to="/register" className="text-cyan-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
    </>
  );
}
