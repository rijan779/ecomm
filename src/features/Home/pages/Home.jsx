import { useEffect } from "react"
import {slides} from "../../../data/Carousel.json"
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import HomeItem from "../components/HomeItem.jsx"
import { Link } from "react-router-dom"

import { useProducts } from "../../auth/hooks/product.hook.js"

function Home(){
    const {products,handleProducts} = useProducts()

    useEffect(()=>{
        handleProducts()
    },[])

    return (
        <div className="home-page">
            <Navbar />
            <div className="home-content">
                <Carousel data={slides} />
            </div>
            <div className="homepage-items-container ">
                {products.slice(0,3).map((product)=>{
                    return (
                        <HomeItem key={product._id} product={product} />
                    )
                })}
            </div>
           <div className="showmore-btn">
            <Link to="/page/1">
                <button className="primary-btn">Show More..</button>
            </Link>
            </div> 
        </div>
    )
}
export default Home
