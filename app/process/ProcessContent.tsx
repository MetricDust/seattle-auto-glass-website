"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Wrench, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import ProcessVideoAnimation from "../../components/ProcessVideoAnimation";

const GlassHeader = dynamic(() => import("../../components/GlassHeader"), {
    loading: () => <div className="h-16 bg-white" />,
    ssr: false
});

const processSteps = [
    {
        icon: Shield,
        title: "Initial Assessment",
        description: "Your auto glass expert starts with an eagle-eyed inspection of the damage. They're not just looking at the size of the chip; they carefully assess the depth of the impact and its proximity to the edges of the glass. This is crucial because damage near the edge can compromise the entire windshield's structural integrity more quickly than a centered chip. Think of them as specialized glass diagnosticians ensuring your vehicle remains safe for the road.",
        details: "A perfectly clean surface is the foundation of a successful repair. We use industrial cleaners and specialized tools to remove every trace of dirt, moisture, and loose glass shards from the impact point. Any contamination left behind can prevent the resin from bonding properly, leading to a failed repair. This preparation step is where most DIY attempts fail, making professional [windshield repair](/process/) the only choice for long-term safety."
    },
    {
        icon: Wrench,
        title: "The Resin Application",
        description: "After the area is prepped and vacuumed of air, our technicians use precision injectors to introduce high-quality, optically-clear resin into the break. This resin is engineered to match the refractive index of your auto glass, which is what makes the repair nearly invisible to the naked eye. We apply consistent pressure to ensure the resin penetrates every tiny fissure radiating from the central chip, restoring the strength of the glass to its original factory standards.",
        details: "Once the resin is perfectly placed, we use a high-intensity UV light to initiate the curing process. This hardens the resin in minutes, creating a permanent bond that is as strong as the glass itself. Unlike some [DIY kits](/faq/), our professional-grade UV lamps ensure a deep, even cure that won't yellow or shrink over time, even under the harsh Seattle sun or freezing winter temperatures."
    },
    {
        icon: Sparkles,
        title: "Precision Polishing",
        description: "The final step is what gives the repair its 'wow' factor. We remove any excess surface resin and apply a specialized pit polish to the impact point. Our technicians then perform a meticulous hand-buffing process to ensure the surface of the windshield is perfectly smooth and level with the surrounding glass. This attention to detail eliminates any bumps or rough patches that could catch on your windshield wipers or cause distracting glare.",
        details: "This finishing touch doesn't just return a showroom shine; it's a vital safety check. Minor imperfections on the surface can lead to visibility issues during night driving or in heavy rain. By guaranteeing a smooth, invisible finish, we ensure that your vision remains clear and your wipers function flawlessly. Our [precision polishing](/process/) is the hallmark of a Seattle Auto Glass LLC repair."
    }
];

export default function ProcessContent() {
    const scrollSectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollSectionRef,
        offset: ["start start", "end end"],
    });
    const reversedScroll = useTransform(scrollYProgress, (value) => 1 - value);

    return (
        <>
            <GlassHeader />
            <div className="min-h-screen bg-gradient-to-br from-[#ccfbf1] via-[#e0f2fe] to-[#f3e8ff] relative text-slate-900 pt-20">
                {/* Animated Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-teal-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
                    <div className="absolute top-1/2 -left-40 w-[800px] h-[800px] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-40 right-1/2 w-[800px] h-[800px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 py-16">
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

                    {/* Process Steps + Scroll Canvas */}
                    <section ref={scrollSectionRef} className="mb-20">
                        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
                            <div className="relative">
                                <div className="sticky top-28 h-[70vh] rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-2xl shadow-blue-500/20 border border-white/10">
                                    <ProcessVideoAnimation
                                        videoSrc="/process-animation.mp4"
                                    />
                                </div>
                            </div>
                            <div className="lg:sticky top-28 space-y-4">
                                {processSteps.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="bg-white rounded-2xl p-5 shadow-lg shadow-blue-500/5 border border-white/50"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                                <step.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h2 className="text-xl font-black text-slate-900">
                                                {step.title}
                                            </h2>
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
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
