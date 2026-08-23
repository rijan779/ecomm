import { Link } from "react-router-dom"
import "../style/register.scss"

function Register(){
    return (
        <main className="main-container">
            <div className="main-div">
                <h1>Register</h1>
                <div className="name-info">
                    <div className="name-div">
                        <label htmlFor="firstName">First Name</label>
                        <input className="firstName" id="firstName" type="string" placeholder="John" />
                    </div>
                    <div className="name-div">
                        <label className="lastName">Last Name</label>
                        <input className="lastName" id="lastName" type="string" placeholder="Doe" />
                    
                    </div>
                    
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                        <input className="email" id="email" type="email" placeholder="eg: john@example.com"></input>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                        <input className="password" id="password" type="password" />
                    
                </div>
                <label htmlFor="button"></label>
                <input value="Sumbit" className="button primary-button" id="button" type="button" />
                <p>ALready have an account?<Link to="/">Login</Link> here. </p>
            </div>
        </main>
    )
}

export default Register