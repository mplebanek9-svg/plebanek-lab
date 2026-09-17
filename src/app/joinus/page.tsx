import Link from "next/link"

export default function JoinUsPage() {
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

      {/* OPEN POSITIONS */}
      <section className="px-10 pt-16 pb-20">

        <div className="max-w-6xl mx-auto">

          {/* SECTION HEADER */}
          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#18453B]">
              Join Us
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight">
              Open Positions
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              The Plebanek Lab is interested in recruiting
              motivated scientists and trainees who are excited about
              immunology, cancer biology, and
              functional genomics.
            </p>

          </div>

          {/* POSITIONS */}
          <div className="mt-14 grid md:grid-cols-3 gap-8">

            {/* POSTDOCTORAL ASSOCIATES */}
            <div className="border border-gray-200 rounded-2xl p-8">

              <h2 className="text-2xl font-semibold text-[#18453B]">
                Postdoctoral Associates
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                We are always seeking highly motivated postdoctoral
                researchers interested in developing independent
                research programs. Please contact Dr. Plebanek (plebanek@msu.edu) with 
                your CV and a cover letter describing your research interests.
              </p>

            </div>

            {/* GRADUATE STUDENTS */}
            <div className="border border-gray-200 rounded-2xl p-8">

              <h2 className="text-2xl font-semibold text-[#18453B]">
                Graduate Students
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                MSU graduate students interested in immuno-oncology and
                functional genomics are encouraged to reach out
                to Dr. Plebanek discuss potential laboratory rotations.
              </p>

            </div>

            {/* UNDERGRADUATE STUDENTS */}
            <div className="border border-gray-200 rounded-2xl p-8">

              <h2 className="text-2xl font-semibold text-[#18453B]">
                Undergraduate Students
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                Undergraduate students interested in gaining
                research experience in immunology and cancer
                biology are welcome to inquire about opportunities
                within the lab.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}