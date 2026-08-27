import { Link } from "react-router-dom"
import { useState } from "react"
import "../style/register.scss"
import { useAuth } from "../hooks/auth.hook"

function Register(){

    const {loading,handleRegister} = useAuth()

    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    function handleSubmit(e){
        e.preventDefault()
        async function registerHandle(){
            const response = await handleRegister({firstName,lastName,email,password})
            if(response){
                console.log(response)
                console.log("register successfull!!")
            }
            
        }
        registerHandle()
        
    }

if(loading){
            return <main>...Loading</main>
        }

    return (
        <main className="main-container">
            <div className="main-div">

                <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="name-info">
                    <div className="name-div">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={(e)=>setFirstName(e.target.value)} className="firstName" id="firstName" type="string" placeholder="John" />
                    </div>
                    <div className="name-div">
                        <label className="lastName">Last Name</label>
                        <input onChange={(e)=>setLastName(e.target.value)} className="lastName" id="lastName" type="string" placeholder="Doe" />
                    
                    </div>
                    
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} className="email" id="email" type="email" placeholder="eg: john@example.com"></input>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} className="password" id="password" type="password" />
                    
                </div>
                <label htmlFor="button"></label>
                <input value="Sumbit" className="button primary-button" id="button" type="submit" />
                <p>ALready have an account?<Link to="/">Login</Link> here. </p>
            
            </form>
            </div>
        </main>
    )
}

export default Register