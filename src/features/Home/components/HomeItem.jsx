import { Link } from "react-router-dom";
import "../style/homeitem.scss"

import Product from "../pages/Product";
import { useProducts } from "../../auth/hooks/product.hook.js";


const HomeItem = ({ product }) => {

    const {cartCount,setCartCount,prodInfoCart,setProdInfoCart} = useProducts()
    console.log(`Home item ${product}`)
    if (!product) return null;

    function handleCart(product) {
    if (product) {
        setProdInfoCart((prev) => [
            ...prev,
            {
                product: product,
                quantity: 1,
                price : product.price
            }
            
        ]);
        setCartCount((prev) => prev + 1);
    } else {
        console.log("Couldn't get product");
    }
}

    return (
        <div className="home-item ">
            <div className="item-img">
                <img src={product.image || ""} alt={product.prodName} />
            </div>
            <div className="item-info">
                <h1>{product.prodName}</h1>
                <p className="prod-detail">{product.description}</p>
                <h3 className="price">${product.price}</h3>
            </div>
            <div className="div-button">
                <Link>
                <button onClick={()=>handleCart(product)} className="button item-cart-button">Add to Cart</button>
                </Link>

                <Link to={`/product/${product._id}`} >
                <button className="button details-button">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeItem;