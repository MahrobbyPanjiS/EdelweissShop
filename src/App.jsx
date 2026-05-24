import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import Wiki from './pages/Wiki';
import AdminPanel from './pages/AdminPanel';
import ProductManagement from './pages/ProductManagement';
import UserRoles from './pages/UserRoles';
import SalesAnalytics from './pages/SalesAnalytics';
import SiteConfig from './pages/SiteConfig';
import Help from './pages/Help';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

/**
 * Komponen Utama Aplikasi (App)
 * Berfungsi sebagai sistem perutean (routing) utama untuk menavigasi 
 * antar halaman di dalam aplikasi Edelweiss Craft.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Rute untuk halaman utama (Home) */}
        <Route path="/" element={<Home />} />
        
        {/* Rute untuk halaman toko (Store) */}
        <Route path="/store" element={<Store />} />

        {/* Rute untuk halaman keranjang belanja (Cart) */}
        <Route path="/cart" element={<Cart />} />

        {/* Rute untuk halaman wiki (Wiki) */}
        <Route path="/wiki" element={<Wiki />} />
        
        {/* Rute untuk halaman bantuan (Help) */}
        <Route path="/help" element={<Help />} />

        {/* Rute untuk halaman profil user (Profile) */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        {/* Rute untuk halaman panel admin (Admin Panel) */}
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/products" element={<ProductManagement />} />
        <Route path="/admin/roles" element={<UserRoles />} />
        <Route path="/admin/analytics" element={<SalesAnalytics />} />
        <Route path="/admin/config" element={<SiteConfig />} />
        
        {/* Rute fallback untuk menangani URL yang tidak ditemukan (404 Not Found) */}
        <Route path="*" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;