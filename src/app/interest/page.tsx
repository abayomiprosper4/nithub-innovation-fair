"use client";

import { useState } from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import PrimaryBtn from "@/Components/PrimaryBtn";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} satisfies Variants;

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const InterestPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interestType: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", organization: "", interestType: "" });
    } catch (err: any) {
      setError(err.message || "Oops, Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-linear-to-br from-[#FFFFFF] via-[#F2F2F7] to-[#FFFFFF]">
      <Navbar />
      <div className="min-h-screen pb-20 flex items-center justify-center">
        <div className="mt-30">
          <div className="max-w-7xl w-full grid md:grid-cols-2 items-center">
            <motion.div
              className="space-y-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl md:text-center lg:text-left sm:text-center font-bold text-[#111827] tracking-tight">
                  Register Your Interest
                </h1>
                <p className="text-2xl text-[#374151] text-justify md:text-center lg:text-left sm:text-center leading-relaxed w-xl">
                  Be the first to receive updates on speakers, programme
                  announcements, and registration details.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#374151] ml-1">
                    Full name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Full name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-[#E5E7EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#62CF3A] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#374151] ml-1">
                    Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-[#E5E7EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#62CF3A] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#374151] ml-1">
                    Organization/Institution
                  </label>
                  <input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-[#E5E7EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#62CF3A] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#374151] ml-1">
                    Interest Type
                  </label>
                  <div className="relative">
                    <select
                      name="interestType"
                      value={formData.interestType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-[#E5E7EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#62CF3A] appearance-none transition-all"
                    >
                      <option value="">Select interest type</option>
                      <option value="attendee">Attendee</option>
                      <option value="speaker">Speaker</option>
                      <option value="sponsor">Sponsor</option>
                    </select>

                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {success && (
                  <p className="text-green-600 text-sm">
                    Thanks! We'll keep you updated.
                  </p>
                )}
                {error && <p className="text-red-600 text-sm">{error}</p>}

                <div>
                  <PrimaryBtn
                    label={loading ? "Sending..." : "Submit"}
                    type="submit"
                    disabled={loading}
                  />
                </div>
              </form>
            </motion.div>

            <motion.div
              className="hidden md:flex justify-center items-center relative"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
            >
              <div className="absolute w-100 h-100 bg-[#63D449]/10 rounded-full blur-[80px]" />
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dw3ublxm7/image/upload/fl_preserve_transparency/v1771597462/Card2_diql2w.jpg?_s=public-apps"
                  alt="Register Interest Graphic"
                  className="w-80 md:w-96 lg:w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterestPage;
