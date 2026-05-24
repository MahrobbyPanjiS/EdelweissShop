/**
 * Halaman Keranjang Belanja (Cart)
 * Menampilkan item keranjang, ringkasan pesanan, dan checkout.
 */
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
import { Trash2, Minus, Plus, ArrowRight, Zap, Wallet, Banknote } from 'lucide-react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Obsidian Rank (Lifetime)',
            category: 'Global Server',
            price: 150000,
            quantity: 1,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ-tS4x1lwalVdT6N4gXh4oT84jHAenUqcw9q71z_25KBTKkbGQHzkPbBoZNfvqvl4h3ij8Fqqe0prpQyN6Y2dq_dD2PhZfdAmuDYXPuYROX2nkNh7NGIvdPrz_t4BTNNCfO1sFw9v7nxBN1trZN0fUej0aL8W7OQT4C5Owr62VKx5sdDJupe22QBZA7NA1YYnWajLHzacBcul8l9utJQBqEptSuW93Hkd7rch2JW0SHy-U2zrDNbHB8jtggcTA10qjCDNyuziX045',
            badge: 'VIP',
        },
        {
            id: 2,
            name: 'Aether Blade Crate x5',
            category: 'Survival Realm',
            price: 25000,
            quantity: 2,
            pricePerUnit: true,
            icon: 'swords',
        },
    ]);

    const [promoCode, setPromoCode] = useState('');

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) return;
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const serviceFee = 2500;
    const total = subtotal + serviceFee;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="text-on-background font-body-base min-h-screen flex flex-col overflow-x-hidden relative">
            {/* Cyber Void background animation */}
            <BackgroundAnimation variant="v2" />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow pt-[120px] pb-section-gap px-gutter max-w-[1280px] w-full mx-auto relative z-10">
                {/* Page Header */}
                <div className="mb-xl">
                    <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-xs">Keranjang Belanja</h1>
                    <p className="font-body-base text-body-base text-on-surface-variant">Review pesanan Anda sebelum melanjutkan ke pembayaran.</p>
                </div>

                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
                        {/* Left Column: Cart Items */}
                        <div className="lg:col-span-8 flex flex-col gap-md">
                            {cartItems.map(item => (
                                <div key={item.id} className="bg-surface-container/60 backdrop-blur-sm p-md rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-md border border-outline-variant/50 relative overflow-hidden group hover:border-primary/30 transition-colors">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-tertiary-container/20 to-transparent pointer-events-none"></div>

                                    {/* Thumbnail */}
                                    <div className="w-24 h-24 rounded bg-surface-container flex-shrink-0 border border-outline-variant overflow-hidden relative">
                                        {item.image ? (
                                            <img
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                                src={item.image}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-primary-container/20 to-surface-container flex items-center justify-center">
                                                <Zap size={40} className="text-primary" />
                                            </div>
                                        )}
                                        {item.badge && (
                                            <div className="absolute top-0 right-0 bg-tertiary-container text-on-tertiary-container font-label-caps text-label-caps px-2 py-1 rounded-bl">
                                                {item.badge}
                                            </div>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-sm">
                                            <div>
                                                <h3 className="font-body-bold text-body-bold text-on-surface">{item.name}</h3>
                                                <span className="font-label-caps text-label-caps text-primary">{item.category}</span>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-outline hover:text-error transition-colors p-1 rounded hover:bg-error-container/20"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>

                                        <div className="flex items-end justify-between mt-md">
                                            <div className="font-code text-code text-on-background">
                                                {formatPrice(item.price)}
                                                {item.pricePerUnit && <span className="text-outline text-[12px]">/ea</span>}
                                            </div>
                                            <div className="flex items-center bg-surface-container-lowest border border-outline-variant rounded">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-sm py-1 text-on-surface-variant hover:text-primary transition-colors disabled:opacity-50"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="font-code text-code text-on-surface px-sm w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-sm py-1 text-on-surface-variant hover:text-primary transition-colors"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column: Order Summary (Sticky) */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-[120px] bg-surface-container-low/80 backdrop-blur-md p-lg rounded-xl border border-outline-variant/50 flex flex-col gap-lg shadow-xl">
                                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface border-b border-outline-variant pb-sm">Ringkasan Pesanan</h2>

                                {/* Promo Code */}
                                <div className="flex gap-sm">
                                    <div className="relative flex-grow">
                                        <input
                                            type="text"
                                            placeholder="Kode Promo"
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                            className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface pl-10 pr-sm py-sm rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none font-code text-code transition-all placeholder-outline"
                                        />
                                    </div>
                                    <button className="bg-surface-container border border-outline-variant text-on-surface font-body-bold px-md py-sm rounded hover:bg-surface-container-highest transition-colors active:scale-95">
                                        Terapkan
                                    </button>
                                </div>

                                {/* Cost Breakdown */}
                                <div className="flex flex-col gap-sm font-body-base text-body-base">
                                    <div className="flex justify-between text-on-surface-variant">
                                        <span>Subtotal ({cartItems.length} items)</span>
                                        <span className="font-code text-code">{formatPrice(subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between text-on-surface-variant">
                                        <span>Biaya Layanan</span>
                                        <span className="font-code text-code">{formatPrice(serviceFee)}</span>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px w-full bg-outline-variant my-xs"></div>

                                    <div className="flex justify-between items-end mt-sm">
                                        <span className="font-body-bold text-body-bold text-on-surface">Total</span>
                                        <span className="font-code text-code text-primary text-xl font-bold">{formatPrice(total)}</span>
                                    </div>
                                </div>

                                {/* Checkout Action */}
                                <button className="w-full bg-primary text-on-primary font-body-bold text-body-bold py-md rounded-lg uppercase tracking-wider hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] active:scale-95 transition-all duration-300 mt-sm flex items-center justify-center gap-sm group">
                                    Bayar Sekarang
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                {/* Payment Methods */}
                                <div className="mt-xs text-center">
                                    <span className="font-label-caps text-label-caps text-outline-variant mb-sm block">METODE PEMBAYARAN</span>
                                    <div className="flex justify-center gap-md">
                                        <div className="p-2 rounded border border-outline-variant/50 hover:border-primary/50 cursor-pointer transition-colors" title="QRIS">
                                            <Zap size={20} className="text-outline-variant hover:text-primary transition-colors" />
                                        </div>
                                        <div className="p-2 rounded border border-outline-variant/50 hover:border-primary/50 cursor-pointer transition-colors" title="E-Wallet">
                                            <Wallet size={20} className="text-outline-variant hover:text-primary transition-colors" />
                                        </div>
                                        <div className="p-2 rounded border border-outline-variant/50 hover:border-primary/50 cursor-pointer transition-colors" title="Bank Transfer">
                                            <Banknote size={20} className="text-outline-variant hover:text-primary transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-[400px] flex flex-col items-center justify-center">
                        <div className="text-center space-y-md">
                            <Zap size={64} className="text-outline-variant mx-auto opacity-50" />
                            <h2 className="font-headline-lg text-headline-lg text-on-surface">Keranjang Kosong</h2>
                            <p className="font-body-base text-body-base text-on-surface-variant">Belum ada item di keranjang Anda. Mulai berbelanja sekarang!</p>
                            <a href="/store" className="inline-block bg-primary text-on-primary font-body-bold py-md px-lg rounded-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
                                Kembali ke Store
                            </a>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Cart;