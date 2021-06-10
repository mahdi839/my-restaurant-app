import React from 'react'

import carusel from '../images/carusel2.png'

export default function Testimonial() {
    return (
        <div>
             <div className="second">
           <div className="container">
                <div className="col-12 cdiv">
                   
                <h1 className='mt-5 text-center'style={{color:'var(--navcolor) '}}>Testimonials</h1>
                <h3 >Customers Feedback</h3>
  
 
    
      <img className="rounded-circle" src={carusel} alt="First slide"/>
      <h3 className='text-dark' >Will Smith</h3>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eligendi eius adipisci minima dolores cupiditate magnam ipsa odio assumenda, nam unde perspiciatis porro tempore amet voluptate veniam doloribus quibusdam distinctio. Quisquam saepe dolore quibusdam adipisci sint mollitia! Quae nemo consequuntur nam delectus amet vero maiores? Iure quae illum iste incidunt.</p>
  
    
  

                </div>
            </div>
          
           </div>
         

        </div>
    )
}
