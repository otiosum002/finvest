import React from 'react';

const sponsors = [
  { name: 'Acme Financial', logo: '/placeholder.svg' },
  { name: 'Green Investments', logo: '/placeholder.svg' },
  { name: 'Money Matters', logo: '/placeholder.svg' },
  { name: 'Wealth Wise', logo: '/placeholder.svg' },
  { name: 'Eco Finance', logo: '/placeholder.svg' },
  { name: 'Future Fund', logo: '/placeholder.svg' },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Trusted Sponsors
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            We're proud to partner with leading companies in the financial industry.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="col-span-1 flex justify-center items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-8"
            >
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={180}
                height={80}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Sponsors;
