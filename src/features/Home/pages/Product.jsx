import "../style/product.scss"
import { useProducts } from "../../auth/hooks/product.hook"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Product = ()=>{
    const {product,loading,handleProduct} = useProducts()

    const {productId} = useParams()

    useEffect(()=>{
        handleProduct(productId)
    },[productId])

    if (loading) {
    return <h2>Loading...</h2>;
}

if (!product) {
    return <h2>Loading product...</h2>;
}

    return (
        <div className="product-div">
            <div className="prod-img">
                <img src="" alt=""></img>
            </div>
            <div className="prod-info">
                <h1 className="brand">Brand</h1>
                <h3 className="category">{product?.category}</h3>
                <h3 className="price">Rs: {product?.price}</h3>
                <p className="prod-detail">{product?.description}</p>
                <small className="stock"></small>
                <button  className="add-cart-btn">ADD TO CART</button>
            </div>
        </div>
    )
}
export default Product