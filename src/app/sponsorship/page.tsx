"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";
import PrimaryBtn from "@/Components/PrimaryBtn";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

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
    <main className="w-full bg-white font-sans selection:bg-[#62CF3A]/30">
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

      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-20">
        <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl lg:text-5xl font-bold text-[#0F172A] leading-[1.1] tracking-tight">
              Why Sponsor This Event?
            </h1>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-lg">
              Partnering with the NITHUB 5th Year Anniversary & Innovation Fair
              offers sponsors:
            </p>
            <ul className="mt-8 space-y-4">
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
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full" />{" "}
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <PrimaryBtn
                label="Download Sponsorship Deck"
                href="/Documents/sponsorship-deck.pdf"
                download="Sponsorship-Deck.pdf"
              />
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="/Images/WhatsApp Image 2026-01-21 at 12.18.28(1).jpeg"
                alt="Sponsors"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-30 -left-6 lg:left-25  bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-50 w-[90%] sm:w-100 z-20"
            >
              <div className="space-y-4">
                {[
                  ["Platinum Sponsor", "₦10,000,000"],
                  ["Diamond Sponsor", "₦7,000,000"],
                  ["Gold Sponsor", "₦5,000,000"],
                  ["Silver Sponsor", "₦3,000,000"],
                  ["Prize Money Sponsor", "₦10,000,000 Pool"],
                  ["Deal Room Sponsor", "$100k–$1M Capital"],
                  ["In-Kind Partners", "Custom"],
                ].map(([name, price], i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#62CF3A] text-xs">✦</span>
                      <span className="text-sm font-bold text-gray-800">
                        {name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 font-medium">
                      — {price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Partner With Nithub
            </h2>
            <p className="mt-6 text-lg text-gray-600 mb-12">
              Join the movement shaping Nigeria's tech future.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
              <input
                required
                placeholder="Full name"
                className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                required
                type="phone"
                placeholder="Phone"
                className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <input
                required
                placeholder="Organization"
                className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all"
                value={formData.organization}
                onChange={(e) =>
                  setFormData({ ...formData, organization: e.target.value })
                }
              />
              <select
                required
                className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all text-gray-500 bg-white"
                value={formData.interest}
                onChange={(e) =>
                  setFormData({ ...formData, interest: e.target.value })
                }
              >
                <option value="">Select sponsorship interest</option>
                <option value="Platinum Sponsor">Platinum Sponsor</option>
                <option value="Diamond Sponsor">Diamond Sponsor</option>
                <option value="Gold Sponsor">Gold Sponsor</option>
                <option value="Silver Sponsor">Silver Sponsor</option>
                <option value="Prize Money Sponsor">Prize Money Sponsor</option>
                <option value="Deal Room Sponsor">Deal Room Sponsor</option>
                <option value="In-Kind Partner">In-Kind Partner</option>
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#62CF3A] outline-none transition-all"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <div className="pt-4">
                <PrimaryBtn
                  label={loading ? "Processing..." : "Register"}
                  type="submit"
                  disabled={loading}
                />
              </div>
            </form>
          </div>
          <div className="hidden lg:flex items-center justify-end">
            <Image
              src="/Images/Card.svg"
              alt="Illustration"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
