import axios from "axios";

export default {
    getBlogs: function() {
        return axios
            .get("/blogs")
            
    },
    saveBlog: function(blogData) {
        return axios.post(process.env.PORT+"/blogs", blogData)
    },
    deleteBlog: function(blogId) {
        return axios.delete(process.env.PORT+"/blogs/"+blogId)
    },
    saveComment: function(commentData) {
        return axios.post(process.env.PORT+"/comments", commentData)
    },
    getComments: function(blogId) {
        return axios.get(process.env.PORT+"/comments/"+blogId)
    },
    deleteComments: function(blogId) {
        return axios.delete(process.env.PORT+"/comments/"+blogId)
    },
    getQuestion: function() {
        return axios.get(process.env.PORT+"/questions")
    },
    getAnswer: function() {
        return axios.get(process.env.PORT+"/answers")
    }
}