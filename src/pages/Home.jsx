import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';

/**
 * Halaman Utama (Home Page)
 * Menyajikan landing page server Minecraft Edelweiss Craft, meliputi hero section,
 * highlight rank/produk, panduan dasar, dan galeri komunitas.
 * Telah diperbarui dengan integrasi latar belakang animasi (BackgroundAnimation).
 */
export default function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-base antialiased relative z-0">
      {/* Mengaktifkan animasi background partikel dan void gradient */}
      <BackgroundAnimation variant="v1" />

      <Navbar />

      <main className="flex-grow flex flex-col gap-section-gap pb-section-gap">
        {/* Hero Section */}
        <section className="relative w-full max-w-[1280px] mx-auto px-gutter mt-section-gap flex flex-col md:flex-row items-center gap-xl">
          <div className="flex-1 flex flex-col gap-lg z-10">
            <h1 className="font-display-lg text-display-lg md:font-display-lg md:text-display-lg text-on-surface">
              Enter the <span className="text-primary aether-text-glow">Void</span>
            </h1>
            <p className="font-body-base text-body-base text-on-surface-variant max-w-lg">
              Experience Minecraft survival elevated. Join Edelweiss Craft for an immersive, high-performance journey through custom biomes, intricate economies, and challenging dungeons.
            </p>
            <div className="flex gap-md mt-md">
              <button className="btn-primary">Join the Adventure</button>
              <button className="btn-outline">Browse Store</button>
            </div>
            <div className="mt-lg bg-[#0f0f13] steel-edge rounded-lg p-md inline-block max-w-max">
              <span className="font-label-caps text-label-caps text-on-surface-variant block mb-sm">Server IP</span>
              <div className="flex items-center gap-md">
                <code className="font-code text-code text-[#22c55e]">play.edelweisscraft.net</code>
                <button 
                  className="text-primary hover:text-primary-container" 
                  onClick={() => navigator.clipboard.writeText('play.edelweisscraft.net')}
                  title="Copy IP"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center relative">
            <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            <img 
              alt="Edelweiss Craft Hero" 
              className="w-80 h-80 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.4)] animate-[pulse_4s_ease-in-out_infinite]" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uhhFxuoE_sImXnDV11gHOEPi7bu8weVfsQjLItEepm_uuI0oFF3RAAg7umLbU37XouwL_nVViorJuZAnxDFZ2zYSZqbbrK3HmwbTnw322Z7Ts6b2Ydf7eAl3tKsmSAA6LahZ2T0zClq7sJbEHcSnx2chXvJXJZcdEvDiS9C-ZEWkijoAes_o31M1THoshuWbVrzXouysz7GFwa0JlJB0S6O2Mn-CP1ZS4ZfmmBoaeLukSbVF2Skk9DuTfN1YNYPxp038LSItx-pfw" 
            />
          </div>
        </section>

        {/* Featured Ranks */}
        <section className="w-full max-w-[1280px] mx-auto px-gutter">
          <div className="flex flex-col gap-sm mb-xl">
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg md:text-headline-lg text-on-surface flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              Featured Ranks
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant">Elevate your gameplay with exclusive server perks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* VIP Rank */}
            <div className="bg-[#0d0d0f] steel-edge rounded-xl p-lg flex flex-col gap-md holo-card transition-all duration-300">
              <div className="flex justify-between items-start">
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">VIP</h3>
                <span className="font-label-caps text-label-caps text-secondary px-sm py-xs bg-secondary/10 rounded">Popular</span>
              </div>
              <div className="font-display-lg text-display-lg text-on-surface mt-sm mb-md">
                Rp 9.900<span className="font-body-base text-body-base text-on-surface-variant">/mo</span>
              </div>
              <ul className="flex flex-col gap-sm font-body-base text-body-base text-on-surface-variant flex-grow">
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary text-sm">check</span> Access to VIP lounge</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary text-sm">check</span> Custom chat colors</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary text-sm">check</span> Priority queue</li>
              </ul>
              <button className="btn-secondary w-full mt-lg">Select VIP</button>
            </div>
            
            {/* MVP Rank */}
            <div className="bg-[#0d0d0f] prestige-edge rounded-xl p-lg flex flex-col gap-md holo-card transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary-fixed-dim to-tertiary"></div>
              <div className="flex justify-between items-start">
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-tertiary">MVP</h3>
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <div className="font-display-lg text-display-lg text-on-surface mt-sm mb-md">
                Rp 19.900<span className="font-body-base text-body-base text-on-surface-variant">/mo</span>
              </div>
              <ul className="flex flex-col gap-sm font-body-base text-body-base text-on-surface-variant flex-grow">
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-tertiary text-sm">check</span> All VIP Perks</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-tertiary text-sm">check</span> Fly in hubs</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-tertiary text-sm">check</span> Exclusive pets</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-tertiary text-sm">check</span> /nick command</li>
              </ul>
              <button className="btn-primary w-full mt-lg bg-tertiary-fixed-dim text-on-tertiary-container hover:shadow-[0_0_15px_rgba(233,195,73,0.5)]">Select MVP</button>
            </div>
            
            {/* Elite Rank */}
            <div className="bg-[#0d0d0f] steel-edge rounded-xl p-lg flex flex-col gap-md holo-card transition-all duration-300 border-primary/50">
              <div className="flex justify-between items-start">
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">Elite</h3>
              </div>
              <div className="font-display-lg text-display-lg text-on-surface mt-sm mb-md">
                Rp 49.900<span className="font-body-base text-body-base text-on-surface-variant">/life</span>
              </div>
              <ul className="flex flex-col gap-sm font-body-base text-body-base text-on-surface-variant flex-grow">
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary text-sm">check</span> All MVP Perks</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary text-sm">check</span> Lifetime status</li>
                <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary text-sm">check</span> Custom join message</li>
              </ul>
              <button className="btn-outline w-full mt-lg">Select Elite</button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full max-w-[1280px] mx-auto px-gutter mt-section-gap">
          <div className="flex flex-col gap-sm mb-xl">
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg md:text-headline-lg text-on-surface flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
              Featured Products
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant">Exclusive items from our store.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* Product 1 */}
            <div className="bg-surface-container-high steel-edge rounded-xl overflow-hidden flex flex-col group hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <img alt="Obsidian Rank" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLGb_Y3IKN6K4upnW62sdWf7nh7_RMHZDOKvL0hiyPbn_3t7V3w9N5xQC4n4zWD7EFNNaHOUkqZiW7OC6vzBFYc9kJ3tfXUQjJhYb1LUeqsXpo5ABmvyGotKsZ37N3VJJ1ZiAYvSd846xVMDWixTrSWGdSruSqaOn4q99ZwDQDakcK3yY63iAQ7kc9uP-I9rtmkPa_5kgqGcUEu5bU9Z_kh_RhV6E0KdtCmGQfTe0g1bs-TgTtH8IJmOnY7VHsaVZSqewzuYsqcmyA" />
                <div className="absolute top-md left-md bg-surface-container-highest/80 backdrop-blur-md text-primary font-label-caps text-label-caps px-2 py-1 rounded border border-primary/30">RANK</div>
              </div>
              <div className="p-lg flex flex-col flex-grow gap-md">
                <div>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Obsidian Rank</h3>
                  <p className="font-body-base text-body-base text-on-surface-variant mt-sm">Ultimate prestige and power in the server. Gain access to exclusive areas, daily rewards, and premium commands to enhance your journey.</p>
                </div>
                <div className="font-display-lg text-headline-lg text-primary mt-auto">Rp 89.900</div>
                <div className="flex flex-col gap-sm mt-sm">
                  <button className="w-full bg-primary text-on-primary font-bold py-md rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-200 hover:scale-[0.98]">Beli Sekarang</button>
                  <button className="w-full border border-primary/50 text-primary font-bold py-md rounded-lg flex justify-center items-center gap-2 transition-all duration-200 hover:bg-primary/10">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-surface-container-high steel-edge rounded-xl overflow-hidden flex flex-col group hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <img alt="Aether Blade Skin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEEN5p-yboFiuU20K8XDq3NAwUPUnwIUZbkoIpwXPXsBMeR0RAY4CBYcoGcMpOFDCIeE1g673ncVdrVElSaYxh7pwRmYtuX5DB2nxNn38hwRdUYjjwXD3dZhENh-CGD2JrraZxY6Luu7gaUVSaMyLHfVmmrX55k-6CCLbT2CxDAbPv4XswKf5It4B6Vv8-rGll118ljeZm51ZQtyzhSiJInyz3BGEoE5m_R4viEphQVBS5oX2Dm5OXEU7c3i8q4pHvZ456yhcjM_Qa" />
                <div className="absolute top-md left-md bg-surface-container-highest/80 backdrop-blur-md text-primary font-label-caps text-label-caps px-2 py-1 rounded border border-primary/30">ITEM</div>
              </div>
              <div className="p-lg flex flex-col flex-grow gap-md">
                <div>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Aether Blade Skin</h3>
                  <p className="font-body-base text-body-base text-on-surface-variant mt-sm">Cosmetic weapon skin with glowing particle effects. Stand out in combat with this visually stunning legendary skin override.</p>
                </div>
                <div className="font-display-lg text-headline-lg text-primary mt-auto">Rp 14.900</div>
                <div className="flex flex-col gap-sm mt-sm">
                  <button className="w-full bg-primary text-on-primary font-bold py-md rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-200 hover:scale-[0.98]">Beli Sekarang</button>
                  <button className="w-full border border-primary/50 text-primary font-bold py-md rounded-lg flex justify-center items-center gap-2 transition-all duration-200 hover:bg-primary/10">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="bg-surface-container-high steel-edge rounded-xl overflow-hidden flex flex-col group hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <img alt="Anti-Cheat Core" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXZCgw-hd9fjxNWgzsOiJn-TT1vmsGgyim7COnpvGVLf_R2c5weDFbFUK7ajS8NMqV_qF70rU9ZUIs0ORHKhpbUBl4W24DmEiQOgZ8NvrOdDkBzSSSedq2sAenMIG01J0ZiafNUn1Bm4qpT8sBtZ9M6sd8N__OhStPs6VaZl_Q5BdWhct-fa2H1U9q192bX2e8X0lj2AtqVxGLyXSawjybmUGLDY9hbZD5lTFnB8OBQg8qC0KNfqfZ_90f5uPDdvwKukwIlW_-8VkW" />
                <div className="absolute top-md left-md bg-surface-container-highest/80 backdrop-blur-md text-primary font-label-caps text-label-caps px-2 py-1 rounded border border-primary/30">ADDON</div>
              </div>
              <div className="p-lg flex flex-col flex-grow gap-md">
                <div>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Anti-Cheat Core</h3>
                  <p className="font-body-base text-body-base text-on-surface-variant mt-sm">Server addon for enhanced security. Protect your progress and ensure a fair playing environment with our advanced detection systems.</p>
                </div>
                <div className="font-display-lg text-headline-lg text-primary mt-auto">Rp 29.900</div>
                <div className="flex flex-col gap-sm mt-sm">
                  <button className="w-full bg-primary text-on-primary font-bold py-md rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-200 hover:scale-[0.98]">Beli Sekarang</button>
                  <button className="w-full border border-primary/50 text-primary font-bold py-md rounded-lg flex justify-center items-center gap-2 transition-all duration-200 hover:bg-primary/10">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="w-full max-w-[1280px] mx-auto px-gutter mt-section-gap">
          <div className="flex flex-col gap-sm mb-xl">
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg md:text-headline-lg text-on-surface flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
              Panduan Dasar
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant">Mulai petualangan Anda dengan panduan ini.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            <a className="bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-300 rounded-xl p-lg flex flex-col gap-sm steel-edge group" href="#">
              <span className="material-symbols-outlined text-primary text-3xl mb-sm group-hover:scale-110 transition-transform">wifi</span>
              <h3 className="font-body-bold text-lg text-on-surface">Connection Info</h3>
              <p className="font-body-base text-on-surface-variant">Cara bergabung ke server.</p>
            </a>
            <a className="bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-300 rounded-xl p-lg flex flex-col gap-sm steel-edge group" href="#">
              <span className="material-symbols-outlined text-primary text-3xl mb-sm group-hover:scale-110 transition-transform">gavel</span>
              <h3 className="font-body-bold text-lg text-on-surface">Rules</h3>
              <p className="font-body-base text-on-surface-variant">Peraturan komunitas dan server.</p>
            </a>
            <a className="bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-300 rounded-xl p-lg flex flex-col gap-sm steel-edge group" href="#">
              <span className="material-symbols-outlined text-primary text-3xl mb-sm group-hover:scale-110 transition-transform">download</span>
              <h3 className="font-body-bold text-lg text-on-surface">Installation</h3>
              <p className="font-body-base text-on-surface-variant">Panduan instalasi modpack.</p>
            </a>
          </div>
        </section>

        {/* Community Showcase */}
        <section className="w-full max-w-[1280px] mx-auto px-gutter mt-section-gap">
          <div className="flex flex-col gap-sm mb-xl">
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg md:text-headline-lg text-on-surface flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
              Cuplikan Komunitas Server
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant">Karya dan momen terbaik dari pemain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            <div className="aspect-square rounded-xl overflow-hidden steel-edge">
              <img alt="Community Build 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9P16qANsbJmiKFBA6vHVmmzxTCJm3A0z848dWBTCyF4O4Llv4ds7PdEUZZ6Ohv1tAb2NaU9KKyxruhxS-0zC79D1p0UyBdGmQhgsBptX3iwtuK29tu2YLomnZifdEPrCrcQzal5JV3-Xe78B_FVJYE1W8ErF8hFYJ0AtyNspTP2P1zWJ_4IWCjwzuWOfhpjBLWru9ELilucJN4N63RLngvwdpdvOcq-6oYmOjo2hCAwRtA4Rw8eIqGhAKfNEwSPVJI_FIcs_aOSra" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden steel-edge">
              <img alt="Community Build 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9P16qANsbJmiKFBA6vHVmmzxTCJm3A0z848dWBTCyF4O4Llv4ds7PdEUZZ6Ohv1tAb2NaU9KKyxruhxS-0zC79D1p0UyBdGmQhgsBptX3iwtuK29tu2YLomnZifdEPrCrcQzal5JV3-Xe78B_FVJYE1W8ErF8hFYJ0AtyNspTP2P1zWJ_4IWCjwzuWOfhpjBLWru9ELilucJN4N63RLngvwdpdvOcq-6oYmOjo2hCAwRtA4Rw8eIqGhAKfNEwSPVJI_FIcs_aOSra" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden steel-edge">
              <img alt="Community Build 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9P16qANsbJmiKFBA6vHVmmzxTCJm3A0z848dWBTCyF4O4Llv4ds7PdEUZZ6Ohv1tAb2NaU9KKyxruhxS-0zC79D1p0UyBdGmQhgsBptX3iwtuK29tu2YLomnZifdEPrCrcQzal5JV3-Xe78B_FVJYE1W8ErF8hFYJ0AtyNspTP2P1zWJ_4IWCjwzuWOfhpjBLWru9ELilucJN4N63RLngvwdpdvOcq-6oYmOjo2hCAwRtA4Rw8eIqGhAKfNEwSPVJI_FIcs_aOSra" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden steel-edge">
              <img alt="Community Build 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9P16qANsbJmiKFBA6vHVmmzxTCJm3A0z848dWBTCyF4O4Llv4ds7PdEUZZ6Ohv1tAb2NaU9KKyxruhxS-0zC79D1p0UyBdGmQhgsBptX3iwtuK29tu2YLomnZifdEPrCrcQzal5JV3-Xe78B_FVJYE1W8ErF8hFYJ0AtyNspTP2P1zWJ_4IWCjwzuWOfhpjBLWru9ELilucJN4N63RLngvwdpdvOcq-6oYmOjo2hCAwRtA4Rw8eIqGhAKfNEwSPVJI_FIcs_aOSra" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}