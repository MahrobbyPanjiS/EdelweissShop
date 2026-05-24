import React from 'react';

/**
 * Komponen Kartu Produk (ProductCard)
 * Menampilkan ringkasan produk dengan desain cyberpunk dan efek glassmorphism.
 * Komponen ini menerima data produk melalui properti (props) untuk penggunaan berulang.
 */
export default function ProductCard({ title, category, desc, price, imgSrc, badge, onClick }) {
  return (
    <div 
      className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative shadow-[inset_0_0_20px_rgba(34,211,238,0.02)] cursor-pointer"
      onClick={onClick}
    >
      <div className="h-40 w-full bg-surface-container-high relative overflow-hidden">
        {/* Menampilkan badge diskon atau status jika tersedia */}
        {badge && (
          <div className={`absolute top-2 right-2 text-[10px] px-2 py-1 rounded font-bold z-10 ${badge === 'HOT' ? 'bg-tertiary text-on-tertiary' : 'bg-error text-on-error'}`}>
            {badge}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-0"></div>
        <img alt={title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src={imgSrc} />
      </div>
      <div className="p-md flex flex-col gap-xs flex-grow">
        <div className="flex flex-wrap gap-xs">
          <span className="bg-surface-container-high border border-outline-variant text-on-surface-variant font-label-caps text-[10px] px-xs py-[2px] rounded-sm">
            {category}
          </span>
        </div>
        <h4 className="font-body-bold text-sm text-on-surface line-clamp-1">{title}</h4>
        <p className="text-on-surface-variant text-xs line-clamp-2">{desc}</p>
        <p className="font-code text-primary text-lg mt-auto">{price}</p>
        <div className="flex gap-sm mt-sm">
          <button className="flex-grow bg-primary-container text-black font-body-bold text-xs py-2 rounded-lg hover:brightness-110 transition-all active:scale-95">
            Beli Sekarang
          </button>
          <button className="bg-surface-container-high border border-outline-variant text-on-surface p-2 rounded-lg hover:border-primary hover:bg-primary/10 transition-all active:scale-95 flex items-center justify-center">
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}