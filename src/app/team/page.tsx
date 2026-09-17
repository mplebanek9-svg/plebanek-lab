import Link from "next/link"

export default function TeamPage() {
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

        {/* TEAM CONTENT SECTION */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold tracking-wide mb-12 pb-4 border-b border-gray-200 text-black">
            Meet the Plebanek Lab
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8 mb-20">
            {/* PI Photo */}
            <div className="w-full md:w-[260px] shrink-0">
              <img
                src="/images/MPP_headshot.png"
                alt="Michael P. Plebanek, Ph.D."
                className="w-full max-w-[260px] h-auto rounded shadow-sm object-cover"
              />
            </div>

            {/* PI Info */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Michael P. Plebanek, Ph.D.
              </h3>
              <p className="text-base font-medium text-gray-700 mb-1">
                Principal Investigator / Assistant Professor
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Department of Medicine
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Department of Physiology
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Michigan State University
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Postdoc: Duke University / University of North Carolina
              </p>
              <p className="text-sm text-gray-600 mb-5">
                Grad School: Northwestern University
              </p>

              <div className="border-t border-gray-100 pt-3 mt-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                  Outside the Lab
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Michael loves cooking (especially pasta), playing instruments, and reading science fiction novels.
                </p>
              </div>
            </div>
          </div>

          {/* JOIN US SECTION */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-6 pb-4 border-b border-gray-200 text-[#18453B]">
              Join Us
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              We are always looking for passionate and curious researchers to join the team! 
            </p>
            <Link
              href="/joinus"
              className="inline-block bg-[#18453B] text-white text-sm font-medium uppercase tracking-wider px-6 py-3 rounded hover:bg-[#12332b] transition-colors"
            >
              Learn More About Open Positions
            </Link>
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