import React from 'react';
import Example from "./Dropdown"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function BlogCard({data, loggedIn, username, deleteBlogPost}) {
    
    
    return (
        
        <div className="card" style={{margin:"25px", width:"60%", marginRight:"20%", marginLeft:"20%",backgroundColor:"#61DAFB" }}>
            

            
            <div className="card-body" style={{textAlign:"left"}}>
                <div style={{textAlign:"right",marginTop:"-10px"}}>
            <button className="btn btn-primary btn-sm" title="delete post" onClick={function(){deleteBlogPost(data._id)}} style={{padding:"0",border:"none",background:"none"}}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
                <h5 className="card-title" style={{marginTop:"-20px"}}><u>{data.title}</u></h5>
                
                
                    
                    <p className="card-text" style={{marginLeft:"15px"}}>{data.body}</p>
                        
             </div>
             <div className="card-footer text-muted" style={{textAlign: "right", whiteSpace:"nowrap"}}>
                   
             <div style={{marginLeft:"-10px", marginBottom:"-35px", fontSize:"10px", textAlign:"left"}}>
                
                posted by {data.username}<br></br>  at {data.date} 
                </div>

                    <Example 
                        id= {data._id}
                        loggedIn={loggedIn}
                        username={username}
                        
                    />
                   
                    
                    

                    
                    
            </div>
            
        </div>
    )
    
}

