import React from 'react'
import "../productCard/Productcard.css"
import f1 from "../../assets/productsImage/f1.jpg"
import f2 from "../../assets/productsImage/f2.jpg"
import f3 from "../../assets/productsImage/f3.jpg"
import f4 from "../../assets/productsImage/f4.jpg"
import f5 from "../../assets/productsImage/f5.jpg"
import f6 from "../../assets/productsImage/f6.jpg"


import { AiTwotoneStar } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";









function ProductCard() {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12 col-lg-12 col-md-12 text-center">
                        <h1 className='fw-bold mt-5'>Featured Products</h1>
                        <p>Summer Collection New Modren Design</p>
                    </div>
                    {/* card */}

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-md-4 mt-3">
                                <div class="card  styleCard">
                                    <img src={f1} class="card-img-top p-2 " alt="..." />
                                    <div class="card-body">
                                        <p>Adidas</p>
                                        <h5 class="card-title">Cartoon Astranut T-shirts</h5>
                                        <AiTwotoneStar className="styleIcon" />
                                        <AiTwotoneStar className="styleIcon" />

                                        <AiTwotoneStar className="styleIcon" />

                                        <AiTwotoneStar className="styleIcon" />

                                        <AiTwotoneStar className="styleIcon" />
                                        <div className='mt-2' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                            <h4>$45</h4>
                                            <BsFillCartPlusFill id="styleIconCard" />





                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-12 col-lg-4 col-md-4 mt-3">
                                <div class="card styleCard">
                                    <img src={f2} class="card-img-top p-2" alt="..." />
                                    <div class="card-body">
                                        <p>Adidas</p>
                                        <h5 class="card-title">Cartoon Astranut T-shirts</h5>
                                        <AiTwotoneStar className="styleIcon" />
                                        <AiTwotoneStar className="styleIcon" />

                                        <AiTwotoneStar className="styleIcon" />

                                        <AiTwotoneStar className="styleIcon" />

                                        <AiTwotoneStar className="styleIcon" />
                                        <div className='mt-2' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                            <h4>$20</h4>
                                            <BsFillCartPlusFill id="styleIconCard" />





                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-12 col-lg-4 col-md-4 mt-3">
                                <div class="card styleCard">
                                    <img src={f3} class="card-img-top p-2" alt="..." />
                                    <div class="card-body">

                                        <p>Adidas</p>
                                        <h5 class="card-title">Cartoon Astranut T-shirts</h5>
                                        <AiTwotoneStar className="styleIcon" />
                                        <AiTwotoneStar className="styleIcon" />

                                        <AiTwotoneStar className="styleIcon" />

                                        <AiTwotoneStar className="styleIcon" />

                                        <AiTwotoneStar className="styleIcon" />
                                        <div className='mt-2' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                            <h4>$32</h4>
                                            <BsFillCartPlusFill id="styleIconCard" />





                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>





                </div>
                {/* row 2 */}
                <div className="row mt-5">
                    <div className="col-sm-12 col-lg-12 col-md-12 text-center">
                        <h1 className='fw-bold mt-5'>Latest Products</h1>
                        <p>New Modren Design</p>
                    </div>
                </div>

                {/* card */}

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-md-4 mt-3">
                            <div class="card  styleCard">
                                <img src={f4} class="card-img-top p-2 " alt="..." />
                                <div class="card-body">
                                    <p>Adidas</p>
                                    <h5 class="card-title">Cartoon Astranut T-shirts</h5>
                                    <AiTwotoneStar className="styleIcon" />
                                    <AiTwotoneStar className="styleIcon" />

                                    <AiTwotoneStar className="styleIcon" />

                                    <AiTwotoneStar className="styleIcon" />

                                    <AiTwotoneStar className="styleIcon" />
                                    <div className='mt-2' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        <h4>$45</h4>
                                        <BsFillCartPlusFill id="styleIconCard" />





                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-sm-12 col-lg-4 col-md-4 mt-3">
                            <div class="card styleCard">
                                <img src={f5} class="card-img-top p-2" alt="..." />
                                <div class="card-body">
                                    <p>Adidas</p>
                                    <h5 class="card-title">Cartoon Astranut T-shirts</h5>
                                    <AiTwotoneStar className="styleIcon" />
                                    <AiTwotoneStar className="styleIcon" />

                                    <AiTwotoneStar className="styleIcon" />

                                    <AiTwotoneStar className="styleIcon" />

                                    <AiTwotoneStar className="styleIcon" />
                                    <div className='mt-2' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        <h4>$20</h4>
                                        <BsFillCartPlusFill id="styleIconCard" />





                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-4 mt-3">
                            <div class="card styleCard">
                                <img src={f6} class="card-img-top p-2" alt="..." />
                                <div class="card-body">

                                    <p>Adidas</p>
                                    <h5 class="card-title">Cartoon Astranut T-shirts</h5>
                                    <AiTwotoneStar className="styleIcon" />
                                    <AiTwotoneStar className="styleIcon" />

                                    <AiTwotoneStar className="styleIcon" />

                                    <AiTwotoneStar className="styleIcon" />

                                    <AiTwotoneStar className="styleIcon" />
                                    <div className='mt-2' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        <h4>$32</h4>
                                        <BsFillCartPlusFill id="styleIconCard" />





                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>





            </div>
        </div>






    )
}
export default ProductCard
