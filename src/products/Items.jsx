import React from 'react'
import "./style.css"
function Items(props) {
    return (
        <div className='menstopcon'>
           
        
        <div className='cardbox'>
            <div className='menscard'
            style={{backgroundImage:`url(${props.image})`}}
            >   </div>
        
         
        </div>

    </div>
    )
}
export default Items