import React, { useContext } from 'react'
import "./style.css"
import { shopContext } from '../context/Context';
import Navbar from '../navbar'
import { Link } from 'react-router-dom';
function productDetails(props) {

const {addToCart ,cartItems} = useContext(shopContext)
    const cartItemsCount = cartItems[props.id]
    console.log("items",cartItemsCount);
    return (
        <>
          <div className='totalbody1'>  
            <div className='cardbody'>
            <Link to={`/product/${props.id}`} >    <img src={props.image} alt="image Error" /></Link>
                <div className='pricediv'> 
                   <p>{props.name}</p><span style={{textDecoration:'line-through',color:'black'}}>{props.rate + 5}</span>  <span>{props.rate}</span><span>
                    <button className='cartbutton' onClick={()=>addToCart(props.id)}>Add To Cart <span>{cartItemsCount > 0 &&<>({cartItemsCount})</>}</span></button></span>
                </div>

            
            </div>
            </div>
        </>
    )
}

export default productDetails