import Header from "./Component/Header/Header"
import Blogs from "./Component/Blogs/Blogs"
import BookMarks from "./Component/BookMarks/BookMarks"
import { useState } from "react"
function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime ] = useState(0);

  const hanleAddBookMarks = blog =>{
    const newBookMark = [...bookmarks, blog];
    setBookMarks(newBookMark);
  }

  const handleMarkAsRead = (id, time) => {
    const newtime = readingTime + time;
    setReadingTime(newtime);
    // --------------
    const bookMarksRemove = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(bookMarksRemove);
  }

  return (
    <div className="container mx-auto">

      <Header></Header>
      <div className="flex gap-x-9 flex-col md:felx-row lg:flex-row">
        <Blogs hanleAddBookMarks={hanleAddBookMarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>
  
    </div>
  )
}

export default App
