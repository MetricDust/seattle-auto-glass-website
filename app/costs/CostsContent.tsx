"use client";

import { motion } from "framer-motion";
import { DollarSign, Thermometer, MapPin, TrendingUp } from "lucide-react";
import dynamic from "next/dynamic";

const GlassHeader = dynamic(() => import("../../components/GlassHeader"), {
    loading: () => <div className="h-16 bg-white" />,
    ssr: false
});

const costFactors = [
    {
        icon: DollarSign,
        title: "The Size Matters",
        description: "Fixing a small chip is cheaper than a larger crack; why?",
        details: "Because minor issues can often be filled in quickly, while bigger ones might require more complicated repairs to prevent them from worsening, it's like patching a small hole in your jeans versus mending a big tear."
    },
    {
        icon: TrendingUp,
        title: "Type of Damage Counts Too",
        description: "Not all windshield villains strike equally.",
        details: "Some chips are superficial round dings; others look like stars or bullseyes, with cracks shooting outward. These varying shapes also influence repair costs because some require more complex fixes to restore integrity to the glass."
    },
    {
        icon: MapPin,
        title: "Your Location Plays a Part",
        description: "Suppose you live in LA or New York City.",
        details: "You'll pay more for auto services due to higher operational costs than in smaller towns or rural areas where prices tend to be lower. It's about more than where you lay your head at night; rates can vary between shops even within cities."
    }
];

const seasonalFactors = [
    {
        icon: Thermometer,
        title: "The Impact of Seasons",
        description: "Colder weather has its pros and cons.",
        details: "Auto glass repair shops may be less busy, but cold can quickly turn small chips into big cracks. Take your time with repairs; fixing chips in cold weather can be more challenging and costly.",
        highlight: "Summer brings its drama with soaring demand thanks to road trip season kicking into high gear. More demand often leads to higher prices—simple economics at work."
    },
    {
        icon: MapPin,
        title: "Environmental Elements",
        description: "Local conditions can drive up demand for repairs.",
        details: "If you live where gravel roads are more common or if construction sites dot your daily commute, local conditions can drive up demand for repairs, which may also nudge up costs.",
        highlight: "Salty sea air might give you beachy hair vibes but think twice about what it does to your car. In coastal areas where salt is used on roads, corrosion around chips can make them more complicated (and pricier) to fix."
    }
];

export default function CostsContent() {
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
                            Understanding Windshield
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Chip Repair Costs
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Picture this: you're cruising down the highway, tunes up, and out of nowhere – whack.
                            A rogue pebble leaps from the road and leaves its mark on your windshield.
                        </p>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
                            But before stress sets in about how much it'll cost to fix, let's break down what goes into that price tag.
                        </p>
                    </motion.div>

                    {/* Cost Factors */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">What Affects Repair Costs</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {costFactors.map((factor, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-white/50"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                                        <factor.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{factor.title}</h3>
                                    <p className="text-slate-600 mb-4">{factor.description}</p>
                                    <p className="text-slate-500 leading-relaxed">{factor.details}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Seasonal Considerations */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
                            Seasonal and Environmental Considerations in Pricing
                        </h2>
                        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                            When it comes to windshield chip repair, timing is about more than just your schedule.
                            The season and environment play significant roles in both the urgency of fixing that pesky chip and how much you'll fork out for it.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {seasonalFactors.map((factor, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                                        <factor.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{factor.title}</h3>
                                    <p className="text-slate-600 mb-4">{factor.description}</p>
                                    <p className="text-slate-700 leading-relaxed mb-4">{factor.details}</p>
                                    {factor.highlight && (
                                        <div className="bg-white/70 rounded-2xl p-4">
                                            <p className="text-slate-700 font-medium">{factor.highlight}</p>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Demand Fluctuations */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-12 shadow-xl shadow-blue-500/5 border border-white/50"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">The Real Deal with Fluctuating Demand</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-800 mb-2">Weather Events & Surge Pricing</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Folks tend to ignore their windshields until Mother Nature says hello with hail storms or severe weather events kick things up a notch.
                                        After these episodes, repair shops get swamped fast. This surge pushes prices upward since everyone wants their ride fixed yesterday.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-800 mb-2">Regulatory Changes</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Suppose there have been recent changes, like new laws requiring windshield checks for vehicle inspections before registration renewal.
                                        In that case, it can lead to a rush for services. Providers may then raise their prices to take advantage of sudden influx of customers.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </>
    );
}
