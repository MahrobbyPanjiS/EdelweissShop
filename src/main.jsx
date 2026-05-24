import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Mengimpor CSS global dan Tailwind

/**
 * Titik masuk (Entry Point) Aplikasi React
 * Mengambil elemen dengan ID 'root' dari index.html dan 
 * merender komponen utama (App) di dalamnya menggunakan React DOM.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);