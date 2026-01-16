"use client";

import { motion } from "framer-motion";
import { Shield, Wrench, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const GlassHeader = dynamic(() => import("../../components/GlassHeader"), {
  loading: () => <div className="h-16 bg-white" />,
  ssr: false
});

const processSteps = [
  {
    icon: Shield,
    title: "Initial Assessment",
    description: "Your auto glass expert starts with an eagle-eyed inspection of the damage. They're not just looking at size; they assess depth and location to ensure repairs won't compromise your ride's structural integrity.",
    details: "Think of them as doctors for your car – no one wants surgery without a proper diagnosis. A clean surface is critical to success here, so dirt and moisture are removed before any real action occurs. It's like prepping for paint – skip this step, and you'll be sorry later."
  },
  {
    icon: Wrench,
    title: "The Resin Application",
    description: "After preparing the area, technician uses high-quality resin designed for cars to restore strength and clarity.",
    details: "They inject it into the chip with precise equipment, ensuring no spills or gaps, like filling fine cracks in delicate china. Curing under UV light hardens resin quickly. Patience might be virtuous elsewhere, but not in windshield repair land where time is money."
  },
  {
    icon: Sparkles,
    title: "Precision Polishing",
    description: "Last up? A meticulous polish that ensures nothing is left behind but smooth sailing.",
    details: "No bumps or rough patches are allowed when striving for invisibility post-repair. This finishing touch returns that out-of-showroom shine while guaranteeing safety since even minor imperfections can lead to significant visibility issues."
  }
];

export default function ProcessPage() {
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
            The Repair Process
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Explained
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Chip repair becomes necessary when a rogue pebble decides your windshield is next target. 
            But why does it feel like you're paying premium prices for just a dollop of resin?
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
            Well, because fixing that tiny chip involves more than meets the eye.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-12 mb-20">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Icon Side */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                    <step.icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 blur-3xl rounded-full"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-white/50">
                  <h2 className="text-3xl font-black text-slate-900 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <p className="text-slate-700 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* When to Repair Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl shadow-blue-500/5 border border-white/50">
            <h2 className="text-4xl font-black text-slate-900 mb-8 text-center">
              When to Repair or Replace Your Windshield
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Sometimes, a chip in your windshield is like a minor annoyance; other times, it's a significant problem. 
              Knowing when a repair is enough or when a total replacement is needed is challenging.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Size and Severity Factor</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Here's a basic rule: if the chip is smaller than a quarter and not spreading across your view, you can likely get it repaired.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  However, replacing the windshield is necessary for safety and appearance if it's bigger than three inches or blocking your sight.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Location Lowdown</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Where exactly did this unwanted guest decide to land? If we're talking center stage—right in front of where you sit—the spotlight may mean opting for a replacement.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Chips by edges are sneaky—they weaken overall structural integrity because they love company and invite cracks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Taking Safety Seriously</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Your car's windshield does more than keep bugs out of teeth; it plays starring roles in vehicle structural strength and airbag deployment.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  That tiny chip might seem harmless until its audition turns into an unexpected stunt performance compromising passenger protection.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
