import { createContext, useEffect, useState } from "react";

export const ProdContext = createContext()

export const ProdProvider = ({children})=>{
    const [products,setProducts] = useState([])
    const [product,setProduct] = useState(null)
    const [user,setUser]=useState(null)
    const [pageId,setPageId]=useState(1)
    const [totalPages,setTotalPages] = useState(null)
    const [remPages,setRemPages] = useState(null)
    const [cartCount,setCartCount] =useState(0)
    const [price,setPrice] = useState(()=>{
        const savedPrice = localStorage.getItem("price")
        if(savedPrice){
            return JSON.parse(savedPrice)
        }
        return 0
    })
    
    const [prodInfoCart,setProdInfoCart] = useState(()=>{
        const savedCart = localStorage.getItem("cart");

        if(savedCart){
            return JSON.parse(savedCart)
        }
        return [];
    })

    

    useEffect(()=>{
        localStorage.setItem(   //key cart... value prodInfoCartr
            "cart",
            JSON.stringify(prodInfoCart)  //beacuse localstorgae stores strings
        );

        localStorage.setItem("price",JSON.stringify(price))
    },[prodInfoCart])


        //     App starts
        // ↓
        // look inside localStorage for "cart"
        // ↓
        // cart exists?
        // ↓
        // yes → convert it back into JavaScript and use it
        // no  → use []
        

        //         Add JBL
        // ↓
        // prodInfoCart changes
        // ↓
        // useEffect runs
        // ↓
        // localStorage saves cart
        // ↓

        // REFRESH
        // ↓
        // React restarts
        // ↓
        // useState reads localStorage
        // ↓
        // cart restored ✅

    return (
        <ProdContext.Provider value={{ products, setProducts, user, setUser,pageId,setPageId,totalPages,setTotalPages,remPages,setRemPages,product,setProduct,cartCount,setCartCount,prodInfoCart,setProdInfoCart,price,setPrice }}>
            {children}
        </ProdContext.Provider>
    )
}