import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#18453B] text-white">

      <Link
        href="/"
        className="text-2xl font-semibold tracking-tight"
      >
        Plebanek Lab
      </Link>

      <div className="flex gap-8 text-sm uppercase tracking-[0.15em]">

        <Link
          href="/team"
          className="hover:text-gray-200 transition-colors"
        >
          Team
        </Link>

        <Link
          href="/publications"
          className="hover:text-gray-200 transition-colors"
        >
          Publications
        </Link>

        <Link
          href="/news"
          className="hover:text-gray-200 transition-colors"
        >
          News
        </Link>

        <Link
          href="/joinus"
          className="hover:text-gray-200 transition-colors"
        >
          Join Us
        </Link>

        <Link
          href="/contact"
          className="hover:text-gray-200 transition-colors"
        >
          Contact
        </Link>

      </div>

    </nav>
  )
}