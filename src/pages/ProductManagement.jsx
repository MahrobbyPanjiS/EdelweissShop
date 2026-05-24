/**
 * Halaman Product Management
 * Mengelola produk, rank, item, dan plugin di server.
 */
import React, { useState } from 'react';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import {
    Plus,
    Pencil,
    Trash2,
    Search,
    Filter,
    Package,
    Tag,
    AlertCircle
} from 'lucide-react';

const ProductManagement = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Obsidian VIP', type: 'Rank', status: 'Active', price: 'Rp 50.000', icon: '👑' },
        { id: 2, name: 'Auto-Miner Kit', type: 'Plugin', status: 'Active', price: 'Rp 35.000', icon: '⚙️' },
        { id: 3, name: 'Legacy Key', type: 'Item', status: 'Deprecated', price: 'Rp 25.000', icon: '🔑' },
        { id: 4, name: 'Crystal Pass', type: 'Rank', status: 'Active', price: 'Rp 75.000', icon: '💎' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === 'All' || product.type === filterType;
        return matchesSearch && matchesFilter;
    });

    const handleDelete = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <div className="bg-background text-on-background font-body-base h-screen overflow-hidden flex flex-col relative z-0">
            {/* Animated Background */}
            <BackgroundAnimation />

            {/* Top Navigation */}
            <Navbar />

            {/* Main Layout Container */}
            <div className="flex flex-1 overflow-hidden w-full max-w-[1280px] mx-auto">
                {/* Left Sidebar Navigation */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto bg-transparent relative z-10">
                    <div className="p-gutter md:p-section-gap space-y-xl max-w-5xl mx-auto">
                        
                        {/* Page Header */}
                        <div>
                            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Product Management</h1>
                            <p className="font-body-base text-body-base text-on-surface-variant">Kelola semua produk, rank, dan item server.</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
                            <div className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300">
                                <div className="flex justify-between items-start">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant">Total Products</span>
                                    <Package size={24} className="text-primary" />
                                </div>
                                <div className="font-headline-lg text-headline-lg text-on-surface mt-auto">{products.length}</div>
                            </div>

                            <div className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300">
                                <div className="flex justify-between items-start">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant">Active</span>
                                    <Tag size={24} className="text-[#10b981]" />
                                </div>
                                <div className="font-headline-lg text-headline-lg text-on-surface mt-auto">{products.filter(p => p.status === 'Active').length}</div>
                            </div>

                            <div className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300">
                                <div className="flex justify-between items-start">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant">Deprecated</span>
                                    <AlertCircle size={24} className="text-error" />
                                </div>
                                <div className="font-headline-lg text-headline-lg text-on-surface mt-auto">{products.filter(p => p.status === 'Deprecated').length}</div>
                            </div>

                            <div className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300">
                                <div className="flex justify-between items-start">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant">Revenue</span>
                                    <span className="text-tertiary text-xl">💰</span>
                                </div>
                                <div className="font-headline-lg text-headline-lg text-on-surface mt-auto text-secondary text-sm">View Report</div>
                            </div>
                        </div>

                        {/* Search & Filter */}
                        <div className="cyber-card rounded-xl p-lg flex flex-col md:flex-row gap-md">
                            <div className="flex-1 relative">
                                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                                <input
                                    type="text"
                                    placeholder="Cari produk..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-surface-container rounded-lg border border-outline-variant pl-10 pr-4 py-2 font-body-base text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex gap-md items-center">
                                <Filter size={18} className="text-on-surface-variant" />
                                <select
                                    value={filterType}
                                    onChange={(e) => setFilterType(e.target.value)}
                                    className="bg-surface-container rounded-lg border border-outline-variant px-4 py-2 font-body-base text-on-surface focus:outline-none focus:border-primary transition-colors"
                                >
                                    <option>All</option>
                                    <option>Rank</option>
                                    <option>Plugin</option>
                                    <option>Item</option>
                                </select>
                            </div>
                            <button className="bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] px-4 py-2 rounded-lg font-body-bold transition-all flex items-center gap-2">
                                <Plus size={18} /> New Product
                            </button>
                        </div>

                        {/* Products Table */}
                        <div className="cyber-card rounded-xl overflow-hidden flex flex-col">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-surface-container-lowest">
                                            <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Icon</th>
                                            <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Product Name</th>
                                            <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Type</th>
                                            <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Price</th>
                                            <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Status</th>
                                            <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-body-base text-body-base text-on-surface">
                                        {filteredProducts.length > 0 ? (
                                            filteredProducts.map(product => (
                                                <tr key={product.id} className="hover:bg-surface-container-highest/30 transition-colors group">
                                                    <td className="p-4 border-b border-outline-variant/50 text-2xl">{product.icon}</td>
                                                    <td className="p-4 border-b border-outline-variant/50 font-body-bold">{product.name}</td>
                                                    <td className="p-4 border-b border-outline-variant/50 text-tertiary text-sm">{product.type}</td>
                                                    <td className="p-4 border-b border-outline-variant/50 text-primary font-code">{product.price}</td>
                                                    <td className="p-4 border-b border-outline-variant/50">
                                                        <span className={`px-2 py-1 rounded text-xs font-body-bold border ${
                                                            product.status === 'Active'
                                                                ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30'
                                                                : 'bg-error/10 text-error border-error/30'
                                                        }`}>
                                                            {product.status}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 border-b border-outline-variant/50 text-right flex gap-2 justify-end">
                                                        <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-highest/50">
                                                            <Pencil size={18} />
                                                        </button>
                                                        <button 
                                                            onClick={() => handleDelete(product.id)}
                                                            className="text-on-surface-variant hover:text-error transition-colors p-2 rounded-lg hover:bg-surface-container-highest/50"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="p-8 text-center text-on-surface-variant">
                                                    Tidak ada produk yang ditemukan
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductManagement;
