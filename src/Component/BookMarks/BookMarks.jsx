import PropTypes from 'prop-types';
import BookMark from './BookMark';

const BookMarks = ({bookmarks}) => {

    return (
        <div className="w-1/3 h-[500px] mt-20 overflow-y-auto bg-gray-300 rounded-xl">
            <h1 className="p-4 text-center text-2xl font-medium">BookMarks: {bookmarks.length}</h1>
            {
                bookmarks.map(bookMark => <BookMark key={bookMark.length}
                bookMark={bookMark}
                ></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes={
    bookmarks: PropTypes.object
}
export default BookMarks;