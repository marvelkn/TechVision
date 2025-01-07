'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Project categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'cyber', name: 'Cybersecurity' }
  ];

  // Project data
  const projects = [
    {
      id: 1,
      title: "Neural Network Vision",
      category: "ai",
      image: "/Neural Network Vision.jpg",
      description: "Advanced AI system for computer vision applications with real-time processing capabilities",
      technologies: ["TensorFlow", "Python", "OpenCV", "CUDA"],
      stats: {
        completion: "98%",
        satisfaction: "100%",
        timeline: "3 months"
      },
      features: [
        "Real-time object detection",
        "Facial recognition",
        "Pattern analysis",
        "Predictive modeling"
      ]
    },
    {
      id: 2,
      title: "Secure Cloud Platform",
      category: "cyber",
      image: "/Secure Cloud Platform.jpg",
      description: "Enterprise-grade cloud security solution with advanced threat detection",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      stats: {
        completion: "100%",
        satisfaction: "98%",
        timeline: "6 months"
      },
      features: [
        "End-to-end encryption",
        "Zero-trust architecture",
        "Real-time monitoring",
        "Automated threat response"
      ]
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "web",
      image: "/E-Commerce Platform.png",
      description: "Modern e-commerce solution with headless CMS and payment integration",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      stats: {
        completion: "100%",
        satisfaction: "99%",
        timeline: "4 months"
      },
      features: [
        "Headless architecture",
        "Real-time inventory",
        "Multi-payment gateway",
        "Analytics dashboard"
      ]
    },
    {
      id: 4,
      title: "Smart Home App",
      category: "mobile",
      image: "/Smart Home App.png",
      description: "IoT-enabled mobile application for smart home control and automation",
      technologies: ["React Native", "Node.js", "MQTT", "Firebase"],
      stats: {
        completion: "95%",
        satisfaction: "97%",
        timeline: "5 months"
      },
      features: [
        "Device synchronization",
        "Voice commands",
        "Energy monitoring",
        "Automated schedules"
      ]
    },
    {
      id: 5,
      title: "Predictive Analytics Engine",
      category: "ai",
      image: "/Predictive Analytics Engine.png",
      description: "Machine learning system for business intelligence and forecasting",
      technologies: ["Python", "Scikit-learn", "PostgreSQL", "Apache Spark"],
      stats: {
        completion: "97%",
        satisfaction: "96%",
        timeline: "7 months"
      },
      features: [
        "Market trend analysis",
        "Revenue forecasting",
        "Risk assessment",
        "Custom reporting"
      ]
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      category: "cyber",
      image: "/Blockchain Wallet.jpg",
      description: "Secure cryptocurrency wallet with multi-chain support",
      technologies: ["Solidity", "Web3.js", "React", "Node.js"],
      stats: {
        completion: "100%",
        satisfaction: "99%",
        timeline: "8 months"
      },
      features: [
        "Multi-chain support",
        "Hardware wallet integration",
        "Transaction history",
        "Smart contract interaction"
      ]
    },
    {
      id: 7,
      title: "Social Media Dashboard",
      category: "web",
      image: "/Social Media Dashboard.avif",
      description: "Comprehensive social media management and analytics platform",
      technologies: ["Vue.js", "GraphQL", "Express", "D3.js"],
      stats: {
        completion: "98%",
        satisfaction: "95%",
        timeline: "4 months"
      },
      features: [
        "Multi-platform integration",
        "Content scheduling",
        "Engagement analytics",
        "Automated reporting"
      ]
    },
    {
      id: 8,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "/Fitness Tracking App.png",
      description: "AI-powered fitness tracking and workout planning application",
      technologies: ["Flutter", "TensorFlow Lite", "Firebase", "HealthKit"],
      stats: {
        completion: "96%",
        satisfaction: "98%",
        timeline: "5 months"
      },
      features: [
        "Workout recognition",
        "Personalized plans",
        "Progress tracking",
        "Social features"
      ]
    },
    {
      id: 9,
      title: "Network Security Suite",
      category: "cyber",
      image: "/Network Security Suite.jpg",
      description: "Enterprise network security monitoring and threat prevention system",
      technologies: ["Python", "Elasticsearch", "Kibana", "Snort"],
      stats: {
        completion: "99%",
        satisfaction: "97%",
        timeline: "9 months"
      },
      features: [
        "Intrusion detection",
        "Traffic analysis",
        "Vulnerability scanning",
        "Incident response"
      ]
    },
    {
      id: 10,
      title: "AR Shopping Experience",
      category: "mobile",
      image: "/AR Shopping Experience.png",
      description: "Augmented reality shopping application for furniture visualization",
      technologies: ["ARKit", "Unity", "iOS", "Android"],
      stats: {
        completion: "94%",
        satisfaction: "96%",
        timeline: "6 months"
      },
      features: [
        "Real-time AR preview",
        "Product customization",
        "Space measurement",
        "Social sharing"
      ]
    }
  ];

  // Filter projects based on active category
  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section - Added pt-20 for navbar spacing */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
        
        {/* Animated background elements */}
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

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Showcasing innovation through real-world solutions
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-gray-300'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-60"
                      whileHover={{ opacity: 0.8 }}
                    />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-lg w-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <p className="text-gray-400 mb-6">{selectedProject.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-400"
                      >
                        <span className="mr-2 text-blue-400">→</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Project Success Metrics
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Projects Completed", icon: "🚀" },
              { value: "98%", label: "Client Satisfaction", icon: "⭐" },
              { value: "45+", label: "Countries Reached", icon: "🌍" },
              { value: "24/7", label: "Support Available", icon: "💪" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-12 rounded-2xl backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with our expertise and innovation
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
