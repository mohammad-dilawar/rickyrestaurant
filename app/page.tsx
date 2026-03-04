import AboutSection from "@/components/AboutSection";
import CateringMenuSection from "@/components/CateringMenuSection";
import CateringSection from "@/components/CateringSection";
import DeliverySection from "@/components/DeliverySection";
import HeroSlider from "@/components/HeroSlider";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <main className="flex min-h-screen w-full flex-col">
   
      <section className="w-full">
        <HeroSlider />
      </section>

      <section className="w-full">
        <AboutSection />
      </section>

      <section className="w-full">
          <CateringSection/>
        
      </section>

      <section className="w-full">
        
        <div className="container mx-auto px-4 py-16 md:py-24">
          <CateringMenuSection />
        </div>
      </section>

     
      <section className="w-full bg-gray-900 text-white">

        <DeliverySection/>
        
      </section>

      
      <section className="w-full">
      
        <div className="container mx-auto px-4 py-16 md:py-24">
          <TestimonialsSection/>
        </div>
      </section>
    </main>
        
      
    </div>
  );
}
