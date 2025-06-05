'use client'
import Image from "next/image"
import ContactForm from "@/components/contactForm"

export default function ContactPage() {
  return (
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
  )
}