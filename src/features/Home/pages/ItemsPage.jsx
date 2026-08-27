import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../auth/hooks/product.hook";
import HomeItem from "../components/HomeItem";
import "../style/itempage.scss"
import { useParams } from "react-router-dom";

const ItemsPage = () => {
    const { products, loading, pageId, handleProducts,totalPages,totalProducts,remPages,searchedProds } = useProducts();
    const [categoryProducts,setCategoryProducts] =useState([])


    
    let { pageId:pageParam,searchItem } = useParams();
    const pageNo = Number(pageParam);


    const prevPage = pageNo - 1;

    const isSearchPage = Boolean(searchItem)

    const nextPage = pageNo === totalPages? 1 : pageNo + 1;

    const categories = [...new Set(totalProducts.map((item)=>(item.category)))]  //...inside array means destrcuture the values in the array....because its a set not array and map works with array

    const handleCategory= (category) =>{
        const filtered = totalProducts.filter((product)=> product.category == category)
        console.log(totalProducts)
        setCategoryProducts(filtered)
        
    
    }

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

                    <div className="category">
                    <select onChange={(e)=>handleCategory(e.target.value)} className="select-category">
                        {categories.map((category)=>(
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    </div>   
                </div>
                   
        <div className="items-page">
            
            {
                categoryProducts.length > 0 ?

                categoryProducts.map((product) => (
                    <HomeItem
                        key={product._id}
                        product={product}
                    />
                ))

                :
                 isSearchPage  ? 

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
