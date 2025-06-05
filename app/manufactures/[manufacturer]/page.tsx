import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Define the list of manufacturers we support
const manufacturers = [
  { name: "Amarillo", image: "/images/amarillo-gearbox1.png" },
  { name: "Baker Perkins", image: "/images/baker-perkins-gearbox1.jpg" },
  { name: "Cincinnati", image: "/images/cincinnati-gearbox1.jpg" },
  { name: "Dodge", image: "/images/dodge-gearbox1.jpg" },
  { name: "Falk", image: "/images/falk-gearbox1.jpg" },
  { name: "Foote Jones", image: "/images/foote-jones-gearbox1.jpg" },
  { name: "Ingersoll Rand", image: "/images/ingersoll-rand-gearbox1.jpg" },
  { name: "Krauss Maffei", image: "/images/krauss-maffei-gearbox1.jpg" },
  { name: "Lightnin", image: "/images/lightnin-gearbox1.jpg" },
  { name: "Lufkin", image: "/images/lufkin-gearbox1.jpg" },
  { name: "Marley", image: "/images/marley-gearbox1.jpg" },
  { name: "Philadelphia", image: "/images/philadelphia-gearbox1.jpg" },
  { name: "Sew euro drive", image: "/images/sea-gearbox1.jpg" },
]

// Convert the manufacturer names to URL-friendly slugs
const manufacturerSlugs = manufacturers.map((m) => m.name.toLowerCase().replace(/\s+/g, "-"))

// Create a mapping between slugs and manufacturer objects
const slugToManufacturer = Object.fromEntries(
  manufacturers.map((m, i) => [manufacturerSlugs[i], m])
)

export default function ManufacturerPage({ params }: { params: { manufacturer: string } }) {
  const { manufacturer } = params

  // Check if this is a valid manufacturer slug
  if (!slugToManufacturer[manufacturer]) {
    notFound()
  }

  // Get the manufacturer object from the slug
  const { name: manufacturerName, image: manufacturerImage } = slugToManufacturer[manufacturer]

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <Link href="/manufactures" className="text-orange-500 mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Manufacturers
            </Link>
            <h1 className="text-4xl font-bold text-center">{manufacturerName} Gearbox</h1>
          </div>
        </div>
      </div>

      {/* Manufacturer Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={manufacturerImage}
                alt={`${manufacturerName} Gearbox`}
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{manufacturerName} Gearbox Services</h2>
              <p className="text-gray-700 mb-6">
                SC MACHINE specializes in the repair, maintenance, and rebuilding of {manufacturerName} gearboxes. With
                our extensive experience and technical expertise, we provide comprehensive solutions for all your
                {manufacturerName} gearbox needs.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of skilled technicians is familiar with the unique specifications and requirements of
                {manufacturerName} gearboxes, ensuring that your equipment receives the highest quality service and
                care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500 mr-2 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Complete repair and rebuild services</span>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500 mr-2 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Genuine and OEM-equivalent replacement parts</span>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500 mr-2 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Preventive maintenance programs</span>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500 mr-2 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Emergency repair services</span>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Request a Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common {manufacturerName} Gearbox Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Bearing Failures</h3>
              <p className="text-gray-600">
                Bearing failures are one of the most common issues in {manufacturerName} gearboxes. Our team can quickly
                diagnose and replace damaged bearings to prevent further damage to your gearbox.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Gear Wear and Damage</h3>
              <p className="text-gray-600">
                Over time, gears can wear down or become damaged due to various factors. We provide precision gear
                replacement and repair services to restore your {manufacturerName} gearbox to optimal condition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Oil Leaks and Contamination</h3>
              <p className="text-gray-600">
                Oil leaks and contamination can significantly impact the performance of your {manufacturerName} gearbox.
                Our comprehensive service includes seal replacement and thorough cleaning to prevent future issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our {manufacturerName} Gearbox Service Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-500"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
                  <p className="text-gray-600">
                    We begin with a thorough inspection of your {manufacturerName} gearbox to identify all issues and
                    determine the best course of action.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Detailed Quote</h3>
                  <p className="text-gray-600">
                    We provide a comprehensive quote outlining all necessary repairs, replacement parts, and labor costs
                    with no hidden fees.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Repair and Rebuild</h3>
                  <p className="text-gray-600">
                    Our skilled technicians perform all necessary repairs and replacements, ensuring that every
                    component meets or exceeds OEM specifications.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Testing</h3>
                  <p className="text-gray-600">
                    Every repaired {manufacturerName} gearbox undergoes rigorous testing to ensure optimal performance
                    and reliability before being returned to service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Service Your {manufacturerName} Gearbox?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your {manufacturerName} gearbox service needs and discover how SC MACHINE
            can help keep your equipment running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">Contact Us</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 text-lg"
            >
              View All Manufacturers
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}