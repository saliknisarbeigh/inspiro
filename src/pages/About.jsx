import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative bg-amber-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Our Story
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Three generations of passion, tradition, and the finest ingredients
            come together to create something truly special.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-amber-900 mb-6">
                Founded in 1952
              </h2>
              <p className="text-gray-700 leading-relaxed">
                What started as a small neighborhood bakery with just one
                wood-fired oven has grown into a beloved community institution.
                Giuseppe and Maria Rossini immigrated from Italy with nothing
                but their family recipes and an unwavering commitment to
                quality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, their grandson Marco continues the tradition, waking up
                at 4 AM every morning to ensure that our bread, pastries, and
                cakes are made fresh daily using the same time-honored
                techniques passed down through generations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every loaf tells a story of dedication, every pastry reflects
                our commitment to excellence, and every customer becomes part of
                our extended family.
              </p>
            </div>

            {/* Shopfront Image */}
            <div className="order-first lg:order-last">
              <div className="bg-amber-200 rounded-lg h-80 flex items-center justify-center shadow-lg">
                <div className="text-center text-amber-800">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <p className="font-medium">Historic Shopfront</p>
                  <p className="text-sm">Est. 1952</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-amber-900 text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Quality First
              </h3>
              <p className="text-gray-600">
                We use only the finest ingredients, sourced locally whenever
                possible, and never compromise on quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Family Tradition
              </h3>
              <p className="text-gray-600">
                Three generations of baking expertise, with recipes and
                techniques passed down through our family.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Community Focus
              </h3>
              <p className="text-gray-600">
                We're proud to be a cornerstone of our neighborhood, supporting
                local events and bringing people together.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bakers Image */}
            <div>
              <div className="bg-amber-200 rounded-lg h-80 flex items-center justify-center shadow-lg">
                <div className="text-center text-amber-800">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-medium">Master Bakers at Work</p>
                  <p className="text-sm">Crafting with Care</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-amber-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our team of skilled bakers combines traditional European
                techniques with modern innovation. Each member brings years of
                experience and a genuine passion for the craft of baking.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From our head baker Marco, who learned the trade from his
                grandfather, to our talented pastry chefs who create our
                signature desserts, every team member is committed to
                maintaining the highest standards of quality and taste.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <p className="text-gray-700 italic">
                  "Baking is not just our profession—it's our passion. Every
                  day, we have the privilege of creating something that brings
                  joy to people's lives, and that's what gets us up before dawn
                  with a smile."
                </p>
                <p className="text-amber-700 font-medium mt-2">
                  — Marco Rossini, Head Baker
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-20 bg-amber-100 py-12 px-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Experience the tradition, taste the quality, and become part of our
            story. We're open daily and always happy to welcome new friends to
            our bakery family.
          </p>
          <div className="text-amber-800 font-medium">
            <p>123 Baker Street, Downtown</p>
            <p>Open: Mon-Sat 6AM-8PM, Sun 7AM-6PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
