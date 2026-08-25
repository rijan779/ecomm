import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../auth/hooks/product.hook";
import HomeItem from "../components/HomeItem";
import "../style/itempage.scss"
import { useParams } from "react-router-dom";

const ItemsPage = () => {
    const { products, loading, pageId, handleProducts,totalPages,remPages,searchedProds } = useProducts();


    
    let { pageId:pageParam,searchItem } = useParams();
    const pageNo = Number(pageParam);


    const prevPage = pageNo - 1;

    const isSearchPage = Boolean(searchItem)

    const nextPage = pageNo === totalPages? 1 : pageNo + 1;



    console.log(pageNo)

        useEffect(()=>{
        if(!isSearchPage){
            handleProducts(pageNo)
            }
        },[pageNo,isSearchPage])

        
    if (loading) {
        return <main>Loading...</main>;
    }


    return (
        <main className="main-item-page">
            <div className="back-btn-div">
                    <Link to={"/home"}>
                    <button  className="back-btn primary-btn"> Back to homepage</button>
                    </Link>
                </div>      
        <div className="items-page">

            { isSearchPage ? 

                searchedProds.map((product) => (
                    <HomeItem
                        key={product._id}
                        product={product}
                    />
                ))
            : products.map((product) => (
                    <HomeItem
                        key={product._id}
                        product={product}
                        />
                    ))
                }
            
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
