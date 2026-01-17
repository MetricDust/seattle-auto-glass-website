"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Phone, CheckCircle, AlertCircle, DollarSign } from "lucide-react";
import dynamic from "next/dynamic";

const GlassHeader = dynamic(() => import("../../components/GlassHeader"), {
  loading: () => <div className="h-16 bg-white" />,
  ssr: false
});

const insuranceSteps = [
  {
    icon: Shield,
    title: "The Lowdown on Coverage and Deductibles",
    description: "First, be aware that comprehensive insurance often covers windshield repairs.",
    details: "However, whether you'll have to pay out-of-pocket depends on your deductible. If auto glass repair cost is less than your deductible, you pay. If it's more, insurance covers it.",
    highlight: "To make things even more interesting—some states have zero-deductible policies for windshield damage because clear vision equals safer driving. So yeah, geography matters when we're talking glass care."
  },
  {
    icon: FileText,
    title: "Navigating Claims Without Cracks in Your Sanity",
    description: "Making a claim should be as smooth as freshly installed auto glass—not frustrating enough to cause another chip.",
    details: "Start by contacting your insurer; they usually have an online claims process that's pretty user-friendly or an app that guides you through step-by-step, like a GPS, but for paperwork.",
    requirements: "You'll want proof of what happened (photos are golden), details about when and where (they love specifics), and possibly which reputable shop will do the work—more on why 'reputable' is critical in a sec."
  },
  {
    icon: CheckCircle,
    title: "Finding Repair Shops Through Your Insurer",
    description: "Here's a good tip: contact your insurance company first.",
    details: "They often work with reputable auto glass services that offer fair prices. In some cases, they may even waive part or all of your deductible, thanks to state regulations.",
    warning: "Remember, though—cheaper isn't always better. Just because someone offers low prices doesn't mean their resin knows its job any better."
  }
];

export default function InsurancePage() {
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
            Insurance Coverage for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Windshield Repairs
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            When you hear the sudden 'ping' of a rock hitting your windshield, it's not just an annoyance—it's a call to action. 
            But before you spend cash on repairs, let's talk about how insurance might cover those pesky chips.
          </p>
          <div className="mt-8 bg-blue-100 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-blue-800 font-medium">
              Don't worry, with us at Seattle Auto Glass we communicate with your insurance provider.
            </p>
          </div>
        </motion.div>

        {/* Insurance Steps */}
        <div className="space-y-12 mb-20">
          {insuranceSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {step.details}
                  </p>
                  
                  {step.highlight && (
                    <div className="bg-purple-50 rounded-2xl p-6 mb-6">
                      <p className="text-blue-800 leading-relaxed">
                        {step.highlight}
                      </p>
                    </div>
                  )}

                  {step.requirements && (
                    <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                      <p className="text-blue-800 leading-relaxed">
                        {step.requirements}
                      </p>
                    </div>
                  )}

                  {step.warning && (
                    <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                        <p className="text-amber-800 leading-relaxed">
                          {step.warning}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl shadow-blue-500/5 border border-white/50">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              How to File Your Insurance Claim
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">1. Contact Insurer</h3>
                <p className="text-sm text-slate-600">Call or use their app to start the claim process</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">2. Document Damage</h3>
                <p className="text-sm text-slate-600">Take photos and note when/where it happened</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">3. Choose Shop</h3>
                <p className="text-sm text-slate-600">Select an approved repair shop or use insurer's recommendation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">4. Get Repaired</h3>
                <p className="text-sm text-slate-600">Get your windshield fixed with minimal out-of-pocket cost</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
    </>
  );
}
