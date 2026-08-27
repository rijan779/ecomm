import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import "../style/login.scss"
import { useAuth } from "../hooks/auth.hook"


function Login(){
    const navigate = useNavigate()
    const {loading,setUser,handleLogin} = useAuth()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError("")

        try {
            const response = await handleLogin({email,password})
            if (response?.user) {
                setUser(response.user.firstName)
                navigate("/home")
                return
            }
            setError(response?.message || "Login failed. Please check your credentials.")
        } catch (err) {
            const message = err?.response?.data?.message || err?.message || "Login failed. Please try again."
            setError(message)
        }
    }
    if(loading){
        return (<main>Loading...</main>)
    }
    return (
        <main className="main-container">
            <div className="main-div-login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                <div className="email">
                    <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e)=> setEmail(e.target.value)} className="email" id="email" type="email" placeholder="eg: john@example.com" />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e)=> setPassword(e.target.value)} className="password" id="password" type="password" />
                </div>
                {error && <p className="error-message">{error}</p>}
                <label htmlFor="button"></label>
                <input value="Log In" className="button primary-button" id="button" type="submit" />
                <p>Dont have an account?<Link to="/register">Register</Link> here. </p>
            </form>
            </div>
        </main>
    )
}
export default Login