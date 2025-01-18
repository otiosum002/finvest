import React from 'react';

const features = [
  {
    label: "INVESTING",
    title: "Smart investment solutions for everyone",
    description: "Access sophisticated investment strategies previously available only to institutional investors. Our platform democratizes investing with AI-powered portfolio management.",
    image: "/placeholder.svg",  // Adjust to the correct image path
    steps: [
      "Create your personalized investment profile",
      "Choose from our curated investment strategies",
      "Monitor and adjust your portfolio in real-time"
    ]
  },
  {
    label: "TECHNOLOGY",
    title: "Cutting-edge financial technology",
    description: "Experience seamless trading and portfolio management with our state-of-the-art platform. Built with the latest technology to ensure security and performance.",
    image: "/placeholder.svg",  // Adjust to the correct image path
    steps: [
      "Real-time market data and analytics",
      "Advanced charting and technical analysis tools",
      "Automated trading capabilities"
    ]
  },
  {
    label: "SECURITY",
    title: "Your security is our top priority",
    description: "Rest easy knowing your investments are protected by industry-leading security measures. We employ multiple layers of protection to safeguard your assets.",
    image: "/placeholder.svg",  // Adjust to the correct image path
    steps: [
      "Bank-level encryption for all transactions",
      "Two-factor authentication for account access",
      "Regular security audits and updates"
    ]
  }
];

const AboutFinvest = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About Finvest
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            Empowering investors with innovative financial solutions and cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div 
              key={feature.label}
              className={`flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex flex-col justify-center">
                <div>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {feature.label}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    {feature.description}
                  </p>
                  <div className="mt-8">
                    <ul className="space-y-3">
                      {feature.steps.map((step, stepIndex) => (
                        <li 
                          key={stepIndex}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-700">
                            {stepIndex + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  {/* Replace Image with img tag */}
                  <img
                    src={feature.image || "/placeholder.svg"} // Regular img tag
                    alt={feature.title}
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default AboutFinvest;
