import React from 'react'
import our1 from '../images/our1.png'
import our2 from '../images/our2.png'
import our3 from '../images/our3.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
export default function Team() {
    return (
        <div className='containerm '>
             <div className="container">
                 <h1 className='chief' >Our Experience Chefs</h1>
             <div className="row">
             <div className="col-lg-4 col-md-4 col-sm-12 crd ">
                  <div className="card card1 mt-sm-5" >
  <img className="card-img-top" src={our1} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title"style={{fontFamily:'roboto'}} >Adam Billiard</h5>
    <h6 style={{fontFamily:'roboto'}}>Chef Master</h6>
   <div className="icon d-flex justify-content-center">
   <p style={{display:'inline-block',marginRight:'4rem',}}><FacebookIcon className='social'/> </p>
    <p style={{display:'inline-block',marginRight:'2rem',}}><InstagramIcon className='social'/> </p>
    <p style={{display:'inline-block',marginLeft:'1rem',}}><TwitterIcon className='social' / > </p>
   </div>
  </div>
</div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 crd">
                  <div className="card mt-sm-5" >
  <img className="card-img-top" src={our2} alt="Card image cap"/>
  <div className="card-body">
  <h5 className="card-title" style={{fontFamily:'roboto'}}>Mahdi Hasan</h5>
    <h6 style={{fontFamily:'roboto'}}>Chef Master</h6>
   <div className="icon d-flex justify-content-center">
   <p style={{display:'inline-block',marginRight:'4rem',}}><FacebookIcon className='social'/> </p>
    <p style={{display:'inline-block',marginRight:'2rem',}}><InstagramIcon className='social'/> </p>
    <p style={{display:'inline-block',marginLeft:'1rem',}}><TwitterIcon className='social' / > </p>
   </div>
  </div>
</div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 crd ">
                  <div className="card mt-sm-5" >
  <img className="card-img-top" src={our3} alt="Card image cap"/>
  <div className="card-body">
  <h5 className="card-title"style={{fontFamily:'roboto'}}>Jackson Arefi</h5>
    <h6 style={{fontFamily:'roboto'}}>Chef Master</h6>
   <div className="icon d-flex justify-content-center">
   <p style={{display:'inline-block',marginRight:'4rem',}}><FacebookIcon className='social'/> </p>
    <p style={{display:'inline-block',marginRight:'2rem',}}><InstagramIcon className='social'/> </p>
    <p style={{display:'inline-block',marginLeft:'1rem',}}><TwitterIcon className='social' / > </p>
   </div>
  </div>
</div>
                  </div>
             </div>
           </div>
        </div>
    )
}
