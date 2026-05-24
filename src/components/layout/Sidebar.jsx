/**
 * Komponen Sidebar
 * Navigasi sisi kiri untuk halaman Admin Panel.
 * Menggunakan react-router-dom untuk navigasi tanpa muat ulang halaman.
 */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Users, Activity, Settings } from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();

    // Fungsi untuk memberikan styling berbeda pada menu yang sedang aktif
    const getMenuClass = (path) => {
        // Exact match untuk Dashboard, startsWith untuk menu lain
        const isActive = path === '/admin' 
            ? location.pathname === '/admin' 
            : location.pathname.startsWith(path);
        
        if (isActive) {
            return "flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border-r-4 border-primary text-primary font-body-bold shadow-[inset_0_0_20px_rgba(34,211,238,0.05)] transition-all";
        }
        return "flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/50 font-body-base transition-all duration-300 group hover:translate-x-1";
    };

    return (
        <aside className="hidden md:flex flex-col w-64 shrink-0">
            <div className="sticky top-[100px] bg-surface-container-lowest/80 backdrop-blur-md rounded-lg metallic-border shadow-lg overflow-hidden">
                <div className="p-md border-b border-outline-variant/50">
                    <h2 className="font-label-caps text-label-caps text-on-surface-variant">Admin Console</h2>
                </div>
                <nav className="overflow-y-auto p-4 space-y-2">
                <Link to="/admin" className={getMenuClass('/admin')}>
                    <LayoutDashboard size={20} className={location.pathname === '/admin' ? "" : "group-hover:text-primary transition-colors"} />
                    Dashboard
                </Link>
                
                <Link to="/admin/products" className={getMenuClass('/admin/products')}>
                    <Package size={20} className={location.pathname.includes('/admin/products') ? "" : "group-hover:text-primary transition-colors"} />
                    Product Management
                </Link>
                
                <Link to="/admin/roles" className={getMenuClass('/admin/roles')}>
                    <Users size={20} className={location.pathname.includes('/admin/roles') ? "" : "group-hover:text-primary transition-colors"} />
                    User Roles
                </Link>
                
                <Link to="/admin/analytics" className={getMenuClass('/admin/analytics')}>
                    <Activity size={20} className={location.pathname.includes('/admin/analytics') ? "" : "group-hover:text-primary transition-colors"} />
                    Sales Analytics
                </Link>
                
                <Link to="/admin/config" className={getMenuClass('/admin/config')}>
                    <Settings size={20} className={location.pathname.includes('/admin/config') ? "" : "group-hover:text-primary transition-colors"} />
                    Site Config
                </Link>
            </nav>
            </div>
        </aside>
    );
};

export default Sidebar;