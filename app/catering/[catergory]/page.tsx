'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MdCheckCircle } from 'react-icons/md'

// Import your JSON data
import privateCateringData from '@/data/private-catering.json'
import corporateCateringData from '@/data/corporate-catering-in-dubai.json'
// Import other catering data as needed

// Define types
interface CateringPageData {
  heroSection?: {
    title: string
  }
  mainContent?: {
    subtitle?: string
    heading?: string
    description?: string[]
  }
  professionalServices?: {
    title?: string
    content?: string[]
  }
  processSection?: {
    title?: string
    processSteps?: string[]
    closingStatement?: string
  }
  whyChooseUs?: {
    title?: string
    intro?: string
    reasons?: Array<{
      title: string
      description: string
    }>
  }
  mainIntroduction?: {
    subtitle?: string
    heading?: string
    description?: string[]
  }
}

// Map slugs to data
const pageDataMap: Record<string, CateringPageData> = {
  'private-catering': privateCateringData.privateCateringPage,
  'corporate-catering-in-dubai': corporateCateringData.corporateCateringPage,
  // Add other catering pages here
}

// Map slugs to page titles
const pageTitleMap: Record<string, string> = {
  'private-catering': 'Private Catering',
  'corporate-catering-in-dubai': 'Corporate Catering',
  'wedding-catering-in-dubai': 'Wedding Catering',
  'birthday-party-catering-in-dubai': 'Birthday Party Catering',
  'yacht-party-catering': 'Yacht Party Catering',
  'special-occasion-catering-in-dubai': 'Special Occasion Catering',
  'kids-party-catering-in-dubai': 'Kids Party Catering',
  'get-together': 'Get Together',
  'staff-catering': 'Staff Catering',
  'business-party-catering': 'Business Party Catering'
}

function CategorySection() {
  const params = useParams()
  const [slug, setSlug] = useState<string>('')
  const [pageData, setPageData] = useState<CateringPageData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Extract slug from URL
    // Assuming URL pattern: /catering/[slug]
    const pathSegments = window.location.pathname.split('/')
    const cateringIndex = pathSegments.indexOf('catering')
    if (cateringIndex !== -1 && pathSegments.length > cateringIndex + 1) {
      const currentSlug = pathSegments[cateringIndex + 1]
      setSlug(currentSlug)
      
      // Get data for this slug
      const data = pageDataMap[currentSlug]
      setPageData(data || null)
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

  const pageTitle = pageTitleMap[slug] || 'Catering Services'
  const data = pageData

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

        {/* Text Content - Always on top of slider */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
              {pageTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Slug */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {!data ? (
          // Fallback content if no specific data found
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-8">We're preparing detailed information about our {pageTitle.toLowerCase()} services.</p>
            <Link 
              href="/catering" 
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Back to Catering
            </Link>
          </div>
        ) : (
          <>
            {/* Main Introduction Section */}
            {(data.mainContent || data.mainIntroduction) && (
              <div className="max-w-4xl mx-auto mb-16">
                {(data.mainContent?.subtitle || data.mainIntroduction?.subtitle) && (
                  <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase block text-center mb-2">
                    {data.mainContent?.subtitle || data.mainIntroduction?.subtitle}
                  </span>
                )}
                
                {(data.mainContent?.heading || data.mainIntroduction?.heading) && (
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
                    {data.mainContent?.heading || data.mainIntroduction?.heading}
                  </h2>
                )}

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {(data.mainContent?.description || data.mainIntroduction?.description)?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Professional Services Section */}
            {data.professionalServices && (
              <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {data.professionalServices.title}
                </h3>
                <div className="space-y-4">
                  {data.professionalServices.content?.map((paragraph, index) => (
                    <p key={index} className="text-gray-700">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us Section */}
            {data.whyChooseUs && (
              <div className="max-w-5xl mx-auto mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
                  {data.whyChooseUs.title}
                </h3>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                  {data.whyChooseUs.intro}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.whyChooseUs.reasons?.map((reason, index) => (
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
            )}

            {/* Process Section */}
            {data.processSection && (
              <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  {data.processSection.title}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {data.processSection.processSteps?.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <p className="font-semibold text-gray-900">{step}</p>
                    </div>
                  ))}
                </div>
                
                {data.processSection.closingStatement && (
                  <p className="text-gray-700 text-center italic">
                    {data.processSection.closingStatement}
                  </p>
                )}
              </div>
            )}

            {/* Contact CTA */}
            <div className="text-center mt-12">
              <Link
                href="/catering-inquiry-form"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Inquire About {pageTitle}</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default CategorySection
