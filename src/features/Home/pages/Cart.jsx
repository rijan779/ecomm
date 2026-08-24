import { useState } from "react"
import { Link } from "react-router-dom"
import "../style/cart.scss"
import { useProducts } from "../../auth/hooks/product.hook"

const Cart = ()=>{
    const {product,handleProduct,products,prodInfoCart,setProdInfoCart,setPrice,price} = useProducts()
    

    function handleQuanity(value,cartItem){
        setProdInfoCart((prev)=>
        prev.map((item)=>{
            if(item.product._id === cartItem.product._id){
                if(value){
                    return {
                        ...item,
                        quantity: item.quantity+1,
                        price: item.product.price
                        
                    }
                }
                if(item.quantity>1){
                    return {
                        ...item,
                        quantity: item.quantity-1,
                        price: item.price - item.product.price
                    }
                }
            }
            return item
        })
        )
    }
    function handleDelete(cartItem){
        setProdInfoCart((prev)=> prev.filter(item => item.product._id !== cartItem.product._id))
    }

    const totalPrice = prodInfoCart.reduce((total,item)=>{
        return total + Number (item.product.price)*item.quantity    //accumulator = total,array ko first item = item bcz prodInfocart.gareko cha and initial value = 0 so kei suruma vayean vane pani 0 chai return aucha
    },0)

    return (
            <main className="cart-main">
                <div className="back-btn-div">
                    <Link to={"/home"}>
                    <button  className="back-btn"> Back to homepage</button>
                    </Link>
                </div>
                
            {prodInfoCart.map((cartItem)=>(
                
                <div className="cart-item">
                    <div className="cart-img-div">
                        <img src="" alt=""></img>
                    </div>
                    <div className="cart-info">
                        <h2>{cartItem.product.prodName}</h2>
                        <p>{cartItem.product.description}</p>
                        <h3>Rs: {cartItem.product.price}</h3>
                        <div className="quantity-div">
                            <button onClick={()=>handleQuanity(false,cartItem)} className="minus button">-</button>
                            <input className="quantity-input" placeholder="Quantity" value={cartItem.quantity} onChange={(e)=> setQuantity(Number(e.target.value))}></input>
                            <button onClick={()=>handleQuanity(true,cartItem)} className="button plus">+</button>
                            <button onClick={()=>handleDelete(cartItem)} className="delete">Delete</button>
                        </div>
                    </div>
                    
                
                </div>
             ))} 
             <div className="order">
                                <p className="quantity-price">Total Price: {totalPrice} </p>
                                <button className="button">Click to order</button>
                            </div>
        </main>
        
    )
    }

export default Cart