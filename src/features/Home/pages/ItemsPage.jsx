import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../auth/hooks/product.hook";
import HomeItem from "../components/HomeItem";
import "../style/itempage.scss"
import { useParams } from "react-router-dom";

const ItemsPage = () => {
    const { products, loading, pageId, handleProducts,totalPages,remPages } = useProducts();


    
    let { pageId:pageParam } = useParams();
    const pageNo = Number(pageParam);

    const prevPage = pageNo - 1;

    const nextPage = pageNo === totalPages? 1 : pageNo + 1;



    console.log(pageNo)

        useEffect(()=>{
            handleProducts(pageNo)
        },[pageNo])

        
    if (loading) {
        return <main>Loading...</main>;
    }

    if (!products || products.length === 0) {
        return <main>No products found.</main>;
    }

    return (
        <main className="main-item-page">
            <div className="back-btn-div">
                    <Link to={"/home"}>
                    <button  className="back-btn primary-btn"> Back to homepage</button>
                    </Link>
                </div>      
        <div className="items-page">
            {products.map((product,idx)=>(
                
                <HomeItem key={product._id} product={product}></HomeItem>
            ))}
            </div>
            <div className="footer">

               <div className="footer">

    <div className="prev-btn-div">
            {pageNo > 1 && (
                    <Link to={`/page/${prevPage}`}>
                            <button className="primary-btn">
                                    Previous Page
                                </button>
                            </Link>
                        )}
                    </div>

                    <div className="next-btn-div">
                        <Link to={`/page/${nextPage}`}>
                            <button className="next-page primary-btn">
                                Next Page
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
            
    );
};

export default ItemsPage;
