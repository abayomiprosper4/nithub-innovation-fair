"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import confetti from "canvas-confetti";
import PrimaryBtn from "@/Components/PrimaryBtn";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function ExhibitorPage() {
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

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    category: "",
    description: "",
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
      const response = await fetch("/api/exhibitor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        handleConfetti();
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          category: "",
          description: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
                Registration Confirmed!
              </h3>
              <p className="text-gray-500 mb-8">
                We've received your exhibitor application. Our team will review
                it and get back to you shortly.
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

      <main className="min-h-screen pt-30 bg-linear-to-br from-[#FFFFFF] via-[#F2F2F7] to-[#F2F2F7] py-7 flex items-center justify-center px-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-semibold text-gray-900">
              Exhibit at the Innovation Fair
            </h1>
            <p className="mt-3 text-gray-600 max-w-md">
              Showcase your startup, product, or solution to a high-quality
              innovation audience.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Startup/Company Name
                </label>
                <input
                  required
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Startup/Company name"
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Contact Person
                </label>
                <input
                  required
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Provide a Name"
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g, johndoe@gmail.com"
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Product Category
                </label>
                <input
                  required
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g Saas, Fintech, Healthtech, E-commerce, etc..."
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Brief Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us a little about your startup/company/product"
                  rows={4}
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A] resize-none"
                />
              </div>

              <div>
                <PrimaryBtn
                  label={loading ? "Registering..." : "Register"}
                  href={undefined}
                  type="submit"
                  disabled={loading}
                />
              </div>
            </form>
          </motion.div>

          <motion.div 
          className="hidden lg:flex justify-center lg:justify-end"
          variants={fadeInRight}
          initial="hidden"
          animate="visible">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dw3ublxm7/image/upload/fl_preserve_transparency/v1771597462/flash_z9vzcp.jpg?_s=public-apps"
                alt="flash"
              />
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
