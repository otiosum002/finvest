import React from 'react';
import { Link } from 'react-router-dom';

const BookNowPage = () => {
  return (
    <div className="flex items-center justify-center pt-8">
      <Link
        to="/book-now"
        className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all"
      >
        Book Now
      </Link>
    </div>
  );
};

export default BookNowPage;