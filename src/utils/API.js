import axios from "axios";

export default {
    getBlogs: function() {
        return axios
            .get("/blogs")
            
    },
    saveBlog: function(blogData) {
        return axios.post("/blogs", blogData)
    },
    saveComment: function(commentData) {
        return axios.post("/comments", commentData)
    },
    getComments: function(blogId) {
        return axios.get("/comments/"+blogId)
    }

}