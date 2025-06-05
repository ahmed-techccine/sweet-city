import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ManufacturerNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">404</h1>
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Manufacturer Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The manufacturer you are looking for does not exist or is not currently serviced by SC MACHINE. Please check
          the manufacturer name or browse our list of supported manufacturers.
        </p>
        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
          <Link href="/manufactures">View All Manufacturers</Link>
        </Button>
      </div>
    </div>
  )
}
