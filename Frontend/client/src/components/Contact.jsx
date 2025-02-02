import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Form submitted successfully");
  };

  return (
    <div className="font-poppins bg-gradient-to-br from-[#667eea] to-[#764ba2] min-h-screen flex flex-col justify-center items-center p-8">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-12 flex max-w-4xl w-full gap-8">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl text-white mb-6 text-center">Get in Touch</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder:text-white placeholder:opacity-70 focus:outline-none focus:bg-opacity-30 transition"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder:text-white placeholder:opacity-70 focus:outline-none focus:bg-opacity-30 transition"
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder:text-white placeholder:opacity-70 focus:outline-none focus:bg-opacity-30 resize-none min-h-[120px] transition"
              />
            </div>
            <motion.button
              type="submit"
              className="bg-green-500 text-white rounded-lg py-2 px-4 text-lg flex items-center justify-center gap-2 transition hover:bg-green-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="flex-1 text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl mb-6">Contact Information</h2>
          <div className="flex items-center mb-4 gap-4">
            <Phone size={24} />
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="flex items-center mb-4 gap-4">
            <Mail size={24} />
            <p>contact@vibefest.com</p>
          </div>
          <div className="flex items-center mb-4 gap-4">
            <MapPin size={24} />
            <p>123 Vibe Street, Festivity City, FC 12345</p>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#"
              className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg transition hover:bg-opacity-30 transform hover:translate-y-[-3px]"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg transition hover:bg-opacity-30 transform hover:translate-y-[-3px]"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg transition hover:bg-opacity-30 transform hover:translate-y-[-3px]"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg transition hover:bg-opacity-30 transform hover:translate-y-[-3px]"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="mt-8 text-center text-white">
        <p>&copy; 2023 Vibe Fest. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-white hover:underline mx-1">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:underline mx-1">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
