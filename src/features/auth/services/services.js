import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true,
    timeout: 10000,
})

export const register = async ({ firstName, lastName, email, password }) => {
    try {
        const response = await api.post("/api/auth/register", { firstName, lastName, email, password })
        return response.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const login = async ({ email, password }) => {
    try {
        const response = await api.post("/api/auth/login", { email, password })
        return response.data
    } catch (err) {
        console.log(err)
        throw err
    }

}

export const getAllProducts = async (pageNo)=>{
    try{
        const response = await api.get(`/api/products/page/${pageNo}`)
        return response.data
    }catch(err){
        console.log(err)
        throw err
    }
}

export const userData = async ()=>{

    try{
        const userData = await api.get("/api/auth/getUser")
        if(!userData){
        console.log("Failed to get user from axios.get part")
        }
        return userData.data
    }catch(err){
        throw err
    }
}

export const getProduct = async (productId)=>{
    try{
        const prodDetails = await api.get(`/api/products/product/${productId}`)
        console.log(`Product from axios ${prodDetails.data}`)
        if(!prodDetails){
            console.log("Failed to get product data!")
        }
        return prodDetails.data
    }catch(err){
        throw err
    }
}

