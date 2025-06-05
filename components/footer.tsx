import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/images/sc-logo.png" alt="SC Logo" width={100} height={75} className="mb-4 object-contain" />
            <p className="text-gray-400 text-sm mb-4">
              SC Equipment is a professional company focusing on the research and development, production and sales of
              excavator attachments.
            </p>
            <a href="tel:+18328460120" className="text-gray-400 text-sm hover:text-orange-400 transition">
              Hotline: +1 (832) 846-0120
            </a>
            <br />
            <a href="mailto:scmachineco@gmail.com" className="text-gray-400 text-sm hover:text-orange-400 transition">
              Email: scmachineco@gmail.com
            </a>
            
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/used-equipment" className="text-gray-400 hover:text-white">
                  Used Equipment
                </Link>
              </li>
              <li>
                <Link href="/manufactures" className="text-gray-400 hover:text-white">
                  Manufactures
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/downloadables" className="text-gray-400 hover:text-white">
                  Downloadables
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Subscribe Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay up to date with the roadmap progress, announcements and exclusive discounts.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l text-sm"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">Copyright © Sweet City 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
