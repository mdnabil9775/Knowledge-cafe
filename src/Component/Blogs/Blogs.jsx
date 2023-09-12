import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({hanleAddBookMarks}) => {
    const [blogs, SetBlogs] = useState([]);
    useEffect(()=>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data=> SetBlogs(data));
    },[])
    console.log(blogs)

    return (
        <div className="w-2/3 my-10">
        
        {
            blogs.map(blog=> <Blog hanleAddBookMarks={hanleAddBookMarks} key={blogs.id} blog={blog}></Blog>)
        }
        </div>
    );
};

Blogs.propTypes={
    hanleAddBookMarks: PropTypes.func
}
export default Blogs;