import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import PrimaryBtn from "@/Components/PrimaryBtn";

const InterestPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight">
                Register Your Interest
              </h1>
              <p className="text-xl text-[#374151] leading-relaxed max-w-md">
                Be the first to receive updates on speakers, programme
                announcements, and registration details.
              </p>
            </div>

            <form className="space-y-5 max-w-lg">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#374151] ml-1">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6EE7B7] transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#374151] ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6EE7B7] transition-all"
                />
              </div>

              {/* Organization */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#374151] ml-1">
                  Organization/Institution
                </label>
                <input
                  type="text"
                  placeholder="Organization name"
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6EE7B7] transition-all"
                />
              </div>

              {/* Interest Type Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#374151] ml-1">
                  Interest Type
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6EE7B7] appearance-none transition-all">
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

              {/* Submit Button */}
              <div>
                <PrimaryBtn label="Submit" href="#" />
              </div>
            </form>
          </div>

          {/* Right Column: Stylized Graphic */}
          <div className="hidden md:flex justify-center items-center relative">
            {/* Subtle Glow Background */}
            <div className="absolute w-100 h-100 bg-[#63D449]/10 rounded-full blur-[80px]" />

            <div className="relative">
              <img
                src="/Images/Card2.svg"
                alt="Register Interest Graphic"
                className="w-80 md:w-96 lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterestPage;
