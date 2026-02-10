"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Shield, Wrench, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import ProcessVideoAnimation from "../../components/ProcessVideoAnimation";

const GlassHeader = dynamic(() => import("../../components/GlassHeader"), {
    loading: () => <div className="h-16 bg-white" />,
    ssr: false
});

const processSteps = [
    {
        number: "01",
        icon: Shield,
        title: "Initial Assessment",
        description: "Our auto glass experts start with an eagle-eyed inspection of the damage. We're not just looking at the size of the chip; we carefully assess the depth of the impact and its proximity to the edges of the glass. This is crucial because damage near the edge can compromise the entire windshield's structural integrity more quickly than a centered chip. Think of them as specialized glass diagnosticians ensuring your vehicle remains safe for the road.",
        details: "A perfectly clean surface is the foundation of a successful repair. We use industrial cleaners and specialized tools to remove every trace of dirt, moisture, and loose glass shards from the impact point. Any contamination left behind can prevent the resin from bonding properly, leading to a failed repair. This preparation step is where most DIY attempts fail, making professional windshield repair the only choice for long-term safety."
    },
    {
        number: "02",
        icon: Wrench,
        title: "The Resin Application",
        description: "After the area is prepped and vacuumed of air, our technicians use precision injectors to introduce high-quality, optically-clear resin into the break. This resin is engineered to match the refractive index of your auto glass, which is what makes the repair nearly invisible to the naked eye. We apply consistent pressure to ensure the resin penetrates every tiny fissure radiating from the central chip, restoring the strength of the glass to its original factory standards.",
        details: "Once the resin is perfectly placed, we use a high-intensity UV light to initiate the curing process. This hardens the resin in minutes, creating a permanent bond that is as strong as the glass itself. Unlike some DIY kits, our professional-grade UV lamps ensure a deep, even cure that won't yellow or shrink over time, even under the harsh Seattle sun or freezing winter temperatures."
    },
    {
        number: "03",
        icon: Sparkles,
        title: "Precision Polishing",
        description: "The final step is what gives the repair its 'wow' factor. We remove any excess surface resin and apply a specialized pit polish to the impact point. Our technicians then perform a meticulous hand-buffing process to ensure the surface of the windshield is perfectly smooth and level with the surrounding glass. This attention to detail eliminates any bumps or rough patches that could catch on your windshield wipers or cause distracting glare.",
        details: "This finishing touch doesn't just return a showroom shine; it's a vital safety check. Minor imperfections on the surface can lead to visibility issues during night driving or in heavy rain. By guaranteeing a smooth, invisible finish, we ensure that your vision remains clear and your wipers function flawlessly. Our precision polishing is the hallmark of a Seattle Auto Glass LLC repair."
    }
];

export default function ProcessContent() {
    const [currentStep, setCurrentStep] = useState(0);
    const scrollSectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollSectionRef,
        offset: ["start start", "end end"],
    });
    const reversedScroll = useTransform(scrollYProgress, (value) => 1 - value);

    const handlePrevious = () => {
        setCurrentStep((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1));
    };

    const handleNext = () => {
        setCurrentStep((prev) => (prev < processSteps.length - 1 ? prev + 1 : 0));
    };

    const currentStepData = processSteps[currentStep];

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
                        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start mb-8">
                            {/* Video Container - Left Side */}
                            <div className="relative">
                                <div className="sticky top-28 h-[70vh] rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-2xl shadow-blue-500/20 border border-white/10">
                                    <ProcessVideoAnimation
                                        videoSrc="/process-animation.mp4"
                                    />
                                </div>
                            </div>

                            {/* Single Card - Right Side */}
                            <div className="lg:sticky top-28 h-[70vh]">
                                {/* Card Container - Full Width */}
                                <div className="h-full relative overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="absolute inset-0 bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-500/10 border border-white/50 flex flex-col items-center text-center"
                                        >
                                            {/* Step Number Badge */}
                                            <div className="flex flex-col items-center gap-4 mb-6">
                                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                                                    <currentStepData.icon className="w-8 h-8 text-white" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-blue-600 tracking-wider uppercase">
                                                        Step {currentStep + 1} of {processSteps.length}
                                                    </div>
                                                    <h2 className="text-2xl font-black text-slate-900">
                                                        {currentStepData.title}
                                                    </h2>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="flex-1 flex items-center justify-center">
                                                <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium max-w-lg">
                                                    {currentStepData.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Controls - Centered Below Video and Card */}
                        <div className="flex items-center justify-center gap-6">
                            {/* Previous Button */}
                            <button
                                onClick={handlePrevious}
                                className="flex-shrink-0 w-12 h-12 bg-transparent rounded-full border-2 border-slate-300 hover:border-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
                                aria-label="Previous step"
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            </button>

                            {/* Step Indicator Dots in Center */}
                            <div className="flex items-center gap-2">
                                {processSteps.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentStep(idx)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentStep
                                            ? 'bg-blue-600 scale-125'
                                            : 'bg-slate-400 hover:bg-slate-500'
                                            }`}
                                        aria-label={`Go to step ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={handleNext}
                                className="flex-shrink-0 w-12 h-12 bg-transparent rounded-full border-2 border-slate-300 hover:border-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
                                aria-label="Next step"
                            >
                                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            </button>
                        </div>
                    </section>

                    {/* The Details Section - Creative Cards */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                                The Technical
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Details
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Deep dive into what makes our repair process industry-leading
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    viewport={{ once: true }}
                                    className="relative group h-full"
                                >
                                    {/* Card Background with Gradient */}
                                    <div className="h-full relative bg-white rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-white/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col">
                                        {/* Decorative Background Element */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl -z-10" />

                                        {/* Numbered Icon Header */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                                                <step.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="text-3xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors">
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                                            {step.title}
                                        </h3>

                                        {/* Details Text */}
                                        <p className="text-base text-slate-600 leading-relaxed flex-1">
                                            {step.details}
                                        </p>

                                        {/* Decorative Bottom Border */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
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
