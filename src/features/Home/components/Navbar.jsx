import { Link } from "react-router-dom"
import "../style/navbar.scss"
import { useProducts } from "../../auth/hooks/product.hook"
function Navbar(){

    const {cartCount} = useProducts()

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
                        <Link className="link" to="">Search</Link>
                        <Link className="link" to="">Account</Link>
                    </div>
                </div>
                
            </nav>
            </div>
    )
}
export default Navbar
