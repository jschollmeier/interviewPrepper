import React from 'react';
import Example from "./Dropdown"


export default function BlogCard({data, loggedIn, username}) {
    
    console.log(loggedIn);
    return (
        
        <div className="card" style={{margin:"25px", width:"60%", marginRight:"20%", marginLeft:"20%",backgroundColor:"#61DAFB" }}>
            <div className="card-header text-muted" style={{textAlign: "right", whiteSpace:"nowrap"}}>
            <div style={{ marginTop:"-5px", fontSize:"10px"}}>
                    posted by {data.username}<br></br>  at {data.date}
                    </div>
                    

            </div>
            <div className="card-body" style={{textAlign:"left"}}>
                <h5 className="card-title" style={{marginTop:"-40px"}}><u>{data.title}</u></h5>
                
                
                    
                    <p className="card-text" style={{marginLeft:"15px"}}>{data.body}</p>
                        
             </div>
             <div className="card-footer text-muted" style={{textAlign: "right", whiteSpace:"nowrap"}}>
                    
                    <Example 
                        id= {data._id}
                        loggedIn={loggedIn}
                        username={username}
                        
                    />
                    
            </div>
            
        </div>
    )
    
}

