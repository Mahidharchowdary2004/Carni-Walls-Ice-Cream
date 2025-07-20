import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import SectionTitle from '../components/ui/SectionTitle';
import emailjs from '@emailjs/browser';
import ReactDOMServer from 'react-dom/server';
import EmailTemplate from "../components/ui/EmailTemplate";

const COMPANY_PHONE = "+91 8688131949";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });
    setStatus({ type: "info", message: "Sending your message..." });

    // Debug: log what you're sending
    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };
    console.log(payload);

    // Ensure all fields are filled
    if (!payload.name || !payload.time || !payload.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    try {
      await emailjs.send(
        'service_qswklyf', // your EmailJS service ID
        'template_dgqe8dm', // your EmailJS template ID (updated)
        payload,
        'c2Aon5tlBwOTTIABk' // your EmailJS public key (updated)
      );
      setStatus({
        type: "success",
        message: "Message sent successfully! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    }
  }

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section with Ice Cream Gradient */}
      <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 py-20 pt-32 relative overflow-hidden">
        {/* Decorative circles for ice cream scoops effect */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-300/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-blue-300/30 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-gray-800 font-bold text-4xl md:text-5xl lg:text-6xl text-center bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-16 h-16 bg-green-200/40 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 right-10 w-20 h-20 bg-yellow-200/40 rounded-full blur-lg"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-orange-200/40 rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl w-full"
            >
              <SectionTitle
                title="Send Us a Message"
                subtitle="Have a question, suggestion, or just want to say hello? We'd love to hear from you!"
                center
              />

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`mb-6 p-4 rounded-2xl border-2 ${
                    status.type === "success"
                      ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200"
                      : status.type === "error"
                        ? "bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200"
                        : "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <div className="bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mt-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 bg-gradient-to-r from-white to-pink-50/50 focus:outline-none focus:ring-4 focus:ring-pink-200/50 focus:border-pink-300 transition-all duration-300 placeholder-gray-400"
                        placeholder="Your sweet name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 bg-gradient-to-r from-white to-purple-50/50 focus:outline-none focus:ring-4 focus:ring-purple-200/50 focus:border-purple-300 transition-all duration-300 placeholder-gray-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-200 bg-gradient-to-r from-white to-blue-50/50 focus:outline-none focus:ring-4 focus:ring-blue-200/50 focus:border-blue-300 transition-all duration-300 placeholder-gray-400"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-accent-300 bg-gradient-to-r from-white to-accent-100/50 focus:outline-none focus:ring-4 focus:ring-accent-300/50 focus:border-accent-400 transition-all duration-300 placeholder-gray-400"
                      placeholder="Type your message here..."
                      rows={5}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                    disabled={status.type === 'info'}
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactForm
