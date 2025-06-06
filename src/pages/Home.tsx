import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Battery, 
  MapPin, 
  Zap, 
  Shield, 
  Smartphone, 
  Users,
  TrendingUp,
  Clock,
  Star,
  ArrowRight
} from 'lucide-react';
import VantaBackground from '../components/VantaBackground';

const Home = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Smart Station Locator",
      description: "Find the nearest battery exchange stations with real-time availability and route optimization."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Exchange",
      description: "Swap your depleted battery for a fully charged one in under 3 minutes at verified stations."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Government Verified",
      description: "All stations are verified and comply with Indian government regulations and safety standards."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "AI-Powered Assistant",
      description: "Get personalized recommendations and support from our intelligent chatbot assistant."
    }
  ];

  const stats = [
    { number: "5000+", label: "Verified Stations" },
    { number: "50K+", label: "Happy Users" },
    { number: "1M+", label: "Battery Swaps" },
    { number: "28", label: "States Covered" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Amazing service! Found a station within 2 minutes and swapped my battery instantly. The app is so intuitive."
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "BharatCharge has made my daily commute worry-free. No more range anxiety with such reliable station network."
    },
    {
      name: "Amit Patel",
      location: "Bangalore",
      rating: 5,
      text: "The AI assistant helped me plan my entire trip route with charging stops. Excellent technology!"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <VantaBackground className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 to-dark-800/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Power Your Journey with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-electric-600">
                Smart Battery Exchange
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              India's most advanced EV battery exchange network. Find verified stations, 
              swap batteries instantly, and drive without limits across 28 states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/stations"
                className="bg-electric-400 hover:bg-electric-500 text-dark-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <MapPin className="h-5 w-5" />
                <span>Find Stations Near You</span>
              </Link>
              <Link
                to="/assistant"
                className="border-2 border-electric-400 text-electric-400 hover:bg-electric-400 hover:text-dark-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Zap className="h-5 w-5" />
                <span>AI Assistant</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 text-electric-400/30"
        >
          <Battery className="h-12 w-12" />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 text-electric-400/30"
        >
          <Zap className="h-16 w-16" />
        </motion.div>
      </VantaBackground>

      {/* Stats Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-electric-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-electric-400">BharatCharge</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of electric mobility with our comprehensive battery exchange ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-dark-800 p-6 rounded-2xl hover:bg-dark-700 transition-all duration-300 transform hover:scale-105 border border-dark-700 hover:border-electric-400/30"
              >
                <div className="text-electric-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300">Simple, fast, and reliable battery exchange in 3 steps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Locate Station",
                description: "Use our app to find the nearest verified battery exchange station with real-time availability."
              },
              {
                step: "02",
                title: "Quick Exchange",
                description: "Drive to the station and swap your depleted battery for a fully charged one in under 3 minutes."
              },
              {
                step: "03",
                title: "Continue Journey",
                description: "Hit the road with a fresh battery and enjoy extended range without charging delays."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center relative"
              >
                <div className="bg-electric-400 text-dark-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-electric-400/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-300">Join thousands of satisfied EV owners across India</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-dark-800 p-6 rounded-2xl border border-dark-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-electric-400 rounded-full flex items-center justify-center text-dark-900 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-400 to-electric-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Ready to Power Your Journey?
            </h2>
            <p className="text-xl text-dark-800 mb-8 max-w-2xl mx-auto">
              Join India's largest EV battery exchange network and experience seamless electric mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/stations"
                className="bg-dark-900 hover:bg-dark-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="/benefits"
                className="border-2 border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;