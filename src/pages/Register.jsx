import { useState } from "react";
import axios from "axios";

export default function Login(){
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here

        try{
            const res = await axios.post('',
                formData
            )

            if(res.data){
            console.log('Form submitted:', formData);}
            else{
                
            }
        }catch(err){
            console.log(err);
        }
      };
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-md p-8 rounded-2xl bg-gray-800 border border-gray-700 text-white relative"
          >
            <div className="relative">
              <h2 className="text-3xl font-semibold text-cyan-400 pl-8">
                Register
              </h2>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
            </div>
    
            <p className="text-sm text-gray-300">
              Signup now and get full access to our app.
            </p>
    
            <div className="flex gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 text-white p-4 pt-6 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none peer"
                />
                <label className="absolute left-4 top-1 text-xs text-gray-400 peer-focus:text-cyan-400">
                  Fullname
                </label>
              </div>
    
              <div className="relative flex-1">
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 text-white p-4 pt-6 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none peer"
                />
                <label className="absolute left-4 top-1 text-xs text-gray-400 peer-focus:text-cyan-400">
                  Username
                </label>
              </div>
            </div>
    
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white p-4 pt-6 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none peer"
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
                className="w-full bg-gray-700 text-white p-4 pt-6 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none peer"
              />
              <label className="absolute left-4 top-1 text-xs text-gray-400 peer-focus:text-cyan-400">
                Password
              </label>
            </div>
    
            {/* <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white p-4 pt-6 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none peer"
              />
              <label className="absolute left-4 top-1 text-xs text-gray-400 peer-focus:text-cyan-400">
                Confirm password
              </label>
            </div> */}
    
            <button 
              type="submit"
              className="bg-cyan-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-cyan-500 transition-colors"
            >
              Submit
            </button>
    
            <p className="text-sm text-gray-300 text-center">
              Already have an account?{' '}
              <a href="#" className="text-cyan-400 hover:underline">
                Signin
              </a>
            </p>
          </form>
        </div>
      );
}