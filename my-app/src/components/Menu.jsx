import React, { useState } from 'react'
import Data from './MenuData'
import pic1 from '../menu/pic1.png'
import pic2 from '../menu/pic2.png'
import pic3 from '../menu/pic3.png'
import pic4 from '../menu/pic4.png'

import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
export default function Menu() {
  
     
    return (
        <div>
            
              
          
              <div className="heading mt-lg-5">
        <h5 className='text-center'style={{fontSize:'2rem',}}>POPULAR MENU</h5>
            <h1 className='text-center'style={{color:'var(--navcolor)', fontFamily: 'Oswald, sans-serif'}}> OUR DELICIOUS FOOD FOR YOU</h1>
          <div className="btn-div">
         <div className="div-btn-1">
         <button  >
            <FreeBreakfastIcon  className='btn-icon'/>
            </button >
            <p  style={{display:'inline-block',marginLeft:'6.5rem',fontSize:'1.5rem',color:'black',marginTop:'1rem',}}>dinner</p>
         </div>
         <div className="div-btn-1">
         <button ><FastfoodIcon className='btn-icon' /> </button>
            <p style={{display:'inline-block',marginLeft:'6.5rem',fontSize:'1.5rem',color:'black',marginTop:'1rem'}} >breakfast</p>
         </div>
         <div className="div-btn-1">
         <button  > <LocalDiningIcon className='btn-icon' /> </button>
            <p style={{display:'inline-block',marginLeft:'6.5rem',fontSize:'1.5rem',color:'black',marginTop:'1rem'}}>breakfast</p>
         </div>
         
          </div>
            </div>
            <Data title='Chicken Chilis'
                  desc='Craft beer elit seitan exercitation photo booth et 8-bit kale chips.'
                  price='$20'
                  photo={pic1}
            />
            <Data title='Fried Rice'
                  desc='Craft beer elit seitan exercitation photo booth et 8-bit kale chips.'
                  price='$20'
                  photo={pic2}
            />
            <Data title='Burger Cury'
                  desc='Craft beer elit seitan exercitation photo booth et 8-bit kale chips.'
                  price='$20'
                  photo={pic3}
            />
          

          
           
        </div>
    )
}
