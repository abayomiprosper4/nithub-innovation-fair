import Image from "next/image";
import PrimaryBtn from "@/Components/PrimaryBtn";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function SponsorshipPage() {
  return (
    <section className="w-full bg-gray-50">
      <Navbar />
      <div className="mx-auto pt-15 max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Why Sponsor This Event?
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-xl">
              Partnering with the NITHUB 5th Year Anniversary &amp; Innovation
              Fair offers sponsors:
            </p>

            <ul className="mt-6 space-y-4 text-gray-800 text-lg list-disc pl-6">
              <li>Access to emerging talent and startups</li>
              <li>Early visibility into innovation and deal-flow</li>
              <li>
                Strong brand alignment with youth and technology
              </li>
              <li>
                Long-term ecosystem partnership with NITHUB
              </li>
            </ul>

            <div className="mt-10 inline-flex items-center rounded-full px-6 py-3 text-white font-semibold transition">
              <PrimaryBtn label={"Download Sponsorship Deck"} href={""} />
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/Images/Image card4.png"
                alt="NITHUB Innovation Fair"
                width={700}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-40 left-6 right-6 mx-15 bg-white rounded-xl shadow-2xl p-6">
              <ul className="space-y-3 text-gray-800 text-base">
                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Platinum Sponsor</span> –<span className="font-bold"> ₦10,000,000</span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Diamond Sponsor</span> –<span className="font-bold"> ₦7,000,000</span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Gold Sponsor</span> –<span className="font-bold"> ₦5,000,000</span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Silver Sponsor</span> –<span className="font-bold"> ₦3,000,000</span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Prize Money Sponsor</span> –<span className="font-bold"> ₦10,000,000 Prize Pool</span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Deal Room Sponsor</span> –<span className="font-bold"> $100k–$1M Investment</span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Exhibitors &amp; In-Kind Partners</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full bg-gray-50 pt-64">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-gray-900">
          Partner With Nithub
        </h2>

        <p className="mt-4 text-lg text-gray-700 max-w-xl">
          Tell us about your organization and how you would like to partner
          with the NITHUB 5th Year Anniversary &amp; Innovation Fair.
        </p>

        <form className="mt-10 space-y-5 max-w-xl">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Full name
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-[#62CF3A] focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 focus:border-[#62CF3A] focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Phone number
            </label>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 focus:border-[#62CF3A]focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Organization
            </label>
            <input
              type="text"
              placeholder="Organization"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 focus:border-[#62CF3A]focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Sponsorship Interest
            </label>
            <select
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 focus:border-[#62CF3A] focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              <option>Select an option</option>
              <option>Platinum Sponsor</option>
              <option>Diamond Sponsor</option>
              <option>Gold Sponsor</option>
              <option>Silver Sponsor</option>
              <option>Prize Money Sponsor</option>
              <option>Deal Room Sponsor</option>
              <option>Exhibitor / In-kind Partner</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="inline-flex rounded-full bg-green-500 px-6 py-2.5 text-white font-semibold hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
      </div>

      <div className="flex justify-center lg:justify-end">
        <Image
          src="/Images/Card.svg"
          alt="Coins Illustration"
          width={700}
          height={700}
          className="object-contain"
          priority
        />
      </div>
    </div>
  </div>
</div>
<Footer />
    </section>
  );
}
