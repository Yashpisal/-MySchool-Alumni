import React from 'react';
import './index.css'; // Ensure Tailwind is included here

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">🎓 MySchool Alumni</div>
        <div className="space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#events" className="hover:underline">Events</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gray-100 text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Alumni Network</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Reconnect with old friends, share your journey, and stay updated with events.
        </p>
        <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
          Join Us
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">About Our Alumni</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          Our alumni network brings together graduates from all batches to foster community,
          collaboration, and celebration of achievements. Join us to stay connected and contribute
          back to your alma mater.
        </p>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[2023, 2024, 2025].map((year) => (
            <div key={year} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Reunion {year}</h3>
              <p className="text-gray-600">
                Join us for a nostalgic evening filled with memories and laughter.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Alumni Stories</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {["Anita", "Raj", "Neha"].map((name) => (
            <div key={name} className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="italic text-gray-700 mb-4">
                “Being part of the alumni helped me reconnect and grow.”
              </p>
              <div className="font-bold text-blue-900">{name}</div>
              <div className="text-sm text-gray-500">Batch of 2015</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Stay in Touch</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-md w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-md w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border p-3 rounded-md w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} MySchool Alumni. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;