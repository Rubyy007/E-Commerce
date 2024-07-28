import React, { useContext } from 'react'
import Navbar from "../../navbar/index"
import "./style.css"
import { shopContext } from '../../context/Context'
function productDisply(props) {
  const { product } = props
  const {addToCart} = useContext(shopContext)




  return (
    <>
              <Navbar />
      <div className='mainproduct'>
        <div className="spic">
          <img src={product.image} alt='image error' />
          <img src={product.image} alt='image error' />
          <img src={product.image} alt='image error' />
          <img src={product.image} alt='image error' />
        </div>
        <div className='mainpic'>
          <img src={product.image} alt='image error' />
        </div>
        <div className='details'>
             <h3>{product.title}</h3>
            <span  style={{textDecoration:'line-through',color:'grey'}}>{product.price + 5}</span> <span>{product.price}</span>
            <h5>Select Size:</h5>
            <button onClick={()=>{alert("The Size Is Selected")}}>S</button>
            <button onClick={()=>{alert("The Size Is Selected")}}>M</button>
            <button onClick={()=>{alert("The Size Is Selected")}}>X</button>
            <button onClick={()=>{alert("The Size Is Selected")}}>XL</button>
            <button onClick={()=>{alert("The Size Is Selected")}}>XXL</button>
            <button onClick={()=>addToCart(product.id)} onDoubleClick={()=>{alert("The Item Is Added To The Cart.Carry On")}} className='addcartbtn' >Add To Cart</button>
            <button  className='buynowbtn' >Buy Now</button>
            
        </div>


      </div>
    </>
  )
}

export default productDisply