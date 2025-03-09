import ServiceHeader from "@/components/service-header"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <ServiceHeader
        title="Glass Studio Service"
        description="Innovative glass solutions with meticulous craftsmanship for residential and commercial spaces."
        imagePath="/custom-glass-installation.jpeg"
      />

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Glass Studio Service</h2>
              <p className="text-gray-700 mb-4 text-justify">
                One Excel Engineering and Construction Pte. Ltd., our Glass Studio Service offers innovative solutions
                to elevate the design and functionality of your space. We specialize in custom glass creations that are
                meticulously crafted and expertly installed to meet the unique needs of our clients.
              </p>
              <p className="text-gray-700 mb-6 text-justify">
                Our team of skilled professionals combines technical expertise with creative vision to deliver
                exceptional glass installations that enhance both the aesthetic appeal and practical functionality of
                residential and commercial environments.
              </p>
              <h3 className="text-2xl font-bold mb-4">Custom Glass Design</h3>
              <p className="text-gray-700 mb-6 text-justify">
                Our Glass Studio provides bespoke design services, crafting unique glass features that perfectly
                complement your space. Whether you need elegant glass partitions, stylish shower enclosures, or
                decorative glass installations, our team works closely with you to bring your vision to life. We offer a
                wide range of glass types, finishes, and colors to match your design preferences and functional
                requirements.
              </p>
            </div>
            <div>
              <Image
                src="/custom-glass-installation.jpeg"
                alt="Glass Studio Service"
                width={600}
                height={600}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Meticulous Craftsmanship For Flawless Glass Installations</h3>
            <p className="text-gray-700 mb-6 text-justify">
              Each project is executed with meticulous attention to detail and high-quality materials. Our skilled
              craftsmen use advanced techniques to ensure that every glass installation is precise and flawless. From
              concept to completion, we prioritize excellence, delivering results that are both beautiful and durable.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <Image
                src="/custom-glass-design.webp"
                alt="Glass Installation"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">Versatile Glass Solutions</h3>
                <p className="text-gray-700 mb-4 text-justify">
                  One Excel Glass Studio Service caters to various applications, including residential, commercial, and
                  hospitality projects. Whether you're upgrading your home, enhancing a business environment, or
                  designing a unique feature for a hospitality venue, our glass solutions offer versatility and
                  sophistication.
                </p>
                <h4 className="text-xl font-semibold mb-2">Why Choose Us?</h4>
                <p className="text-gray-700 mb-4 text-justify">
                  AK Contractor Services provides durable, visually appealing glass partitions tailored to enhance your
                  space's design and functionality.
                </p>
                <div className="flex gap-4 mt-6">
                  <Button>Call Now</Button>
                  <Button variant="outline">WhatsApp</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

