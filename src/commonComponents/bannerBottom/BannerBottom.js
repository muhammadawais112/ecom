import React from 'react'
import "../bannerBottom/BannerBottom.css"

function BannerBottom() {
    return (
        <div>

            {/*  banner part */}
            <p>banner part</p>



            {/* <div className="container  BannerImage ">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 text-center text-danger">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima odit fugiat incidunt animi fugit aliquam, voluptatibus illum voluptatem, quia necessitatibus neque saepe consectetur repellat libero ut unde a alias?23</p>

                </div>
            </div> */}
            {/* 
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">

                    </div>
                </div>
            </div> */}

            {/* <div className="smBanner" style={{display:'flex', justifyContent:'space-around'}}>
                <div className='boxBanner1'>
                    <h4>Crazy deal</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress is on scale ate car</span>
                    <button>Learn More</button>
                </div>
                <div className='boxBanner2'>
                    <h4>Crazy deal</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress is on scale ate car</span>
                    <button>Learn More</button>
                </div>
            </div> */}


            <div className="container">
                <div className="row " style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div className="col-sm-12 col-lg-5 col-md-5 boxBanner1 mt-2 px-3">
                        <h4 style={{ color: "white", fontWeight: "bold" }} >Crazy deal</h4>
                        <h2 style={{ color: "white", fontWeight: "bold" }}>buy 1 get 1 free</h2>
                        <span style={{ color: "white" }}>The best classic dress is on scale ate car</span>
                        <button style={{ width: "30%", padding: "5px", marginTop: "10px", }} className="btnStyle2">Learn More</button>
                    </div>
                    <div className="col-sm-12 col-lg-5 col-md-5 boxBanner2 mt-2 px-3">
                        <h4 style={{ color: "white", fontWeight: "bold" }}>Crazy deal</h4>
                        <h2 style={{ color: "white", fontWeight: "bold" }}>Upcoming Season</h2>
                        <span style={{ color: "white" }}>The best classic dress is on scale ate car</span>
                        <button style={{ width: "30%", padding: "5px", marginTop: "10px", border: "1px solid white", outline: "none", }} className="btnStyle2">Collection</button>
                    </div>
                </div>

                {/* last row */}




                <div className="row">
                    <div className="col-sm-12 col-lg-4 col-md-4  boxBanner3 mt-4">
                        <h1 style={{ color: "white", fontWeight: "bold" }}>Seasonal Sale </h1>
                        <h5 style={{ color: "red", fontWeight: "bold" }}>Winter Collection -50% OFF</h5>
                    </div>
                    <div className="col-sm-12 col-lg-5 col-md-5  offset-1 boxBanner5 mt-4"></div>

                </div>




            </div>








        </div>



    )
}
export default BannerBottom