"use client";

import {
  Shield,
  Wrench,
  Car,
  Zap,
  CheckCircle,
  Smartphone,
  LucideIcon,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ServiceItem {
  title: string;
  desc: string;
  features: string[];
  icon: LucideIcon;
  image?: string;
}

const services: ServiceItem[] = [
  {
    title: "Windshield Chip Repair",
    desc: "Fast, invisible repairs for stone chips. Prevents spreading and restores structural integrity.",
    features: ["Stops Spreading", "30 Min Service", "Lifetime Warranty"],
    icon: Shield,
    image: "/images/repairment.png",
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

function ZoomingServiceCard({ service }: { service: ServiceItem }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Zoom in as it enters, stay full size in middle, zoom out as it leaves
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0.85, 1, 1, 0.9]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [100, 0, 0, -50]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity, y }}
      className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-4 shadow-xl shadow-blue-900/5 border border-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row">
        {/* Content Side (Left - 45%) */}
        <div className="w-full md:w-[45%] p-6 md:p-12 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 w-fit mb-4 md:mb-6">
            <service.icon className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Premium Service
            </span>
          </div>

          <h3 className="text-2xl md:text-4xl font-black text-slate-800 mb-4 md:mb-6 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>

          <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed max-w-xl">
            {service.desc}
          </p>

          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {service.features.map((feature: string, fIdx: number) => (
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

        {/* Image Side (Right - 55%) */}
        <div className="w-full md:w-[55%] flex">
          <div className="relative w-full aspect-[4/3] md:aspect-auto md:min-h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden m-2 md:m-0">
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
  );
}

export default function GlassServiceGrid() {
  return (
    <section id="services" className="py-20 relative z-10">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col items-center gap-6 mb-16 relative">
          {/* Center Text */}
          <div className="text-center max-w-2xl relative z-10 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-800 leading-tight px-4 py-8">
              Premium Auto Glass Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed px-0">
              Combining expert craftsmanship with modern technology to keep you
              <br className="hidden sm:block" />
              safe on the road.
            </p>
          </div>
        </div>

        {/* Top 2 Services with Zoom Animation */}
        <div className="flex flex-col gap-8 md:gap-12 mb-24">
          {services.slice(0, 2).map((service, idx) => (
            <ZoomingServiceCard key={idx} service={service} />
          ))}
        </div>

        {/* Remaining Services - Standard Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(2).map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                delay: idx * 0.05,
              }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
