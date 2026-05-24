import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
// import Footer from '../components/layout/Footer'; // GUE MATIKAN SEMENTARA: Uncomment ini kalau file Footer.jsx udah lo bikin biar gak crash.

/**
 * Halaman Wiki (Wiki Page)
 * Menyajikan basis pengetahuan server, aturan dasar, perintah penting, 
 * serta rincian fasilitas dari setiap tingkatan (rank) pemain.
 */
export default function Wiki() {
  // State untuk mengelola elemen akordion pada daftar rank
  const [openRank, setOpenRank] = useState(null);

  // Fungsi pembantu untuk membuka/menutup panel detail rank
  const toggleRank = (rankName) => {
    setOpenRank(openRank === rankName ? null : rankName);
  };

  return (
    <div className="min-h-screen flex flex-col font-body-base antialiased relative">
      {/* Backgrounds menggunakan komponen modular */}
      <BackgroundAnimation />

      <Navbar />

      {/* Main Content Layout */}
      <div className="flex-grow w-full max-w-[1280px] mx-auto px-gutter py-section-gap flex flex-col md:flex-row gap-xl relative z-10">
        
        {/* Left Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-[100px] bg-surface-container-lowest/80 backdrop-blur-md p-md rounded-lg metallic-border shadow-lg">
            <h3 className="font-label-caps text-label-caps text-on-surface mb-md">CATEGORIES</h3>
            <nav className="flex flex-col gap-sm">
              <a className="flex items-center gap-sm px-3 py-2 rounded-md bg-primary-container/10 text-primary border border-primary/30 glow-active font-body-bold transition-all" href="#wiki-utama">
                <span className="material-symbols-outlined text-sm">rocket_launch</span> Wiki Utama
              </a>
              <a className="flex items-center gap-sm px-3 py-2 rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-all font-body-base" href="#rules">
                <span className="material-symbols-outlined text-sm">gavel</span> Aturan Server
              </a>
              <a className="flex items-center gap-sm px-3 py-2 rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-all font-body-base" href="#commands">
                <span className="material-symbols-outlined text-sm">download</span> Perintah Penting
              </a>
              <a className="flex items-center gap-sm px-3 py-2 rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-all font-body-base" href="#ranks">
                <span className="material-symbols-outlined text-sm">build</span> Tingkatan Rank
              </a>
            </nav>

            <div className="mt-6 pt-6 border-t border-outline-variant">
              <h3 className="font-label-caps text-label-caps text-on-surface mb-md flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">dns</span> TENTANG SERVER
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Versi</span>
                  <span className="text-primary font-code">1.20.x</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Pemain</span>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-white">74/100 Online</span>
                  </div>
                </div>
                <button 
                  className="w-full flex items-center justify-between px-3 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-md text-primary text-xs font-bold transition-all group" 
                  onClick={() => navigator.clipboard.writeText('play.edelweisscraft.net')}
                >
                  <span>play.edelweisscraft.net</span>
                  <span className="material-symbols-outlined text-sm group-active:scale-90">content_copy</span>
                </button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-outline-variant">
              <h3 className="font-label-caps text-label-caps text-on-surface mb-md flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">groups</span> TAUTAN KOMUNITAS
              </h3>
              <div className="flex flex-col gap-2">
                <a className="flex items-center gap-3 px-3 py-2 rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-all text-sm font-body-base" href="#">
                  <span className="material-symbols-outlined text-lg">discord</span> Discord
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-all text-sm font-body-base" href="#">
                  <span className="material-symbols-outlined text-lg">brand_awareness</span> Tiktok
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-all text-sm font-body-base" href="#">
                  <span className="material-symbols-outlined text-lg">photo_camera</span> Instagram
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Document Area */}
        <main className="flex-grow min-w-0 bg-surface-container-low/90 backdrop-blur-md p-lg rounded-xl metallic-border shadow-2xl relative overflow-hidden fade-in">
          {/* Decorative Cyber accent */}
          <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-primary to-transparent"></div>
          
          <div className="mb-12 border-b border-outline-variant pb-6" id="wiki-utama">
            <h1 className="text-3xl font-bold text-primary mb-4">Wiki - Edelweiss Craft</h1>
            <p className="text-on-surface-variant text-lg">Panduan lengkap bermain, aturan, dan informasi server.</p>
          </div>

          {/* Section: Rules */}
          <section className="mb-16" id="rules">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
              <h2 className="text-2xl font-bold text-white">Aturan Dasar (Rules)</h2>
            </div>
            <div className="bg-surface-container/80 backdrop-blur-sm rounded-lg border border-outline-variant p-6 shadow-md">
              <ul className="space-y-4 text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-xl shrink-0 mt-0.5">block</span>
                  <span>Dilarang menggunakan cheat, hack client, atau modifikasi ilegal yang memberikan keuntungan tidak adil.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-xl shrink-0 mt-0.5">block</span>
                  <span>Griefing dan mencuri di area claim pemain lain sangat dilarang.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-xl shrink-0 mt-0.5">warning</span>
                  <span>Hormati pemain lain di chat. Dilarang spam, berkata kasar/SARA, atau mengiklankan server lain.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-xl shrink-0 mt-0.5">warning</span>
                  <span>Penggunaan bug exploit akan ditindak tegas. Segera laporkan ke staff jika menemukan bug.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">info</span>
                  <span>Patuhi instruksi Admin dan Moderator. Keputusan staff adalah mutlak.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Commands */}
          <section className="mb-16" id="commands">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              <h2 className="text-2xl font-bold text-white">Perintah Penting (Commands)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container/80 backdrop-blur-sm rounded-lg border border-outline-variant p-5 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-primary font-mono bg-primary/10 px-2 py-1 rounded">/spawn</code>
                </div>
                <p className="text-sm text-on-surface-variant">Kembali ke lobi utama server (Neo-Hub).</p>
              </div>
              <div className="bg-surface-container/80 backdrop-blur-sm rounded-lg border border-outline-variant p-5 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-primary font-mono bg-primary/10 px-2 py-1 rounded">/rtp</code>
                </div>
                <p className="text-sm text-on-surface-variant">Teleportasi secara acak ke lokasi survival (Random Teleport).</p>
              </div>
              <div className="bg-surface-container/80 backdrop-blur-sm rounded-lg border border-outline-variant p-5 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-primary font-mono bg-primary/10 px-2 py-1 rounded">/sethome [nama]</code>
                </div>
                <p className="text-sm text-on-surface-variant">Menyimpan lokasi saat ini untuk diteleportasi nanti menggunakan /home.</p>
              </div>
              <div className="bg-surface-container/80 backdrop-blur-sm rounded-lg border border-outline-variant p-5 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-primary font-mono bg-primary/10 px-2 py-1 rounded">/ah</code>
                </div>
                <p className="text-sm text-on-surface-variant">Membuka Auction House untuk jual beli barang antar pemain.</p>
              </div>
            </div>
          </section>

          {/* Section: Ranks */}
          <section id="ranks">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 shadow-[0_0_20px_rgba(34,211,238,0.4)] animate-pulse ring-1 ring-primary/40">
                <span className="material-symbols-outlined text-primary text-4xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">military_tech</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-on-surface-variant">
                  Tingkatan Rank & Detail Fasilitas
                </h2>
                <p className="text-on-surface-variant text-sm">Berbagai tingkatan previlese untuk mendukung petualanganmu.</p>
              </div>
            </div>

            <div className="space-y-6">
              
              {/* Rank 1: Explorer */}
              <div className={`group bg-surface-container/50 backdrop-blur-sm rounded-xl border hover:border-emerald-400/50 transition-all duration-300 overflow-hidden ${openRank === 'explorer' ? 'border-emerald-400/50 scale-[1.01]' : 'border-outline-variant hover:scale-[1.01]'}`}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                        <span className="material-symbols-outlined">explore</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-emerald-400 tracking-tight">Explorer</h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 shadow-[0_0_8px_rgba(52,211,153,0.2)]">Seasonal</span>
                        </div>
                        <p className="text-on-surface-variant text-sm mt-1">Rank permulaan untuk petualangan awal.</p>
                      </div>
                    </div>
                    <button 
                      className={`w-full md:w-auto px-5 py-2.5 rounded-lg border transition-all text-sm font-bold flex items-center justify-center gap-2 ${openRank === 'explorer' ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400' : 'bg-surface-container-highest/50 text-white border-outline-variant hover:bg-emerald-400/10 hover:text-emerald-400 hover:border-emerald-400'}`}
                      onClick={() => toggleRank('explorer')}
                    >
                      Detail Fitur <span className="material-symbols-outlined text-sm">{openRank === 'explorer' ? 'expand_less' : 'expand_more'}</span>
                    </button>
                  </div>
                </div>
                <div className={`expand-content bg-surface-container-highest/40 border-t border-outline-variant/30 ${openRank === 'explorer' ? 'expanded' : ''}`}>
                  <div className="expand-inner">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-emerald-400/80 flex items-center gap-2 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">inventory_2</span> Fasilitas
                        </h4>
                        <ul className="space-y-3 text-sm text-on-surface-variant">
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-400 rounded-full"></span> Total claim block bertambah +10,000 blocks</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-400 rounded-full"></span> Total slot Auction House bertambah 5 slot</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-emerald-400/80 flex items-center gap-2 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">terminal</span> Commands
                        </h4>
                        <div className="grid gap-2">
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/hat</code>
                            <span className="text-[10px] text-on-surface-variant">Blok Jadi Topi</span>
                          </div>
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/wb</code>
                            <span className="text-[10px] text-on-surface-variant">Virtual Workbench</span>
                          </div>
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/sethome</code>
                            <span className="text-[10px] text-on-surface-variant">Max 5 Homes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rank 2: Mercenary */}
              <div className={`group bg-surface-container/50 backdrop-blur-sm rounded-xl border hover:border-yellow-400/50 transition-all duration-300 overflow-hidden ${openRank === 'mercenary' ? 'border-yellow-400/50 scale-[1.01]' : 'border-outline-variant hover:scale-[1.01]'}`}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                        <span className="material-symbols-outlined">swords</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-yellow-400 tracking-tight">Mercenary</h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 shadow-[0_0_8px_rgba(250,204,21,0.2)]">Seasonal</span>
                        </div>
                        <p className="text-on-surface-variant text-sm mt-1">Penjelajah tangguh untuk medan berat.</p>
                      </div>
                    </div>
                    <button 
                      className={`w-full md:w-auto px-5 py-2.5 rounded-lg border transition-all text-sm font-bold flex items-center justify-center gap-2 ${openRank === 'mercenary' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400' : 'bg-surface-container-highest/50 text-white border-outline-variant hover:bg-yellow-400/10 hover:text-yellow-400 hover:border-yellow-400'}`}
                      onClick={() => toggleRank('mercenary')}
                    >
                      Detail Fitur <span className="material-symbols-outlined text-sm">{openRank === 'mercenary' ? 'expand_less' : 'expand_more'}</span>
                    </button>
                  </div>
                </div>
                <div className={`expand-content bg-surface-container-highest/40 border-t border-outline-variant/30 ${openRank === 'mercenary' ? 'expanded' : ''}`}>
                  <div className="expand-inner">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-yellow-400/80 flex items-center gap-2 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">inventory_2</span> Fasilitas
                        </h4>
                        <ul className="space-y-3 text-sm text-on-surface-variant">
                          <li className="text-yellow-400/60 italic text-[11px] flex items-center gap-2"><span className="material-symbols-outlined text-[12px]">history</span> Mewarisi fasilitas rank sebelumnya</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-400 rounded-full"></span> Total claim block bertambah +15,000 blocks</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-400 rounded-full"></span> Total slot Auction House bertambah 10 slot</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-yellow-400/80 flex items-center gap-2 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">terminal</span> Commands
                        </h4>
                        <div className="grid gap-2">
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/feed</code>
                            <span className="text-[10px] text-on-surface-variant">Cooldown: 10m</span>
                          </div>
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/enderchest</code>
                            <span className="text-[10px] text-on-surface-variant">Akses Dimanapun</span>
                          </div>
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/sethome</code>
                            <span className="text-[10px] text-on-surface-variant">Max 10 Homes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rank 3: Conqueror */}
              <div className={`group bg-surface-container/50 backdrop-blur-sm rounded-xl border hover:border-red-500/50 transition-all duration-300 overflow-hidden ${openRank === 'conqueror' ? 'border-red-500/50 scale-[1.01]' : 'border-outline-variant hover:scale-[1.01]'}`}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                        <span className="material-symbols-outlined">security</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-red-500 tracking-tight">Conqueror</h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-500 border border-red-500/30 shadow-[0_0_8px_rgba(239,68,68,0.2)]">Permanent</span>
                        </div>
                        <p className="text-on-surface-variant text-sm mt-1">Kekuatan besar dalam pertempuran.</p>
                      </div>
                    </div>
                    <button 
                      className={`w-full md:w-auto px-5 py-2.5 rounded-lg border transition-all text-sm font-bold flex items-center justify-center gap-2 ${openRank === 'conqueror' ? 'bg-red-500/10 text-red-500 border-red-500' : 'bg-surface-container-highest/50 text-white border-outline-variant hover:bg-red-500/10 hover:text-red-500 hover:border-red-500'}`}
                      onClick={() => toggleRank('conqueror')}
                    >
                      Detail Fitur <span className="material-symbols-outlined text-sm">{openRank === 'conqueror' ? 'expand_less' : 'expand_more'}</span>
                    </button>
                  </div>
                </div>
                <div className={`expand-content bg-surface-container-highest/40 border-t border-outline-variant/30 ${openRank === 'conqueror' ? 'expanded' : ''}`}>
                  <div className="expand-inner">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-red-500/80 flex items-center gap-2 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">inventory_2</span> Fasilitas
                        </h4>
                        <ul className="space-y-3 text-sm text-on-surface-variant">
                          <li className="text-red-500/60 italic text-[11px] flex items-center gap-2"><span className="material-symbols-outlined text-[12px]">history</span> Mewarisi fasilitas rank sebelumnya</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Total claim block bertambah +25,000 blocks</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Diskon shop server 5%</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-red-500/80 flex items-center gap-2 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">terminal</span> Commands
                        </h4>
                        <div className="grid gap-2">
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/heal</code>
                            <span className="text-[10px] text-on-surface-variant">Full HP (20m CD)</span>
                          </div>
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/fly</code>
                            <span className="text-[10px] text-on-surface-variant">Area Claim</span>
                          </div>
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/sethome</code>
                            <span className="text-[10px] text-on-surface-variant">Max 15 Homes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rank 4: Edelweiss */}
              <div className={`group bg-surface-container/50 backdrop-blur-sm rounded-xl border hover:border-orange-400/50 transition-all duration-300 overflow-hidden ${openRank === 'edelweiss' ? 'border-orange-400/50 scale-[1.01]' : 'border-outline-variant hover:scale-[1.01]'}`}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-400/10 text-orange-400 border border-orange-400/20 group-hover:shadow-[0_0_15px_rgba(251,146,60,0.3)]">
                        <span className="material-symbols-outlined">star</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-orange-400 tracking-tight">Edelweiss</h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-400/10 text-orange-400 border border-orange-400/30 shadow-[0_0_8px_rgba(251,146,60,0.2)]">Permanent</span>
                        </div>
                        <p className="text-on-surface-variant text-sm mt-1">Status legendaris yang disegani.</p>
                      </div>
                    </div>
                    <button 
                      className={`w-full md:w-auto px-5 py-2.5 rounded-lg border transition-all text-sm font-bold flex items-center justify-center gap-2 ${openRank === 'edelweiss' ? 'bg-orange-400/10 text-orange-400 border-orange-400' : 'bg-surface-container-highest/50 text-white border-outline-variant hover:bg-orange-400/10 hover:text-orange-400 hover:border-orange-400'}`}
                      onClick={() => toggleRank('edelweiss')}
                    >
                      Detail Fitur <span className="material-symbols-outlined text-sm">{openRank === 'edelweiss' ? 'expand_less' : 'expand_more'}</span>
                    </button>
                  </div>
                </div>
                <div className={`expand-content bg-surface-container-highest/40 border-t border-outline-variant/30 ${openRank === 'edelweiss' ? 'expanded' : ''}`}>
                  <div className="expand-inner">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-orange-400/80 flex items-center gap-2 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">inventory_2</span> Fasilitas
                        </h4>
                        <ul className="space-y-3 text-sm text-on-surface-variant">
                          <li className="text-orange-400/60 italic text-[11px] flex items-center gap-2"><span className="material-symbols-outlined text-[12px]">history</span> Mewarisi fasilitas rank sebelumnya</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-400 rounded-full"></span> Claim block +50,000 & Diskon 10%</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-400 rounded-full"></span> Keep inventory di area PvP</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-orange-400/80 flex items-center gap-2 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">terminal</span> Commands
                        </h4>
                        <div className="grid gap-2">
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/fix</code>
                            <span className="text-[10px] text-on-surface-variant">Repair Item (1h CD)</span>
                          </div>
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/nick</code>
                            <span className="text-[10px] text-on-surface-variant">Nama Panggilan Warna</span>
                          </div>
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/sethome</code>
                            <span className="text-[10px] text-on-surface-variant">Max 25 Homes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rank 5: Celestial */}
              <div className={`group bg-surface-container/50 backdrop-blur-sm rounded-xl border hover:border-purple-400/50 transition-all duration-300 overflow-hidden ${openRank === 'celestial' ? 'border-purple-400/50 scale-[1.01]' : 'border-outline-variant hover:scale-[1.01]'}`}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-400/10 text-purple-400 border border-purple-400/20 group-hover:shadow-[0_0_15px_rgba(192,132,252,0.3)]">
                        <span className="material-symbols-outlined">auto_awesome</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-purple-400 tracking-tight">Celestial</h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-400/10 text-purple-400 border border-purple-400/30 shadow-[0_0_8px_rgba(192,132,252,0.2)]">Permanent</span>
                        </div>
                        <p className="text-on-surface-variant text-sm mt-1">Puncak pencapaian tertinggi.</p>
                      </div>
                    </div>
                    <button 
                      className={`w-full md:w-auto px-5 py-2.5 rounded-lg border transition-all text-sm font-bold flex items-center justify-center gap-2 ${openRank === 'celestial' ? 'bg-purple-400/10 text-purple-400 border-purple-400' : 'bg-surface-container-highest/50 text-white border-outline-variant hover:bg-purple-400/10 hover:text-purple-400 hover:border-purple-400'}`}
                      onClick={() => toggleRank('celestial')}
                    >
                      Detail Fitur <span className="material-symbols-outlined text-sm">{openRank === 'celestial' ? 'expand_less' : 'expand_more'}</span>
                    </button>
                  </div>
                </div>
                <div className={`expand-content bg-surface-container-highest/40 border-t border-outline-variant/30 ${openRank === 'celestial' ? 'expanded' : ''}`}>
                  <div className="expand-inner">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-purple-400/80 flex items-center gap-2 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">inventory_2</span> Fasilitas
                        </h4>
                        <ul className="space-y-3 text-sm text-on-surface-variant">
                          <li className="text-purple-400/60 italic text-[11px] flex items-center gap-2"><span className="material-symbols-outlined text-[12px]">history</span> Mewarisi fasilitas rank sebelumnya</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"></span> +100k Claim blocks & 20% Diskon Shop</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"></span> Celestial Lounge & Priority Queue</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-purple-400/80 flex items-center gap-2 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">terminal</span> Commands
                        </h4>
                        <div className="grid gap-2">
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/fix all</code>
                            <span className="text-[10px] text-on-surface-variant">Repair All (1h CD)</span>
                          </div>
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/god</code>
                            <span className="text-[10px] text-on-surface-variant">Kebal Damage (PVE)</span>
                          </div>
                          <div className="flex justify-between items-center bg-black/30 p-2 rounded border border-white/5">
                            <code className="text-primary font-mono text-xs">/sethome</code>
                            <span className="text-[10px] text-on-surface-variant">Max 50 Homes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>

      {/* <Footer /> MATIKAN SEMENTARA */}
    </div>
  );
}