import React from 'react';
import Card from '../ui/Card';

const ranks = [
  { label: 'Best Seller', value: 'Top 10' },
  { label: 'Free Shipping', value: '24/7' },
  { label: 'Customer Rating', value: '4.9/5' },
];

function RanksSection() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {ranks.map((rank) => (
        <Card key={rank.label} className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{rank.label}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">{rank.value}</p>
        </Card>
      ))}
    </section>
  );
}

export default RanksSection;
