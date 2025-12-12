import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products({ query='' }){
  const q = query.trim().toLowerCase()
  const list = products.filter(p => p.title.toLowerCase().includes(q))
  return (
    <section id="view-products" className="view">
      <div className="pro-container grid" id="productsGrid">
        {list.map(p => <ProductCard key={p.id} item={p} />)}
      </div>
    </section>
  )
}
