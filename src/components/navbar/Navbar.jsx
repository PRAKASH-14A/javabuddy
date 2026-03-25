import React from "react";
import { NavLink } from "react-router-dom";
import {
  GraduationCap,
  BookOpenText,
  Route,
  MessageCircleMore,
  LogIn,
} from "lucide-react";

const Navbar = () => {
  const navItems = [
    {
      name: "About",
      path: "/about",
      icon: <BookOpenText className="w-5 h-5" />,
    },
    {
      name: "Roadmap",
      path: "/roadmap",
      icon: <Route className="w-5 h-5" />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <MessageCircleMore className="w-5 h-5" />,
    },
    {
      name: "Login",
      path: "/login",
      icon: <LogIn className="w-5 h-5" />,
    },
  ];

  const token=localStorage.getItem("jwt_token")
  return (
    <div className="w-full bg-gradient-to-r from-emerald-500 to-indigo-700 shadow-lg">
      <div className="h-[60px] flex justify-between items-center px-6 md:px-10">
        
        <div className="text-3xl font-extrabold tracking-wide flex items-center gap-2 text-white">
          <GraduationCap className="w-7 h-7" />
          <NavLink
            to="/"
            className="hover:scale-105 transition-transform duration-300"
          >
            JavaBuddy
          </NavLink>
        </div>

        <ul className="hidden md:flex space-x-8 font-semibold text-white items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 transition duration-300 ${
                    isActive
                      ? "text-yellow-300 scale-110"
                      : "hover:text-yellow-300 hover:scale-110"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;