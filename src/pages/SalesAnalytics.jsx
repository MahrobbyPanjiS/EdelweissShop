/**
 * Halaman Sales Analytics
 * Dashboard analytics penjualan dengan chart dan insights.
 */
import React from 'react';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import {
    TrendingUp,
    TrendingDown,
    BarChart3,
    PieChart,
    Calendar,
    DollarSign,
    ShoppingCart,
    Users
} from 'lucide-react';

const SalesAnalytics = () => {
    const salesData = [
        { day: 'Mon', sales: 4000 },
        { day: 'Tue', sales: 3000 },
        { day: 'Wed', sales: 2000 },
        { day: 'Thu', sales: 2780 },
        { day: 'Fri', sales: 1890 },
        { day: 'Sat', sales: 2390 },
        { day: 'Sun', sales: 3490 },
    ];

    const topProducts = [
        { name: 'Obsidian VIP', sales: 342, revenue: 'Rp 17.1M', trend: '+12%' },
        { name: 'Crystal Pass', sales: 228, revenue: 'Rp 17.1M', trend: '+8%' },
        { name: 'Auto-Miner Kit', sales: 156, revenue: 'Rp 5.5M', trend: '+3%' },
        { name: 'Premium Bundle', sales: 89, revenue: 'Rp 4.5M', trend: '-2%' },
    ];

    const monthlyMetrics = [
        { label: 'Total Revenue', value: 'Rp 48.5M', change: '+23%', icon: DollarSign, color: 'text-primary' },
        { label: 'Total Orders', value: '1,247', change: '+18%', icon: ShoppingCart, color: 'text-secondary' },
        { label: 'New Customers', value: '342', change: '+15%', icon: Users, color: 'text-tertiary' },
        { label: 'Avg Order Value', value: 'Rp 38.9K', change: '+5%', icon: TrendingUp, color: 'text-[#10b981]' },
    ];

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
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Sales Analytics</h1>
                                <p className="font-body-base text-body-base text-on-surface-variant">Analisis penjualan dan performa bisnis real-time.</p>
                            </div>
                            <button className="flex items-center gap-2 bg-surface-container border border-outline-variant px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                                <Calendar size={18} /> This Month
                            </button>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
                            {monthlyMetrics.map((metric, idx) => {
                                const Icon = metric.icon;
                                return (
                                    <div key={idx} className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300">
                                        <div className="flex justify-between items-start">
                                            <span className="font-label-caps text-label-caps text-on-surface-variant">{metric.label}</span>
                                            <Icon size={24} className={metric.color} />
                                        </div>
                                        <div className="font-headline-lg text-headline-lg text-on-surface">{metric.value}</div>
                                        <p className={`text-sm font-body-bold ${metric.change.startsWith('+') ? 'text-[#10b981]' : 'text-error'}`}>
                                            {metric.change} vs last month
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Charts Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
                            {/* Sales Trend Chart */}
                            <div className="lg:col-span-2 cyber-card rounded-xl p-lg flex flex-col">
                                <div className="flex justify-between items-center mb-lg">
                                    <h3 className="font-body-bold text-body-bold text-on-surface flex items-center gap-2">
                                        <BarChart3 size={20} className="text-primary" /> Weekly Sales Trend
                                    </h3>
                                </div>
                                
                                {/* Simple Chart Representation */}
                                <div className="flex items-end justify-between gap-2 h-48">
                                    {salesData.map((data, idx) => (
                                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full bg-surface-container-highest rounded-t-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all" 
                                                 style={{ height: `${(data.sales / 4000) * 100}%` }}>
                                            </div>
                                            <span className="text-xs text-on-surface-variant">{data.day}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Category Distribution */}
                            <div className="cyber-card rounded-xl p-lg flex flex-col">
                                <h3 className="font-body-bold text-body-bold text-on-surface mb-lg flex items-center gap-2">
                                    <PieChart size={20} className="text-secondary" /> Distribution
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { label: 'Ranks', percent: 45, color: 'bg-primary' },
                                        { label: 'Plugins', percent: 30, color: 'bg-secondary' },
                                        { label: 'Items', percent: 20, color: 'bg-tertiary' },
                                        { label: 'Other', percent: 5, color: 'bg-on-surface-variant' },
                                    ].map((cat, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-on-surface-variant">{cat.label}</span>
                                                <span className="text-sm font-body-bold text-on-surface">{cat.percent}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                                                <div className={`h-full ${cat.color}`} style={{ width: `${cat.percent}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Top Products Table */}
                        <div className="cyber-card rounded-xl overflow-hidden flex flex-col">
                            <div className="p-lg border-b border-outline-variant bg-surface-container-low">
                                <h3 className="font-body-bold text-body-bold text-on-surface">Top Selling Products</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-surface-container-lowest">
                                            <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Product Name</th>
                                            <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Sales</th>
                                            <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Revenue</th>
                                            <th className="font-label-caps text-label-caps text-on-surface-variant p-4 border-b border-outline-variant">Trend</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-body-base text-body-base text-on-surface">
                                        {topProducts.map((product, idx) => (
                                            <tr key={idx} className="hover:bg-surface-container-highest/30 transition-colors">
                                                <td className="p-4 border-b border-outline-variant/50 font-body-bold">{product.name}</td>
                                                <td className="p-4 border-b border-outline-variant/50 text-on-surface-variant">{product.sales}</td>
                                                <td className="p-4 border-b border-outline-variant/50 text-primary font-code">{product.revenue}</td>
                                                <td className="p-4 border-b border-outline-variant/50">
                                                    <div className={`flex items-center gap-1 font-body-bold ${product.trend.startsWith('+') ? 'text-[#10b981]' : 'text-error'}`}>
                                                        {product.trend.startsWith('+') ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                                        {product.trend}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
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

export default SalesAnalytics;
