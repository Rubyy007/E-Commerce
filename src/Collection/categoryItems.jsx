import Footer from "../Footer/Footer"
import React from 'react'
import { useContext } from 'react'
import { shopContext } from '../context/Context'
import Navbar from '../navbar'
import "./style.css"
import ProductDetails from './productDetails'
function categoryItems(props) {
 
 const   {data}   = useContext(shopContext)
 console.log( 'from cateitem',data);
    return (
    <div>
<Navbar/>

<div className='totalbody'>
{
    data.map((item , i)=>{
        if(props.category === item.category){
        return(
        <ProductDetails key={i} rate={item.price} name={item.title} id={item.id} category={item.category} price image={item.image}/>

        )
        }else{
            return(
                null
            )
        }

    })
}
</div>
<Footer/>
    </div>
  )
}

export default categoryItems