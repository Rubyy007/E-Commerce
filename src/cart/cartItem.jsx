import React from 'react'
import "./style.css"

export default function cartItem(props) {
  const {id,title,price,image,description} = props.data
    return (
    <div className='cartbody'>
        <div style={{width: 650, height: 188, paddingLeft: 15, paddingRight: 15, paddingTop: 6, paddingBottom: 6, background: 'white', borderRadius: 13, justifyContent: 'flex-start', alignItems: 'flex-end', gap: 30, display: 'inline-flex',marginBottom:30}}>
  <img style={{width: 147, height: 120, position: 'relative'}} src={image} />
  <div style={{width: 303, height: 116, position: 'relative',overflow:'scroll'}}>
    <div style={{left: 18, top: 2, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Product name : {title}</div>
    <div style={{left: 18, top: 38, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Price : {price}</div>
    <div style={{left: 18, top: 53, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Counts : </div>
    <div style={{left: 17, top: 80, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Description:{description}</div>
  </div>
</div>


    </div>
  )
}
