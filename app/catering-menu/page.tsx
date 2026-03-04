import CateringMenuSection from '@/components/CateringMenuSection'
import ContactForm from '@/components/ContactForm';
import Image from 'next/image'
import Link from 'next/link'
const grillFeastItems = [
  {
    id: 101,
    name: "Ceaser Salad",
    description: "Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and homemade croutons",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad.jpg",
    price: "12.99"
  },
  {
    id: 102,
    name: "Hummus",
    description: "Smooth and savory chickpea hummus, drizzled with extra virgin olive oil, and served with warm pita bread",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/hummus-index-6463bace4bba5.jpeg",
    price: "8.99"
  },
  {
    id: 103,
    name: "Tahina",
    description: "Rich and velvety tahini sauce made with sesame paste, garlic, lemon juice, and a hint of olive oil",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina.jpg",
    price: "7.99"
  },
  {
    id: 104,
    name: "Mutton Kofta (Seekh Kabab)",
    description: "Juicy mutton seekh kebabs, expertly seasoned with aromatic spices and grilled to perfection",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta.jpg",
    price: "16.99"
  },
  {
    id: 105,
    name: "Chicken Skewers",
    description: "Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection, served with your choice of dipping sauce",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5.jpg",
    price: "14.99"
  },
  {
    id: 106,
    name: "Grilled Chicken Bone",
    description: "Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor, served with your choice of delectable sides",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Grilled-Chicken-Thighs-Square-new-480x270.jpeg",
    price: "18.99"
  },
  {
    id: 107,
    name: "Pasta (White or Pink)",
    description: "Al dente pasta served with your choice of creamy white sauce or tangy pink sauce, topped with freshly grated Parmesan cheese",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/PinkSaucePasta02.jpg",
    price: "15.99"
  },
  {
    id: 108,
    name: "Seasoned Rice",
    description: "Fluffy seasoned rice, infused with aromatic herbs and spices, offering a fragrant and flavorful complement to any dish",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/seasoned-rice.jpg",
    price: "6.99"
  },
  {
    id: 109,
    name: "Potato Wedges",
    description: "Crispy potato wedges or golden French fries, seasoned to perfection and served with your choice of dipping sauce",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/potatow.jpg",
    price: "5.99"
  },
  {
    id: 110,
    name: "French Fries",
    description: "Golden French fries, perfectly crispy on the outside and fluffy on the inside, served with your favorite dipping sauce",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/frenchfries.jpeg",
    price: "4.99"
  }
];
const grillParadiseItems = [
  {
    id: 201,
    name: "Ceaser Salad",
    description: "Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and homemade croutons",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad.jpg",
    price: "12.99"
  },
  {
    id: 202,
    name: "Hummus",
    description: "Smooth and savory chickpea hummus, drizzled with extra virgin olive oil, and served with warm pita bread",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/hummus-index-6463bace4bba5.jpeg",
    price: "8.99"
  },
  {
    id: 203,
    name: "Tahina",
    description: "Rich and velvety tahini sauce made with sesame paste, garlic, lemon juice, and a hint of olive oil",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina.jpg",
    price: "7.99"
  },
  {
    id: 204,
    name: "Mutton Kofta (Seekh Kabab)",
    description: "Juicy mutton seekh kebabs, expertly seasoned with aromatic spices and grilled to perfection",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta.jpg",
    price: "16.99"
  },
  {
    id: 205,
    name: "Chicken Skewers",
    description: "Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection, served with your choice of dipping sauce",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5.jpg",
    price: "14.99"
  },
  {
    id: 206,
    name: "Grilled Chicken Bone",
    description: "Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor, served with your choice of delectable sides",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Grilled-Chicken-Thighs-Square-new-480x270.jpeg",
    price: "18.99"
  },
  {
    id: 207,
    name: "Pasta (White or Pink)",
    description: "Al dente pasta served with your choice of creamy white sauce or tangy pink sauce, topped with freshly grated Parmesan cheese",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/PinkSaucePasta02.jpg",
    price: "15.99"
  },
  {
    id: 208,
    name: "Seasoned Rice",
    description: "Fluffy seasoned rice, infused with aromatic herbs and spices, offering a fragrant and flavorful complement to any dish",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/seasoned-rice.jpg",
    price: "6.99"
  },
  {
    id: 209,
    name: "Potato Wedges or French Fries",
    description: "Crispy potato wedges or golden French fries, seasoned to perfection and served with your choice of dipping sauce",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/potatow.jpg",
    price: "5.99"
  },
  {
    id: 210,
    name: "Grilled Salmon and Seabass",
    description: "Grilled salmon and seabass fillets, delicately seasoned and cooked to perfection, served with a side of your choice for a delectable seafood experience",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Grilled-Salmon-and-Seabass.jpg",
    price: "24.99"
  }
];

