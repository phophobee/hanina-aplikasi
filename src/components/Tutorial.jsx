import parse from 'html-react-parser';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Dialog } from '@headlessui/react';

const slides = [
  {
    title: '"eCash Smart Application: Fitur"',
    description: `Ini adalah video yang menampilkan fitur-fitur yang dimiliki oleh aplikasi eCash.`,
    video: "/videos/demo.mp4", // Simpan video di public/videos/
  },
  {
    title: '"Master Barang: Fitur Pembuatan Data Barang"',
    description: `Video tutorial pembuatan data barang secara umum`,
    video: "/videos/m-barang.mp4",
  },
  {
    title: 'Pembelian: Fitur Transaksi Pembelian',
    description: `Video tutorial transaksi pembelian barang dari supplier.`,
    video: "/videos/pembelian.mp4",
  },
  {
    title: 'Laporan: Laporan Laba Penjualan',
    description: `Video tutorial untuk menampilkan laporan laba penjualan.`,
    video: "/videos/l-laba.mp4",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="relative bg-[#F9FAFB] text-pink-800 overflow-hidden">
        <h2 className="text-3xl font-poppins_bold text-pink-800 mb-6 text-center">Tutorials</h2>
      </div>

      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex gap-10 items-center justify-center px-6 py-12 flex-wrap md:flex-nowrap">
          {/* Kiri: Konten */}
          <div className="max-w-xl hidden md:block">
            <h1 className="text-2xl font-bold mb-4">{slides[current].title}</h1>
            <p className="mb-6 text-sm">{parse(slides[current].description)}</p>
          </div>

          {/* Kanan: Video */}
          <div className="block cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <video
              src={slides[current].video}
              className="w-[300px] rounded-xl shadow-lg"
              controls={false}
              muted
              loop
            />
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
              className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-white/50"} transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      {/* Modal Video */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-4xl w-full bg-black rounded-lg overflow-hidden">
            <video
              src={slides[current].video}
              controls
              className="w-full h-auto"
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
