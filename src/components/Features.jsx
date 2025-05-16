import { Dialog } from '@headlessui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';
import parse from 'html-react-parser';

const featureItems = [
  {
    title: "Master Data",
    description: `<i><b>Master Data</b></i> terdiri dari 3 sub menu yaitu : <i>Master Barang, 
                  Master Customer, Master Supplier</i>`,
    images: ["/images/m-barang.jpg", "/images/m-customer.jpg", "/images/m-supplier.jpg"],
  },
  {
    title: "Pembelian",
    description: `<i><b>Pembelian</b></i> terdiri dari 6 sub menu yaitu : <i>Pembelian, Retur Pembelian, 
                  Register Pembelian, Register Retur Pembelian, Laporan Item Pembelian, Laporan Omset Supplier</i>`,
    images: ["/images/beli.jpg", "/images/r-beli.jpg", "/images/d-beli.jpg", "/images/dr-beli.jpg", "/images/l-beli.jpg"],
  },
  {
    title: "Penjualan",
    description: `<i><b>Penjualan</b></i> terdiri dari 9 sub menu yaitu : <i>Penjualan, Tutup Kasir, 
                  Retur Penjualan, Register Penjualan, Register Tutup Kasir, Register Retur Penjualan, 
                  Laporan Item Penjualan, Laporan Omset Customer, Cetak Price Tag</i>`,
    images: ["/images/jual.jpg", "/images/t-kasir.jpg", "/images/r-jual.jpg", "/images/d-jual.jpg", 
              "/images/d-kasir.jpg", "/images/dr-jual.jpg", "/images/l-jual.jpg", "/images/price-tag.jpg"],
  },
  {
    title: "Gudang",
    description: `<i><b>Gudang</b></i> terdiri dari 4 sub menu yaitu : <i>Stok Opname, Register Stok Opname, 
                  Laporan Stok Tersedia, History Barang</i>`,
    images: ["/images/opname.jpg", "/images/d-opname.jpg", "/images/l-stok.jpg", "/images/l-history.jpg"],
  },
  {
    title: "Keuangan",
    description: `<i><b>Keuangan</b></i> terdiri dari 8 sub menu yaitu : <i>Penerimaan Kas, Pengeluran Kas, 
                  Terima Piutang, Bayar Hutang, Register Penerimaan Kas, Register Pengeluaran Kas, 
                  Register Terima Piutang, Register Bayar Hutang</i>`,
    images: ["/images/t-kas.jpg", "/images/k-kas.jpg", "/images/b-hutang.jpg", "/images/t-piutang.jpg"],
  },
  {
    title: "Laporan",
    description: `<i><b>Laporan</b></i> Jenis laporan pada aplikasi ini ada 4 yaitu  : <i>Laporan Arus Kas, 
                  Laporan Hutang Supplier, Laporan Piutang Customer, Laporan Laba Penjualan</i>`,
    images: ["/images/la-kas.jpg", "/images/l-laba.jpg","/images/l-hutang.jpg","/images/l-piutang.jpg"],
  },
];

export default function Slider() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const openDialog = (images, index) => {
    setCurrentImages(images);
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-poppins_bold text-pink-800 mb-8">eCash Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-40 mx-auto mb-4 object-contain cursor-pointer"
                onClick={() => openDialog(item.images, 0)}
              />
              <h3 className="text-xl text-purple-600 font-semibold mb-2">{item.title}</h3>
              <p className="text-pink-500">{parse(item.description)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-4xl w-full rounded-lg overflow-hidden">
            <Carousel
              selectedItem={startIndex}
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              dynamicHeight={false}
            >
              {currentImages.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`Gambar ${idx + 1}`} />
                </div>
              ))}
            </Carousel>
            <div className="text-right p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
              >
                Tutup
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
