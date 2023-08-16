import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="bg-[#B2D2A4] font-sans">
      {/* Navigation */}
      <nav className="bg-[#B2D2A4] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-extrabold">smallbyte</h1>
          <div>
            <a
              href="/login" // Replace with the actual login page route
              className="text-white hover:underline px-4"
            >
              Login
            </a>
            <a
              href="/signup" // Replace with the actual signup page route
              className="text-white hover:underline"
            >
              Signup
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-[#B2D2A4] py-16 text-[#1f3d1a] ">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 font-alata">Welcome to smallbyte</h1>
          <p className="text-lg font-cardo">Empowering Your Retail Journey</p>
        </div>
      </header>

      {/* Image Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-alata">Unleashing Local Potential</h2>
          <img
            src="/img.jpg" // Replace with your actual image path
            alt=""
            srcset=""
            className="max-w-full h-auto mx-auto rounded-lg shadow-lg text-center"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-alata text-center">About Us</h2>
          <p className="text-gray-700 mb-8 mx-4 font-cardo text-lg">
            Welcome to smallbyte, a pioneering technology company dedicated to
            revolutionizing the retail industry through innovative AI-driven
            solutions. At smallbyte, we are fervently committed to transforming
            conventional retail practices into intelligent, data-driven operations
            that elevate efficiency, customer experiences, and profitability.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-[#B2D2A4]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-alata text-center">Our Vision</h2>
          <p className="text-gray-700 mb-8 mx-4 font-cardo text-lg">
            Our vision is to empower businesses with cutting-edge technology that
            optimizes every aspect of their operations. We envision a future where
            AI-powered insights drive decision-making, where inventory management
            becomes precise and responsive, and where customer interactions are
            personalized and unforgettable.
          </p>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-16">
        <div className="container mx-auto text-center bg-[#B2D2A4] p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 font-alata text-center">What Sets Us Apart</h2>
          <p className="text-gray-700 mb-6 mx-4 font-cardo text-lg">
            <span className="font-semibold">Expertise:</span> Our team comprises skilled
            professionals in AI, data science, and retail operations. We blend deep
            technical knowledge with industry insights to create solutions that truly
            make a difference.
          </p>
          <p className="text-gray-700 mb-6 mx-4 font-cardo text-lg">
            <span className="font-semibold">Innovation:</span> We're driven by a culture
            of innovation. We continuously research, develop, and refine our solutions
            to stay ahead of the curve and offer the latest advancements to our
            clients.
          </p>
          <p className="text-gray-700 mb-6 mx-4 font-cardo text-lg">
            <span className="font-semibold">Tailored Solutions:</span> We understand that
            each business is unique. That's why we offer customizable solutions that
            are tailored to your specific needs and challenges.
          </p>
          <p className="text-gray-700 mx-4 font-cardo text-lg">
            <span className="font-semibold">Real-World Impact:</span> We measure our
            success by the tangible benefits our solutions bring to your business.
            Whether it's optimizing inventory, predicting trends, or enhancing customer
            engagement, we're here to drive real-world impact.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-[#B2D2A4]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-alata text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#B2D2A4] p-6 rounded-lg shadow-md text-left font-cardo">
              <h3 className="text-xl font-semibold mb-4 font-lato">Demand Forecasting</h3>
              <p className="text-gray-700">
                Leverage AI algorithms to accurately predict customer demand, enabling
                you to stock the right products at the right time.
              </p>
            </div>
            <div className="bg-[#B2D2A4] p-6 rounded-lg shadow-md text-left font-cardo">
              <h3 className="text-xl font-semibold mb-4 font-lato">Inventory Optimization</h3>
              <p className="text-gray-700">
                Streamline inventory management with data-driven insights that help
                you maintain optimal stock levels and reduce wastage.
              </p>
            </div>
            <div className="bg-[#B2D2A4] p-6 rounded-lg shadow-md text-left font-cardo">
              <h3 className="text-xl font-semibold mb-4 font-lato">Supplier Relationship Enhancement</h3>
              <p className="text-gray-700">
                Make informed supplier choices based on data-driven metrics, improving
                efficiency in your supply chain.
              </p>
            </div>
            <div className="bg-[#B2D2A4] p-6 rounded-lg shadow-md text-left font-cardo">
              <h3 className="text-xl font-semibold mb-4 font-lato">Customer Experience Enhancement</h3>
              <p className="text-gray-700">
                Elevate customer experiences with personalized recommendations, dynamic
                pricing, and real-time engagement strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us on Our Journey Section */}
      <section className="bg-[#B2D2A4] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-alata text-center">Join Us on Our Journey</h2>
          <p className="text-gray-700 mx-4 font-cardo text-lg">
            We invite you to join us on this exciting journey of innovation and
            transformation. Whether you're a local store looking to optimize
            operations or a visionary retailer aiming to reshape the industry,
            smallbyte is here to partner with you.
          </p>
          <p className="text-gray-700 mx-4 font-cardo text-lg">
            Connect with us today to explore how our AI-driven solutions can unlock
            new possibilities for your business.
          </p>
        </div>
      </section>
    </div>
  );
}
