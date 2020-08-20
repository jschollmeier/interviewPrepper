import React, { Component } from 'react';
import BlogCard from './Blog-Card';

export default class Blog extends Component {

    state = {
        
    }

    render() {
        return (
            <div>
            <BlogCard />
            <BlogCard /> 
            <BlogCard />
            <BlogCard /> 
            </div>
        );
    }


}