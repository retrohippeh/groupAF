import { Product } from 'data'
import React from 'react'

type Props = {
  product: Product
}

export default function ProductCard({product}: Props) {
  return (
    <div className="card card-bordered card-compact bg-base-100 shadow-xl">
      <figure className='h-72'>
        <img className="max-h-72" src={product.photo} />
      </figure>
      <div className="card-body justify-between">
        <div>
          <h1 className="text-lg">{product.name}</h1>
          <h1 className="">By: {product.artist}</h1>
        </div>
        <div className='pt-4 flex align-middle justify-between'>
          <h1 className="text-xl font-bold my-auto">${product.saleprice != 0 ? product.saleprice : product.price}</h1>
          <button className='btn btn-primary'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
