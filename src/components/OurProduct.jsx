import parse from 'html-react-parser';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import OrderButton from './Order';

const slides = [
  {
    title: '"eCash Smart Application: Aplikasi Kasir Pintar untuk Bisnis Lebih Efisien!"',
    description: `Tingkatkan sistem kasir Anda dengan eCash Smart Application 
                  solusi kasir berbasis Windows Desktop yang dirancang untuk memudahkan transaksi, mengelola inventori, 
                  dan mengoptimalkan penjualan bisnis Anda!`,
    image: "/images/metric.svg", // ganti dengan path sesuai
  },
  {
    title: '"Smart Code Maker: Generate Barcode & QR Code dalam Sekejap!"',
    description: `Butuh barcode atau QR code yang stylish dan profesional? 
                  <b>Smart Code Maker</b> solusinya! Dengan aplikasi ini, Anda bisa membuat 
                  barcode dan QR code dengan mudah, lalu menyimpannya sebagai gambar (JPG/PNG/PDF) 
                  untuk berbagai kebutuhan—mulai dari bisnis, event, hingga proyek pribadi.`,
    image: "/images/barcode.svg",
  },
  {
    title: 'Your Dream Website, Built to Perfection!',
    description: `Butuh website modern, cepat, dan powerful untuk bisnis atau proyek Anda? 
                  Saya menyediakan jasa <b>Fullstack & Front-End Web Development</b> 
                  dengan hasil premium dan performa optimal!`,
    image: "/images/website.svg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex gap-10 items-center justify-center px-6 py-12">
        {/* Kiri: Konten */}
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold mb-4">{slides[current].title}</h1>
          <p className="mb-6 text-2sm">{parse(slides[current].description)}</p>
          <div className="space-x-4">
            <button className="bg-white text-purple-600 hover:bg-pink-600 hover:text-white font-semibold px-5 py-2 rounded-full shadow"
            onClick={() => setOpen(true)}>
              Order Sekarang
            </button>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="hidden md:block">
          <img src={slides[current].image} alt="Hero Slide" className="w-[300px] drop-shadow-xl" />
        </div>
      </div>

      {/* Navigasi Panah */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-green-600 p-2 rounded-full shadow"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-green-600 p-2 rounded-full shadow"
      >
        <FaChevronRight />
      </button>

      {/* Indikator Slide */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
          />
        ))}
      </div>
      {open && <OrderButton onClose={() => setOpen(false)} />}      
    </div>
  );
}
