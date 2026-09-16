import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 bg-[#18453B] text-white">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-semibold tracking-tight"
        >
          <img
            src="/images/DC_symbol.png"
            alt="Plebanek Lab Logo"
            className="w-8 h-8 object-contain"
          />
          Plebanek Lab
        </Link>

        <div className="flex gap-8 text-sm uppercase tracking-[0.15em]">
          <Link href="/team" className="hover:text-gray-200 transition-colors">Team</Link>
          <Link href="/publications" className="hover:text-gray-200 transition-colors">Publications</Link>
          <Link href="/news" className="hover:text-gray-200 transition-colors">News</Link>
          <Link href="/joinus" className="hover:text-gray-200 transition-colors">Join Us</Link>
          <Link href="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-10 py-14 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="mt-8 text-6xl font-bold leading-tight tracking-tight">
            Understanding how myeloid cells regulate immunity, inflammation, and disease.
          </h2>
          <p className="mt-10 text-xl text-gray-600 leading-9 max-w-4xl">
            The Plebanek Lab studies dendritic cells and macrophages in cancer and inflammatory disease using functional genomics, and systems biology approaches.
          </p>
        </div>
      </section>

      {/* RESEARCH THEMES */}
      <section className="px-10 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-[#18453B]">
            Research Focus
          </h3>

          <div className="mt-16 grid md:grid-cols-3 gap-20">
            {/* DENDRITIC CELL BIOLOGY */}
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold">
                Dendritic Cell Biology
              </h4>
              <p className="mt-4 text-gray-600 leading-8">
                Investigating mechanisms that regulate dendritic cell functionality during cancer development and progression.
              </p>
              <img
                src="/images/Project_1.png"
                alt="Dendritic cell biology"
                className="mt-6 w-full h-[250px]"
              />
            </div>

            {/* MYELOID CELL REPROGRAMMING */}
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold">
                Myeloid Cell Reprogramming
              </h4>
              <p className="mt-4 text-gray-600 leading-8">
                Understanding how cellular stress programs alter immune cell differentiation and downstream functionality.
              </p>
              <img
                src="/images/Project_2.png"
                alt="Myeloid cell reprogramming"
                className="mt-7 w-full h-[260px]"
              />
            </div>

            {/* FUNCTIONAL GENOMICS */}
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold">
                Functional Genomics
              </h4>
              <p className="mt-4 text-gray-600 leading-8">
                Developing novel methods to dissect tumor immunology and myeloid cell biology using CRISPR screening approaches.
              </p>
              <img
                src="/images/Project_3.png"
                alt="Project 3"
                className="mt-7 w-full h-[260px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH OVERVIEW TITLE */}
      <section className="px-10 pt-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-[#18453B]">
            Research Overview
          </h3>
        </div>
      </section>

      {/* RESEARCH OVERVIEW IMAGE - Contained within a narrower max-w-4xl wrapper */}
      <section className="px-10 pb-20">
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/Research Plan Figure.png"
            alt="Plebanek Lab research plan"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </section>

    </main>
  )
}