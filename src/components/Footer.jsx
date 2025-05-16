import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 max-w-2xl w-[30%]">
          <p className="font-bold text-lg">Hanina Aplikasi</p>
          <p className="text-sm">© 2025 Hanina Aplikasi. All rights reserved.</p>
        </div>
        <div className="flex md:flex-row flex-col space-x-6 max-w-4xl md:w-[70%] md:gap-5">
            <div className='w-[30%] max-w-2xl p-3'>
              <p className='font-bold text-lg'>About Us</p>
              <p className='text-sm'>Kami hadir sejak tahun 2023, dan kami bergerak dalam bidang jasa pengembangan aplikasi desktop ataupun web based</p>
            </div>
            <div className='w-[30%] max-w-2xl p-3'>
              <p className='font-bold text-lg'>Contact Us</p>
              <p className='text-sm'>IG: @haninaaplikasi</p>
              <p className='text-sm'>TikTok: @haninaaplikasi</p>
              <p className='text-sm'>Youtube: @haninaaplikasi</p>
              <p className='text-sm'>WA: +6285730034437</p>
              <p className='text-sm'>Lynk: <a className='text-yellow-300' href="https://lynk.id/haninaaplikasi" target='blank' >Lynk.ID</a></p>
            </div>
            <div className='w-[30%] max-w-2xl p-3'>
              <p className='font-bold text-lg'>Address</p>
              <p className='text-sm'>Jln. Hasyim Asy'ari / Parimono Gg. I No. 4 RT. 4 RW. 3 Kel. Plandi Kec. Jombang Kab. Jombang - Jawa Timur</p>
            </div>
        </div>
      </div>
    </footer>
  )
}