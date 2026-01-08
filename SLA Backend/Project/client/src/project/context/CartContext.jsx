import React, { createContext, useContext, useEffect, useState } from 'react'
const CART_KEY = 'hems_cart_v1'
const CartCtx = createContext(null)

export function useCart(){ return useContext(CartCtx) }

export function CartProvider({children}){
  const [cart, setCart] = useState(() => {
    try{
      return JSON.parse(localStorage.getItem(CART_KEY) || '{}')
    }catch(e){
      return {}
    }
  })

  useEffect(()=> { localStorage.setItem(CART_KEY, JSON.stringify(cart)) }, [cart])

  const addToCart = (item, qty=1) => {
    setCart(prev => {
      const next = {...prev}
      if(next[item.id]) next[item.id].qty += qty
      else next[item.id] = { item, qty }
      return next
    })
  }
  const removeFromCart = id => {
    setCart(prev => { const n = {...prev}; delete n[id]; return n })
  }
  const changeQty = (id, delta) => {
    setCart(prev => {
      const n = {...prev}
      if(!n[id]) return prev
      n[id].qty += delta
      if(n[id].qty <= 0) delete n[id]
      return n
    })
  }
  const clearCart = () => setCart({})
  const entries = Object.values(cart)
  const totalQty = entries.reduce((s,e)=>s+e.qty,0)
  const subtotal = entries.reduce((s,e)=>s + e.qty*e.item.price,0)

  return (
    <CartCtx.Provider value={{ cart, addToCart, removeFromCart, changeQty, clearCart, totalQty, subtotal }}>
      {children}
    </CartCtx.Provider>
  )
}
