import React from "react";
import products from "../data/dresses";
import ProductCard from "../components/ProductCard";

export default function Dresses({ query = "" }) {
  const q = query.trim().toLowerCase();
  const list = products.filter((p) =>
    p.title.toLowerCase().includes(q)
  );

  return (
    <section id="view-dresses" className="view">
      <div className="product-grid">
        {list.map((d) => (
          <ProductCard key={d.id} item={d} />
        ))}
      </div>
    </section>
  );
}
