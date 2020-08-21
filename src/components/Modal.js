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


export default function Modal(props) {
    
    return (
        <div>
        <button className="btn" style={{backgroundColor:"darkgray"}} onClick={props.openUp}>New Post</button>
        <ReactModal
          isOpen={props.open}
          ariaHideApp={false}
        //   onAfterOpen={afterOpenModal}
        //   onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

 <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">New Post</h5>


      </div>
      <div className="modal-body">
      <form>
          <div className="form-group">
              <div className="row">
            <label htmlFor="recipient-name" className="col-form-label">Title</label>
            </div>
            <input type="text" className="form-control" onChange={props.titleInputChange} id="title"></input>
          </div>
          <div className="form-group">
              <div className="row">
            <label htmlFor="message-text" className="col-form-label">Post:</label>
            </div>
            <textarea style={{width:'95%'}} rows="5" className="body" onChange={props.bodyInputChange} id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={props.saveBlogPost}>Save changes</button>
        <button type="button" className="btn btn-secondary" onClick={props.closeModal} data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
        </ReactModal>
      </div>
    )
    
}