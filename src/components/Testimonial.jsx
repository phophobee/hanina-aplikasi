import React from 'react'

const testimonials = [
  {
    message: "Aplikasi ini sangat membantu proses jual beli di toko saya!",
    name: "Mba Bunga",
    role: "BUNGA MART - Jogoroto",
  },
  {
    message: "Fitur lengkap dan mudah digunakan bahkan oleh pemula.",
    name: "Ibu Lily",
    role: "Alfa Grosir - Kudu",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Apink",
    role: "APINK MART - Kudu",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Mas Adi",
    role: "Kios MADE - Bali",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Suharsono",
    role: "HIPPAM - Pasuruan",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Mas Ali",
    role: "MEKAR JAYA - Mojokerto",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Bp. Husen",
    role: "CAMAL Store - Tegal",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Anggraini",
    role: "Georgous Store - Solo",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Mba Ani",
    role: "Rumah Makan - Ambon",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Mba Cindi",
    role: "Kosmetik - Malang",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Mas Imam",
    role: "Toko Elektronik - Madura",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Mba Ida",
    role: "MEK Food - Kesamben",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Mba Dewi",
    role: "MS Glow - Mojoagung",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Mustofa",
    role: "Toko Spare Part - Malang",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Pradipta Kumara",
    role: "Kantin RS  - Slawi",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Rain Aisyah",
    role: "Toko Kelontong - Jawa Tengah",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Mas Adi",
    role: "Toko ABM - Sukabumi",
  },

].map((item) => ({
  ...item,
  image: `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=FF69B4&color=fff&size=128&rounded=true`,
}));

export default function Testimonial() {
  return (
    <section className="bg-[#F9FAFB] py-16 px-8 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-poppins_bold mb-10 text-pink-800">Our Customers</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white max-w-2xl p-6 rounded shadow-lg">
              <img src={item.image} alt={item.name} className="h-20 w-20 mx-auto mb-4 rounded-full" />
              <h4 className="text-purple-600 font-semibold">{item.name}</h4>
              <h5 className="text-purple-600 text-[12px]">{item.role}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
