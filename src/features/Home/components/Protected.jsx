import { useAuth } from "../../auth/hooks/auth.hook";
import { Navigate } from "react-router-dom";

export const Protected = ({children})=>{

    const {user,loading} = useAuth()

    if(loading){
        return (<main><h1>Loading....</h1></main>)
    }

    if(!user){
        return  <Navigate to={"/"} replace/>
    }

    return children
}