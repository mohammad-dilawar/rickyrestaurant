import Image from 'next/image'
import Link from 'next/link'

const cateringServices = [
  {
    id: 1,
    title: 'Wedding Catering',
    link: '/wedding-catering-in-dubai',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/4f70ac522dd448dc88c9f57887596a26.jpg'
  },
  {
    id: 2,
    title: 'Special Occasion',
    link: '/special-occasion-catering-in-dubai',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/catering-2.png'
  },
  {
    id: 3,
    title: 'Birthday Party Catering',
    link: '/birthday-party-catering-in-dubai',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/kidsparty.avif'
  },
  {
    id: 4,
    title: 'Kids Party Catering',
    link: '/kids-party-catering-in-dubai',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/kidsparty.avif'
  },
  {
    id: 5,
    title: 'Staff Party',
    link: '/staff-catering',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/event-detail-img-1.jpg'
  },
  {
    id: 6,
    title: 'Yacht Party Catering',
    link: '/yacht-party-catering',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Yacht-Catering.png'
  }
]

function CateringSection() {
  return (
    <section className="w-full bg-orange-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-yellow-600 font-semibold text-lg tracking-wider mb-2">
            CATERING
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Organising private & Corporate Parties
          </h2>
          
          {/* Decorative spacer line */}
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Are you planning a private party, birthday, small or large event, wedding or outdoor food catering? 
            Treat your friends and your clients with one of the best restaurant food available in Dubai. We do 
            more than catering services, we create a holiday atmosphere and deliver the freshest and finest food 
            to your place.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Any time of the day, promptly and at the highest quality, we cater the best for you. You can be rest 
            assured that your event and especially – food – is in the right hands. We administer everything right 
            on time, which is as important as the food itself.
          </p>
        </div>

        {/* Catering Services Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {cateringServices.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Catering Services Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cateringServices.slice(3, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Service Card Component
function ServiceCard({ service }: { service: typeof cateringServices[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-64 md:h-72 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
        
        {/* Title - Centered on image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h4 className="text-white text-xl md:text-2xl font-bold text-center px-4">
            {service.title}
          </h4>
        </div>
        
        {/* Link overlay */}
        <Link
          href={service.link}
          className="absolute inset-0 z-10"
          aria-label={service.title}
        />
      </div>
    </div>
  )
}

export default CateringSection