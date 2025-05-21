import React, {useState} from 'react'

const testimonials = [
  {
    name: "Fitur eCash",
    videoUrl: "https://www.youtube.com/embed/uPABTAwy2G0"
  },
  {
    name: "Buat Koneksi ke Database",
    videoUrl: "https://www.youtube.com/embed/Kuh6PwJW8Lc"
  },
  {
    name: "Login Awal",
    videoUrl: "https://www.youtube.com/embed/8I2YWsVgbWY"
  },
  {
    name: "Input Data Barang Baru",
    videoUrl: "https://www.youtube.com/embed/3qNmw2NTrgY"
  },
  {
    name: "Edit Data Barang",
    videoUrl: "https://www.youtube.com/embed/nHoK0U4SyQU"
  },
  {
    name: "Barang Multi Satuan",
    videoUrl: "https://www.youtube.com/embed/g2izrpiMQtw" 
  },
  {
    name: "Backup Database",
    videoUrl: "https://www.youtube.com/embed/1l_fQ4WObEo"
  },
  {
    name: "Laba Penjualan",
    videoUrl: "https://www.youtube.com/embed/2gTiFhw0dZY" 
  },
  {
    name: "Master User",
    videoUrl: "https://www.youtube.com/embed/YRPD8oMaoEs"
  },
  {
    name: "Transaksi Tutup Kasir",
    videoUrl: "https://www.youtube.com/embed/9fdQcmBhkM0"
  },
  {
    name: "Transaksi Penjualan",
    videoUrl: "https://www.youtube.com/embed/CYQA7WVtaTI"
  },
  {
    name: "Transaksi Pembelian",
    videoUrl: "https://www.youtube.com/embed/L8croQL4_SI"
  },

]

export default function Testimonial() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <section className="bg-[#F9FAFB] py-16 px-8 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-pink-800">Tutorials</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              onClick={() => item.videoUrl && openModal(item.videoUrl)}
              className={`bg-pink-100 p-6 rounded-2xl shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer ${
                item.videoUrl ? 'hover:shadow-xl' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <h4 className="text-purple-600 font-semibold text-center">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-4 max-w-3xl w-full relative shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-700 hover:text-red-600 text-2xl font-bold"
            >
              &times;
            </button>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src={selectedVideo}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}