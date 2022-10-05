import { Product } from 'data'
import React from 'react'
import ProductCard from './ProductCard'


export default function ProductGrid({products}) {
  return (
        <>
        <div className="m-auto p-4 my-4 max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(0,12).map((product) => <ProductCard product={product} />)}
        </div>
        <div className="m-auto btn-group mb-4">
          <button className="btn btn-disabled">«</button>
          <button className="btn">Page 1</button>
          <button className="btn">»</button>
        </div>
        </>
  )
}
