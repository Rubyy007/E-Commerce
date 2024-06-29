import React from 'react'
import "./style.css"

export default function Footer() {
  return (
    <div className='footerCon'>
        <h1>Explore More</h1>
        <hr></hr>
    <div className='Grid-container'>
        
        <div className='grid-items'>
            <h2>For Mens</h2>
            
            <a href="">Shirts</a>
            <a href="">Tracks</a>
            <a href="">Hoodies</a>
            <a href="">Trunks</a>
            <a href="">Pants</a>
            <a href="">Vests</a>
            </div>
        <div className='grid-items'>
            <h2>For Womens</h2>
            <a href="">Shirts</a>
            <a href="">Inners</a>
            <a href="">Hoodies</a>
            <a href="">Brazzers</a>
            <a href="">Pants</a>
            <a href="">Skirts</a>
            </div>
        <div className='grid-items'>
            <h2>For Childrens</h2>
            <a href="">Cover Dresses</a>
            <a href="">T-Shirt</a>
            <a href="">Trousers</a>
          
            </div>
        </div>
    <div className='footText'>
        <h1>Footer Details</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptates tempora cumque praesentium ut placeat est accusantium commodi similique provident consequatur quisquam! Dolorum quis repudiandae fugiat ullam, debitis illo tempora.
      </p> 
      <h1>Contact Us</h1>
      <a href='/'>Gmail</a>
      <a href="/">facebook</a>
      <a href="/">gitHub</a>
    </div>
    </div>
  )
}
