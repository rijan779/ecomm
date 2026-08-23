import { useEffect,useState,createContext } from "react";
import { userData } from "./services/services";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState("")
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
        console.log("use effet ran!!")
        const getAndSetUser = async ()=>{

            try{
                console.log("about to call dataofUser")
            const dataOfUser = await userData();

            if(dataOfUser?.user){
                setUser(dataOfUser.user)
            }
        }catch(err){
                console.log("failed to getUserdata",err)
        }finally{
            setLoading(false)
        }

    };
    getAndSetUser()    

},[])

    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}