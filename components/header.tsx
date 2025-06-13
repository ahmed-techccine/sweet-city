import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-1">
              <Image src="/images/sc-logo.png" alt="SC Logo" width={80} height={60} className="object-contain" />
              <h2 className="text-xl font-bold text-gray-900">SC Mechanic</h2>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors">
              ABOUT
            </Link>
            <Link href="/used-equipment" className="hover:text-orange-400 transition-colors">
              USED EQUIPMENT
            </Link>
            <Link href="/manufactures" className="hover:text-orange-400 transition-colors">
              MANUFACTURES
            </Link>
            <Link href="/industries" className="hover:text-orange-400 transition-colors">
              INDUSTRIES
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
