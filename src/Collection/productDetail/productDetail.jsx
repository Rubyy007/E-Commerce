import React, { useContext } from 'react'
import { shopContext } from '../../context/Context'
import { useParams } from 'react-router-dom'
import ProductDisply from './productDisply'
function productDetail() {
  const {data} = useContext(shopContext)
  const {productId} = useParams();
  const product = data.find((e)=> e.id === Number(productId))
  console.log("vanakkam",product);

  return (
    <div>
      <ProductDisply product = {product}/>
    </div>
  )
}

export default productDetail