"use client"

import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Utensils, Leaf, Award } from "lucide-react"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const featuredPies = [
    {
      name: "Pay de Limón Clásico",
      description: "Pay de limón con merengue suizo.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-06%20at%2013.42.08-T1kuqYU64j1g5GBQ7Q2QXm4ixQnpmQ.jpeg",
    },
    {
      name: "Pay de Limón Merengue",
      description: "Pay de limón con merengue suizo.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-06%20at%2013.18.56%20(1)-9xHqHWk4PnvVVlnBxGktGYvEZdeSWF.jpeg",
    },
    {
      name: "Pay de Limón Especial",
      description: "Pay de limón con merengue suizo.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-06%20at%2013.45.49-7ov5UuC3RJ4eRgy8iGatHNOYqDj7QO.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Barra de navegación */}
      <nav className="bg-green-500 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Limón Delicia</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-300 to-green-300 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
              Descubre la Magia de Nuestros Pies de Limón
            </h1>
            <p className="text-xl mb-6 text-green-700">
              Deliciosos pies de limon artesanales hechos con los limones más frescos y una receta familiar.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-06%20at%2013.18.55%20(2)-ZDNbF9o7R3CUFM3BGmF1cm0mHJrR0A.jpeg"
              alt="Ríquisimo - Pay de Limón"
              width={300}
              height={300}
              className="w-[300px] h-[300px] rounded-full border-4 border-green-500 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pays Destacados Carrusel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Presentacion de nuestros pies de limon.</h2>
          {mounted && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className="relative"
            >
              {featuredPies.map((pie, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                    <Image
                      src={pie.image || "/placeholder.svg"}
                      alt={pie.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-green-600">{pie.name}</h3>
                        <p className="text-gray-600 mb-4">{pie.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-next after:content-['']">
                <ChevronRight className="text-green-600 w-8 h-8" />
              </div>
              <div className="swiper-button-prev after:content-['']">
                <ChevronLeft className="text-green-600 w-8 h-8" />
              </div>
            </Swiper>
          )}
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-700">¿Por qué elegir nuestros pies de limon?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ingredientes Frescos",
                description: "Utilizamos solo los limones más frescos y los mejores ingredientes.",
                icon: Leaf,
              },
              {
                title: "Receta Artesanal",
                description: "Cada pay es elaborado a mano con nuestra receta familiar secreta.",
                icon: Utensils,
              },
              {
                title: "Sabor Premiado",
                description: "Ganadores del concurso local de pays por 3 años consecutivos.",
                icon: Award,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-yellow-100 rounded-full p-4 inline-block mb-4">
                  <item.icon className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-600">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "¡El mejor pie de limón que he probado! El equilibrio perfecto entre dulce y ácido. Definitivamente
                volveré por más."
              </p>
              <div className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20at%2000.54.08-1oJu6V7zaA5heKpSmrIakVETR9yM9M.jpeg"
                  alt="Eduardo Tambolas"
                  width={50}
                  height={50}
                  className="rounded-full mr-4 object-cover w-[50px] h-[50px]"
                />
                <div>
                  <h4 className="font-semibold text-green-600">Eduardo Tambolas</h4>
                  <p className="text-sm text-gray-500">Cliente Satisfecho</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "La textura y el sabor son increíbles. El merengue suizo es simplemente perfecto. Una experiencia
                única."
              </p>
              <div className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20at%2000.44.13-IBJoQ5yAiYANTSBhFWOWDAyer8vtCV.jpeg"
                  alt="Luis Herlan"
                  width={50}
                  height={50}
                  className="rounded-full mr-4 object-cover w-[50px] h-[50px]"
                />
                <div>
                  <h4 className="font-semibold text-green-600">Luis Herlan</h4>
                  <p className="text-sm text-gray-500">Cliente Satisfecho</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Un sabor que te transporta a la frescura del limón. La presentación y el sabor son excepcionales."
              </p>
              <div className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-06%20at%2013.54.27-fXo25AkOXR53Yrvyx4JuC9MbtIdwGh.jpeg"
                  alt="Natali Deysi"
                  width={50}
                  height={50}
                  className="rounded-full mr-4 object-cover w-[50px] h-[50px]"
                />
                <div>
                  <h4 className="font-semibold text-green-600">Natali Deysi</h4>
                  <p className="text-sm text-gray-500">Cliente Satisfecha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Limón Delicia</h3>
              <p>Hechos con mucho amor para todos ustedes.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
              <p>
                <a 
                  href="https://www.instagram.com/mini_pies_de_limon?igsh=bDIwMjNpcHloYXBl" 
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
              <p>
                <a 
                  href="https://www.tiktok.com/@mini_pies_de_limon?_t=ZM-8thRyRUwCRS&_r=1"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 Limón Delicia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

