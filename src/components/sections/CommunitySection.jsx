import React from 'react';
import Card from '../ui/Card';

function CommunitySection() {
  return (
    <section id="community" className="grid gap-6 md:grid-cols-2">
      <Card>
        <h3 className="text-2xl font-semibold">Gabung Komunitas</h3>
        <p className="mt-4 text-gray-600">
          Temukan inspirasi, diskusi produk, dan bantuan belanja dari komunitas Edelweiss.
        </p>
      </Card>
      <Card>
        <h3 className="text-2xl font-semibold">Dukungan Pelanggan</h3>
        <p className="mt-4 text-gray-600">
          Tim kami siap membantu Anda dengan pertanyaan pesanan, pengiriman, dan rekomendasi produk.
        </p>
      </Card>
    </section>
  );
}

export default CommunitySection;
