import Image from 'next/image'
import Link from 'next/link'

// Types/Interfaces
interface CateringItem {
  id: number
  title: string
  description?: string
  image: string
  link: string
  buttonText?: string
}

interface CateringHeaderProps {
  // Header props
  subtitle?: string
  title?: string
  description?: string | React.ReactNode
  
  // Catering items props
  items?: CateringItem[]
  
  // Styling props
  backgroundColor?: string
  textColor?: string
  accentColor?: string
  
  // Layout props
  columns?: 1 | 2 | 3 | 4
  showSpacer?: boolean
  className?: string
}

// Default props
const defaultItems: CateringItem[] = [
  {
    id: 1,
    title: 'Staff Parties',
    description: 'Corporate staff party catering',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/seminarcatering.avif',
    link: '/staff-catering',
    buttonText: 'Learn More'
  },
  {
    id: 2,
    title: 'Conferences & Seminars',
    description: 'Professional conference catering',
    image: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/catering-2-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png',
    link: '/business-party-catering',
    buttonText: 'Learn More'
  }
]

const defaultDescription = (
  <>
    <p>Ricky's Restaurant Catering is renowned as one of the premier corporate catering services providers in Dubai. With a wealth of experience serving clients ranging from multinational corporations to small and medium enterprises, we offer unparalleled professionalism.</p>
    <p className="mt-4">Our corporate catering services are distinguished by our extensive menu options, expert staff, and top-of-the-line equipment capable of accommodating any request. Whether it's simple sandwich platters, hot staff lunches, or exquisite 5-star dining in UAE boardrooms, we deliver with excellence. Our highly trained and experienced teams of corporate event caterers, strategically positioned across the region, are equipped to swiftly respond to any catering service demand, regardless of scale. Custom catering menus are tailored to meet the needs of camp or compound populations as required.</p>
    <p className="mt-4">Ricky's Restaurant Catering's stellar reputation for delivering quality food and professional corporate catering services reflects our unwavering commitment to maintaining exceptional client relationships.</p>
  </>
)

export default function CateringHeader({
  subtitle = 'CATERING',
  title = 'Organizing Corporate Catering in Dubai',
  description = defaultDescription,
  items = defaultItems,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  accentColor = 'yellow',
  columns = 2,
  showSpacer = true,
  className = ''
}: CateringHeaderProps) {
  
  // Determine grid columns based on props
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  const accentColorClasses = {
    yellow: {
      text: 'text-yellow-600',
      bg: 'bg-yellow-500',
      hover: 'hover:bg-yellow-600',
      light: 'bg-yellow-50'
    },
    blue: {
      text: 'text-blue-600',
      bg: 'bg-blue-500',
      hover: 'hover:bg-blue-600',
      light: 'bg-blue-50'
    },
    green: {
      text: 'text-green-600',
      bg: 'bg-green-500',
      hover: 'hover:bg-green-600',
      light: 'bg-green-50'
    },
    red: {
      text: 'text-red-600',
      bg: 'bg-red-500',
      hover: 'hover:bg-red-600',
      light: 'bg-red-50'
    }
  }

  const accent = accentColorClasses[accentColor as keyof typeof accentColorClasses] || accentColorClasses.yellow

  return (
    <section className={`w-full ${backgroundColor} py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {/* Subtitle */}
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className={`w-12 h-0.5 ${accent.bg}`}></div>
            <span className={`${accent.text} font-semibold text-sm md:text-base tracking-wider uppercase`}>
              {subtitle}
            </span>
            <div className={`w-12 h-0.5 ${accent.bg}`}></div>
          </div>
          
          {/* Title */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-4`}>
            {title}
          </h2>
          
          {/* Decorative spacer */}
          {showSpacer && (
            <div className="relative flex justify-center">
              <div className={`w-20 h-1 ${accent.bg}`}></div>
              <div className={`absolute -top-1 w-2 h-2 rounded-full ${accent.bg} animate-pulse`}></div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className={`prose prose-lg max-w-none ${textColor === 'text-white' ? 'prose-invert' : ''}`}>
            {typeof description === 'string' ? (
              <p className="text-gray-600 leading-relaxed">{description}</p>
            ) : (
              description
            )}
          </div>
        </div>

        {/* Catering Items Grid */}
        <div className={`grid ${gridCols[columns]} gap-6 lg:gap-8`}>
          {items.map((item) => (
            <CateringCard 
              key={item.id} 
              item={item} 
              accent={accent}
              textColor={textColor}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/corporate-catering"
            className={`inline-flex items-center ${accent.text} hover:${accent.text} font-semibold transition-colors group`}
          >
            <span>View All Corporate Services</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Individual Catering Card Component
function CateringCard({ item, accent, textColor }: { 
  item: CateringItem; 
  accent: any;
  textColor: string;
}) {
  return (
    <div className="group relative bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-xl font-bold ${textColor} mb-2`}>
          {item.title}
        </h3>
        
        {item.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {item.description}
          </p>
        )}
        
        <Link
          href={item.link}
          className={`inline-flex items-center ${accent.text} hover:${accent.text} font-medium text-sm group/link`}
        >
          <span>{item.buttonText || 'Learn More'}</span>
          <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Decorative accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${accent.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
    </div>
  )
}