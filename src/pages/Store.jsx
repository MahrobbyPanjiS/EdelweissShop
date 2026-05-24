import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/ui/ProductCard';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';

// Data produk untuk Store (Bisa lo pindahin ke src/data/productsData.js kalau mau makin rapi)
const featuredRanks = [
  { 
    id: 1, 
    title: 'Obsidian Overlord Rank', 
    category: 'RANK', 
    desc: 'Dapatkan akses eksklusif ke semua fitur premium, command khusus, dan kit bulanan terbaik.', 
    price: 'Rp 149.900', 
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkOcahSlsC0SGjtlfdoUp9r8U-19d_gi6qmbMLT7hDHPPF_vO0RU95yTYwIUIodnNuJtfSje4_46Q8r4wO96Kt_4KrISJr-bqyIbcwC7vTmG2Yr3qmllfB-DlknJwbdkBlV45JtLLPoTalRrsXRMUdzG7b1PJ5vdqWnPc6G9DKlSNrj1VnuVz-77CufJeY9JEJ3O1WhOcojkYO3zqmwXyZ-9XG2x3mfmYdO2Edv01cZdhio3lz347lHRVtJVct97fyxJbreqaF9Rwj', 
    badge: null 
  }
];

const itemsCosmetics = [
  { 
    id: 2, 
    title: 'Aether Blade Skin', 
    category: 'ITEM', 
    desc: 'Tampilkan gaya bertarung futuristik dengan efek partikel cyan aether yang memukau.', 
    price: 'Rp 14.900', 
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaZnCa2n7VlZ-zhpEw9TK4ziYElfjjS3bGnDgDwu29SpRyt8_UpKAcYN65Wy41JI_6c2mb92dl4HIAHQO1tDZzAsQE3aBw-jz06gLq9-wcQswOeIsGATJAGIvmwSf1AkHXIbdHJQhJY3wA049zAYRyHnaS32x4gGAiLo_EZTQNwd1fNA6CoL0jss1IlBRgfMpBMWHbQYbwFFngiDoiUM-FogY48j7kIWgZ_TAaXOl6ojaLBGPwzMjpym8uu2yYV0Tr6s__PqZT6AwY', 
    badge: null 
  },
  { 
    id: 3, 
    title: 'Cyber Anti-Cheat Core', 
    category: 'PLUGIN', 
    desc: 'Proteksi server tingkat lanjut dengan deteksi perilaku real-time berbasis AI.', 
    price: 'Rp 29.900', 
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY-7otknPbD1DBEpKWfqyRCJ7RVLbNtM500L80bY_hcwvUy1RrQl9_UaCXyWCkirQI1Ey9j3sL01Lu__BISxJdIqOzZwCXi5T64WrpWggyEiXRnsIuyXmoqeUbjT5ngsmk37zTAkhePHx3WM2eGnqgow9mzSvYht1BkXUX7CQW6VQc2Ho57_BRXhzF5mXel7Eg1YPdbJ5n7VPwvwG8VGW3wb0ouxaqB1Ae2QZeXMDWxImc62ArVPhniywKWk3ZHTQ5NZAO3L4mW44s', 
    badge: 'HOT' 
  }
];

/**
 * Halaman Toko (Store Page)
 * Menyajikan antarmuka katalog produk meliputi filter kategori dan daftar item.
 * Sekarang sudah menggunakan render dinamis dengan komponen ProductCard.
 */
