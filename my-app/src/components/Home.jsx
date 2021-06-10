import React from 'react'
import Image1 from '../images/bg1.png'
import Image2 from '../images/image2.jpg'
import Image3 from '../images/image1.jpg'
export default function Home() {
    return (
        
           
  
    <div className='greeting-div'>
        <div className="col-7 text-center  justify-content-center grc">
            <h4 style={{fontWeight:'bold',fontFamily:'robot'}}>Welcomes to Mahdis corner</h4>
            <h1 className='heading'>We belive good food <br />
            offer great smile</h1>
            <br />
            <h4 className='main-desc' style={{fontFamily:'robot'}}>Together creeping heaven upon third dominion be upon won't darkness rule land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning</h4>
             <button style={{fontFamily:'robot',wordSpacing:'.2rem'}}>Resurvation</button>
        </div>
     <div className="col-5 img-div">
     <img  src={Image1} alt="First slide"/>
     </div>
    </div>
  
   
  

       
    )
}
