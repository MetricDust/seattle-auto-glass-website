"use client";

import { motion } from "framer-motion";
import { CheckCircle, MapPin, Shield, Star } from "lucide-react";

const whyChooseUs = [
    {
        title: "Expert Craftsmanship",
        description: "Our technicians are certified professionals with years of experience in high-end auto glass repair and replacement. We treat every vehicle as if it were our own, ensuring a perfect fit and finish every time. From classic cars to the latest electric vehicles with advanced ADAS systems, our team has the expertise to handle it all.",
        icon: Star
    },
    {
        title: "Mobile Convenience",
        description: "We bring the shop to you. Whether you're at home in Queen Anne, at the office in Downtown Seattle, or anywhere in the greater metropolitan area, our fully equipped mobile units can perform most repairs on-site. Save time and avoid the hassle of sitting in a waiting room while we restore your windshield to its original strength.",
        icon: MapPin
    },
    {
        title: "Quality Materials",
        description: "We use only the highest quality industrial-grade resins and OEM-equivalent glass. Our repair materials are designed to match the refractive index of your original windshield, making chips nearly invisible and preventing them from spreading. We stand behind our work with a comprehensive lifetime guarantee against leakage and manufacturing defects.",
        icon: Shield
    },
    {
        title: "Insurance Integration",
        description: "Navigating insurance claims can be complex, but we make it easy. We are a preferred provider for all major insurance carriers, including State Farm, Geico, Progressive, and Allstate. We handle all the paperwork and direct billing, often resulting in a $0 out-of-pocket cost for you if you have comprehensive coverage.",
        icon: CheckCircle
    }
];

const serviceAreas = [
    "Seattle", "Queen Anne", "Capitol Hill", "Mercer Island", "Ballard", "Bellevue", "Kirkland", "Redmond", "Renton", "Kent", "Southcenter", "Shoreline", "Edmonds", "Lynnwood"
];

export default function SEOContentSection() {
    return (
        <section className="py-24 bg-white/30 backdrop-blur-md rounded-[3rem] my-20 border border-white/50 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                        Seattle's Leading Choice for
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            Professional Auto Glass Services
                        </span>
                    </h2>
                    <p className="text-xl text-slate-700 leading-relaxed mb-10">
                        At Seattle Auto Glass LLC, we understand that a chipped or cracked windshield is more than just an eyesore – it's a safety concern. Our mission is to provide the residents of Seattle and the surrounding King County area with premium, reliable, and convenient auto glass solutions that prioritize passenger safety and vehicle structural integrity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    {whyChooseUs.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex gap-6"
                        >
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                                <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 md:p-16 border border-blue-100">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 mb-6">Serving the Greater Seattle Area</h3>
                            <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                Our mobile service units travel throughout the Puget Sound region to provide you with expert on-site repairs. Whether you're in the heart of the city or in the surrounding suburbs, we're just a phone call away. We specialize in Queen Anne windshield chip repair and serve all major business districts for your convenience.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {serviceAreas.map((area) => (
                                    <span key={area} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-600 shadow-sm border border-slate-100">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/mobile-service.png"
                                alt="Mobile Auto Glass Service Seattle"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-3xl font-black text-slate-900 mb-8">Ready to Restore Your Vision?</h3>
                    <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Don't let a small chip become a large crack. Most rock chips can be repaired in under 30 minutes, saving you hundreds of dollars on a full windshield replacement. Contact us today for a free, no-obligation estimate and experience the Seattle Auto Glass LLC difference.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="tel:206-886-1092" className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl shadow-blue-500/25 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
                            Call (206) 886-1092
                        </a>
                        <a href="/contact/" className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95">
                            Get a Free Quote
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-100/40 blur-[100px] rounded-full -z-10"></div>
        </section>
    );
}
