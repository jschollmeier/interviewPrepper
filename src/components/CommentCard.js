import React from 'react';



export default function CommentCard({data}) {


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
    
    return(
    <div className="card" style={{margin:"25px", width:"90%", marginLeft:"6%", background:"none", borderRadius:"25px", borderStyle: "outset", borderColor:"#FAFAD2"}}>
            <div className="card-header text-muted" style={{textAlign: "left", whiteSpace:"nowrap"}}>
                    
                    <div style={{ marginTop:"-5px", fontSize:"10px"}}>
                        comment by {data.username}<br></br> at {datey.toLocaleTimeString()} on {datey.toLocaleDateString()}
                    </div>
                    
            </div>
            <div className="card-body" style={{textAlign:"left"}}>
                
                    <p className="card-text" style={{marginLeft:"15px", marginTop:"-10px"}}>{data.comment}</p>
                        
             </div>
             
            
        </div>
    )
}