import React, { useEffect, useRef } from 'react';
import * as skinview3d from 'skinview3d';

/**
 * Komponen Minecraft 3D Viewer (Fokus Kepala/Avatar)
 * Merender skin pemain secara 3D dan interaktif menggunakan skinview3d.
 * @param {string} username - Username Minecraft pemain untuk mengambil skin.
 */
export default function Minecraft3DViewer({ username = 'CyberNinja_99' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Inisialisasi 3D Viewer
    const viewer = new skinview3d.SkinViewer({
      canvas: canvasRef.current,
      width: 120, // Menyesuaikan lebar container (w-32)
      height: 150, // Menyesuaikan tinggi container (h-40)
      skin: `https://minotar.net/skin/${username}`, // Fetch skin otomatis dari Minotar
    });

    // --- PENGATURAN KAMERA (FOKUS KEPALA) ---
    // Mempersempit Field of View (FOV) biar nggak distorsi pas di-zoom
    viewer.fov = 50; 
    
    // Atur posisi kamera (X, Y, Z)
    // Y = 20 (Ngangkat kamera sejajar sama kepala)
    // Z = 35 (Majuin kamera biar deket/zoom)
    viewer.camera.position.set(0, 20, 35); 
    
    // Atur titik fokus kamera ngelihat ke kepala (X=0, Y=16, Z=0)
    viewer.camera.lookAt(0, 16, 0);

    // Fallback dinamis buat ngakalin versi skinview3d
    let control;
    if (typeof skinview3d.createOrbitControls === 'function') {
      control = skinview3d.createOrbitControls(viewer);
    } else if (skinview3d.OrbitControls) {
      control = new skinview3d.OrbitControls(viewer);
    }

    // Eksekusi kontrol kalau berhasil di-load
    if (control) {
      control.enableRotate = true;
      control.enableZoom = false; // Matikan zoom manual biar layout gak rusak
      control.enablePan = false;  // Matikan geser manual biar kepala tetap di tengah
    }
    
    // Menambahkan putaran otomatis
    viewer.autoRotate = 0;
    viewer.autoRotateSpeed = 0.5;

    // Cleanup saat komponen dilepas (unmount)
    return () => {
      viewer.dispose();
    };
  }, [username]);

  return (
    <canvas 
      ref={canvasRef} 
      className="cursor-grab active:cursor-grabbing outline-none drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]" 
    />
  );
}