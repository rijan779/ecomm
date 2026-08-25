import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "../style/navbar.scss"
import { useProducts } from "../../auth/hooks/product.hook"
import { useState } from "react"


function Navbar(){
    const navigate = useNavigate()
    const [searchItem,setSearchItem]=useState("")
    const {cartCount,totalProducts,setTotalProducts,searchedProds,setSearchedProds} = useProducts();

    function handleSubmit(){

    const result = totalProducts.filter((item) =>
        item.prodName
            .toLowerCase()
            .includes(searchItem.trim().toLowerCase())
    );


    console.log("SEARCH RESULT:", result);

    setSearchedProds(result);

    navigate(`/search/${searchItem}`)
    }

    return (
        <div className="nav-container">
            <nav className="navbar">
                <div className="nav-div">
                    <div className="nav-first">
                        <Link className="link web-name" to="/home">Ecommerce Webiste</Link>
                        <Link className="link"to="">Men</Link>
                        <Link className="link"to="">Women</Link>
                        <Link className="link"to="">All Products</Link>
                        <Link className="link"to="">About</Link>
                    </div>
                    <div className="nav-second">
                        <Link className="link" to="/product/cart"><div>{cartCount}</div></Link>
                        <input onChange={(e)=> setSearchItem(e.target.value)} placeholder="eg: product name"></input>
                        <button onClick={()=>handleSubmit()}>Search</button>
                        <Link className="link" to="">Account</Link>
                    </div>
                </div>
                
            </nav>
            </div>
    )
}
export default Navbar
