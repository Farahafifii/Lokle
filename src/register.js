import { Link } from "react-router-dom";
import React from "react";
//import { useState,useEffect } from "react";

export default class register extends React.Component {
    constructor(){
        super();
        this.state={
            name:"",
            phone:"",
            password:"",
            passConfirm:"",
            email:"",
            city:"",
            nationality:"",
            country :"",
            gender:"",
            birthdate:""
        }
    }
    
    submit(){
        console.log(this.state);
    }
    render() {
         return ( 
            <div className="login">
                <body>
                <div class="social-container2">
                      <ul class="social-icons2">
                      <li><a href = {"#"}><i class="fa fa-user" style={{fontSize:"35px"}}></i></a></li>
                      </ul></div>
                <nav name="login">
                <p>Name</p>
                <input className="e-input" value={this.state.name} type="text" name="name" placeholder="Name..." onChange={(data)=>{this.setState({name:data.target.value})}} />
                <p>Phone Number</p>
                <input className="e-input" value={this.state.phone} type="text" name="phone" placeholder="Phone Number" onChange={(data)=>{this.setState({phone:data.target.value})}}/>
                <br/>
                <div  style={{display:"inline-block",float:"left"}}>
                    <p style={{display:"block"}}>Email address</p>
                    <input style={{width:"165px"}}className="e-input" value={this.state.email} type="text" name="email" placeholder="Email Address" onChange={(data)=>{this.setState({email:data.target.value})}}/>
                </div>
                <br/>
                <div style={{display:"inline-block", float:"right",marginTop:"-22px"}}>
                    <p style={{display:"block"}}>City</p>
                    <select className="selectOption"  onChange={(data)=>{this.setState({city:data.target.value})}}> 
                         <option value="">City...</option>
                         <option value="CA">Cairo</option>
                         <option value="ALX">Alexandria</option>
                         <option value="ASW">Aswan</option>
                         <option value="SSh">Sharm el Sheikh</option></select>
                </div>
                <br/>
                <div style={{display:"inline-block", float:"left"}}>
                    <p style={{display:"block"}}>Nationality</p>
                    <select style={{width:"165px"}}className="selectOption" onChange={(data)=>{this.setState({nationality:data.target.value})}}> 
                         <option value="">Nationality...</option>
                         <option value="EGY">Egypt</option>
                         <option value="ARE">United Arab Emirates</option>
                         <option value="GBR">United Kingdom</option>
                         <option value="USA">United States</option></select>
                </div>
                <div style={{display:"inline-block", float:"right",marginTop:"-25px"}}>
                    <p style={{display:"block"}}>Country</p>
                    <select className="selectOption" onChange={(data)=>{this.setState({country:data.target.value})}}> 
                         <option value="">Country...</option>
                         <option value="EGY">Egypt</option>
                         <option value="ARE">United Arab Emirates</option>
                         <option value="GBR">United Kingdom</option>
                         <option value="USA">United States</option></select>
                </div>
                <br/>
                <div  style={{display:"inline-block",float:"right",marginTop:"-25px"}}>
                    <p style={{display:"block"}}>Confirm Password</p>
                    <input style={{width:"165px"}}className="e-input" value={this.state.passwordConfirm} type="password" name="passwordConfirm" placeholder="Password..." onChange={(data)=>{this.setState({passConfirm:data.target.value})}}/>
                </div>
                <div  style={{display:"inline-block",float:"left",marginTop:"-25px"}}>
                    <p style={{display:"block"}}>Password</p>
                    <input style={{width:"165px"}}className="e-input" value={this.state.password} type="password" name="password" placeholder="Password..." onChange={(data)=>{this.setState({password:data.target.value})}}/>
                </div>
                <br/>
                <div style={{display:"inline-block",float:"right",marginRight:"5px"}}>
                    <p style={{display:"block"}}>BirthDate</p>
                    <input style={{width:"165px"}} type="date" placeholder="Enter BirthDate"value={this.state.birthdate} onChange={(data)=>{this.setState({birthdate:data.target.value})}} name='birthdate'/>
                </div>
                <div style={{display:"inline-block", float:"right"}}>
                    <p style={{display:"block"}}>Gender</p>
                    <select className="selectOption" onChange={(data)=>{this.setState({gender:data.target.value})}}> 
                         <option value="">Gender...</option>
                         <option value="FEM">Female</option>
                         <option value="MA">Male</option></select>
                </div>
                </nav>
                <br/>
                <br/>
                <nav><Link to="/login"><button onClick={()=>{this.submit()}} className="button_Login">SIGN UP</button> </Link></nav>
                <br/>
                </body>
                </div>
                
         )
    }
   
}
