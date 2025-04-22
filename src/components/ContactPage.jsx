import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section - Office Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <p>
            <strong>Shanker Traders</strong><br />
            Opp. Bir Niwas, Circular Road,<br />
            Nabha, District Patiala,<br />
            Punjab, India - 147201
          </p>
          <p className="mt-2">
            <strong>Phone:</strong> +91 98765 43212
          </p>
          <p>
            <strong>Email:</strong> shankertraders@gmail.com
          </p>
          <p>
            <strong>Business Hours:</strong><br />
            Monday – Saturday: 9:00 AM – 8:00 PM<br />
            Sunday: Closed
          </p>
          <p className="mt-4">
            Whether you're looking for water tanks, pipe fittings, or bathroom fittings,
            our team is ready to assist you. Visit us or drop a message – we’ll be happy to help.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
