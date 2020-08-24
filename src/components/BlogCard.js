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

    // const date = new Date(data.date)
    function sqlToJsDate(sqlDate) {
        //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
        var sqlDateArr1 = sqlDate.split("-");
        //format of sqlDateArr1[] = ['yyyy','mm','ddThh:mm:msZ']
        var sYear = sqlDateArr1[0];
        var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
        var sqlDateArr2 = sqlDateArr1[2].split("T");
        //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.msZ']
        var sDay = (Number(sqlDateArr2[0])).toString();
        var sqlDateArr3 = sqlDateArr2[1].split(":");
        //format of sqlDateArr3[] = ['hh','mm','ss.msZ']
        var sHour = sqlDateArr3[0];
        var sMinute = sqlDateArr3[1];
        var sqlDateArr4 = sqlDateArr3[2].split(".");
        //format of sqlDateArr4[] = ['ss','msZ']
        var sSecond = sqlDateArr4[0];
        //var sMillisecond = sqlDateArr4[1];
        var ddate = new Date(sYear, sMonth, sDay, sHour, sMinute, sSecond);
        //ddate.setTime(ddate.getTime() - (ddate.getTimezoneOffset()*60*1000))
        //console.log(ddate)
      
        return ddate;
      }

      var datey = sqlToJsDate(data.date)
    return (
        
        <div className="card border-info" style={{borderRadius:"25px", margin:"25px", width:"70%", marginRight:"15%", marginLeft:"10%",backgroundImage: `url(${bkg})`, borderStyle: "outset",borderColor:"#778899", borderWidth:"2px" }}>
            

            
            <div className="card-body" style={{textAlign:"left"}}>
                <div style={{textAlign:"right",marginTop:"-10px"}}>
            <button className="btn btn-primary btn-sm" onMouseOver={function(event){mouseOver(event)}} onMouseLeave={function(event){mouseOff(event)}} title="delete post" onClick={function(){deleteBlogPost(data._id)}} style={{padding:"0",border:"none",background:"none", color:"#191970"}}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
                <h5 className="card-title" style={{marginTop:"-20px"}}><u>{data.title}</u></h5>
                
                
                    
                    <p className="card-text" style={{marginLeft:"15px"}}>{data.body}</p>
                        
             </div>
             <div className="card-footer text-muted" style={{textAlign: "right", whiteSpace:"nowrap"}}>
                   
             <div style={{marginLeft:"-10px", marginBottom:"-35px", fontSize:"10px", textAlign:"left"}}>
                
                posted by {data.username}<br></br>  at {datey.toLocaleTimeString()} on {datey.toLocaleDateString()}
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

