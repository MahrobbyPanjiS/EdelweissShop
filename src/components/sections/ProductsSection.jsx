import React from 'react';
import Card from '../ui/Card';

const products = [
  { name: 'Edelweiss Sneakers', description: 'Ringan, nyaman, dan desain modern.' },
  { name: 'Canvas Tote Bag', description: 'Tahan lama dengan ruang penyimpanan luas.' },
  { name: 'Aroma Candle Set', description: 'Suasana hangat untuk setiap ruangan.' },
];

function ProductsSection() {
  return (
    <section id="products" className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Produk Kami</h2>
        <p className="mt-2 text-gray-600">Beberapa pilihan populer dari koleksi terbaru kami.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Card key={product.name} title={product.name}>
            <p className="text-sm text-gray-600">{product.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
