import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdStore, MdPhone, MdEmail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'

function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Yacht Party Catering In Dubai', link: '/catering/private-catering/yacht-party-catering' },
    { name: 'Birthday Party Catering', link: '/catering/private-catering/birthday-party-catering' },
    { name: 'Wedding Catering in Dubai', link: '/catering/private-catering/wedding-catering' },
    { name: 'Business Party Catering', link: '/catering/corporate-catering-in-dubai/business-party-catering' },
    { name: 'Private Catering', link: '/catering/private-catering' },
  ]

  const quickLinks = [
    { name: 'Reservation', link: '/contactus' },
    { name: 'Privacy Policy', link: '/privacy-policy-2' },
    { name: 'Terms & Condition', link: '#' },
  ]

  const footerImages = [
    { id: 1, src: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-1.jpg', alt: 'Restaurant dish 1' },
    { id: 2, src: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-2.jpg', alt: 'Restaurant dish 2' },
    { id: 3, src: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-3.jpg', alt: 'Restaurant dish 3' },
    { id: 4, src: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-4.jpg', alt: 'Restaurant dish 4' },
  ]

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-yellow-500">
              Contact Us
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MdStore className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Shop No. 5, Marina Pearl View Hotel Apt.,<br />
                  Waterfront Al Masara Street, Dubai Marina
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <BsPhone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+971543392616" className="text-sm hover:text-yellow-500 transition-colors">
                  +971 54 339 2616
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MdPhone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+97145147066" className="text-sm hover:text-yellow-500 transition-colors">
                  +971 4 514 7066
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MdEmail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="mailto:director@rickyrestaurants.com" className="text-sm hover:text-yellow-500 transition-colors">
                  director@rickyrestaurants.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-4">
              <a
                href="https://www.facebook.com/rickysrestaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-yellow-500 text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ricky-restaurant-5015661a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-yellow-500 text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rickysrestaurantdxb/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-yellow-500 text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-yellow-500">
              Services
            </h3>
            
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.link}
                    className="text-sm hover:text-yellow-500 transition-colors inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quicklinks */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-yellow-500">
              Quicklinks
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link}
                    className="text-sm hover:text-yellow-500 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Instagram Gallery */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-yellow-500">
              Instagram
            </h3>
            
            <div className="grid grid-cols-2 gap-2">
              {footerImages.map((image) => (
                <div key={image.id} className="relative group overflow-hidden rounded-lg">
                  <div className="relative h-24 w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaInstagram className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="https://www.instagram.com/rickysrestaurantdxb/"
              target="_blank"
              className="inline-block text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              Follow us on Instagram →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Ricky's Restaurant. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">We Accept:</span>
              <div className="flex space-x-2">
                <div className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-300">Visa</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-300">Mastercard</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-300">Cash</div>
              </div>
            </div>

            {/* Back to Top Button */}
            {/* <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-800 hover:bg-yellow-500 text-gray-300 hover:text-white p-2 rounded-full transition-colors duration-300"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer