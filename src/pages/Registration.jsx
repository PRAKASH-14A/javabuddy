import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const { confirmPassword, ...payload } = formData;

      const {data} = await axios.post("http://localhost:3000/users", payload);

      console.log(data);

      toast.success("SignUp successful!");
      navigate("/login");
    } catch (error) {
      // console.error(error);
      toast.error("Registration Failed!!!")

    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gradient-to-tr from-blue-50 to-blue-100">

      <div className="lg:w-1/2 flex items-center justify-center bg-blue-700 text-white py-20 px-10 text-center">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 animate-pulse">
            Welcome Back

          </h2>
          <p className="text-lg mb-6">
            To keep connected with us, please login with your personal info.
          </p>
          <Link
            to="/login"
            className="inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300"
          >
            LOGIN
          </Link>
        </div>
      </div>


      <div className="lg:w-1/2 flex items-center justify-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-white rounded-xl shadow-xl p-8"
        >

          <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Or use your email for registration
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />


            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />


            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-blue-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>


            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-blue-500"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>


            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-600 transition duration-300 shadow-md"
            >
              REGISTER
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Registration