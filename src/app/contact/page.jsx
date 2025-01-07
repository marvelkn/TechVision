'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Contact() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'general',
    message: ''
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'ai', label: 'AI & Machine Learning' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Development' },
    { value: 'cyber', label: 'Cybersecurity' }
  ];

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: [
        "Jl. M.H. Thamrin No.1",
        "Jakarta Pusat, DKI Jakarta 10310",
        "Indonesia"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: [
        "+62 21 1234 5678",
        "Senin - Jumat",
        "09:00 - 17:00 WIB"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📧",
      title: "Email Us",
      details: [
        "info@techvision.id",
        "support@techvision.id",
        "careers@techvision.id"
      ],
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section - Added pt-20 for navbar spacing */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
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

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-6"
          >
            Let's Build Something Amazing
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
      </section>

      {/* Main Content Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - left side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-gray-300">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-gray-300">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-gray-300">Company (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-gray-300">Service Interested In</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-gray-300">Your Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information & Map - right side */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                >
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${info.color} mb-4`}>
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                  <ul className="space-y-2">
                    {info.details.map((detail, i) => (
                      <li key={i} className="text-gray-300">{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
              >
                <div className="h-96 w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666466440111!2d106.82193407557733!3d-6.175387360478905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20M.H.%20Thamrin%20No.1%2C%20RT.1%2FRW.5%2C%20Menteng%2C%20Kec.%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010310!5e0!3m2!1sen!2sid!4v1701786786037!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How quickly can you start on my project?",
                a: "We typically begin new projects within 1-2 weeks of finalizing details."
              },
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope, but most projects take 2-6 months."
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes, we provide comprehensive support and maintenance packages."
              },
              {
                q: "What are your payment terms?",
                a: "We offer flexible payment plans with milestone-based billing."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Ideas?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have turned their vision into reality with our expertise
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule a Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}