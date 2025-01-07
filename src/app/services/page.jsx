'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Services() {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Core services data
  const services = [
    {
      icon: "🚀",
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for your business",
      features: [
        "Machine Learning Integration",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Predictive Analytics"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: [
        "Threat Detection",
        "Security Auditing",
        "Penetration Testing",
        "Incident Response"
      ],
      color: "from-red-500 to-orange-600"
    },
    {
      icon: "🌐",
      title: "Web Development",
      description: "Modern web solutions built with cutting-edge technologies",
      features: [
        "Full-Stack Development",
        "Progressive Web Apps",
        "API Integration",
        "Cloud Deployment"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Solutions",
        "Mobile UI/UX Design"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  // Technology stack
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "GraphQL", icon: "📊" },
  ];

  // Process steps
  const processSteps = [
    { title: "Discovery", description: "Understanding your needs and objectives" },
    { title: "Planning", description: "Creating a detailed roadmap for success" },
    { title: "Development", description: "Building your solution with precision" },
    { title: "Testing", description: "Ensuring quality and performance" },
    { title: "Deployment", description: "Launching your solution to the world" },
    { title: "Support", description: "Ongoing maintenance and improvements" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
        
        {/* Animated circuit board pattern */}
        {isClient && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-blue-500/30"
                style={{
                  width: Math.random() * 100 + 50,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  rotate: Math.random() * 360
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse"
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Transform your ideas into reality with our expert team. 
            Whether you have a specific project in mind or need guidance, 
            we're here to help you succeed.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-4xl"
        >
          ↓
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-gray-400"
                      >
                        <span className="mr-2">→</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Technology Stack
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center group"
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {tech.icon}
                </div>
                <div className="text-lg font-semibold">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg relative group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-2xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 pt-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-lg transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Let's transform your ideas into reality with our cutting-edge solutions
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </div>
  );
}
