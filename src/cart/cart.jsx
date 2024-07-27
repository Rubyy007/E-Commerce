import React, { useContext } from 'react'
import { shopContext } from '../context/Context'

function cart() {
    const {data,addToCart,removeCart,cartItems} = useContext(shopContext)
 
    return (
        <>    <div>{data.id}cart</div>
    <div>{cartItems.id}name</div>
    </>

  )
}

export default cart