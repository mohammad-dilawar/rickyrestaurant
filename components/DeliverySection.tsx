import Image from 'next/image'
import Link from 'next/link'

function DeliverySection() {
  return (
    <section className="w-full bg-gradient-to-r from-amber-900 to-amber-800 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Get Delivery Label */}
            <div className="inline-block">
              <h3 className="text-yellow-400 font-semibold text-lg tracking-wider uppercase">
                Get Delivery
              </h3>
              <div className="h-1 w-16 bg-yellow-500 mt-2 mx-auto lg:mx-0"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              on your <span className="text-yellow-400">desired time</span>
            </h2>

            {/* Description */}
            <p className="text-gray-200 text-lg max-w-xl mx-auto lg:mx-0">
              Craving something delicious? Get your favorite meals delivered right to your doorstep 
              at the time that suits you best. Fast, fresh, and always satisfying.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm">Fresh Food</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm">24/7 Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm">Best Prices</span>
              </div>
            </div>

            {/* Order Now Button */}
            <div className="pt-6">
              <Link
                href="/menu"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto"
              >
                ORDER NOW
              </Link>
            </div>

            {/* Stats/Trust Badges */}
            <div className="flex justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-sm text-gray-300">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-300">Dishes</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="https://rickyrestaurants.com/wp-content/uploads/2024/05/sub-img.jpg"
              alt="Delicious food delivery"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-yellow-600 font-bold">⚡ Free Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliverySection