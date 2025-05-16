import React, { useState } from 'react';

export default function OrderButton({ onClose }) {
  const [nama, setNama] = useState('');
  const [barang, setBarang] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handleSubmit = () => {
    const pesan = `Halo, saya ingin pesan:\nNama: ${nama}\nBarang: ${barang}\nKeterangan: ${keterangan}`;
    const nomorTujuan = '6285730034463'; // Ganti dengan nomor WA tujuan
    const url = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
    onClose(); // Tutup modal
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4 text-purple-600">Form Pemesanan</h2>
        <input
          type="text"
          placeholder="Nama Pemesan"
          className="w-full border p-2 rounded mb-3"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="text"
          placeholder="Barang yang dipesan"
          className="w-full border p-2 rounded mb-3"
          value={barang}
          onChange={(e) => setBarang(e.target.value)}
        />
        <input
          type="text"
          placeholder="Keterangan Pesanan"
          className="w-full border p-2 rounded mb-3"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-pink-600"
          >
            Konfirmasi & Kirim WA
          </button>
        </div>
      </div>
    </div>
  );
}
