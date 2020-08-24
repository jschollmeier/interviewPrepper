import React from 'react';
import ReactModal from 'react-modal';
import bkg from "./ice_age_@2X.png";
import bkg2 from "./vintage-wallpaper.png";


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '40%',
      textAlign             : 'center',
      background            : `none`,
      border                : 'none'
    }
  };


export default function CommentModal(props) {
    
  function changeBackground(e) {
    e.target.style.background = '#2F4F4F'
    
  }
  function changeBackgroundBack(e) {
    e.target.style.background = '#5F9EA0'
    
  }


    return (
        <div>
        <button onMouseOver={function(event){changeBackground(event)}} onMouseLeave={function(event){changeBackgroundBack(event)}} className="btn btn-sm" style={{color:"white", backgroundColor:"#5F9EA0", borderRadius:"25px", marginBottom:"5px", borderColor:"#7FFFD4", marginRight:"5px"}} onClick={props.openUp}>Add Comment</button>
        <ReactModal
          isOpen={props.open}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example Modal"
        >

 <div className="modal-dialog" role="document" style={{minWidth:"100%", borderRadius: "25px"}}>
    <div className="modal-content" style={{backgroundImage:`url(${bkg})`, minWidth:"100%", borderRadius:"25px"}}>
      <div className="modal-header" style={{backgroundImage : `url(${bkg2})`,color:"white", paddingBottom:"20px", borderRadius:"25px"}}>
        <h5 className="modal-title">New Comment</h5>


      </div>
      <div className="modal-body">
      <form>
          
          <div className="form-group">
              <div className="row">
            <label htmlFor="message-text" className="col-form-label">Comment:</label>
            </div>
            <textarea style={{width:'95%', borderRadius:'25px'}} rows="2" className="body" onChange={props.bodyInputChange} id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" onMouseOver={function(event){changeBackground(event)}} onMouseLeave={function(event){changeBackgroundBack(event)}} style={{backgroundColor:"#5F9EA0", borderRadius:"25px", borderColor:"#7FFFD4", width:'100px', marginLeft:'8px'}} onClick={props.saveBlogPost}>Comment</button>
        <button type="button" className="btn btn-secondary" style={{color:"#5F9EA0", borderColor:"#7FFFD4", borderRadius:"25px"}} onClick={props.closeModal} data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
        </ReactModal>
      </div>
    )
    
}