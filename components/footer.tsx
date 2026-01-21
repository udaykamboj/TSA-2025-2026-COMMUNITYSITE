import Link from "next/link"

export default function Footer() {
  const columns: string[][] = [
    ["Browse resources", "Submit a resource", "Featured services", "Events", "Latest news"],
    ["Get involved", "Volunteer", "Partner with us", "Donate", "Careers"],
    ["Accessibility", "Privacy policy", "Terms of use", "Website feedback", "Help & FAQ"],
  ]

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="md:w-1/4">
            <h2 className="text-lg font-semibold">More on Community Resource Hub</h2>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {columns.map((col, i) => (
                <ul key={i} className="space-y-2">
                  {col.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-sm font-normal text-gray-200 hover:text-white">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-t border-slate-700 my-6 opacity-60" />

        <div className="text-center text-gray-300 text-sm">
          © Community Resource Hub. 2026 All rights reserved.
        </div>
      </div>
    </footer>
  )
}
