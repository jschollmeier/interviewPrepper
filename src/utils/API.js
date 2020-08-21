import axios from "axios";

export default {
    getBlogs: function() {
        return axios
            .get("/blogs")
            
    },
    saveBlog: function(blogData) {
        return axios.post("/blogs", blogData)
    },
    deleteBlog: function(blogId) {
        return axios.delete("/blogs/"+blogId)
    },
    saveComment: function(commentData) {
        return axios.post("/comments", commentData)
    },
    getComments: function(blogId) {
        return axios.get("/comments/"+blogId)
    },
    deleteComments: function(blogId) {
        return axios.delete("/comments/"+blogId)
    },
    getQuestion: function() {
        return axios.get("/questions")
    }
}