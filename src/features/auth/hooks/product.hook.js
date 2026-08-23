import { useContext, useState } from "react";
import { ProdContext } from "../ProductContext";
import { getAllProducts, getProduct } from "../services/services";


export const useProducts = ()=>{
    const [loading,setLoading] =useState(false)
    const context = useContext(ProdContext)

    if(!context){
        throw new Error("useProducts must be associated with prodProvider")
    }
    const { products, setProducts,pageId,setPageId,totalPages,setTotalPages,remPages,setRemPages,product,setProduct,cartCount,setCartCount,prodInfoCart,setProdInfoCart } = context;

    const handleProducts = async (pageNo) => {
        setLoading(true);
        try {
            const data = await getAllProducts(pageNo);
            console.log(data)
            if (data?.allProducts) {
                setProducts(data.allProducts);
                setPageId(data.currentPage)
                setTotalPages(data.totalPages)
                setRemPages(data.remPages)
            }

            console.log(`toal pages ${totalPages}`)
            console.log(remPages)

            return data;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const handleProduct = async (productId)=>{
        setLoading(true)
        try{
            const productInfo = await getProduct(productId)
            console.log(`productInfo from hook ${productInfo.product}`)
            if(productInfo?.product){
                setProduct(productInfo.product)
            }
            console.log(`product state from hook ${product }`)
            
        }catch(err){
            console.log(err)
            throw err
        }finally{
            setLoading(false)
        }
    }

    return { products, loading, handleProducts,pageId,totalPages,remPages,product,handleProduct,cartCount,setCartCount,prodInfoCart,setProdInfoCart };
}