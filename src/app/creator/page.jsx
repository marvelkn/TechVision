'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Creator() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const skills = [
    { name: "React.js", level: "60%" },
    { name: "Next.js", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "TypeScript", level: "0%" },
    { name: "Node.js", level: "80%" },
    { name: "TailwindCSS", level: "92%" }
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/marvelkn", icon: "📚" },
    { name: "LinkedIn", url: "linkedin.com/in/marvel-kevin-nathanael-66b43628a", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com/marvel", icon: "🐦" },
    { name: "Instagram", url: "https://www.instagram.com/marvelkn/", icon: "📸" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
        
        {/* Animated background */}
        {isClient && (
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-blue-500">Marvel Kevin Nathanael</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="text-gray-400 mb-8">
                Passionate about creating innovative web solutions and delivering exceptional user experiences. 
                With expertise in modern web technologies and a keen eye for design, I bring ideas to life 
                through clean, efficient code and intuitive interfaces.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm 
                             flex items-center gap-2 transition-colors"
                  >
                    <span>{link.icon}</span>
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative px-4 md:px-0 mb-8 md:mb-0"
            >
              <div className="aspect-square rounded-full overflow-hidden border-4 border-blue-500/30 
                            shadow-2xl shadow-blue-500/20 
                            w-[250px] md:w-[400px] lg:w-[500px] 
                            mx-auto">
                <img
                  src="/marvel.jpg"
                  alt="Creator"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Technical Skills
          </motion.h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Experience & Education
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Tirtamarta BPK Penabur Pondok Indah</h3>
              <p className="text-blue-400 mb-4">Science • 2017-2020</p>
              <p className="text-gray-400">
                Graduated from science major with focus on mathematics and physics. 
                Developed strong analytical and problem-solving skills through rigorous academic programs.
                Active in various school organizations and events.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Multimedia Nusantara University</h3>
              <p className="text-blue-400 mb-4">Bachelor's in Computer Science • 2023-Present</p>
              <p className="text-gray-400">
                Currently pursuing Computer Science degree with focus on software development and web technologies.
                Actively participating in coding projects and technology workshops to enhance practical skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-12 rounded-2xl backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect!</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in working together? Feel free to reach out for collaborations or just a friendly hello
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 