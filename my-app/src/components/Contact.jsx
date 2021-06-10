import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
export default function Contact() {
    return (
        <div className='p-5' style={{background:'#ecf0f1',}}>
            <br />
             <h1 className='text-center 'style={{color:'var(--navcolor)',}}>Contact Us</h1>
<div className='container' >
            
            <div className="row">
                
                <div className="col-lg-8 col-md-8 col-sm-12">
                <form className="needs-validation mt-4" novalidate>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label className='label' for="validationTooltip01">First name</label>
      <input style={{borderRadius:'3rem'}} type="text" className="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required />
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label className='label' for="validationTooltip02">Last name</label>
      <input style={{borderRadius:'3rem'}} type="text" className="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required />
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label className='label' for="validationTooltipUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="validationTooltipUsernamePrepend"></span>
        </div>
        <input style={{borderRadius:'3rem'}} type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required />
        <div className="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label className='label' for="validationTooltip03">City</label>
      <input style={{borderRadius:'3rem'}} type="text" className="form-control" id="validationTooltip03" placeholder="City" required />
      <div className="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label className='label'  for="validationTooltip04">State</label>
      <input style={{borderRadius:'3rem'}} type="text" className="form-control" id="validationTooltip04" placeholder="State" required />
      <div className="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label className='label' for="validationTooltip05">Zip</label>
      <input style={{borderRadius:'3rem'}} type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required />
      <div className="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button className="btn " type="submit"style={{background:'var(--navcolor)',color:'white',borderRadius:'3rem',fontWeight:'bold'}}>Submit form</button>
</form>


                </div>
                <div className="col-4 col-md-4 col-sm-10 location">
                    <div className="div-contact">
                    <div className="div1">
                    <HomeIcon   style={{color:'var(--navcolor)'}}/>
                    </div>
                    <div className="div2">
                    <h5>Dhaka,Bangladesh.</h5>
                     <h6>Rosemead, CA 91770</h6>
                    </div>
                    </div>
                    <div className="div-contact" style={{marginTop:'1.5rem'}}>
                      <div className="div1 hide">
                      <StayCurrentPortraitIcon  style={{color:'var(--navcolor)'}}/>
                      </div>
                      <div className="div2 hide">
                      <h5>00 9865 562</h5>
                     <h6>Mon to Fri 9am to 6pm</h6>
                      </div>
                    </div>
                    <div className="div-contact" style={{marginTop:'1.5rem'}}>
                    <div className="div1">
                      <MailOutlineIcon  style={{color:'var(--navcolor)'}}/>
                      </div>
                      <div className="div2">
                      <h5 className='gmail'>support@colorlib.com</h5>
                     <h6>Send us your query anytime!</h6>
                      </div>
                    </div>
                </div>
         </div>
      </div>
        </div>
        
    )
}
