'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CountUp from 'react-countup';
import Link from 'next/link';

export default function Home() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  const services = [
    {
      title: "Digital Transformation Consulting",
      description: "Empower your business with a roadmap to the future. We provide end-to-end consulting services to modernize your operations, improve efficiency, and unlock new growth opportunities through digital transformation.",
      icon: "🚀"
    },
    {
      title: "Custom Software Development",
      description: "From concept to deployment, our team builds scalable and secure software tailored to meet your business needs. Whether it's web apps, mobile solutions, or enterprise systems, we ensure your vision comes to life.",
      icon: "💻"
    },
    {
      title: "AI & Machine Learning",
      description: "Stay ahead with AI-powered tools and machine learning models that enhance decision-making, automate processes, and drive actionable insights for your business.",
      icon: "🤖"
    },
    {
      title: "Cloud Integration Services",
      description: "Transition seamlessly to the cloud with our expert integration services. We help you harness the power of cloud computing for scalability, flexibility, and cost efficiency.",
      icon: "☁️"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your assets with state-of-the-art cybersecurity strategies. We offer comprehensive assessments, threat detection, and secure frameworks to safeguard your business from digital threats.",
      icon: "🔒"
    },
    {
      title: "UX/UI Design & Prototyping",
      description: "Deliver exceptional user experiences with intuitive design. Our creative team crafts engaging and user-centric interfaces that elevate your digital products and keep customers coming back.",
      icon: "🎨"
    },
    {
      title: "IoT Development & Integration",
      description: "Unlock the potential of the Internet of Things (IoT). We develop and integrate IoT solutions that connect devices, improve operational efficiency, and create smarter systems.",
      icon: "📱"
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Turn raw data into actionable insights. Our data analytics services enable you to make informed decisions, optimize processes, and identify opportunities for growth.",
      icon: "📊"
    },
    {
      title: "Digital Marketing Strategies",
      description: "Amplify your brand presence and drive engagement with comprehensive digital marketing strategies. From SEO to social media campaigns, we ensure your business stands out in the crowded digital landscape.",
      icon: "📈"
    },
    {
      title: "Blockchain Solutions",
      description: "Embrace transparency and security with blockchain technology. We develop blockchain-based applications that enhance trust, improve transaction processes, and bring innovative solutions to life.",
      icon: "⛓️"
    }
  ];

  const testimonials = [
    {
      name: "Anya Forger",
      role: "CEO, Spy Family Corp",
      content: "TechVision transformed our business operations completely. Their expertise in digital solutions is unmatched. The team's innovative approach helped us achieve our goals faster than expected.",
      image: "/anya.jpg"
    },
    {
      name: "Ichika Nakano",
      role: "CTO, Quintuplets Tech",
      content: "Working with TechVision was a game-changer for our company. Their innovative solutions helped us scale rapidly and their attention to detail is remarkable.",
      image: "/ichika.jpg"
    },
    {
      name: "Chizuru Mizuhara",
      role: "Director, Rental Solutions",
      content: "The team's dedication to excellence and cutting-edge technology made all the difference in our digital transformation. They truly understand client needs.",
      image: "/mizuhara.jpg"
    },
    {
      name: "Yui Hirasawa",
      role: "Head of Innovation, K-ON Systems",
      content: "Exceptional service and outstanding results! TechVision helped us modernize our entire infrastructure while maintaining our core business values.",
      image: "/yui.jpg"
    },
    {
      name: "Asuka Langley",
      role: "Director of Operations, NERV Tech",
      content: "TechVision's approach to problem-solving is simply brilliant. They delivered solutions that exceeded our expectations and set new standards in our industry.",
      image: "/asuka.jpg"
    },
    {
      name: "Mikasa Ackerman",
      role: "Head of Security, Survey Corps Technologies",
      content: "The level of commitment and precision TechVision brings to each project is extraordinary. They've helped us build robust systems that stand the test of time.",
      image: "/mikasa.jpg"
    },
    {
      name: "Violet Evergarden",
      role: "Communications Director, Auto Memory Systems",
      content: "Their ability to understand and translate complex requirements into elegant solutions is remarkable. TechVision has revolutionized how we handle our digital communications.",
      image: "/violet.jpg"
    },
    {
      name: "Yor Forger",
      role: "Security Consultant, Garden Security Solutions",
      content: "Working with TechVision has been an absolute pleasure. Their innovative security solutions and attention to detail have made our systems virtually impenetrable.",
      image: "/yor.jpg"
    }
  ];

  const stats = [
    { value: 250, label: "Projects Completed", icon: "🎯" },
    { value: 98, label: "Client Satisfaction %", icon: "⭐" },
    { value: 15, label: "Years Experience", icon: "📅" },
    { value: 120, label: "Expert Team Members", icon: "👥" }
  ];

  // Predefined circle configurations to avoid hydration mismatch
  const circles = [
    { width: 200, height: 200, top: "20%", left: "10%", duration: 8 },
    { width: 300, height: 300, top: "50%", left: "20%", duration: 10 },
    { width: 250, height: 250, top: "30%", left: "60%", duration: 7 },
    { width: 180, height: 180, top: "70%", left: "80%", duration: 9 },
    { width: 220, height: 220, top: "40%", left: "40%", duration: 11 }
  ];

  const [techNews, setTechNews] = useState([]);
  const [weather, setWeather] = useState(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/building.jpg',
    '/building1.jpg',
    '/building2.jpg'
  ];

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoadingWeather(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=Sydney&aqi=no`
        );
        if (!response.ok) {
          throw new Error('Weather fetch failed');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setIsLoadingWeather(false);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&pageSize=3`
        );
        if (!response.ok) {
          throw new Error('News fetch failed');
        }
        const data = await response.json();
        if (data.articles) {
          setTechNews(data.articles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchWeather();
    fetchNews();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Predefined values for floating elements
  const floatingElements = [
    { width: 250, height: 250, top: 30, left: 20 },
    { width: 200, height: 200, top: 50, left: 40 },
    { width: 300, height: 300, top: 70, left: 60 },
    { width: 150, height: 150, top: 40, left: 80 },
    { width: 180, height: 180, top: 60, left: 30 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {backgroundImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0 
            }}
            transition={{ duration: 1.5 }}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0
            }}
          />
        ))}

        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]" />

        {/* Hero Content */}
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Ideas into
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                {" "}Digital Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Innovative solutions for tomorrow's challenges
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4 mt-8"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold backdrop-blur-sm transition-colors"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[2]"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white text-4xl cursor-pointer"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Weather, Time, and Location Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-slate-900">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}>
          </div>
          {isClient && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full blur-3xl opacity-20"
                  style={{
                    background: i === 0 ? 'rgba(59, 130, 246, 0.5)' :
                               i === 1 ? 'rgba(99, 102, 241, 0.5)' :
                                        'rgba(147, 51, 234, 0.5)',
                    width: '300px',
                    height: '300px',
                    top: `${30 + i * 20}%`,
                    left: `${20 + i * 30}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: i * 2,
                  }}
                />
              ))}
            </>
          )}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Weather Card */}
            {!isLoadingWeather && weather && weather.current ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-lg flex flex-col items-center text-center h-full border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">🌤️</div>
                <h4 className="font-semibold text-xl mb-4">Current Weather</h4>
                <div className="flex flex-col items-center">
                  <img 
                    src={weather.current.condition.icon}
                    alt={weather.current.condition.text}
                    className="w-16 h-16 mb-2"
                  />
                  <p className="text-3xl font-bold mb-2">{Math.round(weather.current.temp_c)}°C</p>
                  <p className="text-lg opacity-90">{weather.current.condition.text}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-lg flex flex-col items-center text-center h-full border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">🌤️</div>
                <h4 className="font-semibold text-xl">
                  {isLoadingWeather ? (
                    <div className="flex items-center">
                      <span>Loading Weather</span>
                      <span className="ml-2 animate-pulse">...</span>
                    </div>
                  ) : (
                    "Unable to load weather"
                  )}
                </h4>
              </motion.div>
            )}

            {/* Time Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-lg flex flex-col items-center text-center h-full border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🕒</div>
              <h4 className="font-semibold text-xl mb-4">Local Time</h4>
              {isClient && (
                <>
                  <p className="text-3xl font-bold mb-2">
                    {currentTime.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: true
                    })}
                  </p>
                  <p className="text-lg opacity-90">
                    {currentTime.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </>
              )}
            </motion.div>

            {/* Office Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-lg h-full border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl">📍</div>
                </div>
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-xl mb-1">Our Office</h4>
                  <p className="text-lg opacity-90">Jakarta Pusat, Indonesia</p>
                </div>
                <motion.div 
                  className="h-[200px] w-full rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666466440111!2d106.82193407557733!3d-6.175387360478905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20M.H.%20Thamrin%20No.1%2C%20RT.1%2FRW.5%2C%20Menteng%2C%20Kec.%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010310!5e0!3m2!1sen!2sid!4v1701786786037!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Animated Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          {circles.map((circle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: circle.width,
                height: circle.height,
                top: circle.top,
                left: circle.left,
              }}
              animate={{
                y: [0, 30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: circle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose TechVision?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 backdrop-blur-sm bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={stat.value} duration={2.5} suffix="+" />
                </div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/circuit-pattern.png')] opacity-10 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Core Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Enterprise-Grade Security",
                description: "Bank-level security protocols and continuous monitoring to protect your assets."
              },
              {
                icon: "⚡",
                title: "Lightning-Fast Performance",
                description: "Optimized solutions that deliver exceptional speed and reliability."
              },
              {
                icon: "🔄",
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance for peace of mind."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-5"></div>
          {circles.map((circle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/10"
              style={{
                width: circle.width,
                height: circle.height,
                top: circle.top,
                left: circle.left,
              }}
              animate={{
                y: [0, 30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: circle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Our Services
          </motion.h2>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-500'
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 h-full border border-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 bg-gradient-to-br from-blue-400 to-blue-600 inline-block rounded-lg p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5"></div>
          {circles.map((circle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/5"
              style={{
                width: circle.width,
                height: circle.height,
                top: circle.top,
                left: circle.left,
              }}
              animate={{
                y: [0, 30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: circle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
          >
            What Our Clients Say
          </motion.h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-500'
            }}
            autoplay={{ 
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg h-full border border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-500 p-1">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-blue-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Tech News Section - Moved to bottom */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-5"></div>
          {isClient && (
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              {floatingElements.map((elem, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-blue-500/10"
                  style={{
                    width: elem.width,
                    height: elem.height,
                    top: `${elem.top}%`,
                    left: `${elem.left}%`,
                  }}
                  animate={{
                    y: [0, 50, 0],
                    x: [0, 30, 0],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Latest Tech News
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techNews.length > 0 ? (
              techNews.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  {article.urlToImage && (
                    <div className="relative h-48 overflow-hidden">
                      <motion.img 
                        initial={{ scale: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={article.urlToImage} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 text-white/90 line-clamp-2">{article.title}</h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">{article.description}</p>
                    <motion.a 
                      whileHover={{ gap: '0.75rem' }}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      Read More 
                      <span className="text-xl">→</span>
                    </motion.a>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/70"
                >
                  <div className="mb-4 text-4xl">📰</div>
                  <p className="text-xl">Loading latest tech news...</p>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TechVision</h3>
              <p className="text-gray-400">
                Innovating tomorrow's technology today.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="/projects" className="text-gray-400 hover:text-white">Projects</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Digital Transformation</li>
                <li className="text-gray-400">Software Development</li>
                <li className="text-gray-400">AI Solutions</li>
                <li className="text-gray-400">Cloud Services</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">contact@techvision.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
                <li className="text-gray-400">123 Tech Street, Silicon Valley, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TechVision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}