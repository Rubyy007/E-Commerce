import React, { useContext } from 'react'
import { shopContext } from '../context/Context'
import Product from "../datasets/products"
import CartItem from './cartItem'
function cart() {
    const {cartItems} = useContext(shopContext)
 
    return (
        <>    {
          Product.map((product,i)=>{
            if(cartItems[product.id] !== 0){
             return(

               <CartItem key={i} data={product}></CartItem>
             ) 
            }
          })
        }
    </>

  )
}

export default cart