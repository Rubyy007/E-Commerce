import React from 'react'
import Items from './Items'
import data from "../datasets/products"
import "./style.css"
function Toppics() {
return (<>
<div style={{textAlign:'center',color:'GrayText'}}>
  <h1>Popular Picks</h1>
<hr/>
<div className='popular'>
  {
    data.map((item ,i)=>{  
      return   (
 <Items key={i} id={item.id} category={item.category} image={item.image}/>

   )
    })

  }

    </div>
    </div>
    </>
  )
}
export default Toppics