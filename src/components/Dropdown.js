import React, { Component } from 'react';
import CommentCard from "./CommentCard"
import API from "../utils/API"
import CommentModal from './CommentModal';
import bkg from './beige-tiles.png';



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

    changeBackground(e) {
        e.target.style.background = '#2F4F4F'
        
      }
    changeBackgroundBack(e) {
        e.target.style.background = '#5F9EA0'
        
      }
    

    render(){
        if(this.state.isOpen)
        {
            const commenter = this.state.comments;
            return(
                <div>
            <button className="btn btn-sm" onMouseOver={this.changeBackground} onMouseLeave={this.changeBackgroundBack} onClick={this.toggle} style={{marginLeft:"5px", color:"white", backgroundColor:"#5F9EA0", borderRadius:"25px", borderColor:"#7FFFD4"}}>Comments</button> 
        <div style={{display:"block"}}>
            
        <div style={{backgroundImage: `url(${bkg})`, float:'right', width: '95%', margin:"20px", borderRadius:"25px", borderStyle: "outset", borderColor:"#FAFAD2"}}>
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
        </div>

            )
        }
        else{
            return(
                <div>
                 <button className="btn btn-sm" onMouseOver={this.changeBackground} onMouseLeave={this.changeBackgroundBack} onClick={this.toggle} style={{marginLeft:"5px", color:"white", backgroundColor:"#5F9EA0", borderRadius:"25px", borderColor:"#7FFFD4"}}>Comments</button> 
                
                </div>




    )}
}

}