export default function Store() {
  return (
    <div className="text-on-background min-h-screen flex flex-col font-body-base antialiased text-white">
      <BackgroundAnimation variant="v1" />
      <Navbar />

      {/* Kanvas Konten Utama */}
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-gutter py-section-gap flex flex-col md:flex-row gap-xl">
        
        {/* Bilah Samping (Filter) */}
        <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-lg">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md">
            <h3 className="font-body-bold text-body-bold text-on-surface mb-sm">Category</h3>
            <div className="flex flex-col gap-sm">
              <label className="flex items-center gap-sm cursor-pointer hover:text-primary transition-colors text-on-surface-variant">
                <input className="form-checkbox bg-surface-container-high border-outline-variant text-primary rounded-sm focus:ring-primary focus:ring-offset-surface-container-lowest" type="checkbox" />
                <span className="font-body-base text-body-base">Ranks</span>
              </label>
              <label className="flex items-center gap-sm cursor-pointer hover:text-primary transition-colors text-on-surface-variant">
                <input className="form-checkbox bg-surface-container-high border-outline-variant text-primary rounded-sm focus:ring-primary focus:ring-offset-surface-container-lowest" type="checkbox" />
                <span className="font-body-base text-body-base">Items</span>
              </label>
              <label className="flex items-center gap-sm cursor-pointer hover:text-primary transition-colors text-on-surface-variant">
                <input className="form-checkbox bg-surface-container-high border-outline-variant text-primary rounded-sm focus:ring-primary focus:ring-offset-surface-container-lowest" type="checkbox" />
                <span className="font-body-base text-body-base">Plugins</span>
              </label>
              <label className="flex items-center gap-sm cursor-pointer hover:text-primary transition-colors text-on-surface-variant">
                <input className="form-checkbox bg-surface-container-high border-outline-variant text-primary rounded-sm focus:ring-primary focus:ring-offset-surface-container-lowest" type="checkbox" />
                <span className="font-body-base text-body-base">Services</span>
              </label>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md">
            <h3 className="font-body-bold text-body-bold text-on-surface mb-sm">Price Range</h3>
            <div className="flex items-center gap-sm">
              <input className="w-full bg-surface-container-high border-outline-variant text-on-surface rounded-lg px-sm py-xs focus:border-primary focus:ring-1 focus:ring-primary outline-none font-code text-code" placeholder="Min" type="number" />
              <span className="text-on-surface-variant">-</span>
              <input className="w-full bg-surface-container-high border-outline-variant text-on-surface rounded-lg px-sm py-xs focus:border-primary focus:ring-1 focus:ring-primary outline-none font-code text-code" placeholder="Max" type="number" />
            </div>
          </div>
          
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md">
            <h3 className="font-body-bold text-body-bold text-on-surface mb-sm">Minecraft Version</h3>
            <select className="w-full bg-surface-container-high border-outline-variant text-on-surface rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-base text-body-base">
              <option>All Versions</option>
              <option>1.20.x</option>
              <option>1.19.x</option>
              <option>1.18.x</option>
            </select>
          </div>
        </aside>

        {/* Area Kisi Produk (Store Grid) */}
        <section className="flex-grow flex flex-col gap-lg">
          
          {/* Kontrol Pencarian & Pengurutan */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-md bg-surface-container-lowest border border-outline-variant rounded-lg p-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-50"></div>
            <div className="relative w-full sm:w-96">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" data-icon="search">search</span>
              <input className="w-full bg-surface-container-high border-outline-variant text-on-surface rounded-lg pl-xl pr-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-base text-body-base transition-all" placeholder="Search digital assets..." type="text" />
            </div>
            <div className="flex items-center gap-sm w-full sm:w-auto">
              <span className="text-on-surface-variant font-label-caps text-label-caps whitespace-nowrap">SORT BY</span>
              <select className="w-full sm:w-auto bg-surface-container-high border-outline-variant text-on-surface rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-base text-body-base">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          {/* Daftar Produk */}
          <div className="flex flex-col gap-xl w-full">
            
            {/* Seksi Ranks */}
            <div className="flex flex-col gap-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                Featured Ranks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                {featuredRanks.map((rank) => (
                  <ProductCard 
                    key={rank.id}
                    title={rank.title}
                    category={rank.category}
                    desc={rank.desc}
                    price={rank.price}
                    imgSrc={rank.imgSrc}
                    badge={rank.badge}
                    onClick={() => console.log(`Buka modal untuk ${rank.title}`)}
                  />
                ))}
              </div>
            </div>

            {/* Seksi Items & Cosmetics */}
            <div className="flex flex-col gap-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                Items & Cosmetics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                {itemsCosmetics.map((item) => (
                  <ProductCard 
                    key={item.id}
                    title={item.title}
                    category={item.category}
                    desc={item.desc}
                    price={item.price}
                    imgSrc={item.imgSrc}
                    badge={item.badge}
                    onClick={() => console.log(`Buka modal untuk ${item.title}`)}
                  />
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}