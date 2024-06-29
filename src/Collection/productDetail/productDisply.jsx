import React from 'react'
import Navbar from "../../navbar/index"
import "./style.css"
function productDisply(props) {
  const { product } = props
  console.log("display", product);
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
            <button>S</button>
            <button>M</button>
            <button>X</button>
            <button>XL</button>
            <button>XXL</button>
            <button className='addcartbtn' >Add To Cart</button>
            <button className='buynowbtn' >Buy Now</button>
            
        </div>


      </div>
    </>
  )
}

export default productDisply