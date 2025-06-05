import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">ABOUT US</h1>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WHY US? */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-center mb-4">WHY US?</h2>
              <p className="text-gray-700 mb-6 text-center">
                "Why settle for less when you can have the best? SC MACHINE is your go-to expert for repairing and
                revitalizing gearboxes and industrial rotating equipment. Our specialized services bring your machinery
                back to peak performance, saving you time and money compared to OEM alternatives. Ready to experience
                unparalleled quality and efficiency?"
              </p>
              
            </div>

            {/* REVERSE ENGINEERING */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-center mb-4">REVERSE ENGINEERING</h2>
              <p className="text-gray-700 mb-6 text-center">
                "Unlock the power of innovation with SC MACHINE! We're revolutionizing the industry with cutting-edge
                reverse engineering for gearboxes and rotating components, coupled with bespoke manufacturing solutions
                for obsolete parts. Experience the thrill of revitalizing old gearboxes and other equipment, eliminating
                downtime and igniting new possibilities."
              </p>
              
            </div>

            {/* WHO ARE WE? */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-center mb-4">WHO ARE WE?</h2>
              <p className="text-gray-700 mb-6 text-center">
                "Join the ranks of industry leaders with SC MACHINE - your powerhouse for equipment repair solutions! We
                excel in exchange, fabrication, repair, and machining, delivering unmatched speed and
                cost-effectiveness. With a plethora of options to tackle any machinery failure, our 20+ years of
                experience ensure top-tier support tailored to your operations. Don't settle for mediocrity -"
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              Founded in 2008, SC MACHINE has grown from a small repair shop to a leading provider of industrial
              equipment solutions. Our journey began with a simple mission: to provide high-quality repair services for
              industrial rotating equipment at competitive prices.
            </p>
            <p className="text-gray-700 mb-6">
              Over the years, we've expanded our capabilities to include reverse engineering, custom manufacturing, and
              a wide range of specialized services for various industries. Today, we're proud to serve clients in over
              30 countries, providing innovative solutions that keep their operations running smoothly.
            </p>
            <p className="text-gray-700">
              Our team of experienced engineers and technicians continues to push the boundaries of what's possible,
              developing new techniques and approaches to solve even the most challenging equipment problems.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every repair, every part, and every service we provide meets the highest
                standards of excellence.
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
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M12 8v-2" />
                  <path d="M12 18v-2" />
                  <path d="M16 12h2" />
                  <path d="M6 12h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We're constantly exploring new technologies and methodologies to provide better, faster, and more
                cost-effective solutions.
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Your success is our success. We work closely with each client to understand their unique needs and
                deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
