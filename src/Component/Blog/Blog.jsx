import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, hanleAddBookMarks, handleMarkAsRead }) => {
    const { id, cover, title, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='p-4 shadow-lg rounded-xl my-6'>
            <img className='w-full h-[450px] rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center'>
            <div className='mt-8 flex items-center gap-x-6'>
                <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                <div>
                    <h1 className="font-bold">{author}</h1>
                    <p><small className='text-[#AFAFAF]'>{posted_date}</small></p>
                </div>
            </div>
            <div className='flex gap-x-2'>
                <p className='text-[#AFAFAF]'>{reading_time} Min read </p>
                <button onClick={()=>hanleAddBookMarks(blog)} className='text-2xl text-orange-400'><FaBookmark></FaBookmark></button>
            </div>
            </div>

            <h1 className='text-4xl font-bold my-5'>{title}</h1>
            {
                hashtags.map((hash, idx)=><span key={idx} className='mb-5 hover:text-blue-500'><a href="">#{hash}</a></span>)
            }
            <br />
            <button onClick={()=>handleMarkAsRead(id, reading_time)} className='pt-3 font-bold text-blue-800 underline'>Mark as Read</button>
            <hr className='my-5' />
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    hanleAddBookMarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;