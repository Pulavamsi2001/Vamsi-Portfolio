import React, { useState, useEffect, useRef } from "react";

// Array of service objects, each containing an id, title, and description
const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 4,
    title: "Database Development",
    description: "Proficient in SQL, PL/SQL, Oracle, PostgreSQL, MySQL, and MongoDB, making you highly suitable for a Database Developer role.",
  },
];

const Service = () => {
  return (
    <div className="text-white py-20" id="service">
      {/* Container for the services section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section title */}
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        {/* Grid layout for the service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through the services array and render each service */}
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-6 rounded-lg shadow-lg"
            >
              {/* Service title */}
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              {/* Service description */}
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;