import React, { Component } from 'react';
import BlogCard from './BlogCard';
import Modal from './Modal';
import API from "../utils/API"
import { Redirect } from 'react-router-dom'




export default class Blog extends Component {

    state = {
        blogs: [],
        title: "",
        body: "",
        id: "test",
        open: false,
        redirectTo: null


    }
    componentDidMount(){
        
        
        this.loadBlogs()
        
        
        
    }
    
    
loadBlogs = () => {
    API.getBlogs()
        .then(res => 
             
            
            this.setState({blogs : res.data})
            )
        .catch(err => console.log(err));
    
};


openup = () => {
    if (this.props.loggedIn){
    this.setState({open:true})
    }else{
        this.setState({
            redirectTo: '/'
        })
        alert("Please log in to add a post")

    }
}

closeModal = () => {
    this.setState({open:false})
}

saveBlogPost = () => {

    console.log(this.state.title);
    console.log(this.state.body);
    console.log(this.props.username);
    const holdUserName = this.props.username;
    API.saveBlog({
        title: this.state.title,
        body: this.state.body,
        username: holdUserName
    })
        .then(res => this.loadBlogs())
        .then(this.closeModal())
        .catch(err => console.log(err));
        
}

deleteBlogPost = (blogId) => {
    API.deleteBlog(blogId)
    .then(res => this.loadBlogs())
    .catch(err => console.log(err));

    API.deleteComments(blogId)
    .then(res => this.loadBlogs())
    .catch(err => console.log(err));

}

titleInputChange = (event) => {
    
    this.setState({title: event.target.value})
}
bodyInputChange = (event) => {
    this.setState({body: event.target.value})
}

render(){
    if (this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else{
    
        
    const blogger = this.state.blogs;
    console.log(this.state.loggedIn)
    return (
        <div>
            <h1>Blog</h1>
            

            <Modal
            open = {this.state.open}
            openUp = {this.openup}
            titleInputChange = {this.titleInputChange}
            bodyInputChange = {this.bodyInputChange}
            saveBlogPost = {this.saveBlogPost}
            closeModal = {this.closeModal}
            />
            {blogger.map((blogObj, i) =>
            <BlogCard 
            key={i} 
            username={this.props.username} 
            loggedIn={this.props.loggedIn}
            deleteBlogPost={this.deleteBlogPost} 
            data={blogObj} 
            /> 
            )}
            
            
            
            

        </div>
    )
    }
}
}