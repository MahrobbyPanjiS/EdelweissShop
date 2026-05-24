/**
 * CartBackgroundAnimation Component
 * Special Cyber Void animation for the Cart page only.
 * Uses a slow-moving gradient mesh and a lightweight particle system.
 */
import React, { useEffect, useRef } from 'react';

const CartBackgroundAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!canvas || prefersReducedMotion) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.size = Math.random() * 2 + 1;
                this.speedY = Math.random() * 0.5 + 0.2;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.life = 0;
                this.maxLife = Math.random() * 1000 + 500;
            }

            update() {
                this.y -= this.speedY;
                this.x += this.speedX;
                this.life += 1;

                if (this.y < -10 || this.life > this.maxLife) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#22d3ee';
                ctx.fill();
            }
        }

        const createParticles = () => {
            particles = [];
            const particleCount = Math.floor(window.innerWidth / 20);
            for (let i = 0; i < particleCount; i += 1) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
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

        initCanvas();
        createParticles();
        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div className="fixed inset-0 -z-20 cart-cyber-gradient pointer-events-none"></div>
            <canvas
                ref={canvasRef}
                id="cart-bg-canvas"
                className="fixed inset-0 -z-10 pointer-events-none"
            />
        </>
    );
};

export default CartBackgroundAnimation;
