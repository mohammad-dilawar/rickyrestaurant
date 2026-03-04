'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md'
// import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

import TestimonialsSection from '@/components/TestimonialsSection'
import ContactForm from '@/components/ContactForm'

function InquirySection() {


  const contactInfo = [
    {
      icon: MdPhone,
      title: 'Phone',
      details: ['+971 54 339 2616', '+971 4 514 7066'],
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: MdEmail,
      title: 'Email',
      details: ['director@rickyrestaurants.com'],
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: MdLocationOn,
      title: 'Location',
      details: ['Shop No. 5, Marina Pearl View', 'Hotel Apt., Dubai Marina'],
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: MdAccessTime,
      title: 'Working Hours',
      details: ['Mon-Sun: 11:00 AM - 11:00 PM'],
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ]

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white  relative overflow-hidden">
            <section className="relative h-[300px] sm:h-[200px] lg:h-[300px] w-full overflow-hidden mb-20">
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
                   Book Your Event
                  </h1>
                  
                
                </div>
              </div>
        
           
        
            </section>
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            
           Book Your  <span className="text-yellow-600">Event</span> With Us
          </h2>
          <div className="flex justify-center space-x-1">
            <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-1 bg-yellow-300 rounded-full"></div>
          </div>
         
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group"
            >
              <div className={`${item.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">{detail}</p>
              ))}
            </div>
          ))}
        </div>

     
<ContactForm formheading="Catering Inquiry"
  showGuests={false} />
    
      </div>
      <TestimonialsSection/>
    </section>
  )
}

export default InquirySection