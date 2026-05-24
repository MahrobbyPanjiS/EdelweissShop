import React from 'react';

/**
 * Komponen Tombol (Reusable UI)
 * @param {string} variant - Menentukan gaya tombol ('primary' | 'secondary' | 'outline')
 * @param {ReactNode} children - Teks atau ikon di dalam tombol
 */
export default function Button({ variant = 'primary', children, onClick, className = '' }) {
  const baseStyles = "font-semibold px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-dark shadow-md hover:shadow-lg",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-dark",
    outline: "border-2 border-primary text-primary hover:bg-primary/10 bg-transparent"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}