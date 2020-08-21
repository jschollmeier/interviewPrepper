import React, { Component } from 'react';
import CommentCard from "./CommentCard"
import API from "../utils/API"
import CommentModal from './CommentModal';



export default class DropDown extends Component{
    state ={
        comments:[],
        isOpen: false,
        open: false,
        body: ""
    }
    toggle = () =>{
    this.setState({
        isOpen: !this.state.isOpen
    });
    this.loadComments();

    

    
    }
    loadComments = () => {
        API.getComments(this.props.id)
            .then(res => 
                 
                
                this.setState({comments : res.data})
                )
            .catch(err => console.log(err));
    };


    addComment = () =>{
        API.saveComment({
            comment: this.state.body,
            username: this.props.username,
            blogId: this.props.id

        })
        .then(res => this.loadComments())
        .then(this.closeModal())
        .catch(err => console.log(err))
    }
    openup = () => {
        if (this.props.loggedIn){
        this.setState({open:true})
        }else{
            this.setState({
                redirectTo: '/login'
            })
            alert("Please log in to add a post")
    
        }
    }
    bodyInputChange = (event) => {
        this.setState({body: event.target.value})
    }
    closeModal = () => {
        this.setState({open:false})
    }
    

    render(){
        if(this.state.isOpen)
        {
            const commenter = this.state.comments;
            return(
                <div>
            <button className="btn btn-primary btn-sm" onClick={this.toggle} style={{marginLeft:"5px",display:"inline-block"}}>Comments</button> 
        <div style={{display:"block"}}>
            
            
        {commenter.map((commentObj, i) => <CommentCard key={i} data={commentObj} /> )}
        <CommentModal 
        open = {this.state.open}
        openUp = {this.openup}
        bodyInputChange = {this.bodyInputChange}
        saveBlogPost = {this.addComment}
        closeModal = {this.closeModal}
        />

        


        </div>
        </div>

            )
        }
        else{
            return(
                <div>
                 <button className="btn btn-primary btn-sm" onClick={this.toggle} style={{marginLeft:"5px",display:"inline-block"}}>Comments</button> 
                <div style={{display:"none"}}>
                 <div className="card" style={{margin:"25px", width:"60%", marginRight:"20%", marginLeft:"20%",backgroundColor:"White" }}>
                 <div className="card-header text-muted" style={{textAlign: "right", whiteSpace:"nowrap"}}>
                    <div style={{ marginTop:"-5px", fontSize:"10px"}}>
                            posted by me<br></br>  at 
                        </div>
                    

                </div>
                    <div className="card-body" style={{textAlign:"left"}}>
                
                
                
                    
                         <p className="card-text" style={{marginLeft:"15px"}}>this is a comment</p>

                     </div>
             
            
             </div>
            



                </div>
                </div>




    )}
}

}