"use client"

import { useState } from "react"
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // In a real Next.js app, you would use a Server Action here
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("Failed to send message. Please try again.")
      }
    } catch (error) {
      setStatus("Error sending message. Please try again later.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Column */}
          <div className="space-y-3 flex flex-col justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/Logo.png"
                alt="Carni Walls Logo"
                className="w-30 h-24 object-contain brightness-100 contrast-100"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Premium ice cream crafted with passion and the finest ingredients. Every scoop tells a story.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-display text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/flavors" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Our Flavors
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-display text-lg mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  2-13-80, Survey No: 411-A, 411-B, 2nd Ward Eastside of,
                  National Highway Road,
                  <br />
                  Kovur, Andhra Pradesh 524137
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+91 8688131949" className="text-gray-400 hover:text-primary-400 transition-colors">
                  +91 8688131949
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:hello@carniwalls.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  hello@carniwalls.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-sm">
          <p>© {currentYear} Carni Walls. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
