import React from 'react'
import "./style.css"
import Navbar from '../navbar'
import { Link } from 'react-router-dom';
function productDetails(props) {


console.log('product details',props);
    /*     operty) data: {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        };
    }[] */
    return (
        <>
          <div className='totalbody1'>  
            <div className='cardbody'>
            <Link to={`/product/${props.id}`} >    <img src={props.image} alt="image Error" /></Link>
                <div className='pricediv'> 
                   <p>{props.name}</p><span style={{textDecoration:'line-through',color:'black'}}>{props.rate + 5}</span>  <span>{props.rate}</span><span><button>Add To Cart</button></span>
                </div>

            
            </div>
            </div>
        </>
    )
}

export default productDetails