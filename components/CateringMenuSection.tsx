import Image from 'next/image'
import Link from 'next/link'

// Default menu items (optional)
const defaultMenuItems = [
  {
    id: 101,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and homemade croutons',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad.jpg',
    price: '$12.99'
  },
  {
    id: 102,
    name: 'Hummus',
    description: 'Smooth and savory chickpea hummus, drizzled with extra virgin olive oil, served with warm pita bread',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/hummus-index-6463bace4bba5.jpeg',
    price: '$8.99'
  },
  {
    id: 103,
    name: 'Tahina',
    description: 'Rich and velvety tahini sauce made with sesame paste, garlic, lemon juice, and a hint of olive oil',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina.jpg',
    price: '$7.99'
  },
  {
    id: 104,
    name: 'Mutton Kofta (Seekh Kabab)',
    description: 'Juicy mutton seekh kebabs, expertly seasoned with aromatic spices and grilled to perfection',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta.jpg',
    price: '$16.99'
  },
  {
    id: 105,
    name: 'Chicken Skewers',
    description: 'Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5.jpg',
    price: '$14.99'
  },
  {
    id: 106,
    name: 'Grilled Chicken Bone',
    description: 'Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Grilled-Chicken-Thighs-Square-new-480x270.jpeg',
    price: '$18.99'
  },
  {
    id: 107,
    name: 'Pasta (White or Pink)',
    description: 'Al dente pasta with creamy white sauce or tangy pink sauce, topped with fresh Parmesan',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/PinkSaucePasta02.jpg',
    price: '$15.99'
  },
  {
    id: 108,
    name: 'Seasoned Rice',
    description: 'Fluffy seasoned rice, infused with aromatic herbs and spices',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/seasoned-rice.jpg',
    price: '$6.99'
  },
  {
    id: 109,
    name: 'Potato Wedges',
    description: 'Crispy potato wedges seasoned to perfection with your choice of dipping sauce',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/potatow.jpg',
    price: '$5.99'
  },
  {
    id: 110,
    name: 'French Fries',
    description: 'Golden French fries, perfectly crispy on the outside and fluffy on the inside',
    image: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/frenchfries.jpeg',
    price: '$4.99'
  }
];

// Props interface
interface CateringMenuSectionProps {
  menuItems?: typeof defaultMenuItems
  title?: string
  subtitle?: string
  showButton?: boolean
  buttonText?: string
  buttonLink?: string
  columns?: 1 | 2 | 3
}

function CateringMenuSection({ 
  menuItems = defaultMenuItems,
  title = "Grill Feast",
  subtitle = "Catering Menu",
  showButton = true,
  buttonText = "View Full Catering Menu",
  buttonLink = "/catering-menu",
  columns = 2
}: CateringMenuSectionProps) {
  
  // Split menu items into columns based on columns prop
  const getColumnItems = () => {
    if (columns === 1) {
      return [menuItems] // Single column
    }
    
    const midIndex = Math.ceil(menuItems.length / 2)
    if (columns === 2) {
      return [
        menuItems.slice(0, midIndex),
        menuItems.slice(midIndex)
      ]
    }
    
    // 3 columns
    const thirdIndex = Math.ceil(menuItems.length / 3)
    const twoThirdsIndex = thirdIndex * 2
    return [
      menuItems.slice(0, thirdIndex),
      menuItems.slice(thirdIndex, twoThirdsIndex),
      menuItems.slice(twoThirdsIndex)
    ]
  }

  const columnItems = getColumnItems()

  // Determine grid columns based on props
  const gridColsClass = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3'
  }[columns]

  return (
    <section className="w-full bg-gradient-to-b from-amber-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Decorative top line */}
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-12 h-0.5 bg-yellow-500"></div>
            <span className="text-yellow-600 font-semibold text-sm md:text-base tracking-[0.3em] uppercase">
              {subtitle}
            </span>
            <div className="w-12 h-0.5 bg-yellow-500"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          {/* Decorative element */}
          <div className="relative flex justify-center">
            <div className="w-20 h-1 bg-yellow-500"></div>
            <div className="absolute -top-1 w-2 h-2 rounded-full bg-yellow-500"></div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className={`grid grid-cols-1 ${gridColsClass} gap-8 lg:gap-12`}>
          {columnItems.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-6">
              {column.map((item, itemIndex) => (
                <MenuItemCard 
                  key={item.id} 
                  item={item} 
                  index={itemIndex + (columnIndex * Math.ceil(menuItems.length / columns))} 
                />
              ))}
            </div>
          ))}
        </div>

        {/* Call to Action - Conditionally rendered */}
        {showButton && (
          <div className="text-center mt-12 md:mt-16">
            <Link
              href={buttonLink}
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>{buttonText}</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

// Individual Menu Item Card
function MenuItemCard({ item, index }: { item: any; index: number }) {
  return (
    <div 
      className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden shadow-md">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 96px, 112px"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 truncate">
            {item.name}
          </h3>
          <span className="ml-2 text-lg font-bold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
            {item.price}
          </span>
        </div>
        
        {/* Dotted line */}
        <div className="relative mb-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-dotted border-gray-300"></div>
          </div>
        </div>
        
        <p className="text-sm md:text-base text-gray-600 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default CateringMenuSection