'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contactForm"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-bg.png')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Precision Machining
              <br />
              Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Since the first days of operation, delivering on machining has been focused on providing the highest
              quality service to our customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
              
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">GET QUOTE</Button>
              </Link>
              <Link href="tel:+18328460120" passHref>
  <Button
    variant="outline"
    className="border-white text-black hover:bg-white hover:text-orange-600 px-8 py-3 text-lg"
  >
    Call Now
  </Button>
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* High-quality SC Equipment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">High-quality SC Equipment</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Equipment Grid */}
          <div className="max-w-6xl mx-auto">
            {/* Top Row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="mb-6">
                  <Image
                    src="/amarillo1.png"
                    alt="Demolition Attachments - Red hydraulic breaker"
                    width={350}
                    height={250}
                    className="object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Amarillo Gearbox</h3>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <Image
                    src="/cincinnati.jpg"
                    alt="Recycling Scrap Attachments - Black grapple"
                    width={350}
                    height={250}
                    className="object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Cincinnati Gearbox</h3>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <Image
                    src="/falk.jpg"
                    alt="Forestry attachments - Gray grapple"
                    width={350}
                    height={250}
                    className="mx-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Falk Gearbox</h3>
              </div>
            </div>

            {/* Bottom Row - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="mb-6">
                  <Image
                    src="/dodge.jpg"
                    alt="Other Excavator Attachments - Yellow screening bucket"
                    width={350}
                    height={250}
                    className="mx-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Dodge Gearbox</h3>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <Image
                    src="/sewseuro.jpg"
                    alt="Excavator Pile Driver - Blue hydraulic hammer"
                    width={350}
                    height={250}
                    className="mx-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Sewseuro Gearbox</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application of Excavator Attachments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Application of Excavator Attachments</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Excavator attachments are specialized tools that can be mounted on excavators to perform specific tasks
            beyond standard digging operations. These attachments significantly expand the versatility and capabilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/image1.jpeg"
                alt="Demolition work"
                width={300}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/image2.jpeg"
                alt="Material handling"
                width={300}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/image4.jpeg"
                alt="Forestry work"
                width={300}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/image19.jpeg"
                alt="Construction work"
                width={300}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SC Equipment */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px] ">
            <div className="relative">
              <Image
                src="/bg3.png"
                alt="Manufacturing facility with CNC machines"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-black bg-opacity-80 text-white p-12 flex flex-col justify-center">
              <div>
                <h2 className="text-4xl font-bold mb-2">Why Choose SC Equipment?</h2>
                <div className="w-16 h-1 bg-orange-500 mb-8"></div>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Established in 2008, SC equipment is a professional company integrating R&D, manufacturing and sales
                  of construction machinery attachments, we have several sets of advanced precision installation &
                  inspection equipment including heating, cleaning, testing to assure our high quality. We own more than
                  5 patents and most of products have CE certifications. Our attachments scope is continually expanding.
                  We can also custom order any attachments you do not find in our listings.
                </p>
                <Link
                  href="/about"
                  className="text-white hover:text-orange-400 transition-colors inline-flex items-center gap-2"
                >
                  Know More About SC Equipment
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">30</div>
              <p className="text-gray-600">Countries served worldwide</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">15</div>
              <p className="text-gray-600">Years of experience in manufacturing</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100</div>
              <p className="text-gray-600">Professional technical personnel and workers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">6000</div>
              <p className="text-gray-600">Sets of products produced annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Brands */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            SC Attachments Are Suitable for Below
            <br />
            Excavator Brands
          </h2>
          <Image
            src="/brand-logo.png"
            alt="Compatible Brands"
            width={900}
            height={300}
            className="mx-auto mt-20"
          />
          {/* <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            {["CAT", "DOOSAN", "HITACHI", "JCB", "KOBELCO", "KOMATSU", "SANY", "VOLVO"].map((brand) => (
              <div key={brand} className="bg-white p-4 rounded">
                <span className="text-black font-bold">{brand}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Blog Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">SC Equipment Blogs & News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post 1"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-orange-500 mb-2">17 JUL</div>
                  <h3 className="font-bold mb-2">What is an excavator & hydraulic grapple scrap driver?</h3>
                  <p className="text-gray-600 text-sm">
                    The hydraulic grapple scrap's excellent ground clearance and outstanding mobility make it ideal
                    for...
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post 2"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-orange-500 mb-2">22 JUN</div>
                  <h3 className="font-bold mb-2">The ideal capacity for new rock diggers</h3>
                  <p className="text-gray-600 text-sm">
                    In the world of heavy machinery and construction equipment, rock diggers play a fundamental role...
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post 3"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-orange-500 mb-2">04 JUN</div>
                  <h3 className="font-bold mb-2">What are the Five Equipment of the Hydraulic Breaker?</h3>
                  <p className="text-gray-600 text-sm">
                    Hydraulic breaker is a kind of powerful demolition equipment, widely used in construction...
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      <section className="py-16" id="contact">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-aut rounded-2xl shadow-lg overflow-hidden">
      {/* Left: Image */}
      <div className="hidden md:block h-full">
        <Image
          src="/images/image14.jpeg" // apni image ka path yahan de
          alt="Contact SC Equipment"
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-4xl shadow-lg"
        />
      </div>
      {/* Right: Form */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  </div>
  </section>
    </div>
  )
}
