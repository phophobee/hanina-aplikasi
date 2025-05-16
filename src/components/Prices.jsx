import React, { useState, useContext } from 'react';
import parse from 'html-react-parser';
import OrderButton from './Order';

const prices = [
  {
    message: `Full Features<br>Pendampingan Sampai Mahir<br>Support Semua Windows
              <br>Multi Satuan Ready<br>Multi User Ready<br>1 License untuk selamanya
              <br><br><b><i>Rp. 700.000 / Pc / License</b></i>`,
    name: "eCash APlikasi Kasir",
    role: "ENTERPRISE",
    price: "Order Sekarang",
    action: "modal"
  },
  {
    message: `Trial Features<br>Tanpa Pendampingan<br>Support Semua Windows
              <br>Multi Satuan Ready<br>Multi User Ready<br>Berjangka Waktu
              <br><br><b><i>GRATIS</b></i>`,
    name: "eCash Aplikasi Kasir",
    role: "EXPRESS",
    price: "Download Gratis",
    action: "link",
    url: "https://drive.google.com/file/d/1z6PCi4vW-CNXVtpZBBDpPg-9JqRDfKK_/view?usp=drive_link"
  },
  {
    message: `e-Book Islami<br>Video Edukasi Islami<br>Worksheet Islami
              <br>Frame Canva Islami<br>Canva Template Islami<br>Islami Template
              <br><br><b><i>Berbayar</b></i>`,
    name: "Hanina Aplikasi",
    role: "DIGITAL PRODUCT",
    price: "LYNK.ID",
    action: "link",
    url:  "https://lynk.id/haninaaplikasi"
  },
]

export default function Prices() {
  const [open, setOpen] = useState(false);
  
  const handleButtonClick = (item) => {
    if (item.action === "modal") {
      setOpen(true);
    } else if (item.action === "link" && item.url) {
      window.open(item.url, '_blank');
    }
  };
  
  return (
    <section className="bg-[#F9FAFB] py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-poppins_bold mb-10 text-pink-800">Our Prices</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {prices.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl shadow-xl">
              <h2 className="text-white font-poppins_extra">{item.name}</h2>
              <h2 className="text-white font-poppins_extra mb-6">{item.role}</h2>
              <p className="text-white mb-6">{parse(item.message)}</p>
            <button
              className="bg-white hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full text-purple-600 text-sm"
              onClick={() => handleButtonClick(item)}
            >
              {item.price}
            </button>
            {open && <OrderButton onClose={() => setOpen(false)} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
