import { Link } from "react-router-dom";
import React from "react";
//import { useState,useEffect } from "react";

export default class login extends React.Component {
    constructor(){
        super();
        this.state={
            mobile:"",
            password:""
        }
    }
    
    submit(){
        console.log(this.state);
    }
    render() {
         return ( 
            <div className="login">
                <nav><Link to="/Home" className="text-Link">Skip{' >'}  </Link></nav>
                <br/>
                <body>
                <nav name="login"><h1>Lokle</h1>
                <p>Mobile Number</p>
                <input className="e-input" value={this.state.mobile} type="text" name="mobile" placeholder="Enter mobile Number" onChange={(data)=>{this.setState({mobile:data.target.value})}} />
                <p>Password</p>
                <input className="e-input" value={this.state.password} type="password" name="password" placeholder="Enter password" onChange={(data)=>{this.setState({password:data.target.value})}}/>
                <br/>
                <label name="label2"><input type="checkbox"/> Remember Me<nav><Link to="/forgot" className="text-LinkForgot">Forgot Password?</Link></nav></label>
                </nav>
                <br/>
                <br/>
                <nav><Link to="/Home"><button onClick={()=>{this.submit()}} className="button_Login">LOGIN</button> </Link></nav>
                <br/>
                <nav name="acc"><p name="p2">Don't Have an account? </p><Link to="/register" className="text-LinkSign">{" "}SignUp Here</Link></nav>
                <br/>
                <h1 name="h1">You Can Login With</h1>
                <br/>
                <div class="social-container">
                      <ul class="social-icons">
                      <li><a href = {"#"}><i class="fa fa-facebook"></i></a></li>
                      <li><a href = {"#"}><i class="fa fa-google"></i></a></li>
                      <li><a href = {"#"}><i class="fa fa-apple"></i></a></li>
                      </ul>
                </div>
                </body>
                </div>
                
         )
    }
   
}
