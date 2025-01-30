import React from 'react';

const sponsors = [
  { name: 'AMD', image: "img/amd.jpeg", website: 'https://www.amd.com/en.html' },
  { name: 'Blue Bells', image: "img/bluebells.jpg", website: 'https://www.bluebells.org/' },
  { name: 'SATMOLA', image: "img/satmola_logo.png", website: 'https://online.satmola.com/' },
  { name: 'Oddy', image: "img/oddy_logo.png", website: 'https://oddyindia.com/' },
  { name: 'Sadhev', image: "img/sadhev.jpeg", website: 'https://sadhev.com/' },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen">
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
              <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="w-full h-48 flex justify-center items-center">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;