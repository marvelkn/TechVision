'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Interactive timeline data
  const timeline = [
    { year: "2018", title: "Company Founded", description: "Started with a vision to transform digital landscapes" },
    { year: "2020", title: "Global Expansion", description: "Expanded operations to 3 continents" },
    { year: "2022", title: "Innovation Hub", description: "Launched our state-of-the-art innovation center" },
    { year: "2024", title: "Industry Leader", description: "Recognized as a leading tech solutions provider" }
  ];

  // Updated team members data with anime quotes and Japanese translations
  const teamMembers = [
    {
      name: "Hanji Zoe",
      role: "Lead Researcher & Innovator",
      image: "/hanji.jpg",
      quote: "The world is vast and unknown, filled with mysteries waiting to be discovered!",
      quoteJp: "世界は広大で未知に満ちている、発見を待つ謎でいっぱいなんだ！",
      description: "With an insatiable curiosity and boundless enthusiasm, Hanji leads our research initiatives with the same passion she brings to every discovery."
    },
    {
      name: "Ed",
      role: "Technical Lead",
      image: "/edcowboy.jpeg",
      quote: "See you, Space Cowboy...",
      quoteJp: "さようなら、スペースカウボーイ...",
      description: "A brilliant mind with a laid-back attitude, Ed brings both technical expertise and creative problem-solving to every project."
    },
    {
      name: "Himuro",
      role: "Creative Director",
      image: "/himuro.jpg",
      quote: "In this world, those who are truly strong don't need to prove it to others.",
      quoteJp: "本当に強い者は、他人に証明する必要がない。",
      description: "Combining artistic vision with strategic thinking, Himuro ensures our designs not only look beautiful but serve a purpose."
    },
    {
      name: "Futaba",
      role: "Systems Architect",
      image: "/futaba.avif",
      quote: "The key to evolution is determination.",
      quoteJp: "進化の鍵は決意にある。",
      description: "A technical genius with a passion for innovation, Futaba architects our systems with precision and foresight."
    }
  ];

  // Company stats
  const stats = [
    { value: 150, label: "Team Members", icon: "👥" },
    { value: 50, label: "Global Clients", icon: "🌍" },
    { value: 95, label: "Success Rate", icon: "📈" },
    { value: 24, label: "Awards Won", icon: "🏆" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section with Extended Description */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
        
        {/* Animated particles */}
        {isClient && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50],
                  scale: [1, Math.random() + 0.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p className="text-lg md:text-2xl text-gray-300">
              Pioneering the future of technology with innovation and creativity
            </p>
            <div className="text-base md:text-lg text-gray-400 space-y-4 px-4 md:px-0">
              <p>
                Since our inception, we've been driven by a singular vision: to transform the digital landscape 
                and make cutting-edge technology accessible to all. Our journey began with a small team of 
                passionate innovators who dared to dream big.
              </p>
              <p>
                Today, we stand at the forefront of technological advancement, combining creativity with 
                technical excellence to deliver solutions that not only meet current needs but anticipate 
                future challenges. Our commitment to innovation is matched only by our dedication to our clients' success.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                Join Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold backdrop-blur-sm transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center justify-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2 px-4">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                    <h4 className="text-xl text-blue-400 mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-blue-500 rounded-full relative z-10">
                  <div className="w-8 h-8 bg-blue-500/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden group"
              >
                <div className="h-64 relative overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-400 mb-4">{member.role}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="relative group-hover:transform group-hover:scale-95 transition-all duration-300">
                      <p className="text-gray-300 italic">"{member.quote}"</p>
                      <p className="text-gray-400 italic text-sm mt-2 font-japanese">
                        「{member.quoteJp}」
                      </p>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-gray-400 pt-3 border-t border-white/10"
                    >
                      {member.description}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={stat.value} duration={2.5} suffix="+" />
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "💡", title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
              { icon: "🤝", title: "Collaboration", description: "Working together to achieve excellence" },
              { icon: "🎯", title: "Impact", description: "Creating meaningful change in the digital world" }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
