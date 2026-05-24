import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Komponen Navigasi Utama (Navbar)
 * Menampilkan logo, tautan halaman dinamis, dan ikon interaktif.
 */
export default function Navbar() {
  const location = useLocation();

  // Fungsi pembantu untuk menentukan gaya CSS menu yang sedang aktif
  const getNavStyle = (path) => {
    if (location.pathname === path) {
      return "text-primary font-body-bold border-b-2 border-primary pb-1 px-md py-sm active:scale-95 transition-transform duration-100";
    }
    return "text-on-surface-variant font-body-base hover:text-primary transition-colors duration-300 hover:bg-surface-container-highest/50 rounded-lg transition-all duration-200 px-md py-sm active:scale-95 transition-transform duration-100";
  };

  return (
    <nav className="bg-surface/90 dark:bg-surface/90 backdrop-blur-md docked full-width top-0 z-50 border-b border-outline-variant shadow-lg shadow-surface-container-lowest sticky">
      <div className="flex justify-between items-center w-full px-gutter py-md max-w-[1280px] mx-auto">
        
        {/* Bagian Logo */}
        <Link to="/" className="flex items-center gap-sm">
          <img 
            alt="Edelweiss Craft Logo" 
            className="h-10 w-10 object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2HuLAcsYgB7QeXOoj3b_lgocfSa8mXbrdex-0G1jS0bVPVh-OothIaVo5yNWKUj4d2j6kwhNT80BfOUiEysKzIhHCO1eMKg07U16f3IQDP30uZSNQ4-TrbMq7217o-A2wI-PBpaDPLT23OP3jNxiVKysE_am_CKpReBmLr16MJNoJyKPkth8PXyEBaU55pxu-t8c7OIqsULZR6zOy5CmBX5Mw9xjnLWog2umA4bDInej8PZoHnNZIeFosBhEOlVGs2LAC6pCXh72z" 
          />
          <div className="font-headline-lg text-headline-lg font-black text-primary drop-shadow-[0_0_10px_rgba(47,217,244,0.5)]">
            Edelweiss Craft
          </div>
        </Link>

        {/* Bagian Tautan Navigasi Berbasis Router */}
        <div className="hidden md:flex gap-lg items-center">
          <Link to="/" className={getNavStyle('/')}>Home</Link>
          <Link to="/store" className={getNavStyle('/store')}>Store</Link>
          <Link to="/wiki" className={getNavStyle('/wiki')}>Wiki</Link>
          <Link to="/help" className={getNavStyle('/help')}>Help</Link>
        </div>

        {/* Bagian Ikon Interaktif */}
        <div className="flex items-center gap-md text-primary dark:text-primary">
          <Link 
            to="/cart"
            className="hover:bg-surface-container-highest/50 rounded-lg transition-all duration-200 p-sm active:scale-95 transition-transform duration-100"
            aria-label="Shopping Cart"
            title="Keranjang Belanja"
          >
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
          </Link>
          
          <Link 
            to="/profile" 
            className="hover:bg-surface-container-highest/50 rounded-lg transition-all duration-200 p-sm active:scale-95 transition-transform duration-100 flex items-center justify-center"
            aria-label="Profile"
          >
            <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          </Link>

          {/* --- TOMBOL ADMIN PANEL --- */}
          <Link 
            to="/adminpanel" 
            className="hover:bg-surface-container-highest/50 rounded-lg transition-all duration-200 p-sm active:scale-95 transition-transform duration-100 flex items-center justify-center text-tertiary"
            aria-label="Admin Panel"
            title="Admin Dashboard"
          >
            <span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
          </Link>
          {/* -------------------------- */}
        </div>

      </div>
    </nav>
  );
}