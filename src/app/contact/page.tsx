import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">

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

      {/* CAMPUS BANNER */}
      <section
        className="h-[280px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/MSU_campus_2.jpg')",
        }}
      />

      {/* CONTACT SECTION */}
      <section className="px-10 pt-10 pb-0">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* MAP */}
          <div className="mt-6 md:mt-10">
            <iframe
              src="https://www.google.com/maps?q=Biomedical+and+Physical+Sciences+Building+Michigan+State+University&output=embed"
              width="100%"
              height="350"
              loading="lazy"
              className="rounded-2xl border border-gray-200"
            />
          </div>

          {/* CONTACT INFO */}
          <div>

            {/* HEADER */}

            <h1 className="mt-5 text-5xl font-bold tracking-tight ">
              Plebanek Lab
            </h1>

            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#18453B]">
              Department of Medicine<br />
              Department of Physiology<br />
              Michigan State University
            </p>

            {/* INFO GRID */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-lg">

              {/* ADDRESS */}
              <div>
                <p className="font-semibold text-black">Address</p>
                <p className="mt-1 leading-6">
                  567 Wilson Rd,<br />
                  Biomedical and Physical Sciences Building<br />
                  Michigan State University<br />
                  East Lansing, MI 48824
                </p>
              </div>

              {/* LAB */}
              <div>
                <p className="font-semibold text-black">Lab</p>
                <p className="mt-1 leading-6">
                  BPS Building<br />
                  Room 2120
                </p>
              </div>

              {/* EMAIL */}
              <div>
                <p className="font-semibold text-black">Email</p>
                <p className="mt-1">plebanek@msu.edu</p>
              </div>

              {/* OFFICE */}
              <div>
                <p className="font-semibold text-black">Office</p>
                <p className="mt-1 leading-6">
                  BPS Building<br />
                  Room 2178
                </p>
              </div>

            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-10 flex gap-6 items-center">

              {/* LinkedIn */}
              <a
                href="www.linkedin.com/in/michael-plebanek-phd-b355b916"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#18453B] hover:opacity-70 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
                LinkedIn
              </a>

              {/* Bluesky */}
              <a
                href="https://bsky.app/profile/plebanek-lab.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#18453B] hover:opacity-70 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/bluesky.svg"
                  alt="Bluesky"
                  className="w-5 h-5"
                />
                Bluesky
              </a>

            </div>

          </div>
        </div>
      </section>

    </main>
  )
}