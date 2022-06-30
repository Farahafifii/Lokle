import { Link } from "react-router-dom";
import React from "react";
//import { useState,useEffect } from "react";

export default class Home extends React.Component {
    constructor(){
        super();
        this.state={
            mobile:"",
            password:""
        }
    }

    submit(){
        console.log(this.state);
        let url= "https://www.getpostman.com/collections/4460c9c18f0d3b6c4f51";
        let data = this.state;
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)
             }).then((result)=>{
                result.json().then((resp)=>{
                    console.warn(resp);
             })
            })
    }
    
    render() {
         return ( 
            <div className="login">
                <br/>
                <body>
                <div style={{marginTop:"-20px",display:"inline-block"}}><a href="#" class="menu example5" style={{display:"inline-block",float:"left"}}><span></span></a><h1 style={{fontSize:"30px",display:"inline-block",marginTop:"20px",marginLeft:"-25px",float:"left"}}>Lokle</h1></div>
                <br/>
                <div>
                  <form>
                    <input type= "search" placeholder = "Search for Experiences" style={{borderRadius:"15px",width:"330px",marginLeft:"25px",marginTop:"10px",height:"42px",fill:"white"}}/>
                    <button className="buttonfilter" type="submit">Filter</button>
                  </form>
                  <br/>
                  <div style={{marginLeft:"25px",marginTop:"10px"}}>
                  <h style={{fontSize:"20px",flex:"left",display:"block",color:"white",fontWeight:"bold"}}>Our</h>
                  <h style={{fontSize:"20px",display:"block",color:"rgb(127, 255, 253)",fontWeight:"bolder"}}>Experiences</h>
                  <form><span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot" style={{width:"35px",borderRadius:"22px"}}></span>
                        <Link to="/Home" className="text-LinkForgot" style={{fontWeight:"bold",color:"rgb(127, 255, 253)"}}>Show all</Link>
                  </form>
                  <br/>
                  <form >
                    <img src="./egypt.jpg" alt ="The Grand Egyptian Museum" width="275" height="275" style={{borderRadius:"22px",border:"1px solid",borderColor:"rgb(127, 255, 253)"}}/>
                    <p style={{marginTop:"-175px",fontWeight:"bolder",fontSize:"20px", marginLeft:"10px"}}>The Grand <br/> Egyptian Museum</p>
                    <p style={{color:"rgb(280, 100, 50)",fontWeight:"bold",marginLeft:"10px"}}>Starts from:</p>
                    <p style={{fontSize:"20px",fontWeight:"bolder",marginTop:"-7px",marginLeft:"10px"}}>100 L.E</p>
                  </form>
                  
                  </div>
                </div>
               </body>
                </div>
                
         )
    }
   
}


