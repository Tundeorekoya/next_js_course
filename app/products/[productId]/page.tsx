import React from 'react'

const ProductDetails = ({params}:{
    params:{
        productId:string
    }
}) => {
  return (
    <div>
      product details: {params.productId}
    </div>
  )
}

export default ProductDetails
 