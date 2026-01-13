"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Assessment",
    description:
      "Your auto glass expert starts with an eagle-eyed inspection of the damage. They’re not just looking at size; they assess depth and location to ensure repairs won’t compromise your ride’s structural integrity. Think of it as a proper diagnosis before surgery – we ensure your safety first.",
  },
  {
    number: "02",
    title: "The Resin Application",
    description:
      "After preparing the area, we use high-quality, specialized resin to restore strength and clarity. We inject it with precision equipment, ensuring no gaps – much like repairing fine china with expert care.",
  },
  {
    number: "03",
    title: "Precision Polishing",
    description:
      "Last up? A meticulous polish that ensures nothing is left behind but smooth sailing. No bumps or rough patches are allowed when we strive for post-repair invisibility.",
  },
];

export default function GlassProcessSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Update active index based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest < 0.66) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  return (
    <section ref={containerRef} id="process" className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Visual Side (Left) - Stays Static */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] group">
                {/* Glass Container for Image */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                  <img
                    src="/images/glass-layers.png"
                    alt="Windshield Layers Diagram"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  {/* Overlay "Glass" shine */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/20 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full"></div>
              </div>
            </div>

            {/* Content Side (Right) - Steps Update on Scroll */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-blue-600 font-extrabold tracking-widest uppercase text-sm mb-4 block">
                  The Science of Repair
                </span>
                <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-12 tracking-tighter leading-none">
                  Precision <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Repair Process
                  </span>
                </h2>
              </motion.div>

              <div className="space-y-6">
                {steps.map((step, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      animate={{
                        opacity: 1,
                        scale: isActive ? 1.02 : 1,
                      }}
                      className={`relative pl-16 py-4 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-white shadow-xl shadow-blue-500/5 border border-blue-100"
                          : "bg-transparent border border-transparent"
                      }`}
                    >
                      {/* Number Plate */}
                      <div
                        className={`absolute left-4 top-5 w-9 h-9 rounded-lg shadow-sm flex items-center justify-center font-black text-sm transition-all ${
                          isActive
                            ? "bg-blue-600 text-white scale-110"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {step.number}
                      </div>

                      <div className="w-full text-left flex items-center justify-between group cursor-default">
                        <h3
                          className={`text-xl font-black tracking-tight transition-colors ${
                            isActive ? "text-blue-600" : "text-slate-400"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pr-6">
                          <p className="text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-50"></div>
      </div>
    </section>
  );
}
