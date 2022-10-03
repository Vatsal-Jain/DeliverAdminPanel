import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-left'>

       
        <h1>Medicine</h1>
        </div>

        <div className='nav-right'>

       
<Link to='/orders' style={{textDecoration:'none'}}>
    <p>Orders</p>
</Link>

<Link to='/addItem' style={{textDecoration:'none'}}>
    <p>Add Item</p>
</Link>

<Link to='/medicinedata' style={{textDecoration:'none'}}>
    <p>Medicine Data</p>
</Link>

</div>
      
    </div>
  )
}

export default Navbar
