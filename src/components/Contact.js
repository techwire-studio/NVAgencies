import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", 
        "YOUR_TEMPLATE_ID", 
        formData,
        "YOUR_PUBLIC_KEY" 
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", comment: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="w-full px-4 py-8 bg-gray-50">
      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row w-full gap-12">
        {/* Left Column */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
            alt="Office Building"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 flex items-center justify-center md:pl-6">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              Contact Info
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Address:</strong> #2/3, NV House, H. Siddaiah Road, Bengaluru-02.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Customer Care:</strong> +917483436715
            </p>
            <p className="text-lg text-gray-600 mb-6">
              <strong>E-mail:</strong> customer.care@nvagencies.co.in
            </p>
            <button
              className="px-5 py-3 bg-red-600 text-white font-medium rounded-3xl shadow-lg hover:bg-red-700 transition-all"
              onClick={() => window.open("https://maps.google.com", "_blank")}
            >
              Find us on Google Maps
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto p-6 mt-12">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center md:text-left">
          We would love to hear from you!
        </h2>
        <form className="flex flex-col gap-6 items-center md:items-start" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full md:max-w-lg border border-gray-300 rounded-xl px-5 py-3 text-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full md:max-w-lg border border-gray-300 rounded-xl px-5 py-3 text-gray-700"
            />
          </div>
          <div className="w-full md:max-w-lg">
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-700"
            />
          </div>
          <div className="w-full md:max-w-lg">
            <textarea
              name="comment"
              placeholder="Comment"
              rows="4"
              value={formData.comment}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-red-600 text-white font-medium rounded-3xl shadow-lg hover:bg-red-700 transition-all"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-4 text-center text-lg text-gray-600">{status}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
