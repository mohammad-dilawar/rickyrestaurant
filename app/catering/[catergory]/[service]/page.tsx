'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { MdCheckCircle } from 'react-icons/md'

import TestimonialsSection from '@/components/TestimonialsSection'

// Import the combined catering data
import cateringServicesData from '@/data/catering-services.json'

interface ServiceData {
  id: string
  slug: string
  pageTitle: string
  heroTitle: string
  mainContent: {
    subtitle: string
    heading: string
    description: string[]
  }
  features: {
    title: string
    intro: string
    reasons: Array<{
      title: string
      description: string
    }>
  }
}

function ServiceSection() {
  const params = useParams()
  const [serviceData, setServiceData] = useState<ServiceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    // Get the path segments
    const pathSegments = window.location.pathname.split('/').filter(segment => segment !== '')
    
    // Expected pattern: ["catering", "private-catering", "wedding-catering-in-dubai"]
    // We want the last segment (third slug) which is the specific service
    const serviceSlug = pathSegments[pathSegments.length - 1]
    
    // Get the parent category (second slug) for breadcrumb/context
    const parentCategory = pathSegments.length >= 2 ? pathSegments[1] : ''
    setCategoryName(parentCategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))

    if (serviceSlug && cateringServicesData) {
      // Find the service by matching the slug with the id
      // Note: The slug from URL should match the id in the data
      const foundService = cateringServicesData.find(
        (service: ServiceData) => service.id === serviceSlug || service.slug === serviceSlug
      )
      setServiceData(foundService || null)
    }
    
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    )
  }

  if (!serviceData) {
    return (
      <section className="w-full bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-[300px] sm:h-[200px] lg:h-[300px] w-full overflow-hidden mb-20">
          <div className="relative h-full w-full">
            <Image
              src="https://rickyrestaurants.com/wp-content/uploads/2024/05/RICKYS-RESTAURANT.jpg"
              alt="Restaurant ambiance"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-[2px]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
                Service Not Found
              </h1>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link 
            href="/catering" 
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Catering
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[200px] lg:h-[300px] w-full overflow-hidden mb-20">
        <div className="relative h-full w-full">
          <Image
            src="https://rickyrestaurants.com/wp-content/uploads/2024/05/RICKYS-RESTAURANT.jpg"
            alt="Restaurant ambiance"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Dark overlay with gradient and subtle blur */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-[2px]" />
        </div>

        {/* Breadcrumb Navigation */}
        <div className="absolute top-4 left-4 z-20 text-white/80 text-sm">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/catering" className="hover:text-white">Catering</Link>
          <span className="mx-2">/</span>
          <Link href={`/catering/${categoryName.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-white">
            {categoryName}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{serviceData.pageTitle}</span>
        </div>

        {/* Text Content - Always on top of slider */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
              {serviceData.heroTitle || serviceData.pageTitle}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              {serviceData.mainContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase">
              {serviceData.mainContent.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {serviceData.mainContent.heading}
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {serviceData.mainContent.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Features/Reasons Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            {serviceData.features.title}
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            {serviceData.features.intro}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceData.features.reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <MdCheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h4>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Inquire About {serviceData.pageTitle}</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <TestimonialsSection />
    </section>
  )
}

export default ServiceSection