import PrimaryBtn from "@/Components/PrimaryBtn";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function ExhibitorPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-7 flex items-center justify-center px-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900">
              Exhibit at the Innovation Fair
            </h1>
            <p className="mt-3 text-gray-600 max-w-md">
              Showcase your startup, product, or solution to a high-quality
              innovation audience.
            </p>

            <form className="mt-8 space-y-4">
              <label className="block text-sm text-gray-700 mb-1">
                Startup/Company Name
              </label>
              <input
                type="text"
                placeholder="Startup/Company name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A]"
              />

              <label className="block text-sm text-gray-700 mb-1">
                Contact Person
              </label>
              <input
                type="text"
                placeholder="Contact Person"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A]"
              />

              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A]"
              />

              <label className="block text-sm text-gray-700 mb-1">
                Product Category
              </label>
              <input
                type="text"
                placeholder="Product Category"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A]"
              />

              <label className="block text-sm text-gray-700 mb-1">
                Brief Description
              </label>
              <textarea
                placeholder="Brief Description"
                rows={4}
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#62CF3A] resize-none"
              />

              <div>
                <PrimaryBtn label="Register" href="#" />
              </div>
            </form>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src="/Images/flash.png" alt="flash" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
