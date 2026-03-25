
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, Code, Sparkles, Heart, Zap, Target } from "lucide-react";

const cardData = [
  {
    title: "Interactive Learning",
    description:
      "Hands-on lessons, real-time feedback, and engaging quizzes make learning Java fun and effective. Whether you're practicing syntax or exploring concepts, our interactive modules help you master Java with ease.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    particles: [
      { id: 1, delay: 0, duration: 3 },
      { id: 2, delay: 1, duration: 4 },
      { id: 3, delay: 2, duration: 3.5 }
    ]
  },
  {
    title: "Beginner Friendly",
    description:
      "No prior coding experience? No worries! We start from the absolute basics and guide you step-by-step. With visuals and easy explanations, anyone can start their Java journey with Java Buddy.",
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    icon: Heart,
    color: "from-green-500 to-blue-500",
    particles: [
      { id: 1, delay: 0.5, duration: 3.2 },
      { id: 2, delay: 1.5, duration: 3.8 },
      { id: 3, delay: 0.8, duration: 3.5 }
    ]
  },
  {
    title: "Expert-Curated Content",
    description:
      "Our lessons are crafted by experienced Java professionals and carefully reviewed by educators to ensure clarity, accuracy, and real-world relevance.",
    img: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    icon: Award,
    color: "from-yellow-500 to-orange-500",
    particles: [
      { id: 1, delay: 0.3, duration: 3.7 },
      { id: 2, delay: 1.2, duration: 3.1 },
      { id: 3, delay: 2.1, duration: 3.9 }
    ]
  },
  {
    title: "Apply as You Learn",
    description:
      "Reinforce your understanding with real-life coding exercises that connect theory with practical use. Learn Java by doing, not just watching.",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    particles: [
      { id: 1, delay: 0.7, duration: 3.3 },
      { id: 2, delay: 1.8, duration: 3.6 },
      { id: 3, delay: 0.2, duration: 3.4 }
    ]
  },
];

const teamData = [
  {
    name: "Bijeta",
    role: "",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    skill: "",
    color: "from-blue-400 to-purple-500"
  },
  {
    name: "Sailaja Das",
    role: "",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    skill: "",
    color: "from-pink-400 to-red-500"
  },
  {
    name: "Sudhansu",
    role: "",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140039.png",
    skill: "",
    color: "from-green-400 to-blue-500"
  },
  {
    name: "Rupesh",
    role: "",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
    skill: "",
    color: "from-yellow-400 to-orange-500"
  },
];

const FloatingParticles = ({ particles, color }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${color} opacity-60`}
          initial={{ 
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0
          }}
          animate={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="overflow-x-hidden min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white relative">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,173,181,0.1),transparent_50%)]"></div>
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{ left: "10%", top: "20%" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{ right: "10%", bottom: "20%" }}
        />
      </div>

      <div className="relative z-10 py-20 px-6 md:px-20">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="text-[#00ADB5] w-8 h-8" />
            <h2 className="text-6xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#00f5ff] bg-clip-text text-transparent">
              Why Choose Java Buddy?
            </h2>
            <Sparkles className="text-[#00ADB5] w-8 h-8" />
          </motion.div>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover what makes us the perfect companion for your Java learning journey
          </motion.p>
        </motion.div>

        {/* Enhanced Cards Section */}
        <div className="space-y-24">
          {cardData.map((card, idx) => {
            const isLeft = idx % 2 === 0;
            const IconComponent = card.icon;
            
            return (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image Section with Enhanced Effects */}
                <motion.div
                  className="relative group"
                  onHoverStart={() => setHoveredCard(idx)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Floating Particles */}
                  <FloatingParticles particles={card.particles} color={card.color} />
                  
                  {/* Glowing Ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${card.color} p-1 opacity-0 group-hover:opacity-100`}
                    animate={hoveredCard === idx ? { rotate: 360 } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full bg-[#1A1A2E]"></div>
                  </motion.div>
                  
                  {/* Main Image */}
                  <motion.div
                    className="relative z-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] p-4 shadow-2xl border border-[#00ADB5]/30"
                    whileHover={{ 
                      boxShadow: "0 0 50px rgba(0, 173, 181, 0.5)",
                      borderColor: "rgba(0, 173, 181, 0.8)"
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-contain filter brightness-110"
                    />
                    
                    {/* Floating Icon */}
                    <motion.div
                      className={`absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg`}
                      animate={hoveredCard === idx ? { y: [-5, 5, -5] } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${card.color} opacity-20`}
                    animate={hoveredCard === idx ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Content Section with Enhanced Styling */}
                <motion.div
                  className="relative group max-w-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                  
                  {/* Main Content */}
                  <div className="relative bg-[#0F3460]/80 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-[#00ADB5]/20 group-hover:border-[#00ADB5]/50 transition-all duration-300">
                    {/* Title with Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-3xl font-semibold text-[#00ADB5] group-hover:text-[#00f5ff] transition-colors duration-300">
                        {card.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {card.description}
                    </p>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Target className="w-6 h-6 text-[#00ADB5]" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Team Section */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="text-[#00ADB5] w-8 h-8" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#00f5ff] bg-clip-text text-transparent">
                Meet the Java Buddy Team
              </h2>
              <Users className="text-[#00ADB5] w-8 h-8" />
            </motion.div>
            <p className="text-gray-300 text-lg">The passionate minds behind your learning experience</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="relative group"
                viewport={{ once: true }}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                
                {/* Main Card */}
                <div className="relative bg-[#1A1A2E]/90 backdrop-blur-xl rounded-xl p-6 text-center shadow-2xl border border-[#00ADB5]/20 group-hover:border-[#00ADB5]/50 transition-all duration-300">
                  {/* Profile Image */}
                  <motion.div
                    className="relative mx-auto w-24 h-24 mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <div className="w-full h-full rounded-full bg-[#1A1A2E]"></div>
                    </div>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="relative z-10 w-full h-full rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    {/* Floating Zap Icon */}
                    <motion.div
                      className={`absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-4 h-4 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Member Info */}
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                  <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                    {member.skill}
                  </p>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${member.color}`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Tech Stack Section */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00ADB5] to-[#00f5ff] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Built With the Best
          </motion.h2>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            {/* React */}
            <motion.div
              whileHover={{ 
                scale: 1.2, 
                rotateY: 180,
                filter: "drop-shadow(0 0 20px rgba(97, 218, 251, 0.8))"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <img
                  src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                  alt="React"
                  className="relative z-10 w-20 h-20 group-hover:brightness-125 transition-all duration-300"
                />
              </div>
              <p className="mt-3 font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">React</p>
            </motion.div>

            {/* Tailwind CSS */}
            <motion.div
              whileHover={{ 
                scale: 1.2, 
                rotateY: -180,
                filter: "drop-shadow(0 0 20px rgba(56, 189, 248, 0.8))"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <img
                  src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                  alt="Tailwind CSS"
                  className="relative z-10 w-20 h-20 group-hover:brightness-125 transition-all duration-300"
                />
              </div>
              <p className="mt-3 font-medium text-white group-hover:text-blue-400 transition-colors duration-300">Tailwind CSS</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;