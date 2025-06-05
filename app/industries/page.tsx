import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">INDUSTRIES</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Serving Diverse Industries with Specialized Solutions</h2>
            <p className="text-gray-700 mb-8">
              At SC MACHINE, we understand that different industries have unique challenges and requirements. Our
              expertise spans across multiple sectors, allowing us to provide tailored solutions that address the
              specific needs of each industry we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Construction */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Construction industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Construction</h3>
                <p className="text-gray-600 mb-4">
                  Our excavator attachments and precision components are built to withstand the demanding conditions of
                  construction sites. From demolition to material handling, our equipment helps construction companies
                  improve efficiency and productivity.
                </p>
                <Button variant="outline" className="mt-2">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Mining */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Mining industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Mining</h3>
                <p className="text-gray-600 mb-4">
                  The mining industry requires robust and reliable equipment that can operate in harsh environments. Our
                  specialized attachments and components are designed to maximize productivity while minimizing downtime
                  in mining operations.
                </p>
                <Button variant="outline" className="mt-2">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Forestry */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Forestry industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Forestry</h3>
                <p className="text-gray-600 mb-4">
                  Our forestry attachments are engineered for precision and durability in timber harvesting and
                  processing operations. We provide solutions that enhance productivity while promoting sustainable
                  forestry practices.
                </p>
                <Button variant="outline" className="mt-2">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Recycling */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Recycling industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Recycling</h3>
                <p className="text-gray-600 mb-4">
                  The recycling industry demands specialized equipment for efficient material processing. Our recycling
                  attachments and machinery components are designed to handle various materials and improve sorting and
                  processing efficiency.
                </p>
                <Button variant="outline" className="mt-2">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Oil & Gas */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Oil and Gas industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Oil & Gas</h3>
                <p className="text-gray-600 mb-4">
                  The oil and gas industry requires precision-engineered components that can withstand extreme
                  conditions. Our manufacturing capabilities and quality standards ensure reliable performance in
                  critical applications.
                </p>
                <Button variant="outline" className="mt-2">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Manufacturing */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Manufacturing industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
                <p className="text-gray-600 mb-4">
                  We support manufacturing operations with custom tooling, precision components, and equipment repair
                  services. Our solutions help manufacturers optimize their processes and maintain production
                  efficiency.
                </p>
                <Button variant="outline" className="mt-2">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Construction Company Increases Efficiency by 40%</h3>
              <p className="text-gray-600 mb-4">
                A leading construction firm implemented our specialized excavator attachments and saw a significant
                improvement in project completion times and operational efficiency.
              </p>
              <Button variant="link" className="text-orange-500 p-0">
                Read Case Study
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Mining Operation Reduces Downtime by 60%</h3>
              <p className="text-gray-600 mb-4">
                By utilizing our precision-engineered components and maintenance services, a major mining operation
                significantly reduced equipment failures and associated downtime.
              </p>
              <Button variant="link" className="text-orange-500 p-0">
                Read Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Certifications & Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["ISO 9001", "CE Certified", "API Compliant", "ASME Standards"].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Find Industry-Specific Solutions</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how SC MACHINE can address the unique challenges of your industry with our
            specialized products and services.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">Contact Us Today</Button>
        </div>
      </section>
    </div>
  )
}
