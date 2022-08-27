import React from 'react'
import "../card/Card.css"
import f1 from "../../assets/featuresImage/f1.png"
import f2 from "../../assets/featuresImage/f2.png"

import f3 from "../../assets/featuresImage/f3.png"

import f4 from "../../assets/featuresImage/f4.png"

import f5 from "../../assets/featuresImage/f5.png"
import f6 from "../../assets/featuresImage/f6.png"







function Card() {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12 col-lg-2 col-md-2">
                        <div className="card mt-2" >
                            <div className="card-body text-center">
                                <img src={f1} className="img-fluid" />
                                <button className='px-2 mt-2' id="btn1">Free shipping</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-2 col-md-2">
                        <div className="card mt-2" >
                            <div className="card-body text-center">
                                <img src={f2} className="img-fluid" />
                                <button className='px-2 mt-2' id="btn2">Online Order</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-2 col-md-2">
                        <div className="card mt-2" >
                            <div className="card-body text-center">
                                <img src={f3} className="img-fluid" />
                                <button className='px-2 mt-2' id="btn3">Save Money</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-2 col-md-2">
                        <div className="card mt-2" >
                            <div className="card-body text-center">
                                <img src={f4} className="img-fluid" />
                                <button className='px-2 mt-2' id="btn4">Promotions</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-2 col-md-2">
                        <div className="card mt-2" >
                            <div className="card-body text-center">
                                <img src={f5} className="img-fluid" />
                                <button className='px-2 mt-2' id="btn5">Happy Sell</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-2 col-md-2">
                        <div className="card mt-2" >
                            <div className="card-body text-center">
                                <img src={f6} className="img-fluid" />
                                <button className='px-2 mt-2' id="btn6">F 24/7 Support</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}
export default Card
