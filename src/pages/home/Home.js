import React from 'react'
import Banner from '../../commonComponents/banner/Banner'
import BannerBottom from '../../commonComponents/bannerBottom/BannerBottom'
import Card from "../../commonComponents/card/Card"
import ProductCard from '../../commonComponents/productCard/ProductCard'
function Home() {
  return (
    <div>
      <Banner />
      <Card />
      <ProductCard />
      <BannerBottom />


    </div>
  )
}
export default Home
