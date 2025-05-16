import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Popover } from '@headlessui/react';
import { UserContext } from '../context/UserContext';
import OrderButton from './Order';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { setScrollTarget } = useContext(UserContext);
  const navigate = useNavigate();

const handleMenuClick = (item) => {
  if (item === 'home') {
    navigate('/');
  }

  // Tambahan scroll ke bagian tertentu
  const lower = item.toLowerCase();
  if (['home', 'our product', 'features', 'tutorial', 'contact us'].includes(lower)) {
    navigate('/');
    setScrollTarget(lower); // simpan tujuan scroll
  }
};

  const menuItems = [
    {
      name: 'Home',
      // sub: ['Promosi', 'Favourite', 'Testimoni', 'Contact Us']
    },
    {
      name: 'Our Product',
      // sub: ['Transaksi Barang Masuk', 'Pembelian', 'Register Transaksi Barang Masuk', 'Register Pembelian', 'Riwayat Point Customer']
    },
    {
      name: 'Features',
      // sub: ['Stok Tersedia', 'History Barang']
    },
    {
      name: 'Prices',
      // sub: ['Stok Tersedia', 'History Barang']
    },
    {
      name: 'Tutorial',
      // sub: ['Laporan Item Penjualan', 'Laporan Omset Customer', 'Laporan History Point']
    },
    {
      name: 'Our Customer',
      // sub: ['Master Barang', 'Master Customer']
    },
    {
      name: 'Contact Us',
      // sub: ['Setting Aplikasi', 'Promosi', 'Testimoni', 'Favourite']
    },
  ];

  return (
    <>
      <header className="sticky top-0 flex items-center justify-between px-8 py-4 bg-white shadow z-50">
        <div className="flex items-center">
          <img src="/images/logo-ha.png" alt="Logo" className="h-10 mr-2" />
          <span className="text-xl font-bold text-purple-500 font-poppins_extra">
            HANINA<span className="text-pink-400 font-poppins_bold"> Aplikasi</span>
          </span>
        </div>

        <nav className="hidden md:flex space-x-6 text-pink-600">
          {menuItems.map((menu, idx) => (
            <Popover className="relative" key={idx}>
              <Popover.Button className="flex items-center hover:text-purple-600 font-medium focus:outline-none" 
                onClick={() => handleMenuClick(menu.name)}>
                {menu.name}
              </Popover.Button>
            </Popover>
          ))}
        </nav>
        
        <div className='flex items-center gap-3'>
          <>
          <div className="space-x-2">
            <button
              className="bg-purple-600 hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full text-white text-sm"
                onClick={() => setOpen(true)}>
              FLASH ORDER
            </button>
          </div>
          {open && <OrderButton onClose={() => setOpen(false)} />}
          </>
        </div>
      </header>
    </>
  );
}
