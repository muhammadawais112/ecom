import React from 'react'
import hero4 from "../../assets/hero4.png"
import button from "../../assets/button.png"
import "../banner/Banner.css"
function Banner() {
  return (
    <div >
      <div className="container-fluaid   ">
      
        <img src={hero4} className="img-fluid" />

        <div className="row "> 

          {/* <div className="col-sm-6 col-lg-6 col-md-6 px-5" style={{ display: "flex", flexDirection: 'column', justifyContent: "center" }}>
            <h4 className='fw-bold'>Trade-in-offer</h4>
            <h2>Super values deals</h2>
            <h3>On all products</h3>
            <p>Save more with coupons & Up to 70%</p>
            <p id="styleBtn">Shop Now
            </p>
            <img src={button} width="400px"/> */}

        </div>
      </div>
    </div>



  )
}
export default Banner