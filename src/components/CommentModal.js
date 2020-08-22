import React from 'react';
import ReactModal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '40%',
      textAlign             : 'center'
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

 <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">New Comment</h5>


      </div>
      <div className="modal-body">
      <form>
          
          <div className="form-group">
              <div className="row">
            <label htmlFor="message-text" className="col-form-label">Comment:</label>
            </div>
            <textarea style={{width:'95%'}} rows="2" className="body" onChange={props.bodyInputChange} id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={props.saveBlogPost}>Add Comment</button>
        <button type="button" className="btn btn-secondary" onClick={props.closeModal} data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
        </ReactModal>
      </div>
    )
    
}