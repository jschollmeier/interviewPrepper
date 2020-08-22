import React from 'react';
import DropDown from "./Dropdown"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import bkg from "./ice_age_@2X.png"


export default function BlogCard({data, loggedIn, username, deleteBlogPost}) {
    
    function mouseOver(e){
        e.target.style.color = 'red'
    }
    function mouseOff(e){
        e.target.style.color = '#191970'
    }
    return (
        
        <div className="card border-info rounded" style={{borderRadius:"25px", margin:"25px", width:"70%", marginRight:"15%", marginLeft:"10%",backgroundImage: `url(${bkg})`, borderStyle: "outset",borderColor:"#778899", borderWidth:"2px" }}>
            

            
            <div className="card-body" style={{textAlign:"left"}}>
                <div style={{textAlign:"right",marginTop:"-10px"}}>
            <button className="btn btn-primary btn-sm" onMouseOver={function(event){mouseOver(event)}} onMouseLeave={function(event){mouseOff(event)}} title="delete post" onClick={function(){deleteBlogPost(data._id)}} style={{padding:"0",border:"none",background:"none", color:"#191970"}}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
                <h5 className="card-title" style={{marginTop:"-20px"}}><u>{data.title}</u></h5>
                
                
                    
                    <p className="card-text" style={{marginLeft:"15px"}}>{data.body}</p>
                        
             </div>
             <div className="card-footer text-muted" style={{textAlign: "right", whiteSpace:"nowrap"}}>
                   
             <div style={{marginLeft:"-10px", marginBottom:"-35px", fontSize:"10px", textAlign:"left"}}>
                
                posted by {data.username}<br></br>  at {data.date} 
                </div>
                

                    <DropDown 
                        id= {data._id}
                        loggedIn={loggedIn}
                        username={username}
                        
                    />
                   
                    
                    

                    
                    
            </div>
            
        </div>
    )
    
}

