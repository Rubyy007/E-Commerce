import React, { useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus'
function navbar() {
const [openDisplay , setopenDisplay] = useState('none')
    const openSiedbar=()=>{
    setopenDisplay('flex')
}
const closeSidebar =()=>{
    setopenDisplay('none')

}
    return (
        <nav>
            <ul className='navbar' >
                <li> <a id='tittle' href='/'>ShopyGo</a>
                </li>
                <li> <Link to='/mensCollection'>Mens Wear    </Link>
                </li>
                <li> <Link to='/womenCollection'>Womens Wear </Link>
                </li>
                <li> <Link to='/childCollection'>Child Wear</Link>
                </li>
                <li> <Link to='/loginPage'>Login</Link>
                </li>
                <li> <Link to='/cart'><FontAwesomeIcon icon={faCartPlus} /></Link>
                </li>
                <button className='menu' style={{fontSize:'20px',border:'none',background:'transparent',cursor:'pointer'}} onClick={openSiedbar}>Menu</button>
            </ul>
            <ul className='sidebar' style={{display:openDisplay}} >
                <li> <button onClick={closeSidebar} className='cls'>close</button>
                </li>
                <li> <Link to='/mensCollection'>Mens Wear    </Link>
                </li>
                <li> <Link to='/womenCollection'>Womens Wear </Link>
                </li>
                <li> <Link to='/childCollection'>Child Wear</Link>
                </li>
                <li> <Link to='/loginPage'>Login</Link>
                </li>
                <li> <Link to='/cart'>cartItems</Link>
                </li>
            </ul>
        </nav>
    )
}



export default navbar