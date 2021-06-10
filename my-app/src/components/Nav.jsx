import React from 'react'
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';

export default function Nav() {
    return (
        <div className='navdiv'>
       
            <ul className="nav nav-pills justify-content-end">
            
  <div className="logo-div">
  <h1 className='logo'>Mahdis Corner</h1>
   <RestaurantOutlinedIcon  className='mt-2 ml-2 icon'/>
  </div>
  <li className="nav-item">
    <a className='nav-link' href="">Home </a>
  </li>
  <li className="nav-item">
    <a className='nav-link' href="">About </a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Menu</a>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Pizza</a>
      <a className="dropdown-item" href="#">Burger</a>
      <a className="dropdown-item" href="#">Beef</a>
     
     
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">contact</a>
  </li>
 
</ul>

        </div>
    )
}