const grillExtravaganzaItems = [
  {
    id: 301,
    name: "Ceaser Salad",
    description: "Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and homemade croutons",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad.jpg",
    price: "12.99"
  },
  {
    id: 302,
    name: "Hummus",
    description: "Smooth and savory chickpea hummus, drizzled with extra virgin olive oil, and served with warm pita bread",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/hummus-index-6463bace4bba5.jpeg",
    price: "8.99"
  },
  {
    id: 303,
    name: "Tahina",
    description: "Rich and velvety tahini sauce made with sesame paste, garlic, lemon juice, and a hint of olive oil",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina.jpg",
    price: "7.99"
  },
  {
    id: 304,
    name: "Mutton Kofta (Seekh Kabab)",
    description: "Juicy mutton seekh kebabs, expertly seasoned with aromatic spices and grilled to perfection",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta.jpg",
    price: "16.99"
  },
  {
    id: 305,
    name: "Chicken Skewers",
    description: "Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection, served with your choice of dipping sauce",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5.jpg",
    price: "14.99"
  },
  {
    id: 306,
    name: "Slightly Fried Calamari",
    description: "Tender calamari rings lightly fried to crispy perfection, served with zesty marinara sauce for a delightful appetizer or snack",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/fried-calamari-recipe-snippet.jpg",
    price: "12.99"
  },
  {
    id: 307,
    name: "Grilled Tiger Prawns",
    description: "Juicy grilled tiger prawns, seasoned to perfection and served with a side of your choice for a succulent seafood delight",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Grilled-Tiger-Prawns.jpg",
    price: "22.99"
  },
  {
    id: 308,
    name: "Grilled Chicken Bone",
    description: "Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor, served with your choice of delectable sides",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Grilled-Chicken-Thighs-Square-new-480x270.jpeg",
    price: "18.99"
  },
  {
    id: 309,
    name: "Pasta (White or Pink)",
    description: "Al dente pasta served with your choice of creamy white sauce or tangy pink sauce, topped with freshly grated Parmesan cheese",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/PinkSaucePasta02.jpg",
    price: "15.99"
  },
  {
    id: 310,
    name: "Seasoned Rice",
    description: "Fluffy seasoned rice, infused with aromatic herbs and spices, offering a fragrant and flavorful complement to any dish",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/seasoned-rice.jpg",
    price: "6.99"
  },
  {
    id: 311,
    name: "Potato Wedges or French Fries",
    description: "Crispy potato wedges or golden French fries, seasoned to perfection and served with your choice of dipping sauce",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/potatow.jpg",
    price: "5.99"
  },
  {
    id: 312,
    name: "Grilled Salmon and Seabass",
    description: "Grilled salmon and seabass fillets, delicately seasoned and cooked to perfection, served with a side of your choice for a delectable seafood experience",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Grilled-Salmon-and-Seabass.jpg",
    price: "24.99"
  },
  {
    id: 313,
    name: "Shrimp Egg Fried Rice",
    description: "Flavorful shrimp fried rice, cooked to perfection with fluffy grains, succulent shrimp, and a medley of fresh vegetables, bound together with scrambled eggs",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Shrimp-EGG-Fried-Rice.jpg",
    price: "16.99"
  }
];
const grillGrillFeast = [
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
export const fullMenuData = [
  {
    id: 1,
    category: "RICKYS GRILL FEAST",
    items: grillFeastItems
  },
  {
    id: 2,
    category: "RICKYS GRILL PARADISE",
    items: grillParadiseItems
  },
    {
    id: 3,
    category: "RICKYS EXTRAVANGANZA",
    items: grillExtravaganzaItems 
  }

]
function MenuItems() {

    
   
  return (
    <section className="w-full bg-white">
           <section className="relative h-[200px] sm:h-[200px] lg:h-[200px] w-full overflow-hidden ">
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
            Menu Items
          </h1>
          
        
        </div>
      </div>

   

    </section>
<div className="container mx-auto px-4 py-16 md:py-24">
{fullMenuData.map((category, index) => (
  <CateringMenuSection 
    key={category.id || index}
    menuItems={category.items}
    title={category.category}
    subtitle="Menu"
    showButton={false}
    buttonText="View Summer Menu"
    buttonLink="/summer-specials"
    columns={2}
  />
  
))}

     <ContactForm formheading="Make a Reservation" />
        
     </div> 

    </section>
  )
}

export default MenuItems