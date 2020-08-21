import axios from "axios";

export default {
    getBlogs: function() {
        return axios
            .get("/blogs")
            
    },
    saveBlog: function(blogData) {
        return axios.post("/blogs", blogData)
    }
}