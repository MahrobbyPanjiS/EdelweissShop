/**
 * Halaman Admin Panel
 * Tampilan utama yang mengintegrasikan background, navbar, sidebar, dan konten dashboard.
 */
import React from 'react';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
import Navbar from '../components/layout/Navbar'; // <-- Sudah diganti menggunakan Navbar asli
import Sidebar from '../components/layout/Sidebar';
import { 
    CircleDollarSign, 
    UserPlus, 
    Cpu, 
    Plus, 
    Pencil, 
    AlertTriangle, 
    ShoppingCart, 
    RotateCcw, 
    ShieldAlert 
} from 'lucide-react';

const AdminPanel = () => {
    return (
        <div className="bg-background text-on-background font-body-base h-screen overflow-hidden flex flex-col relative z-0">
            {/* Animated Background Canvas */}
            <BackgroundAnimation />

            {/* Top Navigation (Asli) */}
            <Navbar />

            {/* Main Layout Container */}
            <div className="flex flex-1 overflow-hidden w-full max-w-[1280px] mx-auto">
                
                {/* Left Sidebar Navigation */}
                <Sidebar />

                {/* Main Content Canvas */}
                <main className="flex-1 overflow-y-auto bg-transparent relative z-10">
                    <div className="p-gutter md:p-section-gap space-y-xl max-w-5xl mx-auto">
                        
                        {/* Page Header */}
                        <div>
                            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">System Overview</h1>
                            <p className="font-body-base text-body-base text-on-surface-variant">Real-time metrics and administration controls.</p>
                        </div>

                        {/* Stats Overview (Bento Grid) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                            {/* Total Sales Card */}
                            <div className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300">
                                <div className="flex justify-between items-start">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant">Total Sales</span>
                                    <CircleDollarSign size={24} className="text-tertiary" />
                                </div>
                                <div className="font-headline-lg text-headline-lg text-on-surface mt-auto">
                                    Rp 12.450.000<span className="text-primary text-sm ml-2">+14%</span>
                                </div>
                            </div>

                            {/* New Users Card */}
                            <div className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300">
                                <div className="flex justify-between items-start">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant">New Users</span>
                                    <UserPlus size={24} className="text-primary" />
                                </div>
                                <div className="font-headline-lg text-headline-lg text-on-surface mt-auto">
                                    342<span className="text-tertiary text-sm ml-2">Today</span>
                                </div>
                            </div>

                            {/* Server Status Card */}
                            <div className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300 relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                                <div className="flex justify-between items-start">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant">Server Load</span>
                                    <Cpu size={24} className="text-[#10b981]" />
                                </div>
                                <div className="font-headline-lg text-headline-lg text-on-surface mt-auto flex items-end gap-2">
                                    42%
                                    <div className="w-full h-2 bg-surface-container-highest rounded-full mb-2">
                                        <div className="h-full bg-primary rounded-full w-[42%] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
                            {/* Product Management Table */}
                            <div className="lg:col-span-2 cyber-card rounded-xl overflow-hidden flex flex-col">
                                <div className="p-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                                    <h3 className="font-body-bold text-body-bold text-on-surface">Product Management</h3>
                                    <button className="bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] px-4 py-2 rounded-lg font-body-bold transition-all text-sm flex items-center gap-2">
                                        <Plus size={18} /> New Item
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-surface-container-lowest">
                                                <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Item Name</th>
                                                <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Type</th>
                                                <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Status</th>
                                                <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="font-body-base text-body-base text-on-surface">
                                            <tr className="hover:bg-surface-container-highest/30 transition-colors group">
                                                <td className="p-4 border-b border-outline-variant/50 font-body-bold">Obsidian VIP</td>
                                                <td className="p-4 border-b border-outline-variant/50 text-tertiary">Rank</td>
                                                <td className="p-4 border-b border-outline-variant/50">
                                                    <span className="px-2 py-1 rounded text-xs bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30">Active</span>
                                                </td>
                                                <td className="p-4 border-b border-outline-variant/50 text-right">
                                                    <button className="text-on-surface-variant hover:text-primary">
                                                        <Pencil size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-surface-container-highest/30 transition-colors group">
                                                <td className="p-4 border-b border-outline-variant/50 font-body-bold">Auto-Miner Kit</td>
                                                <td className="p-4 border-b border-outline-variant/50 text-secondary">Plugin</td>
                                                <td className="p-4 border-b border-outline-variant/50">
                                                    <span className="px-2 py-1 rounded text-xs bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30">Active</span>
                                                </td>
                                                <td className="p-4 border-b border-outline-variant/50 text-right">
                                                    <button className="text-on-surface-variant hover:text-primary">
                                                        <Pencil size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-surface-container-highest/30 transition-colors group">
                                                <td className="p-4 border-b border-outline-variant/50 font-body-bold flex items-center gap-2">
                                                    Legacy Key <AlertTriangle size={16} className="text-error" />
                                                </td>
                                                <td className="p-4 border-b border-outline-variant/50 text-secondary">Item</td>
                                                <td className="p-4 border-b border-outline-variant/50">
                                                    <span className="px-2 py-1 rounded text-xs bg-error/10 text-error border border-error/30">Deprecated</span>
                                                </td>
                                                <td className="p-4 border-b border-outline-variant/50 text-right">
                                                    <button className="text-on-surface-variant hover:text-primary">
                                                        <Pencil size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Recent Activity Feed */}
                            <div className="cyber-card rounded-xl p-lg flex flex-col">
                                <h3 className="font-body-bold text-body-bold text-on-surface mb-md">System Log</h3>
                                <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/30 text-primary">
                                            <ShoppingCart size={14} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <p className="font-body-base text-body-base text-on-surface text-sm">User <span className="text-primary">@NeonKnight</span> purchased VIP Rank.</p>
                                            <p className="font-code text-code text-on-surface-variant text-xs mt-1">2 mins ago</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 border border-outline-variant text-on-surface-variant">
                                            <RotateCcw size={14} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <p className="font-body-base text-body-base text-on-surface text-sm">Automated backup completed successfully.</p>
                                            <p className="font-code text-code text-[#10b981] text-xs mt-1">SYSTEM_OK • 15 mins ago</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center shrink-0 border border-error/30 text-error">
                                            <ShieldAlert size={14} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <p className="font-body-base text-body-base text-on-surface text-sm">Failed login attempt from IP 192.168.1.104</p>
                                            <p className="font-code text-code text-error text-xs mt-1">WARN_0x4A • 1 hour ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;