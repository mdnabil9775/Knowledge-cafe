import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, SetBlogs] = useState([]);
    useEffect(()=>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data=> SetBlogs(data));
    },[])
    console.log(blogs)

    return (
        <div>
        
        </div>
    );
};

export default Blogs;