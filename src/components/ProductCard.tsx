import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className="card card-bordered card-compact bg-base-100 shadow-xl">
      <figure className='h-72'>
        <img className="max-h-72" src={product.productPhoto} />
      </figure>
      <div className="card-body justify-between">
        <div>
          <h1 className="text-lg">{product.productName}</h1>
          <h1 className="">By: {product.productArtist}</h1>
        </div>
        <div className='pt-4 flex align-middle justify-between'>
          <h1 className="text-xl font-bold my-auto">${product.productSalePrice != 0 ? product.productSalePrice : product.productPrice}</h1>
          <button className='btn btn-primary'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
