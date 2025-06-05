import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UsedEquipmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">USED EQUIPMENT</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/used-equipment.jpg"
                alt="Industrial machinery"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Trusted Partner for Surplus Equipment Solutions</h2>
              <p className="text-gray-700 mb-6">
                At SC MACHINE, we specialize in the acquisition of used surplus equipment and machinery across a wide
                range of industries. With our extensive experience and commitment to excellence, we offer a seamless
                solution for companies looking to sell their surplus assets and maximize their returns.
              </p>
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Expertise:</span> With years of experience in the industry, we have
                    the knowledge and expertise to accurately assess the value of your equipment and provide fair market
                    prices.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Simple Process:</span> We understand that time is valuable. That's
                    why we've streamlined our process to make selling your surplus equipment quick and hassle-free. From
                    initial assessment to final transaction, we handle every step with efficiency and professionalism.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Wide Range of Equipment:</span> Whether you have Tanks & Vessels,
                    Heat Exchangers, Mixers & Blenders, Reactors, Centrifuges & Separators, Extruders, Granulators,
                    Pelletizers, Homogenizers, Kettles, or any other type of processing equipment, we're interested in
                    purchasing it.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Tailored Solutions:</span> Every company is unique, and we believe
                    in providing personalized solutions to meet your specific needs. Whether you're looking to sell
                    individual pieces of equipment or liquidate an entire facility, we're here to help.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Get in touch with our team and provide details about the equipment you're looking to sell.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p className="text-gray-600">
                Our experts will evaluate your equipment and provide a fair market value assessment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Transaction</h3>
              <p className="text-gray-600">
                Once we agree on a price, we'll handle all the logistics for a smooth and efficient transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Equipment We Purchase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Tanks & Vessels",
              "Heat Exchangers",
              "Mixers & Blenders",
              "Reactors",
              "Centrifuges & Separators",
              "Extruders",
              "Granulators",
              "Pelletizers",
              "Homogenizers",
              "Kettles",
              "Processing Lines",
              "Complete Plants",
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
                <p className="text-gray-600">
                  We offer competitive prices for {item.toLowerCase()} across various industries.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Sell Your Surplus Equipment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free assessment and discover how we can help you maximize the value of your surplus
            assets.
          </p>
          <Link 
            href="/contact">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">Contact Us Now</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
