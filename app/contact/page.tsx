"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import dynamic from "next/dynamic";

const GlassHeader = dynamic(() => import("../../components/GlassHeader"), {
  loading: () => <div className="h-16 bg-white" />,
  ssr: false
});

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "(425) 931-4095",
    action: "tel:425-931-4095",
    description: "Available Monday-Friday, 8AM-6PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@seattleautoglass.com",
    action: "mailto:info@seattleautoglass.com",
    description: "We respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Queen Anne, Seattle, WA",
    description: "By appointment only"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 8AM-6PM",
    description: "Emergency service available"
  }
];


export default function ContactPage() {
  return (
    <>
      <GlassHeader />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Get in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Touch With Us
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Have a cracked windshield or need auto glass services? 
              Our expert team is ready to help you get back on the road safely.
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-white/50 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">{info.details}</p>
                <p className="text-sm text-slate-600">{info.description}</p>
                {info.action && (
                  <a
                    href={info.action}
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    {info.title === "Call Us" && <Phone className="w-4 h-4" />}
                    {info.title === "Email Us" && <Mail className="w-4 h-4" />}
                    {info.title === "Visit Us" && <MapPin className="w-4 h-4" />}
                    {info.title === "Business Hours" && <Clock className="w-4 h-4" />}
                    <span>Get Started</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-12 shadow-xl shadow-blue-500/5 border border-white/50">
              <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
                Send Us a Message
              </h2>
              <form className="max-w-2xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="(425) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                    <option value="">Select a service</option>
                    <option value="Windshield Chip Repair">Windshield Chip Repair</option>
                    <option value="Windshield Replacement">Windshield Replacement</option>
                    <option value="Mobile Service">Mobile Service</option>
                    <option value="Insurance Claims">Insurance Claims</option>
                    <option value="Free Estimates">Free Estimates</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                    placeholder="Tell us about your auto glass needs..."
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Emergency Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Emergency Service Available</h3>
              <p className="text-lg mb-4">
                Need immediate assistance? Call us for emergency windshield repair service.
              </p>
              <a
                href="tel:425-931-4095"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-amber-600 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: (425) 931-4095</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
