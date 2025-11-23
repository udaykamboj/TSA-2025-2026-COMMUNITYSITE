import Link from "next/link"
import { Facebook, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">About This Hub</h3>
            <p className="text-gray-300">Connecting residents with essential community resources and services.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition">
                  Browse Resources
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-gray-300 hover:text-white transition">
                  Submit a Resource
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">Get In Touch</h3>
            <p className="text-gray-300 mb-4">Email: info@communityresourcehub.org</p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
              <Mail className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-gray-300 text-center">© 2025 Community Resource Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
