import React from "react";
import { Building2 } from "lucide-react";

const AffiliatesPage = () => {
  const affiliates = [
    { name: "Golden Stat Nigeria" },
    { name: "Soto Nigeria" },
    { name: "H & O Movers Nigeria" },
  ];

  return (
    <div className="min-h-screen bg-black pt-[6rem] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Our Trusted Affiliates
          </h1>
          <p className="text-lg text-blue-600">
            Proud to work with these leading companies
          </p>
        </div>

        {/* Affiliates Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {affiliates.map((affiliate, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900">
                {affiliate.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-600">Interested in becoming an affiliate?</p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Contact Us
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AffiliatesPage;
