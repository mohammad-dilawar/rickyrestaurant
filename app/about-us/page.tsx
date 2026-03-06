import Image from 'next/image'
import Link from 'next/link'

function AboutUsSection() {

    
   
  return (
    <section className="w-full bg-white">
           <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden mb-20">
      {/* Background Image Slider */}
    
          <div className="relative h-full w-full">
            <Image
              src="https://rickyrestaurants.com/wp-content/uploads/2024/05/RICKYS-RESTAURANT.jpg"
              alt="Restaurant ambiance"
              fill
              className="object-cover"
              sizes="100vw"
            />
          {/* Dark overlay with gradient and subtle blur */}
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-[2px]" />
          </div>
       

      {/* Text Content - Always on top of slider */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
             <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Welcome Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            About Us
          </h1>
          
        
        </div>
      </div>

   

    </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Ricky's Restaurant
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700">
            
            <div className="bg-amber-50 p-8 rounded-2xl italic text-xl text-gray-800 border-l-4 border-yellow-500">
              "Welcome to Ricky's Restaurant, where culinary excellence meets unparalleled service. 
              Situated in the vibrant heart of Dubai, Ricky's Restaurant is renowned for its exquisite 
              dining experiences, offering a diverse menu that caters to both local and international palates."
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Culinary Philosophy</h3>
              <p className="leading-relaxed">
                At Ricky's Restaurant, we believe that great food starts with the finest ingredients. 
                Our chefs are dedicated to sourcing the best produce, meats, and seafood from trusted 
                suppliers. This commitment to quality ensures that every dish is prepared with care 
                and precision. Whether you're indulging in our signature dishes or exploring new flavors, 
                you can expect a meal that is both delicious and nourishing.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diverse Menu</h3>
              <p className="leading-relaxed">
                Our menu is a celebration of culinary diversity, offering a wide range of options to 
                suit every taste. From rich, aromatic Asian delicacies and vibrant Middle Eastern 
                specialties to classic Mediterranean fare and innovative international cuisine, we have 
                something for everyone. Each dish is crafted to perfection, ensuring that your dining 
                experience is nothing short of extraordinary.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Exceptional Catering</h4>
                <p className="text-gray-700">
                  Whether planning a corporate event, wedding, or private party, our catering team brings 
                  the same level of excellence to your special occasions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Our Team</h4>
                <p className="text-gray-700">
                  From talented chefs to friendly staff, everyone is dedicated to making your visit 
                  enjoyable with warm hospitality.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commitment to Excellence</h3>
              <p className="leading-relaxed">
                We are committed to maintaining the highest standards in everything we do. From the 
                freshness of our ingredients to the elegance of our presentation and the attentiveness 
                of our service, we aim to exceed your expectations every time you visit.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Us Today</h3>
              <p className="text-gray-700 mb-6">
                Join us at Ricky's Restaurant and discover why we are a favorite among Dubai's dining 
                enthusiasts. Whether for a casual meal, romantic dinner, or special celebration, we 
                look forward to serving you soon!
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
