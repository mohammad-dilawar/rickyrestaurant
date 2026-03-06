'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PiBowlFood } from "react-icons/pi";
import { useState, useEffect, useRef } from 'react'
import { 
  MdEvent, 
  MdBusiness, 
  MdPeople,
  MdChildCare,
  MdEmojiEvents,
  MdDirectionsBoat,
  MdWork,
  MdGroup,
  MdFoodBank,
  MdCake,
  MdClose,
  MdMenu
} from 'react-icons/md'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null)
  
  // Refs for dropdown containers
  const menuDropdownRef = useRef<HTMLDivElement | null>(null)
  const cateringDropdownRef = useRef<HTMLDivElement | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const cateringButtonRef = useRef<HTMLButtonElement | null>(null)
  
  // Timeout refs for hover delay
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cateringTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close mobile menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle click outside for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside menu dropdown
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target as Node) &&
          menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
        setActiveDropdown(prev => prev === 'menu' ? null : prev)
      }
      // Check if click is outside catering dropdown
      if (cateringDropdownRef.current && !cateringDropdownRef.current.contains(event.target as Node) &&
          cateringButtonRef.current && !cateringButtonRef.current.contains(event.target as Node)) {
        setActiveDropdown(prev => prev === 'catering' ? null : prev)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle hover for dropdowns with delay
  const handleMouseEnter = (dropdown: string) => {
    // Clear any existing timeout for this dropdown
    if (dropdown === 'menu' && menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    if (dropdown === 'catering' && cateringTimeoutRef.current) {
      clearTimeout(cateringTimeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = (dropdown: string) => {
    // Add a small delay before closing to allow moving to dropdown
    const timeoutRef = dropdown === 'menu' ? menuTimeoutRef : cateringTimeoutRef
    
    timeoutRef.current = setTimeout(() => {
      // Only close if not clicked and mouse is not over the dropdown
      setActiveDropdown(prev => prev === dropdown ? null : prev)
    }, 200) // 200ms delay
  }

  // Handle mouse enter on dropdown to cancel close
  const handleDropdownMouseEnter = (dropdown: string) => {
    if (dropdown === 'menu' && menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    if (dropdown === 'catering' && cateringTimeoutRef.current) {
      clearTimeout(cateringTimeoutRef.current)
    }
  }

  // Handle click for dropdowns
  const handleClick = (dropdown: string) => {
    // Clear any pending hover timeouts
    if (dropdown === 'menu' && menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    if (dropdown === 'catering' && cateringTimeoutRef.current) {
      clearTimeout(cateringTimeoutRef.current)
    }
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const servicesData = [
    {
      name: 'PRIVATE CATERING',
      href: '/private-catering',
      icon: MdPeople,
      submenu: [
        { name: 'WEDDING CATERING', href: '/wedding-catering-in-dubai', icon: MdEmojiEvents },
        { name: 'BIRTHDAY PARTY CATERING', href: '/birthday-party-catering-in-dubai', icon: MdCake },
        { name: 'YACHT PARTY CATERING', href: '/yacht-party-catering', icon: MdDirectionsBoat },
        { name: 'SPECIAL OCCASION CATERING', href: '/special-occasion-catering-in-dubai', icon: MdEvent },
        { name: 'KIDS PARTY CATERING', href: '/kids-party-catering-in-dubai', icon: MdChildCare },
        { name: 'GET TOGETHER', href: '/get-together', icon: MdGroup }
      ]
    },
    {
      name: 'CORPORATE CATERING',
      href: '/corporate-catering-in-dubai',
      icon: MdBusiness,
      submenu: [
        { name: 'STAFF CATERING', href: '/staff-catering', icon: MdWork },
        { name: 'BUSINESS PARTY CATERING', href: '/business-party-catering', icon: MdBusiness }
      ]
    }
  ];

  const menuCategories = [
    {
      name: 'Catering Menu',
      href: '/catering-menu',
      icon: PiBowlFood
    },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) {
      setMobileActiveDropdown(null)
      setMobileActiveSubmenu(null)
    }
  }

  const handleMobileDropdownToggle = (dropdownName: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === dropdownName ? null : dropdownName)
    setMobileActiveSubmenu(null)
  }

  const handleMobileSubmenuToggle = (submenuName: string) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === submenuName ? null : submenuName)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://rickyrestaurants.com/wp-content/uploads/2024/05/rickylogo-1024x230.png"
              alt="Ricky Restaurants"
              width={1024}
              height={230}
              priority
              className="w-auto h-8 sm:h-10 md:h-12 lg:h-14"
              sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-gray-600 hover:text-yellow-600 transition-colors text-sm lg:text-base font-medium">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-600 hover:text-yellow-600 transition-colors text-sm lg:text-base font-medium">
              About Us
            </Link>
            
            {/* Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('menu')}
              onMouseLeave={() => handleMouseLeave('menu')}
            >
              <button
                ref={menuButtonRef}
                onClick={() => handleClick('menu')}
                className="flex items-center space-x-1 text-gray-600 hover:text-yellow-600 transition-colors text-sm lg:text-base font-medium focus:outline-none"
              >
                <span>Menu</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'menu' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              {activeDropdown === 'menu' && (
                <div 
                  ref={menuDropdownRef}
                  onMouseEnter={() => handleDropdownMouseEnter('menu')}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50"
                >
                  {menuCategories.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CATERING Dropdown - Multi-level */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('catering')}
              onMouseLeave={() => handleMouseLeave('catering')}
            >
              <button
                ref={cateringButtonRef}
                onClick={() => handleClick('catering')}
                className="flex items-center space-x-1 text-gray-600 hover:text-yellow-600 transition-colors text-sm lg:text-base font-medium py-2 focus:outline-none"
              >
                <span>CATERING</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'catering' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Main Dropdown Panel */}
              {activeDropdown === 'catering' && (
                <div 
                  ref={cateringDropdownRef}
                  onMouseEnter={() => handleDropdownMouseEnter('catering')}
                  className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50"
                >
                  {servicesData.map((service) => (
                    <div 
                      key={service.name}
                      className="relative group"
                    >
                      {/* Main Service Item */}
                      <div className="flex items-center justify-between px-4 py-2 hover:bg-yellow-50">
                        <Link
                          href={`/catering/${service.href}`}
                          className="flex items-center flex-1 text-sm"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <service.icon className="w-4 h-4 text-yellow-500 mr-2" />
                          <span className="font-medium text-gray-700">{service.name}</span>
                        </Link>
                        
                        {/* Arrow for submenu */}
                        {service.submenu && service.submenu.length > 0 && (
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>

                      {/* Submenu - appears on hover */}
                      {service.submenu && service.submenu.length > 0 && (
                        <div className="absolute left-full top-0 w-64 bg-white rounded-lg shadow-xl py-2 ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          {service.submenu.map((item) => (
                            <Link
                              key={item.name}
                              href={`/catering/${service.href}/${item.href}`}
                              className="flex items-center px-4 py-2 text-sm hover:bg-yellow-50"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <item.icon className="w-4 h-4 text-yellow-500 mr-2" />
                              <span className="text-gray-600">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact-us" className="text-gray-600 hover:text-yellow-600 transition-colors text-sm lg:text-base font-medium">
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Reservation Button */}
            <Link 
              href="/contact-us" 
              className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <MdFoodBank className="text-base sm:text-lg" />
              <span className="xs:inline">Reservation</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <MdClose className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <MdMenu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`
          md:hidden 
          fixed inset-x-0 top-16 bg-white border-t border-gray-200 shadow-lg
          transition-all duration-300 ease-in-out overflow-y-auto
          ${isMobileMenuOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
        `}
        style={{ zIndex: 100 }}
      >
        <div className="px-4 py-4 space-y-2">
          {/* Mobile Home Link */}
          <Link 
            href="/" 
            className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile About Link */}
          <Link 
            href="/about-us" 
            className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Menu Dropdown */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => handleMobileDropdownToggle('menu')}
              className="flex items-center justify-between w-full px-3 py-2.5 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
            >
              <span>Menu</span>
              <svg 
                className={`w-4 h-4 transition-transform ${mobileActiveDropdown === 'menu' ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {mobileActiveDropdown === 'menu' && (
              <div className="ml-4 mt-1 space-y-1">
                {menuCategories.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Catering Dropdown */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => handleMobileDropdownToggle('catering')}
              className="flex items-center justify-between w-full px-3 py-2.5 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
            >
              <span>CATERING</span>
              <svg 
                className={`w-4 h-4 transition-transform ${mobileActiveDropdown === 'catering' ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {mobileActiveDropdown === 'catering' && (
              <div className="ml-4 mt-2 space-y-2">
                {servicesData.map((service) => (
                  <div key={service.name} className="space-y-1">
                    <button
                      onClick={() => handleMobileSubmenuToggle(service.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
                    >
                      <span>{service.name}</span>
                      {service.submenu && service.submenu.length > 0 && (
                        <svg 
                          className={`w-4 h-4 transition-transform ${mobileActiveSubmenu === service.name ? 'rotate-90' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </button>
                    
                    {mobileActiveSubmenu === service.name && service.submenu && (
                      <div className="ml-4 space-y-1">
                        {service.submenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <item.icon className="w-4 h-4 mr-2" />
                            <span className="line-clamp-1">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Contact Link */}
          <Link 
            href="/contact-us" 
            className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Reservation Button */}
          {/* <div className="pt-4 px-3">
            <Link 
              href="/contact-us" 
              className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold px-4 py-3 rounded-full transition-all duration-300 gap-2 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MdFoodBank className="text-lg" />
              <span>Make a Reservation</span>
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Navbar