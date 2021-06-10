import React from 'react'
import Testimoni from './Testimonial'
import Photo from '../images/about1.png'
import About3 from '../images/about5.jpg'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

export default function About() {
    return (
      < >
        <div className='main'>
            
            <div className="row">
<div className="col-lg-4 col-md-3 col-sm-12 about-first-img ">
<img src={Photo} alt="" />
</div>
<div className="col-lg-5 col-md-6 col-sm-12 ">
<div className="justify">
<h1 >About Mahdis Corner</h1>
  <h3 >We love restaurants as much as you do.
  </h3> 
  <p className='pera'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ut, quis laborum tenetur odit dolor quos minus in, ducimus quaerat repellendus laudantium rem accusantium magni est. Error atque beatae et quisquam facilis exercitationem vero tempore quos aperiam, nostrum ducimus, pariatur.
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ut, quis laborum tenetur odit dolor quos minus in, ducimus quaerat repellendus laudantium rem accusantium magni est. Error atque beatae et quisquam facilis exercitationem vero tempore quos aperiam, nostrum ducimus, pariatur.
  </p>
 <div className="sign-div">
 < ChevronRightRoundedIcon className='right-sign' />
  <p>Quisquam facilis exercitationem vero</p>
 </div>
 
 <div className="sign-div">
 < ChevronRightRoundedIcon className='right-sign' />
  <p>Quisquam facilis exercitationem vero</p>
 </div>
 <div className="sign-div">
 < ChevronRightRoundedIcon className='right-sign' />
  <p>Quisquam facilis exercitationem vero</p>
 </div>
 <div className="sign-div">
 < ChevronRightRoundedIcon className='right-sign' />
  <p>Quisquam facilis exercitationem vero</p>
 </div>

</div>
</div>
<div className="col-lg-3 col-md-3 col-sm-12 div-img">
<img src={Photo} alt="" />
</div>

  </div>
<Testimoni />
</div>
      </>
  
            
       
    )
}
