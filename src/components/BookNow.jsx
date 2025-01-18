import React, { useState } from 'react';
import { Upload, Check } from 'lucide-react';
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form

// Custom Button component
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-6 py-3 text-base font-medium rounded-md transition-colors duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Custom Input component
const Input = ({ className, ...props }) => (
  <input
    className={`px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 ${className}`}
    {...props}
  />
);

// Custom Label component
const Label = ({ children, ...props }) => (
  <label className="block text-sm font-medium text-gray-700" {...props}>
    {children}
  </label>
);

const BookNow = () => {
  const [file, setFile] = useState(null); // No type annotation needed in JavaScript
  const qrValue = "finvest:payment:123456789"; // Replace with actual payment details

  // Initialize react-hook-form
  const form = useForm({
    defaultValues: {
      email: '',
      mobile: '',
    },
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0]; // Safely access the selected file
    if (selectedFile) {
      setFile(selectedFile); // Update the file state
    }
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data); // Log form data
    if (file) {
      console.log('Uploaded File:', file); // Log the uploaded file
    }
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              SELECT <span className="text-green-600">TICKET</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Secure your spot at the Future of FinTech Summit 2024. Complete your booking by following these steps:
            </p>
            <ol className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-700">
                  1
                </span>
                <span className="flex-1">Scan the QR code to make the payment</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-700">
                  2
                </span>
                <span className="flex-1">Fill in your contact details</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-700">
                  3
                </span>
                <span className="flex-1">Upload your payment confirmation</span>
              </li>
            </ol>
          </div>

          {/* Right Column */}
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-lg p-6">
              <h2 className="text-2xl">SUMMIT TICKET</h2>
              <div className="text-5xl font-bold">$999</div>
              <div className="mt-4 bg-white p-4 rounded-lg inline-block">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Payment QR Code"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  {...form.register('email')}
                />
              </div>

              {/* Mobile Field */}
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  {...form.register('mobile')}
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="payment-proof">Payment Proof</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="payment-proof"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {file ? (
                        <>
                          <Check className="w-8 h-8 text-green-600 mb-2" />
                          <p className="text-sm text-gray-500">{file.name}</p>
                        </>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-gray-500 mb-2" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG or PDF (MAX. 10MB)</p>
                        </>
                      )}
                    </div>
                    <input
                      id="payment-proof"
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Complete Booking
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
