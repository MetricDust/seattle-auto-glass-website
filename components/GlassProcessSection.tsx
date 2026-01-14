"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

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

  // Gyroscope Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section ref={containerRef} id="process" className="relative h-[300vh]">
      <div className="sticky top-0 min-h-screen lg:h-screen flex items-center overflow-y-auto lg:overflow-hidden py-12 lg:py-0">
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
            {/* Visual Side (Left) - Stays Static */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div
                className="relative w-full max-w-[300px] sm:max-w-md aspect-square flex items-center justify-center"
                style={{ perspective: "1500px" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* 
                  Refactored logic based on Angular snippet:
                  pos.x = mapped -1 to 1
                  pos.y = mapped 1 to -1
                  translate3d(tx * -pos.x, ty * pos.y, tz * pos.z)
                  rotateX(rx * pos.y) rotateY(ry * pos.x)
                */}

                {/* Layer 3 - Back (Config 0: Base with Rotation) */}
                <motion.div
                  style={{
                    x: useTransform(smoothX, [-0.5, 0.5], [0, 0]), // tx: 0
                    y: useTransform(smoothY, [-0.5, 0.5], [0, 0]), // ty: 0
                    translateZ: 0, // tz: 0
                    rotateX: useTransform(smoothY, [-0.5, 0.5], [-25, 25]), // rx: 25 (pos.y is inverted mouse)
                    rotateY: useTransform(smoothX, [-0.5, 0.5], [-25, 25]), // ry: 25
                    boxShadow: useTransform([smoothX, smoothY], ([x, y]) => {
                      const px = (x as number) * 2;
                      const py = (y as number) * -2;
                      return `${10 * -px}px ${10 * py}px 5px rgba(0,0,0,0.25)`;
                    }),
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-[2rem] lg:rounded-[3rem] border border-white/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                  <motion.img
                    src="/images/layer3.png"
                    alt="Back Layer"
                    className="w-full h-full object-contain opacity-60 pointer-events-none"
                  />
                </motion.div>

                {/* Layer 2 - Center (Config 1: Middle with Translation) */}
                <motion.div
                  style={{
                    x: useTransform(smoothX, [-0.5, 0.5], [25, -25]), // tx: -25 * -pos.x
                    y: useTransform(smoothY, [-0.5, 0.5], [25, -25]), // ty: -25 * pos.y (pos.y = -smoothY*2)
                    translateZ: 10,
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <motion.img
                    src="/images/layer2.png"
                    alt="Center Layer"
                    className="w-full h-full object-contain opacity-80"
                  />
                </motion.div>

                {/* Layer 1 - Front (Config 2: Foreground with High Translation) */}
                <motion.div
                  style={{
                    x: useTransform(smoothX, [-0.5, 0.5], [25, -25]), // tx: -25 * -pos.x
                    y: useTransform(smoothY, [-0.5, 0.5], [25, -25]), // ty: -25 * pos.y
                    translateZ: 40,
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <motion.img
                    src="/images/layer1.png"
                    alt="Front Layer"
                    className="w-full h-full object-contain scale-105"
                  />
                </motion.div>

                {/* Decorative depth elements tracking Layer 1 */}
                <motion.div
                  style={{
                    x: useTransform(smoothX, [-0.5, 0.5], [50, -50]),
                    y: useTransform(smoothY, [-0.5, 0.5], [50, -50]),
                    translateZ: -50,
                  }}
                  className="absolute -top-12 -right-12 w-32 h-32 bg-blue-400/10 blur-3xl rounded-full"
                ></motion.div>
                <motion.div
                  style={{
                    x: useTransform(smoothX, [-0.5, 0.5], [-30, 30]),
                    y: useTransform(smoothY, [-0.5, 0.5], [30, -30]),
                    translateZ: -50,
                  }}
                  className="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-400/10 blur-3xl rounded-full"
                ></motion.div>
              </div>
            </div>

            {/* Content Side (Right) - Steps Update on Scroll */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-blue-600 font-extrabold tracking-widest uppercase text-[10px] sm:text-xs mb-2 sm:mb-4 block">
                  The Science of Repair
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-12 tracking-tighter leading-tight">
                  Precision <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Repair Process
                  </span>
                </h2>
              </motion.div>

              <div className="space-y-4 sm:space-y-6">
                {steps.map((step, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      animate={{
                        opacity: isActive ? 1 : 0.6,
                        scale: isActive ? 1 : 0.98,
                      }}
                      className={`relative pl-12 sm:pl-16 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-white shadow-lg shadow-blue-500/5 border border-blue-100"
                          : "bg-transparent border border-transparent"
                      }`}
                    >
                      {/* Number Plate */}
                      <div
                        className={`absolute left-3 sm:left-4 top-4 sm:top-5 w-7 h-7 sm:w-9 sm:h-9 rounded-lg shadow-sm flex items-center justify-center font-black text-xs sm:text-sm transition-all ${
                          isActive
                            ? "bg-blue-600 text-white scale-110"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {step.number}
                      </div>

                      <div className="w-full text-left flex items-center justify-between group cursor-default">
                        <h3
                          className={`text-lg sm:text-xl font-black tracking-tight transition-colors ${
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
                        <div className="pt-2 sm:pt-4 pr-4 sm:pr-6">
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-left">
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
