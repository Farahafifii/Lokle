import { Link } from "react-router-dom";
const login  = () => {
    return ( 
        <div className="login">
             <nav><Link to="/Home" className="text-Link">Skip{' >'}  </Link></nav>
             <br/>
            <h1>Lokle</h1>
            <p>Mobile Number</p>
            <input className="e-input" type="text" placeholder="Enter mobile Number" />
            <p>Password</p>
            <input className="e-input" type="password" placeholder="Enter password" />
            <br/>
            <label1><input type="checkbox"/> Remember Me<nav><Link to="/forgot" className="text-LinkForgot">Forgot Password?</Link></nav></label1>
            <br/>
            <br/>
            <nav><Link to="/Home"><button className="button_Login">LOGIN</button> </Link></nav>
            <br/>
            <p2>Don't have an account?</p2><nav><Link to="/signup" className="text-LinkSign">Sign Up Here</Link></nav>
            </div>
            
     );
}
export default login ;