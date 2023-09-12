import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const BookMark = ({bookMark}) => {
    const {author, author_img, title} = bookMark;
    return (
        <div className='px-8 bg-slate-200 mx-8 pt-2 my-3 rounded-xl'>
            <div className='mt-8 flex items-center gap-x-6'>
                <img className='w-10 h-10 rounded-full' src={author_img} alt="" />
                <div>
                    <h1 className="font-bold">{author}</h1>
                </div>
                <FaBookmark></FaBookmark>
            </div>
            <h1 className='text-2xl font-bold mt-4 pb-7'>{title}</h1>
        </div>
    );
};
BookMark.proptypes={
    bookMark: PropTypes.object
}
export default BookMark;