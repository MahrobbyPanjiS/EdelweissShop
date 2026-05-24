import React from 'react';

/**
 * Komponen Footer (Bagian Bawah Halaman)
 * Menyajikan tautan legalitas, bantuan, navigasi utama, dan status server.
 * Komponen ini dibagikan (shared) ke seluruh halaman utama.
 */
export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant mt-auto font-body-base z-10 relative">
      <div className="max-w-[1280px] mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-xl">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-sm mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Lkq2cFU0deshtk1ZzXpd2evl6oCI0yUxJ5Zmyo6DV3UWwdn45bsry7tvyKqkAQnFCSoKLMuWgrkOFQnkMr5IiW9x-5JNQ6Ob82MjXC9C-3Jiom38VZDSy4bz4oB_lLivkLw1fHxHOOFueJ9kQgVe9aeNrrqdcUzgc7GOjTnrWy6IRZYwWCNOLmel1tVh_wnEeFqR67gdKjP1U92zXv6VhLJ1_UrkekQTgDH1KGYSiG-VjLapHDrkXAhsg9v6gfnCEQEZM4UDXyO1" alt="Edelweiss Craft Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-primary tracking-tight font-headline-lg">Edelweiss Craft</span>
            </div>
            <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed mb-6 font-body-base">
              Memberikan pengalaman bermain Minecraft terbaik dengan komunitas yang solid dan layanan dukungan 24/7.
            </p>
            <div className="flex gap-md">
              <a href="#discord" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-outline-variant hover:text-tertiary transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined text-[20px]">discord</span>
              </a>
              <a href="#share" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-outline-variant hover:text-tertiary transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
            </div>
          </div>

          {/* Links Column 1: Tentang Kami */}
          <div>
            <h4 className="text-tertiary-fixed-dim font-semibold text-sm uppercase tracking-widest mb-6 font-label-caps">Tentang Kami</h4>
            <ul className="space-y-4">
              <li><a href="#visi" className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-body-base">Visi & Misi</a></li>
              <li><a href="#tim" className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-body-base">Tim Pengembang</a></li>
              <li><a href="#wiki" className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-body-base">Wiki Komunitas</a></li>
            </ul>
          </div>

          {/* Links Column 2: Bantuan */}
          <div>
            <h4 className="text-tertiary-fixed-dim font-semibold text-sm uppercase tracking-widest mb-6 font-label-caps">Bantuan</h4>
            <ul className="space-y-4">
              <li><a href="#faq" className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-body-base">FAQ</a></li>
              <li><a href="#ticket" className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-body-base">Tiket Support</a></li>
              <li><a href="#status" className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-body-base">Status Server</a></li>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div>
            <h4 className="text-tertiary-fixed-dim font-semibold text-sm uppercase tracking-widest mb-6 font-label-caps">Legalitas</h4>
            <ul className="space-y-4">
              <li><a href="#privasi" className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-body-base">Kebijakan Privasi</a></li>
              <li><a href="#tos" className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-body-base">Syarat Layanan</a></li>
              <li><a href="#store-policy" className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-body-base">Kebijakan Store</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-on-surface-variant text-xs font-body-base">
            © 2024 Edelweiss Craft. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-sm text-xs font-body-base">
            <span className="text-outline-variant">Server Status:</span>
            <span className="flex items-center gap-1 text-primary font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}