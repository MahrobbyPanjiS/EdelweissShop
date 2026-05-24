import React from 'react';
import Button from '../ui/Button';

function HeroSection() {
  return (
    <section id="hero" className="rounded-[2rem] bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-6 py-16 shadow-xl md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-100">Welcome to EdelweissShop</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          Temukan produk favorit Anda dengan pengalaman belanja terbaik.
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-sky-100/90">
          Jelajahi koleksi terbaru kami, dukungan komunitas, dan rangkaian produk dengan kualitas premium yang selalu update.
        </p>
        <Button className="text-base">Mulai Belanja</Button>
      </div>
    </section>
  );
}

export default HeroSection;
