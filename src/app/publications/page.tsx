import Link from "next/link"

export default function PublicationsPage() {
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

      {/* HEADER */}
      <section className="px-10 py-20 border-b border-gray-200 bg-[#F8F8F6]">

        <div className="max-w-5xl mx-auto">

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Publications
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9 max-w-3xl">
            Selected publications and collaborative
            research contributions from the lab.
          </p>
          <p className="mt-6 text-gray-600">

  For a complete list of publications, visit{" "}

  <a
    href="https://pubmed.ncbi.nlm.nih.gov/?term=plebanek+M&sort=date"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#18453B] font-semibold hover:underline"
  >
    PubMed
  </a>

  .

</p>

        </div>

      </section>

      {/* PUBLICATIONS */}
      <section className="px-10 py-20">

        <div className="max-w-5xl mx-auto">

          {/* SELECTED PUBLICATIONS */}
          <div>

            <h2 className="text-3xl font-bold text-[#18453B]">
              Select Publications
            </h2>

            <div className="mt-12 space-y-10">

              <article className="border-b border-gray-200 pb-10">

                <p className="text-sm uppercase tracking-[0.2em] text-[#18453B] font-semibold">
                  Science Immunology · 2024
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  A lactate-SREBP2 signaling axis drives tolerogenic dendritic cell maturation and promotes cancer progression
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  <strong>Plebanek MP</strong>, Xue Y, Nguyen YV, DeVito NC, Wang X, Holtzhausen A, Beasley GM, Theivanthiran B, Hanks BA.
                </p>

                <p className="mt-5 text-gray-600 leading-8 max-w-4xl">
                  Using single-cell transcriptomics and
                  chromatin accessibility profiling,
                  we investigate how inflammatory stress
                  pathways alter dendritic cell function
                  in tumor immunity.
                </p>

                <div className="mt-6 text-sm uppercase tracking-wide">

                 <a
                    href="https://pubmed.ncbi.nlm.nih.gov/38728412/"
                     target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18453B] font-semibold hover:underline"
  >
                     PubMed
                </a>

                </div>

              </article>

              <article className="border-b border-gray-200 pb-10">

                <p className="text-sm uppercase tracking-[0.2em] text-[#18453B] font-semibold">
                  International Immunology · 2020
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  Role of dendritic cell metabolic reprogramming in tumor immune evasion
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  <strong>Plebanek MP</strong>, Sturdivant M, DeVito NC, Hanks BA
                </p>

                <p className="mt-5 text-gray-600 leading-8 max-w-4xl">
                  Defining transcriptional and epigenetic
                  programs regulating myeloid cell
                  differentiation in inflammatory disease.
                </p>

                <div className="mt-6 text-sm uppercase tracking-wide">

                  <a
                      href="https://pubmed.ncbi.nlm.nih.gov/32449776/"
                       target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18453B] font-semibold hover:underline"
  >
                    PubMed
                     </a>

                </div>

              </article>

              <article className="border-b border-gray-200 pb-10">

                <p className="text-sm uppercase tracking-[0.2em] text-[#18453B] font-semibold">
                  Molecular Cancer Therapeutics · 2018
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  Scavenger Receptor Type B1 and Lipoprotein Nanoparticle Inhibit Myeloid-Derived Suppressor Cells
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                    <strong>Plebanek MP</strong>, Bhaumik D, Bryce PJ, Thaxton CS
                </p>

                <p className="mt-5 text-gray-600 leading-8 max-w-4xl">
                  Using single-cell transcriptomics and
                  chromatin accessibility profiling,
                  we investigate how inflammatory stress
                  pathways alter dendritic cell function
                  in tumor immunity.
                </p>

                <div className="mt-6 text-sm uppercase tracking-wide">

                 <a
                    href="https://pubmed.ncbi.nlm.nih.gov/29282300/"
                     target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18453B] font-semibold hover:underline"
  >
                     PubMed
                </a>

                </div>

              </article>

              <article className="border-b border-gray-200 pb-10">

                <p className="text-sm uppercase tracking-[0.2em] text-[#18453B] font-semibold">
                  Nature Communications · 2017
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                   
                    Pre-metastatic cancer exosomes induce immune surveillance by patrolling monocytes at the metastatic niche
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  <strong>Plebanek MP</strong>, Angeloni NL, Vinokour E, Li J, Henkin A, Martinez-Marin D, Filleur S, Bhowmick R, Henkin J, Miller SD, Ifergan I, Lee Y, Osman I, Thaxton CS, Volpert OV
                </p>

                <p className="mt-5 text-gray-600 leading-8 max-w-4xl">
                  Defining transcriptional and epigenetic
                  programs regulating myeloid cell
                  differentiation in inflammatory disease.
                </p>

                <div className="mt-6 text-sm uppercase tracking-wide">

                  <a
                      href="https://pubmed.ncbi.nlm.nih.gov/29105655/"
                       target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18453B] font-semibold hover:underline"
  >
                    PubMed
                     </a>

                </div>

              </article>

              <article className="border-b border-gray-200 pb-10">

                <p className="text-sm uppercase tracking-[0.2em] text-[#18453B] font-semibold">
                  Scientific Reports · 2015
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                   
                    Nanoparticle Targeting and Cholesterol Flux Through Scavenger Receptor Type B-1 Inhibits Cellular Exosome Uptake
                 </h3>

                <p className="mt-4 text-gray-600 leading-7">
                    <strong>Plebanek MP</strong>, Mutharasan RK, Volpert O, Matov A, Gatlin JC, Thaxton CS
                </p>

                <p className="mt-5 text-gray-600 leading-8 max-w-4xl">
                  Defining transcriptional and epigenetic
                  programs regulating myeloid cell
                  differentiation in inflammatory disease.
                </p>

                <div className="mt-6 text-sm uppercase tracking-wide">

                  <a
                      href="https://pubmed.ncbi.nlm.nih.gov/26511855/"
                       target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18453B] font-semibold hover:underline"
  >
                    PubMed
                     </a>

                </div>

              </article>

            </div>

          </div>

          {/* ADDITIONAL PUBLICATIONS */}
          <div className="mt-24">

            <h2 className="text-3xl font-bold text-[#18453B]">
              Additional Publications
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl">
              Collaborative and co-authored research contributions.
            </p>

            <div className="mt-12 space-y-8">

              <article className="border-b border-gray-200 pb-8">

                <p className="text-sm uppercase tracking-[0.2em] text-[#18453B] font-semibold">
                  Cancer Research · 2025
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-tight">
                   
                GLI2 Facilitates Tumor Immune Evasion and Immunotherapeutic Resistance by Coordinating WNT and Prostaglandin Signaling
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  DeVito NC, Nguyen YV, Sturdivant M, <strong>Plebanek MP</strong>, Villarreal KA, Yarla N, Jain V, Aksu M, Beasley GM, Theivanthiran B, Hanks BA
                </p>

                <div className="mt-5 text-sm uppercase tracking-wide">

                   <a
                      href="https://pubmed.ncbi.nlm.nih.gov/39970333/"
                       target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18453B] font-semibold hover:underline"
  >
                    PubMed
                     </a>

                </div>

              </article>

              <article className="border-b border-gray-200 pb-8">

                <p className="text-sm uppercase tracking-[0.2em] text-[#18453B] font-semibold">
                  Science Translational Medicine· 2022
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-tight">
                  Tumor-intrinsic NLRP3-HSP70-TLR4 axis drives premetastatic niche development and hyperprogression during anti-PD-1 immunotherapy
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Theivanthiran B, Yarla N, Haykal T, Nguyen YV, Cao L, Ferreira M, Holtzhausen A, Al-Rohil R, Salama AKS, Beasley GM,  <strong>Plebanek MP</strong>, DeVito NC, Hanks BA
                </p>

                <div className="mt-5 text-sm uppercase tracking-wide">

                  <a
                      href="https://pubmed.ncbi.nlm.nih.gov/36417489/"
                       target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18453B] font-semibold hover:underline"
  >
                    PubMed
                     </a>

                </div>

              </article>

              <article className="border-b border-gray-200 pb-8">

                <p className="text-sm uppercase tracking-[0.2em] text-[#18453B] font-semibold">
                  Cell Reports · 2021
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-tight">
                   
                Pharmacological Wnt ligand inhibition overcomes key tumor-mediated resistance pathways to anti-PD-1 immunotherapy
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  DeVito NC, Sturdivant M, Thievanthiran B, Xiao C, <strong>Plebanek MP</strong>, Salama AKS, Beasley GM, Holtzhausen A, Novotny-Diermayr V, Strickler JH, Hanks BA
                </p>

                <div className="mt-5 text-sm uppercase tracking-wide">

                  <a
                      href="https://pubmed.ncbi.nlm.nih.gov/33951424/"
                       target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18453B] font-semibold hover:underline"
  >
                    PubMed
                     </a>

                </div>

              </article>

              <article className="border-b border-gray-200 pb-8">

                <p className="text-sm uppercase tracking-[0.2em] text-[#18453B] font-semibold">
                  Journal of Extracellular Vesicles · 2020
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-tight">
                   
                Prostate cancer extracellular vesicles mediate intercellular communication with bone marrow cells and promote metastasis in a cholesterol-dependent manner       
                         </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Henrich SE, McMahon KM, <strong>Plebanek MP</strong>, Calvert AE, Feliciano TJ, Parrish S, Tavora F, Mega A, De Souza A, Carneiro BA, Thaxton CS
                </p>

                <div className="mt-5 text-sm uppercase tracking-wide">

                  <a
                      href="https://pubmed.ncbi.nlm.nih.gov/33408816/"
                       target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18453B] font-semibold hover:underline"
  >
                    PubMed
                     </a>

                </div>

              </article>

              <article className="border-b border-gray-200 pb-8">

                <p className="text-sm uppercase tracking-[0.2em] text-[#18453B] font-semibold">
                  Journal of Clinical Investigation · 2020
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-tight">
                   
                 A tumor-intrinsic PD-L1/NLRP3 inflammasome signaling pathway drives resistance to anti-PD-1 immunotherapy   
                         </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Theivanthiran B, Evans KS, DeVito NC, <strong>Plebanek MP</strong>, Sturdivant M, Wachsmuth LP, Salama AK, Kang Y, Hsu D, Balko JM, Johnson DB, Starr M, Nixon AB, Holtzhausen A, Hanks BA
                </p>

                <div className="mt-5 text-sm uppercase tracking-wide">

                  <a
                      href="https://pubmed.ncbi.nlm.nih.gov/32017708/"
                       target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18453B] font-semibold hover:underline"
  >
                    PubMed
                     </a>

                </div>

              </article>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

