"use client";

import {
  Shield,
  Wrench,
  Car,
  Zap,
  CheckCircle,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Windshield Chip Repair",
    desc: "Fast, invisible repairs for stone chips. Prevents spreading and restores structural integrity.",
    features: ["Stops Spreading", "30 Min Service", "Lifetime Warranty"],
    icon: Shield,
    image: "/images/repairment.png",
  },
  {
    title: "Windshield Replacement",
    desc: "Complete replacement for severe damage using OEM quality glass and certified technicians.",
    features: ["OEM Quality Glass", "Certified Techs", "Safety Verified"],
    icon: Wrench,
    image: "/images/replacment.png",
  },
  {
    title: "Mobile Service",
    desc: "We come to you in Queen Anne and greater Seattle. Home or office service available.",
    features: ["We Come to You", "No Extra Fee", "Fully Equipped"],
    icon: Car,
    image: "/images/mobile-service.png",
  },
  {
    title: "Insurance Claims",
    desc: "We work with all major insurance providers to handle the paperwork and billing for you.",
    features: ["Direct Billing", "All Providers", "Hassle Free"],
    icon: Zap,
  },
  {
    title: "DIY vs Pro Advice",
    desc: "Honest advice on when a DIY kit might work vs when you need a professional repair.",
    features: ["Expert Consultation", "Safety First", "Cost Analysis"],
    icon: Smartphone,
  },
  {
    title: "Free Estimates",
    desc: "Get a hassle-free over-the-phone estimate for your repair or replacement needs.",
    features: ["Instant Quote", "Transparent Pricing", "No Hidden Fees"],
    icon: CheckCircle,
  },
];

export default function GlassServiceGrid() {
  return (
    <section id="services" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-12 mb-16 relative">
          {/* Left Side Cracks */}
          <div className="hidden md:block w-48 h-32 opacity-80">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 100"
              className="overflow-visible"
            >
              {/* Main branch moving left */}
              <motion.path
                d="M 200 50 L 160 45 L 130 65 L 90 40 L 50 55 L 10 35"
                fill="transparent"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
              {/* Upper sub-branch */}
              <motion.path
                d="M 160 45 L 140 20 L 100 15"
                fill="transparent"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
              {/* Lower sub-branch */}
              <motion.path
                d="M 130 65 L 100 85 L 60 80"
                fill="transparent"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            </svg>
          </div>

          {/* Center Text */}
          <div className="text-center max-w-2xl relative z-10 shrink-0">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 mt-10">
              Premium Auto Glass Services
            </h2>
            <p className="text-lg text-slate-600">
              Combining expert craftsmanship with modern technology to keep you
              safe on the road.
            </p>
          </div>

          {/* Right Side Cracks */}
          <div className="hidden md:block w-48 h-32 opacity-80">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 100"
              className="overflow-visible"
            >
              {/* Main branch moving right */}
              <motion.path
                d="M 0 50 L 40 45 L 70 65 L 110 40 L 150 55 L 190 35"
                fill="transparent"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
              {/* Upper sub-branch */}
              <motion.path
                d="M 40 45 L 60 20 L 100 15"
                fill="transparent"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
              {/* Lower sub-branch */}
              <motion.path
                d="M 70 65 L 100 85 L 140 80"
                fill="transparent"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            </svg>
          </div>
        </div>

        {/* Featured Top 3 Services - Enhanced Animation */}
        <div className="flex flex-col gap-12 mb-24">
          {services.slice(0, 3).map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative bg-white rounded-[2.5rem] p-4 pr-4 shadow-xl shadow-blue-900/5 border border-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Content Side (Left - 40%) */}
                <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 w-fit mb-6">
                    <service.icon className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Premium Service
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center text-sm font-semibold text-slate-600"
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 text-blue-500 group-hover:scale-110 transition-transform">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side (Right - 60%) */}
                <div className="w-full md:w-[60%] min-h-[300px] md:min-h-full">
                  <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remaining Services - Standard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(3).map((service, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="relative w-14 h-14 mb-6">
                <div className="w-full h-full rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform bg-blue-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3 text-slate-800">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.desc}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-center text-sm text-slate-500"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
