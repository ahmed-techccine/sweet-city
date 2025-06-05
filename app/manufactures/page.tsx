import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ManufacturesPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">MANUFACTURES</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Gearbox Manufactures</h2>
              <p className="text-gray-700 mb-6">
                At SC MACHINE, we specialize in servicing, repairing, and rebuilding gearboxes from a wide range of
                manufacturers. Our expertise spans across various brands and models, ensuring that we can provide
                top-quality service regardless of your gearbox's make or model.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>We are not limited to this list that we service.</strong> Our skilled technicians have the
                knowledge and experience to work with virtually any gearbox manufacturer, providing you with reliable
                solutions for all your gearbox needs.
              </p>
            </div>
            <div>
              <Image
                src="/images/baker-perkins-gearbox1.jpg"
                alt="Gearbox repair facility"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Serviced Manufacturers</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {manufacturers.map((manufacturer) => (
              <Link
                key={manufacturer.name}
                href={`/manufactures/${manufacturer.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 text-center h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <Image
                      src={manufacturer.image}
                      alt={`${manufacturer.name} Gearbox`}
                      width={150}
                      height={150}
                      className="mx-auto object-contain rounded"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{manufacturer.name}</h3>
                    <p className="text-gray-600 mb-4">Gearbox</p>
                    <span className="text-orange-500 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details
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
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Gearbox Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white shadow-md rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  className="text-white"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Repair & Rebuild</h3>
              <p className="text-gray-600">
                Complete gearbox repair and rebuild services for all major manufacturers, restoring your equipment to
                optimal performance.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow-md rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  className="text-white"
                >
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M16.24 16.24l2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="M4.93 19.07l2.83-2.83" />
                  <path d="M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Preventive Maintenance</h3>
              <p className="text-gray-600">
                Regular inspection and maintenance programs to prevent costly breakdowns and extend the life of your
                gearbox.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow-md rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  className="text-white"
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M5 8V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-5" />
                  <circle cx="6" cy="14" r="3" />
                  <path d="M4.5 17 3 22" />
                  <path d="M7.5 17 9 22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Replacement Parts</h3>
              <p className="text-gray-600">
                Manufacturing of custom replacement parts for obsolete or hard-to-find gearbox components, ensuring your
                equipment stays operational.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Gearbox Service or Repair?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your gearbox service needs and discover how SC MACHINE can help keep your
            equipment running smoothly.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">Contact Us Today</Button>
        </div>
      </section>
    </div>
  )
}
