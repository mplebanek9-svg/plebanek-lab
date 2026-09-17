import Link from "next/link"

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-between">
      <div>
       {/* NAVBAR */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-6 md:px-10 py-4 md:py-6 bg-[#18453B] text-white gap-4 sm:gap-0">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-tight"
        >
          <img
            src="/images/DC_symbol.png"
            alt="Plebanek Lab Logo"
            className="w-8 h-8 object-contain"
          />
          Plebanek Lab
        </Link>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm uppercase tracking-[0.15em]">
          <Link href="/team" className="hover:text-gray-200 transition-colors">Team</Link>
          <Link href="/publications" className="hover:text-gray-200 transition-colors">Publications</Link>
          <Link href="/news" className="hover:text-gray-200 transition-colors">News</Link>
          <Link href="/joinus" className="hover:text-gray-200 transition-colors">Join Us</Link>
          <Link href="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
        </div>
      </nav>

        {/* NEWS CONTENT SECTION */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold tracking-wide mb-12 pb-4 border-b border-gray-200 text-black">
            Lab News
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* News Image */}
            <div className="w-full md:w-[280px] shrink-0">
              <img
                src="/images/Plebanek_Lab.png"
                alt="First day of the Plebanek Lab"
                className="w-full max-w-[280px] h-auto rounded shadow-sm object-cover"
              />
            </div>

            {/* News Text */}
            <div className="flex-1 flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#18453B] bg-gray-100 px-2.5 py-1 rounded w-fit mb-3">
                09/01/2026
              </span>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                First day of the Plebanek Lab
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Today marks the official opening of the Plebanek Lab at Michigan State University! 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 px-10 text-sm text-gray-600 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Plebanek Lab. All rights reserved.</p>
        <p>Michigan State University</p>
      </footer>
    </main>
  )
}