'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Initial Assessment",
        description: "Your auto glass expert starts with an eagle-eyed inspection of the damage. They’re not just looking at size; they assess depth and location to ensure repairs won’t compromise your ride’s structural integrity. Think of it as a proper diagnosis before surgery – we ensure your safety first."
    },
    {
        number: "02",
        title: "The Resin Application",
        description: "After preparing the area, we use high-quality, specialized resin to restore strength and clarity. We inject it with precision equipment, ensuring no gaps – much like repairing fine china with expert care."
    },
    {
        number: "03",
        title: "Precision Polishing",
        description: "Last up? A meticulous polish that ensures nothing is left behind but smooth sailing. No bumps or rough patches are allowed when we strive for post-repair invisibility."
    }
];

export default function GlassProcessSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="process" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Side (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
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
                    </motion.div>

                    {/* Content Side (Right) */}
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
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className={`relative pl-16 py-4 rounded-2xl transition-all duration-300 ${isActive ? 'bg-white shadow-xl shadow-blue-500/5 border border-blue-100' : 'hover:bg-blue-50/30'}`}
                                    >
                                        {/* Number Plate */}
                                        <div className={`absolute left-4 top-5 w-9 h-9 rounded-lg shadow-sm flex items-center justify-center font-black text-sm transition-all ${isActive ? 'bg-blue-600 text-white scale-110' : 'bg-white border border-slate-100 text-slate-800'}`}>
                                            {step.number}
                                        </div>

                                        <button
                                            onClick={() => setActiveIndex(isActive ? null : idx)}
                                            className="w-full text-left flex items-center justify-between group"
                                        >
                                            <h3 className={`text-xl font-black tracking-tight transition-colors ${isActive ? 'text-blue-600' : 'text-slate-800'}`}>
                                                {step.title}
                                            </h3>
                                            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180 text-blue-500' : 'group-hover:text-blue-400'}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 pr-6">
                                                        <p className="text-slate-600 leading-relaxed">
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-50"></div>
        </section>
    );
}
