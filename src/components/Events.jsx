import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

// Button component
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-6 py-3 text-base font-medium rounded-md transition-colors duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Card component
const Card = ({ children, className }) => (
  <div
    className={`overflow-hidden rounded-lg shadow-md bg-white ${className}`}
  >
    {children}
  </div>
);

// CardContent component
const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const featuredEvent = {
  title: "Where Finance Meets Future – Invest in Knowledge, Harvest Returns!",
  date: "Feburary 2, 2024",
  time: "10:00 AM - 6:00 PM",
  location: "Shiv Nadar Institution of Eminence, Delhi NCR",
  description: "Get ready for a day packed with insights, inspiration, and financial wisdom at Mint Money 2025, the flagship event hosted by Finvest, the Finance and Investing Club of Shiv Nadar Institution of Eminence. Whether you're a curious beginner, a seasoned investor, or just someone passionate about personal finance, this event is your one-stop shop to unlock the secrets of building wealth in today’s dynamic world.",
  image: "/placeholder.svg?height=400&width=800",
  speakers: [
    { name: "Keki Mistry", role: "Former CEO and Chairman, HDFC Limited", image: "/placeholder.svg?height=100&width=100" },
    { name: "Amit Dua", role: "Senior Vice President, IndusInd Bank", image: "/placeholder.svg?height=100&width=100" },
  ]
};

const upcomingEvents = [
  {
    title: "Snifty",
    date: "March 20, 2024",
    time: "2:00 PM EST",
    location: "Virtual Event",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Finverse",
    date: "March 25, 2024",
    time: "3:00 PM EST",
    location: "Boston Convention Center",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Learners' Community",
    date: "April 5, 2024",
    time: "10:00 AM EST",
    location: "Chicago Financial Hub",
    image: "/placeholder.svg?height=200&width=300"
  }
];

const Events = () => {
  return (
    <div className="min-h-screen ">
      {/* Featured Event Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/img/entrance.webp"

            alt={featuredEvent.title}
            className="object-cover brightness-50 w-full h-full"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-white">
          <span className="inline-flex items-center rounded-md bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
            Mint Money 2025
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {featuredEvent.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            {featuredEvent.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-400" />
              {featuredEvent.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-400" />
              {featuredEvent.time}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-400" />
              {featuredEvent.location}
            </div>
          </div>
          
        </div>
      </div>

      {/* Speakers Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Featured Speakers</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredEvent.speakers.map((speaker) => (
            <Card key={speaker.name}>
              <CardContent>
                <div className="flex items-center gap-4">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{speaker.name}</h3>
                    <p className="text-sm text-gray-500">{speaker.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            
          </div>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.title}>
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full object-cover h-48"
                />
                <CardContent>
                  <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  <div className="mt-4 space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                  <Button className="mt-4 w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Events;
