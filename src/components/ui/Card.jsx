import React from 'react';

function Card({ title, children, className = '' }) {
  return (
    <section className={`rounded-3xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      {title && <h3 className="mb-4 text-xl font-semibold">{title}</h3>}
      {children}
    </section>
  );
}

export default Card;
