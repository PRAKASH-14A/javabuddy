import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  GraduationCap,
  BookOpenText,
  Route,
  MessageCircleMore,
  LogIn,
  User,
  Shield,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="w-full bg-gradient-to-r from-emerald-500 to-indigo-700 shadow-lg">
      <div className="h-[60px] flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide flex items-center gap-2 text-white">
          <GraduationCap className="w-7 h-7 text-white" />
          <NavLink
            to="/"
            className="hover:scale-105 transition-transform duration-300"
          >
            JavaBuddy
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-semibold text-white items-center">
          <li className="flex items-center gap-1 hover:scale-110 hover:text-yellow-300 transition duration-300">
            <BookOpenText className="w-5 h-5" />
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="flex items-center gap-1 hover:scale-110 hover:text-yellow-300 transition duration-300">
            <Route className="w-5 h-5" />
            <NavLink to="/roadmap">Roadmap</NavLink>
          </li>
          <li className="flex items-center gap-1 hover:scale-110 hover:text-yellow-300 transition duration-300">
            <MessageCircleMore className="w-5 h-5" />
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {/* Dropdown for Admin/User */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:scale-110 hover:text-yellow-300 transition duration-300"
            >
              <LogIn className="w-5 h-5" />
              <span><Link to="/login">Login</Link></span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar