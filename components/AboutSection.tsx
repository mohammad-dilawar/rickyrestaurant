import Image from 'next/image'
import Link from 'next/link'

function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* First image */}
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-1.jpg"
                  alt="Restaurant interior"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              
              {/* Second image */}
              <div className="relative h-[400px] md:h-[500px] mt-8">
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-2.jpg"
                  alt="Restaurant dish"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* About Us Label */}
            <div className="inline-block">
              <h3 className="text-yellow-600 font-semibold text-lg tracking-wider">
                ABOUT US
              </h3>
              <div className="h-1 w-12 bg-yellow-500 mt-1"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              EAT WHAT MAKES YOU HAPPY
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Get the food that makes you drool! Ricky's Restaurant is one of the finest 
              restaurants to dine-in with the best combination of spices according to 
              your taste. Our professional staff is at your service with food delivery, 
              event catering, and other services.
            </p>

            {/* Order Now Button */}
            <div className="pt-4">
              <Link
                href="/contactus"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-md transition-colors duration-300 text-center w-full sm:w-auto"
              >
                Order Now
              </Link>
            </div>

            {/* Bottom Images Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {/* First bottom image */}
              <div className="relative h-32 md:h-40">
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-3.jpg"
                  alt="Food presentation"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              
              {/* Second bottom image */}
              <div className="relative h-32 md:h-40">
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/h2-sub-img-1024x720.jpg"
                  alt="Cooking process"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection