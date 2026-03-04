'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
// import { StarIcon } from '@heroicons/react/20/solid'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Food Blogger',
    image: '',
    content: 'The best dining experience I have had in Dubai! The food is absolutely delicious, and the service is impeccable. The grilled chicken is to die for!',
    rating: 5,
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Mohammed Al Rashid',
    role: 'Regular Customer',
    image: '',
    content: 'Ricky\'s Restaurant never disappoints. Their catering service for our corporate event was outstanding. Everyone loved the food! Highly recommended.',
    rating: 5,
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Food Critic',
    image: '',
    content: 'Authentic flavors, fresh ingredients, and a cozy atmosphere. The mutton kofta is a must-try. Will definitely come back with family.',
    rating: 5,
    date: '3 weeks ago'
  },
  {
    id: 4,
    name: 'Ahmed Hassan',
    role: 'Event Planner',
    image: '',
    content: 'We hired Ricky\'s for a birthday party catering. They were professional, punctual, and the food was a hit with all our guests. Thank you!',
    rating: 5,
    date: '1 week ago'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Food Enthusiast',
    image: '',
    content: 'The Caesar salad is the best in town! The delivery was fast and the food was still hot. Great experience overall.',
    rating: 4,
    date: '5 days ago'
  },
  {
    id: 6,
    name: 'Omar Farooq',
    role: 'Business Owner',
    image: '',
    content: 'Perfect spot for business lunches. Professional staff, great ambiance, and the food is consistently excellent.',
    rating: 5,
    date: '2 weeks ago'
  }
]

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  // Calculate visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
    }
    return 1
  }

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-yellow-600 font-semibold text-sm md:text-base tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Our <span className="text-yellow-600">Customers Say</span>
          </h2>
          <div className="flex justify-center space-x-1">
            <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        </div>

        {/* Stats/Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600">1000+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600">50+</div>
            <div className="text-sm text-gray-600">5-Star Reviews</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600">24/7</div>
            <div className="text-sm text-gray-600">Service</div>
          </div>
        </div>

        {/* Main Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white hover:bg-yellow-500 text-gray-800 hover:text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white hover:bg-yellow-500 text-gray-800 hover:text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * 3)}
              className={`transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / 3) === index
                  ? 'w-8 h-2 bg-yellow-500'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://google.com/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
          >
            <span className="mr-2">See all reviews on</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
            <span className="ml-1 font-semibold">Google</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// Individual Testimonial Card
function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {/* {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))} */}
        <span className="ml-2 text-sm text-gray-500">{testimonial.date}</span>
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-700 text-lg italic mb-6 line-clamp-4">
        "{testimonial.content}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center">
        {/* <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div> */}
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>

      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10">
        <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
    </div>
  )
}

export default TestimonialsSection