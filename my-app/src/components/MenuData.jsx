import React from 'react'


export default function MenuData(props) {
    const {title,desc,price,photo}=props;
    return (
        <>
      
        <div className='container'>
           
            <div className="row">
                 
                <div className="col-lg-6 col-md-6 col-sm-10 menu-item" style={{marginBottom:'3rem'}}>
                   <div className="img-divs">
                   <img src={photo} alt="" />
                   </div>
                  <div className="info-div">
                  <h2 style={{fontFamily:'robot',fontSize:'2rem'}}>{title}</h2>
                    <h6 style={{fontFamily:'robot',}}>{desc}</h6>
                    <h3 style={{color:'var(--navcolor)',fontFamily:'roboto'}}>{price} </h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-10 menu-item disp">
                   <div className="img-divs">
                   <img src={photo} alt="" />
                   </div>
                  <div className="info-div">
                  <h2 style={{fontFamily:'robot',fontSize:'2rem'}}>{title}</h2>
                    <h6 className='font-size' style={{fontFamily:'robot',}}>{desc}</h6>
                    <h3 style={{color:'var(--navcolor)',fontFamily:'roboto'}}>{price} </h3>
                  </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
