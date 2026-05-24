/**
 * Komponen Unified Background Animation
 * Mengelola semua varian animasi background secara dinamis.
 * * Penggunaan:
 * <BackgroundAnimation variant="v1" /> // Untuk Home, Admin, Store (Default)
 * <BackgroundAnimation variant="v2" /> // Untuk Halaman Cart/Checkout
 */
import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = ({ variant = 'v1' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let width, height;

        const initCanvas = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        // --- Logika Animasi V1 (Admin / Home / Store) ---
        class ParticleV1 {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.speedY = Math.random() * 0.4 + 0.1;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.6 + 0.2;
            }
            update() {
                this.y -= this.speedY;
                this.x += this.speedX;
                if (this.y < 0) {
                    this.y = height;
                    this.x = Math.random() * width;
                }
            }
            draw() {
                ctx.fillStyle = `rgba(138, 235, 255, ${this.opacity})`; // Warna primary
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // --- Logika Animasi V2 (Cart / Checkout) ---
        class ParticleV2 {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * width;
                // Memastikan partikel selalu mulai dari bawah layar atau lebih bawah lagi
                this.y = height + Math.random() * 150;
                this.size = Math.random() * 2.5 + 1;
                // Kecepatan Y ditambah agar efek "terbang ke atas" lebih terasa
                this.speedY = Math.random() * 1.0 + 0.4;
                this.speedX = Math.random() * 0.6 - 0.3;
                this.opacity = Math.random() * 0.6 + 0.15;
                this.life = 0;
                this.maxLife = Math.random() * 1000 + 300;
            }
            update() {
                this.y -= this.speedY;
                this.x += this.speedX;
                this.life++;
                
                // Reset partikel jika sudah lewat batas atas atau umurnya habis
                if (this.y < -10 || this.life > this.maxLife) {
                    this.reset();
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`;
                ctx.shadowBlur = 12;
                ctx.shadowColor = '#22d3ee';
                ctx.fill();
            }
        }

        const createParticles = () => {
            particles = [];
            if (variant === 'v1') {
                for (let i = 0; i < 75; i++) {
                    particles.push(new ParticleV1());
                }
            } else if (variant === 'v2') {
                // Kepadatan partikel dilipatgandakan (width / 8) untuk efek yang lebih ramai
                const particleCount = Math.floor(width / 8);
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new ParticleV2());
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            initCanvas();
            createParticles();
        };

        // Cek setting OS (Reduce Motion)
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            initCanvas();
            createParticles();
            animate();
            window.addEventListener('resize', handleResize);
        }

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [variant]);

    return (
        <>
            {variant === 'v1' ? (
                <div className="fixed inset-0 -z-20 cyber-void-bg pointer-events-none"></div>
            ) : (
                <div className="mesh-gradient"></div>
            )}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 -z-10 pointer-events-none"
            />
        </>
    );
};

export default BackgroundAnimation;