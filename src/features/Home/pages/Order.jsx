import "../style/order.scss";
import { useProducts } from "../../auth/hooks/product.hook";

const Order = () => {
    const { prodInfoCart } = useProducts();

    return (
        <main className="order-main">
            {prodInfoCart.length !== 0 ? (
                <>
                    <div className="order-items">
                        {prodInfoCart.map((item) => (
                            <div
                                id={item.product._id}
                                key={item.product._id}
                                className="order-item"
                            >
                                <h3>{item.product.prodName}</h3>
                                <h4>Quantity: {item.quantity}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="price-div">
                        <h2>Your order was successful!!</h2>
                    </div>
                </>
            ) : (
                <h2>No products to order</h2>
            )}
        </main>
    );
};

export default Order;