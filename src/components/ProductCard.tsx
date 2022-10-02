import { Product } from 'data'
import React from 'react'

type Props = {
  product: Product
}

export default function ProductCard({product}: Props) {
  return (
    <div className="m-4 card card-compact bg-base-100 shadow-xl">
      <figure><img className="max-h-60" src={product.photo} /></figure>
      <div className="card-body">
        <h1 className="card-title">{product.name}</h1>
        <p className="">{product.artist}</p>
        <div className='flex align-middle justify-between'>
          <button className='btn btn-primary'>Add to cart</button>
          <h1 className="text-xl font-bold my-auto">${product.saleprice != 0 ? product.saleprice : product.price}</h1>
        </div>
      </div>
    </div>
  )
}
