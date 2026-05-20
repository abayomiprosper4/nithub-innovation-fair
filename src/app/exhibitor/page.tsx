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
    countryCode: "+234",
    phone: "",
    category: "",
    description: "",
    sector: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const countryCodes = [
    { code: "+234", label: "NG (+234)" },
    { code: "+1", label: "US/CA (+1)" },
    { code: "+44", label: "UK (+44)" },
    { code: "+91", label: "IN (+91)" },
    { code: "+27", label: "ZA (+27)" },
    { code: "+254", label: "KE (+254)" },
    { code: "+233", label: "GH (+233)" },
  ];

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
          countryCode: "+234",
          phone: "",
          category: "",
          description: "",
          sector: "",
          termsAccepted: false,
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
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
                  Contact Person Full Name
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
                  Organization/Company Name
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
                  Email Address
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
                  Contact Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-32 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A] bg-white cursor-pointer"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="flex-1 rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Product Category
                </label>
                <select
                  required
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A] bg-white cursor-pointer"
                >
                  <option value="" disabled>Select your category</option>
                  <option value="Startup/SME (>5years)">Startup/SME (&gt;5years)</option>
                  <option value="Established Company/Corporation">Established Company/Corporation</option>
                  <option value="Academic/Research Institution">Academic/Research Institution</option>
                  <option value="Non-Profit/Government Agency">Non-Profit/Government Agency</option>
                  <option value="Independent Innovator/Individual">Independent Innovator/Individual</option>
                </select>
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
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Technology Sector
                </label>
                <select
                  required
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A] bg-white cursor-pointer"
                >
                  <option value="" disabled>Select a sector</option>
                  <option value="FinTech/Blockchain">FinTech/Blockchain</option>
                  <option value="HealthTech/BioTech">HealthTech/BioTech</option>
                  <option value="AI/Machine Learning">AI/Machine Learning</option>
                  <option value="Clean Energy/Sustainability">Clean Energy/Sustainability</option>
                  <option value="AgriTech/Food Security">AgriTech/Food Security</option>
                  <option value="EdTech/Learning Solutions">EdTech/Learning Solutions</option>
                  <option value="Robotics/Automation">Robotics/Automation</option>
                  <option value="Other">Other (please specify in the description field)</option>
                </select>
              </div>

              <div className="flex items-start gap-3 mt-4 mb-2">
                <input
                  required
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 shrink-0 text-[#62CF3A] focus:ring-[#62CF3A] border-gray-300 rounded cursor-pointer"
                />
                <label className="text-sm text-gray-600 leading-relaxed">
                  I confirm that all information provided is accurate, and I agree to the Innovation Fair Exhibitor Terms and Conditions (Check website for T&C).
                </label>
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
            animate="visible"
          >
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dw3ublxm7/image/upload/fl_preserve_transparency/v1771597462/flash_z9vzcp.jpg?_s=public-apps"
                alt="flash"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}