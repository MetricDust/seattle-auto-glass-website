"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function TopAlertBar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-10 bg-[#002e5d] text-white flex items-center justify-center overflow-hidden shadow-lg shadow-blue-900/20">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="container mx-auto px-4 flex items-center justify-center space-x-4 text-[10px] sm:text-xs md:text-sm font-black tracking-widest uppercase"
            >
                <div className="flex items-center space-x-2">
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_8px_rgba(147,197,253,0.8)]"
                    />
                    <span className="hidden xs:inline">Call/Text Us:</span>
                    <span className="xs:hidden">Call/Text Us:</span>
                </div>
                <a
                    href="tel:206-886-6240"
                    className="flex items-center hover:scale-105 transition-transform group"
                >
                    <Phone className="w-3 h-3 mr-2 group-hover:rotate-12 transition-transform" />
                    <span className="underline underline-offset-4 decoration-blue-400 group-hover:decoration-white transition-colors">206-886-6240</span>
                </a>
            </motion.div>
        </div>
    );
}
