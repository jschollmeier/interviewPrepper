import React from 'react';



export default function CommentCard({data}) {
    
    return(
    <div className="card" style={{margin:"25px", width:"60%", marginRight:"20%", marginLeft:"20%",backgroundColor:"White" }}>
            <div className="card-header text-muted" style={{textAlign: "left", whiteSpace:"nowrap"}}>
                    
                    <div style={{ marginTop:"-5px", fontSize:"10px"}}>
                        comment by {data.username}<br></br>  {data.date}
                    </div>
                    
            </div>
            <div className="card-body" style={{textAlign:"left"}}>
                
                    <p className="card-text" style={{marginLeft:"15px", marginTop:"-10px"}}>{data.comment}</p>
                        
             </div>
             
            
        </div>
    )
}