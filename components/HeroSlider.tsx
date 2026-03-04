'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/event-img-1.png',
  },
  {
    id: 2,
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/img-1-676x1024.jpg',
  },
  {
    id: 3,
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/img-2-676x1024.jpg',
  }
]

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] w-full overflow-hidden">
      {/* Background Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`
            absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt="Restaurant ambiance"
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
      ))}

      {/* Text Content - Always on top of slider */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Welcome Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            Welcome to Rickys Restaurant
          </h1>
          
          {/* Main Slogan - Larger and Styled */}
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-yellow-400 animate-fade-in-up">
            Eat What makes You Happy
          </p>
          
          {/* Contact Button */}
          <Link
            href="/contactus"
            className="inline-block bg-yellow-500 text-gray-900 px-10 py-4 rounded-md font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 animate-fade-in-up shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === currentSlide 
                ? 'bg-yellow-500 w-8' 
                : 'bg-white/50 hover:bg-white/80'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider