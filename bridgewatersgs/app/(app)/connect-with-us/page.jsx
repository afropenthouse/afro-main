import React from "react";
import { MapPin, Phone, Mail, Building2, Warehouse } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#1795D4] text-white py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">Get in touch with our team</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Head Office
              </h2>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">
                    Plot 123B Trans Amadi Industrial Layout
                  </p>
                  <p className="text-gray-700">Port Harcourt, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">Tel: +234 84 55 66 80</p>
                  <p className="text-gray-700">Mobile: +234 803 5484 882</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">bgslimited@gmail.com</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Lagos Office
              </h2>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  19B Da Silva Street, Lekki Phase 1, Lekki, Lagos Nigeria
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Key Contact
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Hope Etura</p>
                    <p className="text-gray-600">Managing Director</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">+234 803 5484 882</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">bgslimited@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Facilities Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Operational Base Facilities
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Warehouse className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">Admin Office</p>
                    <p className="text-gray-800 font-medium">142 sqm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Warehouse className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">Covered Fabrication Shops</p>
                    <p className="text-gray-800 font-medium">931 sqm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Warehouse className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">Door Size</p>
                    <p className="text-gray-800 font-medium">
                      30 sqm and 20 sqm
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Warehouse className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">Overhead Cranes</p>
                    <p className="text-gray-800 font-medium">
                      10 tons and 5 tons
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Warehouse className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">Outside Fabrication Area</p>
                    <p className="text-gray-800 font-medium">140 sqm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Warehouse className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">Sandblasting/Painting Shop</p>
                    <p className="text-gray-800 font-medium">72 sqm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Warehouse className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">Workshop Offices</p>
                    <p className="text-gray-800 font-medium">7 offices</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Warehouse className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">Open Storage Area</p>
                    <p className="text-gray-800 font-medium">1040 sqm</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Fabrication Base
                </h3>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">KM 16 PH/Aba Expressway</p>
                    <p className="text-gray-700">Behind Golden Tulip Hotel</p>
                    <p className="text-gray-700">Port Harcourt, Rivers state</p>
                    <p className="text-gray-700">Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
