import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
// import javaLogo from "../assets/java.png"; // recommended

const Footer = () => {
  const links = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "About", path: "/about", icon: "📘" },
    { name: "Roadmap", path: "/roadmap", icon: "📚" },
    { name: "Contact", path: "/contact", icon: "✉️" },
  ];

  const socials = [
    { icon: <Github />, link: "#" },
    { icon: <Linkedin />, link: "#" },
    { icon: <Twitter />, link: "#" },
    { icon: <Mail />, link: "mailto:javabuddy@gmail.com" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6 md:px-20 relative overflow-hidden">
      
      <img
        src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
        alt="Java Cup"
        loading="lazy"
        className="absolute right-5 top-5 w-20 h-20 opacity-10 hover:opacity-30 transition duration-500 rotate-12 hover:rotate-0"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Java Buddy
          </h2>
          <p className="text-sm leading-relaxed">
            Your smart Java learning companion. Learn core concepts like OOP,
            Collections, Exceptions & more — made simple, interactive and fun.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-green-400 transition"
                >
                  {item.icon} {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            Connect With Us
          </h3>

          <div className="flex gap-4 mb-4">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition transform hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <p className="text-sm">📩 javabuddy@gmail.com</p>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-800 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()}{" "}
        <span className="text-green-400 font-semibold">Java Buddy</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;