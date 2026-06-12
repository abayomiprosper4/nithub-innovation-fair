"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";
import PrimaryBtn from "@/Components/PrimaryBtn";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { IMAGES } from "@/utils/assets";

export default function SponsorshipPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 200,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sponsorship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        handleConfetti();
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          interest: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Unknown error occurred"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Added overflow-x-hidden to prevent stray elements from causing horizontal scroll
    <main className="w-full bg-white font-sans selection:bg-[#62CF3A]/30 overflow-x-hidden">
      <Navbar />

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-sm w-full text-center border border-gray-100"
            >
              <div className="w-20 h-20 bg-green-50 text-[#62CF3A] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Interest Received!
              </h3>
              <p className="text-gray-500 mb-8">
                Thank you for partnering with NITHUB. Our team will reach out
                shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="w-full py-4 bg-[#62CF3A] text-white rounded-xl font-bold hover:brightness-110 transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold text-[#0F172A] leading-[1.1] tracking-tight">
              Why Sponsor This Event?
            </h1>
            <p className="mt-8 text-lg font-semibold text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Partnering with the NITHUB 5th Year Anniversary & Innovation Fair
              offers sponsors:
            </p>
            <ul className="mt-8 font-normal space-y-4 inline-block text-left">
              {[
                "Access to emerging talent and startups",
                "Early visibility into innovation and deal-flow",
                "Strong brand alignment with youth and technology",
                "Long-term ecosystem partnership with NITHUB",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 text-lg"
                >
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12 flex justify-center lg:justify-start">
              <PrimaryBtn
                label="Download Sponsorship Deck"
                href="/Documents/main-pitch-deck.pdf"
                download="Sponsorship-Deck.pdf"
              />
            </div>
          </div>

          <div className="relative pb-24 md:pb-0">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src={IMAGES.collab}
                alt="Sponsors"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* FIXED CARD: Added left-4 and right-4 for mobile constraints */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="
                absolute -bottom-10 left-4 right-4
                md:left-4 md:right-4 md:bottom-6
                lg:-bottom-28 lg:left-24 lg:right-auto
                bg-white p-6 sm:p-8 rounded-3xl
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                border border-gray-50
                max-w-md lg:w-auto z-20
              "
            >
              <div className="space-y-2">
                {[
                  ["Platinum Sponsor", "₦10,000,000"],
                  ["Diamond Sponsor", "₦7,000,000"],
                  ["Gold Sponsor", "₦5,000,000"],
                  ["Silver Sponsor", "₦3,000,000"],
                  ["Exhibition Tier Sponsor", "₦10k Pool"],
                  ["Investor Deal Room Sponsor", "$100k+ Capital"],
                  ["In-Kind Partners", "Custom"],
                ].map(([name, price], i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between group gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#62CF3A] text-xs">✦</span>
                      <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
                        {name}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                      — {price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 mt-28 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-center lg:text-left font-semibold text-gray-900 leading-tight">
              Partner With Nithub
            </h2>
            <div className="mt-8 mb-12 rounded-4xl border border-[#62CF3A]/15 bg-[#f6fff4] p-6 sm:p-7 shadow-sm">
            <p className="text-gray-800 text-base sm:text-lg font-semibold">
              Tell us about your organization and how you would like to partner.
            </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
                <input
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-3 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Email</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-3 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-700">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+234..."
                  className="w-full px-6 py-3 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-700">Organization</label>
                <input
                  required
                  placeholder="Company Name"
                  className="w-full px-6 py-3 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-700">Sponsorship Interest</label>
                <select
                  required
                  className="w-full px-6 py-3 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all text-gray-600 bg-white"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                >
                  <option value="">Select an option</option>
                  <option value="Platinum Sponsor">Platinum Sponsor (₦10,000,000)</option>
                  <option value="Diamond Sponsor">Diamond Sponsor (₦7,000,000)</option>
                  <option value="Gold Sponsor">Gold Sponsor (₦5,000,000)</option>
                  <option value="Silver Sponsor">Silver Sponsor (₦3,000,000)</option>
                  <option value="Prize Money Sponsor">Exhibition Tier (₦10k Pool)</option>
                  <option value="Deal Room Sponsor">Investor Deal Room Sponsor (₦100k + Capital)</option>
                  <option value="In-Kind Partner">In-Kind Sponsor (Custom)</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us more..."
                  className="w-full px-6 py-4 rounded-2xl ring-1 ring-gray-300 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-4">
                <PrimaryBtn
                  label={loading ? "Processing..." : "Register Interest"}
                  type="submit"
                  disabled={loading}
                />
              </div>
            </form>
          </div>

          <div className="hidden lg:flex items-center justify-end">
            <Image
              src="https://res.cloudinary.com/dw3ublxm7/image/upload/fl_preserve_transparency/v1771597460/Card_uhonvp.jpg?_s=public-apps"
              alt="Illustration"
              width={600}
              height={400}
              className="animate-pulse object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}