import PropTypes from 'prop-types';
import BookMark from './BookMark';

const BookMarks = ({ bookmarks, readingTime }) => {

    return (
        <div className='lg:w-1/3 sm:w-full sm:container sm:mx-auto'>

            <div className='mt-20 bg-blue-300 rounded-xl py-10 shadow-xl shadow-gray-400'>
                <h1 className='text-3xl font-bold text-center text-slate-800 '>Spent time on read: {readingTime} min.</h1>
            </div>

<div className=" h-[450px] mt-5  bg-gray-300 rounded-xl shadow-xl shadow-gray-500">
            <h1 className="p-4 text-center text-3xl font-bold">BookMarks: {bookmarks.length}</h1>
            <div className="  bg-gray-300 rounded-xl mb-3 pb-3">
            
            <hr />
            {
                bookmarks.map((bookMark, idx) => <BookMark key={idx}
                bookMark={bookMark}
                ></BookMark>)
            }
        </div>
        </div>

        </div>
    );
};
BookMarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;