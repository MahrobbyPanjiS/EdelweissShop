import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
import Minecraft3DViewer from '../components/ui/Minecraft3DViewer';

/**
 * Halaman Profil (Profile Page)
 * Menyajikan informasi akun pemain, statistik server, riwayat pesanan (orders), 
 * ulasan, dan rekomendasi item. Telah dilengkapi fitur modal detail produk 
 * yang dikelola melalui state React.
 */
export default function Profile() {
  // State untuk mengelola perpindahan tab (Riwayat Pesanan vs Ulasan)
  const [activeTab, setActiveTab] = useState('orders');

  // State untuk mengelola Modal Detail Produk
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    category: '',
    desc: '',
    price: '',
    imgSrc: ''
  });
  
  // State untuk mengelola Kuantitas di dalam Modal
  const [quantity, setQuantity] = useState(1);

  // Fungsi untuk membuka modal dan mengatur data produk yang dipilih
  const handleOpenModal = (title, category, desc, price, imgSrc) => {
    setModalData({ title, category, desc, price, imgSrc });
    setQuantity(1); // Reset kuantitas ke 1 setiap buka produk baru
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Fungsi mengelola tombol plus dan minus kuantitas
  const handleQuantityChange = (type) => {
    if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'increase') {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-base text-body-base overflow-x-hidden relative z-0">
      <BackgroundAnimation />
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col w-full max-w-[1280px] mx-auto p-gutter pt-xl gap-lg relative z-10" id="profile-view">
        
        {/* Profile Cover & Info dengan Efek Glitch & Scan */}
        <div className="glass-panel rounded-xl metallic-border overflow-hidden bg-[#0d0d0f] relative">
          <div className="h-48 bg-surface-container-highest relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10"></div>
            <img alt="Cover Image" className="w-full h-full object-cover opacity-50 mix-blend-overlay animate-glitch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq8fewNGVrfhCw_89suRAe7jRQh8D7JnPaVLWwE2jW5Xo3UIrrP5oIG-YQli9eiTzYH-ll6ep76jVi0qLPaZJyl8ALGlU3n7TqbAmpk4wyvwFZqvoRB-Do39MSDH__y7QBT2RVaqojlDpYQBCin6v37dfjEqJmBBf0VxTYnNvrIL3_zGa9OpYNMi6RAbo35hLZP7Xt4IRdjpzIoeqh7Km3IMLkRyX09bxpU9Nw43sE_C4DIIQUiHj5bcdvLHUhQQPZGJlZDaxAQrfb"/>
            <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40 z-10"></div>
            <div className="absolute inset-x-0 h-1 bg-primary/40 shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-scan pointer-events-none z-20"></div>
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full border border-primary/30 z-20 animate-flicker">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#22d3ee]"></span>
              <span className="text-[10px] font-code text-primary uppercase tracking-widest">System Synced</span>
            </div>
          </div>
          
          <div className="p-lg flex flex-col md:flex-row gap-lg items-start relative z-20 -mt-16">
            {/* --- BLOK UPDATE MULAI DARI SINI --- */}
            <div className="relative w-32 h-40 bg-surface-container-lowest rounded-md metallic-border flex items-center justify-center shrink-0 shadow-2xl overflow-visible">
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-md pointer-events-none z-10"></div>
              
              {/* Memanggil komponen 3D Viewer yang sudah dibuat */}
              <Minecraft3DViewer username="CyberNinja_99" />
              
              <div className="absolute -bottom-3 bg-surface-container-highest px-sm py-xs rounded text-xs font-code text-primary metallic-border z-20">SKIN_01</div>
            </div>
            {/* --- BLOK UPDATE SELESAI --- */}
            
            <div className="flex-grow pt-16 md:pt-4 w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">CyberNinja_99</h2>
                  <p className="font-body-base text-on-surface-variant flex items-center gap-xs mt-2">
                    <span className="material-symbols-outlined text-sm text-tertiary">verified</span>
                    Premium Member
                  </p>
                </div>
                <Link 
                  to="/edit-profile"
                  className="bg-surface-container-low text-on-surface px-md py-sm rounded-md metallic-border hover:border-primary hover:text-primary transition-colors font-body-bold text-sm h-[40px] whitespace-nowrap flex items-center justify-center"
                >
                  Edit Profile
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-lg mt-lg pt-lg border-t border-outline-variant">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-outline">SALDO</span>
                    <span className="font-body-bold text-sm text-on-surface">Rp 50.000</span>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-outline">BERGABUNG</span>
                    <span className="font-body-bold text-sm text-on-surface">12 Jan 2024</span>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-outline">ASAL KOTA</span>
                    <span className="font-body-bold text-sm text-on-surface">Jakarta</span>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">computer</span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-outline">PLATFORM</span>
                    <span className="font-body-bold text-sm text-on-surface">Java Edition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg">
          {/* Sidebar Widget Area */}
          <div className="lg:col-span-1 flex flex-col gap-lg">
            {/* Order Status Grid */}
            <div className="glass-panel p-md rounded-xl metallic-border bg-[#0d0d0f]">
              <h3 className="font-body-bold text-lg text-on-surface mb-md">Pesanan Saya</h3>
              <div className="grid grid-cols-4 gap-sm text-center">
                <button className="flex flex-col items-center gap-xs text-on-surface-variant hover:text-primary transition-colors group">
                  <div className="relative">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">account_balance_wallet</span>
                    <span className="absolute -top-1 -right-1 bg-error text-on-error text-[10px] font-bold px-1 rounded-full">2</span>
                  </div>
                  <span className="text-xs font-body-base">Belum Bayar</span>
                </button>
                <button className="flex flex-col items-center gap-xs text-on-surface-variant hover:text-primary transition-colors group">
                  <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">inventory_2</span>
                  <span className="text-xs font-body-base">Dikemas</span>
                </button>
                <button className="flex flex-col items-center gap-xs text-on-surface-variant hover:text-primary transition-colors group">
                  {/* Di sini letak perbaikan typo class menjadi className */}
                  <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">local_shipping</span>
                  <span className="text-xs font-body-base">Dikirim</span>
                </button>
                <button className="flex flex-col items-center gap-xs text-on-surface-variant hover:text-primary transition-colors group">
                  <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">rate_review</span>
                  <span className="text-xs font-body-base">Beri Penilaian</span>
                </button>
              </div>
            </div>
            
            {/* Linked Systems */}
            <div className="glass-panel p-md rounded-xl metallic-border bg-[#0d0d0f] flex flex-col gap-md">
              <h3 className="font-body-bold text-lg text-on-surface">Linked Systems</h3>
              <div className="flex items-center justify-between bg-surface-container-low p-sm rounded border border-outline-variant">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">videogame_asset</span>
                  <span className="font-body-base text-on-surface">Minecraft</span>
                </div>
                <span className="font-code text-xs text-tertiary bg-tertiary/10 px-2 py-1 rounded">CONNECTED</span>
              </div>
              <div className="flex items-center justify-between bg-surface-container-low p-sm rounded border border-outline-variant opacity-60">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-outline">forum</span>
                  <span className="font-body-base text-on-surface-variant">Discord</span>
                </div>
                <button className="font-label-caps text-label-caps text-primary hover:underline">LINK</button>
              </div>
            </div>
          </div>

          {/* Main Content Area (Tabs) */}
          <div className="lg:col-span-3 flex flex-col gap-md">
            <div className="flex border-b border-outline-variant bg-surface-container-lowest/50 rounded-t-xl px-md pt-2">
              <button 
                className={`font-body-bold px-md py-sm border-b-2 transition-colors ${activeTab === 'orders' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-on-surface'}`}
                onClick={() => setActiveTab('orders')}
              >
                Riwayat Pesanan
              </button>
              <button 
                className={`font-body-bold px-md py-sm border-b-2 transition-colors ${activeTab === 'reviews' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-on-surface'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Ulasan Saya
              </button>
            </div>
            
            {/* Orders Tab Content */}
            {activeTab === 'orders' && (
              <div className="flex flex-col gap-md fade-in" id="orders">
                <div className="glass-panel p-md rounded-xl metallic-border bg-[#0d0d0f]">
                  <div className="flex justify-between items-center border-b border-outline-variant pb-sm mb-sm">
                    <div className="flex items-center gap-sm text-sm">
                      <span className="material-symbols-outlined text-primary text-base">storefront</span>
                      <span className="font-body-bold text-on-surface">Edelweiss Official</span>
                      <span className="text-outline">|</span>
                      <span className="font-code text-on-surface-variant text-xs">#ORD-992A</span>
                    </div>
                    <span className="text-tertiary font-body-bold text-sm">Selesai</span>
                  </div>
                  <div className="flex gap-md items-center">
                    <img alt="Obsidian Rank" className="w-20 h-20 rounded bg-surface-container-low object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhLFEm-lj0H02PlM1qiXF5qI1e7mkEmipOeroWzyIKbpmczkV34vGM1a-bYQ98Y3OGrR8hXp89VbqJRz49uMcUtdUVj8jp5yta-UAtpnNlNlQ7MZyqry5GJ2NjKEqmx7JgDKSIk4EPSt0apGOVbRCX4g2IPJB_4A2RUqWBiMxjPYhSV5DNyomUqhWwtY9AAxY23CKgG4PHF4qM3JTCOFdECr4ZXQDMdzqoi_O74-alS4sJgbgEYUhfPTggfHsA9h2HzVfdIx1J19la" />
                    <div className="flex-grow">
                      <h4 className="font-headline-lg text-base text-on-surface">Obsidian Rank Upgrade</h4>
                      <p className="text-sm text-on-surface-variant mt-1">Lifetime Access • Global Server</p>
                      <p className="text-sm text-on-surface-variant mt-1">x1</p>
                    </div>
                    <div className="text-right">
                      <p className="font-body-bold text-lg text-primary">Rp 250.000</p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-sm mt-md pt-sm border-t border-outline-variant">
                    <button className="px-md py-2 border border-outline-variant rounded text-on-surface hover:bg-surface-container-low transition-colors text-sm font-body-bold">Beli Lagi</button>
                    <button className="px-md py-2 bg-primary text-on-primary rounded hover:bg-primary-fixed transition-colors text-sm font-body-bold glowing-primary">Beri Ulasan</button>
                  </div>
                </div>
                
                <div className="glass-panel p-md rounded-xl metallic-border bg-[#0d0d0f] opacity-80">
                  <div className="flex justify-between items-center border-b border-outline-variant pb-sm mb-sm">
                    <div className="flex items-center gap-sm text-sm">
                      <span className="material-symbols-outlined text-primary text-base">storefront</span>
                      <span className="font-body-bold text-on-surface">Edelweiss Official</span>
                      <span className="text-outline">|</span>
                      <span className="font-code text-on-surface-variant text-xs">#ORD-881C</span>
                    </div>
                    <span className="text-outline font-body-bold text-sm">Dibatalkan</span>
                  </div>
                  <div className="flex gap-md items-center">
                    <img alt="Aether Bundle" className="w-20 h-20 rounded bg-surface-container-low object-cover border border-outline-variant grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7yTAHIG2zXnGgWOJGrj5IxhTwqJZBFFgxvNA-_-K2snGwDp9a5AS8uDHzFDx3C_Z6q2ecMXMkRgycP2kDQzIceGSkAx9BP0p11ZOoc9QG3SigQ8pFbMNi5DzxSGfZkgzkkrkzzUG_MECCy_-adwMzf-d-ACIGGkCpxGYmuvBoKscteTBUZOzgS2-g_sLdjNvSklGlzMZ97yqo9kvdhybos9enLWOm9p8vFWoYXl_29pVrjlqBa7WDl_nIBbBzFomTD5mfnM6fk8tT" />
                    <div className="flex-grow">
                      <h4 className="font-headline-lg text-base text-on-surface">Aether Cosmetic Bundle</h4>
                      <p className="text-sm text-on-surface-variant mt-1">Seasonal Pack</p>
                      <p className="text-sm text-on-surface-variant mt-1">x1</p>
                    </div>
                    <div className="text-right">
                      <p className="font-body-bold text-lg text-on-surface-variant line-through">Rp 150.000</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab Content */}
            {activeTab === 'reviews' && (
              <div className="flex flex-col gap-md fade-in" id="reviews">
                <div className="glass-panel p-md rounded-xl metallic-border bg-[#0d0d0f] text-center py-xl">
                  <span className="material-symbols-outlined text-4xl text-outline mb-sm block">speaker_notes_off</span>
                  <p className="text-on-surface-variant">Belum ada ulasan yang diberikan.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommended Products Section */}
        <div className="mt-lg">
          <div className="flex items-center justify-between mb-md">
            <h3 className="font-headline-lg text-xl text-on-surface flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary">local_fire_department</span>
              Rekomendasi Untukmu
            </h3>
            <button className="text-primary text-sm hover:underline font-body-bold">Lihat Semua</button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-md">
            
            {/* Product 1 */}
            <div 
              className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative shadow-[inset_0_0_20px_rgba(34,211,238,0.02)] cursor-pointer"
              onClick={() => handleOpenModal('Elite Vanguard Access', 'PASS', 'Akses premium ke area eksklusif server dengan berbagai fitur tambahan dan prioritas login. Dapatkan keuntungan eksklusif yang hanya tersedia untuk pemegang pass ini.', 'Rp 120.000', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwj9GE6MbW5sYtYes0jsji0bDo7Qnp5HrWydm2aKZnrLIRmevlz0x-YbfuCx8uh3-h6SVOfLUUW5FLE2bzoTY-cGxe1mNsK_aRLOPhEgQF6kmm5aGExwLKmnpc0ws678wxHrz0yLxbAe_sw1BF5ji8rglE4sktR9gZORpVXoG3g4uhjpn-rR9GGHIsMDnS5h7AsIXSAlGXtAZBZpTFbZnTBbzAFdS8ZcgYPo4Kiy1o2PD6iLEkf-Dqlb7YDEZquLIOhhzia4X1w2S9')}
            >
              <div className="h-40 w-full bg-surface-container-high relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-error text-on-error text-[10px] px-2 py-1 rounded font-bold z-10">-20%</div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-0"></div>
                <img alt="Elite Vanguard Access Pass" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwj9GE6MbW5sYtYes0jsji0bDo7Qnp5HrWydm2aKZnrLIRmevlz0x-YbfuCx8uh3-h6SVOfLUUW5FLE2bzoTY-cGxe1mNsK_aRLOPhEgQF6kmm5aGExwLKmnpc0ws678wxHrz0yLxbAe_sw1BF5ji8rglE4sktR9gZORpVXoG3g4uhjpn-rR9GGHIsMDnS5h7AsIXSAlGXtAZBZpTFbZnTBbzAFdS8ZcgYPo4Kiy1o2PD6iLEkf-Dqlb7YDEZquLIOhhzia4X1w2S9" />
              </div>
              <div className="p-md flex flex-col gap-xs flex-grow">
                <div className="flex flex-wrap gap-xs">
                  <span className="bg-surface-container-high border border-outline-variant text-on-surface-variant font-label-caps text-[10px] px-xs py-[2px] rounded-sm">PASS</span>
                </div>
                <h4 className="font-body-bold text-sm text-on-surface line-clamp-1">Elite Vanguard Access</h4>
                <p className="text-on-surface-variant text-xs line-clamp-2">Akses premium ke area eksklusif server.</p>
                <p className="font-code text-primary text-lg mt-auto">Rp 120.000</p>
                <div className="flex gap-sm mt-sm">
                  <button className="flex-grow bg-primary-container text-black font-body-bold text-xs py-2 rounded-lg hover:brightness-110 transition-all active:scale-95">Beli Sekarang</button>
                  <button className="bg-surface-container-high border border-outline-variant text-on-surface p-2 rounded-lg hover:border-primary hover:bg-primary/10 transition-all active:scale-95 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div 
              className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative shadow-[inset_0_0_20px_rgba(34,211,238,0.02)] cursor-pointer"
              onClick={() => handleOpenModal('Neon Cyber Wings', 'COSMETIC', 'Sayap futuristik dengan efek cahaya neon yang membuat karaktermu tampil beda di lobby.', 'Rp 85.000', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoopU5zvOZ3pGNIQ5DIDgP5HFJIhlkdL2MFgCM2qK9-68ns5Awh2QXEVxoWe5dJ7ogem7VConK2EGhts8qonHNnBq8SRBHom9banETf17UkgtBeXb3Uv52rfAtR8bCVO7uCnB88oPI9iXUpBlKlh9AB7Wl9lqUjAJ7s_t3mdOpy6upvNg-CKx87C-seG_4YSbKLZL9fRJZYvpA33EbCluNC-AOxLLPHazVOzQafyU08UUUzOdAEUuKnNlWzw7zBaNhWOg6VyVbRb6R')}
            >
              <div className="h-40 w-full bg-surface-container-high relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-0"></div>
                <img alt="Neon Cyber Wings" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoopU5zvOZ3pGNIQ5DIDgP5HFJIhlkdL2MFgCM2qK9-68ns5Awh2QXEVxoWe5dJ7ogem7VConK2EGhts8qonHNnBq8SRBHom9banETf17UkgtBeXb3Uv52rfAtR8bCVO7uCnB88oPI9iXUpBlKlh9AB7Wl9lqUjAJ7s_t3mdOpy6upvNg-CKx87C-seG_4YSbKLZL9fRJZYvpA33EbCluNC-AOxLLPHazVOzQafyU08UUUzOdAEUuKnNlWzw7zBaNhWOg6VyVbRb6R" />
              </div>
              <div className="p-md flex flex-col gap-xs flex-grow">
                <div className="flex flex-wrap gap-xs">
                  <span className="bg-surface-container-high border border-outline-variant text-on-surface-variant font-label-caps text-[10px] px-xs py-[2px] rounded-sm">COSMETIC</span>
                </div>
                <h4 className="font-body-bold text-sm text-on-surface line-clamp-1">Neon Cyber Wings</h4>
                <p className="text-on-surface-variant text-xs line-clamp-2">Sayap futuristik dengan efek cahaya neon.</p>
                <p className="font-code text-primary text-lg mt-auto">Rp 85.000</p>
                <div className="flex gap-sm mt-sm">
                  <button className="flex-grow bg-primary-container text-black font-body-bold text-xs py-2 rounded-lg hover:brightness-110 transition-all active:scale-95">Beli Sekarang</button>
                  <button className="bg-surface-container-high border border-outline-variant text-on-surface p-2 rounded-lg hover:border-primary hover:bg-primary/10 transition-all active:scale-95 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 3 */}
            <div 
              className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative shadow-[inset_0_0_20px_rgba(34,211,238,0.02)] cursor-pointer"
              onClick={() => handleOpenModal('Monthly Server Booster', 'BOOST', 'Tingkatkan progres akunmu bulan ini dengan multiplier XP dan resource ganda.', 'Rp 50.000', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR6FnePzYHzRyZV_5YpdcOJqrbyusipUko1MGog7WQGV7uJ5tuX3a4-mC6mWwZ16FO0K8wzaoEEPC-xuOihWV4kbauJvbuztcx3cL8yZYayijUKRstUGXk0Rf_cC9785kgGcLGQrWZnNT9Muw01CddaMHuyqljDp8_NPNZIdtEF_O2q3TPuCVIS82hdv4yLsqCxdy01jXn7U4n57K9zQL9SyECNCgP73gtkP8ozgImolt0G9dU9Aqkn6emnHMGS3x8isNAnbQfss7n')}
            >
              <div className="h-40 w-full bg-surface-container-high relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-0"></div>
                <img alt="Monthly Booster" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR6FnePzYHzRyZV_5YpdcOJqrbyusipUko1MGog7WQGV7uJ5tuX3a4-mC6mWwZ16FO0K8wzaoEEPC-xuOihWV4kbauJvbuztcx3cL8yZYayijUKRstUGXk0Rf_cC9785kgGcLGQrWZnNT9Muw01CddaMHuyqljDp8_NPNZIdtEF_O2q3TPuCVIS82hdv4yLsqCxdy01jXn7U4n57K9zQL9SyECNCgP73gtkP8ozgImolt0G9dU9Aqkn6emnHMGS3x8isNAnbQfss7n" />
              </div>
              <div className="p-md flex flex-col gap-xs flex-grow">
                <div className="flex flex-wrap gap-xs">
                  <span className="bg-surface-container-high border border-outline-variant text-on-surface-variant font-label-caps text-[10px] px-xs py-[2px] rounded-sm">BOOST</span>
                </div>
                <h4 className="font-body-bold text-sm text-on-surface line-clamp-1">Monthly Server Booster</h4>
                <p className="text-on-surface-variant text-xs line-clamp-2">Tingkatkan progres akunmu bulan ini.</p>
                <p className="font-code text-primary text-lg mt-auto">Rp 50.000</p>
                <div className="flex gap-sm mt-sm">
                  <button className="flex-grow bg-primary-container text-black font-body-bold text-xs py-2 rounded-lg hover:brightness-110 transition-all active:scale-95">Beli Sekarang</button>
                  <button className="bg-surface-container-high border border-outline-variant text-on-surface p-2 rounded-lg hover:border-primary hover:bg-primary/10 transition-all active:scale-95 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 4 */}
            <div 
              className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative shadow-[inset_0_0_20px_rgba(34,211,238,0.02)] hidden md:flex cursor-pointer"
              onClick={() => handleOpenModal('Custom Title Tag', 'ITEM', "Tag eksklusif 'The Legend' yang akan muncul secara permanen di samping namamu.", 'Rp 35.000', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMOTEd3UlpQOhUfcTK-WHedxcE-eVR4ZB1ic6qCq46cRRcMakl23E2PAOkA899HpJw-l6BB14Drivpo0WLY5CMvYmLA0cm8uf2W3V9WM-EkzuQW4RMf2t39nyNg43g5fPyenHC08ENz60L0QmlLd7TSbbwdsct8P7WBXDGDEHKOSluVIpPbKk6cC-BLDNaRCLiHzfwV0lfNeHDZlKYKfEuCkEk4S-OEY12ieboeaMtu8of0AnaDYb6z02f7T_pWeazud5MgOG3dNmk')}
            >
              <div className="h-40 w-full bg-surface-container-high relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-0"></div>
                <img alt="Custom Title Tag" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMOTEd3UlpQOhUfcTK-WHedxcE-eVR4ZB1ic6qCq46cRRcMakl23E2PAOkA899HpJw-l6BB14Drivpo0WLY5CMvYmLA0cm8uf2W3V9WM-EkzuQW4RMf2t39nyNg43g5fPyenHC08ENz60L0QmlLd7TSbbwdsct8P7WBXDGDEHKOSluVIpPbKk6cC-BLDNaRCLiHzfwV0lfNeHDZlKYKfEuCkEk4S-OEY12ieboeaMtu8of0AnaDYb6z02f7T_pWeazud5MgOG3dNmk" />
              </div>
              <div className="p-md flex flex-col gap-xs flex-grow">
                <div className="flex flex-wrap gap-xs">
                  <span className="bg-surface-container-high border border-outline-variant text-on-surface-variant font-label-caps text-[10px] px-xs py-[2px] rounded-sm">ITEM</span>
                </div>
                <h4 className="font-body-bold text-sm text-on-surface line-clamp-1">Custom Title Tag</h4>
                <p className="text-on-surface-variant text-xs line-clamp-2">Tag 'The Legend' di samping namamu.</p>
                <p className="font-code text-primary text-lg mt-auto">Rp 35.000</p>
                <div className="flex gap-sm mt-sm">
                  <button className="flex-grow bg-primary-container text-black font-body-bold text-xs py-2 rounded-lg hover:brightness-110 transition-all active:scale-95">Beli Sekarang</button>
                  <button className="bg-surface-container-high border border-outline-variant text-on-surface p-2 rounded-lg hover:border-primary hover:bg-primary/10 transition-all active:scale-95 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 5 */}
            <div 
              className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative shadow-[inset_0_0_20px_rgba(34,211,238,0.02)] hidden lg:flex cursor-pointer"
              onClick={() => handleOpenModal('Mystery Loot Box', 'LOOT', 'Item acak tingkat Epic hingga Legendary menantimu. Bukalah dan dapatkan kejutan spesial.', 'Rp 75.000', 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0NZlInSSxXTNLYnZCiWsX75UjHoltQ6YCsJsMJ-VEtSLK2X0ca42Wgf5eO0vY0cP0Fd5J8Aa_DFJh6yeI-U5PDHlS1uGcZaM5C8gx9X-PofJFubDc1V5KlJlh0sykd4gZpfjbVI8d5qVGJviaIg6SCwngAQwGZSpsk40CVy62w8LVDtI5Yi2cOuzLzi7CVQXGyYSfMTBDlAaNF6A6ZpJNmDxjYjIoGjSfcPNMJi-8S6Os41hcWuSRm28LWX0683b2EEYPQk78Gd_M')}
            >
              <div className="h-40 w-full bg-surface-container-high relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-tertiary text-on-tertiary text-[10px] px-2 py-1 rounded font-bold z-10">HOT</div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-0"></div>
                <img alt="Mystery Loot Box" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0NZlInSSxXTNLYnZCiWsX75UjHoltQ6YCsJsMJ-VEtSLK2X0ca42Wgf5eO0vY0cP0Fd5J8Aa_DFJh6yeI-U5PDHlS1uGcZaM5C8gx9X-PofJFubDc1V5KlJlh0sykd4gZpfjbVI8d5qVGJviaIg6SCwngAQwGZSpsk40CVy62w8LVDtI5Yi2cOuzLzi7CVQXGyYSfMTBDlAaNF6A6ZpJNmDxjYjIoGjSfcPNMJi-8S6Os41hcWuSRm28LWX0683b2EEYPQk78Gd_M" />
              </div>
              <div className="p-md flex flex-col gap-xs flex-grow">
                <div className="flex flex-wrap gap-xs">
                  <span className="bg-surface-container-high border border-outline-variant text-on-surface-variant font-label-caps text-[10px] px-xs py-[2px] rounded-sm">LOOT</span>
                </div>
                <h4 className="font-body-bold text-sm text-on-surface line-clamp-1">Mystery Loot Box</h4>
                <p className="text-on-surface-variant text-xs line-clamp-2">Item acak tingkat Epic menantimu.</p>
                <p className="font-code text-primary text-lg mt-auto">Rp 75.000</p>
                <div className="flex gap-sm mt-sm">
                  <button className="flex-grow bg-primary-container text-black font-body-bold text-xs py-2 rounded-lg hover:brightness-110 transition-all active:scale-95">Beli Sekarang</button>
                  <button className="bg-surface-container-high border border-outline-variant text-on-surface p-2 rounded-lg hover:border-primary hover:bg-primary/10 transition-all active:scale-95 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* Modal Detail Produk */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-gutter" id="product-detail-modal">
          {/* Latar Belakang Blur */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 opacity-100" 
            onClick={handleCloseModal}
          ></div>
          
          {/* Konten Modal */}
          <div className="relative bg-surface-container-high w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl border border-outline-variant shadow-2xl transition-all duration-300 transform scale-100 opacity-100 flex flex-col md:flex-row">
            
            {/* Tombol Tutup */}
            <button 
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-surface-container-highest/50 text-on-surface hover:text-primary transition-colors" 
              onClick={handleCloseModal}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            {/* Sisi Kiri: Gambar Produk */}
            <div className="w-full md:w-1/2 bg-surface-container-lowest p-lg flex items-center justify-center border-r border-outline-variant overflow-y-auto">
              <div className="relative group w-full aspect-square flex items-center justify-center bg-surface/50 rounded-lg overflow-hidden">
                <img alt={modalData.title} className="w-full h-full object-contain" src={modalData.imgSrc} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            {/* Sisi Kanan: Detail Produk & Checkout */}
            <div className="w-full md:w-1/2 p-xl flex flex-col gap-lg bg-surface/30 overflow-y-auto">
              <div>
                <span className="bg-primary/10 text-primary border border-primary/30 font-label-caps text-[10px] px-sm py-[4px] rounded-sm tracking-widest inline-block">
                  {modalData.category}
                </span>
                <h2 className="font-headline-lg text-3xl text-on-surface mt-md">{modalData.title}</h2>
              </div>
              
              <div className="flex flex-col gap-sm pb-lg border-b border-outline-variant/30">
                <p className="font-code text-primary text-4xl font-bold">{modalData.price}</p>
                <div className="flex items-center gap-xs text-tertiary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-body-base ml-xs text-on-surface-variant">(4.9/5 • 120+ Terjual)</span>
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-body-bold text-on-surface text-sm uppercase tracking-wider mb-sm">Deskripsi Produk</h3>
                <p className="text-on-surface-variant text-base leading-relaxed">{modalData.desc}</p>
              </div>
              
              <div className="flex flex-col gap-md">
                <div className="flex items-center gap-lg">
                  <span className="text-sm text-outline-variant font-label-caps uppercase">Kuantitas</span>
                  <div className="flex items-center border border-outline-variant rounded-lg overflow-hidden bg-surface-container-low">
                    <button 
                      className="px-4 py-2 hover:bg-surface-container-highest transition-colors text-primary" 
                      onClick={() => handleQuantityChange('decrease')}
                    >
                      -
                    </button>
                    <input 
                      className="w-16 bg-transparent border-none text-center focus:ring-0 text-sm font-body-bold text-on-surface" 
                      min="1" 
                      type="number" 
                      value={quantity} 
                      readOnly
                    />
                    <button 
                      className="px-4 py-2 hover:bg-surface-container-highest transition-colors text-primary" 
                      onClick={() => handleQuantityChange('increase')}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-md pt-lg border-t border-outline-variant/30">
                  <button className="flex-1 bg-surface-container-highest text-on-surface border border-outline-variant font-body-bold py-4 rounded-xl hover:border-primary transition-all flex items-center justify-center gap-md active:scale-95">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                    <span>Tambah Keranjang</span>
                  </button>
                  <button className="flex-1 bg-primary text-on-primary font-body-bold py-4 rounded-xl hover:brightness-110 transition-all glowing-primary active:scale-95">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}