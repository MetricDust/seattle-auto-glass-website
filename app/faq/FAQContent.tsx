"use client";

import { motion } from "framer-motion";
import { HelpCircle, DollarSign, Wrench, AlertTriangle, Shield, Clock } from "lucide-react";
import dynamic from "next/dynamic";

const GlassHeader = dynamic(() => import("../../components/GlassHeader"), {
    loading: () => <div className="h-16 bg-white" />,
    ssr: false
});

const faqs = [
    {
        question: "How much is a stone chip repair?",
        answer: "Fixing a stone chip typically costs between $60 to $100. This pricing can vary based on the size of the damage, the depth of the chip, and your vehicle's specific make and model. We provide transparent [cost breakdowns](/costs/) to help you understand what you're paying for.",
        icon: DollarSign,
        color: "from-green-500 to-emerald-500"
    },
    {
        question: "Does windshield chip repair work?",
        answer: "Absolutely. A professional repair uses high-grade resin to fill the void, making the chip nearly invisible and, more importantly, restoring the structural integrity of the glass. This prevents the damage from spreading further, which is crucial for modern windshields that contribute to vehicle safety.",
        icon: Shield,
        color: "from-blue-500 to-cyan-500"
    },
    {
        question: "Can I fix a chip in my windshield by myself?",
        answer: "While DIY kits are available for $10-25, they often lack the industrial vacuum tools and specialized resins used by pros. An improper DIY job can leave air bubbles trapped in the glass, making it impossible to perform a professional fix later. Check our [DIY vs Pro advice](/faq/) for more details.",
        icon: Wrench,
        color: "from-purple-500 to-pink-500"
    },
    {
        question: "Is a chip in a windshield a big deal?",
        answer: "Yes, even a tiny nick can compromise the safety of your vehicle. Windshields are designed to support the roof during a rollover and facilitate proper airbag deployment. A small blemish can quickly spider out into a large crack due to temperature changes or road vibration, leading to a much more expensive [replacement](/costs/).",
        icon: AlertTriangle,
        color: "from-red-500 to-orange-500"
    }
];

const additionalInfo = [
    {
        title: "When to Act Fast",
        icon: Clock,
        points: [
            "Temperature changes can turn small chips into big cracks quickly",
            "Road vibrations can cause damage to spread while driving",
            "Moisture can get into chips and freeze, expanding the damage"
        ],
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Professional vs DIY",
        icon: Wrench,
        points: [
            "Professionals use industrial-grade resin that lasts longer",
            "DIY kits may not properly seal the damage",
            "Professional repairs often come with warranties",
            "Improper DIY repair can make the damage irreparable"
        ],
        color: "from-indigo-500 to-purple-500"
    }
];

export default function FAQContent() {
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
                            Frequently Asked
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Questions
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Everything you need to know about windshield chip repair costs, effectiveness, and whether you should tackle it yourself or call in the pros.
                        </p>
                    </motion.div>

                    {/* Main FAQs */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
                            FAQs in Relation to Windshield Chip Repair Cost
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {faqs.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-white/50 hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`w-14 h-14 bg-gradient-to-br ${faq.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                                            <faq.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-slate-600 leading-relaxed pl-18">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
                            Important Considerations
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {additionalInfo.map((info, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                                            <info.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">
                                            {info.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {info.points.map((point, pointIdx) => (
                                            <li key={pointIdx} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-slate-700 leading-relaxed">{point}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Cost Comparison */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="bg-white rounded-3xl p-12 shadow-xl shadow-blue-500/5 border border-white/50">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
                                Cost Comparison: DIY vs Professional
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-red-800 mb-4">DIY Kit</h3>
                                    <div className="text-3xl font-black text-red-800 mb-4">$10-25</div>
                                    <ul className="space-y-2 text-slate-700">
                                        <li>• Temporary fix</li>
                                        <li>• Visible repair marks</li>
                                        <li>• No warranty</li>
                                        <li>• Risk of making damage worse</li>
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-green-800 mb-4">Professional Repair</h3>
                                    <div className="text-3xl font-black text-green-800 mb-4">$60-100</div>
                                    <ul className="space-y-2 text-slate-700">
                                        <li>• Permanent fix</li>
                                        <li>• Nearly invisible repair</li>
                                        <li>• Usually includes warranty</li>
                                        <li>• Prevents further damage</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    );
}
